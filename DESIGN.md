---
name: Mohanad Fteha Portfolio
description: A backend engineer's terminal-themed portfolio with phosphor warmth and structural precision.
colors:
  phosphor-green: "oklch(0.75 0.19 152)"
  signal-cyan: "oklch(0.78 0.11 195)"
  amber-glow: "oklch(0.82 0.155 80)"
  link-blue: "oklch(0.7 0.14 260)"
  pr-purple: "oklch(0.7 0.15 300)"
  error-red: "oklch(0.63 0.19 25)"
  deep-void: "oklch(0.13 0.006 250)"
  surface-dim: "oklch(0.16 0.006 250)"
  surface-mid: "oklch(0.19 0.008 260)"
  surface-raised: "oklch(0.22 0.008 260)"
  text-bright: "oklch(0.9 0.006 250)"
  text-mid: "oklch(0.68 0.006 250)"
  text-quiet: "oklch(0.52 0.008 160)"
  rule-line: "oklch(0.27 0.008 260)"
  rule-ghost: "oklch(0.21 0.008 260)"
typography:
  display:
    fontFamily: "Geist Mono, Courier New, monospace"
    fontSize: "clamp(1.75rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist Mono, Courier New, monospace"
    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist Mono, Courier New, monospace"
    fontSize: "clamp(1rem, 1.5vw, 1.125rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist Mono, Courier New, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Geist Mono, Courier New, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  sm: "4px"
  md: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section-tight: "80px"
  section-medium: "96px"
  section-generous: "128px"
components:
  terminal-window:
    backgroundColor: "{colors.surface-dim}"
    rounded: "{rounded.md}"
    padding: "24px 40px"
  terminal-titlebar:
    backgroundColor: "{colors.surface-mid}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  project-card:
    backgroundColor: "{colors.surface-dim}"
    rounded: "{rounded.md}"
    padding: "20px 24px"
  project-card-hover:
    backgroundColor: "{colors.surface-dim}"
  tech-tag:
    backgroundColor: "{colors.signal-cyan}"
    textColor: "{colors.signal-cyan}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  pr-badge:
    backgroundColor: "{colors.pr-purple}"
    textColor: "{colors.pr-purple}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  nav-bar:
    backgroundColor: "{colors.deep-void}"
    padding: "0 24px"
    height: "44px"
  nav-link:
    textColor: "{colors.text-quiet}"
    padding: "6px 10px"
    rounded: "{rounded.sm}"
  nav-link-active:
    textColor: "{colors.phosphor-green}"
    backgroundColor: "{colors.phosphor-green}"
---

# Design System: Mohanad Fteha Portfolio

## 1. Overview

**Creative North Star: "The Phosphor Terminal"**

A CRT monitor in a dim room. Warm phosphor green glows against deep, blue-tinted black. Scanlines pulse at the edge of perception. Every character is deliberate; every command produces a result. The monitor is the interface.

This system rejects generic dev portfolio templates (shadcn cards, "hire me" heroes, identical project grids), over-designed agency sites (gratuitous parallax, 3D blobs, style over substance), plain GitHub READMEs rendered as websites, and cookie-cutter terminal themes that all look the same. The terminal metaphor is an identity choice; it says "I live in the command line" without being gimmicky.

The design is mono-only with extreme hierarchy: a single family (Geist Mono) driven through dramatic size, weight, and tracking contrast. Color is a full palette with six named semantic roles. Layout varies between narrow centered content, narrow with asymmetric timeline gutter, and wide list sections.

**Key Characteristics:**
- Phosphor warmth: all neutrals tinted toward blue-green (chroma 0.005-0.008), never pure gray
- Structural precision: components feel like well-machined parts
- Atmospheric depth: noise texture + scanline overlay + radial glow create physical presence
- Varied animation: each section has its own entrance personality, unified by expo easing
- Selective restraint: bold where it matters (hero name at 3rem), quiet everywhere else

## 2. Colors

Warmer than standard terminal green, cooler than amber. Every neutral is tinted toward the brand hue; there is no pure gray in the system.

### Primary
- **Phosphor Green** (oklch(0.75 0.19 152)): The terminal's voice. Terminal commands, active states, nav indicators, timeline dots, the cursor blink. Warmer than Material green (hue 152 vs ~145), evoking real CRT phosphor P1.

### Secondary
- **Signal Cyan** (oklch(0.78 0.11 195)): Technical content: tech stack labels, chevron indicators, GPA highlights. Lower chroma than the green to stay subordinate.
- **Amber Glow** (oklch(0.82 0.155 80)): Section subheadings ("What I Do", "Tech Stack"), commit markers in project cards. Warm and amber, like a second phosphor type.

### Tertiary
- **Link Blue** (oklch(0.7 0.14 260)): All external links. Hover transitions to Signal Cyan.
- **PR Purple** (oklch(0.7 0.15 300)): Pull request badges in the OpenSource section. Isolated to one context.
- **Error Red** (oklch(0.63 0.19 25)): Terminal close button and the 404 error message. Nowhere else.

### Neutral
- **Deep Void** (oklch(0.13 0.006 250)): Primary background. Not pure black; tinted toward blue at chroma 0.006.
- **Surface Dim** (oklch(0.16 0.006 250)): Terminal body, card backgrounds, secondary surfaces.
- **Surface Mid** (oklch(0.19 0.008 260)): Terminal title bars, elevated surfaces.
- **Surface Raised** (oklch(0.22 0.008 260)): Highest elevation surfaces.
- **Text Bright** (oklch(0.9 0.006 250)): Primary text. Tinted, not white.
- **Text Mid** (oklch(0.68 0.006 250)): Secondary text, descriptions.
- **Text Quiet** (oklch(0.52 0.008 160)): Muted labels, command prompts, dates. Shifted toward green hue.
- **Rule Line** (oklch(0.27 0.008 260)): Visible borders on cards and terminal windows.
- **Rule Ghost** (oklch(0.21 0.008 260)): Subtle borders, section dividers, timeline line.

### Named Rules
**The No Pure Gray Rule.** Every neutral carries chroma 0.005-0.008 tinted toward the brand hue (250-260). Pure gray is dead; tinted neutrals are alive.

**The Semantic Color Rule.** Each accent has exactly one role. Green is commands. Cyan is technical content. Yellow is headings. Blue is links. Purple is PRs. Red is errors. No accent is used outside its role.

## 3. Typography

**Body/Display Font:** Geist Mono (with Courier New fallback)

**Character:** Mono-only with extreme hierarchy. The terminal identity is the brand; mixing in a sans-serif would dilute it. Hierarchy comes from dramatic size scaling (1.75rem → 3rem for display), weight contrast (400 → 700), and negative letter-spacing on display text. Light-on-dark body text gets generous line-height (1.7) because light type reads thinner.

### Hierarchy
- **Display** (700, clamp(1.75rem, 5vw, 3rem), line-height 1.1, tracking -0.04em): Hero name only. The largest text on the site.
- **Headline** (700, clamp(1.25rem, 2.5vw, 1.75rem), line-height 1.2, tracking -0.03em): Section headings (About, Experience, etc.).
- **Title** (600, clamp(1rem, 1.5vw, 1.125rem), line-height 1.3, tracking -0.02em): Job titles, project names, article titles.
- **Body** (400, 0.875rem, line-height 1.7, max 65ch): All running text. The generous line-height compensates for light-on-dark readability.
- **Label** (400, 0.75rem, line-height 1.4): Command prompts, dates, metadata, tag text, footer.

### Named Rules
**The Mono Commitment Rule.** One family for everything. Size and weight do the hierarchy work, not font switching. If it doesn't look different enough, make it bigger or bolder.

**The Breathing Room Rule.** Body line-height is 1.7, not 1.5. Light text on dark backgrounds needs more air. Cap body lines at 65ch.

## 4. Elevation

This system is flat by default. Depth is conveyed through tonal layering (Deep Void → Surface Dim → Surface Mid → Surface Raised), not shadows. The alternating section backgrounds (bg-primary / bg-secondary/30) create a subtle stacking rhythm without any shadow.

The one exception: project cards gain a diffuse green glow on hover (`0 0 24px -8px oklch(0.75 0.19 152 / 0.08)`). This is a phosphor effect, not a structural shadow.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. The only shadow in the system is the project card hover glow, and it exists because it reinforces the phosphor metaphor, not because cards need "elevation."

## 5. Components

Precise and structural. Components feel like well-machined parts: exact spacing, clean borders, no unnecessary ornament.

### Terminal Window
The signature component. Title bar with three colored dots (red/yellow/green) and a "bash" label, followed by the body panel.
- **Title Bar:** Surface Mid background, Rule Line border, rounded top (8px)
- **Body:** Surface Dim background, Rule Line borders (sides + bottom), rounded bottom (8px), padding 24px-40px
- **States:** Static; no hover or interaction

### Project Card
- **Shape:** Slightly rounded (8px)
- **Background:** Surface Dim at 60% opacity
- **Border:** Rule Ghost default, transitions to Rule Line on hover
- **Hover:** Border brightens + diffuse Phosphor Green glow shadow
- **Internal padding:** 20px-24px

### Tech Tags
- **Style:** Signal Cyan text, Cyan at 5% opacity background, Cyan at 10% border
- **Hover:** Background brightens to 10%, border to 20%
- **Shape:** Slightly rounded (4px), tight padding (2px 8px)

### PR Badges
- **Style:** PR Purple text, Purple at 8% opacity background
- **Hover:** Background brightens to 15%
- **Shape:** Slightly rounded (4px), tight padding (2px 6px)

### Navigation
- **Desktop:** Fixed top bar, Deep Void at 90% opacity with backdrop blur. Geist Mono at label size. Active section gets Phosphor Green text with an animated background pill (spring: stiffness 500, damping 35).
- **Mobile:** Collapsed hamburger. Active section shown as breadcrumb path (`mohanadft ~/experience`). Menu expands as an animated dropdown.

### Links
All links use Link Blue, transition to Signal Cyan on hover. External links carry a sliding underline effect (scaleX 0 → 1, transform-origin left, 0.3s expo ease).

## 6. Do's and Don'ts

### Do:
- **Do** use OKLCH for all color values. The system is OKLCH-native; hex is never the source of truth.
- **Do** tint every neutral toward the brand hue at chroma 0.005-0.008. No pure gray, no pure black, no pure white.
- **Do** vary animation per section (fade, slide-left, scale-in, cascade). Same entrance on every section is copy-paste monotony.
- **Do** use the expo easing curve `cubic-bezier(0.16, 1, 0.3, 1)` for all transitions. No bounce, no elastic.
- **Do** respect `prefers-reduced-motion` by disabling all animation.
- **Do** keep body text at max 65ch line length and 1.7 line-height.
- **Do** vary section padding for rhythm: generous after the hero, tighter for dense data sections.

### Don't:
- **Don't** use generic dev portfolio templates with shadcn cards, "hire me" hero text, or identical project grids.
- **Don't** add gratuitous parallax, 3D blobs, or style-over-substance effects.
- **Don't** use cookie-cutter terminal green (#00ff00 or Material green) without the phosphor warmth shift.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on any element.
- **Don't** use gradient text (`background-clip: text` + gradient).
- **Don't** use glassmorphism as a default surface treatment.
- **Don't** animate CSS layout properties (width, height, padding, margin). Use transform and opacity.
- **Don't** add a second font family. The mono commitment is deliberate; mixing in a sans-serif dilutes the terminal identity.
- **Don't** use em dashes in any copy. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** make every section the same width. The system uses three widths (narrow, narrow+gutter, wide) for layout rhythm.
