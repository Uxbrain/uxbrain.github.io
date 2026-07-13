const http = require('http');
const https = require('https');

const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const PORT = process.env.PORT || 3000;

// Preference order for chat models. The backend only ever uses models that
// Groq reports as currently available, so if the top choice is decommissioned
// it transparently falls back to the next one. Add/reorder freely.
const MODEL_PREFERENCE = [
  'llama-3.3-70b-versatile',
  'llama-3.1-8b-instant',
  'llama3-70b-8192',
  'llama3-8b-8192',
  'gemma2-9b-it',
  'mixtral-8x7b-32768'
];

// Cache of live model IDs from Groq, refreshed periodically so we react to
// decommissions without a redeploy.
let availableModelsCache = { ids: [], fetchedAt: 0 };
const MODELS_TTL_MS = 10 * 60 * 1000; // 10 minutes

// --- Small promise helpers around https ---------------------------------

function groqGet(path) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.groq.com',
      path,
      method: 'GET',
      headers: { 'Authorization': `Bearer ${GROQ_API_KEY}` }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.setTimeout(10000, () => { req.destroy(new Error('Groq models request timed out')); });
    req.end();
  });
}

function groqChat(payload) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(payload);
    const req = https.request({
      hostname: 'api.groq.com',
      path: '/openai/v1/chat/completions',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.setTimeout(20000, () => { req.destroy(new Error('Groq chat request timed out')); });
    req.write(body);
    req.end();
  });
}

// --- Model discovery -----------------------------------------------------

async function getAvailableModelIds() {
  const now = Date.now();
  if (availableModelsCache.ids.length && (now - availableModelsCache.fetchedAt) < MODELS_TTL_MS) {
    return availableModelsCache.ids;
  }
  try {
    const { status, body } = await groqGet('/openai/v1/models');
    if (status !== 200) {
      console.error('Could not list Groq models, status', status, body.slice(0, 200));
      return availableModelsCache.ids; // fall back to whatever we had (possibly empty)
    }
    const parsed = JSON.parse(body);
    const ids = (parsed.data || []).map(m => m.id);
    availableModelsCache = { ids, fetchedAt: now };
    console.log('Discovered', ids.length, 'available Groq models');
    return ids;
  } catch (e) {
    console.error('Error fetching Groq models:', e.message);
    return availableModelsCache.ids;
  }
}

// Build the ordered list of models to try: preferred ones that are live first,
// then any remaining live models as a last resort.
function buildCandidateModels(availableIds) {
  if (!availableIds.length) {
    // No discovery available (e.g. models endpoint blocked) — just try the
    // preference list as-is and let per-model fallback sort it out.
    return MODEL_PREFERENCE.slice();
  }
  const preferredLive = MODEL_PREFERENCE.filter(id => availableIds.includes(id));
  const rest = availableIds.filter(id => !preferredLive.includes(id));
  return [...preferredLive, ...rest];
}

// --- Core: ask Groq, walking the candidate list on model errors ----------

async function askGroq(query) {
  const systemPrompt = 'You are a helpful study buddy for a design learning platform with 1,590 product design concepts. Help users understand design concepts clearly and concisely. If asked about a specific design topic, explain it in 2-3 sentences with practical examples. Be encouraging and friendly.';

  const availableIds = await getAvailableModelIds();
  const candidates = buildCandidateModels(availableIds);
  console.log('Candidate models:', candidates.slice(0, 5).join(', '), candidates.length > 5 ? `(+${candidates.length - 5} more)` : '');

  let lastError = 'No models available';

  for (const model of candidates) {
    const payload = {
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: query }
      ],
      max_tokens: 300,
      temperature: 0.7
    };

    let result;
    try {
      const { status, body } = await groqChat(payload);
      result = JSON.parse(body);

      if (status === 200 && result.choices && result.choices[0]) {
        const text = result.choices[0].message.content;
        console.log(`Success with model "${model}"`);
        return { ok: true, text, model };
      }

      const errMsg = result.error ? result.error.message : `HTTP ${status}`;
      const errCode = result.error ? result.error.code : '';
      lastError = errMsg;
      console.warn(`Model "${model}" failed: ${errCode || ''} ${errMsg}`);

      // Only fall through to the next model for model-availability problems.
      // For auth / rate-limit / bad-request errors, stop and report.
      const isModelProblem =
        errCode === 'model_decommissioned' ||
        errCode === 'model_not_found' ||
        /decommission|not found|does not exist/i.test(errMsg);
      if (!isModelProblem) {
        return { ok: false, error: errMsg, status };
      }
      // Drop this model from cache so we stop trying it next time.
      availableModelsCache.ids = availableModelsCache.ids.filter(id => id !== model);
    } catch (e) {
      lastError = e.message;
      console.warn(`Model "${model}" threw: ${e.message}`);
      // network/parse error — try the next candidate
    }
  }

  return { ok: false, error: `All candidate models failed. Last error: ${lastError}` };
}

// --- HTTP server ---------------------------------------------------------

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Health check + live model list (handy for debugging in the browser)
  if (req.method === 'GET' && (req.url === '/' || req.url === '/health')) {
    getAvailableModelIds().then(ids => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        status: 'ok',
        message: 'Chatbot API is running',
        apiKeyConfigured: !!GROQ_API_KEY,
        availableModels: ids,
        preferred: buildCandidateModels(ids)[0] || null
      }));
    });
    return;
  }

  if (req.method !== 'POST' || req.url !== '/chat') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found. Use POST /chat' }));
    return;
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', async () => {
    try {
      if (!GROQ_API_KEY) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'GROQ_API_KEY not configured on the server.' }));
        return;
      }

      const { query } = JSON.parse(body || '{}');
      if (!query || !query.trim()) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing query' }));
        return;
      }

      console.log('=== Chat request:', JSON.stringify(query).slice(0, 120));
      const result = await askGroq(query);

      if (result.ok) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ text: result.text, model: result.model }));
      } else {
        // Surface the real reason so the frontend can decide what to show.
        res.writeHead(502, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: result.error }));
      }
    } catch (e) {
      console.error('Handler error:', e.message);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Chatbot API server running on port ${PORT}`);
  console.log('GROQ_API_KEY configured:', !!GROQ_API_KEY);
  // Warm the model cache on startup so the first request is fast.
  getAvailableModelIds().then(ids => {
    if (ids.length) console.log('Startup: preferred model ->', buildCandidateModels(ids)[0]);
  });
});
