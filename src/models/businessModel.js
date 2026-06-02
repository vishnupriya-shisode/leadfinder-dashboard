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

module.exports = { getAllBusinesses, getWeakLeads }