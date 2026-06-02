const supabase = require('../config/db')

const getAllBusinesses = async (city) => {
    const { data, error } = await supabase
        .from('businesses')
        .select('*')
        .eq('city', city)

    if (error) throw error
    return data
}

const getWeakLeads = async (city) => {
    const { data, error } = await supabase
        .from('businesses')
        .select('*')
        .eq('city', city)
        .lt('rating', 3.0)
        .eq('has_website', false)

    if (error) throw error
    return data
}

module.exports = { getAllBusinesses, getWeakLeads }