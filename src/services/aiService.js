const Groq = require('groq-sdk')

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

const generateOutreach = async (business) => {
  const prompt = `Write a short friendly outreach message (2-3 sentences) for this local business:

Business name: ${business.name}
City: ${business.city}
Category: ${business.category}
Rating: ${business.rating} out of 5
Number of reviews: ${business.review_count}
Has website: ${business.has_website}
Has Instagram: ${business.instagram ? 'yes' : 'no'}

Mention their specific weaknesses and offer help. Be friendly, not pushy. Just the message, no subject line.`

  const completion = await groq.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'llama-3.1-8b-instant',
    max_tokens: 150
  })

  return completion.choices[0].message.content
}

module.exports = { generateOutreach }