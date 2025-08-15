import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Wallet, Coins } from 'lucide-react'

const CryptoDashboard = () => {
  const [portfolio, setPortfolio] = useState({
    totalValue: 15420.69,
    change24h: 8.42,
    isPositive: true
  })

  const [cryptoData, setCryptoData] = useState([
    { symbol: 'BTC', name: 'Bitcoin', price: 43250.69, change24h: 2.34, isPositive: true },
    { symbol: 'ETH', name: 'Ethereum', price: 2650.42, change24h: -1.23, isPositive: false },
    { symbol: 'SOL', name: 'Solana', price: 98.76, change24h: 5.67, isPositive: true },
    { symbol: 'DOGE', name: 'Dogecoin', price: 0.0876, change24h: 12.34, isPositive: true },
    { symbol: 'PEPE', name: 'Pepe', price: 0.00000420, change24h: -8.90, isPositive: false }
  ])

  const [holdings, setHoldings] = useState([
    { symbol: 'BTC', amount: 0.25, value: 10812.67 },
    { symbol: 'ETH', amount: 1.5, value: 3975.63 },
    { symbol: 'SOL', amount: 25, value: 2469.00 },
    { symbol: 'DOGE', amount: 50000, value: 4380.00 },
    { symbol: 'PEPE', amount: 1000000000, value: 4200.00 }
  ])

  useEffect(() => {
    // Simulate real-time price updates
    const interval = setInterval(() => {
      setCryptoData(prev => prev.map(coin => ({
        ...coin,
        price: coin.price * (1 + (Math.random() - 0.5) * 0.02),
        change24h: coin.change24h + (Math.random() - 0.5) * 2
      })))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-degen-gray rounded-lg border border-degen-red glow-border p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Wallet className="w-6 h-6 mr-2 text-degen-red" />
            Portfolio Overview
          </h2>
          <div className="text-right">
            <div className="text-3xl font-bold text-white">${portfolio.totalValue.toLocaleString()}</div>
            <div className={`flex items-center text-sm ${portfolio.isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {portfolio.isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
              {portfolio.change24h > 0 ? '+' : ''}{portfolio.change24h}% (24h)
            </div>
          </div>
        </div>
      </motion.div>

      {/* Market Prices */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-degen-gray rounded-lg border border-degen-red glow-border p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2 text-degen-red" />
          Live Prices
        </h3>
        <div className="space-y-3">
          {cryptoData.map((coin, index) => (
            <motion.div
              key={coin.symbol}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center justify-between p-3 bg-degen-light rounded-lg border border-gray-700"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-degen-red rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs">{coin.symbol}</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{coin.name}</div>
                  <div className="text-gray-400 text-sm">{coin.symbol}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-semibold">
                  ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 })}
                </div>
                <div className={`flex items-center text-sm ${coin.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {coin.isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                  {coin.change24h > 0 ? '+' : ''}{coin.change24h.toFixed(2)}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Holdings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-degen-gray rounded-lg border border-degen-red glow-border p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Coins className="w-5 h-5 mr-2 text-degen-red" />
          Your Holdings
        </h3>
        <div className="space-y-3">
          {holdings.map((holding, index) => (
            <motion.div
              key={holding.symbol}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + 0.1 * index }}
              className="flex items-center justify-between p-3 bg-degen-light rounded-lg border border-gray-700"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-degen-red rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs">{holding.symbol}</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{holding.symbol}</div>
                  <div className="text-gray-400 text-sm">
                    {holding.amount.toLocaleString()} {holding.symbol}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-semibold">${holding.value.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">
                  {((holding.value / portfolio.totalValue) * 100).toFixed(1)}% of portfolio
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 gap-4"
      >
        <button className="bg-degen-red hover:bg-accent-red text-white p-4 rounded-lg font-bold transition-colors duration-200 flex items-center justify-center">
          <DollarSign className="w-5 h-5 mr-2" />
          Buy Crypto
        </button>
        <button className="bg-degen-gray hover:bg-degen-light border border-degen-red text-white p-4 rounded-lg font-bold transition-colors duration-200 flex items-center justify-center">
          <BarChart3 className="w-5 h-5 mr-2" />
          View Charts
        </button>
      </motion.div>
    </div>
  )
}

export default CryptoDashboard
