# INO Interior Web MVP: Essential Context

## Project Goal

Build a polished, responsive, multi-page company-profile website for **INO Interior**. This first version is a visual MVP/demo to show prospective collaborators and potential clients. It must look credible and premium, not like a generic static brochure.

Primary business goal: establish trust through project portfolio and drive consultation through WhatsApp.

## Current Scope: Static Frontend Only

This iteration is **frontend only**. Do not build backend features now.

Included:

- Next.js frontend, desktop and mobile responsive
- Static local data for copy, services, and portfolio
- WhatsApp consultation CTAs
- SEO technical baseline and performance-minded image handling
- Multi-page navigation and reusable components

Explicitly deferred:

- CMS/dashboard, login, database, API, uploads, and Cloudinary integration
- Laravel or any other backend
- 3D curtain visualizer implementation
- Internationalization and dark/light theme switching
- Blog, ecommerce, booking/payment, or other custom business systems

The starter repo may include auth/NextAuth. Keep the foundation and dependencies intact unless they prevent the app from running, but do **not** expose authentication in the MVP UI or build auth flows.

## Technical Foundation

- Base repository: `rufatalv/next-feature-based` cloned as the project foundation
- Next.js App Router, TypeScript, Tailwind CSS
- Preserve a feature-based organization
- Use clean, maintainable components and avoid putting entire pages into a single huge component

Suggested structure:

```text
src/
├─ app/                  # Route composition only
├─ components/           # Shared UI: navbar, footer, buttons, section wrappers
├─ features/
│  ├─ home/
│  ├─ services/
│  ├─ portfolio/
│  ├─ about/
│  └─ contact/
├─ data/                 # Static local business data and portfolio data
├─ lib/                  # Utilities, constants, metadata helpers
└─ types/                # Shared TypeScript types
```

Use `next/image` for local images. Prepare the data layer so a future CMS/API can replace local data without rewriting page UI.

## Required Routes

| Route | Main purpose |
| --- | --- |
| `/` | Strong brand introduction, trust, services preview, featured projects, process, WhatsApp CTA |
| `/layanan` | Explain interior/curtain-related services clearly |
| `/portofolio` | Main B2B credibility page, project grid and project details or modal as appropriate |
| `/tentang` | Profile, approach, trust points, and why INO |
| `/kontak` | Contact details, location/map placeholder, and prominent WhatsApp CTA |

Do not create `/visualizer` in this first frontend sprint unless it is only intentionally excluded from navigation. The visualizer is a separate future feature.

## Audience and Communication

- Main audience: B2B clients such as offices, hospitality, commercial spaces, and project partners
- Secondary audience: residential customers
- Primary language: Bahasa Indonesia
- Tone: confident, warm, modern, and consultative. Avoid overclaiming work history or project data that has not been supplied.
- Main conversion path: user sees portfolio/services, then opens WhatsApp to consult.

## Visual Direction

- Premium interior brand, warm and light base palette with dark, elegant accents
- Let portfolio photography dominate the visual hierarchy
- Avoid excessive glassmorphism, loud gradients, generic SaaS aesthetics, and heavy animations
- Use deliberate typography, generous whitespace, restrained motion, and clear CTAs
- Mobile experience is a first-class requirement

## UI/UX Quality Bar

This is a **complete visual demo**, not a wireframe or a starter-template reskin. Every required route must feel intentional and client-presentable even while its business content is fictional.

- Design for two visitor modes at once: decision-makers must quickly judge capability and start a consultation; visitors exploring work must be able to browse the portfolio without UI competing with the imagery.
- Make the Home page an editorial sales narrative: a striking project-led opening, concise positioning, service proof, selected work, a clear process, then a consultation invitation. Do not stack interchangeable marketing sections.
- Make `/portofolio` the visual proof page: large imagery, restrained labels, useful project context, and obvious browsing/filter affordances. A project detail route is preferred over a modal when detail content is substantial.
- Make `/layanan`, `/tentang`, and `/kontak` answer a concrete buyer question each: scope of work, why to trust the team, and how to start. The primary WhatsApp CTA must be visible without becoming repetitive or intrusive.
- Use a clear type scale, generous but purposeful spacing, strong contrast, visible keyboard focus, semantic landmarks, descriptive alt text, and touch targets of at least 44px. Respect reduced-motion preferences.
- Mobile is a composed layout, not a squeezed desktop. Navigation, CTA placement, project grids, image crops, and reading order must be designed at small widths first and then expand for desktop.
- Motion may support orientation or image reveal only; it must never delay navigation, hide important content, or be required to understand the page.
- Do one bounded visual QA pass after implementation at a mobile width and a desktop width, then fix all observed issues before handoff.

## Anti-Slop Design Rules (Non-Negotiable)

These rules override generic component-library habits. If an element does not earn its visual treatment through hierarchy, action, or content, remove the treatment.

1. **No eyebrows.** Do not add all-caps pre-headings, decorative category labels, or redundant mini-copy above headings. A section heading must stand on its own.
2. **No obvious shadows.** Default to no shadow. When elevation is necessary for a floating navigation, control, or overlay, use one restrained shadow that is felt rather than noticed.
3. **No decorative borders.** Borders may only communicate a real boundary: an input, an active control, a divider required for scanning, or an image edge that needs separation. Never outline every card, section, or container.
4. **No filler backgrounds.** Do not alternate pale backgrounds merely to manufacture section separation. Use whitespace, image scale, typography, or one deliberate tonal shift with a clear narrative purpose.
5. **No directionless copy.** Every sentence must identify the work, show useful project context, answer a buyer question, or move the visitor toward consultation. Delete generic claims such as “mewujudkan impian Anda” unless followed by specific proof.
6. **No component soup.** Avoid dashboard cards, status badges, gratuitous pills, icon circles, metric blocks, carousels, and hover effects unless they solve a named content or interaction need.
7. **No ornamental rounding.** Corners are a compositional choice, not default decoration. Keep surfaces mostly unboxed; reserve a consistent radius for controls and any image treatment that has an intentional reason.

## Interaction and Motion Contract

Motion is a response to intent, not an ambient decoration layer. Every interactive element must make its next state understandable before or immediately after the visitor acts.

- **Hover:** links shift color or underline with restraint; project imagery may make one subtle, smooth scale or translate movement to reward exploration. Do not stack zoom, tilt, blur, shadow, and overlay effects on the same target.
- **Project images:** a slow, pointer-driven parallax movement is allowed on the Home hero and featured portfolio imagery when it gives the space depth. Keep the movement small, preserve the image crop, and disable it for touch devices and `prefers-reduced-motion`.
- **Click:** category filters visibly update the active control and gallery content; project cards navigate to their detail route; the primary CTA has an obvious pressed/focus state and begins its stated action immediately.
- **Navigation:** mobile-menu expansion and page changes must be direct and legible. Do not use delayed reveals, auto-advancing carousels, scroll-jacking, or movement that competes with reading.
- **Feedback:** focus states remain high-contrast; transitions should be short and use an ease-out curve. Content is fully usable before any transition completes.
- **Motion budget:** one authored spatial effect per section is enough. If it does not clarify hierarchy, affordance, or relationship to the work, remove it.

## Reference Principles to Adapt

The following references establish interaction and hierarchy principles only. Do not copy their branding, visual assets, copy, or layouts.

- **Gojek:** begin with a decisive hero, minimal navigation, and a single dominant message. Use strong light/dark planes only when they frame the story; do not fill the page with decorative surfaces.
- **Tesla:** let the object of consideration dominate. For INO, full-bleed or generously cropped interior photography should carry the emotional claim; text and CTAs stay short, high-contrast, and secondary to the work.
- **Airbnb:** interaction must reduce choice friction. A portfolio filter can use simple, accessible category controls (for example `Semua`, `Komersial`, `Hospitality`, `Residensial`) only when there are enough projects to browse. Do not build fake search, favorites, ratings, booking flows, or dense filter chrome.

## Page Composition Contract

- Home opens with one project-led composition, one specific headline, a short supporting line only when it adds meaning, and one primary consultation action. It must not begin with a badge, a row of metrics, or competing CTAs.
- Portfolio uses an editorial image grid with uneven, intentional image hierarchy rather than a uniform collection of boxed cards. Each item shows only enough text to identify the concept, scope, and location.
- Services use direct statements of scope and outcome; explain the work instead of inventing process diagrams or “feature cards.”
- About uses the approach and working principles, not fabricated milestones or a founder-story placeholder.
- Contact makes starting a conversation frictionless with one clear WhatsApp action and concise practical context.

## Demo Content Policy

Build with full fictional demo data so the product can be judged end-to-end before INO supplies business material.

- Use polished fictional service descriptions, portfolio titles, project narratives, locations, and consultation copy. Keep all of it in local data files for direct replacement later.
- Use curated temporary interior imagery with descriptive alt text. Treat it as presentation material only and replace it with licensed INO assets before production.
- Clearly label work as `Konsep Proyek` or `Demo Portofolio` where a reasonable visitor could otherwise mistake it for a completed INO commission.
- Do not invent client logos, named clients, testimonials, awards, years in business, completion counts, addresses, social accounts, or a real WhatsApp destination. Use neutral labels and a deliberately identifiable demo contact target until verified data arrives.
- The visual quality may be premium; factual trust claims may not be fabricated.

## Content and Asset Rules

- Real photos, logo, address, WhatsApp number, social links, and exact company copy may still be incomplete.
- Build a refined demo with clearly isolated placeholder data that can be replaced later.
- Never present dummy projects, fake client logos, testimonials, years of experience, or statistics as factual INO claims.
- Use descriptive alt text and image filenames where possible.
- Keep portfolio images optimized; prefer WebP/AVIF assets and do not commit huge original photos.

## SEO Baseline

Implement only technical SEO baseline, not an ongoing SEO service:

- Per-page title and description metadata
- Semantic heading hierarchy
- `sitemap.ts` and `robots.ts`
- Open Graph defaults/placeholders
- Good image alt text and performance-conscious loading

## Deployment Direction

- Initial preview can use a subdomain such as `ino.alfitsani.my.id`
- The future production domain should be owned by INO, not the developer
- The app must remain deployable as a static Next.js site for this MVP

## Working Priorities

1. Make the app run cleanly from the cloned starter.
2. Establish design tokens, shared layout, navigation, and typography.
3. Complete the Home page to a high visual standard.
4. Build the remaining public pages using reusable feature components and static data.
5. Test desktop and mobile layouts, then fix obvious visual and accessibility issues.

## Definition of Done for This Sprint

- All five public routes work and are linked in navigation/footer.
- No visible broken UI, dead primary CTA, fake claims, or unhandled mobile layout.
- Portfolio and WhatsApp CTA are prominent.
- Code respects the feature-based architecture and remains easy to extend into a CMS later.
