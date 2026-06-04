LeadFinder — Dashboard
A full-stack SaaS dashboard for identifying local businesses with weak digital presence and generating AI-powered outreach messages.

✦ Technologies

React
Vite
Recharts
Axios

🚀 Features

Search businesses by city and category
Bar chart showing business distribution by category
Live lead summary stats total, weak leads, no website, average rating
Business cards with weakness badges, no website, no Instagram, low reviews
AI-generated outreach messages for each weak lead
Color coded, rose for weak leads, mint for strong presence
Connects to a live REST API backend

🛠 The Process

I designed and built this dashboard to visualize data from my LeadFinder backend API. Started with a clean design system, violet and rose palette, minimal cards, consistent spacing. Built each component independently-->  Navbar, SearchBar, BusinessCard, Charts, then composed them into the Dashboard page. Connected it to the live Railway backend using Axios. Deployed on Vercel with automatic redeployment on every push.

💡 What I Learned

React component architecture and props
useState and async data fetching in React
How to use Recharts for data visualization
Connecting a React frontend to a deployed REST API
Deploying a Vite React app on Vercel
Monorepo structure for full-stack projects

🖥 Running the Project

Clone the repository

   git clone https://github.com/vishnupriya-shisode/leadfinder-frontend.git

Install dependencies

   npm install

Update the API base URL in src/services/api.js

   const API_BASE = 'http://localhost:8000'

Run the development server

   npm run dev

Open http://localhost:5173 in your browser

🔗 Live Demo
https://leadfinder-frontend-eta.vercel.app
🔗 Backend Repo
https://github.com/vishnupriya-shisode/leadfinder-dashboard
