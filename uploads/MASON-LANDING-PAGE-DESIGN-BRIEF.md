# MASON — Public landing page design brief

**Document purpose:** Single source of truth for designing and building the marketing landing page at the root domain. Hand this to Claude Design, Figma, or your design partner; then engineering can implement against the same spec.

**Last updated:** 2026-05-07

---

## 1. URLs and routing

| Page | URL | Notes |
|------|-----|--------|
| **Marketing landing (this brief)** | `https://masononsite.com` | Public. No app chrome (no sidebar). |
| **Sign in** | `https://masononsite.com/signin` | Primary auth entry from the landing page. All “Sign in” buttons and header links must point here. |
| **Sign up / register** (optional secondary) | `https://masononsite.com/register` | Only if you expose self-serve signup on the landing page; otherwise omit or use “Contact sales.” |
| **Forgot password** | `https://masononsite.com/forgot-password` | Link from sign-in screen, not usually from landing hero. |

**Engineering note:** The React app today registers the login screen at `/login`. For public marketing consistency, add either a `/signin` route that renders the same login page or a server redirect `/signin` → `/login`. **Design and copy must assume the canonical user-facing URL is `/signin`.**

---

## 2. Product identity (copy baseline)

| Item | Value |
|------|--------|
| **Product name** | **MASON** |
| **What it stands for** | **M**anagement **A**nalytics **S**ystem for **O**n-site **N**avigation |
| **One-line pitch (suggested)** | Construction project control in one place—from BIM and schedule to RFIs, issues, and field logs—with an AI assistant built for the jobsite. |
| **Domains** | Frontend: **masononsite.com** (Vercel). API: **mason-api.onrender.com** (do not surface on landing except privacy policy if needed). |
| **Android app** | Bundle ID `com.masononsite.app`, display name **MASON** (native app is part of the story; browser is primary for onboarding). |

Use **MASON** in headings; use the full expansion once near the hero or footer for credibility—not in every section.

---

## 3. Who the landing page speaks to

Design should resonate with **three audiences** (can be one scroll with sub-headings or persona tabs):

1. **Project managers / engineers (desk)** — need portfolio visibility, BIM, schedule/Gantt, reports, cost summary, document control.
2. **Supers / owners’ reps (mobile browser)** — quick checks on issues, RFIs, documents, BIM on phone; must feel fast and trustworthy, not “desktop-only.”
3. **Foremen / field staff (native Android)** — capture-first, notifications, BIM on site, AI concierge; emphasize “works offline-capable WebView where applicable” only if accurate—otherwise emphasize mobile web + native app install.

**Tone:** Confident, operational, warm-professional (not playful). Avoid generic “AI slop” visuals; tie AI to **Concierge** and **on-site decisions**.

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

**Forbidden on the landing page:** Blue, purple, navy, teal as brand colors. Semantic greens/reds/yellows are allowed sparingly for status chips or proof points if they match the app (success/warning/danger tokens exist) — but **hero and primary UI accents stay orange + charcoal**.

### 4.2 Light mode (optional marketing variant)

If you offer a light hero variant: page `#f5f5f6`, cards `#ffffff`, text `#07070a`, accent stays `#e8942e`. See `html[data-theme='light']` in `tokens.css`.

### 4.3 Typography

- **Sans:** **Inter** (fallbacks: system-ui, Segoe UI, Roboto, Helvetica Neue, Arial).
- **Scale (reference):** xs 11px → 3xl 32px; body ~15px; large headings 24–32px+ with tight leading for display.

### 4.4 Shape, space, elevation

- **Radius:** cards/sections ~8–16px (`--radius-md`–`--radius-xl`); pills fully rounded.
- **Spacing:** 4px grid (8, 12, 16, 24, 32, 40, 48).
- **Shadows on dark:** soft, warm-black large shadows; orange glow acceptable for **focus CTAs or “Concierge” orb** (`--shadow-orb` concept).

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

## 6. What MASON actually does (feature inventory for the page)

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
2. **Mobile browser** — same AppShell, responsive; BIM, AR, Issues, RFIs, Documents must **not** be blocked; some heavy editors may show a dismissible “best on desktop” pattern in-product (not a blocker for landing claims: say “full workflows on phone browser”).  
3. **Native Android** — Mobile shell + bottom nav; field-first; camera, biometrics; AI Concierge prominent.

---

## 7. Suggested page structure (sections)

Designers may reorder for storytelling; keep **Sign in** persistent in header and repeated after hero.

### 7.1 Global header (sticky)

- Left: **MASON** mark + wordmark (`mason_horizontal_dark_transparent_hd` on dark).
- Right: optional **Product** / **Solutions** / **Pricing** (if placeholders, use anchor links `#product`, `#surfaces`, `#contact`) · **Sign in** → `https://masononsite.com/signin` (text button or outline).
- Optional secondary: **Get the app** (scroll to download) or **Request demo** (mailto or form).

### 7.2 Hero

- **Headline:** operational benefit (e.g. “One command center for construction projects—from BIM to RFIs.”).
- **Subhead:** mention desk + field + AI Concierge without buzzword stacking.
- **Primary CTA:** **Sign in** → `https://masononsite.com/signin`.
- **Secondary CTA:** Register / Book demo / Watch overview (pick one strategy).
- **Visual:** product screenshot mockup, subtle 3D/grid reference to BIM, or abstract charcoal + orange gradient **or** stylized “orb” nodding to in-app AI—**no** stock construction clichés unless high-quality and on-brand.

### 7.3 “Why MASON” (3 pillars)

Example pillars (rewrite in final copy):

1. **Control** — Portfolio + project truth: issues, RFIs, submittals, documents, logs.  
2. **Context** — BIM + AR + schedule and cost in one permission-aware system.  
3. **Clarity** — AI Concierge tied to project data; notifications and search across projects.

### 7.4 Module grid

Responsive grid of **icons + short labels** matching real modules (§6). Group under **Plan / Execute / Insights** or **Office / Field / Insight**. Do not promise features that are admin-only without a “Enterprise” caveat.

### 7.5 BIM + field proof

- Short paragraph + **one** strong visual (viewer chrome, isolate/hide, federated models—match product screenshots when available).
- Bullet: IFC / web viewer tech is acceptable to mention at high level if approved by stakeholder.

### 7.6 Surfaces strip

Three columns: **Desktop**, **Mobile web**, **Android app** with device frames and 1–2 bullets each from §6.3.

### 7.7 Trust / security (light touch)

- Role-based access, audit-friendly workflows (align with in-app Audit log if selling enterprise).
- Hosting note only if legal-approved (e.g. “Hosted on modern cloud providers”).

### 7.8 Footer

- © year **MASON** / legal entity name (fill from business).
- Links: Privacy, Terms, Contact, **Sign in** (`/signin`).
- Optional: LinkedIn / email.

---

## 8. UI components to design explicitly

1. **Header** — sticky, blur or solid charcoal (`#07070a` or slightly elevated `#0c0c12`).
2. **Primary button** — fill `#e8942e`, text dark `#140d06` (matches token `--text-on-accent` on dark).
3. **Secondary button** — outline 1px `rgba(255,255,255,0.14)` or orange outline; hover glow subtle.
4. **Feature card** — `bg` elevated panel, border `rgba(255,255,255,0.08)`.
5. **Section divider** — hairline or generous whitespace (prefer whitespace + orange rule).

**Touch targets:** minimum ~44px height on buttons (aligns with product mobile rules).

---

## 9. Motion and accessibility

- **Motion:** subtle parallax or section fade-in acceptable; respect `prefers-reduced-motion` (disable large parallax when set).
- **Contrast:** body text vs background must meet WCAG AA; orange on white checked for large text only if used.
- **Focus:** visible focus ring (product uses orange ring—mirror on landing).

---

## 10. SEO and social

- **Title:** `MASON — Construction project management & BIM` (tune for keywords).
- **Meta description:** one sentence with RFIs, issues, BIM, field.
- **Canonical:** `https://masononsite.com`
- **Open Graph / Twitter:** title, description, **`og:image`** from designed 1200×630 asset.
- **Favicon:** mark from `mason_mark_grid_transparent_hd` or SVG derivative.

---

## 11. Analytics and forms (implementation checklist)

- Add analytics only per company policy (Plausible, GA4, etc.).
- If “Request demo” collects PII: link to privacy policy; minimal fields.

---

## 12. Open decisions for stakeholder

- **Single CTA vs dual:** Sign in only vs Sign in + self-serve Register.
- **Pricing section:** public numbers or “Contact sales” only.
- **Screenshots:** real sandbox data vs sanitized mocks.
- **Locale:** English-first; German (`de`) is supported in-app—landing i18n optional phase 2.

---

## 13. Handoff to engineering (after design)

- Deliver: Figma (or exports) + SVG/PNG logos + OG image.
- Implement as either static HTML on Vercel or a dedicated `/` marketing route **outside** authenticated AppShell, with links to `/signin`.
- Ensure **no accidental blue/purple** in Tailwind/CSS.
- Mirror font: **Inter** loadedsame as app.

---

*This brief aligns with `docs/CURSOR-MASTER-HANDOFF.md` and navigation config in `frontend/src/config/globalNavWireframe.js` and `frontend/src/config/projectModuleNav.js`.*
