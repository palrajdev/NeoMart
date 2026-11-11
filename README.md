# NeoMart — E-commerce Prototype

NeoMart is a work-in-progress e-commerce prototype with a Next.js storefront UI and a small Express backend. It is intended to demonstrate frontend composition and an initial API foundation.

> **Project status:** Prototype / in development. This repository is not a production-ready store yet.

## Current implementation

### Frontend
- Next.js 15 App Router with React and TypeScript
- HeroUI components and Tailwind CSS
- Product listing UI with sample product data
- Login and registration screens
- Responsive product-card and page components

**Important:** The current product list is hard-coded demo data. The Add to Cart interaction currently displays demo feedback; it does not persist a shopping cart or create an order.

### Backend
- Express.js API
- CORS, JSON parsing and cookie-parser middleware
- Health-check endpoint: `GET /api/health`

**Important:** Although database and authentication packages are present in the backend dependencies, database persistence, authentication APIs and end-to-end checkout are not currently implemented in the API.

## Tech stack

| Layer | Technologies |
| --- | --- |
| Frontend | Next.js 15, React, TypeScript |
| UI | HeroUI, Tailwind CSS, Framer Motion |
| Backend | Node.js, Express.js |
| Backend packages available | Sequelize, MySQL2, JWT, bcryptjs |

## Repository structure

```text
NeoMart/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── migrations/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── index.js
│   └── package.json
└── frontend/
    ├── app/
    ├── components/
    ├── config/
    ├── public/
    └── package.json
```

## Run locally

You need Node.js installed.

### 1. Start the backend

Open a terminal:

```bash
cd backend
yarn install
yarn dev
```

The API defaults to port `5000`. You can override it with a local `PORT` environment variable.

Health check:

```text
GET http://localhost:5000/api/health
```

### 2. Start the frontend

Open a second terminal from the repository root:

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Roadmap

- [ ] Replace hard-coded product data with a backend catalog API
- [ ] Implement persistent cart and order workflows
- [ ] Complete authentication and session handling
- [ ] Connect Sequelize models and MySQL migrations
- [ ] Add validation, automated tests and error handling
- [ ] Add deployment instructions and screenshots

## Notes

- Do not commit local `.env` files, access tokens, passwords or database credentials.
- Use an `.env.example` containing placeholder values to document required configuration.
- This README describes the current code state; update it as features become functional.
