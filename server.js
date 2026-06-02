require('dotenv').config()
const express = require('express')
const cors = require('cors')
const supabase = require('./src/config/db')

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

// ─── Start server ─────────────────────────
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})