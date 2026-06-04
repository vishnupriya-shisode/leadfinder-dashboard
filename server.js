require('dotenv').config()
const express = require('express')
const cors = require('cors')
const supabase = require('./src/config/db')
const errorHandler = require('./src/middlewares/errorHandler')

const app = express()
const PORT = process.env.PORT || 8000

// ─── Test DB connection ───────────────────
console.log('Supabase connected:', !!supabase)


// ─── Middleware ───────────────────────────
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://leadfinder-frontend-eta.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(express.json())

// ─── Routes ───────────────────────────────
const businessRoutes = require('./src/routes/businessRoutes')
app.use('/api/businesses', businessRoutes)

app.get('/', (req, res) => {
    res.json({ message: 'API is running' })
})
const placesRoutes = require('./src/routes/placesRoutes')
app.use('/api/places', placesRoutes)

// ─── 404 handler ──────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  })
})

// ─── Error Handler ────────────────────────
app.use(errorHandler)

// ─── Start server ─────────────────────────
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})