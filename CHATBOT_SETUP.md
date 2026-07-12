# DesignOS Chatbot Setup Guide

## Quick Start (5 minutes)

### 1. Get Groq API Key (Free, No Credit Card)

1. Go to [https://console.groq.com/keys](https://console.groq.com/keys)
2. Sign up with email (takes 30 seconds)
3. Copy your API key (looks like `gsk_...`)

### 2. Run the Chatbot Backend Locally

```bash
# In the project directory
GROQ_API_KEY=gsk_your_key_here node chatbot-api.js
```

The server will start on `http://localhost:3000`

### 3. Test It

Open your browser to `http://localhost:3000` - you should see "Chatbot API server running on port 3000"

Then open your DesignOS app (localhost or GitHub Pages) and try asking the chatbot a question!

---

## Deploy to Free Hosting (Optional)

### Option A: Render (Recommended - Easiest)

1. Push this repo to GitHub
2. Go to [https://render.com](https://render.com)
3. Click "New Web Service"
4. Connect your GitHub repo
5. Set build command: `npm install` (or just leave empty)
6. Set start command: `node chatbot-api.js`
7. Add environment variable:
   - Key: `GROQ_API_KEY`
   - Value: Your Groq key from step 1
8. Click "Deploy"
9. Copy your Render URL (looks like `https://designos-chatbot.onrender.com`)

### Option B: Railway

1. Go to [https://railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Connect repo
4. Add environment variable `GROQ_API_KEY`
5. Railway auto-detects Node.js and starts the server
6. Copy your Railway URL

### Option C: Vercel (Works but needs modification)

Vercel requires serverless functions. Use this instead:

```bash
# Create /api/chat.js with the Groq call logic
# Then deploy with `vercel`
```

---

## Update Your App Config

Once your backend is running, update app.js:

**For local development:**
```javascript
const apiUrl = 'http://localhost:3000';
```

**For production (Render/Railway):**
```javascript
const apiUrl = 'https://your-render-url.onrender.com';
```

Or set it via environment variable in your build process.

---

## Groq Rate Limits (Free Tier)

- 30 requests per minute
- 6,000 tokens per minute
- 1,000 requests per day

This is plenty for a learning platform. Each question = ~1 request.

---

## Troubleshooting

**"GROQ_API_KEY not configured"**
- Make sure you set the environment variable
- On Render/Railway, check the environment variables in settings

**"Failed to parse Groq response"**
- Your API key might be invalid
- Check you copied the full key

**Chatbot falls back to local search**
- Backend is down or unreachable
- Check your URL is correct in app.js
- Check browser console for errors

---

## Free Alternative: Ollama

If you want to self-host without cloud APIs:

```bash
# Install Ollama from ollama.ai
# Then run:
ollama pull mistral
ollama serve
```

Update the backend to call local Ollama instead of Groq (easy 2-line change).

---

## Questions?

Check Groq docs: [https://console.groq.com/docs/quickstart](https://console.groq.com/docs/quickstart)
