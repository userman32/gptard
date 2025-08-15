import express from 'express'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3002

// Security middleware
app.use((req, res, next) => {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')
  next()
})

// CORS configuration with security
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://gptard.wtf', 'https://www.gptard.wtf', 'https://gptard.vercel.app']
    : ['http://localhost:3003', 'http://127.0.0.1:3003', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json({ limit: '10mb' }))

// Rate limiting - temporarily disabled for development
// import rateLimit from 'express-rate-limit'
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
//   message: 'Too many requests from this IP, please try again later.'
// })
// app.use('/api/', limiter)

// OpenAI configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, model = 'gpt-3.5-turbo' } = req.body

    if (!message) {
      return res.status(400).json({ error: 'Message is required' })
    }

    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'sk-your-openai-api-key-here') {
      return res.status(500).json({ 
        error: 'OpenAI API key not configured',
        message: 'Please add your OpenAI API key to the .env file'
      })
    }

    // Validate message length
    if (message.length > 4000) {
      return res.status(400).json({ error: 'Message too long (max 4000 characters)' })
    }

    const completion = await openai.createChatCompletion({
      model: model,
      messages: [
        {
          role: 'system',
          content: 'You are a helpful AI assistant. Provide clear, accurate, and helpful responses.'
        },
        {
          role: 'user',
          content: message
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    })

    const response = completion.data.choices[0].message.content

    res.json({ response })
  } catch (error) {
    console.error('OpenAI API Error:', error)
    res.status(500).json({ 
      error: 'Failed to get AI response',
      details: error.message 
    })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  })
})

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'gptard.wtf API Server',
    version: '1.0.0',
    status: 'running'
  })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`OpenAI API Key: ${process.env.OPENAI_API_KEY ? 'Configured' : 'Missing'}`)
})
