import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Wallet, CreditCard, Coins, ArrowRight, CheckCircle, AlertCircle, TrendingUp, Bitcoin, Ethereum, Zap } from 'lucide-react'
import { SUPPORTED_CRYPTO } from '../config/ai-models'

const CryptoPayment = ({ onPurchaseCredits, userCredits }) => {
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
    // Simulate crypto payment processing
    setTimeout(() => {
      onPurchaseCredits(creditAmount)
      setIsProcessing(false)
    }, 3000)
  }

  const presetAmounts = [100, 500, 1000, 5000]

  const getCryptoIcon = (symbol) => {
    switch (symbol) {
      case 'ETH': return <Ethereum className="w-5 h-5" />
      case 'BTC': return <Bitcoin className="w-5 h-5" />
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
          Buy Credits with Crypto
        </h2>
        <p className="text-slate-400 text-lg">Purchase credits using your preferred cryptocurrency</p>
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

          {/* Crypto Selection */}
          <div className="p-6 glass-effect rounded-2xl">
            <h4 className="text-white font-semibold mb-4">Select Cryptocurrency</h4>
            <div className="space-y-3">
              {SUPPORTED_CRYPTO.map((crypto) => (
                <button
                  key={crypto.symbol}
                  onClick={() => setSelectedCrypto(crypto)}
                  className={`w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300 ${
                    selectedCrypto.symbol === crypto.symbol
                      ? 'accent-gradient text-white shadow-lg'
                      : 'glass-effect text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
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
              disabled={isProcessing || creditAmount <= 0}
              className="w-full accent-gradient hover:shadow-lg disabled:opacity-50 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 hover-lift"
            >
              {isProcessing ? (
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
              <Bitcoin className="w-6 h-6 text-white" />
            </div>
            <div className="text-lg font-bold text-white mb-1">Crypto Payments</div>
            <div className="text-sm text-slate-400">Pay with your preferred cryptocurrency securely</div>
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
