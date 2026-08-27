# Vercel → SVNR Playbook

Synthesis of a full teardown of vercel.com (design language, copy/voice, UX & conversion),
turned into an actionable plan for the SVNR Global rebuild. Sources: official Geist docs
(`vercel.com/design.md`, `/geist/*`) + live page fetches of home/pricing/enterprise/ai/
customers/products + contact/sales.

> Research date: 2026-06-27. Items only confirmable in-browser are tagged **[VERIFY LIVE]**
> (collected at the end for a follow-up live pass with Claude-in-Chrome).

---

## 0. The ethos (why Vercel reads "expensive")

Vercel has **no brand color**. The brand is **black-on-white contrast carried by hairline
borders and the Geist typeface**. The rules that create the premium feel:

1. **Borders, not shadows.** 1px hairlines do all structural work. Shadows are rare and soft.
2. **Type does the weight.** Headlines are size + *tight negative tracking* at weight 600 — never Bold/700+.
3. **One accent, used only on interactive things** (links, primary button, focus, active). Everything else is grayscale.
4. **One decorative flourish per screen** — the prism/triangle glow. Nothing else glows.
5. **Confidence through brevity.** Headlines state the outcome; one sentence of capability; never explain the "how" on a marketing page.
6. **Motion is quiet and functional** — fade-up on reveal, border step-ups on hover, no autoplay, honors reduced-motion.

SVNR adaptation: we stay **dark-first** (near-black canvas, white ink — more dramatic for a
premium agency), keep the discipline above, and use **white as the "accent"** (mostly
monochrome) with at most one restrained brand accent.

---

## 1. Design tokens (SVNR, dark-first)

### Color
- Canvas: `#0a0a0a` (page), `#000000` (raised/deep), sections may step to `#0f0f10`.
- Ink: primary `#ededed`/white, secondary `#a1a1a1`, tertiary `~#737373`.
- **Gray ramp is semantic** (each step has a job): 100 bg → 200 hover-bg → 300 active-bg → **400 default hairline** → 500 hover-border → 600 active-border → 700–800 solid fills → 900 secondary text → 1000 primary text.
- Dark borders = **alpha-white**: `rgba(255,255,255,0.08)` default, `0.15` strong (use alpha grays over imagery/glow; solid grays on flat surfaces).
- Accent: pick **one** and treat it like Vercel treats blue (links/primary CTA/focus/active only). Default to near-white for max restraint; if chromatic, one hue + its `oklch()` P3 variant.

### Typography (Geist Sans + Geist Mono — already installed)
- **Three weights only:** 400 body/labels, 500 buttons, 600 all headings. No 700+ headings.
- Heading scale (weight 600, Geist Sans, negative tracking ≈ −0.06em):
  72/72 (−4.32px) hero · 64 · 56 · 48/56 (−2.88) H1 · 40/48 H2 · 32/40 · 24/32 H3 · 20/26 card · 16 · 14.
- Body (weight 400): copy-24/36, copy-20/36 (lead), copy-18/28, **copy-16/24 (default)**, copy-14/20, copy-13/18.
- **Eyebrow = Geist Mono, UPPERCASE, 12–13px, weight 400, POSITIVE tracking (~+0.04em), gray-900.** The "lab-instrument" kicker above headings. (Note: mono caps get *positive* tracking — opposite the headings' negative.)
- Buttons: weight 500 — button-16/20, button-14/20, button-12/16.

### Spacing / grid / radii / shadows
- Base unit **4px**. Scale: 4, 8, 12, 16, 24, 32, 40, 64, 96, 128.
- Rhythm: **8px inside a group · 16px between groups · 32–40px between components · 96–128px marketing section padding**.
- Container max-width **~1200–1280px**, ~24px gutters, 12-col grid; feature areas use **bento grids** (mixed 1×/2×1/2×2 tiles in one hairline frame).
- Radii: **6px** cards/buttons/inputs · 12px menus/modals · 16px fullscreen · 9999px pills. Marketing skews **tight (0–6px)** — engineered, not soft.
- Shadows sparingly: raised `0 2px 2px rgba(0,0,0,.04)`; popover layered (`0 1px 1px /.02`, `0 4px 8px -4px /.04`, `0 16px 24px -8px /.06`). Default to hairlines instead.

### The prism mark
Vercel = solid triangle + one prismatic glow behind it (their single flourish). **Ours is
the SVNR corner-mark with the cursor-following light hero we built** — that IS our prism. Keep
it to the hero only; the mark stays monochrome everywhere else (nav/footer/favicon).

---

## 2. Voice & copy system

Voice: **confident, compressed, declarative.** Outcome-first, mechanism-second. Absolute,
**quantified** claims (numbers, not adjectives). Name your primitives; never explain the how.

Reusable formulas (fill-ins for SVNR — AI client-acquisition for luxury/RE/PE/high-ticket):

- **A. Category-claim hero** — `[2–3 word category]` + three `[PREPOSITION] [NOUN]` lines that read as one sentence collapsed and expand to one mechanism each. *(This is our hero — see §6.)*
- **B. Promise-headline + named-proof subhead** — `[Imperative + bold capability]` over `[Named client] [did specific impressive thing] with SVNR.` (The subhead IS the proof.)
- **C. Provocative one-liner** (service micro-head) — *"The only outbound your brand can be seen sending."*
- **D. Before→after testimonial** — *"[outcome]… [metric before] to [metric after]." — Name, Title, Company.*
- **E. Stat-wall** — 4 parallel `[big number]+ [unit] [timeframe]` (e.g. "$120M+ pipeline generated", "40,000+ verified buyers reached", "9 industries served", "30 days to first booked meeting").
- **F. Ambition-stage pricing tiers** — name tiers by buyer ambition, not feature count; each tier "All [prev] features, plus:"; top tier "Custom", framed on control/trust, not features. (SVNR: Prose = workhorse, Soleth = bespoke/control.)
- **G. Two-track CTA** — primary momentum verb ("Book a consultation" / "Build your pipeline") + secondary "Talk to us"/"Get a demo"; pair them everywhere; flip primary to demo on high-ticket pages.
- **H. Reveal/withhold** — headline = outcome; one sentence of capability per service; brand-name the primitives, push depth to a call.

---

## 3. Components & UX to build

- **Buttons, 3 tiers:** primary (solid high-contrast), secondary (outline/low-fill, paired beside primary), ghost/text-with-arrow. Hero always = exactly one primary + one secondary (self-serve vs sales fork at the button level).
- **Eyebrow** (mono caps) above every section heading.
- **Hover-expand lines** — the hero triplet (built); reuse the pattern for terse feature lists.
- **Cards** — logo + benefit headline + 4-item capability list + framed product image; concentric radii (child ≤ parent); hairline + soft layered shadow.
- **Bento feature grids** — mixed tiles in one bordered frame.
- **Logo marquee** — client/tech logos (have one).
- **Code/terminal blocks** & **live-metric readouts** (mono cards) — adapt to SVNR as "pipeline/agent activity" readouts.
- **Browser/product frames** — UI screenshots in minimal hairline window frames (small radius, thin top chrome). *Build a `BrowserFrame` component (already on the roadmap, task #28).*
- **Mega-menu** — multi-column, labeled sections, subtle dividers; **footer taxonomy = mega-menu taxonomy 1:1** (single source of truth for IA).
- **Pricing**: tier cards + deep feature/usage matrix grouped by category + FAQ accordion. Conversion mechanic worth emulating: **"drag a number → live bill updates", with preset personas** (Vercel keeps this off the main pricing page).
- **Forms**: short. Sales form ≈ 4 fields (Work email, Country, Interest, "How can we help?"). Enterprise/bespoke form adds Company Size + Website to qualify. Work-email = implicit B2B filter. Label every field; inline errors; submit stays enabled; ≥16px inputs on mobile.
- **Mega-footer** — 9 link columns (mirroring nav) + Company + Legal/Trust + Social + meta row (status indicator + theme switch).

### Motion (Vercel's own Web Interface Guidelines — adopt verbatim)
Prefer CSS > WAAPI > JS libs; never `transition: all` (list props). Animate only `transform`/`opacity`.
Animate in response to actions, all cancelable, honor `prefers-reduced-motion`. Interactions
**increase** contrast (hover/active/focus > rest). Entrance = fade-up on scroll-in (opacity 0→1,
translateY 8–16px, stagger), easing ~`cubic-bezier(0.16,1,0.3,1)`, 300–500ms. Hover = border
step-up + subtle bg step, no scale (or ≤1.01). Nav uses direction-aware hover transitions.

---

## 4. Conversion architecture

- **Two-path fork everywhere:** self-serve momentum CTA (primary) + sales-led CTA (secondary). Repeat at top nav, hero, after each proof section, and a closing CTA band on every page.
- **Repeating funnel block:** `stat band → ROI/named proof → form`. Recycle ONE hero proof stat as a recurring anchor.
- **Qualify by field-count, not gating:** keep forms short; add 2 qualifying fields for the high-ticket/bespoke path.
- **Tier the proof to the buyer:** outcome/speed proof up top; ROI/SLA/trust/compliance reserved for the premium/bespoke page.

---

## 5. Page-by-page SVNR roadmap

1. **Home** (in progress): Hero (§6) → customer-proof trio (promise headline + named-client subhead + 4 capability bullets + framed screenshot) → "Recently shipped"/proof grid (bento, mixed cards incl. a live agent-activity readout) → stat-wall → closing CTA band → mega-footer.
2. **Services / "Agent Stack"**: product-page template — provocative one-liner head, one-sentence capability each, framed mockups, brand-named primitives (our services as primitives).
3. **Industries / Sectors**: bento of sectors; each opens a sector page with tailored proof.
4. **Pricing**: Prose / Soleth tiers (ambition-stage), feature matrix by category, FAQ accordion; optional **interactive cost/scope estimator** (drag → live estimate + preset personas).
5. **Premium / Bespoke (our "Enterprise")**: governance/trust framing, stat band, ROI callout + named testimonial, qualifying lead form.
6. **Case studies / Customers**: case-study card grid (logo + use-case subtitle + sector tag + "Read story"); reuse before→after metric shape.
7. **Contact / Book a call**: short sales form + proof rail (stats + logos + testimonial).
8. **Global**: nav mega-menu + matching mega-footer; one accent; hairline-bordered everything; Geist type scale; quiet motion.

---

## 6. Hero spec (pending final copy sign-off)

- **Layout:** headline LEFT · cursor-lit mark CENTER · three hover-expand mono-caps lines RIGHT (built).
- **Headline:** "The agent-native way to run ambitious **[businesses / brands / operations / rotating]**." — word pending sign-off.
- **Right triplet (Formula A):**
  - `FOR PREMIUM OPERATORS` → …in luxury, real estate, private equity and high-ticket B2B — where a single deal can change the year.
  - `TO OPEN REAL CONVERSATIONS` → …with the exact buyers, investors and partners worth their time — not lists, not leads.
  - `RUN BY AUTONOMOUS AGENTS` → …that research, personalise and follow up across every channel, around the clock.
- **Mark light:** 7s streak at rest; streak stops + light follows cursor on proximity (built, 60fps).
- **CTAs:** "Book a consultation" (primary) + "View systems" (secondary).

---

## 7. [VERIFY LIVE] checklist (next: a live Claude-in-Chrome pass)

1. Exact **dark-mode hex** values + per-step gray hexes (docs give light set + step semantics).
2. **Eyebrow mono caps tracking** (exact positive letter-spacing).
3. **Marketing section vertical padding** (96–128px?) + exact max-width/gutter.
4. **Section light/dark alternation** order on current homepage.
5. **Prism glow** specifics: gradient stops, blur radius, opacity, animation (slow conic shimmer?).
6. **All motion** — entrance easing/duration/stagger, hover transitions, hero shimmer.
7. **Mega-menu** — column layout, per-item descriptions, featured tile, direction-aware open anim.
8. **Logo strip** — animated marquee vs static.
9. **Product-page frames** (Previews) — which mockups are truly interactive (e.g. the layout-shift 0.01–0.25 slider + replay) vs static.
10. **Pricing calculator** — exact slider UI, where it lives, live bill behavior.
11. **Mobile nav** — drawer/accordion structure, CTA pinning.
12. **Footer** theme switcher + status indicator behavior.

---

# PART II — VERIFIED TEARDOWN v2 (2026-06-27)

Three live teardowns (home+product-intro · conversion+pricing · design-system+motion) merged
into one source of truth. Where v2 conflicts with Part I, **v2 wins** (it's from live pages +
Geist's own dark tokens). SVNR keeps its EXISTING purple accent (`--color-accent: #8b7dff`) —
do NOT switch to white-as-accent; only the hero eyebrow heads are white (already shipped).

## 8. The one repeating template (the whole site is this)

Every Vercel page is the same grammar:

> **Hero = a CLAIM, never a screenshot** — a 2-word category ("Agentic Infrastructure"), a
> metaphor ("self-driving delivery network"), or a problem ("a deployment for every idea"),
> over a gradient flourish (or one staged dashboard). Recursive triad subhead.
> → then N sections, each: **outcome-verb headline → one-line subhead → a data-dense,
> *operational-looking* mockup**, alternating left/right.
> → **proof = numbers + named logos** ("597,717 visitors", "100M visits", "264% ROI"), never adjectives.
> → close on **one-command friction OR ROI stat block**. **Dual CTA** (self-serve + sales) throughout.

**The non-negotiable detail: mockups look OPERATIONAL.** Real-looking SHAs, route names, error %,
timestamps, status pills — never lorem decoration. Vercel's observability hero is a *staged
incident mid-outage*. SVNR's equivalent is a **staged win-in-progress** (live lead counts, a
"Hot reply: Managing Partner at [Fund] — booked" alert, a trendline with a "Closing" badge).

**Interaction vocabulary (copy these, nothing else):** tabbed feature lists that SWAP the
adjacent visual · click-to-copy commands · replay buttons · expandable threads · tabbed
audit/filter chips · animated metric counters · query-builder controls. No carousels, no parallax.

## 9. Verified design tokens (Geist dark) → SVNR mapping

SVNR canvas stays **near-black `#0a0a0b`** (already set), accent stays **purple**. Adopt these:

- **Gray ramp jobs** (already in `index.css`, semantics confirmed): 100 bg → 200 hover-bg →
  300 active-bg → **400 default hairline** → 500 hover-border → 600 active-border → 700 hi-contrast
  fill → 900 secondary text → 1000 primary text. Borders over imagery/glass use **alpha-white**:
  `rgba(255,255,255,0.08)` default, `0.14` strong.
- **Type (3 weights only: 400/500/600).** Heading scale w600, tracking more-negative-as-bigger:
  72/72 −0.06em · 48/56 −2.88px (H1) · 32/40 −1.28px (H2) · 24/32 −0.96px (H3) · 20/26 −0.40px.
  Body w400 tall: 18/28, **16/24 default**, 14/20. **Eyebrow = Geist Mono, UPPERCASE, 13px,
  w500, letter-spacing +0.04em, color gray-700/900** (positive tracking — the only positive one).
  Buttons w500: 14/20 default.
- **Spacing 4px base:** 4/8/12/16/24/32/40/64/96. Rhythm: **8 intra-group · 16 inter-group ·
  32–40 block-to-block · 96px+ section padding.** Container **1200px** (wide 1400px), gutters 24/16.
- **Radii:** 6px buttons/inputs/chips · 12px cards/menus · 16px product frames · 9999 pills.
  Nesting: outer = inner + padding (frames step 16→12→6).
- **Shadows:** on black, **hairline + one bg step instead of shadow**; real shadows only on
  floating layers (menu `0 1px 1px #00000040, 0 8px 24px -8px #000000a6`), always border on top.
- **Motion:** animate **only transform + opacity**, never `transition: all`. Entrance =
  opacity 0→1 + translateY 8px→0, **350ms `cubic-bezier(0.16,1,0.3,1)`, 70ms stagger**. Hover =
  border step-up 400→500 + optional bg step, **150ms**, scale ≤1.01 or none. Focus ring
  `0 0 0 2px var(--color-bg), 0 0 0 4px <accent>`. Honor `prefers-reduced-motion` (fade only).
  Hit targets ≥24px desktop / 44px mobile; inputs ≥16px on mobile.

## 10. Buttons (3 tiers, build as a shared `<Button>` + use everywhere)

- **Primary:** fill `gray-1000`/white-ish, text = canvas; hover fill dims; height 40 (sm 32 / lg 48), radius 6, text 14/500, icon gap 8.
- **Secondary:** transparent fill, border `alpha-400`, text `gray-1000`; hover bg `gray-100` + border `alpha-500`.
- **Tertiary (ghost):** transparent, no border; hover bg `alpha-200`. (arrow-text link variant for "Read story →".)
- **Pairing rule:** every hero/section close = exactly ONE primary + ONE secondary. Self-serve
  primary on pricing/home; sales primary on bespoke/contact (the two-path fork).

## 11. Page-by-page build specs (concrete)

**HOME** (current order to evolve): Hero (claim + triad — done) → **3 sector use-case blocks
with TAB-SWAP operational dashboards** (the signature pattern; upgrade the existing static proof
trio) → **"Inside the system"** 3-card velocity grid w/ animated counters (Prospecting Agent /
Outreach Sequencer / Reply Triage) → **staged "mission control"** block (the observability steal)
→ logo marquee (monochrome, masked edges, pause-on-hover) → **ROI stat-wall + two-path CTA band**
→ mega-footer.

**PRICING** — 2 tiers framed as **persona sentences** (Prose $299 "for founders ready to turn
attention into qualified pipeline"; Soleth from $1,500 "for houses/funds who need a bespoke
engine"). Below: capability matrix in **collapsible bands** grouped by OUTCOME surface (Sourcing
& Targeting / Outreach & Sequencing / Brand & Creative / Reporting & Attribution / Strategy &
White-Glove), cells = included/available/bespoke. FAQ accordion. **THE ESTIMATOR** (see §12).

**SERVICES / "Agent Stack"** — product-page template: metaphor/problem hero → per-service
section (outcome headline + one-sentence capability + operational mock + tab-swap feature chips).

**SECTORS** — bento of sectors; each → sector page with tailored staged-win mock + proof.

**BESPOKE (Soleth / "Enterprise")** — trust/governance framing, **stat band** (aggregate proof),
ROI callout + named testimonial, **6-field qualifying form** (Name · work-email gated · Company+
Website · Sector · target volume/deal-size band · "what does winning look like?") → "Request your scope."

**CASE STUDIES** — uniform dark card grid, no hero, all equal weight; each card = logo/wordmark +
**outcome-as-subtitle with metric baked in** ("How [Maison] booked 32 qualified conversations in
60 days") + sector tag + "Read the story →". Add sector **filter chips** (the one thing Vercel omits).

**CONTACT** — 4-field gated form (work email · country · "Which offering? Prose/Soleth/Not sure" ·
"How can we help?") + **proof rail** (3 logo+metric tiles) + self-serve escape-hatch links.

**GLOBAL** — mega-menu (2–4 cols, mono eyebrows, 1px dividers, one featured tile, 150–200ms
fade+translateY open) whose taxonomy == mega-footer taxonomy 1:1. Hairlines everywhere. Quiet motion.

## 12. The Estimator — the slider Vercel deliberately omits (SVNR's #1 acquisition asset)

Vercel hides usage estimation behind the dashboard (metered pricing = liability). For a SERVICE
business this inverts: a public estimator IS the qualification + desire step. Build it on pricing,
above the matrix — dark, tactile, drag-first.

- **3 drag controls + presets:** (1) Monthly outreach volume 50→5,000 · (2) Channels segmented
  (Email · LinkedIn · Cold-call follow-up · Paid amplification) · (3) Sector chips (Luxury / Real
  Estate / PE / High-Ticket B2B) feeding a deal-size assumption. **One-tap personas** snap all
  controls ("Boutique founder" / "Scaling RE team" / "PE/IR outbound" / "Luxury maison").
- **Live output (updates on drag):** a recommended-tier badge that flips **Prose ⇄ Soleth** when
  volume/channels cross a threshold; an estimated **pipeline outcome** ("~X qualified
  conversations/mo · est. Y meetings") + an ROI line from sector deal-size ("at a $250k avg deal,
  1 close = Nx return"). Prose shows flat $299; Soleth shows "Custom — request a scope" (never a
  hard number — preserve the sales conversation for the bespoke tier only).
- Motion/build: sliders use `transform` only; output numbers animate via counter; reduced-motion
  snaps without tween.

## 13. Sonnet build order (each = one verified increment)

1. **Sector use-case blocks → tab-swap operational dashboards** (upgrade existing proof trio). ← next
2. "Inside the system" 3-card velocity grid + animated counters.
3. Staged "mission control" block.
4. Shared `<Button>` (3 tiers) + ROI stat-wall + two-path closing CTA band; roll Button site-wide.
5. Pricing: persona tiers + collapsible matrix + FAQ + **the Estimator**.
6. Services/Sectors/Bespoke/CaseStudies/Contact to the template.
7. Mega-menu + mega-footer (shared IA). Build, verify, deploy on approval.
