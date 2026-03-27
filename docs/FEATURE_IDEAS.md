# Feature Ideas

A running list of features worth building for BannedBooks.app, roughly in order of impact.

---

## High-Impact Features

**Interactive Challenge Map**
A US map (SVG-based, no heavy library needed) where states light up based on challenge volume. Click a state → see all events there. Immediately visual, deeply shareable. Texas and Florida would be on fire.

**"Near You" Book Finder**
Detect or ask for ZIP code → show local indie bookstores carrying challenged books via Bookshop.org's store locator API. Turns a passive tracker into an action tool.

**Challenge Activity Feed**
A reverse-chronological feed of recent challenge events, like a newsfeed. "3 days ago: *Gender Queer* banned in Keller ISD, TX." Real-time feel even if data is manually updated. Great for social sharing.

**Reading Lists / Curated Collections**
Editorial pages like:
- *If They Banned It, It's Worth Reading*
- *Banned Books for Teens*
- *Books Challenged for Depicting Real History*
- *The 10 Most Challenged Books of 2024*

Each list becomes an SEO page and a shareable URL.

**Book Status Timeline**
A visual timeline per book showing its full challenge history — challenged → banned → court ruling → reinstated. Like a legal case tracker but for books. Very scannable, very shareable.

---

## Engagement & Virality

**"I've Read X of These" Counter**
Simple checkbox UX (no login — just localStorage). "You've read 7 of 30 banned books. Here are 5 more worth your time." Personal, sticky, shareable.

**Share Cards**
Auto-generated OG images per book with the title, author, and a banned stamp. When someone shares a book page on Twitter/Threads, it looks like a statement.

**Weekly Email Digest**
Newsletter of new challenges, notable events, and a featured book each week. Substack or Buttondown. Builds an audience that returns.

**"Most Challenged This Week" badge**
Dynamic-feeling label on book cards (even if manually curated). Creates urgency and freshness.

---

## Discovery & Depth

**Author Pages**
Toni Morrison has 3 banned books. Sherman Alexie has 2. Group by author, show their full challenged catalog, let people discover the pattern.

**By Reason / Theme Browsing**
Filter by *why* — "Show me all books banned for LGBTQ+ themes" or "banned for depicting racism." Currently topics exist but reason-level filtering would be more charged and specific.

**State Pages**
`/state/texas` → map of Texas school districts with challenge events, list of banned books, total count, most-challenged authors. These would rank in Google like crazy.

**School District Pages**
`/district/keller-isd` → full list of everything they've challenged, timeline, status. Accountability by name.

**Compare Two States**
"Texas vs. Florida — who bans more books?" Side-by-side. Pure virality bait.

---

## Trust & Credibility

**Source Transparency Panel**
Per book, a collapsible "How we know this" section showing every source linked, date verified, and confidence level. Builds trust, distinguishes from noise.

**Correction / Tip Submission Form**
A simple form: "I know something about a book challenge." No accounts. Just a way for librarians, journalists, and teachers to surface information.

**Data Download**
Let people download the full dataset as CSV/JSON. Journalists and researchers will link back to you. Credibility multiplier.

---

## Monetization-Forward

**"Buy This Banned Book" affiliate strips**
On every book page: a prominent Bookshop.org link styled like a statement. *"The best way to fight a book ban is to read the book."* Affiliate revenue + mission alignment.

**Bookstore Partnership Pages**
Partner with 5-10 indie bookstores who carry challenged books. Give them a page, they link back. Community building + revenue.

**"Banned Books" gift bundles**
Curated sets of 5 challenged books with a Bookshop.org wishlist link. Perfect holiday/birthday gift product.

---

## Phase 2 — Mobile App (Shortlisted)

Three ideas flagged for the mobile app phase:

**"Banned in Your Town" Alerts**
Push notifications when a book gets challenged in your area. *"A book was just challenged at Jefferson Middle School, 2 miles away."* Hyper-local, urgent, shareable. Turns passive awareness into active community response.

**The Underground Library**
A curated feed of free, legal ebook versions of public domain banned books (Brave New World, 1984, Catcher in the Rye). Styled like a speakeasy. You "enter" through a hidden door UI. The vibe is you're getting away with something. Reading as rebellion.

**Banned Book Speed Dating**
Swipe-based book discovery. Each card shows only the reason it was banned — not the title. *"Banned for: depicting a same-sex relationship in a middle school setting."* You swipe right if you'd read it, left if not. Then the book is revealed. Tinder for literature. Impossible not to share.

---

## Priority Picks

The two to build first:

1. **Interactive state map** — highest visual impact, most shareable, best for press coverage
2. **"I've read X" counter** — highest retention, no backend needed, purely localStorage
