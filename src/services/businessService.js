const businessModel = require('../models/businessModel')

const fetchAllBusinesses = async (city, category) => {
    if (!city) throw new Error('City is required')
    const businesses = await businessModel.getAllBusinesses(city, category)
    return businesses
}

const fetchWeakLeads = async (city, category) => {
    if (!city) throw new Error('City is required')
    const leads = await businessModel.getWeakLeads(city, category)
    return leads
}

const addBusiness = async (businessData) => {
    const { name, city } = businessData
    if (!name) throw new Error('Business name is required')
    if (!city) throw new Error('City is required')
    const business = await businessModel.createBusiness(businessData)
    return business
}

module.exports = { fetchAllBusinesses, fetchWeakLeads, addBusiness }