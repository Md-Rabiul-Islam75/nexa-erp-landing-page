# Development Prompt — NexaERP Neuromarketing Landing Page (React)

> Copy everything below the line into Claude Code, Cowork, or a Claude agent.
> Fill the bracketed `[…]` placeholders first, or instruct the agent to ask you for the missing ones before it starts.

---

## ROLE

You are a senior frontend engineer **and** a conversion copywriter trained in neuromarketing. Build a single, production-grade, high-converting marketing landing page for **NexaERP**, an enterprise ERP product by **Automation Services Ltd. (ASL) / Nexalinx** ("Technology for Power"). The page must look like it was designed by a top SaaS studio and must be written to make a business decision-maker book a demo.

Before writing code, restate your plan in 5 bullet points and confirm the tech stack. Then build.

## TECH STACK & CONSTRAINTS

- **Framework:** React (functional components + hooks). Single self-contained component file unless I say otherwise.
- **Styling:** Plain CSS via a `<style>` block or CSS modules — NOT Tailwind, because I need the exact brand green `#28B83F` to render true and I don't want utility-class drift.
- **Icons:** `lucide-react` only.
- **No external UI kits** (no MUI, no Bootstrap). Hand-build components.
- **No browser storage** (`localStorage`/`sessionStorage`) — keep all state in React state.
- **Fonts:** Load from Google Fonts. Use a distinctive display font for headlines (e.g. Bricolage Grotesque or similar characterful grotesque) paired with a clean body font (e.g. Hanken Grotesk). **Do NOT use Inter, Roboto, Arial, or system fonts.**
- **Responsive:** Mobile-first behaviour, must work cleanly down to 360px width.
- **Performance:** CSS-only animations where possible. One orchestrated load animation with staggered reveals beats scattered micro-interactions.
- **Accessibility:** Semantic HTML, alt text, keyboard-focusable interactive elements, sufficient contrast.
- **All editable content** (clients, stats, modules, testimonials, FAQ, pricing) must live in clearly labeled constants at the top of the file so I can change copy without touching layout.

## BRAND SPEC (use exactly)

- **Primary accent:** `#28B83F` (ASL green). Brighter hover variant `#3BE45C`.
- **Background:** near-black, deep dark theme (`#0A0B0D` base). This is intentional — see neuromarketing note on color isolation.
- **Ink/text:** off-white `#F4F7F4`; muted grey for secondary text.
- **Tagline:** "Technology for Power."
- **Company:** Automation Services Ltd. / Nexalinx — Dhaka, Bangladesh + Long Island City, NY.
- **Aesthetic direction:** "power grid" — dark canvas, faint grid texture, electric-green glow. Confident, enterprise, slightly futuristic. Not playful.

## NEUROMARKETING REQUIREMENTS (this is the core of the brief — apply all)

Build every section around a proven persuasion principle. Make the principle do the work; don't just label it.

1. **Color isolation (Von Restorff effect):** Because the page is dark, the green accent must appear ONLY on elements you want clicked or noticed (primary CTAs, key numbers, active states). Never dilute green across decorative elements. This forces the eye onto conversion targets.
2. **Headline = authority + desire:** The hero H1 must combine a credibility proof and an aspiration in one line. Use the angle that NexaERP runs national-scale electricity utilities — e.g. "the ERP trusted to power a nation." Authority (real proof) + desire (aspiration) in one hook.
3. **Loss aversion before features:** Place a "problem/hidden cost" section BEFORE the feature list. Show what disconnected, manual tooling *costs* the buyer (lost hours/week, stale reports, revenue leakage) using concrete figures and a danger color (red). People work ~2× harder to avoid a loss than to chase a gain.
4. **Risk reversal under every CTA:** Add micro-copy beneath each primary button that removes hesitation — e.g. "Free walkthrough · No credit card · See your own data live in 30 min."
5. **Benefit-led, not feature-led copy:** Every module/feature describes the *outcome* the buyer gets ("one number everyone trusts"), not the technical feature ("double-entry ledger").
6. **Self-relevance via interactive ROI calculator:** Include a small calculator with sliders (team size, hours/week lost to manual work, loaded cost/hour). Compute and display *their own* monthly + yearly recoverable cost in ৳ (BDT). Label the assumption (e.g. "assumes ~60% of manual hours reclaimed — conservative"). The CTA next to the result should use endowment language like "Claim this." Seeing their own number triggers the endowment effect — it feels like money they already have and are losing.
7. **Decoy / center-stage in pricing:** Three pricing tiers. Make the middle tier visually dominant (scaled up, "Most Popular" badge, green border). Use a high-anchor "Enterprise — Let's talk" tier on the right so the middle tier feels reasonable by comparison.
8. **Social proof:** A testimonials section. **Use role-based placeholders** ("Operations Director, National Electricity Utility") and add a comment telling me to swap in real client quotes — do NOT invent named quotes from real companies (BPDB, DESCO, etc.).
9. **Objection handling (FAQ):** An accordion FAQ that pre-empts the real fears: time to go live, scale, migrating off existing software, data safety / company stability, multi-country support.
10. **Authority anchoring with honest numbers only:** A stats band. Use ONLY defensible facts (≈9 years in production, 4 countries served, runs national utilities, debt-free, 8+ modules). Do NOT fabricate user counts or percentages — a fake-smelling number destroys trust faster than no number.
11. **Peak-end + scarcity at the close:** The final CTA section is the emotional peak. Add a genuine-feeling constraint ("Only 6 onboarding slots open this quarter") and the strongest restatement of the offer. End on the highest note.

## PAGE STRUCTURE (in this order)

1. **Sticky nav** — logo (NexaERP with green "ERP"), anchor links, sign-in (ghost), and a green "Book a free demo" CTA. Mobile hamburger menu.
2. **Hero** — eyebrow trust line, authority+desire H1, benefit sub-headline, two CTAs (primary green + secondary outline "Watch tour"), risk-reversal micro-copy, and an animated product **dashboard mock** (CSS/SVG — KPIs, an animated bar chart, live activity rows). Faint grid background + green glow.
3. **Trust marquee** — auto-scrolling row of client/region chips (`[BPDB, WZPDCL, DESCO, DPDC, US, Canada, Australia, Dubai]`).
4. **Problem / hidden cost** — loss-aversion section, 3 red-accented stat cards + a one-line turn ("NexaERP closes the gaps").
5. **Stats band** — 4 animated count-up numbers (honest facts only).
6. **Modules** — benefit-led bento grid of 6 modules (Finance, Inventory, Billing, HR & Payroll, Procurement, Reporting/BI) with icons, outcome copy, hover glow.
7. **How it works** — 3 steps that reduce perceived effort ("Live in weeks, not quarters").
8. **ROI calculator** — interactive, per requirement #6.
9. **Testimonials** — 3 cards, placeholder roles, swap-in comment.
10. **Pricing** — monthly/annual toggle ("Save 2 months"), 3 tiers with decoy structure. Mark prices as placeholders for me to replace.
11. **FAQ** — accordion, objection handling.
12. **Final CTA** — peak-end + scarcity.
13. **Footer** — brand, tagline, locations, link columns, copyright.

## CONTENT TO USE (edit/expand as a copywriter — don't just paste labels)

- **Modules:** Finance & Accounting · Inventory & Items · Billing & Invoicing (grid-scale engine) · HR & Payroll · Procurement · Reporting & BI.
- **Differentiators to weave in:** runs Bangladesh's national electricity utilities; grid-scale prepaid-metering billing; 9+ years, debt-free, independent; multi-currency / multi-entity for overseas ops; one login replaces 15 apps.
- **Currency:** Bangladeshi Taka (৳) for pricing and ROI.
- **Tone:** confident, plain-spoken, executive. Short sentences. No jargon-for-jargon's-sake.

## DELIVERY

- Output the complete component as one runnable file.
- Add a short top comment block summarizing which neuromarketing principle each section uses (so my team understands the *why*).
- After delivering, list exactly which placeholders I must replace before launch (testimonials, real pricing, demo-form/CRM link, phone number).

## OPTIONAL — ASK ME IF I WANT THESE
- A **Bangla-primary version** (Bangla headlines/body with English technical keywords inline, SolaimanLipi font) for the Bangladesh market.
- The "Book a demo" buttons wired to a real form or to the **Outreaq (NexaCRM)** lead pipeline.
- A second color/light-theme variant for A/B testing.

---

### Placeholders for me to fill before sending
- `[Real pricing numbers per tier]`
- `[Real or approved testimonial quotes]`
- `[Demo form URL / CRM endpoint]`
- `[Contact phone number]`
- `[Any module names to add/remove]`
