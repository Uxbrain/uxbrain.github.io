const http = require('http');
const https = require('https');

const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Health check endpoint
  if (req.method === 'GET' && (req.url === '/' || req.url === '/health')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', message: 'Chatbot API is running' }));
    return;
  }

  if (req.method !== 'POST' || req.url !== '/chat') {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found. Use POST /chat' }));
    return;
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', async () => {
    try {
      if (!GROQ_API_KEY) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: 'GROQ_API_KEY not configured' }));
        return;
      }

      const { query } = JSON.parse(body);
      if (!query) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'Missing query' }));
        return;
      }

      const systemPrompt = `You are a helpful study buddy for a design learning platform with 1,590 product design concepts. Help users understand design concepts clearly and concisely. If asked about a specific design topic, explain it in 2-3 sentences with practical examples. Be encouraging and friendly.`;

      const groqRequest = {
        model: 'mixtral-8x7b-32768',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: query }
        ],
        max_tokens: 300,
        temperature: 0.7
      };

      const options = {
        hostname: 'api.groq.com',
        path: '/openai/v1/chat/completions',
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      };

      const groqReq = https.request(options, (groqRes) => {
        let data = '';
        groqRes.on('data', chunk => data += chunk);
        groqRes.on('end', () => {
          try {
            const result = JSON.parse(data);
            const answer = result.choices?.[0]?.message?.content || 'I could not generate a response.';
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ text: answer }));
          } catch (e) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: 'Failed to parse Groq response' }));
          }
        });
      });

      groqReq.on('error', (err) => {
        console.error('Groq error:', err);
        res.writeHead(500);
        res.end(JSON.stringify({ error: err.message }));
      });

      groqReq.write(JSON.stringify(groqRequest));
      groqReq.end();

    } catch (e) {
      console.error('Error:', e);
      res.writeHead(500);
      res.end(JSON.stringify({ error: e.message }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Chatbot API server running on port ${PORT}`);
  console.log(`Make sure GROQ_API_KEY environment variable is set`);
});
