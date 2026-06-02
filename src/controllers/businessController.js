const { fetchAllBusinesses, fetchWeakLeads } = require('../services/businessService')

const getAllBusinesses = async (req, res) => {
    try {
        const { city, category } = req.query
        const businesses = await fetchAllBusinesses(city, category)
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
        const leads = await fetchWeakLeads(city, category)
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

module.exports = { getAllBusinesses, getWeakLeads }