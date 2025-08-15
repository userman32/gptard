import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, Bot, User, Sparkles, Zap, Brain, MessageSquare, Coins, LogOut, Settings, CreditCard, Wallet } from 'lucide-react'
import ChatAgent from './components/ChatAgent'
import AIModelSelector from './components/AIModelSelector'
import CryptoPayment from './components/CryptoPayment'
import TokenGate from './components/TokenGate'
import WalletConnection from './components/WalletConnection'
import { AI_MODELS } from './config/ai-models'
import './App.css'

function App() {
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0])
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasAccess, setHasAccess] = useState(true) // Start with access
  const [credits, setCredits] = useState(0) // Start with no credits to test the system
  const [activeTab, setActiveTab] = useState('chat') // chat, credits, wallet
  const [walletAddress, setWalletAddress] = useState('')
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleAccessGranted = (initialCredits) => {
    setCredits(initialCredits)
    setHasAccess(true)
  }

  const handleWalletConnected = (address) => {
    setWalletAddress(address)
    setIsWalletConnected(true)
  }

  const handleWalletDisconnected = () => {
    setWalletAddress('')
    setIsWalletConnected(false)
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return
    
    // Check if user has enough credits
    if (credits <= 0) {
      alert('You need credits to send messages. Please purchase credits first.')
      return
    }

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)
    
    // Calculate cost based on model and message length
    const estimatedTokens = Math.ceil(inputMessage.length / 4) // Rough estimate
    const cost = Math.ceil((estimatedTokens * selectedModel.price) / 1000) // Convert to credits
    setCredits(prev => Math.max(0, prev - cost))

    try {
      let aiResponse
      
      // Check if it's GPT-3.5 Turbo - make it actually functional
      if (selectedModel.id === 'gpt-3.5-turbo') {
        // Call real OpenAI API
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: inputMessage,
            model: 'gpt-3.5-turbo'
          })
        })

        if (!response.ok) {
          throw new Error('API call failed')
        }

        const data = await response.json()
        aiResponse = data.response
      } else {
        // Simulate AI response for other models
        setTimeout(() => {
          aiResponse = generateAIResponse(inputMessage, selectedModel)
        }, 1000 + Math.random() * 2000)
      }

      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: 'ai',
        model: selectedModel,
        timestamp: new Date(),
        cost: cost
      }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error getting AI response:', error)
      // Fallback to simulated response if API fails
      const fallbackResponse = generateAIResponse(inputMessage, selectedModel)
      const aiMessage = {
        id: Date.now() + 1,
        text: fallbackResponse,
        sender: 'ai',
        model: selectedModel,
        timestamp: new Date(),
        cost: cost
      }
      setMessages(prev => [...prev, aiMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const generateAIResponse = (userMessage, model) => {
    const responses = {
      'gpt-5': [
        `🚀 [GPT-5] *advanced reasoning activated* Your question about "${userMessage}" requires unprecedented analysis. Let me provide you with cutting-edge insights...`,
        `🚀 [GPT-5] *multimodal processing* "${userMessage}" - this is exactly the kind of complex reasoning I was designed for. Here's my superior analysis...`,
        `🚀 [GPT-5] *real-time knowledge integration* Regarding "${userMessage}", I can offer you the most advanced perspective available...`
      ],
      'gpt-4-turbo': [
        `⚡ [GPT-4 Turbo] *large context processing* "${userMessage}" - let me provide you with enhanced analysis using my expanded capabilities...`,
        `⚡ [GPT-4 Turbo] *multimodal analysis* Your question about "${userMessage}" benefits from my improved performance and larger context...`,
        `⚡ [GPT-4 Turbo] *fast response mode* Here's my enhanced take on "${userMessage}" with superior reasoning...`
      ],
      'gpt-4': [
        `🤖 [GPT-4] I understand you're asking about "${userMessage}". Let me provide a comprehensive analysis...`,
        `🤖 [GPT-4] That's an interesting question about "${userMessage}". Here's my detailed response...`,
        `🤖 [GPT-4] Regarding "${userMessage}", I can offer several perspectives and insights...`
      ],
      'gpt-3.5-turbo': [
        `⚡ [GPT-3.5] Here's a quick response to "${userMessage}"...`,
        `⚡ [GPT-3.5] I can help you with "${userMessage}". Here's what I know...`,
        `⚡ [GPT-3.5] For "${userMessage}", here's a straightforward answer...`
      ],
      'claude-4-opus': [
        `🧠 [Claude 4 Opus] *superior reasoning engaged* "${userMessage}" - this requires my latest analytical capabilities. Let me provide you with unprecedented insights...`,
        `🧠 [Claude 4 Opus] *advanced mathematical analysis* Your question about "${userMessage}" benefits from my enhanced reasoning and research capabilities...`,
        `🧠 [Claude 4 Opus] *long context processing* Regarding "${userMessage}", I can offer you the most sophisticated analysis available...`
      ],
      'claude-4-sonnet': [
        `🎯 [Claude 4 Sonnet] *balanced analysis mode* "${userMessage}" - let me provide you with strong performance and efficiency in my response...`,
        `🎯 [Claude 4 Sonnet] *optimized reasoning* Your question about "${userMessage}" gets my balanced approach with good reasoning...`,
        `🎯 [Claude 4 Sonnet] *versatile processing* Here's my efficient take on "${userMessage}" with cost-effective analysis...`
      ],
      'claude-3-opus': [
        `🧠 [Claude 3 Opus] Let me analyze "${userMessage}" with deep reasoning...`,
        `🧠 [Claude 3 Opus] This is a complex topic. Let me break down "${userMessage}" systematically...`,
        `🧠 [Claude 3 Opus] I'll provide a thorough analysis of "${userMessage}"...`
      ],
      'claude-3-sonnet': [
        `🎯 [Claude 3 Sonnet] Here's my balanced perspective on "${userMessage}"...`,
        `🎯 [Claude 3 Sonnet] Let me address "${userMessage}" with careful reasoning...`,
        `🎯 [Claude 3 Sonnet] I'll help you understand "${userMessage}" clearly...`
      ],
      'claude-3-haiku': [
        `🌸 [Claude 3 Haiku] *ultra-fast response* "${userMessage}" - here's my quick and efficient answer...`,
        `🌸 [Claude 3 Haiku] *instant processing* Your question about "${userMessage}" gets my rapid analysis...`,
        `🌸 [Claude 3 Haiku] *efficient mode* Here's my cost-effective response to "${userMessage}"...`
      ],
      'gemini-ultra': [
        `🌟 [Gemini Ultra] *advanced capabilities activated* "${userMessage}" - this requires my superior reasoning and multimodal analysis...`,
        `🌟 [Gemini Ultra] *superior coding mode* Your question about "${userMessage}" benefits from my most advanced capabilities...`,
        `🌟 [Gemini Ultra] *research mode* Regarding "${userMessage}", I can provide you with Google's most sophisticated insights...`
      ],
      'gemini-pro': [
        `🔮 [Gemini Pro] Here's what I can tell you about "${userMessage}"...`,
        `🔮 [Gemini Pro] Let me explore "${userMessage}" with my capabilities...`,
        `🔮 [Gemini Pro] I'll provide insights on "${userMessage}"...`
      ],
      'gemini-flash': [
        `⚡ [Gemini Flash] *ultra-fast mode* "${userMessage}" - here's my lightning-quick response...`,
        `⚡ [Gemini Flash] *efficient processing* Your question about "${userMessage}" gets my rapid analysis...`,
        `⚡ [Gemini Flash] *cost-effective mode* Here's my efficient answer to "${userMessage}"...`
      ],
      'grok': [
        `🤖 [Grok] *laughs* Oh, you're asking about "${userMessage}"? Let me give you the real talk...`,
        `🤖 [Grok] "${userMessage}" - now that's a spicy topic! Here's what's actually happening...`,
        `🤖 [Grok] *adjusts sunglasses* "${userMessage}" is exactly the kind of question I love. Let me break it down...`
      ],
      'grok-2': [
        `🚀 [Grok-2] *enhanced reasoning* "${userMessage}" - this is exactly what my next-gen capabilities are for. Let me give you the advanced analysis...`,
        `🚀 [Grok-2] *superior analysis mode* Your question about "${userMessage}" gets my enhanced reasoning and real-time knowledge...`,
        `🚀 [Grok-2] *advanced humor engaged* "${userMessage}" - now this is a topic that deserves my superior analysis and enhanced capabilities...`
      ],
      'llama-3-400b': [
        `🦙 [Llama 3 400B] *massive model processing* "${userMessage}" - this requires my superior performance and large context capabilities...`,
        `🦙 [Llama 3 400B] *advanced reasoning mode* Your question about "${userMessage}" benefits from my open-source superiority...`,
        `🦙 [Llama 3 400B] *large context analysis* Regarding "${userMessage}", I can provide you with my most advanced open-source insights...`
      ],
      'llama-3-70b': [
        `🦙 [Llama 3] Here's my open-source perspective on "${userMessage}"...`,
        `🦙 [Llama 3] Let me help you with "${userMessage}" using my capabilities...`,
        `🦙 [Llama 3] I'll address "${userMessage}" with my community-driven approach...`
      ],
      'mistral-large': [
        `🌪️ [Mistral Large] *high-performance mode* "${userMessage}" - this requires my excellent reasoning capabilities...`,
        `🌪️ [Mistral Large] *multilingual processing* Your question about "${userMessage}" gets my superior performance and fast responses...`,
        `🌪️ [Mistral Large] *cost-effective analysis* Here's my high-performance take on "${userMessage}" with excellent reasoning...`
      ],
      'mistral-medium': [
        `🌪️ [Mistral Medium] *balanced performance* "${userMessage}" - let me provide you with good reasoning and efficiency...`,
        `🌪️ [Mistral Medium] *optimized processing* Your question about "${userMessage}" gets my balanced approach with cost-effective analysis...`,
        `🌪️ [Mistral Medium] *fast mode* Here's my efficient response to "${userMessage}" with good reasoning...`
      ],
      'mistral-small': [
        `🌪️ [Mistral Small] *ultra-fast mode* "${userMessage}" - here's my lightning-quick response...`,
        `🌪️ [Mistral Small] *efficient processing* Your question about "${userMessage}" gets my rapid analysis...`,
        `🌪️ [Mistral Small] *cost-effective mode* Here's my efficient answer to "${userMessage}"...`
      ],
      'cohere-command': [
        `🎯 [Cohere Command] *enterprise-grade processing* "${userMessage}" - this requires my superior text generation capabilities...`,
        `🎯 [Cohere Command] *business-focused analysis* Your question about "${userMessage}" gets my enterprise-grade reliability...`,
        `🎯 [Cohere Command] *superior generation mode* Here's my business-focused response to "${userMessage}" with superior capabilities...`
      ],
      'cohere-command-light': [
        `⚡ [Cohere Command Light] *fast generation mode* "${userMessage}" - here's my quick and efficient response...`,
        `⚡ [Cohere Command Light] *efficient processing* Your question about "${userMessage}" gets my rapid analysis...`,
        `⚡ [Cohere Command Light] *cost-effective mode* Here's my efficient answer to "${userMessage}"...`
      ],
      'perplexity-sonar': [
        `🔍 [Perplexity Sonar] *real-time search mode* "${userMessage}" - let me search for the most current information...`,
        `🔍 [Perplexity Sonar] *research-focused analysis* Your question about "${userMessage}" gets my real-time information retrieval...`,
        `🔍 [Perplexity Sonar] *accurate search mode* Here's my research-focused response to "${userMessage}" with current information...`
      ],
      'perplexity-sonar-small': [
        `🔍 [Perplexity Sonar Small] *fast search mode* "${userMessage}" - here's my quick information retrieval...`,
        `🔍 [Perplexity Sonar Small] *efficient search* Your question about "${userMessage}" gets my rapid analysis...`,
        `🔍 [Perplexity Sonar Small] *cost-effective search* Here's my efficient answer to "${userMessage}"...`
      ],
      'anthropic-claude-instant': [
        `⚡ [Claude Instant] *ultra-fast mode* "${userMessage}" - here's my instant response...`,
        `⚡ [Claude Instant] *instant processing* Your question about "${userMessage}" gets my rapid analysis...`,
        `⚡ [Claude Instant] *efficient mode* Here's my cost-effective response to "${userMessage}"...`
      ],
      'openai-gpt-4o-mini': [
        `⚡ [GPT-4o Mini] *ultra-fast mode* "${userMessage}" - here's my lightning-quick response...`,
        `⚡ [GPT-4o Mini] *efficient processing* Your question about "${userMessage}" gets my rapid analysis...`,
        `⚡ [GPT-4o Mini] *cost-effective mode* Here's my efficient answer to "${userMessage}"...`
      ]
    }

    const modelResponses = responses[model.id] || responses['gpt-3.5-turbo']
    return modelResponses[Math.floor(Math.random() * modelResponses.length)]
  }

  const handlePurchaseCredits = (amount) => {
    setCredits(prev => prev + amount)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Show wallet connection if not connected (optional)
  if (!hasAccess) {
    return <TokenGate onAccessGranted={handleAccessGranted} />
  }

  return (
    <div className="min-h-screen bg-slate-900 luxury-gradient">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6 tracking-tight">
            gptard.wtf
          </h1>
          <p className="text-slate-300 text-xl font-light">
            All-in-One AI Platform • Powered by Crypto
          </p>
        </motion.div>

        {/* Header with Credits and Navigation */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-card p-6 flex items-center space-x-8 luxury-shadow">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full animate-pulse ${
                credits > 0 ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-red-500'
              }`}></div>
              <span className={`font-semibold text-lg ${
                credits > 0 ? 'text-white' : 'text-red-400'
              }`}>
                Credits: {credits.toLocaleString()}
                {credits <= 0 && <span className="ml-2 text-sm">(No credits - Purchase required)</span>}
              </span>
            </div>
            
                                {/* Navigation Tabs */}
                                                    <div className="flex space-x-2">
                                  <button
                                    onClick={() => setActiveTab('chat')}
                                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                                      activeTab === 'chat'
                                        ? 'accent-gradient text-white shadow-lg'
                                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                                    }`}
                                  >
                                    <MessageSquare className="w-5 h-5" />
                                    <span>AI Chat</span>
                                  </button>
                                  <button
                                    onClick={() => setActiveTab('credits')}
                                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                                      activeTab === 'credits'
                                        ? 'accent-gradient text-white shadow-lg'
                                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                                    }`}
                                  >
                                    <Coins className="w-5 h-5" />
                                    <span>Credits</span>
                                   </button>
                                   <button
                                     onClick={() => setActiveTab('wallet')}
                                     className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                                       activeTab === 'wallet'
                                         ? 'accent-gradient text-white shadow-lg'
                                         : 'text-slate-300 hover:text-white hover:bg-white/5'
                                     }`}
                                   >
                                     <Wallet className="w-5 h-5" />
                                     <span>Wallet</span>
                                   </button>
                                              </div>

                                     {credits <= 0 && (
                          <button
                            onClick={() => setActiveTab('credits')}
                            className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white transition-colors px-4 py-2 rounded-lg font-medium"
                          >
                            <Coins className="w-4 h-4" />
                            <span className="text-sm font-medium">Buy Credits</span>
                          </button>
                        )}
                                                     {isWalletConnected ? (
                               <div className="flex items-center space-x-2 text-green-400">
                                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                 <span className="text-sm font-medium">Connected</span>
                                 <span className="text-xs font-mono">
                                   {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
                                 </span>
                               </div>
                             ) : (
                               <button
                                 onClick={() => setActiveTab('wallet')}
                                 className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                               >
                                 <Wallet className="w-4 h-4" />
                                 <span className="text-sm font-medium">Connect Wallet</span>
                               </button>
                             )}
                        
                        {/* Token Address */}
                        <div className="flex items-center space-x-2 text-slate-400">
                          <span className="text-sm font-medium">Token:</span>
                          <button
                            onClick={() => navigator.clipboard.writeText('GPTARD1234567890abcdef')}
                            className="text-blue-400 hover:text-blue-300 text-sm font-mono transition-colors"
                            title="Click to copy token address"
                          >
                            GPTARD...f
                          </button>
                        </div>
            </div>
         </motion.div>

        {/* Content Area */}
        {activeTab === 'chat' && (
          <>
            {/* AI Model Selector */}
            <AIModelSelector 
              selectedModel={selectedModel}
              onSelectModel={setSelectedModel}
              userCredits={credits}
            />

            {/* Chat Interface */}
            <div className="max-w-5xl mx-auto">
              <div className="glass-card p-8 luxury-shadow">
                {/* Chat Messages */}
                <div className="h-[600px] overflow-y-auto mb-8 space-y-6">
                  {messages.length === 0 && (
                    <div className="text-center text-slate-400 py-16">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full accent-gradient flex items-center justify-center">
                        <Bot className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-xl font-medium mb-2">
                        {credits > 0 ? `Start chatting with ${selectedModel.name}!` : 'No credits available'}
                      </p>
                      <p className="text-sm text-slate-500">
                        {credits > 0 ? 'Cost varies by model and message length' : 'Purchase credits to start chatting'}
                      </p>
                      {credits <= 0 && (
                        <button
                          onClick={() => setActiveTab('credits')}
                          className="mt-4 accent-gradient hover:shadow-lg text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
                        >
                          Buy Credits Now
                        </button>
                      )}
                    </div>
                  )}
                  
                  {messages.map((message) => (
                    <ChatAgent 
                      key={message.id}
                      message={message}
                      model={message.model}
                      cost={message.cost}
                    />
                  ))}
                  
                  {isLoading && (
                    <div className="flex items-center space-x-3 text-slate-400">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-400 border-t-transparent"></div>
                      <span className="text-sm font-medium">{selectedModel.name} is thinking...</span>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="flex space-x-4">
                  <div className="flex-1 relative">
                    <textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={credits > 0 ? `Chat with ${selectedModel.name}...` : 'No credits remaining'}
                      className="w-full glass-effect rounded-2xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none text-lg"
                      rows="3"
                      disabled={isLoading || credits <= 0}
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isLoading || credits <= 0}
                    className="accent-gradient hover:shadow-lg disabled:opacity-50 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 hover-lift"
                  >
                    <Send className="w-6 h-6" />
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

                            {activeTab === 'credits' && (
                      <div className="max-w-5xl mx-auto">
                        <CryptoPayment 
                          onPurchaseCredits={handlePurchaseCredits}
                          userCredits={credits}
                          isWalletConnected={isWalletConnected}
                          walletAddress={walletAddress}
                        />
                      </div>
                    )}

                    {activeTab === 'wallet' && (
                      <div className="max-w-2xl mx-auto">
                        <WalletConnection 
                          onWalletConnected={handleWalletConnected}
                          onWalletDisconnected={handleWalletDisconnected}
                        />
                      </div>
                    )}
      </div>
    </div>
  )
}

export default App
