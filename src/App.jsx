/*
 * ============================================================================
 *  NexaERP — Marketing Landing Page
 *  Automation Services Ltd. (ASL) / Nexalinx — "Technology for Power."
 * ============================================================================
 *
 *  NEUROMARKETING MAP (which principle each section uses, and why):
 *
 *  Nav .............. Von Restorff — green reserved for the one CTA worth a click.
 *  Hero ............. Authority + Desire headline ("trusted to power a nation").
 *  Trust marquee .... Social proof via real mission-critical clients/regions.
 *  Problem .......... LOSS AVERSION before features — hidden cost in red, with
 *                     concrete ৳ figures. People work ~2x harder to avoid a loss.
 *  Stats band ....... Authority anchoring — defensible facts only, count-up.
 *  Modules .......... Benefit-led copy (outcomes, not features), color isolation
 *                     limited to hover glow + key numbers.
 *  Magic moment ..... Cognitive ease — show one action cascading to five, so the
 *                     value feels effortless and obvious.
 *  Multi-warehouse .. Concreteness — a single deep feature proves the breadth.
 *  How it works ..... Effort reduction — "live in weeks, you sign off each step."
 *  ROI calculator ... Self-relevance + endowment — their OWN number, "Claim it."
 *  Testimonials ..... Social proof (role-based placeholders — swap in real ones).
 *  Pricing .......... Decoy / center-stage — Business tier dominant; Enterprise
 *                     high-anchor makes the middle feel reasonable.
 *  FAQ .............. Objection handling — pre-empts the real buying fears.
 *  Final CTA ........ Peak-end + scarcity — emotional peak, genuine constraint.
 *  Footer ........... Brand close, locations, tagline.
 *
 *  ──────────────────────────────────────────────────────────────────────────
 *  ALL EDITABLE COPY LIVES IN THE CONSTANTS BLOCK BELOW. Change words here
 *  without touching layout. Search for "REPLACE BEFORE LAUNCH" for placeholders.
 * ============================================================================
 */

import { useState, useEffect, useRef, useCallback } from 'react'
import {
  Wallet, ShoppingCart, PackageOpen, Boxes, Factory, Ship, Users, BadgeDollarSign,
  Building2, ClipboardList, HeartHandshake, ReceiptText, BarChart3, FileCheck2,
  ShieldCheck, Smartphone, Menu, X, Check, ChevronDown, ArrowRight, Zap,
  TrendingDown, Phone, Mail, MapPin, Quote, ScanLine, RefreshCw, Play,
  MessageCircle, CalendarClock, Calendar, Clock, User, ChevronLeft, ChevronRight,
} from 'lucide-react'

/* ===========================================================================
 * 1. BRAND
 * ======================================================================== */
const BRAND = {
  name: 'NexaERP',
  company: 'Automation Services Ltd.',
  parent: 'Nexalinx',
  tagline: 'Technology for Power.',
  // REPLACE BEFORE LAUNCH — contact details
  phone: '+880 XXXX-XXXXXX',
  email: 'info@nexalinx.com',
  website: 'nexalinx.com',
  locations: ['Dhaka, Bangladesh', 'Long Island City, NY'],
  // REPLACE BEFORE LAUNCH — wire to real demo form / Outreaq (NexaCRM) pipeline
  demoUrl: '#book-demo',
  // REPLACE BEFORE LAUNCH — WhatsApp number in international format, digits only (no +, spaces or dashes)
  whatsapp: '8801XXXXXXXXX',
  whatsappMsg: 'Hi, I’d like to book a NexaERP demo.',
  // REPLACE BEFORE LAUNCH — Google Calendar appointment-schedule link (or Calendly). Leave blank to hide the button.
  calendarUrl: '',
}

// wa.me deep link with a pre-filled message
const waLink = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMsg)}`

/* ===========================================================================
 * 2. NAV
 * ======================================================================== */
const NAV_LINKS = [
  { label: 'The Problem', href: '#problem' },
  { label: 'Modules', href: '#modules' },
  { label: 'ROI', href: '#roi' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#book-demo' },
]

/* ===========================================================================
 * 3. HERO
 * ======================================================================== */
const HERO = {
  eyebrow: 'Trusted by Bangladesh’s national electricity utilities',
  // Authority (real proof: runs national utilities) + Desire (be in control).
  titleLines: ['The ERP trusted to', 'power a nation —', 'now running your business.'],
  sub: 'One system for finance, inventory, billing, HR, manufacturing and NBR compliance. One database. One truth. Your business back in your control.',
  subBn: 'এক system-এ পুরো business — finance, inventory, billing, HR, manufacturing আর NBR compliance। এক database, এক truth, আপনার হাতে control।',
  primaryCta: 'Book a free demo',
  secondaryCta: 'Watch the 2-min tour',
  riskReversal: 'Free 30-min walkthrough · No credit card · See your own numbers live.',
}

/* ===========================================================================
 * 4. TRUST / LOGO WALL — clients + regions served
 *    CLIENT LOGOS: drop real logo files into  public/logos/  and the wordmark
 *    placeholder auto-swaps to the image. Recommended: transparent PNG/SVG,
 *    light/white version, ~200px wide. File names below must match.
 *    NOTE: BPDB/WZPDCL/DESCO/DPDC are confirmed clients. The deck lists only
 *    Bangladesh + New York — CONFIRM Canada/Australia/Dubai before launch.
 * ======================================================================== */
const LOGO_DIR = '/Mission-critical operations run on NexaERP/'
const CLIENTS = [
  { name: 'BPDB', file: 'BPDB.png' },
  { name: 'WZPDCL', file: 'WZPDCL.png' },
  { name: 'DESCO', file: 'DESCO.png' },
  { name: 'DPDC', file: 'DPDC.png' },
  { name: 'ASK Food', file: 'ASK FOOD.png' },
  { name: 'ASK Technology', file: 'ASK Technology.png' },
  { name: 'ASK Trading', file: 'ASK Trading.png' },
  { name: 'Daruchini Catering (Coca-Cola)', file: 'Daruchini Catering Service(Coca-Cola).png' },
  { name: 'LiqueMix', file: 'LiqueMix.jpg' },
  { name: 'Rahman Moshiur & Co.', file: 'Rahman Moshiur & Co.png' },
  { name: 'Seba Engineering Works', file: 'Seba Engineering Works.jpg' },
  { name: 'ULS Limited', file: 'ULS Limited.png' },
  { name: 'Urmi Enterprise', file: 'Urmi Enterprise.jpg' },
  { name: 'VIP Door & Furniture', file: 'VIP DOOR & FURNITURE.png' },
  { name: 'Zariya Living Ltd.', file: 'Zariya Living Ltd.png' },
]
// Country flags from flagcdn (crisp SVG). If a flag fails to load, the bold name still shows.
const REGIONS = [
  { name: 'United States', code: 'us' },
  { name: 'Canada', code: 'ca' },
  { name: 'Australia', code: 'au' },
  { name: 'Dubai, UAE', code: 'ae' },
]

/* PRODUCT VIDEO IN HERO BANNER —
 *   mp4: a file in /public (plays as a silent, looping ambient banner).
 *   youtubeId: alternatively paste a YouTube ID (poster + click to play).
 *   Leave both blank to show the styled placeholder.
 */
const HERO_VIDEO = {
  mp4: '/video/banner_video.mp4',
  youtubeId: '',
  poster: '',
}

/* ===========================================================================
 * 4b. PRODUCT-TOUR VIDEO
 *     REPLACE BEFORE LAUNCH — paste a YouTube/Vimeo EMBED url (leave blank
 *     to show the styled placeholder). e.g. https://www.youtube.com/embed/XXXX
 * ======================================================================== */
const VIDEO = {
  kicker: 'See it in 2 minutes',
  heading: 'A guided tour of NexaERP.',
  intro: 'Watch one transaction flow through finance, inventory, VAT and the dashboard — the whole business, in one system.',
  embedUrl: '',
  poster: { duration: '2:14', caption: 'NexaERP product tour' },
}

/* ===========================================================================
 * 5. PROBLEM / HIDDEN COST  (loss aversion — figures straight from the deck)
 * ======================================================================== */
const PROBLEM = {
  kicker: 'The cost you never see on an invoice',
  heading: 'Every month, money leaks out — quietly.',
  intro: 'These costs never show up on a bill. But every month, they walk straight out of your business.',
  cards: [
    { icon: TrendingDown, title: 'Stockout — lost sales', amount: '৳2–5 lakh', per: '/mo', desc: 'The customer came, the product wasn’t there. They went straight to a competitor.' },
    { icon: Boxes, title: 'Capital frozen in dead stock', amount: '৳5–10 lakh', per: '/mo', desc: 'Inventory that piles up year after year — cash-flow frozen, nobody watching it.' },
    { icon: Wallet, title: 'Late-payment recovery', amount: '৳1–3 lakh', per: '/mo', desc: 'Customers pay in 60–90 days. They’re using your working capital, for free.' },
    { icon: RefreshCw, title: 'Manual labour & rework', amount: '৳50k–1 lakh', per: '/mo', desc: 'Reconciling Excel, double entry, fixing errors — staff time on paperwork, not output.' },
    { icon: ReceiptText, title: 'VAT / NBR penalty risk', amount: '৳1 lakh+', per: '/mo', desc: 'Wrong Mushak format, late return, audit finding — a penalty can land any time.' },
    { icon: Zap, title: 'Cost of a wrong decision', amount: 'Incalculable', per: '', desc: 'Wrong number → wrong decision. Wrong price, wrong discount, wrong hire.' },
  ],
  total: 'Total hidden cost: ৳8–20 lakh a month. ৳1 crore+ a year.',
  turn: 'NexaERP closes every one of these gaps.',
}

/* ===========================================================================
 * 6. STATS BAND — honest, defensible facts only (no fabricated user counts)
 * ======================================================================== */
const STATS = [
  { value: 9, suffix: '', label: 'Years in production since 2016' },
  { value: 0, suffix: '', label: 'Debt — cash-positive & independent' },
  { value: 4, suffix: '', label: 'National utilities run on NexaERP' },
  { value: 16, suffix: '', label: 'Modules on one platform' },
]

/* ===========================================================================
 * 7. MODULES — benefit-led (outcome first). 16 real modules from the deck.
 * ======================================================================== */
const MODULES = [
  { icon: Wallet, name: 'Financial Accounts', outcome: 'Books closed by the 5th — not the 15th. Click any number, drill to the voucher.' },
  { icon: ShoppingCart, name: 'Sales & Distribution', outcome: 'Field salesmen take orders on mobile, even offline. Credit limit checked at entry.' },
  { icon: PackageOpen, name: 'Purchase & Procurement', outcome: 'Three-way match auto-checks PO, GRN and invoice. Approve POs from your phone.' },
  { icon: Boxes, name: 'Inventory & Warehouse', outcome: '98%+ stock accuracy in 90 days. What the screen shows is what’s in the godown.' },
  { icon: Factory, name: 'Manufacturing', outcome: 'Multi-level BOM to shop-floor reality — the true cost of every product you make.' },
  { icon: Ship, name: 'LC & Import', outcome: 'PI to landed cost on one screen. No BOE, no charge, no document ever lost.' },
  { icon: Users, name: 'Human Resources', outcome: 'Hire to retire in one record. Biometric attendance, mobile leave approval.' },
  { icon: BadgeDollarSign, name: 'Payroll', outcome: 'Payroll for 1,000 staff in 30 minutes. BEFTN/RTGS bank advice, ready to send.' },
  { icon: Building2, name: 'Fixed Assets', outcome: 'Every asset tracked, depreciated and reconciled — automatically, to the GL.' },
  { icon: ClipboardList, name: 'Project & Job Costing', outcome: 'See the real profit on every project and job — material, labour and overhead.' },
  { icon: HeartHandshake, name: 'CRM', outcome: 'Customer 360: last 12 months of orders, payments and complaints on one screen.' },
  { icon: ReceiptText, name: 'VAT, Tax & Compliance', outcome: 'Mushak 6.3, 9.1, AIT and Form 50 — NBR-ready, generated out of the box.' },
  { icon: BarChart3, name: 'Reports & Dashboards', outcome: 'Role-based live dashboards. Build your own report — no IT ticket required.' },
  { icon: FileCheck2, name: 'Document & Approval', outcome: 'Every approval on mobile, one tap. Nothing waits on a boss who’s travelling.' },
  { icon: ShieldCheck, name: 'Security & Admin', outcome: 'Row-level access, SSO/SAML, tamper-evident audit log. Nobody edits silently.' },
  { icon: Smartphone, name: 'Mobile App & Portals', outcome: 'Native Android & iOS. Customer and supplier self-service portals built in.' },
]

/* ===========================================================================
 * 8. MAGIC MOMENT — one action, five updates, zero reconciliation
 * ======================================================================== */
const MAGIC = {
  kicker: 'One click. Five updates. Zero reconciliation.',
  heading: 'A warehouse clerk scans one goods receipt. Watch what happens.',
  steps: [
    { icon: ScanLine, title: 'Goods receipt', desc: 'Warehouse scans the barcode.' },
    { icon: Boxes, title: 'Inventory ↑', desc: 'Stock and GL inventory update.' },
    { icon: Wallet, title: 'Payable created', desc: 'Supplier liability is booked.' },
    { icon: ReceiptText, title: 'VAT register', desc: 'Mushak 6.6 captured automatically.' },
    { icon: BarChart3, title: 'Dashboard', desc: 'The CEO sees it, instantly.' },
  ],
  close: 'One click. Five updates. Zero re-entry. How many people, screens and spreadsheets does that one transaction touch in your system today?',
}

/* ===========================================================================
 * 9. MULTI-WAREHOUSE DEEP-DIVE (the original feature brief, in depth)
 * ======================================================================== */
const WAREHOUSE = {
  kicker: 'Multi-warehouse, multi-location',
  heading: 'Many locations. One clean set of books.',
  intro: 'Run separate, accurate accounts for every warehouse and location — and still see the whole company as one. We set it up your way, in one of two proven methods.',
  methods: [
    {
      tag: 'Method 1',
      title: 'Account-group based',
      desc: 'A separate account group per warehouse, so every location’s cost is tracked on its own.',
      points: [
        'Ledgers per location — e.g. “Electricity Bill – Loc-A”, “Electricity Bill – Loc-B”',
        'Same ledger name, location short-codes keep them cleanly apart',
        'Trial Balance reads by account group — location cost analysis is effortless',
      ],
    },
    {
      tag: 'Method 2',
      title: 'Project based',
      desc: 'Each warehouse is a project. One shared chart of accounts; pick the warehouse when you post.',
      points: [
        'Select the specific project (warehouse) as you post each voucher',
        'Assign specific projects to specific users',
        'Project-wise Profit & Loss — control every location centrally, analyse each one apart',
      ],
    },
  ],
  access: [
    'User-wise report access — each user sees only their assigned data',
    'Users view their own transactions; Admin sees the whole company',
    'Trial Balance across all warehouses combined, or by account group',
  ],
}

/* ===========================================================================
 * 10. HOW IT WORKS — 90-day roadmap, effort reduction
 * ======================================================================== */
const STEPS = [
  { week: 'Week 1–2', title: 'Discovery', desc: 'We learn your process, list the pain points, and set priorities together.' },
  { week: 'Week 3–6', title: 'Configuration', desc: 'Chart of accounts, master data, workflows and approval matrix — built to your business.' },
  { week: 'Week 7–10', title: 'Training & pilot', desc: 'Role-based training in Bangla. We pilot one process until your team is comfortable.' },
  { week: 'Week 11–13', title: 'Cutover & go-live', desc: 'Parallel run, data migration, final cutover — with 30 days of hyper-care support.' },
  { week: 'Day 100', title: 'In control', desc: 'Books close by the 5th. Live dashboards. A monthly review meeting with us.' },
]

/* ===========================================================================
 * 11. ROI CALCULATOR defaults & assumption
 * ======================================================================== */
const ROI = {
  assumptionNote: 'Assumes ~60% of manual hours reclaimed — deliberately conservative.',
  defaults: { team: 12, hoursLost: 9, costPerHour: 450 },
  reclaimRate: 0.6,
}

/* ===========================================================================
 * 11b. REFRAME QUOTES — bold reader-facing statements (NOT testimonials).
 *      The "band" rides the emotional peak right after the ROI number;
 *      "pricingPunch" kills the price objection at the moment of pricing.
 *      Edit the wording freely.
 * ======================================================================== */
const REFRAME = {
  band: [
    {
      bn: 'ঘড়ি থামে না, leak-ও থামে না। প্রতিটা মাস চলে যাওয়া মানে প্রতিটা মাসের টাকা চলে যাওয়া।',
      text: 'The clock doesn’t wait, and neither does the leak. Every month gone is money gone.',
      emphasisBn: 'সিদ্ধান্ত দেরি করা আপনাকে বাঁচায় না — উল্টো খরচ বাড়ায়।',
      emphasis: 'Delaying the decision doesn’t protect you — it costs you.',
    },
    {
      bn: 'আমরা কিন্তু মাত্র 60% ধরেছি। ধরুন তাতেও অর্ধেক ভুল — তবুও প্রথম মাসেই পুরো খরচ উঠে আসে।',
      text: 'We counted only 60%. Even if we’re half wrong, it still pays for itself in the first month.',
    },
    {
      bn: 'আপনার business যত বড়, leak তত বড় — অথচ plan-এর দাম সেই leak-কে কখনো ধরতে পারে না।',
      text: 'The bigger your business, the bigger the leak — and the plan price never catches up to it.',
    },
  ],
  pricingPunchBn: 'বেশিরভাগ business প্রতি মাসে NexaERP-এর দামের 5–12 গুণ চুপচাপ হারায়। প্রশ্নটা কখনোই ছিল না — “আমি কি এটা afford করতে পারব?” প্রশ্নটা হলো — “এই leak আমি কতদিন afford করব?”',
  pricingPunch: 'Most businesses lose 5–12× the price of NexaERP every month, quietly. The question was never “can I afford it.” It’s “can I afford the leak.”',
}

/* ===========================================================================
 * 12. TESTIMONIALS — ROLE-BASED PLACEHOLDERS.
 *     REPLACE BEFORE LAUNCH with real, approved quotes. Do NOT attribute
 *     invented quotes to named clients (BPDB, DESCO, etc.).
 * ======================================================================== */
const TESTIMONIALS = [
  { quoteBn: 'Month-end-এ আগে 15 দিন চলে যেত। এখন 5 তারিখেই books close, আর প্রতিটা number-এ আমি ভরসা রাখতে পারি।', quote: 'Month-end used to eat fifteen days. Now the books close on the fifth and I trust every number in them.', role: 'Finance Director', org: 'National Power Distributor' },
  { quoteBn: 'আমার salesman-রা field থেকে order নেয়, signal না থাকলেও — আর আমি office থেকে real-time দেখি। সবাই একই data দেখছে।', quote: 'My salesmen take orders in the field, even with no signal, and I see it from my office in real time. Same data, everyone.', role: 'Head of Sales', org: 'FMCG Distribution Group' },
  { quoteBn: 'VAT audit যখন এলো, প্রতিটা Mushak document সেকেন্ডে ready ছিল। কোনো ছোটাছুটি নেই, stress নেই।', quote: 'When the VAT audit came, every Mushak document was ready in seconds. No scramble, no stress.', role: 'Chief Accountant', org: 'Mid-size Manufacturer' },
]

/* ===========================================================================
 * 12b. CUSTOMER VIDEO STORIES — real customers, in their own words.
 *      REPLACE BEFORE LAUNCH — paste each customer's YouTube VIDEO ID
 *      (the part after watch?v= , e.g. "dQw4w9WgXcQ") into `youtubeId`.
 *      Leave blank to show the styled placeholder card.
 * ======================================================================== */
const VIDEO_STORIES = [
  { name: 'Customer name', role: 'Managing Director', org: 'Trading & Distribution', blurbBn: '15 দিনের month-end close যেভাবে 5 দিনে নেমে এলো।', blurb: 'How they cut month-end close from 15 days to 5.', youtubeId: '' },
  { name: 'Customer name', role: 'Head of Operations', org: 'Manufacturing', blurbBn: '4টি warehouse-এ 98%+ stock accuracy যেভাবে এলো।', blurb: 'Getting to 98%+ stock accuracy across 4 warehouses.', youtubeId: '' },
  { name: 'Customer name', role: 'Finance Controller', org: 'Importer / Retail Chain', blurbBn: 'একটা login কীভাবে 15টা আলাদা app আর spreadsheet সরিয়ে দিল।', blurb: 'One login replaced 15 disconnected apps and spreadsheets.', youtubeId: '' },
]

/* ===========================================================================
 * 13. PRICING — decoy structure. Business = center-stage. Enterprise = anchor.
 *     Prices are from the current deck. REPLACE BEFORE LAUNCH if they change.
 * ======================================================================== */
const PRICING = {
  // annual shown as "save 2 months" => 10x monthly
  tiers: [
    {
      name: 'Starter',
      blurb: 'Bring control to a small business — start with the minimum.',
      setup: 10000,
      monthly: 2000,
      users: '1–2 users',
      featured: false,
      cta: 'Book a demo of Starter',
      features: [
        'Financial Accounts (GL, voucher, ledger)',
        'Sales & invoicing (single price list)',
        'Inventory (single warehouse)',
        'P&L, Balance Sheet, Trial Balance',
        'VAT / Mushak 6.3 + monthly return',
        'Bilingual (বাংলা / English), cloud-hosted',
      ],
    },
    {
      name: 'Business',
      blurb: 'Where most growing SMEs start — the best value for money.',
      setup: 20000,
      monthly: 10000,
      users: 'Up to 10 users',
      featured: true,
      badge: 'Most popular',
      cta: 'Book a demo of Business',
      features: [
        'Everything in Starter, plus —',
        'Purchase & Procurement (PO, GRN, 3-way match)',
        'Multi-warehouse inventory',
        'HR + full Payroll (with bank advice)',
        'Customer & supplier portals',
        'Live dashboards + native mobile app',
        'Bank integration (BEFTN / RTGS)',
        '300+ standard reports, 8 hrs free training',
      ],
    },
    {
      name: 'Enterprise',
      blurb: 'Full enterprise-grade capability for companies at scale.',
      setup: 200000,
      monthly: 80000,
      users: 'Unlimited users',
      featured: false,
      cta: 'Book a demo of Enterprise',
      features: [
        'Everything in Business, plus —',
        'Manufacturing & Production (BOM, MRP)',
        'LC & Import (full SWIFT integration)',
        'Project & Job Costing',
        'Multi-company, multi-branch',
        'Advanced BI + self-service report builder',
        'SSO/SAML, row-level access, audit log',
        'Dedicated account manager, 24/7 priority support',
      ],
    },
  ],
  alwaysFree: [
    'Bangla support', 'Initial training', 'Software updates',
    'Cloud hosting & backup', 'Data security', 'NBR compliance updates',
  ],
}

/* ===========================================================================
 * 14. FAQ — objection handling
 * ======================================================================== */
const FAQ = [
  { q: 'How long until we’re live?', a: 'A structured 90-day rollout — not a big-bang gamble. Discovery, configuration, training and a pilot, then cutover with 30 days of hyper-care. You sign off at every phase before we move on.' },
  { q: 'Will it scale as we grow?', a: 'Every module is built to grow up to 10× with your business — no system change required. NexaERP already handles monthly billing of billions of taka for national electricity utilities.' },
  { q: 'We already use other software. How do we migrate?', a: 'We run a parallel period and migrate your master data and balances during configuration. You keep working while we move, and we reconcile before final cutover — no lost history.' },
  { q: 'Is our data safe, and is the company stable?', a: 'Encrypted in transit and at rest, daily backups, a tested disaster-recovery plan, and a tamper-evident audit log. ASL is a debt-free, cash-positive company that has been in production since 2016 — never missed a payroll.' },
  { q: 'Do you handle NBR / VAT compliance?', a: 'Out of the box. Mushak 6.3 on every invoice, Mushak 9.1 monthly return with registers, AIT/TDS auto-deduction and Form 50. When NBR rules change, we update the system — your team doesn’t have to.' },
  { q: 'Can it work across countries and currencies?', a: 'Yes — multi-company, multi-branch and multi-currency are built in, with delivery teams in Dhaka and New York for local and overseas operations.' },
]

/* ===========================================================================
 * 15. FINAL CTA — peak-end + scarcity (genuine constraint)
 * ======================================================================== */
const FINAL = {
  headingBn: 'আপনার business আবার আপনার control-এ ফিরিয়ে আনুন।',
  heading: 'Bring your business back into control.',
  subBn: 'কাল নয় — আজ। প্রতি মাস দেরি মানে আরও ৳8–20 লাখ hidden cost, চুপচাপ বেরিয়ে যাওয়া।',
  sub: 'Not tomorrow — today. Every month you wait is another ৳8–20 lakh in hidden cost, gone quietly.',
  scarcityBn: 'এই quarter-এ মাত্র 6টি onboarding slot খালি আছে।',
  scarcity: 'Only 6 onboarding slots open this quarter.',
  primaryCta: 'Book your free demo',
  riskReversalBn: 'Free 30 মিনিটের demo · pilot-এ commit করতে হবে না · comfortable হলে তবেই full deal।',
  riskReversal: 'Free 30-min demo · No commitment to pilot · Full deal only when you’re comfortable.',
}

/* ===========================================================================
 * 15b. BOOKING WIDGET — Calendly-style demo scheduler that sends a pre-filled
 *      WhatsApp message. All settings editable here.
 * ======================================================================== */
const BOOKING = {
  // 01755396613 in international format for wa.me (BD code 880, drop leading 0)
  whatsapp: '8801755396613',
  titleBn: 'আপনার সুবিধামতো একটা সময় বেছে নিন',
  title: 'Pick a time that suits you',
  subBn: 'তারিখ আর slot বেছে আপনার তথ্য দিন — WhatsApp-এ সঙ্গে সঙ্গে confirm হবে।',
  sub: 'Choose a date and slot, add your details — it confirms instantly on WhatsApp.',
  daysAhead: 45,            // how far ahead visitors can book
  disabledWeekdays: [5],    // 5 = Friday (weekend in BD). Empty array = all days open.
  slots: ['10:00 am', '11:00 am', '12:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm'],
}

// Month / weekday labels (locale-independent)
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

/* ===========================================================================
 *  HOOKS & SMALL HELPERS
 * ======================================================================== */

// Reveal-on-scroll: adds .in when the element enters the viewport.
function useReveal() {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect() } },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, shown]
}

// Count-up number that animates once it scrolls into view.
function CountUp({ end, suffix = '', duration = 1400 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setVal(Math.round(end * eased))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [end, duration])
  return <span ref={ref}>{val}{suffix}</span>
}

const fmtBDT = (n) =>
  '৳' + Math.round(n).toLocaleString('en-IN')

/* ===========================================================================
 *  APP
 * ======================================================================== */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <div className="page">
      <Styles />
      <div className="grid-bg" aria-hidden="true" />

      {/* ---------------------------------------------------------------- NAV */}
      <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
        <div className="container nav__inner">
          <a href="#top" className="logo" aria-label={`${BRAND.name} home`}>
            Nexa<span className="logo__accent">ERP</span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
            ))}
          </nav>

          <div className="nav__actions">
            {/* Sign in hidden for now — restore this line when the login is ready */}
            {/* <a href="#" className="btn btn--ghost nav__signin">Sign in</a> */}
            <a href={BRAND.demoUrl} className="btn btn--primary">Book a free demo</a>
          </div>

          <button
            className="nav__burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="nav__mobile" onClick={closeMenu}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav__mobile-link">{l.label}</a>
            ))}
            <a href={BRAND.demoUrl} className="btn btn--primary nav__mobile-cta">Book a free demo</a>
          </div>
        )}
      </header>

      <main id="top">
        <Hero />
        <LogoWall />
        <Problem />
        <StatsBand />
        <Modules />
        <Video />
        <MagicMoment />
        <Warehouse />
        <HowItWorks />
        <RoiCalculator />
        <ReframeBand />
        <Testimonials />
        <CustomerStories />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </div>
  )
}

/* ----------------------------------------------------------------- HERO --- */
function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow"><span className="eyebrow__dot" />{HERO.eyebrow}</p>
          <h1 className="hero__title">
            {HERO.titleLines.map((line, i) => (
              <span key={i} className="hero__title-line" style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
                {line}
              </span>
            ))}
          </h1>
          {/* English sub kept in HERO.sub constant if you ever want it back */}
          <p className="hero__sub-bn bn">{HERO.subBn}</p>
          <div className="hero__ctas">
            <a href={BRAND.demoUrl} className="btn btn--primary btn--lg">{HERO.primaryCta}<ArrowRight size={18} /></a>
            <a href="#tour" className="btn btn--outline btn--lg">{HERO.secondaryCta}</a>
          </div>
          <p className="hero__risk">{HERO.riskReversal}</p>
        </div>

        <HeroVideo />
      </div>
    </section>
  )
}

/* Product video in the hero banner (mp4 ambient loop, YouTube, or placeholder). */
function HeroVideo() {
  const [playing, setPlaying] = useState(false)
  const hasMp4 = Boolean(HERO_VIDEO.mp4)
  const hasYt = Boolean(HERO_VIDEO.youtubeId)
  return (
    <div className="hero-media">
      <div className="hero-media__glow" aria-hidden="true" />
      <div className="hero-media__frame">
        {hasMp4 ? (
          <video
            className="hero-media__video"
            src={HERO_VIDEO.mp4}
            poster={HERO_VIDEO.poster || undefined}
            autoPlay
            muted
            loop
            playsInline
            aria-label="NexaERP product video"
          />
        ) : hasYt && playing ? (
          <iframe
            className="hero-media__video"
            src={`https://www.youtube.com/embed/${HERO_VIDEO.youtubeId}?autoplay=1&rel=0`}
            title="NexaERP product video"
            allow="accelerated-encoder; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className="hero-media__poster"
            onClick={() => hasYt && setPlaying(true)}
            aria-label={hasYt ? 'Play product video' : 'Product video placeholder'}
            style={hasYt ? { backgroundImage: `url(https://img.youtube.com/vi/${HERO_VIDEO.youtubeId}/maxresdefault.jpg)` } : undefined}
          >
            <span className="hero-media__play"><Play size={26} fill="currentColor" aria-hidden="true" /></span>
            {!hasYt && <span className="hero-media__hint">Add a video — set HERO_VIDEO in App.jsx</span>}
          </button>
        )}
      </div>
    </div>
  )
}

/* Animated product dashboard mock — pure CSS/SVG, no images. */
function DashboardMock() {
  return (
    <div className="dash dash--showcase" role="img" aria-label="NexaERP dashboard preview">
      <div className="dash__stage">
        <div className="dash__glow" aria-hidden="true" />
        <div className="dash__shell">
          <div className="dash__chrome">
            <span className="dot" /><span className="dot" /><span className="dot" />
          </div>
          <div className="dash__screen">
            <img src="/images/gallery-1.png" alt="NexaERP gallery image 1" className="dash__screen-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Kpi({ label, value, trend, up }) {
  return (
    <div className="kpi">
      <span className="kpi__label">{label}</span>
      <span className="kpi__value">{value}</span>
      <span className={`kpi__trend ${up ? 'kpi__trend--up' : 'kpi__trend--down'}`}>{trend}</span>
    </div>
  )
}

/* ----------------------------------------------------------- LOGO WALL --- */
function LogoWall() {
  const row = [...CLIENTS, ...CLIENTS] // duplicate for a seamless marquee loop
  return (
    <section className="trust" aria-label="Trusted by">
      <p className="trust__label">Mission-critical operations run on NexaERP</p>

      <div className="logos" aria-hidden="false">
        <div className="logos__track">
          {row.map((c, i) => <LogoTile key={i} client={c} />)}
        </div>
      </div>

      <div className="regions">
        <span className="regions__label">Serving teams across</span>
        <div className="regions__list">
          {REGIONS.map((r) => <FlagTile key={r.code} region={r} />)}
        </div>
      </div>
    </section>
  )
}

function LogoTile({ client }) {
  const [err, setErr] = useState(false)
  return (
    <div className="logo-tile" title={client.name}>
      {err ? (
        <span className="logo-tile__fallback">{client.name}</span>
      ) : (
        <img
          className="logo-tile__img"
          src={encodeURI(LOGO_DIR + client.file)}
          alt={`${client.name} logo`}
          loading="lazy"
          onError={() => setErr(true)}
        />
      )}
    </div>
  )
}

function FlagTile({ region }) {
  const [err, setErr] = useState(false)
  return (
    <span className="flag-tile">
      {!err && (
        <img
          className="flag-tile__img"
          src={`https://flagcdn.com/${region.code}.svg`}
          alt={`${region.name} flag`}
          loading="lazy"
          onError={() => setErr(true)}
        />
      )}
      <span className="flag-tile__name">{region.name}</span>
    </span>
  )
}

/* -------------------------------------------------------------- PROBLEM --- */
function Problem() {
  const [ref, shown] = useReveal()
  return (
    <section id="problem" className="section problem">
      <div className="container">
        <SectionHead kicker={PROBLEM.kicker} kickerDanger heading={PROBLEM.heading} intro={PROBLEM.intro} />
        <div ref={ref} className={`problem__grid ${shown ? 'in' : ''}`}>
          {PROBLEM.cards.map((c, i) => (
            <article key={c.title} className="loss-card" style={{ transitionDelay: `${i * 70}ms` }}>
              <c.icon className="loss-card__icon" size={22} aria-hidden="true" />
              <h3 className="loss-card__title">{c.title}</h3>
              <p className="loss-card__amount">{c.amount}<span className="loss-card__per">{c.per}</span></p>
              <p className="loss-card__desc">{c.desc}</p>
            </article>
          ))}
        </div>
        <div className="problem__total">
          <p className="problem__total-text">{PROBLEM.total}</p>
          <p className="problem__turn">{PROBLEM.turn}</p>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------- STATS BAND --- */
function StatsBand() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((s) => (
          <div key={s.label} className="stat">
            <span className="stat__value"><CountUp end={s.value} suffix={s.suffix} /></span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- MODULES --- */
function Modules() {
  const [ref, shown] = useReveal()
  return (
    <section id="modules" className="section">
      <div className="container">
        <SectionHead
          kicker="One platform, sixteen modules"
          heading="Everything your business does — in one system."
          intro="One login replaces fifteen apps. Each module shares a single database, so there’s nothing to reconcile and nothing to mismatch."
        />
        <div ref={ref} className={`modules ${shown ? 'in' : ''}`}>
          {MODULES.map((m, i) => (
            <article key={m.name} className="module" style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
              <div className="module__icon"><m.icon size={20} aria-hidden="true" /></div>
              <h3 className="module__name">{m.name}</h3>
              <p className="module__outcome">{m.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------- VIDEO TOUR --- */
function Video() {
  const [playing, setPlaying] = useState(false)
  const hasVideo = Boolean(VIDEO.embedUrl)
  return (
    <section id="tour" className="section video">
      <div className="container">
        <SectionHead kicker={VIDEO.kicker} heading={VIDEO.heading} intro={VIDEO.intro} center />
        <div className="video__frame">
          <div className="video__glow" aria-hidden="true" />
          {playing && hasVideo ? (
            <iframe
              className="video__iframe"
              src={`${VIDEO.embedUrl}${VIDEO.embedUrl.includes('?') ? '&' : '?'}autoplay=1`}
              title={VIDEO.poster.caption}
              allow="accelerated-encoder; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              className="video__poster"
              onClick={() => hasVideo && setPlaying(true)}
              aria-label={hasVideo ? 'Play product tour' : 'Product tour video — add an embed URL in the VIDEO constant'}
              style={{
                backgroundImage: "linear-gradient(160deg,var(--bg-2),var(--bg)), url('/images/nexa-erp-dashboard.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Faux dashboard backdrop so the poster looks alive even before a real video is added */}
              <div className="video__poster-bg" aria-hidden="true">
                <span /><span /><span /><span /><span /><span />
              </div>
              <span className="video__play"><Play size={26} fill="currentColor" aria-hidden="true" /></span>
              <span className="video__meta">{VIDEO.poster.caption} · {VIDEO.poster.duration}</span>
              {!hasVideo && <span className="video__hint">Paste a YouTube/Vimeo embed URL in the VIDEO constant to go live</span>}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- MAGIC MOMENT --- */
function MagicMoment() {
  const [ref, shown] = useReveal()
  return (
    <section id="magic" className="section magic">
      <div className="container">
        <SectionHead kicker={MAGIC.kicker} heading={MAGIC.heading} center />
        <div ref={ref} className={`magic__flow ${shown ? 'in' : ''}`}>
          {MAGIC.steps.map((s, i) => (
            <div key={s.title} className="magic__step" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="magic__num">{i + 1}</div>
              <div className="magic__icon"><s.icon size={22} aria-hidden="true" /></div>
              <h3 className="magic__title">{s.title}</h3>
              <p className="magic__desc">{s.desc}</p>
              {i < MAGIC.steps.length - 1 && <ArrowRight className="magic__arrow" size={18} aria-hidden="true" />}
            </div>
          ))}
        </div>
        <p className="magic__close">{MAGIC.close}</p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------ MULTI-WAREHOUSE --- */
function Warehouse() {
  return (
    <section className="section warehouse">
      <div className="container">
        <SectionHead kicker={WAREHOUSE.kicker} heading={WAREHOUSE.heading} intro={WAREHOUSE.intro} />
        <div className="warehouse__methods">
          {WAREHOUSE.methods.map((m) => (
            <article key={m.tag} className="wh-card">
              <span className="wh-card__tag">{m.tag}</span>
              <h3 className="wh-card__title">{m.title}</h3>
              <p className="wh-card__desc">{m.desc}</p>
              <ul className="wh-card__list">
                {m.points.map((p) => (
                  <li key={p}><Check size={16} aria-hidden="true" />{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="warehouse__access">
          <h4 className="warehouse__access-title"><ShieldCheck size={18} aria-hidden="true" /> Control who sees what</h4>
          <ul>
            {WAREHOUSE.access.map((a) => <li key={a}><Check size={15} aria-hidden="true" />{a}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------- HOW IT WORKS --- */
function HowItWorks() {
  const [ref, shown] = useReveal()
  return (
    <section className="section how">
      <div className="container">
        <SectionHead
          kicker="Your path forward"
          heading="From chaos to control — in 90 days."
          intro="A structured, wave-by-wave rollout — not a big-bang gamble. You sign off at every step. No surprises."
        />
        <div ref={ref} className={`how__track ${shown ? 'in' : ''}`}>
          {STEPS.map((s, i) => (
            <div key={s.title} className="how__step" style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="how__marker"><span>{i + 1}</span></div>
              <span className="how__week">{s.week}</span>
              <h3 className="how__title">{s.title}</h3>
              <p className="how__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------ ROI CALCULATOR ---- */
function RoiCalculator() {
  const [team, setTeam] = useState(ROI.defaults.team)
  const [hours, setHours] = useState(ROI.defaults.hoursLost)
  const [rate, setRate] = useState(ROI.defaults.costPerHour)

  // weekly reclaimable hours * rate * reclaim%, then to month/year
  const weekly = team * hours * rate * ROI.reclaimRate
  const monthly = weekly * 4.33
  const yearly = monthly * 12

  return (
    <section id="roi" className="section roi">
      <div className="container">
        <SectionHead
          kicker="The real math"
          heading="See what manual work is costing you."
          intro="Move the sliders. This is your money — recoverable every month NexaERP runs."
          center
        />
        <div className="roi__panel">
          <div className="roi__controls">
            <RoiSlider label="People doing manual / repetitive work" value={team} min={1} max={200} step={1} onChange={setTeam} suffix=" people" />
            <RoiSlider label="Hours each loses to manual work / week" value={hours} min={1} max={40} step={1} onChange={setHours} suffix=" hrs" />
            <RoiSlider label="Loaded cost per hour" value={rate} min={150} max={2000} step={50} onChange={setRate} prefix="৳" />
          </div>

          <div className="roi__result">
            <p className="roi__result-label">You could recover about</p>
            <p className="roi__monthly">{fmtBDT(monthly)}<span>/month</span></p>
            <p className="roi__yearly">≈ {fmtBDT(yearly)} a year</p>
            <p className="roi__assume">{ROI.assumptionNote}</p>
            <a href={BRAND.demoUrl} className="btn btn--primary btn--lg roi__cta">Claim this <ArrowRight size={18} /></a>
            <p className="roi__risk">See your real number on your own data in a 30-min demo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function RoiSlider({ label, value, min, max, step, onChange, prefix = '', suffix = '' }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <label className="slider">
      <span className="slider__top">
        <span className="slider__label">{label}</span>
        <span className="slider__value">{prefix}{value.toLocaleString('en-IN')}{suffix}</span>
      </span>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ '--pct': `${pct}%` }}
        aria-label={label}
      />
    </label>
  )
}

/* ---------------------------------------------------------- REFRAME BAND --- */
function ReframeBand() {
  const [ref, shown] = useReveal()
  return (
    <section className="reframe">
      <div ref={ref} className={`container reframe__inner ${shown ? 'in' : ''}`}>
        {REFRAME.band.map((q, i) => (
          <p key={i} className="reframe__quote" style={{ transitionDelay: `${i * 140}ms` }}>
            <span className="reframe__mark" aria-hidden="true">“</span>
            <span className="reframe__bn bn">{q.bn}</span>
            {q.emphasisBn && <span className="reframe__kicker bn">{q.emphasisBn}</span>}
            <span className="reframe__en">{q.text}{q.emphasis ? ` ${q.emphasis}` : ''}</span>
          </p>
        ))}
      </div>
    </section>
  )
}

/* --------------------------------------------------------- TESTIMONIALS --- */
function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead kicker="What leaders tell us" heading="Same data. Everyone. Finally." introBn="ব্যবসায়ীরা যা বলছেন — এক system, এক truth, সবার হাতে একই data।" center />
        {/* REPLACE BEFORE LAUNCH: swap role-based placeholders for real approved quotes. */}
        <div className="testimonials">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="testimonial">
              <Quote className="testimonial__mark" size={28} aria-hidden="true" />
              <blockquote className="testimonial__quote bn">{t.quoteBn}</blockquote>
              <p className="testimonial__quote-en">{t.quote}</p>
              <figcaption className="testimonial__cap">
                <span className="testimonial__role">{t.role}</span>
                <span className="testimonial__org">{t.org}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="testimonials__note">Role-based examples shown — real client quotes available under NDA.</p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------- CUSTOMER STORIES --- */
function CustomerStories() {
  return (
    <section id="stories" className="section stories">
      <div className="container">
        <SectionHead
          kicker="In their own words"
          heading="Customers, on camera."
          introBn="গ্রাহকদের মুখেই শুনুন — NexaERP-এর পরে তাঁদের business-এ কী বদলালো।"
          intro="Real businesses telling you what changed after NexaERP — not our words, theirs."
          center
        />
        <div className="stories__grid">
          {VIDEO_STORIES.map((s, i) => <StoryCard key={i} story={s} />)}
        </div>
      </div>
    </section>
  )
}

function StoryCard({ story }) {
  const [playing, setPlaying] = useState(false)
  const hasVideo = Boolean(story.youtubeId)
  return (
    <article className="story">
      <div className="story__video">
        {playing && hasVideo ? (
          <iframe
            className="story__iframe"
            src={`https://www.youtube.com/embed/${story.youtubeId}?autoplay=1&rel=0`}
            title={`${story.name} — ${story.org}`}
            allow="accelerated-encoder; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className="story__poster"
            onClick={() => hasVideo && setPlaying(true)}
            aria-label={hasVideo ? `Play ${story.org} story` : 'Customer story — add a YouTube ID in the VIDEO_STORIES constant'}
            style={hasVideo ? { backgroundImage: `url(https://img.youtube.com/vi/${story.youtubeId}/hqdefault.jpg)` } : undefined}
          >
            <span className="story__play"><Play size={22} fill="currentColor" aria-hidden="true" /></span>
            {!hasVideo && <span className="story__hint">Add YouTube link</span>}
          </button>
        )}
      </div>
      <div className="story__body">
        <p className="story__blurb bn">“{story.blurbBn}”</p>
        <p className="story__blurb-en">{story.blurb}</p>
        <div className="story__cap">
          <span className="story__name">{story.name}</span>
          <span className="story__role">{story.role} · {story.org}</span>
        </div>
      </div>
    </article>
  )
}

/* -------------------------------------------------------------- PRICING --- */
function Pricing() {
  const [annual, setAnnual] = useState(false)
  // annual = 10 months' price (save 2 months)
  const priceFor = (m) => (annual ? m * 10 : m)
  const per = annual ? '/year' : '/month'

  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <SectionHead
          kicker="Investment options"
          heading="Three plans, sized to your stage."
          intro="Every plan includes Bangla support, training, updates and security — no surprise charges, ever."
          center
        />

        <div className="pricing__punch">
          <p className="pricing__punch-bn bn">{REFRAME.pricingPunchBn}</p>
          <p className="pricing__punch-en">{REFRAME.pricingPunch}</p>
        </div>

        <div className="pricing__toggle" role="group" aria-label="Billing period">
          <button className={!annual ? 'on' : ''} onClick={() => setAnnual(false)} aria-pressed={!annual}>Monthly</button>
          <button className={annual ? 'on' : ''} onClick={() => setAnnual(true)} aria-pressed={annual}>
            Annual <span className="pricing__save">Save 2 months</span>
          </button>
        </div>

        <div className="pricing__grid">
          {PRICING.tiers.map((t) => (
            <article key={t.name} className={`tier ${t.featured ? 'tier--featured' : ''}`}>
              {t.badge && <span className="tier__badge">{t.badge}</span>}
              <h3 className="tier__name">{t.name}</h3>
              <p className="tier__blurb">{t.blurb}</p>
              <p className="tier__price">{fmtBDT(priceFor(t.monthly))}<span className="tier__per">{per}</span></p>
              <p className="tier__setup">+ {fmtBDT(t.setup)} one-time setup</p>
              <p className="tier__users">{t.users}</p>
              <a href={BRAND.demoUrl} className={`btn btn--lg tier__cta ${t.featured ? 'btn--primary' : 'btn--outline'}`}>{t.cta}</a>
              <ul className="tier__features">
                {t.features.map((f) => (
                  <li key={f}><Check size={15} aria-hidden="true" />{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="pricing__free">
          <span className="pricing__free-label">Free on every plan:</span>
          {PRICING.alwaysFree.map((f) => <span key={f} className="pricing__free-chip"><Check size={13} aria-hidden="true" />{f}</span>)}
        </div>
        {/* REPLACE BEFORE LAUNCH: confirm pricing numbers are current. */}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ FAQ --- */
function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section">
      <div className="container container--narrow">
        <SectionHead kicker="Before you ask" heading="The questions every buyer has." center />
        <div className="faq">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <ChevronDown className="faq__chev" size={20} aria-hidden="true" />
                </button>
                <div className="faq__a-wrap" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="faq__a-inner"><p className="faq__a">{item.a}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ FINAL CTA --- */
function FinalCta() {
  return (
    <section id="book-demo" className="final">
      <div className="final__glow" aria-hidden="true" />

      <div className="container">
        <SectionHead
          kicker="Free 30-minute walkthrough"
          heading="Book your demo"
          introBn={BOOKING.titleBn}
          intro={BOOKING.sub}
          center
        />
      </div>

      <div className="container final__split">
        <div className="final__copy">
          <span className="final__scarcity bn">{FINAL.scarcityBn}</span>
          <h2 className="final__heading bn">{FINAL.headingBn}</h2>
          <p className="final__heading-en">{FINAL.heading}</p>
          <p className="final__sub bn">{FINAL.subBn}</p>
          <p className="final__sub-en">{FINAL.sub}</p>
          <p className="final__risk bn">{FINAL.riskReversalBn}</p>
          <p className="final__risk-en">{FINAL.riskReversal}</p>

          <div className="final__methods-wrap">
            <p className="final__or">Prefer to talk first?</p>
            <div className="final__methods">
              <a className="final__method" href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>
                <Phone size={16} aria-hidden="true" /> {BRAND.phone}
              </a>
              <a className="final__method" href={`mailto:${BRAND.email}`}>
                <Mail size={16} aria-hidden="true" /> {BRAND.email}
              </a>
            </div>
          </div>
        </div>

        <BookingWidget />
      </div>
    </section>
  )
}

/* ----------------------------------------------------- BOOKING WIDGET --- */
function BookingWidget() {
  // "today" at midnight — the floor for selectable dates
  const today = new Date(); today.setHours(0, 0, 0, 0)
  const maxDate = new Date(today); maxDate.setDate(maxDate.getDate() + BOOKING.daysAhead)

  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() })
  const [date, setDate] = useState(null)
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const sameDay = (a, b) => a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
  const dayDisabled = (d) => d < today || d > maxDate || BOOKING.disabledWeekdays.includes(d.getDay())

  // build the visible month grid (leading blanks + day cells)
  const firstDay = new Date(view.y, view.m, 1).getDay()
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate()
  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(view.y, view.m, d))

  const canPrev = view.y > today.getFullYear() || (view.y === today.getFullYear() && view.m > today.getMonth())
  const canNext = view.y < maxDate.getFullYear() || (view.y === maxDate.getFullYear() && view.m < maxDate.getMonth())
  const shift = (n) => setView((v) => { const d = new Date(v.y, v.m + n, 1); return { y: d.getFullYear(), m: d.getMonth() } })

  const pad = (n) => String(n).padStart(2, '0')
  const ddmmyyyy = date ? `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}` : ''
  const niceDate = date ? `${WEEKDAYS[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()].slice(0, 3)} ${date.getFullYear()}` : ''

  const valid = Boolean(date && time && name.trim() && phone.trim())

  // WhatsApp text formatting: *bold* renders on every device — no emojis (they break to "?")
  const message =
`Hi NexaERP, I want to take a demo.
*Date:* ${ddmmyyyy}
*Time:* ${time}
*Name:* ${name.trim()}
*Number:* ${phone.trim()}
*Email:* ${email.trim() || '-'}`

  const waHref = `https://wa.me/${BOOKING.whatsapp}?text=${encodeURIComponent(message)}`

  return (
      <div className="booking">
        <div className="booking__glow" aria-hidden="true" />

        <div className="booking__grid">
          {/* STEP 1 — date */}
          <div className="booking__col">
            <span className="booking__step"><span className="booking__step-n">1</span> Pick a date</span>
            <div className="cal">
              <div className="cal__bar">
                <button type="button" className="cal__nav" onClick={() => shift(-1)} disabled={!canPrev} aria-label="Previous month"><ChevronLeft size={18} /></button>
                <span className="cal__title">{MONTHS[view.m]} {view.y}</span>
                <button type="button" className="cal__nav" onClick={() => shift(1)} disabled={!canNext} aria-label="Next month"><ChevronRight size={18} /></button>
              </div>
              <div className="cal__week">{WEEKDAYS.map((w) => <span key={w}>{w}</span>)}</div>
              <div className="cal__grid">
                {cells.map((c, i) => c ? (
                  <button
                    type="button"
                    key={i}
                    className={`cal__day ${sameDay(c, date) ? 'is-selected' : ''}`}
                    disabled={dayDisabled(c)}
                    onClick={() => setDate(c)}
                  >{c.getDate()}</button>
                ) : <span key={i} className="cal__day cal__day--empty" />)}
              </div>
            </div>
          </div>

          {/* STEP 2 — time */}
          <div className="booking__col">
            <span className="booking__step"><span className="booking__step-n">2</span> Pick a time slot</span>
            <div className={`slots ${date ? '' : 'slots--locked'}`}>
              {BOOKING.slots.map((s) => (
                <button
                  type="button"
                  key={s}
                  className={`slot ${time === s ? 'is-selected' : ''}`}
                  onClick={() => setTime(s)}
                  disabled={!date}
                >
                  <Clock size={14} aria-hidden="true" />{s}
                </button>
              ))}
              {!date && <p className="slots__hint">Pick a date first to see slots.</p>}
            </div>
          </div>
        </div>

        {/* STEP 3 — details */}
        <div className="booking__form">
          <span className="booking__step"><span className="booking__step-n">3</span> Your details</span>
          <div className="booking__fields">
            <label className="field">
              <User size={15} aria-hidden="true" />
              <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="field">
              <Phone size={15} aria-hidden="true" />
              <input type="tel" placeholder="Mobile number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label className="field">
              <Mail size={15} aria-hidden="true" />
              <input type="email" placeholder="Email (optional)" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
        </div>

        {/* summary + submit */}
        <div className="booking__foot">
          <div className="booking__summary">
            {valid ? (
              <><Check size={16} aria-hidden="true" /> {niceDate} · {time}</>
            ) : (
              <span className="booking__summary-empty">Select a date, time and your name to continue.</span>
            )}
          </div>
          <a
            className={`btn btn--primary btn--lg booking__submit ${valid ? '' : 'is-disabled'}`}
            href={valid ? waHref : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!valid}
            onClick={(e) => { if (!valid) e.preventDefault() }}
          >
            <MessageCircle size={18} aria-hidden="true" /> Confirm on WhatsApp
          </a>
        </div>
        <p className="booking__note">No payment now · We’ll confirm your slot on WhatsApp within minutes.</p>
      </div>
  )
}

/* --------------------------------------------------------------- FOOTER --- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="logo">Nexa<span className="logo__accent">ERP</span></a>
          <p className="footer__tagline">{BRAND.tagline}</p>
          <p className="footer__company">{BRAND.company} / {BRAND.parent}</p>
          <p className="footer__locations">
            {BRAND.locations.map((l) => (
              <span key={l}><MapPin size={13} aria-hidden="true" />{l}</span>
            ))}
          </p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4>Product</h4>
            <a href="#modules">Modules</a>
            <a href="#pricing">Pricing</a>
            <a href="#roi">ROI calculator</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <a href="#">About ASL</a>
            <a href="#problem">Why NexaERP</a>
            <a href={`mailto:${BRAND.email}`}>Contact</a>
            <a href="#book-demo">Book a demo</a>
          </div>
          <div className="footer__col">
            <h4>Compliance</h4>
            <a href="#">NBR / Mushak ready</a>
            <a href="#">Data security</a>
            <a href="#">BASIS member</a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {2026} {BRAND.company}. All rights reserved.</span>
        <span>Built in Bangladesh · for Bangladesh · alongside your business.</span>
      </div>
    </footer>
  )
}

/* --------------------------------------------------------- SECTION HEAD --- */
function SectionHead({ kicker, heading, intro, introBn, center, kickerDanger }) {
  return (
    <div className={`sec-head ${center ? 'sec-head--center' : ''}`}>
      <p className={`kicker ${kickerDanger ? 'kicker--danger' : ''}`}>{kicker}</p>
      <h2 className="sec-head__title">{heading}</h2>
      {introBn && <p className="sec-head__intro-bn bn">{introBn}</p>}
      {intro && <p className="sec-head__intro">{intro}</p>}
    </div>
  )
}

/* ===========================================================================
 *  STYLES — single <style> block (plain CSS, exact brand colors)
 * ======================================================================== */
function Styles() {
  return <style>{CSS}</style>
}

const CSS = `
:root{
  --green:#28B83F; --green-hi:#3BE45C;
  --bg:#0A0B0D; --bg-2:#101216; --bg-3:#15181d;
  --ink:#F4F7F4; --muted:#9aa3a0; --muted-2:#6b736f;
  --line:rgba(255,255,255,.08); --line-2:rgba(255,255,255,.14);
  --danger:#ff5c5c; --danger-dim:rgba(255,92,92,.12);
  --radius:16px; --radius-sm:11px;
  --maxw:1180px;
  --font-display:'Bricolage Grotesque',sans-serif;
  --font-body:'Hanken Grotesk',sans-serif;
  --font-bn:'Hind Siliguri','Hanken Grotesk',sans-serif;
}
/* Bangla text — clean Bengali rendering for native-language emotional copy */
.bn{font-family:var(--font-bn); line-height:1.55}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0}
.page{
  position:relative; background:var(--bg); color:var(--ink);
  font-family:var(--font-body); font-size:17px; line-height:1.6;
  padding-top:68px; overflow-x:hidden; -webkit-font-smoothing:antialiased;
}
img{max-width:100%}
a{color:inherit;text-decoration:none}
ul{margin:0;padding:0;list-style:none}

/* faint power-grid texture + ambient green glow */
.grid-bg{
  position:fixed; inset:0; z-index:0; pointer-events:none;
  background-image:
    linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);
  background-size:54px 54px;
  mask-image:radial-gradient(ellipse 80% 60% at 50% 0%,#000 35%,transparent 80%);
}
.page::before{
  content:''; position:fixed; top:-15%; left:50%; transform:translateX(-50%);
  width:900px; height:560px; z-index:0; pointer-events:none;
  background:radial-gradient(circle,rgba(40,184,63,.16),transparent 62%);
  filter:blur(20px);
}
.page > *{position:relative; z-index:1}

.container{max-width:var(--maxw); margin:0 auto; padding:0 24px}
.container--narrow{max-width:820px}
.section{padding:96px 0}

/* ---- buttons ---- */
.btn{
  display:inline-flex; align-items:center; gap:8px; justify-content:center;
  font-family:var(--font-body); font-weight:600; font-size:15px;
  padding:11px 20px; border-radius:11px; border:1px solid transparent;
  cursor:pointer; transition:transform .15s ease, background .2s ease, box-shadow .2s ease, border-color .2s; white-space:nowrap;
}
.btn--lg{padding:14px 26px; font-size:16px}
.btn--xl{padding:18px 38px; font-size:18px; border-radius:13px}
.btn--primary{background:var(--green); color:#04210b; box-shadow:0 6px 24px rgba(40,184,63,.28)}
.btn--primary:hover{background:var(--green-hi); transform:translateY(-2px); box-shadow:0 10px 32px rgba(59,228,92,.4)}
.btn--outline{background:transparent; color:var(--ink); border-color:var(--line-2)}
.btn--outline:hover{border-color:var(--green); color:var(--green-hi); transform:translateY(-2px)}
.btn--ghost{background:transparent; color:var(--muted); padding:9px 14px}
.btn--ghost:hover{color:var(--ink)}

/* ---- nav ---- */
.nav{position:fixed; top:0; left:0; right:0; z-index:50; transition:background .25s, border-color .25s, backdrop-filter .25s; border-bottom:1px solid transparent}
.nav--solid{background:rgba(10,11,13,.82); backdrop-filter:blur(14px); border-bottom-color:var(--line)}
.nav__inner{display:flex; align-items:center; justify-content:space-between; height:68px}
.logo{font-family:var(--font-display); font-weight:700; font-size:24px; letter-spacing:-.5px}
.logo__accent{color:var(--green)}
.nav__links{display:flex; gap:30px}
.nav__link{color:var(--muted); font-size:15px; font-weight:500; transition:color .2s}
.nav__link:hover{color:var(--ink)}
.nav__actions{display:flex; align-items:center; gap:10px}
.nav__burger{display:none; background:none; border:none; color:var(--ink); cursor:pointer; padding:6px}
.nav__mobile{display:none}

/* ---- section head ---- */
.sec-head{max-width:680px; margin-bottom:52px}
.sec-head--center{margin-left:auto; margin-right:auto; text-align:center}
.kicker{
  display:inline-block; font-size:13px; font-weight:600; letter-spacing:.14em; text-transform:uppercase;
  color:var(--green); margin:0 0 14px;
}
.kicker--danger{color:var(--danger)}
.sec-head__title{
  font-family:var(--font-display); font-weight:600; letter-spacing:-1px;
  font-size:clamp(28px,4vw,44px); line-height:1.08; margin:0;
}
.sec-head__intro-bn{color:var(--ink); font-size:18.5px; font-weight:500; margin:18px 0 0}
.sec-head__intro-bn + .sec-head__intro{font-size:15px; margin-top:8px; color:var(--muted-2)}
.sec-head__intro{color:var(--muted); font-size:18px; margin:18px 0 0}

.eyebrow{display:inline-flex; align-items:center; gap:9px; font-size:14px; font-weight:600; color:var(--muted); margin:0 0 22px; border:1px solid var(--line); padding:7px 14px; border-radius:999px; background:var(--bg-2)}
.eyebrow__dot{width:8px; height:8px; border-radius:50%; background:var(--green); box-shadow:0 0 0 4px rgba(40,184,63,.18); animation:pulse 2.4s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}

/* ---- hero ---- */
.hero{padding:48px 0 72px}
.hero__inner{display:grid; grid-template-columns:1.08fr 1.42fr; gap:28px; align-items:center}
.hero__inner{display:grid; grid-template-columns:1.02fr 1.48fr; gap:28px; align-items:center}
.dash__shell{max-width:980px; border-radius:22px; background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01)); border:1px solid rgba(255,255,255,.05); box-shadow:0 48px 140px rgba(0,0,0,.62); overflow:hidden}
.hero__title{font-family:var(--font-display); font-weight:700; letter-spacing:-1.5px; font-size:clamp(34px,4.6vw,54px); line-height:1.02; margin:0 0 22px}
.hero__title-line{display:block; opacity:0; transform:translateY(18px); animation:rise .7s cubic-bezier(.2,.7,.3,1) forwards}
.hero__title-line:last-child{color:var(--green)}
@keyframes rise{to{opacity:1; transform:none}}
.hero__sub{font-size:19px; color:var(--muted); max-width:520px; margin:0 0 14px}
.hero__sub-bn{
  position:relative; max-width:560px; margin:0 0 32px; padding:4px 0 4px 20px;
  font-size:clamp(18px,2vw,21px); font-weight:500; line-height:1.75; color:var(--ink);
}
/* green accent bar — makes the Bangla line read as an intentional lead, not a fallback */
.hero__sub-bn::before{
  content:''; position:absolute; left:0; top:6px; bottom:6px; width:3px; border-radius:3px;
  background:linear-gradient(180deg,var(--green-hi),var(--green));
  box-shadow:0 0 14px rgba(40,184,63,.45);
}
.hero__ctas{display:flex; gap:14px; flex-wrap:wrap; margin-bottom:16px}
.hero__risk{font-size:14px; color:var(--muted-2)}

/* hero media — product video banner */
@keyframes fadeIn{to{opacity:1}}
.hero-media{position:relative; z-index:1; animation:rise .8s .2s both}
.hero-media__glow{position:absolute; inset:-8% -6% auto auto; width:72%; height:86%; background:radial-gradient(circle at 30% 25%, rgba(40,184,63,.2), transparent 54%); filter:blur(42px); pointer-events:none; z-index:0}
.hero-media__frame{position:relative; z-index:1; aspect-ratio:16/9; border-radius:20px; overflow:hidden; border:1px solid var(--line-2); background:#000; box-shadow:0 44px 130px rgba(0,0,0,.62)}
.hero-media__video{position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; display:block}
.hero-media__poster{position:absolute; inset:0; width:100%; height:100%; border:none; cursor:pointer; display:grid; place-items:center; gap:12px; background:linear-gradient(150deg,var(--bg-2),var(--bg)); background-size:cover; background-position:center}
.hero-media__poster::after{content:''; position:absolute; inset:0; background:rgba(6,8,9,.3); transition:background .25s}
.hero-media__poster:hover::after{background:rgba(6,8,9,.14)}
.hero-media__play{position:relative; z-index:2; width:74px; height:74px; border-radius:50%; background:var(--green); color:#04210b; display:grid; place-items:center; box-shadow:0 8px 30px rgba(40,184,63,.45); transition:transform .2s, background .2s}
.hero-media__play svg{margin-left:3px}
.hero-media__poster:hover .hero-media__play{transform:scale(1.08); background:var(--green-hi)}
.hero-media__hint{position:relative; z-index:2; font-size:12.5px; color:var(--muted-2)}

/* legacy dashboard mock (kept for reference; not rendered) */
.dash--showcase{padding:10px 0; position:relative; overflow:visible}
.dash--showcase::before{content:''; position:absolute; inset:-8% -6% auto auto; width:72%; height:86%; background:radial-gradient(circle at 30% 25%, rgba(40,184,63,.18), transparent 54%); filter:blur(42px); pointer-events:none; z-index:0}
.dash__stage{position:relative; z-index:1; padding-left:24px}
.dash__shell{position:relative; width:100%; max-width:1140px; border-radius:22px; background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01)); border:1px solid rgba(255,255,255,.05); box-shadow:0 48px 140px rgba(0,0,0,.62); overflow:hidden}
.dash__chrome{display:flex; align-items:center; gap:7px; padding:14px 18px; border-bottom:1px solid rgba(255,255,255,.06); background:rgba(255,255,255,.02)}
.dash__screen{padding:26px; background:linear-gradient(180deg,rgba(10,11,13,.98),rgba(8,9,10,.96));}
.dash__screen-img{display:block; width:100%; height:auto; border-radius:14px; box-shadow:0 20px 60px rgba(0,0,0,.45); background:#fff}

@media (max-width:980px){
  .hero__inner{grid-template-columns:1fr; gap:34px}
  .hero__copy{order:1}
  .dash--showcase{padding:0}
  .dash__stage{padding-left:0}
  .dash__shell{max-width:100%}
  .dash__screen{padding:18px}
}

@media (min-width:1400px){
  .dash__shell{max-width:1180px}
  .dash__screen{padding:32px}
}

/* ---- trust / logo wall ---- */
.trust{padding:44px 0; border-top:1px solid var(--line); border-bottom:1px solid var(--line); background:var(--bg-2)}
.trust__label{text-align:center; font-size:13px; letter-spacing:.08em; text-transform:uppercase; color:var(--muted-2); margin:0 0 26px}
.logos{overflow:hidden; -webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent); mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.logos__track{display:flex; gap:18px; width:max-content; animation:scroll 48s linear infinite}
.logos:hover .logos__track{animation-play-state:paused}
@keyframes scroll{to{transform:translateX(-50%)}}
.logo-tile{flex:none; width:160px; height:84px; display:flex; align-items:center; justify-content:center; padding:14px 18px; background:#fff; border-radius:14px; box-shadow:0 8px 24px rgba(0,0,0,.35); transition:transform .2s}
.logo-tile:hover{transform:translateY(-3px)}
.logo-tile__img{display:block; width:100%; height:100%; object-fit:contain; object-position:center}
.logo-tile__fallback{margin:auto; font-weight:700; font-size:15px; color:#1a1d21; text-align:center; line-height:1.2}

.regions{display:flex; align-items:center; justify-content:center; flex-wrap:wrap; gap:14px 26px; margin-top:30px}
.regions__label{font-size:13px; letter-spacing:.06em; text-transform:uppercase; color:var(--muted-2)}
.regions__list{display:flex; align-items:center; gap:22px; flex-wrap:wrap; justify-content:center}
.flag-tile{display:inline-flex; align-items:center; gap:9px; font-weight:600; font-size:15px; color:var(--ink)}
.flag-tile__img{width:30px; height:20px; object-fit:cover; border-radius:3px; box-shadow:0 1px 4px rgba(0,0,0,.5)}

/* ---- problem ---- */
.problem__grid{display:grid; grid-template-columns:repeat(3,1fr); gap:16px}
.problem__grid .loss-card{opacity:0; transform:translateY(20px); transition:opacity .6s ease, transform .6s ease}
.problem__grid.in .loss-card{opacity:1; transform:none}
.loss-card{background:var(--bg-2); border:1px solid var(--line); border-left:3px solid var(--danger); border-radius:var(--radius-sm); padding:22px}
.loss-card__icon{color:var(--danger); margin-bottom:12px}
.loss-card__title{font-size:15px; font-weight:600; margin:0 0 8px; color:var(--muted)}
.loss-card__amount{font-family:var(--font-display); font-weight:700; font-size:27px; color:var(--ink); margin:0 0 8px}
.loss-card__per{font-size:14px; color:var(--muted-2); font-weight:500; margin-left:5px}
.loss-card__desc{font-size:14.5px; color:var(--muted); margin:0}
.problem__total{margin-top:32px; text-align:center; background:var(--danger-dim); border:1px solid rgba(255,92,92,.28); border-radius:var(--radius); padding:28px}
.problem__total-text{font-family:var(--font-display); font-weight:600; font-size:clamp(20px,2.6vw,28px); color:#ff8585; margin:0 0 8px}
.problem__turn{font-family:var(--font-display); font-weight:600; font-size:clamp(20px,2.6vw,28px); color:var(--green); margin:0}

/* ---- stats ---- */
.stats{border-top:1px solid var(--line); border-bottom:1px solid var(--line); background:var(--bg-2); padding:56px 0}
.stats__grid{display:grid; grid-template-columns:repeat(4,1fr); gap:24px; text-align:center}
.stat__value{display:block; font-family:var(--font-display); font-weight:700; font-size:clamp(40px,6vw,64px); line-height:1; color:var(--green)}
.stat__label{display:block; color:var(--muted); font-size:14.5px; margin-top:12px; max-width:200px; margin-inline:auto}

/* ---- modules ---- */
.modules{display:grid; grid-template-columns:repeat(4,1fr); gap:14px}
.modules .module{opacity:0; transform:translateY(18px); transition:opacity .55s ease, transform .55s ease}
.modules.in .module{opacity:1; transform:none}
.module{background:var(--bg-2); border:1px solid var(--line); border-radius:var(--radius-sm); padding:22px; transition:border-color .25s, transform .25s, box-shadow .25s}
.module:hover{border-color:rgba(40,184,63,.45); transform:translateY(-4px); box-shadow:0 16px 40px rgba(0,0,0,.4)}
.module__icon{width:42px; height:42px; display:grid; place-items:center; border-radius:11px; background:rgba(40,184,63,.12); color:var(--green); margin-bottom:15px; transition:background .25s}
.module:hover .module__icon{background:rgba(40,184,63,.22)}
.module__name{font-family:var(--font-display); font-weight:600; font-size:17px; margin:0 0 8px}
.module__outcome{font-size:14px; color:var(--muted); margin:0; line-height:1.55}

/* ---- video tour ---- */
.video__frame{position:relative; max-width:920px; margin:0 auto; aspect-ratio:16/9; border:1px solid var(--line-2); border-radius:var(--radius); overflow:hidden; box-shadow:0 30px 80px rgba(0,0,0,.5)}
.video__glow{position:absolute; inset:0; background:radial-gradient(ellipse 50% 60% at 50% 40%,rgba(40,184,63,.18),transparent 70%); pointer-events:none; z-index:2}
.video__iframe{position:absolute; inset:0; width:100%; height:100%; border:0}
.video__poster{position:absolute; inset:0; width:100%; height:100%; border:none; cursor:pointer; background:linear-gradient(160deg,var(--bg-2),var(--bg)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:18px; color:var(--ink); overflow:hidden}
.video__poster-bg{position:absolute; inset:0; display:flex; align-items:flex-end; gap:3%; padding:14% 8% 10%; opacity:.32}
.video__poster-bg span{flex:1; border-radius:6px 6px 2px 2px; background:linear-gradient(180deg,var(--green-hi),var(--green))}
.video__poster-bg span:nth-child(1){height:45%}
.video__poster-bg span:nth-child(2){height:68%}
.video__poster-bg span:nth-child(3){height:38%}
.video__poster-bg span:nth-child(4){height:82%}
.video__poster-bg span:nth-child(5){height:60%}
.video__poster-bg span:nth-child(6){height:92%}
.video__play{position:relative; z-index:3; width:78px; height:78px; border-radius:50%; background:var(--green); color:#04210b; display:grid; place-items:center; box-shadow:0 8px 30px rgba(40,184,63,.45); transition:transform .2s, background .2s}
.video__play svg{margin-left:3px}
.video__poster:hover .video__play{transform:scale(1.08); background:var(--green-hi)}
.video__meta{position:relative; z-index:3; font-size:14px; font-weight:600; color:var(--ink)}
.video__hint{position:relative; z-index:3; font-size:12.5px; color:var(--muted-2)}

/* ---- magic moment ---- */
.magic{background:var(--bg-2); border-top:1px solid var(--line); border-bottom:1px solid var(--line)}
.magic__flow{display:flex; align-items:stretch; gap:0; justify-content:space-between; flex-wrap:wrap; margin-top:8px}
.magic__step{position:relative; flex:1; min-width:150px; text-align:center; padding:10px 14px; opacity:0; transform:translateY(16px); transition:opacity .5s ease, transform .5s ease}
.magic__flow.in .magic__step{opacity:1; transform:none}
.magic__num{position:absolute; top:0; left:50%; transform:translateX(-50%); font-size:12px; font-weight:700; color:var(--green); border:1px solid rgba(40,184,63,.4); width:24px; height:24px; border-radius:50%; display:grid; place-items:center; background:var(--bg)}
.magic__icon{width:56px; height:56px; margin:34px auto 16px; display:grid; place-items:center; border-radius:50%; background:rgba(40,184,63,.1); color:var(--green); border:1px solid rgba(40,184,63,.3)}
.magic__title{font-family:var(--font-display); font-weight:600; font-size:17px; margin:0 0 6px}
.magic__desc{font-size:13.5px; color:var(--muted); margin:0}
.magic__arrow{position:absolute; top:58px; right:-9px; color:var(--muted-2)}
.magic__close{text-align:center; max-width:760px; margin:44px auto 0; font-size:18px; color:var(--ink); font-family:var(--font-display); font-weight:500; line-height:1.5}

/* ---- warehouse ---- */
.warehouse__methods{display:grid; grid-template-columns:1fr 1fr; gap:20px}
.wh-card{background:var(--bg-2); border:1px solid var(--line); border-radius:var(--radius); padding:30px}
.wh-card__tag{display:inline-block; font-size:12px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--green); background:rgba(40,184,63,.1); padding:5px 12px; border-radius:999px; margin-bottom:16px}
.wh-card__title{font-family:var(--font-display); font-weight:600; font-size:23px; margin:0 0 10px}
.wh-card__desc{color:var(--muted); font-size:15.5px; margin:0 0 20px}
.wh-card__list li{display:flex; gap:11px; align-items:flex-start; padding:9px 0; border-top:1px solid var(--line); font-size:15px}
.wh-card__list li svg{color:var(--green); flex:none; margin-top:4px}
.warehouse__access{margin-top:22px; background:var(--bg-3); border:1px solid var(--line); border-radius:var(--radius); padding:24px 28px}
.warehouse__access-title{display:flex; align-items:center; gap:9px; font-family:var(--font-display); font-weight:600; font-size:17px; margin:0 0 16px; color:var(--ink)}
.warehouse__access-title svg{color:var(--green)}
.warehouse__access ul{display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px}
.warehouse__access li{display:flex; gap:9px; align-items:flex-start; font-size:14.5px; color:var(--muted)}
.warehouse__access li svg{color:var(--green); flex:none; margin-top:3px}

/* ---- how it works ---- */
.how{background:var(--bg-2); border-top:1px solid var(--line); border-bottom:1px solid var(--line)}
.how__track{display:grid; grid-template-columns:repeat(5,1fr); gap:18px; position:relative}
.how__track::before{content:''; position:absolute; top:18px; left:8%; right:8%; height:2px; background:linear-gradient(90deg,transparent,var(--line-2),transparent)}
.how__step{position:relative; opacity:0; transform:translateY(16px); transition:opacity .5s, transform .5s}
.how__track.in .how__step{opacity:1; transform:none}
.how__marker{width:38px; height:38px; border-radius:50%; background:var(--bg); border:2px solid var(--green); color:var(--green); display:grid; place-items:center; font-weight:700; font-family:var(--font-display); margin-bottom:18px; position:relative; z-index:1}
.how__step:last-child .how__marker{background:var(--green); color:#04210b}
.how__week{font-size:12.5px; font-weight:600; color:var(--green); letter-spacing:.04em}
.how__title{font-family:var(--font-display); font-weight:600; font-size:18px; margin:6px 0 8px}
.how__desc{font-size:14px; color:var(--muted); margin:0}

/* ---- roi ---- */
.roi__panel{display:grid; grid-template-columns:1.1fr .9fr; gap:0; border:1px solid var(--line-2); border-radius:var(--radius); overflow:hidden; background:var(--bg-2); max-width:920px; margin:0 auto}
.roi__controls{padding:38px}
.slider{display:block; margin-bottom:30px}
.slider:last-child{margin-bottom:0}
.slider__top{display:flex; justify-content:space-between; align-items:baseline; margin-bottom:12px; gap:12px}
.slider__label{font-size:14.5px; color:var(--muted)}
.slider__value{font-family:var(--font-display); font-weight:700; font-size:20px; color:var(--green); white-space:nowrap}
.slider input[type=range]{-webkit-appearance:none; appearance:none; width:100%; height:6px; border-radius:999px; background:linear-gradient(90deg,var(--green) var(--pct),var(--bg-3) var(--pct)); outline:none; cursor:pointer}
.slider input[type=range]::-webkit-slider-thumb{-webkit-appearance:none; width:20px; height:20px; border-radius:50%; background:var(--green-hi); border:3px solid var(--bg); box-shadow:0 0 0 1px var(--green), 0 4px 12px rgba(0,0,0,.4); cursor:pointer}
.slider input[type=range]::-moz-range-thumb{width:20px; height:20px; border-radius:50%; background:var(--green-hi); border:3px solid var(--bg); cursor:pointer}
.roi__result{padding:38px; background:linear-gradient(160deg,rgba(40,184,63,.14),var(--bg-3)); text-align:center; display:flex; flex-direction:column; justify-content:center; border-left:1px solid var(--line)}
.roi__result-label{font-size:14px; color:var(--muted); margin:0 0 6px}
.roi__monthly{font-family:var(--font-display); font-weight:700; font-size:clamp(34px,5vw,46px); margin:0; line-height:1; color:var(--ink)}
.roi__monthly span{font-size:17px; color:var(--muted); font-weight:500}
.roi__yearly{font-size:16px; color:var(--green); font-weight:600; margin:10px 0 0}
.roi__assume{font-size:12.5px; color:var(--muted-2); margin:14px 0 20px}
.roi__cta{width:100%}
.roi__risk{font-size:12.5px; color:var(--muted-2); margin:12px 0 0}

/* ---- testimonials ---- */
.testimonials{display:grid; grid-template-columns:repeat(3,1fr); gap:18px}
.testimonial{background:var(--bg-2); border:1px solid var(--line); border-radius:var(--radius); padding:28px; margin:0; position:relative}
.testimonial__mark{color:var(--green); opacity:.55; margin-bottom:12px}
.testimonial__quote{font-weight:600; font-size:18px; line-height:1.6; margin:0 0 12px; color:var(--ink)}
.testimonial__quote-en{font-size:13.5px; line-height:1.5; color:var(--muted-2); margin:0 0 20px}
.testimonial__cap{display:flex; flex-direction:column; gap:2px}
.testimonial__role{font-weight:600; font-size:15px}
.testimonial__org{font-size:13.5px; color:var(--muted-2)}
.testimonials__note{text-align:center; font-size:13px; color:var(--muted-2); margin:24px 0 0; font-style:italic}

/* ---- customer video stories ---- */
.stories{background:var(--bg-2); border-top:1px solid var(--line); border-bottom:1px solid var(--line)}
.stories__grid{display:grid; grid-template-columns:repeat(3,1fr); gap:20px}
.story{background:var(--bg); border:1px solid var(--line); border-radius:var(--radius); overflow:hidden; transition:border-color .25s, transform .25s, box-shadow .25s}
.story:hover{border-color:rgba(40,184,63,.45); transform:translateY(-4px); box-shadow:0 18px 44px rgba(0,0,0,.45)}
.story__video{position:relative; aspect-ratio:16/9; background:#000}
.story__iframe{position:absolute; inset:0; width:100%; height:100%; border:0}
.story__poster{position:absolute; inset:0; width:100%; height:100%; border:none; cursor:pointer; display:grid; place-items:center; gap:10px; background:linear-gradient(150deg,var(--bg-3),var(--bg)); background-size:cover; background-position:center; overflow:hidden}
.story__poster::after{content:''; position:absolute; inset:0; background:rgba(6,8,9,.42); transition:background .25s}
.story:hover .story__poster::after{background:rgba(6,8,9,.18)}
.story__play{position:relative; z-index:2; width:60px; height:60px; border-radius:50%; background:var(--green); color:#04210b; display:grid; place-items:center; box-shadow:0 6px 22px rgba(40,184,63,.45); transition:transform .2s, background .2s}
.story__play svg{margin-left:2px}
.story:hover .story__play{transform:scale(1.1); background:var(--green-hi)}
.story__hint{position:relative; z-index:2; font-size:12px; font-weight:600; color:var(--ink)}
.story__body{padding:20px}
.story__blurb{font-weight:600; font-size:16.5px; line-height:1.55; margin:0 0 8px; color:var(--ink)}
.story__blurb-en{font-size:12.5px; line-height:1.5; color:var(--muted-2); margin:0 0 16px}
.story__cap{display:flex; flex-direction:column; gap:2px}
.story__name{font-weight:600; font-size:14.5px}
.story__role{font-size:13px; color:var(--muted-2)}

/* ---- reframe band ---- */
.reframe{padding:84px 0; background:var(--bg-2); border-top:1px solid var(--line); border-bottom:1px solid var(--line); position:relative; overflow:hidden}
.reframe::before{content:''; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:680px; height:340px; background:radial-gradient(ellipse,rgba(40,184,63,.1),transparent 65%); pointer-events:none}
.reframe__inner{position:relative; display:grid; gap:30px; max-width:880px}
.reframe__quote{position:relative; margin:0; padding-left:34px; opacity:0; transform:translateY(18px); transition:opacity .6s ease, transform .6s ease}
.reframe__inner.in .reframe__quote{opacity:1; transform:none}
.reframe__quote:nth-child(2){padding-left:64px}
.reframe__bn{display:block; font-weight:600; font-size:clamp(20px,2.8vw,29px); line-height:1.5; color:var(--ink)}
.reframe__kicker{display:block; margin-top:10px; color:var(--green); font-weight:600; font-size:clamp(17px,2.3vw,23px); line-height:1.45}
.reframe__en{display:block; margin-top:12px; font-family:var(--font-body); font-weight:400; font-size:14.5px; line-height:1.5; color:var(--muted-2)}
.reframe__mark{position:absolute; left:0; top:-8px; font-family:var(--font-display); font-weight:700; font-size:46px; line-height:1; color:var(--green)}
.reframe__quote:nth-child(2) .reframe__mark{left:30px}

/* ---- pricing ---- */
.pricing__punch{max-width:780px; margin:-22px auto 36px; border-left:3px solid var(--green); background:rgba(40,184,63,.06); padding:18px 24px; border-radius:0 10px 10px 0}
.pricing__punch-bn{margin:0; font-weight:600; font-size:clamp(17px,2.2vw,22px); line-height:1.5; color:var(--ink)}
.pricing__punch-en{margin:10px 0 0; font-size:14px; line-height:1.5; color:var(--muted-2)}
.pricing__toggle{display:flex; justify-content:center; gap:6px; background:var(--bg-3); border:1px solid var(--line); border-radius:999px; padding:5px; width:max-content; margin:0 auto 44px}
.pricing__toggle button{border:none; background:none; color:var(--muted); font-family:var(--font-body); font-weight:600; font-size:14.5px; padding:9px 20px; border-radius:999px; cursor:pointer; display:flex; align-items:center; gap:8px; transition:background .2s, color .2s}
.pricing__toggle button.on{background:var(--green); color:#04210b}
.pricing__save{font-size:11px; background:rgba(255,255,255,.18); padding:2px 7px; border-radius:999px}
.pricing__toggle button:not(.on) .pricing__save{background:rgba(40,184,63,.16); color:var(--green)}
.pricing__grid{display:grid; grid-template-columns:repeat(3,1fr); gap:18px; align-items:start}
.tier{position:relative; background:var(--bg-2); border:1px solid var(--line); border-radius:var(--radius); padding:30px}
.tier--featured{border-color:var(--green); box-shadow:0 0 0 1px var(--green), 0 24px 60px rgba(40,184,63,.16); transform:scale(1.04); background:linear-gradient(180deg,rgba(40,184,63,.06),var(--bg-2)); z-index:1}
.tier__badge{position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:var(--green); color:#04210b; font-size:12px; font-weight:700; padding:5px 16px; border-radius:999px; letter-spacing:.03em}
.tier__name{font-family:var(--font-display); font-weight:600; font-size:22px; margin:0 0 6px}
.tier__blurb{font-size:14px; color:var(--muted); margin:0 0 20px; min-height:42px}
.tier__price{font-family:var(--font-display); font-weight:700; font-size:38px; margin:0; line-height:1}
.tier__per{font-size:15px; color:var(--muted); font-weight:500; margin-left:4px}
.tier__setup{font-size:13.5px; color:var(--muted-2); margin:8px 0 2px}
.tier__users{font-size:14px; color:var(--green); font-weight:600; margin:6px 0 20px}
.tier__cta{width:100%; margin-bottom:22px}
.tier__features li{display:flex; gap:10px; align-items:flex-start; font-size:14px; color:var(--muted); padding:7px 0}
.tier__features li svg{color:var(--green); flex:none; margin-top:4px}
.tier__features li:first-child{color:var(--ink); font-weight:600}
.pricing__free{display:flex; flex-wrap:wrap; align-items:center; gap:10px; justify-content:center; margin-top:36px; padding-top:30px; border-top:1px solid var(--line)}
.pricing__free-label{font-weight:600; color:var(--muted); font-size:14px}
.pricing__free-chip{display:inline-flex; align-items:center; gap:6px; font-size:13.5px; color:var(--muted); border:1px solid var(--line); border-radius:999px; padding:6px 13px}
.pricing__free-chip svg{color:var(--green)}

/* ---- faq ---- */
.faq{display:grid; gap:12px}
.faq__item{border:1px solid var(--line); border-radius:var(--radius-sm); background:var(--bg-2); overflow:hidden; transition:border-color .2s}
.faq__item--open{border-color:var(--line-2)}
.faq__q{width:100%; display:flex; justify-content:space-between; align-items:center; gap:16px; text-align:left; background:none; border:none; color:var(--ink); font-family:var(--font-display); font-weight:500; font-size:17px; padding:20px 22px; cursor:pointer}
.faq__chev{color:var(--green); transition:transform .25s; flex:none}
.faq__item--open .faq__chev{transform:rotate(180deg)}
.faq__a-wrap{display:grid; transition:grid-template-rows .28s ease}
.faq__a-inner{overflow:hidden}
.faq__a{margin:0; padding:0 22px 20px; color:var(--muted); font-size:15.5px}

/* ---- final cta ---- */
.final{position:relative; padding:110px 0; text-align:center; border-top:1px solid var(--line); overflow:hidden; background:var(--bg-2)}
.final__glow{position:absolute; inset:0; background:radial-gradient(ellipse 60% 80% at 50% 100%,rgba(40,184,63,.22),transparent 70%); pointer-events:none}
.final__inner{position:relative; max-width:720px}
/* split layout — persuasion copy (left) next to the booking widget (right) */
.final__split{position:relative; display:grid; grid-template-columns:0.82fr 1.08fr; gap:46px; align-items:start; text-align:left}
.final__copy{max-width:480px}
.final__scarcity{display:inline-block; font-size:13.5px; font-weight:600; color:var(--green); border:1px solid rgba(40,184,63,.4); background:rgba(40,184,63,.08); padding:8px 18px; border-radius:999px; margin-bottom:24px}
.final__heading{font-family:var(--font-display); font-weight:700; letter-spacing:-1px; font-size:clamp(32px,5vw,52px); line-height:1.05; margin:0 0 18px}
.final__heading.bn{font-size:clamp(20px,2.5vw,30px); line-height:1.34; margin:0 0 8px}
.final__heading-en{font-family:var(--font-display); font-weight:600; letter-spacing:-.5px; font-size:clamp(17px,2.4vw,24px); color:var(--muted); margin:0 0 22px}
.final__sub{font-size:19px; color:var(--muted); margin:0 0 32px}
.final__sub.bn{color:var(--ink); font-weight:500; line-height:1.7; margin:0 0 6px}
.final__sub-en{font-size:14.5px; color:var(--muted-2); margin:0 0 4px}
.final__risk{font-size:14px; color:var(--muted-2); margin:18px 0 0}
.final__risk.bn{color:var(--muted); font-weight:500; margin:20px 0 0}
.final__risk-en{font-size:12.5px; color:var(--muted-2); margin:5px 0 0}
.final__methods-wrap{position:relative; text-align:left; margin-top:30px; padding-top:24px; border-top:1px solid var(--line)}
.final__or{font-size:13px; color:var(--muted-2); margin:0 0 14px; letter-spacing:.02em}
.final__methods{display:flex; gap:12px; justify-content:flex-start; flex-wrap:wrap}
.final__method{display:inline-flex; align-items:center; gap:8px; color:var(--muted); font-weight:600; font-size:15px; padding:11px 18px; border:1px solid var(--line-2); border-radius:11px; transition:color .2s, border-color .2s, background .2s, transform .15s}
.final__method:hover{color:var(--ink); border-color:var(--green); transform:translateY(-2px)}

/* ---- booking widget ---- */
.booking{position:relative; width:100%; margin:0; text-align:left; background:linear-gradient(180deg,var(--bg-2),var(--bg)); border:1px solid var(--line-2); border-radius:20px; padding:32px; overflow:hidden; box-shadow:0 30px 80px rgba(0,0,0,.5)}
.booking__glow{position:absolute; top:-30%; left:50%; transform:translateX(-50%); width:70%; height:60%; background:radial-gradient(ellipse,rgba(40,184,63,.16),transparent 65%); pointer-events:none}
.booking__head{position:relative; text-align:center; margin-bottom:26px}
.booking__badge{display:inline-flex; align-items:center; gap:7px; font-size:12.5px; font-weight:600; color:var(--green); border:1px solid rgba(40,184,63,.4); background:rgba(40,184,63,.08); padding:6px 14px; border-radius:999px; margin-bottom:14px}
.booking__title{margin:0; font-weight:700; font-size:clamp(20px,2.6vw,26px); line-height:1.35; color:var(--ink)}
.booking__title-en{margin:4px 0 0; font-family:var(--font-display); font-weight:600; font-size:14px; color:var(--muted-2)}
.booking__sub{margin:10px 0 0; font-size:14.5px; color:var(--muted)}
.booking__grid{position:relative; display:grid; grid-template-columns:1fr .85fr; gap:24px; margin-bottom:24px}
.booking__col{min-width:0}
.booking__step{display:flex; align-items:center; gap:9px; font-weight:600; font-size:14px; color:var(--ink); margin-bottom:14px}
.booking__step-n{display:grid; place-items:center; width:22px; height:22px; border-radius:50%; background:rgba(40,184,63,.14); color:var(--green); font-size:12px; font-weight:700; flex:none}

/* calendar */
.cal{background:var(--bg-3); border:1px solid var(--line); border-radius:14px; padding:14px}
.cal__bar{display:flex; align-items:center; justify-content:space-between; margin-bottom:12px}
.cal__title{font-family:var(--font-display); font-weight:600; font-size:15.5px}
.cal__nav{display:grid; place-items:center; width:32px; height:32px; border-radius:9px; background:var(--bg-2); border:1px solid var(--line); color:var(--ink); cursor:pointer; transition:border-color .2s, color .2s, background .2s}
.cal__nav:hover:not(:disabled){border-color:var(--green); color:var(--green)}
.cal__nav:disabled{opacity:.3; cursor:not-allowed}
.cal__week{display:grid; grid-template-columns:repeat(7,1fr); gap:4px; margin-bottom:6px}
.cal__week span{text-align:center; font-size:11px; font-weight:600; color:var(--muted-2); padding:4px 0}
.cal__grid{display:grid; grid-template-columns:repeat(7,1fr); gap:4px}
.cal__day{aspect-ratio:1; display:grid; place-items:center; border:none; background:transparent; color:var(--ink); font-family:var(--font-body); font-size:13.5px; font-weight:500; border-radius:9px; cursor:pointer; transition:background .15s, color .15s, transform .1s}
.cal__day:hover:not(:disabled):not(.is-selected){background:rgba(255,255,255,.07)}
.cal__day:disabled{color:var(--muted-2); opacity:.32; cursor:not-allowed}
.cal__day--empty{cursor:default}
.cal__day.is-selected{background:var(--green); color:#04210b; font-weight:700; box-shadow:0 4px 14px rgba(40,184,63,.4)}

/* time slots */
.slots{display:grid; grid-template-columns:1fr 1fr; gap:9px; align-content:start; position:relative}
.slots--locked{opacity:.6}
.slot{display:inline-flex; align-items:center; justify-content:center; gap:7px; padding:12px 10px; border:1px solid var(--line-2); border-radius:11px; background:var(--bg-3); color:var(--ink); font-family:var(--font-body); font-weight:600; font-size:14px; cursor:pointer; transition:border-color .15s, background .15s, color .15s, transform .1s}
.slot svg{color:var(--green); transition:color .15s}
.slot:hover:not(:disabled):not(.is-selected){border-color:var(--green); transform:translateY(-1px)}
.slot:disabled{cursor:not-allowed}
.slot.is-selected{background:var(--green); border-color:var(--green); color:#04210b}
.slot.is-selected svg{color:#04210b}
.slots__hint{grid-column:1 / -1; font-size:12.5px; color:var(--muted-2); margin:4px 0 0; text-align:center}

/* details form */
.booking__form{position:relative; margin-bottom:24px}
.booking__fields{display:grid; grid-template-columns:1fr 1fr; gap:12px}
.booking__fields .field:last-child{grid-column:1 / -1}
.field{display:flex; align-items:center; gap:9px; background:var(--bg-3); border:1px solid var(--line-2); border-radius:11px; padding:0 14px; transition:border-color .2s, box-shadow .2s}
.field svg{color:var(--muted-2); flex:none}
.field:focus-within{border-color:var(--green); box-shadow:0 0 0 3px rgba(40,184,63,.14)}
.field:focus-within svg{color:var(--green)}
.field input{flex:1; min-width:0; background:none; border:none; outline:none; color:var(--ink); font-family:var(--font-body); font-size:14.5px; padding:13px 0}
.field input::placeholder{color:var(--muted-2)}

/* summary + submit */
.booking__foot{position:relative; display:flex; align-items:center; justify-content:space-between; gap:18px; flex-wrap:wrap; padding-top:22px; border-top:1px solid var(--line)}
.booking__summary{display:inline-flex; align-items:center; gap:9px; font-weight:600; font-size:15px; color:var(--green)}
.booking__summary svg{flex:none}
.booking__summary-empty{color:var(--muted-2); font-weight:500; font-size:14px}
.booking__submit{white-space:nowrap}
.booking__submit.is-disabled{opacity:.4; cursor:not-allowed; box-shadow:none; pointer-events:auto; transform:none}
.booking__submit.is-disabled:hover{background:var(--green); transform:none}
.booking__note{position:relative; text-align:center; font-size:12.5px; color:var(--muted-2); margin:16px 0 0}

/* ---- footer ---- */
.footer{border-top:1px solid var(--line); padding:64px 0 32px; background:var(--bg)}
.footer__inner{display:grid; grid-template-columns:1.3fr 2fr; gap:40px}
.footer__tagline{font-family:var(--font-display); color:var(--green); font-weight:600; font-size:17px; margin:14px 0 6px}
.footer__company{color:var(--muted); font-size:14px; margin:0 0 14px}
.footer__locations{display:flex; flex-direction:column; gap:6px; margin:0}
.footer__locations span{display:inline-flex; align-items:center; gap:7px; color:var(--muted-2); font-size:13.5px}
.footer__cols{display:grid; grid-template-columns:repeat(3,1fr); gap:24px}
.footer__col h4{font-size:13px; text-transform:uppercase; letter-spacing:.08em; color:var(--muted-2); margin:0 0 16px}
.footer__col a{display:block; color:var(--muted); font-size:14.5px; padding:5px 0; transition:color .2s}
.footer__col a:hover{color:var(--green)}
.footer__bottom{display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap; margin-top:48px; padding-top:24px; border-top:1px solid var(--line); color:var(--muted-2); font-size:13px}

/* ===== responsive ===== */
@media (max-width:1024px){
  .hero__inner{grid-template-columns:1fr; gap:44px}
  .modules{grid-template-columns:repeat(3,1fr)}
  .warehouse__access ul{grid-template-columns:1fr 1fr}
  .how__track{grid-template-columns:repeat(3,1fr); gap:28px}
  .how__track::before{display:none}
  .stories__grid{grid-template-columns:1fr 1fr}
  .final__split{grid-template-columns:1fr; gap:34px; text-align:center}
  .final__copy{max-width:680px; margin:0 auto}
  .final__methods-wrap{text-align:center}
  .final__methods{justify-content:center}
}
@media (max-width:860px){
  .nav__links,.nav__signin{display:none}
  .nav__burger{display:block}
  .nav__mobile{display:flex; flex-direction:column; gap:6px; padding:18px 24px 26px; background:rgba(10,11,13,.97); backdrop-filter:blur(14px); border-bottom:1px solid var(--line)}
  .nav__mobile-link{padding:13px 4px; font-size:17px; font-weight:500; border-bottom:1px solid var(--line); color:var(--ink)}
  .nav__mobile-cta{margin-top:12px}
  .problem__grid{grid-template-columns:1fr 1fr}
  .stats__grid{grid-template-columns:1fr 1fr; gap:36px 16px}
  .modules{grid-template-columns:1fr 1fr}
  .warehouse__methods{grid-template-columns:1fr}
  .magic__arrow{display:none}
  .magic__flow{gap:8px}
  .roi__panel{grid-template-columns:1fr}
  .roi__result{border-left:none; border-top:1px solid var(--line)}
  .testimonials{grid-template-columns:1fr}
  .stories__grid{grid-template-columns:1fr}
  .booking__grid{grid-template-columns:1fr; gap:28px}
  .booking__fields{grid-template-columns:1fr}
  .booking__foot{flex-direction:column; align-items:stretch; text-align:center}
  .booking__summary{justify-content:center}
  .booking__submit{width:100%}
  .pricing__grid{grid-template-columns:1fr}
  .tier--featured{transform:none; order:-1}
  .footer__inner{grid-template-columns:1fr}
}
@media (max-width:520px){
  .section{padding:68px 0}
  .container{padding:0 18px}
  .problem__grid,.modules,.how__track,.warehouse__access ul{grid-template-columns:1fr}
  .stats__grid{grid-template-columns:1fr 1fr}
  .booking{padding:22px 18px}
  .slots{grid-template-columns:1fr 1fr}
  .hero__ctas .btn{flex:1}
  .footer__bottom{flex-direction:column; gap:8px}
  .footer__cols{grid-template-columns:1fr 1fr}
}

@media (prefers-reduced-motion:reduce){
  *{animation:none !important; transition:none !important}
  .hero__title-line,.dash,.dash__bar,.dash__row{opacity:1 !important; transform:none !important; height:var(--h)}
  .problem__grid .loss-card,.modules .module,.magic__step,.how__step{opacity:1 !important; transform:none !important}
}
`
