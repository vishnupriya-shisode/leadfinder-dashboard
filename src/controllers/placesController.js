const { searchAndSaveBusinesses } = require('../services/placesService')

const importBusinesses = async (req, res, next) => {
  try {
    const { city, category } = req.query

    if (!city) {
      return res.status(400).json({
        success: false,
        message: 'City is required'
      })
    }

    if (!category) {
      return res.status(400).json({
        success: false,
        message: 'Category is required'
      })
    }

    console.log(`Searching for ${category} in ${city}...`)
    const result = await searchAndSaveBusinesses(city, category)

    res.json({
      success: true,
      message: `Successfully imported ${result.saved} businesses`,
      saved: result.saved,
      data: result.businesses
    })
  } catch (err) {
    next(err)
  }
}

module.exports = { importBusinesses }