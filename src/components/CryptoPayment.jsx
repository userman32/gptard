import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Wallet, CreditCard, Coins, ArrowRight, CheckCircle, AlertCircle, TrendingUp, Bitcoin, Zap } from 'lucide-react'
import { SUPPORTED_CRYPTO } from '../config/ai-models'

const CryptoPayment = ({ onPurchaseCredits, userCredits, isWalletConnected, walletAddress }) => {
  const [selectedCrypto, setSelectedCrypto] = useState(SUPPORTED_CRYPTO[0])
  const [creditAmount, setCreditAmount] = useState(100)
  const [isProcessing, setIsProcessing] = useState(false)

  // Credit pricing: 1 credit = $0.01 USD
  const CREDIT_PRICE_USD = 0.01
  
  const calculateCryptoAmount = (credits) => {
    const usdAmount = credits * CREDIT_PRICE_USD
    return (usdAmount / selectedCrypto.priceUSD).toFixed(6)
  }

  const handlePurchase = async () => {
    setIsProcessing(true)
    
    // Simulate payment verification - in real implementation, this would verify the actual crypto transaction
    try {
      // Simulate API call to verify payment
      const paymentVerification = await simulatePaymentVerification(creditAmount, selectedCrypto)
      
      if (paymentVerification.success) {
        onPurchaseCredits(creditAmount)
        alert(`Successfully purchased ${creditAmount.toLocaleString()} credits!`)
      } else {
        alert('Payment verification failed. Please try again.')
      }
    } catch (error) {
      alert('Payment processing error. Please check your wallet and try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  // Simulate payment verification - in real implementation, this would check blockchain for actual transaction
  const simulatePaymentVerification = async (amount, crypto) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate 90% success rate for demo purposes
        const isSuccess = Math.random() > 0.1
        resolve({
          success: isSuccess,
          transactionId: isSuccess ? `tx_${Math.random().toString(36).substr(2, 9)}` : null,
          message: isSuccess ? 'Payment verified' : 'Insufficient funds or transaction failed'
        })
      }, 2000)
    })
  }



  const presetAmounts = [100, 500, 1000, 5000]

  const getCryptoIcon = (symbol) => {
    switch (symbol) {
      case 'SOL': return <Coins className="w-5 h-5" />
      case 'USDC': return <Coins className="w-5 h-5" />
      default: return <Coins className="w-5 h-5" />
    }
  }

  return (
    <div className="glass-card p-8 luxury-shadow">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
          <Coins className="w-8 h-8 mr-3 text-gradient" />
          Buy Credits with SOL/USDC
        </h2>
        <p className="text-slate-400 text-lg">Purchase credits using SOL or USDC</p>
        
        {/* Token Address Section */}
        <div className="mt-6 p-4 glass-effect rounded-2xl">
          <h3 className="text-white font-semibold mb-2">GPTARD Token Address</h3>
          <div className="flex items-center justify-center space-x-3">
            <code className="text-blue-400 font-mono text-sm bg-slate-800 px-3 py-2 rounded-lg">
              GPTARD1234567890abcdef
            </code>
            <button
              onClick={() => {
                navigator.clipboard.writeText('GPTARD1234567890abcdef');
                alert('Token address copied to clipboard!');
              }}
              className="text-slate-400 hover:text-white transition-colors"
              title="Copy token address"
            >
              📋
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2">Click to copy the token address</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Credit Purchase */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">Purchase Credits</h3>
          
          {/* Current Credits */}
          <div className="p-6 glass-effect rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-400 font-medium">Current Credits:</span>
              <span className="text-gradient font-bold text-2xl">
                {userCredits.toLocaleString()} credits
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">Credit Value:</span>
              <span className="text-blue-400 font-bold text-xl">
                ${CREDIT_PRICE_USD.toFixed(3)} per credit
              </span>
            </div>
          </div>

          {/* Credit Amount Selection */}
          <div className="p-6 glass-effect rounded-2xl">
            <h4 className="text-white font-semibold mb-4">Select Credit Amount</h4>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setCreditAmount(amount)}
                  className={`p-3 rounded-xl font-medium transition-all duration-300 ${
                    creditAmount === amount
                      ? 'accent-gradient text-white shadow-lg'
                      : 'glass-effect text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {amount.toLocaleString()} credits
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-slate-400">Custom:</span>
              <input
                type="number"
                value={creditAmount}
                onChange={(e) => setCreditAmount(parseInt(e.target.value) || 0)}
                className="flex-1 bg-slate-800 text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Enter amount"
                min="1"
              />
            </div>
          </div>

                     {/* Wallet Connection */}
           <div className="p-6 glass-effect rounded-2xl">
             <h4 className="text-white font-semibold mb-4">Wallet Connection</h4>
             {!isWalletConnected ? (
               <div className="text-center">
                 <p className="text-slate-400 mb-4">Connect your wallet to purchase credits</p>
                 <p className="text-sm text-slate-500">Go to the Wallet tab to connect MetaMask</p>
               </div>
             ) : (
               <div className="text-center">
                 <div className="flex items-center justify-center space-x-2 mb-2">
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-green-400 font-medium">Wallet Connected</span>
                 </div>
                 <p className="text-slate-400 text-sm font-mono">
                   {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)}
                 </p>
               </div>
             )}
           </div>

           {/* Crypto Selection */}
           <div className="p-6 glass-effect rounded-2xl">
             <h4 className="text-white font-semibold mb-4">Select Cryptocurrency</h4>
             <div className="space-y-3">
               {SUPPORTED_CRYPTO.map((crypto) => (
                 <button
                   key={crypto.symbol}
                   onClick={() => setSelectedCrypto(crypto)}
                   disabled={!isWalletConnected}
                   className={`w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300 ${
                     selectedCrypto.symbol === crypto.symbol
                       ? 'accent-gradient text-white shadow-lg'
                       : 'glass-effect text-slate-300 hover:text-white hover:bg-white/5'
                   } ${!isWalletConnected ? 'opacity-50 cursor-not-allowed' : ''}`}
                 >
                   <div className="flex items-center space-x-3">
                     {getCryptoIcon(crypto.symbol)}
                     <div className="text-left">
                       <div className="font-semibold">{crypto.name}</div>
                       <div className="text-sm opacity-75">{crypto.symbol}</div>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="font-semibold">${crypto.priceUSD.toLocaleString()}</div>
                     <div className="text-sm opacity-75">per unit</div>
                   </div>
                 </button>
               ))}
             </div>
           </div>
        </div>

        {/* Payment Summary */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">Payment Summary</h3>
          
          {/* Cost Breakdown */}
          <div className="p-6 glass-effect rounded-2xl">
            <h4 className="text-white font-semibold mb-4">Cost Breakdown</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Credits:</span>
                <span className="text-white font-semibold">{creditAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Price per credit:</span>
                <span className="text-white">${CREDIT_PRICE_USD.toFixed(3)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total USD:</span>
                <span className="text-white font-semibold">${(creditAmount * CREDIT_PRICE_USD).toFixed(2)}</span>
              </div>
              <div className="border-t border-slate-600 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Pay with {selectedCrypto.symbol}:</span>
                  <span className="text-gradient font-bold text-lg">
                    {calculateCryptoAmount(creditAmount)} {selectedCrypto.symbol}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Button */}
          <div className="p-6 glass-effect rounded-2xl">
                         <button
               onClick={handlePurchase}
               disabled={isProcessing || creditAmount <= 0 || !isWalletConnected}
               className="w-full accent-gradient hover:shadow-lg disabled:opacity-50 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 hover-lift"
             >
               {!isWalletConnected ? (
                 <>
                   <Wallet className="w-6 h-6" />
                   <span>Connect Wallet First</span>
                 </>
               ) : isProcessing ? (
                 <>
                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                   <span>Processing Payment...</span>
                 </>
               ) : (
                 <>
                   <Wallet className="w-6 h-6" />
                   <span>Pay {calculateCryptoAmount(creditAmount)} {selectedCrypto.symbol}</span>
                 </>
               )}
             </button>
            <p className="text-xs text-slate-500 mt-3 text-center">
              Payment will be processed securely through your wallet
            </p>
          </div>

          {/* Credit Usage Info */}
          <div className="p-6 glass-effect rounded-2xl">
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-gradient" />
              How Credits Work
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              <p>• 1 credit = 1 AI model response</p>
              <p>• Credits are consumed per message</p>
              <p>• Different models have different costs</p>
              <p>• Credits never expire</p>
              <p>• Purchase more anytime</p>
            </div>
          </div>

          {/* Model Pricing */}
          <div className="p-6 glass-effect rounded-2xl">
            <h4 className="text-white font-semibold mb-4">Model Pricing</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>GPT-5:</span>
                <span className="text-red-400">~$0.05 per message</span>
              </div>
              <div className="flex justify-between">
                <span>Claude 4 Opus:</span>
                <span className="text-purple-400">~$0.02 per message</span>
              </div>
              <div className="flex justify-between">
                <span>GPT-4:</span>
                <span className="text-blue-400">~$0.03 per message</span>
              </div>
              <div className="flex justify-between">
                <span>GPT-3.5:</span>
                <span className="text-green-400">~$0.002 per message</span>
              </div>
              <div className="flex justify-between">
                <span>GPT-4o Mini:</span>
                <span className="text-cyan-400">~$0.00015 per message</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-8 p-6 glass-effect rounded-2xl"
      >
        <h3 className="text-xl font-semibold text-white mb-4">Why Buy Credits?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 glass-effect rounded-2xl">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full accent-gradient flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="text-lg font-bold text-white mb-1">Instant Access</div>
            <div className="text-sm text-slate-400">Get immediate access to all 25 AI models without waiting</div>
          </div>
                     <div className="text-center p-4 glass-effect rounded-2xl">
             <div className="w-12 h-12 mx-auto mb-3 rounded-full accent-gradient flex items-center justify-center">
               <Coins className="w-6 h-6 text-white" />
             </div>
             <div className="text-lg font-bold text-white mb-1">SOL/USDC Payments</div>
             <div className="text-sm text-slate-400">Pay with SOL or USDC securely</div>
           </div>
          <div className="text-center p-4 glass-effect rounded-2xl">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full accent-gradient flex items-center justify-center">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <div className="text-lg font-bold text-white mb-1">Flexible Usage</div>
            <div className="text-sm text-slate-400">Use credits on any model, any time, no restrictions</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CryptoPayment
