import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Wallet, LogOut, Copy, CheckCircle, AlertCircle } from 'lucide-react'

const WalletConnection = ({ onWalletConnected, onWalletDisconnected }) => {
  const [isConnected, setIsConnected] = useState(false)
  const [account, setAccount] = useState('')
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window
      if (ethereum) {
        const accounts = await ethereum.request({ method: 'eth_accounts' })
        if (accounts.length !== 0) {
          const account = accounts[0]
          setIsConnected(true)
          setAccount(account)
          onWalletConnected?.(account)
        }
      }
    } catch (error) {
      console.error('Error checking wallet connection:', error)
    }
  }

  const connectWallet = async () => {
    setIsConnecting(true)
    setError('')
    
    try {
      const { ethereum } = window
      
      if (!ethereum) {
        setError('Please install MetaMask!')
        setIsConnecting(false)
        return
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      })

      const account = accounts[0]
      setIsConnected(true)
      setAccount(account)
      onWalletConnected?.(account)
      
    } catch (error) {
      console.error('Error connecting wallet:', error)
      setError('Failed to connect wallet. Please try again.')
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setAccount('')
    onWalletDisconnected?.()
  }

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(account)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy address:', error)
    }
  }

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <div className="glass-card p-6 luxury-shadow">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Wallet className="w-6 h-6 mr-2 text-gradient" />
        Wallet Connection
      </h3>

      {!isConnected ? (
        <div className="text-center">
          <p className="text-slate-400 mb-4">
            Connect your MetaMask wallet to access the platform
          </p>
          
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm">{error}</span>
            </div>
          )}
          
          <button
            onClick={connectWallet}
            disabled={isConnecting}
            className="accent-gradient hover:shadow-lg disabled:opacity-50 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
          >
            {isConnecting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Connecting...</span>
              </>
            ) : (
              <>
                <Wallet className="w-5 h-5" />
                <span>Connect MetaMask</span>
              </>
            )}
          </button>
          
          <p className="text-xs text-slate-500 mt-3">
            Don't have MetaMask?{' '}
            <a 
              href="https://metamask.io/download/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Download here
            </a>
          </p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-medium">Wallet Connected</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <code className="text-slate-300 font-mono text-sm bg-slate-800 px-3 py-2 rounded-lg">
              {formatAddress(account)}
            </code>
            <button
              onClick={copyAddress}
              className="text-slate-400 hover:text-white transition-colors"
              title="Copy address"
            >
              {copied ? (
                <CheckCircle className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
          
          <button
            onClick={disconnectWallet}
            className="text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5 flex items-center space-x-2 mx-auto"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Disconnect</span>
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default WalletConnection
