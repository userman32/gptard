# gptard.wtf 🚀

A Token-Gated Crypto AI Platform where users must hold GPTARD tokens to access AI agents with midcurve meme personalities!

## 🎭 The Agents

### 🐸 Pepe the Degen
- **Personality**: The OG degen who sees everything as a potential moon mission
- **Style**: REEEEEE! WAGMI! Diamond hands! 💎🙌
- **Represents**: The optimistic beginning of the degen journey

### 😢 Wojak the Copium  
- **Personality**: The eternal optimist who always finds hope in despair
- **Style**: *sniff* maybe this time it will be different... *copium intensifies*
- **Represents**: The coping phase when things don't go as planned

### 💪 Chad the Based
- **Personality**: The gigabrain who knows the truth and spreads wisdom
- **Style**: Listen here, anon. This is exactly what I've been saying. Wake up sheeple! 🧠
- **Represents**: The enlightened final stage of the degen journey

## 🎨 Features

- **Token-Gated Access**: Must hold minimum 1,000 GPTARD tokens to access platform
- **Credit System**: Each AI chat message costs 1 credit (1 credit per 100 tokens held)
- **AI Chat Agents**: Three midcurve-based personalities for crypto discussions
- **Web3 Wallet Integration**: Connect your wallet to verify token holdings
- **Degen/Anime Theme**: Red and black color scheme with glowing effects
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Midcurve Theory**: Each agent represents a different stage of the crypto journey

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom degen theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Orbitron (anime-style font)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd midcurve-chat-agents
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🎯 Usage

### Token Gate Access
1. **Connect Wallet**: Click "Connect Wallet" to link your Web3 wallet
2. **Verify Tokens**: System checks if you hold minimum 1,000 GPTARD tokens
3. **Get Credits**: Earn credits based on your token holdings (1 credit per 100 tokens)
4. **Access Platform**: Once verified, access the AI chat platform

### AI Chat
1. **Choose Your Agent**: Select from Pepe, Wojak, or Chad using the agent selector cards
2. **Monitor Credits**: Keep track of your remaining credits in the header
3. **Start Chatting**: Type your message and press Enter (costs 1 credit per message)
4. **Experience Different Personalities**: Each agent responds with their unique crypto perspective
5. **Switch Agents**: Change agents anytime to get different viewpoints on market conditions

## 🎨 Customization

### Adding New Agents
To add a new agent, modify the `AGENTS` array in `src/App.jsx`:

```javascript
{
  id: 'new-agent',
  name: 'New Agent Name',
  avatar: '🎭',
  description: 'Agent description',
  personality: 'new-personality',
  color: 'from-color-500 to-color-700'
}
```

Then add corresponding responses in the `generateAgentResponse` function.

### Styling
- Modify colors in `tailwind.config.js`
- Update animations in `src/App.css`
- Customize the degen theme in `src/index.css`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by the legendary midcurve meme
- Built for the degen community
- Special thanks to all the anons who keep the dream alive

---

**Remember**: This is just a fun project - not financial advice! DYOR! 🚀
