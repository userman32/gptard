import React from 'react'
import { motion } from 'framer-motion'
import { User, Bot, Zap } from 'lucide-react'

const ChatAgent = ({ message, model, cost }) => {
  const isUser = message.sender === 'user'
  const timestamp = new Date(message.timestamp).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6`}
    >
      <div className={`flex items-start space-x-4 max-w-xs md:max-w-md lg:max-w-lg ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
          isUser 
            ? 'accent-gradient' 
            : 'bg-gradient-to-r from-blue-500 to-purple-500'
        }`}>
          {isUser ? (
            <User className="w-6 h-6 text-white" />
          ) : (
            <div className="text-xl">
              {model?.avatar || '🤖'}
            </div>
          )}
        </div>

        {/* Message Bubble */}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          {/* Model Info for AI messages */}
          {!isUser && model && (
            <div className="mb-2 flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${model.color}`}></div>
              <span className="text-xs font-medium text-slate-400">{model.name}</span>
              {cost && (
                <div className="flex items-center space-x-1 text-xs text-slate-500">
                  <Zap className="w-3 h-3" />
                  <span>{cost} credits</span>
                </div>
              )}
            </div>
          )}

          {/* Message Content */}
          <div className={`
            chat-bubble relative
            ${isUser ? 'user-bubble' : 'agent-bubble'}
          `}>
            <p className="text-sm leading-relaxed whitespace-pre-wrap text-white">
              {message.text}
            </p>
          </div>

          {/* Timestamp */}
          <div className={`mt-2 text-xs text-slate-500 ${isUser ? 'text-right' : 'text-left'}`}>
            {timestamp}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ChatAgent
