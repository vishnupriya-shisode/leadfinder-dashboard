# LeadFinder — Backend API

A REST API for identifying local businesses with limited digital presence and generating AI-powered outreach messages.

## ✦ Technologies

* Node.js
* Express.js
* Supabase (PostgreSQL)
* Groq AI (LLaMA 3)
* Axios

## 🚀 Features

* Search businesses by city and category
* Identify potential leads based on digital presence indicators
* AI-generated personalized outreach messages
* Full CRUD operations for business records
* Bulk import endpoint for adding multiple businesses
* Global error handling and custom middleware
* Environment-based configuration using dotenv
* RESTful API architecture

## 🛠 The Process

I built this backend from scratch to better understand how production-ready APIs are structured and deployed.

The project started with a basic Express server before gradually introducing a layered architecture with routes, controllers, services, and database integrations. Following separation of concerns helped keep the codebase organized and maintainable as new features were added.

I connected the application to a PostgreSQL database hosted on Supabase and implemented API endpoints for managing business data. To add more value to the platform, I integrated Groq AI to generate personalized outreach messages for businesses that may benefit from improving their digital presence.

The API was deployed on Railway and configured using environment variables to support secure production deployments.

## 💡 What I Learned

* Express middleware, routing, and request handling
* API design principles and RESTful architecture
* Separation of concerns using controllers and services
* Connecting Node.js applications to a cloud PostgreSQL database
* Integrating AI APIs to generate dynamic content
* Environment variables and secure configuration management
* CORS, error handling, and production deployment on Railway

## 🖥 Running the Project

Clone the repository:

```bash
git clone https://github.com/vishnupriya-shisode/leadfinder-dashboard.git
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=8000
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
GROQ_API_KEY=your-groq-key
```

Run the development server:

```bash
npm run dev
```

The API will be available at:

```text
http://localhost:8000
```

## 📡 API Endpoints

| Method | Endpoint                            | Description                            |
| ------ | ----------------------------------- | -------------------------------------- |
| GET    | `/api/businesses?city=X`            | Get businesses by city                 |
| GET    | `/api/businesses?city=X&category=Y` | Filter businesses by city and category |
| GET    | `/api/businesses/leads?city=X`      | Get lead analysis with AI outreach     |
| POST   | `/api/businesses`                   | Create a new business                  |
| POST   | `/api/businesses/bulk`              | Bulk import businesses                 |
| PUT    | `/api/businesses/:id`               | Update a business                      |
| DELETE | `/api/businesses/:id`               | Delete a business                      |

## 🔗 Live API

https://leadfinder-dashboard-production.up.railway.app
