# Handoff: Personal Portfolio — Ziddan A. Nugraha

## Overview

A personal portfolio website for **Ziddan Aryasatya Nugraha**, a Product Engineer / Founding Engineer with 4 years of experience and 10+ shipped projects. The site targets **non-technical early-stage founders** who have ideas but no tech background — the framing is "I am the tech part of your idea." Available for freelance + has a small team.

Aesthetic: **dark mode, raw, taped, hand-drawn ("Workshop")** — bold chunky display type, masking-tape strips, hand-drawn circles/arrows/sticky notes, paper-textured cards on near-black. Warm + human, not corporate.

---

## About the Design Files

The files in this bundle (`Portfolio - Final.html`, `workshop-v1.jsx`, `workshop-shared.jsx`) are **design references created in HTML** — a prototype showing the intended look, structure, copy, and behavior. They are **not production code to copy directly**.

The task is to **recreate this design in your target codebase's environment** (recommended: **Next.js + React + TypeScript + Tailwind CSS**, or whatever fits your project). Use the codebase's established patterns and libraries. Replicate the visual design pixel-for-pixel, but write the code idiomatically for the chosen framework.

If no codebase exists yet, start a fresh Next.js (App Router) + TypeScript + Tailwind project — it pairs well with the static, content-heavy nature of this design and gives easy room for scroll animations, MDX case studies, and CMS later.

---

## Fidelity

**High-fidelity (hifi).** Exact colors, typography, spacing, layout, and copy are specified below. The mockup should be recreated pixel-perfectly.

---

## Pages / Routes Needed

| Route | Page | Notes |
|---|---|---|
| `/` | Home (single long scroll) | Everything in `workshop-v1.jsx` |
| `/work/[slug]` | Case study detail | Linked from each "CASE →" / "READ CASE STUDY →" — design TBD, follow same Workshop language |
| `/hire` | Work-with-me page | Linked from nav "HIRE → OPEN" — can re-use the Hire section on home + add a longer form |
| `/cv.pdf` | CV download | Static asset — "DOWNLOAD CV ↓" button serves this file |

For now, only the **Home page** is designed. Case study pages can re-use the same design tokens (palette, type, tape strips) — the layout for those is to be designed in a later iteration.

---

## Home Page Sections (top to bottom)

The full source for these sections is in **`workshop-v1.jsx`**. Each section is a React functional component (`V1Nav`, `V1Hero`, `V1Stats`, `V1Featured`, `V1Archive`, `V1Experience`, `V1Process`, `V1Now`, `V1Hire`, `V1Footer`). Data lives in **`workshop-shared.jsx`** as `WS_FEATURED`, `WS_ARCHIVE`, `WS_EXPERIENCE`, `WS_STAT`.

### 1. Nav (sticky)
- Sticky top bar. Background `#111111`, 2px bottom border `#f5f1e8`.
- Left: `ZIDDAN/WORKSHOP` — `WORKSHOP` portion in hot orange `#ff5a3c`. Bricolage Grotesque 800, 22px, letter-spacing -0.02em.
- Right: nav links `Built · Archive · Method · Now`, all-caps, IBM Plex Mono 12px, letter-spacing 0.08em, color `#9a948a`. Last item `HIRE → OPEN` styled as a solid pill: `#7df9c9` (electric mint) background, `#111111` text, 6px 12px padding, weight 700.
- Padding: `20px 56px`.

### 2. Hero
- Padding: `80px 56px 100px`. Position: relative.
- **Status pill** (top, inline-flex): 1.5px border `#7df9c9`, text `#7df9c9`, padding `6px 12px`, IBM Plex Mono 12px. Content: `● 4 YEARS · 10+ SHIPPED · TAKING 1 NEW IDEA THIS QUARTER`. Includes a small 8px dot in `#7df9c9`.
- **Monumental headline** — Bricolage Grotesque 800, **200px**, line-height 0.85, letter-spacing -0.05em, color `#f5f1e8`, uppercase. Three lines:
  - Line 1: `I BUILD`
  - Line 2: `YOUR IDEA` wrapped in a **hot-orange highlight** (`#ff5a3c` background, `#f5f1e8` text, padding `0 8px`)
  - Line 3: `FROM ZERO.` in dimmed text `#9a948a`
- **Sub-row** (margin-top 60px, grid `1.5fr 1fr`, align-end):
  - Left: paragraph (Geist 22px, weight 500, line-height 1.4, max-width 700) — "Founding engineer. **Web. Mobile. Backend. Infra.** (mint accent) If your idea has a tech part, I am the tech part."
  - Right: two buttons stacked right-aligned.
    - **Primary:** `START A PROJECT →` — background `#7df9c9`, color `#1a1614`, padding `20px 28px`, Bricolage Grotesque 700/16px, uppercase, letter-spacing 0.02em.
    - **Secondary:** `SEE THE WORK` — transparent bg, color `#f5f1e8`, 2px border `#f5f1e8`, same padding/type.
- **Hand-drawn decorations** (absolute-positioned, see `WSCircle`, `WSScribbleArrow` helpers in `workshop-shared.jsx`):
  - Large mint circle (SVG ellipse with dashed stroke) at `top: 250, left: 420`, size 500, color `#7df9c9`. SVG: viewBox 0 0 200 120, ellipse cx 100 cy 60 rx 92 ry 50, stroke-width 3, stroke-linecap round, stroke-dasharray "200 30".
  - Sticky-note text (rotated +4°) at `top: 480, right: 80`. Patrick Hand 28px, color `#ffd84a` (yellow), max-width 240px: "yes — even the / parts you don't / understand!"
  - Scribble arrow at `top: 500, left: 620`, width 140, rotated +20°, color `#ffd84a`. SVG path: `M 5 35 C 30 10, 60 55, 90 30` + arrowhead `M 80 22 L 95 28 L 85 40`, stroke-width 3.

### 3. Stats Strip
- 4-column grid, no gap. Each column 28px horizontal padding, 40px vertical. Top + bottom borders 2px `#f5f1e8`. Columns 1–3 also have a 2px right border.
- Per column:
  - Big number — Bricolage Grotesque 800, 88px, letter-spacing -0.04em, line-height 1.
  - Small label below — IBM Plex Mono 12px, letter-spacing 0.18em, color `#9a948a`, 4px gap.
- Values: `4 / YEARS SHIPPING`, `10+ / PROJECTS`, `4 / COMPANIES`, `6 / SOLO BUILDS`.

### 4. Featured Projects (3 tape cards)
- Section padding `100px 56px`, background `#1a1a1a`.
- Eyebrow: `// FEATURED.LOG` — IBM Plex Mono 13px, color `#ff5a3c`, letter-spacing 0.2em.
- Headline: `THINGS I MADE. / NOT SLIDES.` — Bricolage 800, 120px, line-height 0.9, letter-spacing -0.04em, uppercase. Second line in `#9a948a`.
- 3-column grid, gap 28px, margin-top 80px. Each card:
  - Background `#ede5d3` (paper), text color `#1a1614`. Padding `32px 28px 28px`. Position relative. Rotated slightly: rotations `[-1.5°, 0.8°, -0.5°]`. Box shadow `0 20px 50px rgba(0,0,0,0.4)`.
  - **Masking tape** (`WSTape`): width 120px, height 24px, positioned `top: -12, left: 50%, transform: translateX(-50%) rotate([angle])`. Rotations `[-6°, 4°, -3°]`. Colors `[#ff5a3c, #7df9c9, #ffd84a]`. Opacity 0.88. Subtle texture: `repeating-linear-gradient(90deg, transparent 0 4px, rgba(0,0,0,0.06) 4px 5px)`. Plus 1px drop shadow.
  - Meta line: IBM Plex Mono 11px, letter-spacing 0.18em, color `#5a504a`. Format: `{COMPANY} · {YEAR}`.
  - Project name: Bricolage 800, 36px, letter-spacing -0.03em, line-height 0.95.
  - Role label: IBM Plex Mono 11px, letter-spacing 0.12em, color `#5a504a`, marginTop 8.
  - **Screenshot placeholder** (aspect 4/3, marginTop 20): background `#2a2620` with diagonal stripe texture `repeating-linear-gradient(45deg, transparent 0 8px, rgba(255,255,255,0.04) 8px 9px)`. Bottom-left text `[{name.toLowerCase()} screenshot]` in IBM Plex Mono 10px, color `#9a948a`. **Replace with real screenshots when available.**
  - Description: Geist 14px, line-height 1.5, color `#1a1614`, marginTop 16.
  - Bottom divider: 1.5px dashed `#5a504a`, marginTop 20, paddingTop 16. Inside it (flex space-between):
    - Hand note: Patrick Hand 20px, color `#ff5a3c`. Text varies per project.
    - "CASE →" link: Bricolage 700, 13px, uppercase, letter-spacing 0.06em, 2px solid bottom border `#1a1614`.

**Featured content** (from `WS_FEATURED` in `workshop-shared.jsx`):
| # | Name | Company | Role | Year | Tape color | Hand note |
|---|---|---|---|---|---|---|
| 01 | DEBATEME | Debateme | Founding Engineer | 2026 — Now | `#ff5a3c` | "every layer = me" |
| 02 | TALENTCLOUD.AI | Pinetop | Product Engineer | 2025 — 2026 | `#7df9c9` | "mobile = me alone" |
| 03 | BRIGHTSCHOOLS | PMM | Right-hand Engineer | 2024 | `#ffd84a` | "shipped to real schools" |

Full pitch / shipped copy is in the data file — use verbatim.

### 5. Archive (5 smaller tape cards)
- Section padding `100px 56px`, top 2px border `#f5f1e8`. Background `#111111`.
- Eyebrow: `// ARCHIVE.INDEX`, color `#ffd84a`.
- Header row (flex space-between, align-end, wrap, gap 24):
  - Headline: `+ 5 MORE. / QUICK STORIES.` — Bricolage 800, 88px main / 44px secondary, line-height 0.9, uppercase. Secondary line dimmed.
  - Right note: Patrick Hand 22px, color `#7df9c9` (mint), rotated -2°, max-width 300: "↑ ask about any of these on a call"
- 3-column grid, gap 24, marginTop 60. 5 cards, last row has 2 cards (leaves a natural gap).
- Smaller card spec (vs Featured): padding `24px 20px 20px`, project-name 22px, no screenshot, no "CASE →" link. Tape width 70px. Bottom shows `it.stack` only (Patrick Hand 17, color `#ff5a3c`).
- Tape colors cycle `[#ff5a3c, #7df9c9, #ffd84a, #ff5a3c, #7df9c9]`. Rotations `[-1°, 1.2°, -0.8°, 0.6°, -1.5°]`.

**Archive content** (from `WS_ARCHIVE`):
| Name | Company | Role | Year | Stack note |
|---|---|---|---|---|
| STOREHUB WAREHOUSE | PMM | Lead FE Engineer | 2024 | Lead · Solo FE |
| MPOS ECOSYSTEM | PMM | Mobile + Fullstack | 2024 | Mobile solo · Web team |
| LANGITHUB | PMM | Mobile + BE Support | 2024 | Mobile · BE assist |
| IAI CHATBOT | Core Initiative | Mobile Dev — Solo | 2023 | Mobile solo |
| BPRU MOBILE | Core Initiative | Mobile Dev | 2022 — 2023 | Mobile · Junior |

### 6. Experience Timeline
- Section padding `80px 56px`, top 2px border `#f5f1e8`, background `#1a1a1a`.
- Eyebrow: `// EXPERIENCE.TIMELINE`, color `#7df9c9`.
- Headline: `4 YEARS, 4 HOMES.` — Bricolage 800, 64px, letter-spacing -0.03em, uppercase, margin-bottom 56.
- 4-column grid. Horizontal line at top (2px, color `#f5f1e8`) spanning columns. Each column has:
  - A 18px circle dot, color from `[#ff5a3c, #ffd84a, #7df9c9, #ff5a3c]`, positioned on the line. 3px background-bg border + 2px outer border `#f5f1e8` (so it punches through the line).
  - Span label: IBM Plex Mono 11px, letter-spacing 0.14em, color `#9a948a`.
  - Company: Bricolage 800, 22px, letter-spacing -0.01em, marginTop 6.
  - Role: Geist 14px, color `#9a948a`, marginTop 4.

**Experience data** (`WS_EXPERIENCE`):
| Company | Role | Span |
|---|---|---|
| Core Initiative Studio | Mobile Dev → Senior | 2022 — 2025 FT · 2025 — 2026 PT |
| PMM | Lead FE / Mobile / Fullstack | 2024 — Present (PT) |
| Pinetop | Product Engineer | 2025 — 2026 |
| Debateme | Founding Engineer | 2026 — Present |

### 7. Process ("Boring. On purpose.")
- Section padding `100px 56px`, top 2px border `#f5f1e8`.
- Eyebrow: `// HOW.IT.GOES`, color `#7df9c9`.
- Headline: `BORING. / ON PURPOSE.` — Bricolage 800, 120px, line-height 0.9, uppercase. Second line in hot orange `#ff5a3c`.
- Subhead: Geist 20px, color `#9a948a`, max-width 560, line-height 1.4, marginTop 24: "You'll always know what's happening. Predictable is a feature."
- 4-column grid of bordered boxes (2px `#f5f1e8` borders, share borders via `marginLeft: -2` on cols 2-4), min-height 240, padding 28. Per box:
  - Step number: Bricolage 800, 64px, color `#7df9c9` (mint), line-height 0.9, letter-spacing -0.04em.
  - Title: Bricolage 800, 22px, color `#f5f1e8`, margin `20px 0 12px`.
  - Body: Geist 14px, line-height 1.5, color `#9a948a`.

Steps:
1. **WE TALK** — Plain words. No tech jargon. You tell me your idea, I tell you what it really takes.
2. **WE SCOPE** — What ships first. What waits. What we cut. You see every tradeoff.
3. **I BUILD** — Weekly demos. Real product in your hands. If it feels off, we change it.
4. **TEAM JOINS** — When scope demands. FE, BE, design, sales — only when needed. Lean by default.

### 8. Now (currently building)
- Section padding `100px 56px`, top 2px border, background `#1a1a1a`.
- Eyebrow: `// /NOW`, color `#ffd84a`.
- 2-column grid `1.4fr 1fr`, gap 48, align-start.
- **Left:** `BUILDING DEBATEME. / SHIPPING WEEKLY.` — Bricolage 800, 88px main + 56px second line in `#9a948a`. "DEBATEME" in hot orange.
- **Right:** small paper card, rotated +1.2°, box-shadow `0 12px 30px rgba(0,0,0,0.3)`. Mint tape (width 100) at left 20%, rotated -5°. Contains:
  - Eyebrow `THIS WEEK` (IBM Plex Mono 11px, letter-spacing 0.18em, color `#5a504a`).
  - List (no bullets, Geist 16px, weight 500, line-height 1.7):
    - `✓ Room moderation rules`
    - `✓ Vote weights v2`
    - `→ Spectator UI (in progress)` (dimmed)
    - `○ Notifications batching` (dimmed)

**Note for impl:** "This week" content should be editable easily — either CMS-backed (recommended: a simple `now.md` markdown file or Contentful entry) or hardcoded in a content file the user can update.

### 9. Hire / Work With Me
- Section padding `120px 56px`, top 2px border.
- **Status pill:** `● WORKSHOP OPEN · Q2–Q3 2026` — background `#7df9c9` (mint), text `#1a1614`, padding `8px 16px`, IBM Plex Mono 13px, weight 600, letter-spacing 0.14em.
- **Monumental headline:** `LET'S / BUILD / YOURS.` — Bricolage 800, 180px, line-height 0.85, uppercase. "YOURS." wrapped in hot-orange highlight (same style as hero "YOUR IDEA").
- **3-column service grid** (no gap, shared borders via `marginLeft: -2`), each box padding 32, 2px `#f5f1e8` border. Per box:
  - Accent strip: 36px wide × 4px tall, marginBottom 18. Colors per box: `[#ff5a3c, #7df9c9, #ffd84a]`.
  - Title: Bricolage 800, 32px, color `#f5f1e8`, letter-spacing -0.02em.
  - Description: Geist 16px, line-height 1.5, color `#9a948a`, marginTop 14.

Services:
- **MVP · 0→1** — "Solo build. 4–8 weeks. Real product, real users."
- **FULL PRODUCT** — "My team joins. Web, mobile, infra, launch."
- **FRACTIONAL CTO** — "I run the technical side while you run everything else."

- **CTA row** (marginTop 56, flex gap 12, align-center, wrap):
  - Primary: `BOOK A CALL →` — background `#ff5a3c` (hot orange), color `#f5f1e8`, padding `22px 32px`, Bricolage 800/18px, uppercase, letter-spacing 0.04em.
  - Secondary: `DOWNLOAD CV ↓` — transparent bg, color `#f5f1e8`, 2px border `#f5f1e8`, same padding/type.
  - Hand note (Patrick Hand 26px, color `#ffd84a`, rotated -3°, marginLeft 16): "← reply within 24h"

### 10. Footer
- Padding `32px 56px`, top 2px border `#f5f1e8`.
- Flex space-between. IBM Plex Mono 12px, color `#9a948a`, uppercase, letter-spacing 0.12em.
- Left: `ZIDDAN ARYASATYA NUGRAHA · WORKSHOP · 2026`
- Right: `EMAIL · GH · LI · X` (4 social links, gap 24px). Hook these up to real URLs.

---

## Design Tokens

### Colors
```
bg            #111111   // main near-black
bgAlt         #1a1a1a   // section variation (featured, experience, now)
paper         #ede5d3   // card background (warm off-white)
paperDark     #2a2620   // screenshot placeholder bg
ink           #1a1614   // text on paper
inkDim        #5a504a   // dim text on paper
text          #f5f1e8   // primary text on dark
textDim       #9a948a   // secondary text on dark
hot           #ff5a3c   // hot orange — primary accent, highlights, tape, CTAs
electric      #7df9c9   // electric mint — secondary accent, status, primary button
yellow        #ffd84a   // tape yellow — tertiary accent, hand notes
```

### Typography
- **Display:** Bricolage Grotesque — weights 400/600/800. Used for all headlines + project names + nav brand + numbers. Always with negative letter-spacing (-0.02 to -0.05em).
- **Hand:** Patrick Hand — single weight 400. Used for hand-drawn notes, callouts, vibes.
- **Mono:** IBM Plex Mono — weights 400/500/600. Used for eyebrows (`// LABEL`), meta labels, nav links, all-caps small text. Always with letter-spacing 0.08–0.2em.
- **Sans (body):** Geist — weights 400/500/600/700. Used for paragraphs, button copy, descriptions.
- Fallback alt: `Caveat` is loaded but unused in V1 (used in other variants).

Type scale used:
```
Monumental hero / LET'S BUILD YOURS  → 180–200px
Section h2 large                     → 120px
Section h2 medium                    → 88–96px
Section h2 small                     → 64–72px
Project name (featured card)         → 36px
Project name (archive card)          → 22px
Stats number                         → 64–88px
Step number                          → 56–64px
Body large (hero sub, now headline)  → 22px
Body                                 → 14–16px
Mono eyebrow                         → 11–13px
Hand note                            → 17–28px
```

### Spacing
- Section vertical padding: `80–120px` (large sections), `100px` standard.
- Horizontal page padding: `56px`.
- Grid gaps: `16px` (archive), `24px`, `28px`, `48px`, `0` (shared-border grids).
- Card internal padding: `24px 20px` (small) → `32px 28px` (large).

### Borders & shadows
- Section dividers: 2px solid `#f5f1e8`.
- Inside-paper dividers: 1.5px dashed `#5a504a`.
- Card box shadow: `0 20px 50px rgba(0,0,0,0.4)` (featured), `0 12px 30px rgba(0,0,0,0.35)` (archive/now).
- **No rounded corners.** All cards, buttons, pills are sharp rectangles. (Status pills in nav have natural padding only — still rectangular.)

### Decorative SVG components (see `workshop-shared.jsx`)
- **`WSTape`** — dashed-texture rectangle for masking-tape strips. Props: `width`, `top`, `left`, `rotate`, `color`, `z`.
- **`WSCircle`** — dashed-stroke SVG ellipse for hand-drawn circle. Props: `size`, `top`, `left`, `color`, `sw` (stroke-width).
- **`WSScribbleArrow`** — curved SVG path + arrowhead for hand-drawn arrow. Props: `width`, `top`, `left`, `rotate`, `color`.
- **`WSStarBurst`** — 8-line sparkle. Unused in V1 but available.

---

## Interactions & Behavior

The locked design has **no complex animations** — the user explicitly said "no need complex animation for now." Keep it minimal:

- **Sticky nav** — sticks to top on scroll with `position: sticky; top: 0`.
- **Anchor scroll** — clicking nav links smoothly scrolls to corresponding section. Use `scroll-behavior: smooth` on `html` OR custom click handlers (never `scrollIntoView` — it can mess up the layout).
- **Hover states** to add (not in mockup, please add in implementation):
  - Buttons: subtle background lightening (5–8% lighter).
  - Card "CASE →" links: arrow nudges right ~4px on hover.
  - Nav links: underline or color brightens.
- **External links** (email, GH, LI, X): open in new tab, `rel="noopener"`.
- **Reduced motion:** if you DO add any motion later, respect `prefers-reduced-motion: reduce`.

### State management
None needed for the home page — fully static. State enters when:
- Case-study detail pages exist (content from CMS or MDX).
- A contact form is added (handled in `/hire` later).

### Responsive behavior
The mockup is 1280px wide. **Required breakpoints to design + implement:**
- **≥1280px** — as designed.
- **1024px (tablet)** — reduce hero to ~140px, section headlines to ~64–88px, switch 4-col stats to 2×2, switch 4-col process to 2×2.
- **768px (small tablet)** — single-column for featured + archive + experience.
- **<640px (mobile)** — single column everywhere, hero ~72px, section padding `48px 24px`, monumental "LET'S BUILD YOURS" ~88px.
- **Hand-drawn decorations** (circle, scribble, sticky notes) — hide or reposition on `<1024px` to avoid overlap.
- **Sticky nav** — collapse to hamburger on `<768px`.

Keep tape strips and rotations on mobile — they're the personality.

---

## Assets to Source

Replace the placeholder boxes with real assets in this order of priority:

1. **Project screenshots** (3 featured cards × 1 each = 3 images, aspect 4:3, ~1200×900). For: Debateme, TalentCloud.AI, Brightschools.
2. **CV PDF** at `/public/cv.pdf` (or wherever the download button points).
3. **OG image** for social sharing — recommend a 1200×630 image with the hero typography or a Workshop tape-card composition.
4. **Favicon** — a simple "Z" or "Z/W" mark in the same Workshop aesthetic.
5. **Real social URLs** in the footer: email (mailto:), GitHub, LinkedIn, X/Twitter.

No icons used in V1 — intentional. Don't add icon libraries unless a future section needs them.

---

## Animation Spec (for future iteration)

The user explicitly deferred animation. **Don't implement these unless asked.** When animation work is greenlit, here's the recommended scope:

| Where | Motion | Trigger | Library |
|---|---|---|---|
| Hero headline (3 lines) | Stagger reveal, line-by-line, 80ms stagger | On mount | Framer Motion |
| Hand-drawn SVG circle + arrow | Stroke-dasharray path-draw, 800ms | Delay 600ms after type | CSS or Framer |
| Stats numbers (4 / 10+ / 04 / 06) | Count-up | IntersectionObserver in-view | `react-countup` or custom |
| Featured tape cards | Fade-up + slight rotate-in (50ms stagger) | In-view | Framer Motion |
| Archive cards | Fade-up (40ms stagger) | In-view | Framer Motion |
| Process step boxes | Sequential reveal (120ms stagger) | In-view | Framer Motion |
| "LET'S BUILD YOURS." highlight | Background wipe-in left→right, 600ms | In-view | CSS keyframes |
| Cards on hover | Subtle lift + shadow expansion (transform: translateY(-4px)) | Hover | CSS transition |

Performance budget: total JS for animation under 30KB gzipped. Always wrap in `prefers-reduced-motion` checks.

---

## Recommended Tech Stack

- **Framework:** Next.js 14+ (App Router) + TypeScript
- **Styling:** Tailwind CSS (configure the design tokens above as theme extensions)
- **Fonts:** `next/font/google` for Bricolage Grotesque, IBM Plex Mono, Patrick Hand, Geist. Self-hosted.
- **Content:** Start with hardcoded `WS_FEATURED`, `WS_ARCHIVE`, `WS_EXPERIENCE` constants in a `content/` directory. Optionally migrate to MDX for case-study detail pages later.
- **Deploy:** Vercel (easy CV PDF hosting, edge functions for contact form when added).
- **Forms (later):** When a contact form lands on `/hire`, use Resend + a server action to email Ziddan directly.

---

## Files in This Bundle

| File | Purpose |
|---|---|
| `README.md` | This document |
| `Portfolio - Final.html` | Locked design — open in browser to see the reference |
| `workshop-v1.jsx` | All section components (V1Nav, V1Hero, V1Stats, V1Featured, V1Archive, V1Experience, V1Process, V1Now, V1Hire, V1Footer) |
| `workshop-shared.jsx` | Shared data (`WS_FEATURED`, `WS_ARCHIVE`, `WS_EXPERIENCE`, `WS_STAT`) + decorative SVG helpers (`WSTape`, `WSCircle`, `WSScribbleArrow`, `WSStarBurst`) |

The JSX files use inline `style={{}}` objects rather than CSS classes — when porting to Tailwind, translate each inline-style object to Tailwind utility classes. Where Tailwind doesn't have an exact match (e.g., `letterSpacing: '-0.05em'`), use arbitrary values: `tracking-[-0.05em]`.

---

## Open Questions for Implementation

1. **CMS?** — For now hardcode content. If Ziddan plans to update frequently, recommend MDX files or Sanity.
2. **Case study pages** — Not yet designed. After implementing home, request a design pass for `/work/[slug]` in the same Workshop language.
3. **Contact form** — Currently CTAs are buttons without targets. Decide: email link (`mailto:`), Calendly/Cal.com embed, or custom form.
4. **Analytics** — Plausible or Vercel Analytics recommended (privacy-friendly, no consent banner needed for non-PI tracking).
