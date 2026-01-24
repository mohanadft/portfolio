# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 portfolio website for a backend engineer, featuring a terminal-themed design with Framer Motion animations. The site uses Next.js App Router, TypeScript, React 19, and Tailwind CSS 4.

## Development Commands

```bash
# Start development server (uses Turbo mode)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## Architecture

### Framework & Routing
- **Next.js 16 App Router**: Uses the `app/` directory pattern with file-based routing
- **Single-page application**: All sections are components on the home page (`src/app/page.tsx`)
- **Client-side rendering**: Most components use `"use client"` directive for Framer Motion animations

### Project Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata and font configuration
│   ├── page.tsx        # Main page that composes all sections
│   └── globals.css     # Global styles and Tailwind imports
└── components/
    ├── Hero.tsx        # Terminal-themed hero with typing animation
    ├── About.tsx       # About section
    ├── Projects.tsx    # Projects showcase
    ├── OpenSource.tsx  # Open source contributions
    ├── Writing.tsx     # Blog/writing section
    ├── Testimonials.tsx # Testimonials section
    └── Contact.tsx     # Contact information
```

### Styling Approach
- **Tailwind CSS 4**: Uses `@import "tailwindcss"` in globals.css (v4 syntax)
- **Dark terminal theme**: Black background with green/cyan terminal colors
- **Custom CSS properties**: Defined in `:root` and `@theme inline` for theming
- **Monospace fonts**: Geist Sans and Geist Mono from `next/font/google`
- **Responsive design**: Mobile-first with `md:` breakpoints

### Component Patterns
- **Animation pattern**: Most components use `useInView` hook from Framer Motion to trigger animations on scroll
- **Terminal aesthetic**: Components styled to look like terminal windows with command prompts (`$`), syntax highlighting, and monospace fonts
- **Section IDs**: Each section has an ID for hash-based navigation from Hero links (e.g., `#about`, `#projects`)

### TypeScript Configuration
- **Path alias**: `@/*` maps to `./src/*` for clean imports
- **Target**: ES2017
- **JSX**: Uses `react-jsx` transform (not preserve)
- **Strict mode**: Enabled

### Key Dependencies
- **framer-motion**: Handles all animations and scroll-based interactions
- **React 19**: Latest React version with new features
- **Tailwind CSS 4**: Latest major version with new import syntax
- **TypeScript 5**: For type safety

## Design Philosophy

The site follows a terminal/command-line interface theme throughout:
- All sections styled as terminal windows or command outputs
- Green/cyan color scheme reminiscent of classic terminals
- Typewriter effects and blinking cursors
- Command prompts and Unix-style navigation metaphors
- Scanline effects and CRT-style visual treatments

## Important Notes

- When adding new sections, follow the existing pattern: create a component in `src/components/`, import it in `page.tsx`, and add a corresponding link in Hero.tsx
- All components are client-side rendered due to Framer Motion - use `"use client"` directive
- The site uses hash-based navigation for sections (maintain `id` attributes)
- Animations are triggered once on scroll using `useInView` with `once: true`
- Package manager is **pnpm** (not npm or yarn)

## Guidelines for Working on This Codebase
1. First think through the problem, read the codebase for relevant files, and write a plan to tasks/todo.md.
2. The plan should have a list of todo items that you can check off as you complete them
3. Before you begin working, check in with me and I will verify the plan.
4. Then, begin working on the todo items, marking them as complete as you go.
5. Please every step of the way just give me a high level explanation of what changes you made
6. Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
7. Finally, add a review section to the todo.md file with a summary of the changes you made and any other relevant information.
8. DO NOT BE LAZY. NEVER BE LAZY. IF THERE IS A BUG FIND THE ROOT CAUSE AND FIX IT. NO TEMPORARY FIXES. YOU ARE A SENIOR DEVELOPER. NEVER BE LAZY
9. MAKE ALL FIXES AND CODE CHANGES AS SIMPLE AS HUMANLY POSSIBLE. THEY SHOULD ONLY IMPACT NECESSARY CODE RELEVANT TO THE TASK AND NOTHING ELSE. IT SHOULD IMPACT AS LITTLE CODE AS POSSIBLE. YOUR GOAL IS TO NOT INTRODUCE ANY BUGS. IT'S ALL ABOUT SIMPLICITY


CRITICAL: When debugging, you MUST trace through the ENTIRE code flow step by step. No assumptions. No shortcuts.
