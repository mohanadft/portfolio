# UI System Overhaul Plan

## Audit Summary

**Audit Health Score: 12/20 (Acceptable - significant work needed)**

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 2/4 | text-muted fails WCAG AA (4.34:1), no reduced-motion, missing semantic HTML |
| 2 | Performance | 3/4 | Good overall, but no lazy loading or will-change hints |
| 3 | Responsive Design | 2/4 | Works on mobile but touch targets too small, no sticky nav |
| 4 | Theming | 3/4 | Good token system, minor gaps |
| 5 | Anti-Patterns | 2/4 | Side-stripe borders (banned), identical card layout across all sections, flat visual hierarchy |

### Key Problems

1. **Visual monotony**: Every section is the same box (border + bg-secondary/50 + rounded-lg + p-6 md:p-8). No rhythm, no hierarchy.
2. **Side-stripe borders** (impeccable absolute ban): `border-l-2` used as accent on Projects, OpenSource, Writing, Testimonials.
3. **No navigation**: No way to orient yourself on a long scroll page. No sticky nav, no scroll indicator.
4. **Flat animation**: Every section uses identical `opacity: 0, y: 30` entrance. No variety, no delight.
5. **Accessibility gaps**: text-muted contrast fails AA for body text, no `prefers-reduced-motion`, missing heading hierarchy (no h1/h2), missing landmarks.
6. **Missing DESIGN.md**: No documented design system for consistency.

### What's Working Well

- Token system in globals.css is solid (CSS variables + Tailwind @theme inline)
- Theme toggle with localStorage persistence + flash prevention
- Terminal concept is a genuine identity choice, not decoration
- Color palette has good variety (green, cyan, yellow, blue, purple)

---

## Todo Items

### Phase 1: Design System Foundation
- [ ] Fix text-muted contrast to meet WCAG AA (bump to ~gray-400 range for 4.5:1+)
- [ ] Add `prefers-reduced-motion` media query support in globals.css
- [ ] Create DESIGN.md via `/impeccable document` to codify the visual system
- [ ] Add spacing scale documentation to design tokens

### Phase 2: Semantic HTML & Accessibility
- [ ] Add proper heading hierarchy: h1 in Hero (name), h2 per section, h3 for subsections
- [ ] Add `<nav>` landmark for section links in Hero
- [ ] Add `<main>` landmark (already exists), verify `<section>` elements have labels
- [ ] Add aria-labels to icon-only buttons (ThemeToggle already has one - verify)
- [ ] Add `role` and `aria-label` to interactive elements missing them

### Phase 3: Navigation
- [ ] Add a minimal sticky nav bar that appears on scroll (past Hero)
- [ ] Show current section indicator (active state based on scroll position)
- [ ] Keep it terminal-themed but subtle (not a full header, just a thin bar)

### Phase 4: Break Visual Monotony
- [ ] Vary section layouts - not every section should be the same bordered card
  - Hero: keep as terminal window (it's the strongest section)
  - About: remove the card wrapper, let it breathe as open content
  - Projects: use a different layout (grid or alternating layout, not bordered cards)
  - OpenSource: compact table/list format instead of card-in-card
  - Testimonials: pull quotes with different visual treatment
  - Contact: keep JSON format but make it feel like a different terminal session
- [ ] Remove all `border-l-2` side-stripe accents (banned pattern)
- [ ] Replace with: background tints, leading icons, numbered lists, or plain indentation
- [ ] Vary section spacing (not uniform py-20 px-6 everywhere)

### Phase 5: Animation Variety
- [ ] Differentiate entrance animations per section type:
  - Hero: keep current typewriter (strong)
  - About: subtle fade without y-offset
  - Projects: stagger from different directions or scale
  - Stats/numbers: count-up animation for PR counts, problems solved
  - Contact: character-by-character JSON reveal
- [ ] Add micro-interactions beyond hover:opacity-80:
  - Links: underline slide-in on hover
  - Tech badges: subtle scale on hover
  - Navigation links: smooth highlight transition
- [ ] Respect `prefers-reduced-motion`: disable all motion when set

### Phase 6: Typography & Visual Hierarchy
- [ ] Add scale contrast between section headings and body (right now everything is text-sm/text-base)
- [ ] Use weight contrast within the mono family (Geist Mono has multiple weights)
- [ ] Add fluid type scaling with clamp() for headings
- [ ] Tighten letter-spacing on larger text for sharper feel

### Phase 7: Polish & Testing
- [ ] Test dark mode appearance
- [ ] Test light mode appearance and contrast
- [ ] Test responsive behavior on mobile (320px, 375px, 768px, 1024px)
- [ ] Verify touch targets are >= 44x44px
- [ ] Run Lighthouse accessibility audit
- [ ] Final visual review

---

## Design Direction

**Reference**: Stripe engineering blog - technical depth with editorial polish.

**Color strategy**: Restrained with selective commitment. The green accent carries the terminal identity; use it deliberately, not everywhere. Other colors (cyan, yellow, blue, purple) serve specific semantic roles (links, warnings, categories).

**The goal**: Evolve from "student built a terminal theme" to "a backend engineer's personal brand, expressed through a terminal metaphor with the polish of a Stripe-quality page."

---

## Review
*(to be filled after implementation)*
