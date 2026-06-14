# Light Theme Fix Plan

## Problems Identified

The light theme has several issues where dark-specific hardcoded values break the visual experience:

1. **Hero phosphor glow** — hardcoded `oklch(0.75 0.19 152 / 0.09)` radial gradient and `oklch(0.13 0.006 250 / 0.6)` vignette look wrong on light backgrounds
2. **Scanlines** — green repeating-linear-gradient scanlines look jarring on a light/warm background
3. **AmbientGlow** — hardcoded `oklch(0.75 0.19 152 / 0.04)` doesn't adapt to light mode (too invisible or wrong tone)
4. **Section number watermarks** — `text-text-primary/[0.04]` opacity may be invisible on light bg or wrong contrast
5. **SectionHeading underline** — uses `bg-green/60` which is the dark-mode green; light mode green is different chroma
6. **About grid-paper dots** — `var(--accent-green)` at 0.03 opacity may vanish on light
7. **Experience timeline** — `bg-border-subtle` should adapt (this one likely works via CSS vars)
8. **Project card hover shadow** — hardcoded `oklch(0.75 0.19 152 / 0.08)` in box-shadow
9. **Contact floating particles** — `bg-green/20` may not be visible enough on light
10. **Noise overlay** — already handled (reduced to 0.02 in light), ✓
11. **ThemeToggle** — already adapts via CSS vars, ✓
12. **Nav** — uses CSS vars throughout, ✓

## Plan

### Task 1: Hero section light adaptation
- [ ] Replace hardcoded phosphor glow with CSS var-based or reduced opacity for light
- [ ] Replace hardcoded vignette color with CSS var
- [ ] Reduce or hide scanlines in light mode (they're a CRT dark-mode aesthetic)

### Task 2: AmbientGlow light adaptation  
- [ ] Use CSS var for the glow color instead of hardcoded OKLCH
- [ ] Reduce opacity further in light mode or change hue to work with warm bg

### Task 3: SectionHeading watermark contrast
- [ ] Adjust watermark opacity for light mode (0.04 is too faint on near-white)
- [ ] Verify underline color adapts correctly (it uses Tailwind `bg-green` which maps to the var)

### Task 4: Project card hover shadow
- [ ] Replace hardcoded OKLCH shadow with CSS var-based value

### Task 5: Contact particles visibility
- [ ] Verify particles are visible on light bg (bg-green/20 maps to light green at 20% opacity)

### Task 6: About grid dots
- [ ] Verify dots are visible in light mode (uses var, should adapt)

---

## Review
(To be filled after implementation)
