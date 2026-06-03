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
app.use(cors())
app.use(express.json())

// ─── Routes ───────────────────────────────
const businessRoutes = require('./src/routes/businessRoutes')
app.use('/api/businesses', businessRoutes)

app.get('/', (req, res) => {
    res.json({ message: 'API is running' })
})

// ─── 404 handler ──────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  })
})

// ─── Global error handler ─────────────────
app.use(errorHandler)

// ─── Error Handler ────────────────────────
app.use(errorHandler)

// ─── Start server ─────────────────────────
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})