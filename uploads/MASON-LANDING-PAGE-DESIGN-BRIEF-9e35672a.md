# MASON — Public marketing website design brief

**Document purpose:** Single source of truth for designing and building the **full public marketing site** at **masononsite.com** — not only the home hero. Hand this to design (Figma / Claude Design) and engineering so IA, copy, and visuals stay aligned with the product.

**Last updated:** 2026-05-07

---

## 1. URLs and routing (complete site)

All marketing routes are **public**: no AppShell sidebar, no auth required. Authenticated app stays behind `/signin` (and project URLs as today).

| Page | URL | Purpose |
|------|-----|--------|
| **Home** | `https://masononsite.com/` | Primary story: what MASON is, proof, surfaces, CTAs. |
| **Enterprise** | `https://masononsite.com/enterprise` | Dedicated narrative for large GCs, owners, programs — governance, scale, security framing. |
| **SMB** | `https://masononsite.com/smb` | Dedicated narrative for small/mid GCs — speed, flat economics, field-first. |
| **Pricing** | `https://masononsite.com/pricing` | Plans, packaging, comparison table, FAQ; ties to Contact for enterprise / custom. |
| **Contact** | `https://masononsite.com/contact` | Sales / demo / general inquiries; optional office vs support distinction in copy. |
| **Product** (optional hub) | `https://masononsite.com/product` | Deep module tour or anchor scroll hub linking to home sections — only if IA needs it; otherwise home + `/enterprise` + `/smb` suffice. |
| **Privacy** | `https://masononsite.com/privacy` | Privacy policy (required if forms collect PII). |
| **Terms** | `https://masononsite.com/terms` | Terms of service. |
| **Security** (optional) | `https://masononsite.com/security` | Trust center lite — hosting, access model, audit posture; links from Enterprise. |
| **Sign in** | `https://masononsite.com/signin` | Canonical auth entry from every page header/footer. |
| **Register** (optional) | `https://masononsite.com/register` | Self-serve signup — only if product exposes it for SMB; otherwise “Contact sales” / demo form. |
| **Forgot password** | `https://masononsite.com/forgot-password` | Linked from sign-in only. |

**Engineering note:** The React app may still mount login at `/login`. Prefer **`/signin`** as the user-facing URL (alias route or redirect). Marketing layout must **not** reuse authenticated `AppShell`.

**XML sitemap:** Serve `https://masononsite.com/sitemap.xml` listing at minimum: `/`, `/enterprise`, `/smb`, `/pricing`, `/contact`, `/privacy`, `/terms`, and optionally `/security`, `/product`. Exclude authenticated-only routes.

---

## 2. Product identity (copy baseline)

| Item | Value |
|------|--------|
| **Product name** | **MASON** |
| **What it stands for** | **M**anagement **A**nalytics **S**ystem for **O**n-site **N**avigation |
| **Category** | Construction project management + document/BIM coordination + field workflows — with browser BIM, optional AR, and an AI **Concierge** grounded in project context. |
| **One-line pitch (suggested)** | Construction project control in one place—from BIM and schedule to RFIs, issues, and field logs—with an AI assistant built for the jobsite. |
| **Domains** | Frontend: **masononsite.com** (Vercel). API: **mason-api.onrender.com** (footer/legal only if required — do not hero the API URL). |
| **Android app** | Bundle ID `com.masononsite.app`, display name **MASON** (native app is part of the story; browser is primary for onboarding). |

Use **MASON** in headings; use the acronym expansion once near the hero or footer for credibility—not in every section.

---

## 3. What MASON is for

**MASON is for organizations that run active construction projects** and need **one operational system** for office and field: portfolio visibility, controlled documents, RFIs and submittals, issues and daily logs, schedule and cost insight, **in-browser BIM**, and **on-site model viewing (including AR where supported)** — with role-based access and an AI Concierge for retrieval and next-step guidance across projects.

**What MASON is not (avoid overselling on marketing):**

- Not a Revit replacement or structural authoring tool.
- Not “magic autonomy” — AI assists humans with project-linked answers; final judgment stays with the team.

**Commercial posture (align across pages):**

- **Product philosophy:** Prefer **simple packaging** over per-seat SKU sprawl — position **flat or project-based** economics for SMB; **enterprise** deals may include SSO, advanced governance, and custom terms (detail on `/enterprise` + `/pricing`).
- **Segments:** Same core product; **copy and proof points** differ by page (`/enterprise` vs `/smb`), not by hiding modules arbitrarily.

### 3.1 Audiences (still design for all three)

1. **Project managers / engineers (desk)** — portfolio visibility, BIM, schedule/Gantt, reports, cost summary, document control.  
2. **Supers / owners’ reps (mobile browser)** — issues, RFIs, documents, BIM on phone; fast and trustworthy.  
3. **Foremen / field staff (native Android)** — capture-first, notifications, BIM on site, Concierge.

**Tone:** Confident, operational, warm-professional (not playful). Tie AI to **Concierge** and **on-site decisions**; avoid generic “AI slop” visuals.

---

## 4. Brand rules (non-negotiable)

These match production CSS tokens (`frontend/src/styles/tokens.css`) and org-wide brand policy.

### 4.1 Color

- **Page background (dark default):** `#07070a` (near-black charcoal).
- **Primary accent:** `#e8942e` (MASON orange).
  - Hover suggestion: `#f0a84a` or token `--accent-bright` (`#f4a847` dark theme).
  - Pressed / deep: `#c97816` or `--accent-deep`.
- **Primary text on dark:** `#f4efe6` (off-white).
- **Secondary / muted:** `#d2cbbf`, `#aea69a` (see tokens).

**Forbidden on marketing:** Blue, purple, navy, teal as brand colors. Semantic greens/reds/yellows sparingly for status — **hero and primary CTAs stay orange + charcoal**.

### 4.2 Light mode (optional marketing variant)

If you offer a light hero variant: page `#f5f5f6`, cards `#ffffff`, text `#07070a`, accent stays `#e8942e`. See `html[data-theme='light']` in `tokens.css`.

### 4.3 Typography

- **Sans:** **Inter** (fallbacks: system-ui, Segoe UI, Roboto, Helvetica Neue, Arial).
- **Scale (reference):** xs 11px → 3xl 32px; body ~15px; large headings 24–32px+ with tight leading for display.

### 4.4 Shape, space, elevation

- **Radius:** cards/sections ~8–16px (`--radius-md`–`--radius-xl`); pills fully rounded.
- **Spacing:** 4px grid (8, 12, 16, 24, 32, 40, 48).
- **Shadows on dark:** soft, warm-black large shadows; orange glow acceptable for **focus CTAs or Concierge orb** (`--shadow-orb` concept).

---

## 5. Logo and asset inventory

**Source folder on disk:** `D:\Mason Assets\`

**Files present (use as hierarchy allows):**

| File | Typical use |
|------|----------------|
| `mason_horizontal_dark_transparent_hd.png` | **Hero / nav on dark** — primary wordmark |
| `mason_horizontal_full_light_transparent_hd.png` | Light sections / print |
| `mason_horizontal_light_compact_transparent_hd.png` | Compact header on light |
| `mason_mark_grid_transparent_hd.png` | **Icon / favicon / social avatar** |
| `mason_app_icon_dark_transparent_hd.png` | Android / dark plaque |
| `mason_app_icon_light_transparent_hd.png` | Store / light plaque |
| `brand pallet.png` | **Internal reference** — designer swatch |
| `Logos.png` | Reference sheet |
| `aaa.png` | Verify with stakeholder (may be exploratory export) |

**Export recommendations for web:**

- Provide **SVG** where possible for crisp logos; otherwise use **2× PNG** from the `_hd` sources.
- **Favicon:** mark only; background compatible with `#07070a`.
- **OG image (1200×630):** horizontal lockup on charcoal + one short tagline; safe zone for cropping.

---

## 6. What MASON actually does (feature inventory)

Use this list so marketing does not invent modules—the app is organized around **portfolio (multi-project)** and **per-project** workspaces.

### 6.1 Portfolio-level (cross-project)

- Dashboard  
- Projects  
- Schedule (portfolio schedule view)  
- **BIM** (federated / multi-model context)  
- Issues  
- RFIs  
- Submittals  
- Documents  
- Daily logs  
- **AI Concierge**  
- Cost / budget (permission-gated)  
- Reports  
- Team directory  
- Notifications  
- Mobile preview  
- Search  
- Help center  

### 6.2 Inside a single project (tabs / modules)

**Plan:** Overview, Team, Companies, Documents, Schedule  

**Execute:** Messages, RFIs, Submittals, Issues, Daily logs, Meetings, Quality, Safety  

**Insights:** Cost, **BIM**, **AR** (model viewing on site), Reports  

### 6.3 Surfaces (for “Works everywhere” section)

1. **Desktop browser** — full AppShell: sidebar + top bar, all modules, BIM (WebGL), AR via model viewer, Gantt, print/PDF.  
2. **Mobile browser** — same AppShell, responsive; BIM, AR, Issues, RFIs, Documents must **not** be blocked; some heavy editors may show a dismissible “best on desktop” pattern in-product (not a blocker for landing claims if worded carefully).  
3. **Native Android** — Mobile shell + bottom nav; field-first; camera, biometrics; AI Concierge prominent.

---

## 7. Enterprise page (`/enterprise`)

**Goal:** Convince **program-level buyers** (enterprise GC, regional contractor with PMO, owner rep, IT/security stakeholder) that MASON can fit **governance, scale, and risk** expectations — without pretending to be Autodesk Docs parity in every edge case.

### Recommended sections

1. **Hero** — Headline on **program control + single source of truth** across projects; subhead on BIM + RFIs + field in one system; CTAs: **Contact sales**, **Sign in** (for existing pilots).  
2. **Why enterprises evaluate MASON** — 3–4 bullets: portfolio visibility; permission-aware modules; audit-friendly workflows (align with in-app Audit log where true); BIM in browser without Forge-style lock-in narrative **only if legally/marketing approved**.  
3. **Governance & access** — Role hierarchy story (see `docs/04-USER-ROLES-AND-PERMISSIONS.md`); account vs project roles; separation of duties in plain language.  
4. **Security & trust (lite)** — Encryption in transit, hosting posture, backup/disaster recovery **only with verified claims**; link to `/security` if that page exists; otherwise keep high-level.  
5. **Deployment & onboarding** — Browser-first + Android; SSO / SCIM **only if on roadmap or shipped** — label “Roadmap” vs “Available” honestly.  
6. **Integrations** — Future-facing subsection; avoid empty promises — “Export/report today; integrations roadmap” if accurate.  
7. **Proof** — Logo strip or case study placeholders; testimonials when available.  
8. **FAQ** — Procurement objections (data residency, exit plan, support SLAs).  
9. **Closing CTA** — Book enterprise consultation → `/contact` with segment hint (`?segment=enterprise` optional query for CRM).

**Cross-links:** From home “Enterprise” nav item; pull quote on `/pricing` enterprise column.

---

## 8. SMB page (`/smb`)

**Goal:** Convince **small and mid-market GCs** that MASON is **fast to adopt**, **affordable to reason about**, and **strong for field + office** without enterprise procurement friction.

### Recommended sections

1. **Hero** — Headline on **shipping jobs with less tool chaos**; subhead on RFIs, issues, logs, BIM pocket; CTAs: **See pricing**, **Sign in**, optional **Book a walkthrough**.  
2. **Day-one wins** — Replace email chains for RFIs/submittals; single issue log; daily logs; documents in one place.  
3. **BIM without the enterprise tax** — Browser IFC viewing + AR story (accurate to product); “no extra viewer SKU” framing **if aligned with leadership**.  
4. **Pricing clarity** — Teaser row pointing to `/pricing`; reinforce **predictable packaging** (avoid per-seat complexity in narrative — aligns with `HANDOFF.md` positioning).  
5. **Works on phones + Android app** — Same surfaces strip as home but SMB-worded (“super in the trailer”, “foreman on Android”).  
6. **AI Concierge** — Practical examples: “find the RFI”, “summarize open issues” — no hype.  
7. **FAQ** — SMB objections (setup time, training, Germany/international if relevant).  
8. **Closing CTA** — `/contact` or self-serve `/register` depending on stakeholder decision (§17).

**Cross-links:** Home “SMB” or “For general contractors”; pricing SMB tier column.

---

## 9. Pricing page (`/pricing`)

**Goal:** Make **evaluation friction low**: clear tiers, what’s included, who should **contact sales**.

### Structure

1. **Intro** — One paragraph on packaging philosophy (simple > fragmented SKUs).  
2. **Tier cards** — Recommended columns:
   - **Starter / SMB** — For small teams; anchor numbers **only after stakeholder approval** (internal draft idea in `docs/reviews/claude-evaluation.md`: flat per-project framing — not binding until approved).
   - **Growth / Standard** — More projects, priority support (adjust labels to match product).  
   - **Enterprise** — Custom rollouts, security review, SLAs — **Contact sales** CTA.  
3. **Comparison table** — Rows: projects included, users (if unlimited say so clearly), BIM/AR, Concierge limits (if any), support, SSO, audit exports — **must match actual product or say “coming soon.”**  
4. **FAQ** — Billing cycle, trials, switching tiers, what happens to data on cancel (high-level + link Terms).  
5. **CTA band** — `/contact` + `/signin`.

**Note:** Until numbers are approved, use **“Starting at…”** placeholders or **Contact sales** — but **keep this page live** so IA is complete.

---

## 10. Contact page (`/contact`)

**Goal:** Single trustworthy place for **demo requests**, **sales**, and optionally **support**.

### Structure

1. **Short intro** — Response expectation (e.g. “within one business day”).  
2. **Form fields (minimal):** Name, work email, company, phone (optional), segment (**SMB / Enterprise**), message, consent checkbox linking to `/privacy`.  
3. **Alternate contacts:** `sales@…`, `support@…` **only if mailboxes exist**.  
4. **Office / legal entity** — Only if required for EU/US trust.  
5. **Links:** Privacy, Terms, Sign in.

**Spam:** Use honeypot + rate limit on backend if implemented; otherwise trusted form provider.

---

## 11. Sitemap & global navigation

### 11.1 Primary nav (all marketing pages)

Suggested order: **Product** (dropdown or link to `/product` or `/`#sections) · **Enterprise** · **SMB** · **Pricing** · **Contact** · **Sign in** (button).

Footer: **Privacy**, **Terms**, **Contact**, **Pricing**, **Security** (optional), **Sign in**, social.

### 11.2 Human-readable sitemap

```
/                    Home
/enterprise          Enterprise
/smb                 SMB
/pricing             Pricing
/contact             Contact
/privacy             Privacy policy
/terms               Terms of service
/security            Security / trust (optional)
/product             Product hub (optional)
/signin              Sign in
/register            Register (optional)
/forgot-password     Password recovery
```

### 11.3 Internal doc cross-reference

- Roles matrix: `docs/04-USER-ROLES-AND-PERMISSIONS.md`  
- Feature checklist (don’t overclaim): `docs/03-COMPLETE-FEATURES.md` + `docs/IMPLEMENTATION-AUDIT-2026-05-05.md`  

---

## 12. Home page section structure (`/`)

Designers may reorder for storytelling; **Sign in** stays persistent in header and repeats after hero.

### 12.1 Global header (sticky)

- Left: **MASON** mark + wordmark (`mason_horizontal_dark_transparent_hd` on dark).
- Center / right: **Enterprise** · **SMB** · **Pricing** · **Contact** · **Sign in** → `/signin`.
- Optional: **Get the app** (scroll to download) or **Request demo** → `/contact`.

### 12.2 Hero

- **Headline:** operational benefit (e.g. “One command center for construction projects—from BIM to RFIs.”).
- **Subhead:** desk + field + Concierge without buzzword stacking.
- **Primary CTA:** **Sign in** → `/signin`.
- **Secondary CTAs:** **Pricing** → `/pricing`, **Contact** → `/contact`, or segment CTAs → `/enterprise` / `/smb`.
- **Visual:** product screenshot mockup, subtle BIM/grid reference, or charcoal + orange gradient — **no** weak stock construction clichés.

### 12.3 “Why MASON” (3 pillars)

1. **Control** — Portfolio + project truth: issues, RFIs, submittals, documents, logs.  
2. **Context** — BIM + AR + schedule and cost in one permission-aware system.  
3. **Clarity** — Concierge tied to project data; notifications and search across projects.

### 12.4 Module grid

Responsive grid of **icons + short labels** matching real modules (§6). Group under **Plan / Execute / Insights**. Flag enterprise-only or roadmap items honestly.

### 12.5 BIM + field proof

Short paragraph + **one** strong visual; IFC / web viewer mentions **only if approved**.

### 12.6 Surfaces strip

Three columns: **Desktop**, **Mobile web**, **Android app** (§6.3).

### 12.7 Segment teasers

Two cards linking to **`/enterprise`** and **`/smb`** with one-line value props each.

### 12.8 Trust / security (light touch)

Role-based access, audit-friendly workflows; hosting note **legal-approved only**.

### 12.9 Footer

© year **MASON** / legal entity. Links: Privacy, Terms, Pricing, Contact, **Sign in**.

---

## 13. UI components to design explicitly

1. **Marketing header** — sticky, blur or solid charcoal (`#07070a` or `#0c0c12`); works on all pages.
2. **Marketing footer** — multi-column on desktop; stacked on mobile.
3. **Primary button** — fill `#e8942e`, text dark `#140d06` (`--text-on-accent`).
4. **Secondary button** — outline 1px `rgba(255,255,255,0.14)` or orange outline.
5. **Feature card** — elevated panel, border `rgba(255,255,255,0.08)`.
6. **Pricing tier card** + **comparison table** row states (hover, featured tier highlight).
7. **Contact form** — fields, validation states, success/error.

**Touch targets:** minimum ~44px height on buttons.

---

## 14. Motion and accessibility

- **Motion:** subtle section fade-in acceptable; respect `prefers-reduced-motion`.
- **Contrast:** WCAG AA for body text; orange on white only for large text if used.
- **Focus:** visible orange focus ring (match product).

---

## 15. SEO and social

- **Per-page titles** — e.g. `MASON — Construction PM & BIM for enterprise teams`, `… for growing contractors`, `Pricing`, `Contact`.
- **Meta descriptions** — unique per primary route (`/`, `/enterprise`, `/smb`, `/pricing`, `/contact`).
- **Canonical:** root domain consistent; no duplicate HTTP/HTTPS.
- **OG/Twitter:** unique `og:title` / `og:description` per key page; shared or page-specific **`og:image`** (1200×630).
- **Favicon:** mark from `mason_mark_grid_transparent_hd` or SVG derivative.

---

## 16. Analytics and forms

- Analytics per company policy (Plausible, GA4, etc.).
- Forms collecting PII: link **Privacy**; minimal fields; document lawful basis if EU traffic.

---

## 17. Open decisions for stakeholder

- **Register:** Self-serve `/register` for SMB vs demo-first only.
- **Pricing:** Public numbers vs “Starting at” vs enterprise-only **Contact sales** for all tiers initially.
- **Product hub:** Ship `/product` or rely on home + deep pages.
- **Security page:** Separate `/security` vs fold into Enterprise only.
- **Screenshots:** Real sandbox vs sanitized mocks.
- **Locale:** English-first; German (`de`) in-app — landing i18n phase 2 optional.

---

## 18. Handoff to engineering (after design)

- Deliver: Figma (or exports) + SVG/PNG logos + OG images (home + enterprise + SMB if differentiated).
- Implement marketing layout **outside** authenticated `AppShell`; routes from §1.
- Ensure **no accidental blue/purple** in Tailwind/CSS.
- Mirror font: **Inter** loaded same as app.
- Publish **`sitemap.xml`** and verify robots.txt allows indexing of marketing routes only.

---

*This brief aligns with `docs/CURSOR-MASTER-HANDOFF.md`, `HANDOFF.md` (commercial posture — flat/simple packaging vs per-seat sprawl), and navigation modules in `frontend/src/config/globalNavWireframe.js` and `frontend/src/config/projectModuleNav.js`.*
