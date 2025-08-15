import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Wallet, Lock, Coins, CheckCircle, XCircle, AlertTriangle, RefreshCw } from 'lucide-react'

const TokenGate = ({ onAccessGranted }) => {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState('')

  const handleConnect = () => {
    setIsConnecting(true)
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false)
      setIsConnected(true)
      setAddress('0x1234...5678')
      setTimeout(() => {
        onAccessGranted(100) // Give 100 credits for demo
      }, 1500)
    }, 2000)
  }

  const getStatusIcon = () => {
    if (!isConnected) {
      return <Lock className="w-8 h-8 text-red-400" />
    } else {
      return <CheckCircle className="w-8 h-8 text-green-400" />
    }
  }

     const getStatusMessage = () => {
     if (!isConnected) {
       return 'Connect your wallet for additional features (optional)'
     } else {
       return 'Wallet Connected! You have 100 credits available.'
     }
   }

  return (
    <div className="min-h-screen bg-slate-900 luxury-gradient flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full mx-4"
      >
        <div className="glass-card p-8 text-center luxury-shadow">
          {/* Logo */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
                         <h1 className="text-3xl font-bold text-gradient mb-2">
               gptard.wtf
             </h1>
             <p className="text-slate-400 text-sm">Luxury AI Platform</p>
          </motion.div>

          {/* Status Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-6 flex justify-center"
          >
            {getStatusIcon()}
          </motion.div>

          {/* Status Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-6"
          >
            <p className="text-white font-semibold mb-2">
              {getStatusMessage()}
            </p>
            
                         {address && (
               <div className="text-slate-400 text-sm">
                 <p>Wallet: {address.slice(0, 6)}...{address.slice(-4)}</p>
                 <p className="text-blue-400 font-semibold">Credits: 100</p>
               </div>
             )}
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-6 p-4 glass-effect rounded-2xl"
          >
                         <h3 className="text-white font-semibold mb-2 flex items-center justify-center">
               <Coins className="w-4 h-4 mr-2 text-gradient" />
               Optional Features
             </h3>
                           <ul className="text-slate-300 text-sm space-y-1">
                <li>• Connect your Web3 wallet for extra features</li>
                <li>• Get 100 demo credits to start</li>
                <li>• Buy more credits with crypto anytime</li>
                <li>• Chat with 25 different AI models</li>
              </ul>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
                                      {!isConnected ? (
               <div className="space-y-3">
                 <button
                   onClick={handleConnect}
                   disabled={isConnecting}
                   className="w-full accent-gradient hover:shadow-lg disabled:opacity-50 text-white py-3 px-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center hover-lift"
                 >
                   {isConnecting ? (
                     <>
                       <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                       Connecting...
                     </>
                   ) : (
                     <>
                       <Wallet className="w-5 h-5 mr-2" />
                       Connect Wallet (Optional)
                     </>
                   )}
                 </button>
                 
                 <button
                   onClick={() => onAccessGranted(100)}
                   className="w-full glass-effect hover:bg-white/10 text-white py-3 px-6 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center"
                 >
                   Skip & Continue
                 </button>
               </div>
                         ) : isConnecting ? (
               <div className="w-full glass-effect text-white py-3 px-6 rounded-2xl font-bold flex items-center justify-center">
                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"></div>
                 Connecting...
               </div>
             ) : null}
          </motion.div>

          

          
        </div>
      </motion.div>
    </div>
  )
}

export default TokenGate
