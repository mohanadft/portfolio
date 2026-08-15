# Portfolio v2 redesign — implementation plan

Source of truth: Claude Design project "Portfolio component recreation"
(`design_handoff_portfolio_v2/README.md` + `Portfolio v2.dc.html`).
Editorial/typographic direction replacing the CRT terminal theme. Single
page, six numbered sections + hero, one accent color (`--acid`), no
theme/phosphor toggles, no ambient terminal effects.

## Todo

- [ ] 1. `globals.css` — replace CRT token set with new tokens (`--ink`,
      `--ink-deep`, `--bone`, `--bone-dim`, `--muted`, `--rule`, `--acid`);
      drop dark/light + phosphor variants, CRT keyframes/classes
      (scanline, watermark-pulse, hero-glow/vignette, link-glitch,
      cursor-decay, noise-overlay, pulse-border, tint-cool/warm); keep
      `prefers-reduced-motion` block, smooth scroll, `::selection`/
      `:focus-visible` (updated to new tokens).
- [ ] 2. `layout.tsx` — swap `Geist_Mono` for Space Grotesk + IBM Plex
      Mono via `next/font/google`; remove theme/phosphor init script and
      `data-theme`/`data-phosphor` attrs; remove `noise-overlay` div;
      update metadata copy if needed to match new voice.
- [ ] 3. New `SectionRail.tsx` (replaces `Nav.tsx`) — fixed left rail,
      6 numerals, `IntersectionObserver` active-section tracking.
- [ ] 4. Rewrite `Hero.tsx` — grid layout, meta bar, big name, statement,
      bottom nav row, photo column with hover-reveal color filter.
- [ ] 5. Rewrite `About.tsx` — sticky left column + stack table (data as
      typed constant).
- [ ] 6. New `Work.tsx` (replaces `Experience.tsx`) — indexed job log,
      no bullets. Job copy unchanged from current `Experience.tsx`.
- [ ] 7. Rewrite `Projects.tsx` — accordion (index 0 open by default,
      click-to-close), 3-column body.
- [ ] 8. Rewrite `OpenSource.tsx` — big "10" + contributions table with
      PR chip links.
- [ ] 9. New `Words.tsx` (replaces `Testimonials.tsx`) — wall layout,
      inverted acid plate for Wasim Juned's quote.
- [ ] 10. Rewrite `Contact.tsx` — statement, large mailto link, copy
       button, social row, colophon.
- [ ] 11. Delete: `BootSequence.tsx`, `AmbientGlow.tsx`,
       `PhosphorToggle.tsx`, `ThemeToggle.tsx`, `TerminalWindow.tsx`,
       `ScrollProgress.tsx`, `Nav.tsx`, `SectionHeading.tsx`,
       `src/lib/session.ts`, `src/lib/motion.ts` (all unused once the
       above lands — recheck before deleting).
- [ ] 12. `page.tsx` — compose new component set.
- [ ] 13. Responsive pass (first cut — README flags this as undesigned,
       so keep it simple: single column stacking, sticky columns
       dropped, accordion max-height raised) — flag for your review
       separately since it's explicitly not signed off in the design.
- [ ] 14. `pnpm lint` + `pnpm build`, then visual check in dev server
       against the Claude Design reference at desktop width.

## Review

All sections implemented and building clean (`pnpm lint`, `pnpm build`).

**Tokens & type.** `globals.css` reduced from ~380 lines to ~130 — the
whole CRT token system (dual themes, phosphor variants, 8 keyframe
animations, glow/vignette/noise/glitch classes) is gone, replaced by
seven flat tokens. Fonts swapped to Space Grotesk + IBM Plex Mono.
Kept: reduced-motion block, smooth scroll, skip link, `sr-only`.
Added one shared `.eyebrow` class since the section label repeats
seven times.

**Components.** New: `SectionRail`, `Work`, `Words`, `src/lib/sections.ts`
(shared between the rail and the hero nav so the six sections are
declared once). Rewritten: `Hero`, `About`, `Projects`, `OpenSource`,
`Contact`, `not-found`. Deleted: `BootSequence`, `AmbientGlow`,
`PhosphorToggle`, `ThemeToggle`, `TerminalWindow`, `ScrollProgress`,
`Nav`, `SectionHeading`, `Experience`, `Testimonials`,
`src/lib/session.ts`, `src/lib/motion.ts`.

**framer-motion removed** as a dependency — the new design uses only
CSS transitions, so nothing imported it.

**Deviations from the handoff, and why:**
- Projects accordion uses a `grid-template-rows: 1fr/0fr` transition
  rather than the specified `max-height: 26rem`. Same animation, but
  it can't clip long content and needs no magic height at mobile
  widths — the README flagged the fixed height as a mobile problem.
- The accordion row is a `<button>` rather than a clickable `<div>`,
  with `aria-expanded`/`aria-controls`, so it's keyboard-operable.
- `Contact`'s clipboard write is wrapped in try/catch; the `mailto:`
  link is the fallback when the clipboard API is unavailable.
- Hero photo uses `next/image` with `fill` (README asked for
  `next/image`); the hover filter swap is a `group-hover` class rather
  than the design file's `--photo-filter` custom property.

**Additions beyond the handoff (your calls this session):**
- Acid plate on the hero photo reading "Still looking forward." —
  slides in from the left on hover, no fade.
- "What people I've worked with say ↓" link under the hero statement,
  pointing at section 05.
- New favicon. Both old icons were wrong: `public/favicon.svg` was the
  green `>_` terminal prompt, and `src/app/favicon.ico` was still the
  stock create-next-app triangle (Next auto-serves that path, so the
  boilerplate icon was the one browsers showed). Replaced both with an
  ink "M" on a solid acid field, drawn as a path rather than a `<text>`
  element so it doesn't depend on the viewer having Space Grotesk. The
  `.ico` is regenerated from the same SVG at 16/32/48.

**Not done — needs your direction:**
- Responsive/mobile is a first pass only (single-column stacking,
  sticky columns dropped, rail hidden below `lg`). The handoff
  explicitly says breakpoint behaviour was never designed.
- Garfield Liddon still has no title or LinkedIn URL; his attribution
  reads "30 years in the concrete business", pulled from his own quote.

## Notes

- No Framer Motion in the new design — README doesn't call for
  scroll-reveal animation, only CSS transitions (color, accordion
  max-height, photo filter). Not reintroducing motion for its own sake.
- `photo.jpg` and `favicon.svg` already exist in `public/` — no asset
  changes needed.
- Copy for hero/about/projects/contact is taken verbatim from
  `Portfolio v2.dc.html`; Work section keeps the original résumé
  wording from `Experience.tsx`; testimonials stay verbatim.
