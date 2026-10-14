# Portfolio Audit — ziddan/workshop

Audited: 2026-10-14 · Branch `devel` · **Working tree, including uncommitted edits** (8 modified files + untracked `public/_redirects`). Where an uncommitted edit changed copy, the text below is the current working-tree version.

---

## 1. Tech & setup

### Stack (from `package.json`)
| | Package | Version range |
|---|---|---|
| Framework | React + React DOM | `^18.3.1` |
| Routing | react-router-dom | `^6.26.2` (client-side `BrowserRouter`) |
| Build | Vite + @vitejs/plugin-react | `^5.4.10` / `^4.3.2` |
| Language | TypeScript | `^5.6.3` |
| Styling | Tailwind CSS + PostCSS + Autoprefixer | `^3.4.17` / `^8.4.47` / `^10.4.20` |
| Utility | clsx | `^2.1.1` (wrapped in `src/shared/utils/cn.ts`) |
| Fonts (self-hosted, @fontsource) | Bricolage Grotesque (variable), Geist (variable), IBM Plex Mono, Patrick Hand, Instrument Serif, Nosifer | `^5.x` |

- Package manager: **Bun** (`bun.lock`; `.env` comment says `bun run dev`).
- Styling approach: Tailwind utilities with design tokens in `tailwind.config.ts` (mirrored as CSS vars in `src/styles/tokens.css`), plus lots of inline `style={{}}` for rotations/colors. The `/offlane` and `/offloud` pages use their own plain CSS files (`offlane.css`, `offloud.css`).
- Folder layout imitates Next.js App Router (`src/app/**/page.tsx`, `work/[slug]`) but it is **plain Vite + react-router**; routes are declared manually in `src/App.tsx`.
- Env: `.env` (committed) holds only `VITE_SHOW_ROSTER` — toggles the `/offloud` band roster vs. a "Coming Soon" placeholder.

### Deployment
- **No `vercel.json`, `netlify.toml`, GitHub Actions, or CNAME.**
- `public/_redirects` contains `/*  /index.html  200` — Netlify / Cloudflare Pages SPA-fallback syntax. **This file is untracked in git**, so a git-based deploy won't have it.
- `.gitignore` has a `.vercel` entry and the README recommends Vercel, so the host is ambiguous.
- `dist/` exists locally but is stale (built 2026-06-10).
- **Live URL: not found anywhere in the repo.** `index.html` has no `og:url` or canonical. Git remote: `git@github.com:dannnn512/personal-portofolio.git`.

### Routes (`src/App.tsx`)
| Route | Component | State |
|---|---|---|
| `/` | `app/page.tsx` → Hero, Stats, FeaturedProjects, Experience, Process, Hire, Now, Archive, Band | Main page |
| `/work/:slug` | `app/work/[slug]/page.tsx` | **Placeholder**: "Case study coming soon — design in progress." |
| `/hire` | `app/hire/page.tsx` | Just re-renders the home `Hire` section, no extra content |
| `/offlane` | `app/offlane/page.tsx` | "Off-hours lab": experiments page, all slots empty |
| `/offloud` | `app/offloud/page.tsx` | "After-hours label": band page, roster behind a flag |
| `*` | `app/not-found/page.tsx` | 404 page |

`/offlane` and `/offloud` hide the global Nav/Footer and show a floating "← back to me" link instead.

### Main components
- **Shared** (`src/shared/components`): `Nav`, `Footer`, `Button`, `Eyebrow`, `Highlight`, `HandNote`, `HandDrawnCircle`, `ScribbleArrow`, `Tape`, `FloatingBackHome`.
- **Home features** (`src/features/*`): `hero`, `stats`, `featured-projects` (+ card, data, types), `experience`, `process`, `hire`, `now`, `archive` (+ card), `band`.
- **Side pages**: `features/offlane/*` (chalk SVG defs, Nav, Hero, Manifesto, Experiments, Footer), `features/offloud/*` (LoudDefs, Nav, Hero, Manifesto, Roster, RosterComingSoon, Footer).
- **Leftover design-handoff files in repo root**: `Portfolio - Final.html`, `workshop-v1.jsx`, `workshop-shared.jsx`, and a `README.md` that is still the original design handoff spec, not a project README.

---

## 2. Content inventory

### `<head>` (index.html)
- Title: `Ziddan / Workshop — Founding Engineer`
- Description / og:description / twitter:description: "Founding engineer for founders without a tech team. Web, mobile, backend, infra — three CEOs already trust me with theirs."

### Nav
- Brand: `ZIDDAN/WORKSHOP`
- Links: `Built` (#built), `Archive` (#archive), `Method` (#method), `Now` (#now), pill `WORK WITH ME` → `/hire`

### Hero (`features/hero/Hero.tsx`)
- Status pill: `● 4 YEARS · 15+ SHIPPED`
- Headline: `I BUILD / YOUR IDEA / FROM ZERO.`
- Sub-copy: "For solo founders with an idea and no engineer. **Web, mobile, backend, infra** — I ship it end-to-end, and I show you every decision, not just the invoice."
- Buttons: `SEE THE WORK →` (#built), `REACH OUT` (/hire)
- Hand note, desktop only: "yes — and I'll explain / the parts you don't / understand."
- Role title stated: none in the hero itself. "Founding Engineer" appears only in the `<title>`/meta. Years: **4**.

### Stats (`features/stats/Stats.tsx`)
| Value | Label |
|---|---|
| `4+` | YEARS SHIPPING |
| `15+` | BUILT — *PUBLIC + INTERNAL* |
| `8+` | SOLO END-TO-END |

### About section
**There isn't one.** There's no bio, photo, location, or name in the body text. The full name "Ziddan Aryasatya Nugraha" only appears in the footer.

### Skills / tech stack
**There's no skills section.** The only mentions of technology on the page:
- Hero: "Web, mobile, backend, infra"
- TalentCloud card: "AWS Rekognition"
- Archive "stack" notes are roles, not technologies (e.g. "Mobile · FE · BE · product")
- `featured.data.ts` has a `tags` array per project (e.g. `'AWS Rekognition'`, `'BRD → Production'`) but **`tags` is never rendered**.

No frameworks (React, React Native, Flutter, Node, etc.) are named anywhere on the site.

### Featured projects (`featured.data.ts`), section headline "THINGS I SHIPPED. / NOT PROMISED."
All three are featured. None of them has an image: each shows a striped box with the text `[<name> screenshot]`. Each "CASE →" link goes to a placeholder page.

**01 · DEBATEME**
- Meta: `DEBATEME · 2026 — Now · IN STEALTH` (no `liveUrl`)
- Role: Founding Engineer
- Description (rendered): "I am the tech department. Web, mobile, backend, infra — every layer, solo, founder-direct. Live with real users."
- Hand note: "every layer = me"
- Not rendered: pitch "The founder had the vision and 8 months of failed no-code attempts. No tech team, no plan B. He needed someone to take the whole stack off his hands."; tags `Founding Engineer`, `Solo across stack`, `0 → 1 with users`
- Links: case → `/work/debateme` (placeholder). No live link.

**02 · TALENTCLOUD.AI**
- Meta: `PINETOP · 2025 — 2026 · LIVE →` → https://talentcloud.ai/
- Role: Product Engineer
- Description: "Admin web + employee self-service + face-verified mobile attendance (AWS Rekognition). I ran client calls directly, wrote the spec, and shipped mobile end-to-end."
- Hand note: "I met the client myself"
- Not rendered: pitch "The client needed attendance that couldn't be faked and HR rules that fit their reality. The CEO sent me to gather it directly — no PM filter."; tags `Client-facing solo`, `AWS Rekognition`, `BRD → Production`
- Links: case → `/work/talentcloudai` (placeholder)

**03 · BRIGHTSCHOOLS**
- Meta: `PMM · 2024 · LIVE →` → https://brightschools.id/
- Role: Right-hand Engineer
- Description: "Three products in one: parent + teacher mobile app, school CMS, and the API. I owned mobile and the API end-to-end. Still running in real schools, plus a private-label version (MAS) adopted by Muhammadiyah — one of Indonesia's largest school networks."
- Hand note: "trust earned, then deepened"
- Not rendered: pitch "Parents wanted a window into school. Teachers wanted a CMS that didn't get in the way. Built from scratch with my boss — who later brought me in to lead his next company."; tags `Mobile + API end-to-end`, `Three-product suite`, `Live in schools`
- Links: case → `/work/brightschools` (placeholder)

### Archive (`archive.data.ts`), headline "+ 5 MORE. / QUICK STORIES." and note "↑ ask about any of these on a call"
None are featured. No links, no images, no tech tags.

| Name | Company · Year | Role | Body | Stack note |
|---|---|---|---|---|
| STOREHUB WAREHOUSE | PMM · 2026 · MAINTENANCE | Lead FE Engineer | "Every frontend decision handed to me — from stack selection to execution. Solo, from scratch." | Lead · Solo FE |
| MPOS ECOSYSTEM | PMM · 2022 — 2024 · MAINTENANCE | Mobile + Fullstack | "Cashier web, dashboard, legacy refactor, plus a mobile loyalty point app. Mobile, FE, BE, and product calls — the whole stack." | Mobile · FE · BE · product |
| LANGITHUB | PMM · 2025 — Now | Mobile + BE Support | "Mobile app end-to-end. Backed up the BE lead on technical decisions and execution." | Mobile · BE assist |
| IAI CHATBOT | Core Initiative · 2024 | Mobile Dev — Solo | "Chatbot application from scratch. Mobile, solo from kickoff to ship." | Mobile solo |
| BPRU MOBILE | Core Initiative · 2024 — 2026 | Mobile Dev | "My first mobile build at scale, under a senior engineer. Where I learned to ship." | Mobile · Junior |

### Experience (`experience.data.ts`), headline "4 YEARS · 4 ARCS."
| Company (full name) | Role | Dates | Description |
|---|---|---|---|
| Core Initiative Studio | Frontend → Mobile | 2022 — 2025 FT · 2025 — 2026 PT | "Where I learned to ship. Started junior. Ended up solo on 12+ products." |
| PMM (Putra Muda Mandiri) | Lead FE / Mobile / Fullstack | 2024 — Now · Retainer | "Brought in as Lead FE because I already knew the products inside-out. Kept on light retainer since — a few hours when needed." |
| Pinetop (Pinetop Technology Venture) | Product Engineer | 2025 — 2026 | "Came in when Pinetop pivoted to back the TalentCloud.ai acquisition. Client-facing end-to-end — I met clients directly, wrote the specs, shipped the product." |
| Debateme (Debateme Limited) | Founding Engineer | 2026 — Now | "Founding tech department. Every layer, founder-direct." |

The section has no `id` and isn't linked from the nav.

### Process (`process.data.ts`), headline "BORING. / ON PURPOSE.", sub "You'll always know what's happening. Predictable is a feature."
1. **WE TALK**: "Plain words, no jargon. You tell me the idea. I tell you what it really takes — including the parts you don't want to hear."
2. **WE SCOPE**: "What ships first. What waits. What we cut. You see every tradeoff, with prices."
3. **I BUILD**: "Weekly demos. A real product in your hands every week. If it feels off, we change it before it's too late."
4. **TEAM JOINS**: "Only when scope demands. FE, BE, design — people I've already shipped with. Lean by default."

### Hire (`features/hire`), also the entire `/hire` page
- Pill: `● TAKING ON 1 FOUNDER · Q2–Q3 2026`
- Headline: `LET'S / BUILD / YOURS.`
- Services:
  - **MVP · 0→1**: "Solo build. 4–8 weeks. Real product, real users."
  - **FULL PRODUCT**: "My trusted team joins. Web, mobile, infra, GTM-ready in months."
  - **FOUNDING ENGINEER**: "I run the technical side while you run everything else. Equity-friendly."
- CTAs: `MESSAGE ON WHATSAPP →` → `https://wa.me/6285817000448?text=Hi%20Ziddan!%20I%20have%20something%20to%20build.`; `DOWNLOAD CV ↓` → `/cv.pdf`
- Hand note: "← async-first, but I do reply"

### Now (`features/now`), nav label "Now"
- Headline: `OFF-HOURS / LAB. / QUIET MODE.`, link "step into the lab →" → `/offlane`
- Card "CURRENTLY TINKERING": ✓ my own thing (founder's-own-product mode) · ✓ weekend experiments · → quiet open-source · ○ writing it down
- Hand note: "also: open for one founder-led build this quarter"

### Band teaser (`features/band`)
- `// OFF/LOUD`, headline `OFF/LOUD.`, link "visit →" → `/offloud`

### Contact
| Channel | Value | Status |
|---|---|---|
| Email | `mailto:arya.ziddan7@gmail.com` (footer "EMAIL" only) | OK, but it's the only place the email appears |
| WhatsApp | +62 858-1700-0448 (Hire CTA) | OK. Public phone number, your call |
| GitHub | `https://github.com/` | **Placeholder** (no username) |
| LinkedIn | `https://linkedin.com/in/` | **Placeholder** (no handle) |
| X | `https://x.com/` | **Placeholder** (no handle) |
| CV | `/cv.pdf` | **Broken**: no file in `public/` |
| Footer text | "ZIDDAN ARYASATYA NUGRAHA · WORKSHOP · 2026" | |

### Other sections / pages
- **/offlane**: pill "OFF-HOURS LAB", wordmark "OFF LANE", tagline "the work I do off the main lane.", status "quiet mode · in progress · not for hire". Manifesto: "Side products, experiments, writing. Built after hours, separate from the day job. Most of it isn't done. Some of it never will be. If something fits, it can be yours. This is where it lives anyway." Aside: "// off the record — built after hours. the day job is founder-direct — this is everything else. — a slow shop." Experiments: EXP.01 "slot reserved", EXP.02 "first drop · TBD", EXP.03 "in the back room", EXP.04 "untitled", all empty with ghost "get it →". Footer "OFFLANE · off-hours lab · 2026".
- **/offloud**: pill "AFTER-HOURS LABEL", wordmark "OFF LOUD", "the loud side of after-hours.", "three rooms · one label · no music yet". Manifesto: "Three bands under one roof, each one loud in a different language. Nothing's out yet — no songs, no covers, no proof. Just the rooms, lit and waiting." House rules: "heaviness is a dialect, not a genre. loud, but never hollow. the soft parts hit harder. — doors when it's ready." Roster (flag on): **Theatre of Blood** (blackened deathcore / technical death metal / deathcore), **Antithesis** (visual kei / symphonic / neoclassical / metalcore / symphonic metal), **Gabriella** (post-hardcore / metalcore / melodic). The streaming icons are not links ("reserved"). Flag off: "Coming Soon. — the horrors are incoming. — three rooms, lit and waiting." Footer "OFF/LOUD · after-hours label · 2026 turn it up."
- **404**: "404. / Zi hasn't built this yet. / Stay tuned :)", "← BACK HOME", "or just refresh, idk".
- **No** testimonials, blog, writing, photo, or client logos.

---

## 3. Check against current projects

| Project | Present? | Completeness |
|---|---|---|
| **TalentCloud (Pinetop)**: React Native HRMS, face recognition + liveness | ✅ Featured #02 | **Partial.** Has the company, role, dates, live link, and "face-verified mobile attendance (AWS Rekognition)". **Missing:** React Native, **liveness detection**, the word "HRMS", a screenshot, and a case study. `tags` exist but aren't shown. |
| **BrightSchools (PMM Tech)**: Flutter parent companion app | ✅ Featured #03 | **Partial.** Has the live link, "parent + teacher mobile app", and the MAS/Muhammadiyah detail. **Missing:** Flutter. Company is shown as "PMM" (Experience says "Putra Muda Mandiri"), never as "PMM Tech". Year is just "2024". No screenshot or case study. |
| **DebateMe (debateme.io)**: sole product engineer, React web + real-time voice/video | ✅ Featured #01 | **Incomplete and partly contradictory.** Shown as **"IN STEALTH"** with no link to debateme.io, while the description says "Live with real users". Role is "Founding Engineer", not "sole product engineer". **Missing:** React, **real-time voice/video**, the URL, a screenshot, and a case study. It's also the subject of the Now section in the README spec, but the current Now section doesn't mention it. |
| **FuzeValo (fuzevalo.com)**: client marketplace built end to end | ❌ **Missing** | Not mentioned anywhere in `src/`. |
| **Bahaso**: live learning platform (LMS) | ❌ **Missing** | Not mentioned anywhere in `src/`. |

**On the site but not in your list:** StoreHub Warehouse (PMM), MPOS Ecosystem (PMM), LangitHub (PMM), IAI Chatbot (Core Initiative), BPRU Mobile (Core Initiative). The band roster on `/offloud` (Theatre of Blood, Antithesis, Gabriella) is a personal side page, not portfolio work.

---

## 4. Quality issues

### Outdated info / "currently" statements
- **Hire pill "TAKING ON 1 FOUNDER · Q2–Q3 2026"**: today is Q4 2026, so this window has passed.
- Now card: "open for one founder-led build this quarter" has no date. It conflicts with the Q2–Q3 pill and with `/offlane`'s "not for hire".
- Footer and side-page years hardcoded as `2026`. That's correct today but will go stale on Jan 1.
- README (handoff spec) is out of date. It still lists 4 stats, "WORKSHOP OPEN", the old featured years (e.g. Brightschools 2024 / Pinetop "2025 — 2026"), "BUILDING DEBATEME" in Now, etc. It's harmless to visitors but misleading in the repo.
- `og.svg` subtitle: "Founding engineer for founders without a tech team." This matches the meta description, but the hero copy has since changed to "For solo founders with an idea and no engineer."

### Inconsistencies in the numbers and dates
- Stats say **8+ solo end-to-end**, but the Core Initiative note says "**solo on 12+ products**".
- Hero says "4 YEARS" and Stats say "4+". The 2022 start supports either; just pick one.
- **BPRU Mobile** is dated "2024 — 2026" yet described as "My **first** mobile build… Where I learned to ship". IAI Chatbot (2024) is described as solo. The timeline order doesn't make sense. The Core Initiative role "Frontend → Mobile" vs the README's "Mobile Dev → Senior" may also be stale.
- **MPOS Ecosystem** "2022 — 2024", but you only joined PMM in 2024 per the Experience section.
- **StoreHub Warehouse** "2026 · MAINTENANCE", but it's described as built "from scratch". It's unclear when it was built.
- DebateMe: "IN STEALTH" vs "Live with real users".
- Nav pill says "WORK WITH ME", the hero says "REACH OUT", and the README says "HIRE → OPEN".
- Nav "Now" points to a section titled "OFF-HOURS LAB", which isn't a "now" page anymore.
- Featured-card slugs: `TALENTCLOUD.AI` → `/work/talentcloudai`. That works, but it'll be fragile once real case studies exist.

### Broken / placeholder links and content
- **`/cv.pdf` doesn't exist.** `Button` treats `/cv.pdf` as an internal route, so it renders the **404 page** in-app.
- **Footer GH / LI / X** go to bare `github.com/`, `linkedin.com/in/`, `x.com/`.
- **All 3 "CASE →" links** go to "Case study coming soon — design in progress." They also use a plain `<a href>` instead of router `Link`, which causes a full page reload.
- **No project screenshots.** All three featured cards show the `[name screenshot]` placeholder text on the live site.
- `/hire` is just the home Hire section, with no form and no `<h1>`.
- `/offlane`: all 4 experiment cards are empty ("TBD", "untitled"). `/offloud`: "no music yet", and with the flag on, the streaming icons aren't links.
- **Roster media missing**: `/media/tob-fire.webm`, `*-poster.jpg`, etc. aren't in `public/`. Turning on `VITE_SHOW_ROSTER` would show broken posters and videos.
- Nav hash links (`#built`, `#archive`…) do nothing on `/hire`, `/work/*`, and the 404 page, because those sections only exist on `/`.
- Dead code / unused data: `Hero.types.ts` (unused type), `pitch` and `tags` in `featured.data.ts` (never rendered).
- No TODO/FIXME/lorem ipsum found.

### SEO basics
| Item | Status |
|---|---|
| `<title>` | ✅ "Ziddan / Workshop — Founding Engineer". It's the same on every route (no per-page titles in this SPA). |
| Meta description | ✅ Present (but its copy differs from the hero) |
| `og:image` | ❌ **Points to `/og.png`, which doesn't exist.** Only `public/og.svg` exists, and most platforms (X, LinkedIn, Facebook, Slack) don't render SVG OG images anyway. The path is also relative; OG needs an absolute URL. |
| `og:url` / canonical | ❌ Missing (no live domain anywhere in the repo) |
| Twitter card | ✅ Tags present, but `twitter:image` has the same `/og.png` problem |
| **Favicon** | ❌ **None.** No `<link rel="icon">` and no favicon file. |
| robots.txt / sitemap.xml | ❌ None |
| Name / person schema | ❌ The site never puts your full name in a heading or the title, which hurts name searches |
| Client-side rendering only | ⚠️ All content is rendered by JS. Google handles this, but link-preview bots and some crawlers only see the empty `<div id="root">` |

### Accessibility
- **Low-contrast colors** (WCAG AA needs 4.5:1 for normal text):
  - `#ff5a3c` hot-orange text on paper `#ede5d3`: **2.47:1**. Used for featured hand notes and archive stack notes.
  - Cream `#f5f1e8` on hot `#ff5a3c`: **2.75:1**. This is the primary "MESSAGE ON WHATSAPP" button and the "YOUR IDEA" / "YOURS." / "404." highlights. The highlights are large text, so they pass 3:1 only marginally.
  - Fine: muted `#9a948a` on `#111` (6.3:1) and ink-dim on paper (6.25:1).
- Mobile hamburger has `aria-label` but **no `aria-expanded` / `aria-controls`**.
- **No skip-to-content link**. No custom `:focus-visible` styles on the main site, so you rely on browser defaults, which are weak on the dark background.
- `/hire` has no `<h1>` (only the Hire `<h2>`).
- Decorative `●` characters and `→` / `↓` arrows inside text and buttons are read aloud by screen readers.
- `/offloud` flyers are `tabIndex={0}` `div`s with no role or label (focusable but not meaningful).
- `<html lang="en">`: ✅. Decorative SVGs are `aria-hidden`: ✅. There are no `<img>` tags, so there are no missing-alt problems yet. That will change once screenshots are added.

### Unfinished / housekeeping
- **`public/_redirects` is untracked.** If the host builds from git, deep links like `/hire` or `/work/x` will 404 on refresh.
- No deploy config is committed and the live URL isn't recorded, so the hosting setup is unclear.
- Design-handoff leftovers in the repo root (`Portfolio - Final.html`, `workshop-*.jsx`), and the README is the handoff spec rather than a project README.
- `.env` is committed. It's harmless today (one public `VITE_` flag), but `.gitignore` only ignores `.env*.local`, so a future secret in `.env` would get committed.
- 8 files have uncommitted copy edits on `devel` (hero, stats, featured, archive, experience, process, hire).
- Tag-pill rendering, image support, and a skills/tech surface don't exist in the components yet. Adding stack info requires small component changes, not just data edits.
