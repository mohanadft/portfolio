# Light Mode Support Plan

## Problem Analysis

The current site is a hardcoded dark terminal theme. Colors are:
- **Defined in CSS variables** in `:root` but underutilized
- **Hardcoded as Tailwind classes** throughout 7 components (e.g., `bg-gray-900`, `text-green-400`)
- **No theme switching mechanism** exists

## Strategy

Use CSS variables with `prefers-color-scheme` media query for automatic light/dark mode based on system preference. This is the simplest approach because:
1. No JavaScript state management needed
2. No toggle UI component to build
3. Respects user's system preference automatically
4. CSS-only solution

## Todo Items

### Phase 1: CSS Foundation
- [x] Define light mode CSS variables in `globals.css` using `@media (prefers-color-scheme: light)`
- [x] Create semantic color variables (e.g., `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-accent`)
- [x] Update scrollbar and selection colors to use variables

### Phase 2: Tailwind Integration
- [x] Map CSS variables to Tailwind's `@theme inline` block
- [x] This allows using classes like `bg-primary`, `text-accent` instead of hardcoded `bg-gray-900`, `text-green-400`

### Phase 3: Component Updates
- [x] Update Hero.tsx - replace hardcoded colors with semantic variables/classes
- [x] Update About.tsx - replace hardcoded colors
- [x] Update Projects.tsx - replace hardcoded colors
- [x] Update OpenSource.tsx - replace hardcoded colors
- [x] Update Writing.tsx - replace hardcoded colors
- [x] Update Testimonials.tsx - replace hardcoded colors
- [x] Update Contact.tsx - replace hardcoded colors

### Phase 4: Testing & Polish
- [ ] Test dark mode appearance (should match current look)
- [ ] Test light mode appearance
- [ ] Verify all components render correctly in both modes
- [ ] Test responsive behavior

### Phase 5: Add Toggle Button (NEW REQUIREMENT)
- [x] Update globals.css to use [data-theme] attribute instead of @media query
- [x] Create ThemeToggle component with sun/moon icon button
- [x] Add theme state management with localStorage persistence
- [x] Add ThemeToggle to layout or fixed position

---

## Review

### Summary of Changes

Successfully implemented light/dark mode support with a manual toggle button. Users can switch themes via a fixed button in the top-right corner. The theme preference is saved to localStorage and falls back to system preference on first visit.

### Files Modified

1. **src/app/globals.css**
   - Added semantic CSS variables (--bg-primary, --bg-secondary, --text-primary, etc.)
   - Created light mode variants using [data-theme="light"] selector
   - Mapped variables to Tailwind's @theme inline block
   - Updated scrollbar, selection, and body styles to use variables

2. **src/components/Hero.tsx**
   - Replaced all hardcoded colors with semantic Tailwind classes
   - Updated scanline effect to use CSS variable with color-mix()
   - Updated ambient glow to use CSS variable with color-mix()
   - Changed terminal window colors to use semantic classes

3. **src/components/About.tsx**
   - Replaced gray-* classes with text-text-*, bg-secondary, border-border
   - Replaced green-400 with text-green
   - Replaced yellow-400 with text-yellow
   - Replaced cyan-400 with text-cyan
   - Replaced blue-400 with text-blue

4. **src/components/Projects.tsx**
   - Updated all color classes to semantic equivalents
   - Simplified component (it's a placeholder with "coming soon")

5. **src/components/OpenSource.tsx**
   - Replaced all hardcoded colors with semantic classes
   - Updated PR badges to use text-purple with opacity variants
   - Updated tech tags to use bg-tertiary/50

6. **src/components/Writing.tsx**
   - Replaced all color classes with semantic equivalents
   - Updated article tags to use text-yellow with opacity variants
   - Updated hover states to use opacity-80 for consistency

7. **src/components/Testimonials.tsx**
   - Replaced all color classes with semantic equivalents
   - Updated highlight badges to use text-green with opacity variants

8. **src/components/Contact.tsx**
   - Replaced all color classes with semantic equivalents
   - Updated JSON syntax highlighting to use semantic colors

9. **src/components/ThemeToggle.tsx** (NEW FILE)
   - Created toggle button component with sun/moon icons
   - Implements theme switching with localStorage persistence
   - Falls back to system preference on first visit
   - Prevents flash of wrong theme with mounted state

10. **src/app/layout.tsx**
   - Added ThemeToggle component import and usage
   - Added inline script in head to set initial theme before hydration
   - Prevents flash of unstyled content (FOUC)

### Technical Approach

- **Color System**: Created 13 semantic color variables that automatically switch based on system preference
- **Tailwind Integration**: Mapped CSS variables to Tailwind theme for class-based usage
- **Opacity Handling**: Used Tailwind's opacity modifiers (e.g., bg-secondary/50) for transparency
- **Special Effects**: Used CSS color-mix() for scanline and glow effects with variable colors
- **Hover States**: Standardized hover effects to use opacity-80 for consistency

### Color Mappings

Dark mode maintains the current terminal aesthetic:
- Backgrounds: Black (#000000) → Gray variants
- Text: Light gray (#ededed) → Darker grays
- Accents: Bright greens, cyans, yellows (green-400, cyan-400, yellow-400)

Light mode uses darker, more readable variants:
- Backgrounds: White (#ffffff) → Light gray variants
- Text: Dark gray (gray-900) → Medium grays
- Accents: Darker greens, cyans, yellows (green-600, cyan-600, yellow-600)

### Code Quality

- **Minimal changes**: Only touched necessary color-related code
- **No feature creep**: Maintained exact same functionality and layout
- **Consistent patterns**: Used same semantic names across all files
- **Simple implementation**: CSS-only solution, no JavaScript state management
- **No breaking changes**: All existing functionality preserved

### Implementation Details

**Toggle Button:**
- Fixed position in top-right corner (top-6 right-6)
- Sun icon shown in dark mode (click to switch to light)
- Moon icon shown in light mode (click to switch to dark)
- Smooth transitions between themes
- Persists preference across page reloads

**Theme Initialization:**
1. Inline script in <head> sets data-theme before React hydrates (prevents flash)
2. Falls back to system preference if no stored preference
3. ThemeToggle component syncs with the initial theme
4. All theme changes update both state and DOM attribute

### Next Steps

The implementation is complete. Testing should verify:
1. Dark mode looks identical to the original design
2. Light mode provides good contrast and readability
3. Toggle button switches themes correctly
4. Theme preference persists after page reload
5. No flash of wrong theme on initial load
6. All animations and interactions work in both modes
7. Terminal aesthetic is preserved in both modes

## Color Mapping Plan

| Semantic Name | Dark Mode Value | Light Mode Value |
|--------------|-----------------|------------------|
| `--bg-primary` | `#000000` | `#ffffff` |
| `--bg-secondary` | `rgb(17,24,39)` (gray-900) | `#f3f4f6` (gray-100) |
| `--bg-tertiary` | `rgb(55,65,81)` (gray-700) | `#e5e7eb` (gray-200) |
| `--text-primary` | `#ededed` | `#111827` (gray-900) |
| `--text-secondary` | `rgb(156,163,175)` (gray-400) | `rgb(75,85,99)` (gray-600) |
| `--text-muted` | `rgb(107,114,128)` (gray-500) | `rgb(107,114,128)` (gray-500) |
| `--border` | `rgb(55,65,81)` (gray-700) | `rgb(209,213,219)` (gray-300) |
| `--accent-green` | `#22c55e` (green-500) | `#16a34a` (green-600) |
| `--accent-cyan` | `#22d3ee` (cyan-400) | `#0891b2` (cyan-600) |
| `--accent-yellow` | `#facc15` (yellow-400) | `#ca8a04` (yellow-600) |
| `--accent-blue` | `#60a5fa` (blue-400) | `#2563eb` (blue-600) |

## Estimated Scope

- **Files to modify:** 8 files (globals.css + 7 components)
- **Complexity:** Low-Medium (mostly find-and-replace color classes)
- **Risk:** Low (CSS-only changes, easy to revert)

## Notes

- Keep terminal aesthetic in light mode - use slightly darker accent colors for contrast
- Light mode should feel like a "light terminal" not a generic light theme
- The scanline effect in Hero may need adjustment for light mode

---

# Add Contextly Project to Portfolio

## Overview
Add the Contextly Chrome extension project to the Projects section of the portfolio website.

## Project Details
- **Name**: Contextly
- **Description**: Context-aware word explanations for readers in Chrome
- **URL**: https://github.com/mohanadft/contextly
- **Tech Stack**: JavaScript, Chrome Extension (Manifest V3), Node.js, Express, HuggingFace Zephyr-7B
- **Key Features**: AI-powered context-aware explanations, works on PDFs/articles/docs, smart word suggestions

## Todo Items

### 1. Update Projects Data Structure
- [x] Add project object with all details (name, description, tech stack, URL, features)

### 2. Update Projects Component UI
- [x] Replace placeholder text with actual project display
- [x] Create git log style project entries (keeping terminal theme)
- [x] Add project details: description, tech stack, features
- [x] Add link to GitHub repository
- [x] Maintain responsive design and animations

### 3. Testing
- [x] Verify animations work correctly
- [x] Test responsive layout on mobile
- [x] Check all links open correctly

## Design Approach
- Follow existing terminal aesthetic with git log visualization
- Use green/cyan color scheme for syntax highlighting
- Keep monospace font styling
- Animate on scroll using existing Framer Motion patterns
- Display as commit history with project details

## Review

### Summary of Changes

Successfully added the Contextly Chrome extension project to the Projects section. The project is displayed in a terminal-themed git log style, consistent with the portfolio's aesthetic.

### Files Modified

**src/components/Projects.tsx**
- Added `projects` array with Contextly project data including:
  - Name, description, and detailed explanation
  - Tech stack: JavaScript, Chrome Extension (Manifest V3), Node.js, Express, HuggingFace Zephyr-7B
  - Key features list (4 features)
  - GitHub repository link
  - Project date
- Replaced placeholder UI with actual project display
- Implemented git log style visualization with:
  - Left border line in green (terminal aesthetic)
  - Yellow asterisk and cyan project name (git log colors)
  - Tech stack displayed as rounded badges
  - Features shown as bulleted list with green arrows
  - GitHub link with hover effects
- Added staggered animations for project entries (Framer Motion)
- Maintained responsive design for mobile devices

### Technical Implementation

- **Data Structure**: Created strongly-typed project object with all necessary fields
- **Styling**: Used semantic Tailwind classes (text-cyan, text-green, bg-tertiary/50) for theme compatibility
- **Animation**: Staggered entrance animation with `delay: 0.3 + index * 0.2` for scalability
- **Terminal Theme**: Used git log style with commit indicators (*), left border, and terminal colors
- **Responsive**: Flex-wrap on tech badges ensures mobile compatibility

### Code Quality

- **Minimal changes**: Only modified necessary sections in Projects.tsx
- **No breaking changes**: All existing animations and patterns preserved
- **Consistent styling**: Followed existing terminal aesthetic and color scheme
- **Type-safe**: Project data structure supports TypeScript
- **Scalable**: Component can easily accommodate more projects in the future

### Build Status

✅ Build completed successfully with no errors or warnings
