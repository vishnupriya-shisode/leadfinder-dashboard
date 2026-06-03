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

module.exports = { getAllBusinesses, getWeakLeads, addBusiness }