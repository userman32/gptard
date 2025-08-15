import { useAccount, useContractRead, useNetwork } from 'wagmi'
import { GPTARD_TOKEN_CONTRACT } from '../config/web3'
import { TOKEN_REQUIREMENTS, CREDIT_SYSTEM } from '../config/ai-models'

export const useTokenBalance = () => {
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()

  // Read token balance
  const { data: balance, isLoading: isBalanceLoading, error: balanceError } = useContractRead({
    address: GPTARD_TOKEN_CONTRACT.address,
    abi: GPTARD_TOKEN_CONTRACT.abi,
    functionName: 'balanceOf',
    args: [address],
    enabled: isConnected && !!address,
    watch: true,
  })

  // Read token decimals
  const { data: decimals, isLoading: isDecimalsLoading } = useContractRead({
    address: GPTARD_TOKEN_CONTRACT.address,
    abi: GPTARD_TOKEN_CONTRACT.abi,
    functionName: 'decimals',
    enabled: isConnected && !!address,
  })

  // Read token symbol
  const { data: symbol, isLoading: isSymbolLoading } = useContractRead({
    address: GPTARD_TOKEN_CONTRACT.address,
    abi: GPTARD_TOKEN_CONTRACT.abi,
    functionName: 'symbol',
    enabled: isConnected && !!address,
  })

  // Calculate actual token balance with decimals
  const actualBalance = balance && decimals 
    ? Number(balance) / Math.pow(10, decimals)
    : 0

  // Check if user has enough tokens
  const hasEnoughTokens = actualBalance >= TOKEN_REQUIREMENTS.MIN_TOKENS

  // Calculate credits based on token holdings (1 credit per 100 tokens)
  const credits = Math.floor(actualBalance / 100) * TOKEN_REQUIREMENTS.CREDITS_PER_100_TOKENS

  // Get current tier based on token holdings
  const currentTier = CREDIT_SYSTEM.tiers
    .filter(tier => actualBalance >= tier.minTokens)
    .sort((a, b) => b.minTokens - a.minTokens)[0] || CREDIT_SYSTEM.tiers[0]

  // Calculate daily credit allocation
  const dailyCredits = currentTier.creditsPerDay

  // Check if wallet is on supported network
  const isSupportedNetwork = chain && [1, 137].includes(chain.id)

  return {
    balance: actualBalance,
    symbol: symbol || 'GPTARD',
    hasEnoughTokens,
    credits,
    dailyCredits,
    currentTier,
    isConnected,
    isSupportedNetwork,
    isLoading: isBalanceLoading || isDecimalsLoading || isSymbolLoading,
    error: balanceError,
    address
  }
}
