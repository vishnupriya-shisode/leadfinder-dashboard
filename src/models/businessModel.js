const supabase = require('../config/db')

const getAllBusinesses = async (city, category) => {
    let query = supabase
        .from('businesses')
        .select('*')
        .eq('city', city)

    if (category) {
        query = query.eq('category', category)
    }

    const { data, error } = await query
    if (error) throw error
    return data
}

const getWeakLeads = async (city, category) => {
    let query = supabase
        .from('businesses')
        .select('*')
        .eq('city', city)
        .lt('rating', 3.0)
        .eq('has_website', false)

    if (category) {
        query = query.eq('category', category)
    }

    const { data, error } = await query
    if (error) throw error
    return data
}
const createBusiness = async (businessData) => {
    const { data, error } = await supabase
        .from('businesses')
        .insert([businessData])
        .select()

    if (error) throw error
    return data[0]
}
const updateBusiness = async (id, updateData) => {
  const { data, error } = await supabase
    .from('businesses')
    .update(updateData)
    .eq('id', id)
    .select()

  if (error) throw error
  if (!data || data.length === 0) throw new Error('Business not found')
  return data[0]
}

const deleteBusiness = async (id) => {
  const { error } = await supabase
    .from('businesses')
    .delete()
    .eq('id', id)

  if (error) throw error
  return true
}
module.exports = { getAllBusinesses, getWeakLeads, createBusiness, updateBusiness, deleteBusiness }