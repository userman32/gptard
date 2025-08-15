# gptard.wtf - All-in-One AI Platform

A luxury AI chat platform with 25+ AI models, crypto payments, and Web3 integration.

## 🚀 Features

- **25+ AI Models**: GPT-5, Claude 4, Gemini Ultra, Grok-2, Llama 3, and more
- **Real AI Integration**: GPT-3.5 Turbo with OpenAI API
- **Crypto Payments**: SOL/USDC payment system with wallet integration
- **Web3 Ready**: MetaMask wallet connection
- **Credit System**: Pay-per-use model with crypto purchases
- **Luxury UI**: Modern, glass-morphism design with animations

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js
- **AI**: OpenAI API (GPT-3.5 Turbo)
- **Web3**: MetaMask integration
- **Styling**: Luxury glass-morphism design

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd gptard.wtf

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your OpenAI API key to .env
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

## 🚀 Development

```bash
# Start development server (frontend + backend)
npm run dev:full

# Start frontend only
npm run dev

# Start backend only
npm run server
```

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

3. **Set Environment Variables**:
   - Go to Vercel dashboard
   - Add `OPENAI_API_KEY` environment variable

4. **Custom Domain**:
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (gptard.wtf)
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository

3. **Set Environment Variables**:
   - Go to Site Settings → Environment Variables
   - Add `OPENAI_API_KEY`

### Option 3: Traditional Web Server

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload files**:
   - Upload `dist/` folder contents to your web server
   - Upload `server.js` and `package.json` for backend

3. **Install dependencies on server**:
   ```bash
   npm install --production
   ```

4. **Start the server**:
   ```bash
   npm start
   ```

## 🔗 Domain Configuration

### For gptard.wtf:

1. **DNS Records**:
   ```
   Type: A
   Name: @
   Value: [Your server IP]
   
   Type: CNAME
   Name: www
   Value: gptard.wtf
   ```

2. **SSL Certificate**:
   - Use Let's Encrypt for free SSL
   - Or purchase SSL certificate from your domain provider

## 🎯 Key Features

### AI Models Available:
- GPT-5, GPT-4 Turbo, GPT-4, GPT-3.5 Turbo
- Claude 4 Opus, Claude 4 Sonnet, Claude 3 Opus
- Gemini Ultra, Gemini Pro, Gemini Flash
- Grok, Grok-2
- Llama 3 400B, Llama 3 70B
- Mistral Large, Medium, Small
- Cohere Command, Command Light
- Perplexity Sonar, Sonar Small
- And more...

### Payment System:
- SOL/USDC payments
- Credit-based system
- Real-time pricing
- Wallet integration

### Security:
- Wallet verification
- Payment validation
- API key protection
- CORS configuration

## 🚀 Production Checklist

- [ ] Set up environment variables
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Test wallet integration
- [ ] Verify AI model responses
- [ ] Test payment system
- [ ] Monitor performance
- [ ] Set up analytics

## 📞 Support

For issues or questions:
- Check the console for errors
- Verify environment variables
- Test wallet connection
- Ensure OpenAI API key is valid

## 🔄 Updates

To update the site:
1. Make your changes
2. Run `npm run build`
3. Deploy using your chosen method
4. Test the live site

---

**Built with ❤️ for the crypto AI community**
