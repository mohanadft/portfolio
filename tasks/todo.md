# Enhance, Refine, Iterate

## Assessment

Previous pass handled structural issues (nav, a11y, layout variety, side-stripe removal). What remains is the *personality* gap. The site currently reads as "competent terminal portfolio" but not "this person sweats craft." The PRODUCT.md anti-reference nails it: "Cookie-cutter terminal themes that all look the same."

---

## Plan

### 1. Typography: Add hierarchy through font contrast
- [x] Use fluid `clamp()` scaling for headings (≥1.25 ratio between steps)
- [x] Increase line-height on light-on-dark body text (+0.05-0.1)
- [x] Tighten letter-spacing on large display text

### 2. Color: Migrate to OKLCH, add warmth
- [x] Convert all hex colors to OKLCH in globals.css
- [x] Shift the green accent slightly warmer (toward phosphor-green)
- [x] Tint neutrals toward the brand hue (chroma 0.005-0.01)
- [x] Make the accent-yellow warmer and more amber

### 3. Motion: Orchestrate, don't repeat
- [x] Hero: tighten stagger choreography, expo easing
- [x] About: fade in without y-offset (quieter entrance)
- [x] Experience: slide from left with increasing delay
- [x] Projects: scale-in from 0.97 instead of y-translate
- [x] OpenSource: fast cascade stagger (0.04s apart)
- [x] Hero nav links: individual stagger per link

### 4. Atmosphere: Depth and texture
- [x] Increase scanline opacity to 0.04
- [x] Add noise texture overlay (SVG fractalNoise)
- [x] Strengthen radial gradient on hero (6%)
- [x] Add vignette effect to hero section
- [x] Noise auto-dims in light mode

### 5. Micro-interactions and delight
- [x] Link hover underline slide-in (`.link-hover` CSS class)
- [x] Tech tags: bg/border brighten on hover
- [x] Project cards: border brightens + shadow glow on hover
- [x] PR badges: bg brightens on hover
- [x] Nav active indicator: animated `layoutId` slide
- [x] Contact JSON card: border brightens on hover

### 6. Spacing rhythm
- [x] Hero → About: generous gap (py-32/py-40)
- [x] Experience/Testimonials: medium (py-24/py-32)
- [x] OpenSource/Writing: tighter (py-20/py-28)
- [x] Contact: generous bottom (py-32/py-40, mt-20 on footer)
- [x] More space between job entries (space-y-12)
- [x] More space between testimonials (space-y-12)

### 7. Final polish
- [x] Verified by user

---

## Review

### Changes made

**globals.css**: Full OKLCH migration. All 30+ color values converted from hex to OKLCH with tinted neutrals (chroma 0.005-0.008 toward brand hue instead of pure gray). Warmer phosphor-green accent (hue 152 vs generic Material green). Amber-shifted yellow (hue 80). Added noise texture overlay class, link hover underline animation class. Scrollbar narrowed from 8px to 6px. Body line-height set to 1.7 for better readability on dark backgrounds.

**layout.tsx**: Added noise overlay div to body.

**Hero.tsx**: Display name scaled with `clamp(1.75rem, 5vw, 3rem)` and `tracking-[-0.04em]`. Expo easing curves `[0.16, 1, 0.3, 1]` throughout. Individual stagger on nav links. Radial green glow increased to 6%. Added vignette overlay. Scanline opacity bumped to 0.04.

**About.tsx**: Removed y-offset from animations (pure opacity fade). Heading uses `clamp()`. Added `link-hover` class to achievement links. Section padding increased to py-32/py-40 for breathing room after hero.

**Experience.tsx**: Slide-from-left animation (`x: -12`). Job entry spacing increased to `space-y-12`. Heading uses `clamp()`. Expo easing.

**Projects.tsx**: Scale-in animation (`scale: 0.97 → 1`). Card hover: border brightens + subtle green glow shadow. Tech tag hover: bg/border brighten. Added `link-hover` to links.

**OpenSource.tsx**: Fast cascade stagger (0.04s between items). PR badge hover enhancement.

**Writing.tsx**: Expo easing on animations. Tag hover enhancement. Added `link-hover` to links.

**Testimonials.tsx**: Added subtle left border on blockquotes (1px, not a banned accent stripe). Spacing increased to `space-y-12`. Added `link-hover` to names.

**Contact.tsx**: Scale-in animation on JSON card. Card hover border brightens. Section padding generous. Footer spacing increased. Added `link-hover` to links.

**Nav.tsx**: Active indicator uses Framer Motion `layoutId` for smooth animated slide between sections. Expo easing on entrance.

### Design decisions

- **Mono-only typography with extreme size contrast** rather than adding a second font family. The terminal identity is the brand; mixing in a sans-serif would dilute it. Hierarchy comes from `clamp()` scaling (1.75rem→3rem hero, 1.25rem→1.75rem h2) and weight contrast.
- **OKLCH with tinted neutrals** gives the dark background a subtle blue-green warmth instead of dead gray. The phosphor-green shift (hue 152) distinguishes from generic Material Design green.
- **Different animation per section** breaks the copy-paste feel: fade-only for About, slide-left for Experience, scale-in for Projects/Contact, fast cascade for OpenSource.
- **Noise texture** adds physical depth without visual clutter (3.5% opacity dark, 2% light).
