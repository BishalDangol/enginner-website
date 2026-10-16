# Heron Next.js — Complete Pages & Routes Guide

In **Next.js 16 (App Router)**, each page is organized inside its own route directory under `src/app/` with a `page.tsx` file:

---

### Route Directory Mapping

| URL Route | File Path | Description |
| :--- | :--- | :--- |
| **`/`** | [`src/app/page.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/app/page.tsx) | Complete 10-section landing page |
| **`/about-us`** | [`src/app/about-us/page.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/app/about-us/page.tsx) | About Us, leadership & design values |
| **`/pricing`** | [`src/app/pricing/page.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/app/pricing/page.tsx) | Pricing tiers & feature comparison table |
| **`/contact-us`** | [`src/app/contact-us/page.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/app/contact-us/page.tsx) | Contact form & pilot demo request |
| **`/heron-chat-widget`** | [`src/app/heron-chat-widget/page.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/app/heron-chat-widget/page.tsx) | In-model Revit/ArchiCAD AI assistant |
| **`/heron-dashboard`** | [`src/app/heron-dashboard/page.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/app/heron-dashboard/page.tsx) | Firm-wide compliance metrics & model health |
| **`/resources`** | [`src/app/resources/page.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/app/resources/page.tsx) | AI design practices, case studies & guides |

---

### Landing Page Component Breakdown (`src/components/`)

The main landing page ([`src/app/page.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/app/page.tsx)) assembles these modular components:

1. **[`Header.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/components/Header.tsx)** — Navigation bar, logo, and Site of the Day badge
2. **[`HeroSection.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/components/HeroSection.tsx)** — CAD building elevation with animated laser datum scanline
3. **[`IntroSection.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/components/IntroSection.tsx)** — Client architectural firm marquee ticker
4. **[`ProblemSection.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/components/ProblemSection.tsx)** — 4-Column problem bottleneck matrix (`[01]` to `[04]`)
5. **[`MapSection.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/components/MapSection.tsx)** — Interactive CAD BIM model coordination section
6. **[`PlatformSection.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/components/PlatformSection.tsx)** — Solutions tabs (`Heron Chat Widget` & `Heron Dashboard`)
7. **[`WhyUsSection.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/components/WhyUsSection.tsx)** — 4-Phase workflow (`Observe`, `Advise`, `Act`, `Learn`)
8. **[`UseCasesSection.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/components/UseCasesSection.tsx)** — 8-Role accordion (`Architects`, `Interior Designers`, `Engineers`, etc.)
9. **[`CtaSection.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/components/CtaSection.tsx)** — Pilot request banner with registration crosshairs
10. **[`Footer.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/components/Footer.tsx)** — Giant vector logo, newsletter form, address & legal links
11. **[`InteractiveEffects.tsx`](file:///d:/BScCSIT/enginner-website/heron-next/src/components/InteractiveEffects.tsx)** — GSAP ScrollTrigger timelines, cursor crosshairs & tab interactions
