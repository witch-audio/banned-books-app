# BannedBooks.app Phase 1 Plan

> For Hermes: treat this as the execution plan for the first shippable version.

Goal: launch a fast, useful web MVP for BannedBooks.app that helps people discover challenged books, understand where/why they are being challenged, and find ways to get those books.

Architecture: start with a content-first web app with a small structured dataset. Phase 1 should be lightweight, SEO-friendly, and easy to expand. Focus on pages that can rank, get shared, and prove people want the product.

Tech stack: flexible for now, but aim for a simple web stack with static + dynamic pages, structured JSON/CSV data, and analytics from day one.

---

## 1. Product thesis

BannedBooks.app is a reading-freedom tracker.

It should answer 3 questions fast:
1. What books are being challenged?
2. Where and why is this happening?
3. How can I get this book near me or online?

The product should feel like:
- part cultural utility
- part discovery engine
- part media brand

The hook:
- Discover the books people tried to erase.

---

## 2. Why this could work

### Strengths
- strong emotional hook
- shareable / press-friendly idea
- clear SEO surface area
- strong affiliate + commerce opportunities
- timely cultural relevance

### Risks
- data quality can get messy
- legal / accuracy / sourcing matters
- political topic may create moderation or platform headaches
- too much ambition too early could slow shipping

### Phase 1 answer
Keep it narrow:
- no user accounts
- no native app
- no AO3-style community yet
- no giant crowdsourcing system yet

Just ship a beautiful, useful, searchable web product.

---

## 3. Phase 1 target user

Primary user:
- curious readers who care about banned/challenged books
- people who hear about a book challenge and want context fast
- teachers, parents, students, librarians, journalists

User intent buckets:
- discovery: show me notable challenged books
- context: tell me where/why this happened
- action: help me get the book
- sharing: give me something worth posting

---

## 4. Phase 1 MVP scope

### Must-have pages
1. Homepage
2. Book detail pages
3. Challenge event pages or summaries
4. Browse page for books
5. About / methodology page

### Nice-to-have if fast
6. State pages
7. Reading lists / editorial pages
8. Basic map view

### Homepage should include
- bold hook
- featured books
- featured challenge locations
- explanation of what the product does
- CTA to explore books
- CTA to find where to get a book

### Book page should include
- title / author / cover
- short summary
- why it has been challenged
- notable challenge locations/events
- tags/topics
- links to buy / borrow / library lookup / indie bookstores
- related books

### Challenge event page should include
- place
- date if known
- institution type if known
- reason or cited complaint
- source links
- affected books

---

## 5. Data model for Phase 1

Keep it simple.

### Core entities
- books
- challenge_events
- locations
- sources
- tags

### Books fields
- id
- slug
- title
- author
- description
- cover_url
- topics[]
- purchase_links[]
- borrow_links[]

### Challenge events fields
- id
- book_id or book_ids
- location_name
- city
- state
- institution
- date
- challenge_reason
- status
- source_ids[]

### Sources fields
- id
- title
- publisher
- url
- published_at
- source_type

### Important rule
Every claim should have a source.

---

## 6. Monetization ideas for Phase 1

### Best early revenue paths
1. Bookshop / affiliate links on book pages
2. Curated reading lists with commerce links
3. Newsletter sponsorship later
4. Partnerships with indie bookstores or advocacy orgs

### Not now
- subscriptions
- ads everywhere
- premium app
- large B2B data product

Phase 1 goal is proof of interest, not max revenue.

---

## 7. Validation plan

Success signals:
- people click from homepage into book pages
- people click outbound to get books
- people share book pages / list pages
- SEO pages start getting impressions
- journalists / creators / educators find it useful

Fast validation moves:
1. Launch landing page with hook
2. Publish 25 to 50 strong book pages
3. Publish 5 to 10 topical editorial/list pages
4. Share on social and relevant communities
5. Watch which pages get clicks and shares

---

## 8. Content strategy

This is not just a database. It needs editorial energy.

### Phase 1 content types
- most challenged books
- books challenged in [state]
- why this book gets challenged
- reading list pages by theme
- explainers on book bans vs challenges
- featured story pages tied to current events

### Editorial tone
- sharp
- useful
- not preachy
- sourced
- culturally alive

---

## 9. Recommended directory structure

```text
bannedbooks.app/
  README.md
  docs/
    PHASE1_PLAN.md
    BRAND.md
    DATA_SOURCES.md
    CONTENT_STRATEGY.md
  data/
    books.json
    challenge-events.json
    sources.json
  app/
  public/
  scripts/
```

---

## 10. Build order

### Stage 1: Strategy and framing
- lock hook and product thesis
- define what counts as a trusted source
- define Phase 1 content scope
- choose first revenue links strategy

### Stage 2: Data and content seed
- collect first 25 to 50 books
- collect source-backed challenge data
- write short summaries for each book
- create tags/topics system

### Stage 3: MVP web product
- build homepage
- build browse page
- build book pages
- build basic challenge/location pages
- add outbound links and analytics

### Stage 4: Launch and learn
- ship publicly
- track shares and clicks
- improve pages that get traction
- expand into state pages and better local discovery

---

## 11. Phase 1 deliverables

### Required
- clear homepage copy
- structured dataset for first books and sources
- at least 25 book pages
- basic browse experience
- source-backed challenge/event information
- outbound links for getting books
- analytics installed

### Strong bonus
- 1 map view
- 5 state pages
- 5 editorial list pages
- newsletter signup

---

## 12. Open questions to answer next

1. Should the brand voice feel activist, editorial, or neutral-useful?
2. Do we want local library discovery in Phase 1, or just buy/borrow links?
3. What source set should we trust first?
4. What stack do we want for fastest shipping?
5. Do we launch on bannedbooks.app only, or grab backup domains too?

---

## 13. My recommendation

This is worth pursuing if we keep it narrow and useful.

The smart move is:
- web-first
- data-backed
- content-rich
- commerce-light at first
- emotionally strong brand

Do not build “an app” first.
Build a memorable website that can later become an app if people return often enough.
