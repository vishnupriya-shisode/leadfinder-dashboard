const businessModel = require('../models/businessModel')
const { generateOutreach } = require('./aiService')

const fetchAllBusinesses = async (city, category) => {
  if (!city) throw new Error('City is required')
  const businesses = await businessModel.getAllBusinesses(city, category)
  return businesses
}

const fetchWeakLeads = async (city, category) => {
  if (!city) throw new Error('City is required')
  const leads = await businessModel.getWeakLeads(city, category)

  const leadsWithOutreach = await Promise.all(
    leads.map(async (lead) => {
      const outreach = await generateOutreach(lead)
      return { ...lead, outreach }
    })
  )

  return leadsWithOutreach
}

const addBusiness = async (businessData) => {
  const { name, city } = businessData
  if (!name) throw new Error('Business name is required')
  if (!city) throw new Error('City is required')
  const business = await businessModel.createBusiness(businessData)
  return business
}

module.exports = { fetchAllBusinesses, fetchWeakLeads, addBusiness }