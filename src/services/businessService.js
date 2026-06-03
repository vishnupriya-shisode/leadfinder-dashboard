const businessModel = require('../models/businessModel')
const { generateOutreach } = require('./aiService')
const AppError = require('../middlewares/AppError')

const fetchAllBusinesses = async (city, category) => {
  if (!city) throw new AppError('City is required', 400)
  const businesses = await businessModel.getAllBusinesses(city, category)
  return businesses
}

const fetchWeakLeads = async (city, category) => {
  if (!city) throw new AppError('City is required', 400)
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
  if (!name) throw new AppError('Business name is required', 400)
  if (!city) throw new AppError('City is required', 400)
  const business = await businessModel.createBusiness(businessData)
  return business
}

module.exports = { fetchAllBusinesses, fetchWeakLeads, addBusiness }