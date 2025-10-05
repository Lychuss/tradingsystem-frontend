# YES4TRADE Frontend

A full-stack trading marketplace platform built with **Next.js**, **Tailwind CSS**, and deployed on **Vercel**.  
Users can sign up, log in, trade, or sell products such as books, notes, and uniforms through a secure connection to the Express.js backend.

---

## Live Demo

**Frontend:** [https://tradingsystem-frontend.vercel.app](https://tradingsystem-frontend.vercel.app)  
**Backend API:** [Render Deployment](https://your-render-backend-url-here.onrender.com)

---

## Overview

YES4TRADE is a student-focused trading system for exchanging or selling academic materials within the SLSU community.  
The frontend provides an intuitive and responsive user interface that communicates with a secure backend API for authentication and product management.

---

## Features

- User authentication with JWT-based login and signup  
- Product posting with Cloudinary image uploads  
- Dynamic product feed fetched from the backend  
- Reusable components for input, button, and select elements  
- Responsive and modern UI built with Tailwind CSS  
- Continuous deployment via Vercel with Render-hosted backend integration  

---

## Folder Structure

my-app/
│
├── src/
│ ├── app/
│ │ ├── (auth)/ # Login and Sign-up pages
│ │ ├── (main)/ # Home and Trade pages with layout
│ │ ├── (components)/ # Reusable UI components
│ │ └── globals.css # Tailwind global styles
│ │
│ └── page.jsx # Entry point (redirects to /login)
│
├── public/ # Static assets
├── package.json
└── README.md

---

## Tech Stack

| Layer | Technology |
|-------|-------------|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Icons | React Icons |
| State Management | React Hooks (useState, useEffect) |
| API Calls | Fetch API |
| Deployment | Vercel |
| Backend | Express.js + PostgreSQL + JWT (Render) |

---

## Environment Variables

Create a `.env.local` file in the project root:

NEXT_PUBLIC_API_URL=https://your-backend-api.onrender.com


This variable points to your backend base URL.

---

## Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/yes4trade-frontend.git
   cd my-app


Install dependencies
npm install


Create the environment file
NEXT_PUBLIC_API_URL=http://localhost:5000


Run the development server
npm run dev


Open your application
http://localhost:3000

Page	Path	Description:
Login	/login	Authenticates users with JWT
Sign-Up	/sign-up	Registers a new SLSU student account
Home	/home	Displays all trade and sell listings
Trade Product	/trade-product	Allows users to post a product for trade or sale

Authentication Flow:
Login or signup through the frontend to generate a JWT token.
The token is stored in localStorage.
Protected routes such as /home and /trade-product send the token in the Authorization header.
The backend verifies the token and issues a new one if it is close to expiration.

Future Improvements:
Implement server-side route protection using Next.js Middleware
Add better form validation and user feedback with toasts instead of alerts
Introduce pagination and filters for browsing products
Migrate to TypeScript for improved maintainability and type safety

Author:
Raphael Mharcus San Juan
2nd-Year Computer Engineering Student
Full-Stack Developer (Next.js + Express)
Email: raphaelsanjuan6@gmail.com

License
This project is licensed under the MIT License.
You are free to use and modify the code with proper attribution.

Deployed on Vercel (Frontend) and Render (Backend).
