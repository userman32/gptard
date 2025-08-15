# gptard.wtf - All-in-One AI Platform

🚀 **Live Site**: [https://gptard.vercel.app](https://gptard.vercel.app)

A modern, luxury AI platform that supports multiple AI models with crypto payments.

## ✨ Features

- **25+ AI Models**: GPT-5, Claude 4, Gemini Ultra, Grok-2, Llama 3, and more
- **Crypto Payments**: Buy credits with SOL/USDC
- **Real Wallet Integration**: MetaMask connection
- **Luxury UI**: Modern, responsive design with glass effects
- **Credit System**: Pay-per-use model with crypto
- **Real AI Integration**: GPT-3.5 Turbo with OpenAI API

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Web3**: MetaMask integration
- **Backend**: Node.js, Express
- **AI**: OpenAI API
- **Deployment**: Vercel

## 🚀 Quick Start

### Windows Users (Recommended)
1. Double-click `start.bat` to automatically start both server and frontend
2. Or run manually: `npm run dev:full`

### Manual Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   - Copy `env.example` to `.env`
   - Add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Start the development environment**
   ```bash
   npm run dev:full
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start frontend only
npm run server       # Start backend only
npm run dev:full     # Start both frontend and backend
npm run dev:server   # Start backend with auto-reload
npm run dev:client   # Start frontend only

# Production
npm run build        # Build for production
npm run preview      # Preview production build
npm run deploy       # Deploy to Vercel
```

### Deployment

The site is automatically deployed to Vercel when changes are pushed to the main branch.

## 💳 Credit System

- **1 Credit = $0.01 USD**
- **Payment Methods**: SOL, USDC
- **Wallet Required**: MetaMask connection needed for purchases
- **Real AI**: GPT-3.5 Turbo responses via OpenAI API

## 🔗 Links

- **Live Site**: [https://gptard.vercel.app](https://gptard.vercel.app)
- **GitHub**: [https://github.com/userman32/gptard](https://github.com/userman32/gptard)
- **Token Address**: GPTARD1234567890abcdef

## 🔧 Troubleshooting

### "Site is unsafe" warning
- This is normal for local development
- The site uses HTTP for local development
- For production, use HTTPS

### API connection issues
- Ensure the backend server is running on port 3002
- Check that your OpenAI API key is set in `.env`
- Verify the proxy configuration in `vite.config.js`

### Port conflicts
- Backend runs on port 3002
- Frontend runs on port 3003
- Change ports in `.env` and `vite.config.js` if needed

### Development URLs
- Backend: `http://localhost:3002`
- Frontend: `http://localhost:3003`
- API Health Check: `http://localhost:3002/api/health`

---

*Updated: Security improvements and setup instructions added*
