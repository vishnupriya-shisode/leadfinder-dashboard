const express = require('express')
const router = express.Router()
const { getAllBusinesses, getWeakLeads } = require('../controllers/businessController')

router.get('/', getAllBusinesses)
router.get('/leads', getWeakLeads)

module.exports = router