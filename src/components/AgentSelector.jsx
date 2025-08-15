import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Brain } from 'lucide-react'

const AgentSelector = ({ agents, selectedAgent, onSelectAgent }) => {
  const getAgentIcon = (personality) => {
    switch (personality) {
      case 'pepe':
        return <Sparkles className="w-6 h-6" />
      case 'wojak':
        return <Zap className="w-6 h-6" />
      case 'chad':
        return <Brain className="w-6 h-6" />
      default:
        return <Sparkles className="w-6 h-6" />
    }
  }

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-degen-red glow-text">
        Choose Your Degen AI Companion
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectAgent(agent)}
            className={`
              agent-card cursor-pointer rounded-lg p-6 border-2 transition-all duration-300
              ${selectedAgent.id === agent.id 
                ? 'border-degen-red bg-degen-light shadow-lg pulse-glow' 
                : 'border-gray-600 bg-degen-gray hover:border-degen-red'
              }
            `}
          >
            <div className="text-center">
              <div className="text-4xl mb-4 animate-float">
                {agent.avatar}
              </div>
              
              <div className="mb-4">
                {getAgentIcon(agent.personality)}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">
                {agent.name}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {agent.description}
              </p>
              
              {selectedAgent.id === agent.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-4 inline-block bg-degen-red text-white px-3 py-1 rounded-full text-xs font-bold"
                >
                  SELECTED
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Midcurve Meme Reference */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-8 p-4 bg-degen-gray rounded-lg border border-degen-red"
      >
        <p className="text-gray-300 text-sm">
          <span className="text-degen-red font-bold">Midcurve Theory:</span> Each agent represents a different stage of the degen journey - 
          from the optimistic Pepe, through the coping Wojak, to the enlightened Chad.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default AgentSelector
