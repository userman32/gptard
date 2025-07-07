'use client'

import { useState } from 'react'

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [hasToken, setHasToken] = useState(false)
  const [messages, setMessages] = useState<Array<{type: 'user' | 'bot', content: string}>>([])
  const [inputMessage, setInputMessage] = useState('')

  const connectWallet = () => {
    // Placeholder for wallet connection
    setIsWalletConnected(true)
    // Simulate token check - replace with actual SPL token balance check
    setHasToken(true)
  }

  const sendMessage = () => {
    if (!inputMessage.trim()) return
    
    const userMessage = { type: 'user' as const, content: inputMessage }
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')

    // Simulate bot response - replace with actual OpenAI API call
    setTimeout(() => {
      const botMessage = { 
        type: 'bot' as const, 
        content: 'This is a placeholder response. Add your OpenAI API key to enable real GPTARD responses.' 
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-secondary/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">GPTARD</h1>
            <span className="text-sm text-gray-400">gptard.wtf</span>
          </div>
          {!isWalletConnected ? (
            <button
              onClick={connectWallet}
              className="bg-primary text-black px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Connect Wallet
            </button>
          ) : (
            <div className="text-sm text-gray-300">
              Wallet Connected
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-black text-primary mb-4">
              GPTARD
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Trained in the trenches. Built to mislead.
            </p>
            
            {!isWalletConnected && (
              <button
                onClick={connectWallet}
                className="bg-primary text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-primary/90 transition-colors"
              >
                Connect Wallet to Start
              </button>
            )}
          </div>

          {/* Chat Interface */}
          {isWalletConnected && (
            <div className="bg-secondary rounded-lg border border-gray-800 p-6">
              {!hasToken ? (
                <div className="text-center py-12">
                  <div className="text-2xl font-bold text-red-400 mb-4">
                    🔒 Access Restricted
                  </div>
                  <p className="text-gray-300 mb-4">
                    Hold 1000+ $GPTARD to access the bot
                  </p>
                  <p className="text-sm text-gray-500">
                    Connect a wallet with sufficient $GPTARD tokens to start chatting
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Messages */}
                  <div className="h-96 overflow-y-auto space-y-4 mb-4">
                    {messages.length === 0 ? (
                      <div className="text-center text-gray-500 py-8">
                        Start a conversation with GPTARD...
                      </div>
                    ) : (
                      messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[80%] p-4 rounded-lg ${
                              message.type === 'user'
                                ? 'bg-primary text-black'
                                : 'bg-gray-800 text-gray-100 font-mono text-sm'
                            }`}
                          >
                            {message.content}
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Input */}
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Ask GPTARD anything..."
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                    />
                    <button
                      onClick={sendMessage}
                      disabled={!inputMessage.trim()}
                      className="bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Send
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-secondary/80 backdrop-blur-sm border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4 text-center text-sm text-gray-400">
          <p>GPTARD - Trained in the trenches. Built to mislead.</p>
          <p className="mt-1">gptard.wtf</p>
        </div>
      </footer>
    </div>
  )
} 