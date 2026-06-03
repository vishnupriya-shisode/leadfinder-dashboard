const express = require('express')
const router = express.Router()
const businessController = require('../controllers/businessController')

router.get('/', businessController.getAllBusinesses)
router.get('/leads', businessController.getWeakLeads)
router.post('/', businessController.addBusiness)

module.exports = router