import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Brain, DollarSign, Clock, CheckCircle, Zap } from 'lucide-react'
import { AI_MODELS } from '../config/ai-models'

const AIModelSelector = ({ selectedModel, onSelectModel, userCredits }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleModelSelect = (model) => {
    onSelectModel(model)
    setIsOpen(false)
  }

  return (
    <div className="mb-8" ref={dropdownRef}>
      {/* Compact Model Selector */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-center"
      >
        <div className="relative">
          {/* Selected Model Display */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="glass-card px-6 py-4 flex items-center space-x-4 luxury-shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="text-2xl">{selectedModel?.avatar}</div>
            <div className="text-left">
              <div className="text-white font-semibold text-lg">{selectedModel?.name}</div>
              <div className="text-slate-400 text-sm">{selectedModel?.provider}</div>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="text-sm">${selectedModel?.price}/1K</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
              />
            </div>
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 glass-card luxury-shadow z-50 max-h-96 overflow-hidden"
              >
                {/* Scrollable Model List */}
                <div className="max-h-80 overflow-y-auto">
                  {AI_MODELS.map((model, index) => (
                    <motion.div
                      key={model.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleModelSelect(model)}
                      className={`p-4 cursor-pointer transition-all duration-200 border-b border-white/5 last:border-b-0 ${
                        selectedModel?.id === model.id
                          ? 'bg-blue-500/10 border-l-4 border-l-blue-500'
                          : 'hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{model.avatar}</div>
                          <div>
                            <div className="text-white font-semibold">{model.name}</div>
                            <div className="text-slate-400 text-sm">{model.provider}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          {/* Price */}
                          <div className="text-right">
                            <div className="text-emerald-400 font-semibold text-sm">
                              ${model.price}/1K
                            </div>
                            <div className="text-slate-500 text-xs">
                              {model.maxTokens.toLocaleString()} tokens
                            </div>
                          </div>
                          
                          {/* Selected Check */}
                          {selectedModel?.id === model.id && (
                            <CheckCircle className="w-5 h-5 text-blue-400" />
                          )}
                        </div>
                      </div>
                      
                      {/* Features Preview */}
                      <div className="mt-2 flex flex-wrap gap-1">
                        {model.features.slice(0, 2).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                        {model.features.length > 2 && (
                          <span className="text-xs text-slate-500">
                            +{model.features.length - 2} more
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Footer with Credits Info */}
                <div className="p-4 bg-white/5 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Your Credits:</span>
                    <span className="text-gradient font-semibold">
                      {userCredits.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Estimated cost: ~${(selectedModel?.price * 0.1).toFixed(3)} per message
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}

export default AIModelSelector
