const businessService = require('../services/businessService')

const getAllBusinesses = async (req, res) => {
    try {
        const { city, category } = req.query
        const businesses = await businessService.fetchAllBusinesses(city, category)
        res.json({
            success: true,
            count: businesses.length,
            data: businesses
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const getWeakLeads = async (req, res) => {
    try {
        const { city, category } = req.query
        const leads = await businessService.fetchWeakLeads(city, category)
        res.json({
            success: true,
            count: leads.length,
            data: leads
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const addBusiness = async (req, res) => {
    try {
        const businessData = req.body
        const business = await businessService.addBusiness(businessData)
        res.status(201).json({
            success: true,
            message: 'Business added successfully',
            data: business
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { getAllBusinesses, getWeakLeads, addBusiness }