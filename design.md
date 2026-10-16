# DESIGN.md — [Company Name] Tower & Internet Infrastructure Website

> Replace `[Company Name]` and bracketed values before use. Reference inspiration: the blueprint / technical-drawing language of Heron AI (heronaiapp.com), adapted for telecom towers and network infrastructure. Do not copy Heron's assets, logo, copy or exact palette.

---

## 1. Context and goals

**Design intent (one sentence):** A drafting-sheet website that proves we build and maintain towers and networks safely, precisely and on schedule, so telecom operators, ISPs and government buyers can request a quote with confidence.

**Product surface:** B2B marketing and lead-generation website, with a customer support entry for ISP clients.

**Audiences**
| Audience | Primary job on the site |
|---|---|
| Telecom operators / MNOs | Check capability, past sites, safety record, then send an RFQ |
| ISPs / fiber customers | Check coverage, SLA, then raise a support ticket or request service |
| Government / tender officers | Verify licenses, certifications, compliance, then download documents |
| Job seekers (riggers, climbers, engineers) | Find open roles and safety standards |

**Primary conversion:** "Request a quote" (RFQ). **Secondary:** "Book a site survey", "Download capability statement".

**Design principles**
1. **The page is a drawing sheet.** Hairlines, grid, coordinates and numbered sheets are information, not decoration. Use numbering only where content is truly a sequence (process steps, project sheets).
2. **Evidence over adjectives.** Show site IDs, heights, loads, dates and certificates before slogans.
3. **One loud thing.** Signal orange is the only saturated color. Everything else stays quiet.
4. **Safety is visible.** Safety and compliance content is reachable from every page in one click.
5. **Works on a weak connection.** Tower sites and regional visitors often have slow mobile networks.

---

## 2. Design tokens and foundations

Component guidance must reference semantic tokens, never raw hex values.

### 2.1 Color

**Base palette (primitives)**
| Token | Value | Notes |
|---|---|---|
| `color.ink.900` | `#12202B` | Text, active states, heavy edges |
| `color.ink.700` | `#3A4954` | Secondary text |
| `color.ink.500` | `#5B6B76` | Hairlines on dark, muted icons |
| `color.vellum.100` | `#EDF0EE` | Page background (cool drafting vellum) |
| `color.vellum.200` | `#E1E6E4` | Raised areas, table stripes |
| `color.vellum.300` | `#C9D1CF` | Hairline borders |
| `color.white` | `#FFFFFF` | Inputs, cards on vellum |
| `color.orange.500` | `#E8501A` | Graphic accent (shapes, scan line, markers) |
| `color.orange.700` | `#B8380F` | Accent for text, links, button fill |
| `color.night.900` | `#0C161E` | NOC / status sections |

**Semantic tokens**
| Token | Maps to | Use |
|---|---|---|
| `color.text.primary` | `ink.900` | Body and headings |
| `color.text.secondary` | `ink.700` | Supporting copy |
| `color.text.accent` | `orange.700` | Links, small accent text |
| `color.text.on-accent` | `white` | Text on `action.primary` |
| `color.text.on-night` | `vellum.100` | Text on night surface |
| `color.surface.page` | `vellum.100` | Page background |
| `color.surface.raised` | `white` | Cards, inputs, panels |
| `color.surface.muted` | `vellum.200` | Table stripes, disabled fill |
| `color.surface.night` | `night.900` | Status / NOC sections |
| `color.border.hairline` | `vellum.300` | 1px grid and dividers |
| `color.border.strong` | `ink.900` | Card edges, focus-adjacent edges |
| `color.action.primary` | `orange.700` | Primary button fill |
| `color.action.primary-hover` | `#9C2E0B` | Hover |
| `color.action.primary-active` | `#802508` | Pressed |
| `color.graphic.accent` | `orange.500` | Scan line, markers, non-text highlights |
| `color.focus.ring` | `ink.900` with 2px `vellum.100` gap | Focus-visible |

**Status tokens** (always paired with an icon and a text label, never color alone)
| Token | Value | Label | Icon |
|---|---|---|---|
| `color.status.operational` | `#1F7A4D` | Operational | check-circle |
| `color.status.degraded` | `#8A5A00` | Degraded | alert-triangle |
| `color.status.outage` | `#B3261E` | Outage | x-circle |
| `color.status.planned` | `#1F5FA8` | Planned work | clock |

**Contrast rules (must)**
- Body text and small text must reach 4.5:1 against its background.
- Large text (24px+, or 18.66px+ bold) and UI shapes must reach 3:1.
- `color.graphic.accent` (`#E8501A`) must not be used for text on vellum or white (about 3.3:1).
- Text on `color.action.primary` must be `color.text.on-accent` (about 5.8:1).
- Verify every new pairing with a contrast checker before adding it to the system.

### 2.2 Typography

| Token | Value |
|---|---|
| `font.family.display` | `"Archivo", "Arial Narrow", Arial, "Noto Sans Devanagari", sans-serif` (use width 100 to 112, weight 700 to 800) |
| `font.family.body` | `"Archivo", Arial, "Noto Sans Devanagari", sans-serif` (weight 400 to 500) |
| `font.family.mono` | `"JetBrains Mono", "IBM Plex Mono", ui-monospace, Menlo, monospace` |

If Nepali or other Devanagari content is shown, set `lang` correctly and keep line-height at 1.6 or more for that script.

**Type scale** (base 16px, ratio about 1.25, fluid between 360px and 1440px viewports)
| Token | Size (min to max) | Line height | Weight | Tracking | Use |
|---|---|---|---|---|---|
| `font.size.display` | 40px to 80px | 0.95 | 800 | -0.02em | Hero headline, uppercase |
| `font.size.h1` | 32px to 56px | 1.0 | 800 | -0.02em | Page titles, uppercase |
| `font.size.h2` | 24px to 36px | 1.05 | 700 | -0.01em | Section titles, uppercase |
| `font.size.h3` | 18px to 22px | 1.2 | 700 | 0 | Card titles, sentence case |
| `font.size.body-lg` | 18px | 1.55 | 400 | 0 | Lead paragraphs |
| `font.size.body` | 16px | 1.5 | 400 | 0 | Default text |
| `font.size.label` | 12px | 1.3 | 500 (mono) | 0.06em | Nav, metadata, buttons, uppercase |
| `font.size.data` | 14px | 1.4 | 500 (mono) | 0 | Site IDs, coordinates, heights, frequencies |

**Rules**
- Body text must be at least 16px. Mono labels must not go below 12px.
- Line length for body copy should stay between 45 and 75 characters.
- Uppercase should be limited to display headings, h1, h2 and mono labels. Body copy, h3 and error messages use sentence case.
- Headlines should not highlight a single word with a different color or style.
- Numbers in data must use mono with tabular figures (`font-variant-numeric: tabular-nums`).

### 2.3 Spacing, grid and layout

Base unit is 4px. One-off values must not be introduced.

| Token | Value |
|---|---|
| `space.1` | 4px |
| `space.2` | 8px |
| `space.3` | 12px |
| `space.4` | 16px |
| `space.5` | 24px |
| `space.6` | 32px |
| `space.7` | 48px |
| `space.8` | 64px |
| `space.9` | 96px |
| `space.10` | 128px |

**Grid**
- Container max width: 1440px. Gutter: 16px (mobile), 24px (tablet), 32px (desktop).
- Columns: 4 (under 640px), 8 (640 to 1023px), 12 (1024px and above).
- Breakpoints: `bp.sm=640px`, `bp.md=768px`, `bp.lg=1024px`, `bp.xl=1280px`.
- The page is framed by a 1px hairline border and divided into sheet cells by hairline or dashed lines.
- Content alignment: left-aligned by default. Center only the closing call to action.

### 2.4 Shape, borders, shadow

| Token | Value | Use |
|---|---|---|
| `radius.0` | 0 | Everything by default (cards, buttons, inputs) |
| `radius.full` | 9999px | Status dots and map markers only |
| `border.hairline` | 1px solid `color.border.hairline` | Grid, dividers, table rows |
| `border.dashed` | 1px dashed `color.border.hairline` | Sheet cell dividers |
| `border.strong` | 1px solid `color.border.strong` | Cards and panels |
| `shadow.hard` | `0 4px 0 0 color.border.strong` | Cards with a heavy bottom edge |
| `shadow.none` | none | Default for flat elements |

Soft blurred shadows must not be used.

### 2.5 Drafting devices

| Device | Rule |
|---|---|
| Crosshair `+` marks | Placed at grid intersections, 12px, `color.border.hairline`, `aria-hidden="true"` |
| Coordinate labels | Mono label, shown only when they carry real data (site coordinates, sheet position) |
| Scan line | One 1px `color.graphic.accent` horizontal line per page, used to split a drawing from its UI overlay. Animates once on load or on tab change |
| Sheet numbers `[01]` | Allowed for process steps, service tabs and project sheets only |
| Imagery | Halftone grayscale photography of real towers and crews, plus line art of lattice, monopole and guyed towers, RF coverage rings, fiber routes and foundation sections |

### 2.6 Motion

| Token | Value |
|---|---|
| `motion.duration.instant` | 120ms |
| `motion.duration.fast` | 200ms |
| `motion.duration.normal` | 320ms |
| `motion.duration.slow` | 600ms (scan line only) |
| `motion.easing.standard` | `cubic-bezier(0.2, 0, 0, 1)` |

- Motion should respond to a user action (open, expand, switch tab, confirm).
- Only one non-user-triggered motion is allowed per page: the scan line.
- When `prefers-reduced-motion: reduce` is set, all motion must be removed or reduced to an instant state change, and the scan line must render static.

---

## 3. Component rules

### 3.0 State matrix (applies to interactive components)

Every interactive component must define: default, hover, focus-visible, active, disabled, loading, error.
- Components that cannot fail (links, nav items) may omit loading and error, and must say so explicitly.
- Static content (cards without actions, stat bands) needs only default and, if clickable, hover and focus-visible.

**Global focus rule (must):** `:focus-visible` shows a 2px `color.focus.ring` outline with a 2px offset. On `surface.night` the ring must be `color.text.on-night`. Focus must never be removed or hidden.

**Global target size (must):** Touch and pointer targets must be at least 44x44px (WCAG 2.2 AA minimum is 24x24px).

### 3.1 Header and navigation

**Anatomy:** logo, primary nav (Services, Projects, Coverage, Safety, Company), utility links (Support, Careers), primary CTA ("Request a quote").

| State | Rule |
|---|---|
| Default | Mono label, `text.primary`, hairline separators between items |
| Hover | Underline 2px `graphic.accent` offset 4px |
| Focus-visible | Global focus ring |
| Active (current page) | `surface.night` fill with `text.on-night`, and `aria-current="page"` |
| Disabled / loading / error | Not applicable |

**Behavior**
- Keyboard: Tab moves through items. Enter or Space opens a submenu. Escape closes it and returns focus to the trigger. Arrow keys move inside open submenus.
- Pointer: submenus open on click, not hover only.
- Touch / below `bp.lg`: nav collapses into a full-screen menu opened by a button labeled "Menu" with `aria-expanded`. Focus must be trapped in the open menu.
- A "Skip to main content" link must be the first focusable element.
- Long labels must wrap to two lines and not truncate.

### 3.2 Button

**Variants:** Primary (fill `action.primary`, `text.on-accent`), Secondary (1px `border.strong`, transparent fill), Tertiary (text link with arrow icon), Split (label plus arrow cell separated by a dashed divider).

**Typography/spacing:** `font.size.label`, uppercase mono, height 48px, horizontal padding `space.5`, `radius.0`.

| State | Primary | Secondary |
|---|---|---|
| Default | Orange 700 fill, white text | Transparent, ink border |
| Hover | `action.primary-hover` | `surface.muted` fill |
| Focus-visible | Global ring | Global ring |
| Active | `action.primary-active`, 1px translate down | `surface.muted` fill, 1px translate down |
| Disabled | `surface.muted` fill, `ink.500` text, `aria-disabled="true"`, no pointer events | Same |
| Loading | Label replaced by spinner and "Sending", width fixed, `aria-busy="true"`, clicks ignored | Same |
| Error | Button stays default. The error message appears next to the form, never inside the button | Same |

**Behavior**
- Keyboard: Enter and Space activate.
- Labels must say the exact action: "Request a quote", "Book a site survey", "Download capability statement". Labels like "Submit" or "Click here" must not be used.
- Long labels wrap and the button grows in height. Labels must not be truncated.

### 3.3 Text input, select, textarea, file upload

**Anatomy:** visible label above, optional helper text, control, error text.

| State | Rule |
|---|---|
| Default | `surface.raised`, `border.strong` 1px, 48px height, `space.4` padding |
| Hover | Border thickness stays, background `surface.page` |
| Focus-visible | Global ring |
| Active (typing) | Same as focus |
| Disabled | `surface.muted`, `ink.500` text, not focusable |
| Loading | Inline spinner at the right edge (for example address lookup) |
| Error | 2px `status.outage` border, icon plus text under the field, `aria-invalid="true"`, `aria-describedby` linking the message |

**Behavior**
- Labels must be visible and programmatically associated. Placeholder text must not replace labels.
- Error text must say what is wrong and how to fix it: "Enter a height in meters, for example 45."
- File upload (site photos, drawings, tender docs): accept PDF, DWG, JPG, PNG, up to the stated size limit. Show file name, size and a "Remove" button. Drag and drop must have a keyboard-operable button alternative.
- Touch: use the correct `inputmode` and `autocomplete` values.
- Edge cases: values longer than the field must scroll or wrap in textareas, and never overflow the container.

### 3.4 Multi-step RFQ form

**Steps:** 1 Contact, 2 Project type, 3 Site details, 4 Files, 5 Review and send.

- Show a step indicator with text ("Step 2 of 5: Project type"), not only a bar.
- Progress must be kept when the user goes back.
- Validation runs on "Next", not on every keystroke. On error, focus moves to an error summary at the top that links to each invalid field.
- After sending, show a confirmation with a reference number and the expected response time.
- Empty state: if the user has no site details yet, offer "Skip, we will confirm at the site survey."

### 3.5 Project card

**Anatomy:** halftone photo or line drawing, project name, mono data row (Site ID, tower type, height in m, location, completion date), link "View project".

- Default: `surface.raised`, `border.strong`, `shadow.hard`.
- Hover: shadow offset reduces to 2px and card moves 2px down, 200ms. The whole card is one link target.
- Focus-visible: global ring around the whole card.
- Images need meaningful `alt` text ("Guyed mast, 60 m, Chitwan"), or empty `alt` if purely decorative.
- Long project names should wrap to three lines, then truncate with an ellipsis and a `title` equivalent in the detail page.
- Missing data shows "Not disclosed", never a blank.

### 3.6 Spec table

**Anatomy:** caption, header row, data rows with mono values and units.
- Must use real `<table>`, `<caption>`, `<th scope>` markup.
- Row stripes use `surface.muted`. Numeric columns are right-aligned with tabular figures.
- Below `bp.md` the table must scroll horizontally inside its own container (`overflow-x: auto`, focusable, with an accessible label) or reflow to stacked key-value pairs.
- Empty state: "No specifications published for this site."

### 3.7 Coverage and project map

- Markers use shape plus label, not only color. Each marker is keyboard focusable and opens a panel with site details.
- A list view of the same data must always be available and must be reachable by a visible toggle ("Map" / "List").
- Zoom controls must be buttons. Scroll hijacking must not be enabled.
- Loading: show skeleton grid with the text "Loading sites". Error: "Map could not load. Use the list view." with a retry button.
- Empty (filters return nothing): "No sites match these filters. Clear filters."

### 3.8 Stats band

- 3 to 4 figures. Each has a number (`font.size.h1`, mono), a unit, and a plain label.
- Figures must be real and carry an "as of" date. Placeholder numbers must not ship.
- Count-up animation must not be used.

### 3.9 Process stepper (survey, design, permit, build, commission, maintain)

- This is a true sequence, so numbered markers `[01]` to `[06]` are allowed.
- Horizontal on `bp.lg` and above. Vertical below, with a vertical hairline connector.
- Each step has a title, one sentence, and typical duration.
- Not interactive by default. If steps expand, use a button with `aria-expanded`.

### 3.10 Status tile and SLA panel (on `surface.night`)

- Shows service name, status (icon, label, status color), last updated time, uptime for the last 30 days.
- Status must update in a polite live region (`aria-live="polite"`). Outage state may use `role="alert"`.
- Never rely on color alone. Always show icon and text.
- Loading: skeleton tiles. Error: "Status unavailable. Last updated [time]."

### 3.11 Tabs (service switcher)

- Pattern: WAI-ARIA tabs (`role="tablist"`, `tab`, `tabpanel`).
- Keyboard: Left and Right arrows move between tabs, Home and End jump, Tab moves into the panel.
- Active tab uses `surface.night` fill and `text.on-night`. Hover uses `surface.muted`.
- Below `bp.md` tabs scroll horizontally, and the active tab scrolls into view.

### 3.12 Accordion (FAQ)

- Each item is a button inside a heading with `aria-expanded` and `aria-controls`.
- Open and close animate height in `motion.duration.fast`. With reduced motion, the change is instant.
- Multiple items may be open at the same time.

### 3.13 Certification badge row and logo carousel

- Badges (ISO, license numbers, HSE awards) show the issuer, number and expiry date in text. Images must have `alt`.
- Logo carousel must have visible previous and next buttons, must not autoplay, and must be a static grid when JavaScript is off.

### 3.14 Cookie banner

- Fixed to the bottom, must not cover focused elements. "Accept" and "Reject" must have equal visual weight and equal prominence.
- Must not block the page or trap focus. Choice persists for 12 months.

### 3.15 Footer

- Columns: Company, Services, Resources, Contact. Includes office addresses, emergency / NOC phone number, license numbers and the safety policy link.
- Contact details must be real text, not images.

---

## 4. Accessibility requirements (WCAG 2.2 AA)

Each item is pass or fail.

| # | Requirement | Test |
|---|---|---|
| A1 | All functionality is operable by keyboard with no trap | Tab through every page. Pass if every control is reachable and operable, and focus can always leave |
| A2 | Focus is always visible with 3:1 contrast against adjacent colors | Tab through. Pass if a ring is visible on every focusable element |
| A3 | Text contrast is 4.5:1 (3:1 for large text and UI shapes) | Run an automated checker and spot-check every token pair. Pass if no failures |
| A4 | Color is never the only carrier of meaning | Grayscale screenshot. Pass if status, errors and markers remain understandable |
| A5 | Targets are at least 44x44px (never below 24x24px) | Measure in dev tools |
| A6 | Every image and drawing has a text alternative, or is marked decorative | Automated check plus manual review |
| A7 | Page has one `h1` and a logical heading order | Outline check |
| A8 | Landmarks exist: `header`, `nav`, `main`, `footer` | Screen reader landmark list |
| A9 | "Skip to main content" works | Press Tab once on load, then Enter. Pass if focus moves to `main` |
| A10 | Forms have visible labels, error summaries and clear instructions | Submit empty forms. Pass if errors are announced and linked |
| A11 | Page reflows at 320px width and 400% zoom with no horizontal scroll (except tables and maps) | Resize test |
| A12 | Reduced motion is respected | Enable the OS setting. Pass if no movement remains |
| A13 | Language is declared for the page and for mixed-language content | Check `lang` attributes |
| A14 | Dragging has a non-drag alternative (WCAG 2.2: 2.5.7) | Test file upload and map without dragging |
| A15 | Help and contact options are in the same place on every page (WCAG 2.2: 3.2.6) | Compare header and footer across pages |
| A16 | Authentication, if added, does not require cognitive tests (WCAG 2.2: 3.3.8) | Review the login flow |
| A17 | Focused elements are not hidden behind sticky headers or banners (WCAG 2.2: 2.4.11) | Tab with the cookie banner and sticky nav visible |

---

## 5. Content and tone standards

**Voice:** plain, precise, confident. State facts and numbers. Avoid hype.

**Rules**
- Use active voice and plain verbs. Name things as the customer would.
- Buttons name the action. The same action keeps the same name across the flow.
- Units must always appear (m, kg, kN, dBm, Mbps, GHz). Dates use `DD MMM YYYY`.
- Errors explain what went wrong and how to fix it. They do not apologize.
- Empty states tell the user what to do next.

| Do | Don't |
|---|---|
| "Request a quote" | "Submit" |
| "We build and maintain towers from 18 m to 120 m." | "World-class connectivity solutions." |
| "Enter a height in meters, for example 45." | "Invalid input." |
| "No sites match these filters. Clear filters." | "Oops, nothing here!" |
| "Response within 2 business days." | "We'll be in touch soon." |

**Headline examples**
- "Towers built to carry the load. Networks built to stay up."
- "Every site, from survey to maintenance."
- "Work at height, done safely."

**Required content blocks on the home page:** hero with real tower imagery, services overview, stats band (real, dated), featured projects, process stepper, safety and certifications, coverage map, RFQ call to action.

**Service pages:** Tower construction and erection, civil and foundation, structural analysis and mounting, fiber (FTTH and backbone), microwave backhaul, small cell and DAS, operations and maintenance, painting, lighting and audits.

---

## 6. Anti-patterns and prohibited implementations

The following must not ship.

- Text or icons that fail contrast rules, or hidden or removed focus outlines.
- One-off colors, spacing or font sizes outside the token tables.
- Rounded corners, soft drop shadows or gradient washes.
- Orange (`#E8501A`) used for small text.
- Status shown by color alone.
- Autoplaying carousels or video with sound.
- Count-up number animations or fade-and-slide entrances on every section.
- Stock photos of generic skylines or handshakes in place of real sites.
- Placeholder statistics, fake client logos or invented certifications.
- Vague actions ("Submit", "Learn more", "Click here").
- Maps with no list alternative.
- Cookie banners where "Reject" is visually hidden.
- Text embedded in images.
- Page weight above 1.5 MB on first load (excluding lazy-loaded media).

**Migration notes (if converting from the original Heron-based draft)**
- Audience and surface must be changed from "online shoppers / e-commerce storefront" to "B2B infrastructure buyers / marketing and RFQ site".
- `color.text.inverse=#0000ee` was the browser default link color and must be removed.
- `color.surface.base=#000000` must be replaced by `color.surface.page` (vellum).
- The scraped spacing values (3.56px, 4.44px and so on) must be replaced by the 4px scale.
- Add the missing radius, border, shadow, grid, mono-font and status tokens listed above.
- Font BT Grotesk must be replaced by Archivo and JetBrains Mono unless a license is held.

---

## 7. Performance and delivery

- Images: use AVIF or WebP with JPEG fallback, explicit `width` and `height`, and `loading="lazy"` below the fold. Halftone effects should be pre-rendered, not computed in the browser.
- Line art: use optimized inline SVG (SVGO), with `<title>` and `<desc>` where informative.
- Fonts: self-host, subset to Latin (and Devanagari if needed), `font-display: swap`, at most 3 files preloaded.
- Largest Contentful Paint should be under 2.5s on a mid-range phone over slow 4G.
- The site should be usable with JavaScript disabled for navigation, content and the RFQ form.
- Implementation should expose tokens as CSS custom properties (for example `--color-text-primary`) generated from one source file.

---

## 8. QA checklist

**Foundations**
- [ ] Every color, size and spacing value comes from a token.
- [ ] No radius other than `radius.0` (and `radius.full` for status dots and markers).
- [ ] Only one scan line per page, and it is static with reduced motion.

**Components**
- [ ] Every interactive component documents and implements default, hover, focus-visible, active, disabled, loading and error (or states the omission).
- [ ] Keyboard, pointer and touch behavior verified for nav, tabs, accordion, forms, map and carousel.
- [ ] Long content, overflow and empty states checked for cards, tables, forms and map.
- [ ] Spec tables scroll or reflow at 320px.

**Accessibility**
- [ ] Items A1 to A17 pass.
- [ ] Automated scan (axe or Lighthouse) shows no critical or serious issues.
- [ ] Manual screen reader pass done on home, a service page, RFQ form and map.

**Content**
- [ ] All stats are real, dated and sourced.
- [ ] Certifications and licenses are real and in date.
- [ ] Every button and link says what it does.

**Performance**
- [ ] LCP under 2.5s on throttled mobile.
- [ ] First-load weight under 1.5 MB.
- [ ] Works on the latest two versions of Chrome, Safari, Firefox and Edge, and on Android Chrome and iOS Safari.

---

## 9. Quality gates

- Every non-negotiable rule in this document uses "must". Every recommendation uses "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions. Any exception must be recorded as a token or component change here first.

---

## 10. Page and component density target

Plan for roughly: 35 to 40 links, 6 to 8 buttons, 8 to 12 form inputs (RFQ), 1 primary navigation, 1 footer navigation. Reduce link count per page where possible, since a high count hurts scanning.