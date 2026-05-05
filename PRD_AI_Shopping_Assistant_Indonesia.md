# Product Requirements Document (PRD)
## AI Shopping Assistant Indonesia

## 1. Ringkasan Produk
**AI Shopping Assistant Indonesia** adalah web app berbasis AI untuk membantu pengguna Indonesia menemukan produk terbaik lintas marketplace (MVP: Shopee & Tokopedia; fase berikutnya: Blibli & Lazada) melalui percakapan natural language (Bahasa Indonesia, English, dan mixed language).

### Problem Statement
Pengguna marketplace di Indonesia menghadapi:
- Information overload (terlalu banyak listing)
- Sulit membandingkan harga, diskon, kualitas toko, dan review antar marketplace
- Risiko produk palsu/non-official store
- Perubahan harga dan promo cepat

### Solusi
AI Agent melakukan:
1. Intent & preference extraction dari chat user
2. Aggregation produk dari data source legal/approved
3. Normalisasi atribut produk lintas marketplace
4. Ranking berbasis scoring engine
5. Menyajikan Top 10 rekomendasi + alasan yang personalized

---

## 2. Tujuan Produk
### Business Goals
- Meningkatkan affiliate click-through dan conversion
- Menjadi trusted shopping companion untuk market Indonesia
- Membangun data moat dari search intent, click behavior, dan conversion pattern

### Product Goals
- Mengurangi waktu user untuk menemukan produk terbaik
- Meningkatkan kepercayaan pembelian melalui official store + review insight
- Memberikan perbandingan value-for-money yang transparan

### Success Metrics (North Star & KPI)
- **North Star**: Qualified Affiliate Clicks per Active User (QAC/AU)
- KPI utama:
  - CTR rekomendasi produk
  - Conversion to purchase (estimated via affiliate callbacks/report)
  - Average time-to-decision
  - Search success rate (user tidak reformulate >2x)
  - Official store recommendation ratio
  - Language routing accuracy (ID/EN/mixed)

---

## 3. Market Analysis Indonesia
### Market Context
- Indonesia adalah mobile-first ecommerce market dengan perilaku belanja promo-driven.
- Pengguna sensitif terhadap: harga, diskon, gratis ongkir, cashback, COD, rating, dan official badge.
- Cross-marketplace comparison saat ini masih manual (buka banyak app/tab).

### Opportunity
- Gap: belum banyak asisten belanja berbasis conversational AI yang fokus Indonesia + affiliate-native + bilingual/mixed language.
- Strong fit untuk segmen: diskon hunter, ibu rumah tangga, mahasiswa, pekerja, gadget & beauty enthusiasts.

### Competitive Lens
Kompetitor langsung/tidak langsung:
- Fitur search bawaan marketplace
- Situs deal aggregator
- Konten rekomendasi (influencer/komunitas)

**Differentiation produk ini:**
- AI intent understanding (bukan keyword-only)
- Komparasi lintas marketplace dalam satu view
- Ranking explainable (alasan + score)
- Localization Indonesia (bahasa, rupiah, promo behavior, official store trust)

---

## 4. Target User Persona
### Persona 1 — Dina (Diskon Hunter IRT)
- Umur: 32
- Goal: cari kebutuhan rumah tangga termurah tapi trusted
- Pain: promo membingungkan, takut toko tidak resmi
- Needs: official store filter, voucher insight, ongkir estimate

### Persona 2 — Reza (Mahasiswa Hemat)
- Umur: 21
- Goal: gadget/perlengkapan kuliah budget terbatas
- Pain: sulit tahu value terbaik
- Needs: budget filter, best value recommendation

### Persona 3 — Kevin (Young Professional)
- Umur: 28
- Goal: beli device kerja cepat dan tepat
- Pain: tidak punya waktu riset panjang
- Needs: quick shortlisting + confidence summary

### Persona 4 — Maya (Beauty Enthusiast)
- Umur: 26
- Goal: skincare aman, cocok kebutuhan kulit
- Pain: review terlalu banyak, takut produk palsu
- Needs: review summarization + official brand store

### Persona 5 — Arif (UMKM Owner)
- Umur: 35
- Goal: beli perlengkapan usaha dengan harga kompetitif
- Pain: butuh volume dan efisiensi biaya
- Needs: compare bulk options + seller credibility

---

## 5. Full Product Scope
## 5.1 In-Scope MVP
1. Bilingual UI (ID default, EN optional)
2. AI chat shopping assistant
3. Mixed-language understanding
4. Marketplace integration: Shopee & Tokopedia
5. Top 10 recommendation list
6. Product comparison table
7. Official store filter
8. Budget filter
9. Marketplace filter
10. Affiliate link generation (basic)
11. Click tracking
12. Basic admin dashboard

## 5.2 Out of Scope MVP (Future)
- Blibli & Lazada integration
- Price drop alerts
- Wishlist
- Personalized recommendation per account
- WhatsApp/Telegram bot
- Browser extension & mobile app
- Advanced sentiment/fake review detection
- Cashback/voucher optimization engine

---

## 6. User Journey (End-to-End)
1. User membuka web (default Bahasa Indonesia).
2. User mengetik kebutuhan produk (ID/EN/mixed).
3. AI detect language + intent + constraints (budget, brand, official store, dll).
4. Jika ambigu, AI ajukan 1 pertanyaan klarifikasi singkat.
5. System query aggregator dari source legal (affiliate/partner API/feed).
6. Data dinormalisasi.
7. Scoring engine hitung ranking.
8. AI menampilkan Top 10 + alasan + pros/cons + CTA.
9. User klik “Beli Sekarang/Buy Now”.
10. Redirect via affiliate link.
11. Click event tercatat untuk analytics & commission estimation.

---

## 7. AI Agent Flow
1. **Input Handling**
   - Terima query teks user
   - Language detection: ID / EN / mixed
2. **NLU & Intent Extraction**
   - Entitas: kategori, budget, brand, marketplace preference, official preference, urgency
3. **Clarification Policy**
   - Jika confidence < threshold (mis. 0.75), tanya 1 short clarifying question
4. **Query Planning**
   - Bentuk structured search request
5. **Data Retrieval**
   - Ambil produk dari connector marketplace/API/feed
6. **Normalization Layer**
   - Samakan skema: price, discount, rating, sold count, shipping, store type
7. **Scoring & Ranking**
   - Hitung composite score sesuai bobot
8. **Response Generation**
   - Top 10 result + reasoning + localized CTA
9. **Action Tracking**
   - Log impression, click, marketplace, product, campaign

---

## 8. Product Scoring Logic
### Formula Utama
**Product Score** =
- Relevance to user need: 30%
- Official store status: 20%
- Price competitiveness: 15%
- Review quality: 15%
- Discount value: 10%
- Sales volume: 5%
- Availability/delivery: 5%

### Detail Normalisasi Skor (0–100)
- `relevance_score`: semantic match query vs title/spec/category
- `official_score`: official=100, non-official=40 (configurable)
- `price_score`: relatif terhadap median harga result set
- `review_score`: kombinasi rating, review count, sentiment ringkas
- `discount_score`: effective discount + voucher signal (jika tersedia)
- `sales_score`: log-scaled sold volume
- `delivery_score`: ETA + ongkir competitiveness

### Business Rules
- Hard filter opsional: official-only
- Penalty untuk outlier price suspiciously too low
- Tie-breaker: higher relevance > official status > better review

---

## 9. UI/UX Page Structure
1. **Landing + Chat Page**
   - Chat input, suggested prompts, language switcher (ID/EN)
2. **Recommendation Result Page**
   - Top 10 cards
   - Filter chips: marketplace, budget, official store, brand
3. **Comparison Table Page/Section**
   - Side-by-side atribut utama
4. **Product Detail Drawer/Modal**
   - Pros/cons, review summary, reason-to-buy
5. **Admin Dashboard**
   - KPI ringkas + trend charts + top lists

### Mobile-first UX Principles
- 1-thumb navigation
- Sticky CTA
- Compact compare mode
- Fast load with skeleton states

### Localization Rules
- Mata uang: `Rp3.000.000`
- CTA ID: Beli Sekarang, Bandingkan, Lihat Detail
- CTA EN: Buy Now, Compare, View Details

---

## 10. Technical Architecture
### Frontend
- Next.js + React + Tailwind CSS
- i18n framework (next-intl/i18next)
- SSR/ISR untuk halaman konten, CSR untuk chat interaktif

### Backend (disarankan FastAPI untuk AI-centric workloads)
- API Gateway
- Auth (opsional MVP: anonymous session)
- Search Orchestrator
- Marketplace Connectors (Shopee/Tokopedia)
- Recommendation Service
- Affiliate Link Service
- Tracking Service
- Analytics Service

### AI Layer
- LLM orchestration untuk:
  - Language detection
  - Intent extraction
  - Clarification question
  - Review summarization
  - Explanation generation
- Guardrails:
  - output schema enforcement
  - profanity/safety filter
  - hallucination control via retrieval grounding

### Data Layer
- PostgreSQL: transactional & analytics-ready tables
- Redis: cache query/result populer + rate limit
- Optional Vector DB: semantic retrieval produk/review

### Infra
- Containerized services (Docker)
- Queue (Celery/RQ/BullMQ/Kafka-lite) untuk async ingestion
- Observability: logs, metrics, tracing, alerting

---

## 11. Database Schema (High-Level)
### Core Tables
1. `users`
- id, session_id, language_pref, created_at

2. `search_queries`
- id, user_id/session_id, raw_query, detected_language, parsed_intent_json, created_at

3. `products`
- id, marketplace, marketplace_product_id, name, brand, category, price, discount_pct, rating, sold_count, store_id, is_official, shipping_estimate, raw_payload_json, updated_at

4. `stores`
- id, marketplace, marketplace_store_id, store_name, is_official, seller_rating

5. `product_reviews_summary`
- product_id, summary_id, summary_en, summary_idn, pros_json, cons_json, sentiment_score, updated_at

6. `recommendations`
- id, query_id, product_id, rank, total_score, score_breakdown_json, reason_text, created_at

7. `affiliate_links`
- id, product_id, marketplace, deep_link_url, campaign_id, created_at

8. `click_events`
- id, user_id/session_id, recommendation_id, product_id, marketplace, affiliate_link_id, clicked_at, device, locale

9. `conversions` (jika ada callback/report)
- id, click_event_id, order_value_est, commission_est, status, converted_at

10. `admin_daily_metrics`
- date, total_search, total_click, ctr, est_gmv, est_commission, lang_id_count, lang_en_count

### Indexing Priorities
- products(marketplace, category, price)
- recommendations(query_id, rank)
- click_events(clicked_at, marketplace)
- search_queries(created_at, detected_language)

---

## 12. API Endpoint List (MVP)
### Public/User APIs
- `POST /api/v1/chat/query`
  - input: query, locale, session_id
  - output: parsed intent + clarifying question atau result_id

- `POST /api/v1/recommendations/generate`
  - input: query_id / structured_filters
  - output: top_10_products + score breakdown + localized explanation

- `GET /api/v1/recommendations/{id}`
  - output: recommendation list detail

- `POST /api/v1/affiliate/link`
  - input: product_id, marketplace, campaign_context
  - output: tracking_url

- `POST /api/v1/track/click`
  - input: recommendation_id, product_id, affiliate_link_id
  - output: success

- `GET /api/v1/filters/options`
  - output: marketplaces, brands, categories, budget presets

### Admin APIs
- `GET /api/v1/admin/metrics/overview`
- `GET /api/v1/admin/metrics/top-keywords`
- `GET /api/v1/admin/metrics/top-products`
- `GET /api/v1/admin/metrics/marketplace-performance`
- `GET /api/v1/admin/metrics/language-usage`
- `GET /api/v1/admin/metrics/category-conversion`

### Connector/Internal APIs
- `POST /internal/connectors/shopee/search`
- `POST /internal/connectors/tokopedia/search`
- `POST /internal/normalize/products`
- `POST /internal/scoring/rank`

---

## 13. MVP Development Roadmap (16 Minggu)
### Phase 0 (Minggu 1–2): Discovery & Foundation
- Validasi requirement
- Legal/compliance checklist data source
- Arsitektur detail & tracking plan

### Phase 1 (Minggu 3–6): Core Platform
- Setup FE/BE project
- Auth session anonymous
- i18n baseline (ID default, EN secondary)
- Chat UI + orchestrator skeleton

### Phase 2 (Minggu 7–10): Marketplace & Ranking
- Integrasi Shopee/Tokopedia via approved sources
- Data normalization
- Scoring engine v1
- Recommendation API + top 10 UI

### Phase 3 (Minggu 11–13): Affiliate & Analytics
- Affiliate link generation
- Click tracking pipeline
- Admin dashboard basic KPI

### Phase 4 (Minggu 14–16): Hardening & Launch
- QA (functional, load, localization)
- Prompt tuning mixed-language
- Security & observability
- Soft launch beta

---

## 14. Monetization Strategy
1. **Primary**: Affiliate commission per conversion
2. **Secondary (future)**:
   - Sponsored placement (tetap transparan “Sponsored”)
   - Premium insights dashboard for merchants/brands
   - CPC campaign placements terkurasi

### Optimization Levers
- Smart CTA placement
- Ranking explainability meningkatkan trust dan CTR
- Campaign tagging by category/season (Harbolnas, Ramadan, Back-to-School)

---

## 15. Risk & Mitigation Plan
1. **Data access risk**
   - Mitigasi: hanya official API/approved feeds, kontrak partner jelas
2. **Price volatility**
   - Mitigasi: TTL cache pendek + timestamp “last updated”
3. **Affiliate attribution mismatch**
   - Mitigasi: standardized click ID + reconciliation jobs
4. **LLM hallucination**
   - Mitigasi: retrieval-grounded output + schema validation
5. **Bias ranking / trust issue**
   - Mitigasi: tampilkan score breakdown & alasan rekomendasi
6. **Scalability traffic spike**
   - Mitigasi: Redis cache, queue async, autoscaling
7. **Regulatory/privacy**
   - Mitigasi: minimal PII, consent banner, data retention policy

---

## 16. AI Chat Example (Bahasa Indonesia)
**User:** Cari HP gaming 3 jutaan yang kameranya bagus, prefer official store.

**AI:** Siap! Biar lebih akurat, kamu prefer marketplace tertentu (Shopee/Tokopedia) atau dua-duanya?

**User:** Dua-duanya, yang penting value terbaik.

**AI:** Oke, aku cari HP gaming budget sekitar **Rp3.000.000** di Shopee & Tokopedia, prioritas **official store** dan kamera bagus. Ini Top 10 rekomendasi untukmu.

(Contoh 1 hasil)
- Produk: Infinix Note X (8/256)
- Marketplace: Tokopedia
- Toko: XYZ Official Store
- Harga: Rp2.999.000
- Diskon: 12%
- Rating: 4.8 (10rb+ review)
- Terjual: 20rb+
- Ringkasan review: performa gaming stabil, kamera siang bagus
- Kelebihan: chipset kencang, storage besar
- Kekurangan: low-light kamera biasa
- Alasan cocok: sesuai budget, official store, performa + kamera seimbang
- Skor rekomendasi: 89/100
- CTA: **Beli Sekarang**

---

## 17. AI Chat Example (English)
**User:** Recommend a laptop under 8 million for work and light gaming.

**AI:** Got it. Do you prefer official stores only, and should I include both Shopee and Tokopedia?

**User:** Yes, official stores only, both marketplaces.

**AI:** Great. I’ll prioritize laptops under **Rp8,000,000**, official stores, and balanced performance for productivity + light gaming. Here are the top 10 picks.

(Example item)
- Product: Acer Aspire XX (8/512)
- Marketplace: Shopee
- Store: Acer Official Store
- Price: Rp7,899,000
- Discount: 10%
- Rating: 4.9
- Sold: 5k+
- Review summary: strong daily performance, decent thermals
- Pros: SSD 512GB, reliable brand support
- Cons: average display brightness
- Why it fits: under budget, official seller, strong value
- Recommendation score: 91/100
- CTA: **Buy Now**

---

## 18. AI Chat Example (Mixed Language - Indonesia)
**User:** I need stroller bayi yang ringan dan compact, budget 1.5 juta.

**AI:** Siap, aku bantu. Kamu prefer official store saja?

**User:** Iya, official store only.

**AI:** Oke. Aku cari stroller yang **lightweight & compact** dengan budget sekitar **Rp1.500.000**, prioritas official store. Ini 10 rekomendasi terbaik.

(Example item)
- Produk: BabyGo LiteFold Stroller
- Marketplace: Shopee
- Toko: BabyGo Official Store
- Harga: Rp1.449.000
- Diskon: 15%
- Rating: 4.8
- Terjual: 3rb+
- Review summary: mudah dilipat, cocok untuk travel
- Kelebihan: bobot ringan, compact saat dilipat
- Kekurangan: keranjang bawah kecil
- Alasan cocok: sesuai budget, official store, fokus portability
- Skor: 90/100
- CTA: **Beli Sekarang**

---

## 19. Requirement Detail (Functional & Non-Functional)
### Functional Requirements
- FR-01: Sistem mendukung input chat ID/EN/mixed
- FR-02: Sistem detect bahasa otomatis
- FR-03: Sistem extract intent + preference
- FR-04: Sistem generate clarification question jika ambigu
- FR-05: Sistem menampilkan Top 10 rekomendasi
- FR-06: Sistem tampilkan 16 atribut produk wajib
- FR-07: Sistem support official store filter
- FR-08: Sistem support marketplace filter
- FR-09: Sistem support budget filter
- FR-10: Sistem generate affiliate link per item
- FR-11: Sistem track click event
- FR-12: Admin dapat melihat KPI dashboard inti

### Non-Functional Requirements
- NFR-01: P95 latency result <= 4 detik (cached), <= 8 detik (non-cached)
- NFR-02: Uptime target 99.5% (MVP)
- NFR-03: Secure-by-default (HTTPS, secret management)
- NFR-04: Observability lengkap (logs, metrics, trace)
- NFR-05: Data compliance & lawful source only

---

## 20. Acceptance Criteria MVP
- User bisa chat dalam ID/EN/mixed dan mendapat response relevan bahasa.
- Top 10 recommendation tampil dengan atribut lengkap (minimal field mandatory).
- Affiliate CTA redirect berfungsi dan click tercatat.
- Admin dashboard menampilkan metrik utama harian.
- Filter official store, budget, marketplace berfungsi.
- Integrasi data hanya dari approved/legal source.
