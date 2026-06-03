const businessService = require('../services/businessService')

const getAllBusinesses = async (req, res, next) => {
  try {
    const { city, category } = req.query
    const businesses = await businessService.fetchAllBusinesses(city, category)
    res.json({
      success: true,
      count: businesses.length,
      data: businesses
    })
  } catch (error) {
    next(error)
  }
}

const getWeakLeads = async (req, res, next) => {
  try {
    const { city, category } = req.query
    const leads = await businessService.fetchWeakLeads(city, category)
    res.json({
      success: true,
      count: leads.length,
      data: leads
    })
  } catch (error) {
    next(error)
  }
}

const addBusiness = async (req, res, next) => {
  try {
    const businessData = req.body
    const business = await businessService.addBusiness(businessData)
    res.status(201).json({
      success: true,
      message: 'Business added successfully',
      data: business
    })
  } catch (error) {
    next(error)
  }
}
const editBusiness = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateData = req.body
    const business = await businessService.editBusiness(id, updateData)
    res.json({
      success: true,
      message: 'Business updated successfully',
      data: business
    })
  } catch (err) {
    next(err)
  }
}

const removeBusiness = async (req, res, next) => {
  try {
    const { id } = req.params
    await businessService.removeBusiness(id)
    res.json({
      success: true,
      message: 'Business deleted successfully'
    })
  } catch (err) {
    next(err)
  }
}
const bulkAddBusinesses = async (req, res, next) => {
  try {
    const businessesArray = req.body
    const saved = await businessService.bulkAddBusinesses(businessesArray)
    res.status(201).json({
      success: true,
      message: `Successfully saved ${saved.length} businesses`,
      total: businessesArray.length,
      saved: saved.length,
      failed: businessesArray.length - saved.length,
      data: saved
    })
  } catch (err) {
    next(err)
  }
}

module.exports = { getAllBusinesses, getWeakLeads, addBusiness, editBusiness, removeBusiness, bulkAddBusinesses }