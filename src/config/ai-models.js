// AI Models Configuration
export const AI_MODELS = [
  {
    id: 'gpt-5',
    name: 'GPT-5',
    provider: 'OpenAI',
    description: 'Latest and most advanced GPT model with unprecedented reasoning capabilities',
    avatar: '🚀',
    price: 0.05, // USD per 1K tokens
    maxTokens: 128000,
    category: 'text',
    features: ['Advanced reasoning', 'Multimodal', 'Real-time knowledge', 'Superior coding'],
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'gpt-4-turbo',
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    description: 'Enhanced GPT-4 with larger context and improved performance',
    avatar: '⚡',
    price: 0.01, // USD per 1K tokens
    maxTokens: 128000,
    category: 'text',
    features: ['Large context', 'Fast responses', 'Multimodal', 'Cost effective'],
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'gpt-4',
    name: 'GPT-4',
    provider: 'OpenAI',
    description: 'Most capable GPT model, great for complex reasoning and creative tasks',
    avatar: '🤖',
    price: 0.03, // USD per 1K tokens
    maxTokens: 8192,
    category: 'text',
    features: ['Complex reasoning', 'Creative writing', 'Code generation', 'Analysis'],
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'gpt-3.5-turbo',
    name: 'GPT-3.5 Turbo',
    provider: 'OpenAI',
    description: 'Fast and efficient model for most everyday tasks',
    avatar: '⚡',
    price: 0.002, // USD per 1K tokens
    maxTokens: 4096,
    category: 'text',
    features: ['Fast responses', 'General purpose', 'Cost effective', 'Reliable'],
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'claude-4-opus',
    name: 'Claude 4 Opus',
    provider: 'Anthropic',
    description: 'Latest Claude model with superior reasoning and analysis capabilities',
    avatar: '🧠',
    price: 0.02, // USD per 1K tokens
    maxTokens: 200000,
    category: 'text',
    features: ['Superior reasoning', 'Long context', 'Mathematical analysis', 'Research'],
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 'claude-4-sonnet',
    name: 'Claude 4 Sonnet',
    provider: 'Anthropic',
    description: 'Balanced Claude 4 model with strong performance and efficiency',
    avatar: '🎯',
    price: 0.005, // USD per 1K tokens
    maxTokens: 200000,
    category: 'text',
    features: ['Balanced performance', 'Good reasoning', 'Cost effective', 'Versatile'],
    color: 'from-indigo-500 to-indigo-700'
  },
  {
    id: 'claude-3-opus',
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    description: 'Most powerful Claude model for complex analysis and reasoning',
    avatar: '🧠',
    price: 0.015, // USD per 1K tokens
    maxTokens: 200000,
    category: 'text',
    features: ['Deep analysis', 'Long context', 'Mathematical reasoning', 'Research'],
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 'claude-3-sonnet',
    name: 'Claude 3 Sonnet',
    provider: 'Anthropic',
    description: 'Balanced model with strong reasoning capabilities',
    avatar: '🎯',
    price: 0.003, // USD per 1K tokens
    maxTokens: 200000,
    category: 'text',
    features: ['Balanced performance', 'Good reasoning', 'Cost effective', 'Versatile'],
    color: 'from-indigo-500 to-indigo-700'
  },
  {
    id: 'claude-3-haiku',
    name: 'Claude 3 Haiku',
    provider: 'Anthropic',
    description: 'Fast and efficient Claude model for quick tasks',
    avatar: '🌸',
    price: 0.00025, // USD per 1K tokens
    maxTokens: 200000,
    category: 'text',
    features: ['Ultra fast', 'Cost effective', 'Quick responses', 'Efficient'],
    color: 'from-pink-500 to-pink-700'
  },
  {
    id: 'gemini-ultra',
    name: 'Gemini Ultra',
    provider: 'Google',
    description: 'Google\'s most advanced AI model with superior capabilities',
    avatar: '🌟',
    price: 0.015, // USD per 1K tokens
    maxTokens: 32768,
    category: 'text',
    features: ['Advanced reasoning', 'Multimodal', 'Superior coding', 'Research'],
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    provider: 'Google',
    description: 'Google\'s most capable model for text and code',
    avatar: '🔮',
    price: 0.0025, // USD per 1K tokens
    maxTokens: 32768,
    category: 'text',
    features: ['Code generation', 'Multilingual', 'Google integration', 'Fast'],
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'gemini-flash',
    name: 'Gemini Flash',
    provider: 'Google',
    description: 'Fast and efficient Gemini model for quick tasks',
    avatar: '⚡',
    price: 0.0005, // USD per 1K tokens
    maxTokens: 32768,
    category: 'text',
    features: ['Ultra fast', 'Cost effective', 'Quick responses', 'Efficient'],
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'grok',
    name: 'Grok',
    provider: 'xAI',
    description: 'Elon Musk\'s AI model with real-time knowledge and humor',
    avatar: '🤖',
    price: 0.025, // USD per 1K tokens
    maxTokens: 8192,
    category: 'text',
    features: ['Real-time knowledge', 'Humor', 'Controversial takes', 'Current events'],
    color: 'from-pink-500 to-red-600'
  },
  {
    id: 'grok-2',
    name: 'Grok-2',
    provider: 'xAI',
    description: 'Next generation Grok with enhanced capabilities and reasoning',
    avatar: '🚀',
    price: 0.035, // USD per 1K tokens
    maxTokens: 128000,
    category: 'text',
    features: ['Enhanced reasoning', 'Real-time knowledge', 'Advanced humor', 'Superior analysis'],
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 'llama-3-400b',
    name: 'Llama 3 400B',
    provider: 'Meta',
    description: 'Massive open source model with superior performance',
    avatar: '🦙',
    price: 0.002, // USD per 1K tokens
    maxTokens: 32768,
    category: 'text',
    features: ['Superior performance', 'Open source', 'Large context', 'Advanced reasoning'],
    color: 'from-orange-500 to-orange-700'
  },
  {
    id: 'llama-3-70b',
    name: 'Llama 3 70B',
    provider: 'Meta',
    description: 'Open source powerhouse for various tasks',
    avatar: '🦙',
    price: 0.001, // USD per 1K tokens
    maxTokens: 8192,
    category: 'text',
    features: ['Open source', 'Customizable', 'Cost effective', 'Community driven'],
    color: 'from-orange-500 to-orange-700'
  },
  {
    id: 'mistral-large',
    name: 'Mistral Large',
    provider: 'Mistral AI',
    description: 'High-performance model with excellent reasoning capabilities',
    avatar: '🌪️',
    price: 0.007, // USD per 1K tokens
    maxTokens: 32768,
    category: 'text',
    features: ['Excellent reasoning', 'Fast responses', 'Multilingual', 'Cost effective'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'mistral-medium',
    name: 'Mistral Medium',
    provider: 'Mistral AI',
    description: 'Balanced model with good performance and efficiency',
    avatar: '🌪️',
    price: 0.0024, // USD per 1K tokens
    maxTokens: 32768,
    category: 'text',
    features: ['Balanced performance', 'Good reasoning', 'Cost effective', 'Fast'],
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'mistral-small',
    name: 'Mistral Small',
    provider: 'Mistral AI',
    description: 'Fast and efficient model for quick tasks',
    avatar: '🌪️',
    price: 0.0007, // USD per 1K tokens
    maxTokens: 32768,
    category: 'text',
    features: ['Ultra fast', 'Cost effective', 'Quick responses', 'Efficient'],
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'cohere-command',
    name: 'Cohere Command',
    provider: 'Cohere',
    description: 'Enterprise-grade model with superior text generation',
    avatar: '🎯',
    price: 0.015, // USD per 1K tokens
    maxTokens: 32768,
    category: 'text',
    features: ['Enterprise grade', 'Superior generation', 'Business focused', 'Reliable'],
    color: 'from-teal-500 to-teal-700'
  },
  {
    id: 'cohere-command-light',
    name: 'Cohere Command Light',
    provider: 'Cohere',
    description: 'Fast and efficient Cohere model for quick tasks',
    avatar: '⚡',
    price: 0.0006, // USD per 1K tokens
    maxTokens: 32768,
    category: 'text',
    features: ['Fast responses', 'Cost effective', 'Quick generation', 'Efficient'],
    color: 'from-teal-500 to-green-600'
  },
  {
    id: 'perplexity-sonar',
    name: 'Perplexity Sonar',
    provider: 'Perplexity',
    description: 'Search-focused AI with real-time information retrieval',
    avatar: '🔍',
    price: 0.008, // USD per 1K tokens
    maxTokens: 16384,
    category: 'text',
    features: ['Real-time search', 'Current information', 'Research focused', 'Accurate'],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'perplexity-sonar-small',
    name: 'Perplexity Sonar Small',
    provider: 'Perplexity',
    description: 'Fast search-focused model for quick information retrieval',
    avatar: '🔍',
    price: 0.002, // USD per 1K tokens
    maxTokens: 16384,
    category: 'text',
    features: ['Fast search', 'Cost effective', 'Quick retrieval', 'Efficient'],
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'anthropic-claude-instant',
    name: 'Claude Instant',
    provider: 'Anthropic',
    description: 'Ultra-fast Claude model for instant responses',
    avatar: '⚡',
    price: 0.0008, // USD per 1K tokens
    maxTokens: 100000,
    category: 'text',
    features: ['Ultra fast', 'Instant responses', 'Cost effective', 'Efficient'],
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'openai-gpt-4o-mini',
    name: 'GPT-4o Mini',
    provider: 'OpenAI',
    description: 'Fast and efficient GPT-4o variant for quick tasks',
    avatar: '⚡',
    price: 0.00015, // USD per 1K tokens
    maxTokens: 16384,
    category: 'text',
    features: ['Ultra fast', 'Cost effective', 'Quick responses', 'Efficient'],
    color: 'from-green-500 to-blue-600'
  }
]

// Supported cryptocurrencies for payment
export const SUPPORTED_CRYPTO = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    icon: '🔷',
    decimals: 18,
    priceUSD: 2500 // Mock price, would be fetched from API
  },
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: '🟡',
    decimals: 8,
    priceUSD: 45000 // Mock price
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    icon: '💙',
    decimals: 6,
    priceUSD: 1
  },
  {
    symbol: 'USDT',
    name: 'Tether',
    icon: '💚',
    decimals: 6,
    priceUSD: 1
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    icon: '🟣',
    decimals: 9,
    priceUSD: 100 // Mock price
  }
]

// Credit system - purchase-based
export const CREDIT_SYSTEM = {
  name: 'Crypto-Based Credits',
  description: 'Purchase credits with cryptocurrency to use AI models',
  creditPriceUSD: 0.01, // $0.01 per credit
  benefits: [
    'Pay with your preferred cryptocurrency',
    'Credits never expire',
    'Use on any AI model',
    'Purchase more anytime'
  ]
}
