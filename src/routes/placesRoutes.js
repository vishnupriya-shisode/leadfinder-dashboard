const express = require('express')
const router = express.Router()
const { importBusinesses } = require('../controllers/placesController')

router.get('/import', importBusinesses)

module.exports = router