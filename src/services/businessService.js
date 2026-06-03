const { getAllBusinesses, getWeakLeads } = require('../models/businessModel')

const fetchAllBusinesses = async (city, category) => {
    if (!city) throw new Error('City is required')
    const businesses = await getAllBusinesses(city, category)
    return businesses
}

const fetchWeakLeads = async (city, category) => {
    if (!city) throw new Error('City is required')
    const leads = await getWeakLeads(city, category)
    return leads
}
const createBusiness = async (businessData) => {
    const { name, city } = businessData

    if (!name) throw new Error('Business name is required')
    if (!city) throw new Error('City is required')

    const business = await createBusiness(businessData)
    return business
}

module.exports = { fetchAllBusinesses, fetchWeakLeads }