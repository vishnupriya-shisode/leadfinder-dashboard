const express = require('express')
const router = express.Router()
const businessController = require('../controllers/businessController')

router.get('/', businessController.getAllBusinesses)
router.get('/leads', businessController.getWeakLeads)
router.post('/', businessController.addBusiness)
router.post('/bulk', businessController.bulkAddBusinesses)
router.put('/:id', businessController.editBusiness)
router.delete('/:id', businessController.removeBusiness)


module.exports = router