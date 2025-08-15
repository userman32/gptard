import express from 'express'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = 3001

// Middleware
app.use(cors())
app.use(express.json())

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

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key not configured' })
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
  res.json({ status: 'OK', message: 'Server is running' })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
