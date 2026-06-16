
# Premium Light-Mode Blue Refinement

Transform the existing dark/gold portfolio into a calm, editorial light theme inspired by the Seiko Presage blue dial and refined Porsche blue aesthetics. Structure stays; tokens, typography, hero visual, and motion register are rebuilt.

## 1. Design tokens (`src/styles.css`)

Replace the current dark palette + gold accent with a light, blue-led system:

- `--background`: soft ivory (`oklch(0.985 0.004 240)`)
- `--surface`: pale blue-gray porcelain (`oklch(0.965 0.012 240)`)
- `--foreground`: deep navy charcoal (`oklch(0.20 0.03 250)`)
- `--muted-foreground`: slate (`oklch(0.50 0.02 245)`)
- `--primary` (watch-blue): deep Presage blue (`oklch(0.42 0.13 255)`)
- `--accent-soft` (metallic silver-blue): `oklch(0.78 0.04 245)`
- `--border`: translucent gray-blue (`oklch(0.20 0.03 250 / 10%)`)
- Rename `--gold` token usage → `--primary` / new `--blue` token; remove gold gradient text utility, add `.text-blue` gradient (porcelain → watch-blue → midnight).
- Remove `cursor: none` global rule (custom cursor stays but native cursor restored on light bg for a calmer feel — optional, keep cursor but reskin to thin navy ring).
- Keep `glass`, `hairline`, `noise` utilities but retune for light surface (lower opacity, cooler tint).

## 2. Typography

- Swap Inter for a more premium pairing: **Fraunces** (display, optical-size, slight contrast) for headlines + **Inter Tight** for body. Loaded via `<link>` in `__root.tsx` (no `@import` URL in CSS).
- `--font-display: "Fraunces"`, `--font-sans: "Inter Tight"`.
- Tighten tracking on display (`-0.035em`), generous leading on body (`1.65`).

## 3. Hero

- Replace gold rotating watch-rings with a single, large **Presage-inspired blue dial**: concentric thin navy circles, indices at 12/3/6/9, a slow-sweeping seconds hand, soft radial blue glow behind it. Drop particles.
- Background: ivory with a faint top-left blue radial wash; remove the dark vignette.
- Name reveal stays (mask + spring), but switch the highlighted "Goyal." from gold gradient to deep watch-blue.
- Eyebrow line `Portfolio · 2026 Edition` in slate with thin blue rule.
- CTAs: primary = solid navy-blue with subtle inner highlight, ghost = navy outline; both keep magnetic behavior, softened spring (stiffness 150, damping 20).

## 4. Sections

- **About**: editorial two-column, large pull-quote in Fraunces italic, generous whitespace.
- **Experience**: vertical timeline rule recolored to blue gradient; node dots become small dial indices.
- **Projects**: cards on porcelain surface, 1px blue-gray border, soft shadow (`0 20px 40px -24px rgba(20,40,90,0.18)`), hover lifts 4px + border deepens to primary; remove aggressive 3D tilt, replace with gentle 6° max + slower spring.
- **Skills**: restructure from badge clouds to a clean 3-column **table-like system** — category label left, items right, hairline dividers between rows. No pill badges.
- **Passion**: keep watch + car cards but reframe imagery with light surrounds, blue duotone treatment via CSS blend, remove gear/laser overlays for restraint.
- **Contact**: centered, single column, large Fraunces statement + simple email link with underline-grow animation.
- **Nav**: glass over ivory, navy text, blue active indicator.

## 5. Motion

- Global easing: `[0.22, 1, 0.36, 1]` for entries, springs `{ stiffness: 140, damping: 22, mass: 0.9 }` for interactive.
- Reveal: 16px slide-up + fade, 700ms, stagger 60ms. Remove any bounce.
- Hover: cards `y: -4`, shadow deepen; links underline grow left→right 300ms.
- Hero dial seconds hand: 60s linear sweep.
- Remove marquee speed flourishes; keep marquee but slow to 60s and reduce opacity.

## 6. Assets

- Regenerate `watch.jpg` → blue Presage-style dial macro on light background.
- Regenerate `car.jpg` → light-silver/blue Porsche 911 against pale studio backdrop.
- Project images retuned to light/blue palette (regenerate 3).

## 7. Files touched

- `src/styles.css` — tokens, fonts, utilities, animations
- `src/routes/__root.tsx` — font `<link>` swap, meta polish
- `src/components/sections/Hero.tsx` — new dial visual, light treatment
- `src/components/sections/{About,Experience,Projects,Skills,Passion,Contact}.tsx` — palette + structure refinements
- `src/components/{Nav,MagneticButton,Reveal,CustomCursor,Marquee}.tsx` — restyle to light/blue, soften motion
- `src/assets/{watch,car,project-1,project-2,project-3,hero-bg}.jpg` — regenerate

No backend, routing, or content changes.
