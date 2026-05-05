# Product Requirement Document (PRD)
## AI Shopping Assistant Indonesia

## 1) Ringkasan Produk
**Nama produk:** AI Shopping Assistant Indonesia  
**Platform:** Web app (mobile-first)  
**Value proposition:** Membantu pengguna Indonesia menemukan **10 produk terbaik** lintas marketplace (MVP: Shopee + Tokopedia) dengan chat natural language (Bahasa Indonesia, English, dan mixed-language), lalu mengarahkan user ke marketplace via affiliate link.

---

## 2) Visi, Misi, dan Tujuan Bisnis
### Visi
Menjadi asisten belanja AI paling terpercaya di Indonesia untuk keputusan pembelian yang cepat, aman, dan value-for-money.

### Misi
1. Mengurangi kebingungan user saat membandingkan produk lintas marketplace.  
2. Mendorong pembelian produk original melalui official store preference.  
3. Mengoptimalkan affiliate conversion lewat rekomendasi relevan dan transparan.

### Tujuan Bisnis (12 bulan)
- Mencapai monthly active users (MAU) awal 100k.
- CTR rekomendasi > 15%.
- Affiliate conversion rate > 3% dari total klik.
- Repeat usage rate (30-day) > 25%.

---

## 3) Problem Statement
User marketplace Indonesia mengalami:
- Information overload (terlalu banyak listing serupa).
- Sulit membandingkan harga, diskon, rating, dan status official store antar marketplace.
- Risiko membeli produk palsu/non-original.
- Review terlalu banyak dan sulit disarikan.
- Harga/promo berubah cepat.

**Opportunity:** AI conversational assistant yang mengubah intent user menjadi shortlist produk yang clear, comparable, dan actionable.

---

## 4) Market Analysis Indonesia
### 4.1 Kondisi Pasar
- Indonesia memiliki penetrasi e-commerce tinggi di urban dan non-urban.
- Perilaku belanja didorong promo, voucher, cashback, gratis ongkir, dan COD.
- Pengguna aktif lintas marketplace, sering cross-check harga secara manual.

### 4.2 Gap Pasar
- Belum banyak tool yang menggabungkan **chat-based discovery + recommendation scoring + affiliate redirection** secara localized untuk Indonesia.

### 4.3 Positioning
- “AI co-pilot belanja online Indonesia” untuk discovery + compare + convert.

### 4.4 Competitive Edge
1. Mixed-language understanding (ID + EN).
2. Official store-aware scoring.
3. Multi-marketplace aggregation (phase-wise).
4. Explainable recommendation (why this product).

---

## 5) Target User Persona
### Persona A: “Hemat Cerdas” (Discount Hunter)
- Umur 22–35, aktif promo hunting.
- Pain: capek bandingkan harga manual.
- Need: harga termurah + diskon terbaik + ongkir efisien.

### Persona B: “Ibu Praktis” (Mom & Home Shopper)
- Umur 28–40, fokus keamanan & keaslian.
- Pain: takut barang palsu, review membingungkan.
- Need: official store, review summary, rekomendasi aman.

### Persona C: “Gadget Seeker / Gamer”
- Umur 18–34, paham spesifikasi.
- Pain: banyak varian, sulit cari best value.
- Need: scoring berbasis performa, rating, value.

### Persona D: “UMKM Buyer”
- Umur 24–45, beli alat usaha.
- Pain: budget ketat, butuh reliability.
- Need: bulk-friendly, store trust, pengiriman cepat.

---

## 6) Product Scope
## 6.1 MVP (Phase 1)
1. Bilingual UI (Bahasa Indonesia default + English).  
2. AI chat search (ID/EN/mixed input).  
3. Top 10 recommendations.  
4. Product comparison table.  
5. Marketplace support: Shopee + Tokopedia.  
6. Official store filter.  
7. Budget filter & marketplace filter.  
8. Basic affiliate link tracking.  
9. Basic admin analytics dashboard.

## 6.2 Post-MVP (Phase 2+)
- Blibli & Lazada integration.
- Price drop alert.
- Wishlist.
- Personalization.
- WhatsApp assistant, Telegram bot, extension, mobile app.
- Sentiment analysis & fake review detection.
- Cashback/voucher optimization.

---

## 7) Functional Requirements
### 7.1 AI Chat Assistant
- User dapat input query natural language.
- AI auto-detect language (id/en/mixed).
- AI extract intent + entities:
  - product_category
  - budget_min, budget_max
  - brand_preference
  - marketplace_preference
  - official_store_preference
  - quality_preference
  - urgency
  - location (opsional)
  - discount_preference

### 7.2 Recommendation Results (Top 10)
Setiap item wajib menampilkan:
1. Nama produk
2. Marketplace
3. Nama toko
4. Official/non-official
5. Harga
6. Diskon
7. Rating
8. Jumlah terjual
9. Ringkasan review
10. Kelebihan
11. Kekurangan
12. Estimasi ongkir (jika tersedia)
13. Alasan cocok
14. Skor rekomendasi
15. CTA localized
16. Affiliate link

### 7.3 Product Comparison Table
- Kolom minimal: Price, Discount, Rating, Sold, Official status, Est. shipping, Score.
- Sorting: Best Value, Cheapest, Highest Rated, Fast Delivery.

### 7.4 Filters
- Marketplace, budget, brand, official store only, sort type.

### 7.5 Admin Dashboard
- Total search
- Total clicks
- CTR
- Top keyword
- Top category
- Top clicked product
- Top clicked marketplace
- Estimated GMV
- Estimated affiliate commission
- Language usage (ID vs EN)
- Conversion by category
- Campaign performance

---

## 8) Non-Functional Requirements
- Availability target: 99.5% (MVP)
- P95 API latency (search-to-result): < 4 detik (cached path)
- Security: JWT auth untuk admin, encrypted credentials, audit logs
- Scalability: stateless API + Redis cache + async workers
- Observability: centralized logs, tracing, metrics dashboard

---

## 9) User Journey
1. User buka homepage (default Bahasa Indonesia).  
2. User ketik kebutuhan (“Cari HP gaming 3 jutaan kamera bagus”).  
3. AI memahami intent, tanya klarifikasi singkat jika perlu.  
4. Backend query aggregator (Shopee/Tokopedia).  
5. Normalisasi data + scoring engine.  
6. Hasil top 10 tampil + reason + pros/cons + CTA.  
7. User klik “Beli Sekarang”.  
8. Redirect ke affiliate link marketplace.  
9. Event click tersimpan untuk analytics & estimasi komisi.

---

## 10) AI Agent Flow (Detail)
1. **Language Detection**: classify {id, en, mixed}.  
2. **Intent & Entity Extraction**: parse kebutuhan user.  
3. **Clarification Manager**: jika confidence < threshold (mis. 0.7), ajukan 1 pertanyaan ringkas.  
4. **Search Orchestrator**: hit connector APIs approved data source.  
5. **Normalization Layer**: satukan schema lintas marketplace.  
6. **Scoring Engine**: hitung score multi-factor.  
7. **Explanation Generator**: buat reason/pros/cons berbasis data.  
8. **Response Localizer**: format bahasa + currency + CTA.  
9. **Affiliate Resolver**: generate tracking URL.  
10. **Telemetry Logger**: log search, impression, click.

---

## 11) Product Scoring Logic
Formula dasar:

**Product Score =**
- Relevance to user need: 30%
- Official store status: 20%
- Price competitiveness: 15%
- Review quality: 15%
- Discount value: 10%
- Sales volume: 5%
- Availability/delivery: 5%

### 11.1 Implementasi Teknis
- Normalisasi semua komponen ke skala 0–100.
- Final score = Σ(weight_i * normalized_i).

Contoh komponen:
- **Relevance**: cosine/semantic match query vs title/spec/review summary.
- **Official store**: 100 (official), 40 (non-official), 0 (unknown jika strict mode).
- **Price competitiveness**: percentile ranking dalam kandidat serupa.
- **Review quality**: gabungan rating, review count, review text confidence.
- **Discount value**: effective discount + voucher eligible indicator.
- **Sales volume**: log-scaled sold units.
- **Availability/delivery**: in-stock + est shipping SLA.

### 11.2 Guardrails
- Hard filter opsional: official_store_only = true.
- Penalti besar untuk data incomplete.
- Tie-breaker: official store > rating > lower price.

---

## 12) UI/UX Page Structure
1. **Home/Chat Page**
   - Search chat box
   - Quick prompt chips
   - Language switcher (ID/EN)
2. **Results Page**
   - Top 10 recommendation cards
   - Filter sidebar
   - Sort dropdown
   - Compare button
3. **Comparison Page/Section**
   - Table view antar produk
4. **Product Detail Drawer/Modal**
   - Review summary, pros-cons, score breakdown
5. **Admin Dashboard**
   - KPI cards
   - Trend chart
   - Table top keyword/category/product

**Localization UX**
- Currency format: Rp3.000.000
- CTA:
  - ID: Beli Sekarang, Bandingkan, Lihat Detail
  - EN: Buy Now, Compare, View Details

---

## 13) Technical Architecture
### 13.1 Frontend
- Next.js + React + Tailwind
- i18n framework (mis. next-intl)
- State: React Query + lightweight store (Zustand)

### 13.2 Backend Services
1. **API Gateway / BFF**
2. **AI Orchestrator Service**
3. **Marketplace Connector Service** (MVP: Shopee, Tokopedia)
4. **Product Normalization Service**
5. **Recommendation Engine**
6. **Affiliate Link Service**
7. **Tracking & Analytics Service**
8. **Admin Service**

### 13.3 Data Layer
- PostgreSQL (OLTP)
- Redis cache (query, result snippets)
- Optional vector DB (semantic retrieval)

### 13.4 Infra
- Containerized deployment (Docker + Kubernetes/managed service)
- CDN + WAF
- Queue (Redis streams/Kafka-like managed) untuk async jobs

---

## 14) Database Schema (High-Level)
### Core Tables
1. `users`
- id, email/anon_id, locale_preference, created_at

2. `search_sessions`
- id, user_id, query_raw, language_detected, intent_json, created_at

3. `products`
- id, source_marketplace, source_product_id, title, brand, category, spec_json

4. `stores`
- id, source_marketplace, source_store_id, store_name, is_official, rating

5. `offers`
- id, product_id, store_id, price, discount_pct, stock_status, sold_count, rating, review_count, est_shipping_cost, est_delivery_days, fetched_at

6. `recommendations`
- id, search_session_id, product_id, offer_id, score_total, score_breakdown_json, reason_text, pros_json, cons_json, rank

7. `affiliate_links`
- id, marketplace, product_id, offer_id, tracking_url, campaign_id, created_at

8. `click_events`
- id, recommendation_id, affiliate_link_id, user_id, clicked_at, device, referrer

9. `conversion_events` (opsional via postback)
- id, click_event_id, order_value, commission_value, converted_at

10. `admin_daily_metrics`
- date, total_search, total_click, ctr, est_gmv, est_commission, lang_id_pct, lang_en_pct

---

## 15) API Endpoint List (MVP)
### Public/User
- `POST /api/v1/chat/query`
- `POST /api/v1/chat/clarify`
- `GET /api/v1/recommendations/{session_id}`
- `GET /api/v1/recommendations/{session_id}/compare`
- `GET /api/v1/products/{product_id}`
- `POST /api/v1/affiliate/resolve`
- `POST /api/v1/events/click`

### Admin
- `GET /api/v1/admin/metrics/overview`
- `GET /api/v1/admin/metrics/top-keywords`
- `GET /api/v1/admin/metrics/top-categories`
- `GET /api/v1/admin/metrics/top-products`
- `GET /api/v1/admin/metrics/top-marketplaces`
- `GET /api/v1/admin/metrics/lang-usage`
- `GET /api/v1/admin/metrics/conversion-by-category`

### Internal
- `POST /internal/marketplace/shopee/search`
- `POST /internal/marketplace/tokopedia/search`
- `POST /internal/normalize/products`
- `POST /internal/recommend/score`

---

## 16) MVP Development Roadmap (16 Minggu)
### Phase 0 (Minggu 1–2): Foundation
- Product discovery final
- Data source legal validation
- System design & schema final

### Phase 1 (Minggu 3–6): Core Build
- Chat UI + i18n
- AI intent extraction v1
- Shopee/Tokopedia connector v1
- Product normalization pipeline

### Phase 2 (Minggu 7–10): Recommendation & Comparison
- Scoring engine v1
- Top 10 results page
- Comparison table
- Official/budget/marketplace filters

### Phase 3 (Minggu 11–13): Affiliate & Tracking
- Affiliate resolver
- Click tracking
- Basic dashboard metrics

### Phase 4 (Minggu 14–16): Hardening & Launch
- QA + load test
- Security review
- Analytics validation
- Soft launch + iteration

---

## 17) Monetization Strategy
1. **Affiliate commission** (primary)
2. **Sponsored placement** (dengan label “Sponsored”, transparan)
3. **Premium insights for merchants** (future B2B)
4. **Campaign management fee** untuk brand partnership

### KPI Monetization
- EPC (earning per click)
- CTR by category
- Commission per session
- Conversion rate per marketplace

---

## 18) Risk & Mitigation
1. **Data compliance risk**  
   Mitigasi: gunakan official APIs/approved feeds, legal review berkala.

2. **Data freshness risk**  
   Mitigasi: TTL cache adaptif + refresh scheduler + fallback stale label.

3. **Affiliate attribution loss**  
   Mitigasi: robust click ID, postback reconciliation, retry webhook.

4. **Hallucination AI**  
   Mitigasi: data-grounded response template, confidence threshold, deterministic post-processing.

5. **Bias rekomendasi**  
   Mitigasi: explainable scoring + audit random sample.

6. **Scalability spike saat campaign**  
   Mitigasi: autoscaling, caching intensif, async queue.

---

## 19) Compliance & Governance
- Dilarang scraping ilegal marketplace.
- Wajib patuh ToS affiliate/partner APIs.
- Simpan PII minimal, patuhi regulasi privasi yang berlaku.
- Transparency label untuk sponsored recommendation.

---

## 20) Contoh AI Chat (Bahasa Indonesia)
**User:** “Cari HP gaming 3 jutaan yang kameranya bagus, prefer official store.”  
**AI:** “Siap! Biar lebih tepat, Anda prefer merek tertentu (mis. Xiaomi/Infinix/Samsung) dan marketplace Shopee/Tokopedia atau dua-duanya?”  
**User:** “Dua-duanya, bebas merek.”  
**AI:** “Berikut 10 rekomendasi terbaik untuk budget sekitar Rp3.000.000 dengan prioritas performa gaming + kamera dan official store. Saya urutkan berdasarkan skor rekomendasi dan value.”

---

## 21) Contoh AI Chat (English)
**User:** “Recommend laptop under 8 million for work and light gaming.”  
**AI:** “Got it. Do you prefer official stores only, and any brand preference (ASUS, Acer, Lenovo)?”  
**User:** “Official store only, no brand preference.”  
**AI:** “Great — here are the top 10 options under Rp8,000,000 ranked by performance-value score, review quality, and store authenticity.”

---

## 22) Contoh AI Chat Mixed-Language (Indonesia)
**User:** “I need stroller bayi yang ringan dan compact, under 2 juta.”  
**AI:** “Siap, aku bantu. Mau prioritas official store dan bisa COD?”  
**User:** “Yes, official store kalau bisa.”  
**AI:** “Oke, ini 10 stroller terbaik di bawah Rp2.000.000 dari official store (jika tersedia), dengan fokus lightweight, mudah dilipat, dan review positif.”

---

## 23) Success Metrics (North Star & Supporting)
### North Star
- Qualified recommendation click-through (QR-CTR): % sesi yang menghasilkan klik pada produk dengan score > threshold.

### Supporting Metrics
- Search-to-result latency
- Clarification rate
- CTR per category
- Conversion proxy (postback coverage)
- Repeat usage 7/30 hari
- Official store selection rate

---

## 24) Open Questions (Before Build)
1. Provider resmi mana yang paling lengkap untuk data Shopee/Tokopedia?  
2. Model affiliate attribution yang tersedia (server-to-server postback vs reporting delay)?  
3. Apakah est. ongkir tersedia real-time dari API partner?  
4. Batas legal untuk menyimpan ringkasan review dan durasi retensi data?

---

## 25) Kesimpulan
MVP ini fokus pada **trust + speed + value**: user cukup chat, sistem membandingkan lintas marketplace secara legal, lalu memberikan rekomendasi terukur dan explainable dalam Bahasa Indonesia/English dengan pengalaman yang lokal untuk Indonesia.
