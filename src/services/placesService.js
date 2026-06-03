const axios = require('axios')
const businessModel = require('../models/businessModel')

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter'

const searchAndSaveBusinesses = async (city, category) => {
  const osmCategory = mapCategoryToOSM(category)

  const query = `[out:json][timeout:25];
area[name~"${city}",i]->.searchArea;
(
  node[${osmCategory}](area.searchArea);
  way[${osmCategory}](area.searchArea);
);
out body 20;`

  console.log('Sending query:', query)

  const response = await axios({
    method: 'post',
    url: OVERPASS_URL,
    data: `data=${encodeURIComponent(query)}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  const elements = response.data.elements
  if (!elements || elements.length === 0) {
    return { saved: 0, businesses: [], message: 'No businesses found' }
  }

  const businesses = elements
    .filter(el => el.tags && el.tags.name)
    .slice(0, 20)
    .map(el => ({
      name: el.tags.name,
      city: city,
      category: category,
      rating: null,
      review_count: 0,
      has_website: !!el.tags.website,
      instagram: el.tags['contact:instagram'] || null,
      phone: el.tags.phone || el.tags['contact:phone'] || null
    }))

  const saved = []
  for (const business of businesses) {
    try {
      const result = await businessModel.createBusiness(business)
      saved.push(result)
    } catch (err) {
      console.log('Skipped:', business.name)
    }
  }

  return { saved: saved.length, businesses: saved }
}

const mapCategoryToOSM = (category) => {
  const map = {
    'restaurant': 'amenity=restaurant',
    'cafe': 'amenity=cafe',
    'shop': 'shop=yes',
    'hotel': 'tourism=hotel',
    'pharmacy': 'amenity=pharmacy',
    'gym': 'leisure=fitness_centre',
    'salon': 'shop=hairdresser',
    'bakery': 'shop=bakery'
  }
  return map[category] || 'amenity=restaurant'
}

module.exports = { searchAndSaveBusinesses }