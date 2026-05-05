# BelanjaPintar AI (MVP)

## Project Overview
BelanjaPintar AI adalah MVP AI Shopping Assistant untuk pasar Indonesia. Aplikasi ini memungkinkan user mencari produk via chat/query natural language (Bahasa Indonesia, English, mixed) lalu mendapat top 10 rekomendasi berbasis mock marketplace data.

## Features
- Homepage, Search, Results, Compare, Redirect, Admin Dashboard
- Rule-based query parser (budget, category, brand, official store, language)
- Recommendation engine dengan weighted scoring formula
- Product cards lengkap + CTA Beli Sekarang / Buy Now
- Mock affiliate redirect URL
- Mock admin analytics

## Tech Stack
- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- In-memory mock data (tanpa database eksternal)

## Run Locally
```bash
npm install
npm run dev
```

## Marketplace Data Compliance Note
MVP ini menggunakan mock data. **Dilarang scraping ilegal**. Untuk production, data marketplace wajib berasal dari official affiliate APIs, approved partner APIs, legal product feeds, affiliate networks, atau legal ecommerce data providers.

## Future Integration Plan
- Tambah connector resmi Shopee/Tokopedia lalu Blibli/Lazada
- Integrasi tracking conversion affiliate real
- Tambah persistence DB (PostgreSQL/Redis)
- Tambah personalization dan alert engine
