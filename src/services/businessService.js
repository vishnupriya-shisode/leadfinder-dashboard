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
const editBusiness = async (id, updateData) => {
  if (!id) throw new AppError('Business ID is required', 400)
  if (Object.keys(updateData).length === 0) {
    throw new AppError('No update data provided', 400)
  }
  const business = await businessModel.updateBusiness(id, updateData)
  return business
}

const removeBusiness = async (id) => {
  if (!id) throw new AppError('Business ID is required', 400)
  await businessModel.deleteBusiness(id)
  return true
}
module.exports = { fetchAllBusinesses, fetchWeakLeads, addBusiness, editBusiness, removeBusiness }