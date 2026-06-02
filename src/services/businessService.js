const { getAllBusinesses, getWeakLeads } = require('../models/businessModel')

const fetchAllBusinesses = async (city) => {
    if (!city) throw new Error('City is required')
    const businesses = await getAllBusinesses(city)
    return businesses
}

const fetchWeakLeads = async (city) => {
    if (!city) throw new Error('City is required')
    const leads = await getWeakLeads(city)
    return leads
}

module.exports = { fetchAllBusinesses, fetchWeakLeads }