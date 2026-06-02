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

module.exports = { fetchAllBusinesses, fetchWeakLeads }