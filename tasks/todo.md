# Portfolio v3: "next level" plan

Goal: more interviews from recruiters and hiring managers who scan the site for
30–90s. Make the design richer by showing backend work (direction A, "Request
Path"), not by adding decoration. The v2 plan this file replaced is in git history.

Sources: a code audit (build, lint, Playwright, Lighthouse), recruiter/backend
portfolio research, and design research. Lighthouse mobile today: Perf 48,
A11y 98, Best Practices 100, SEO 100 (LCP 12.3s, caused by the photo).

Each phase is one small PR. Every phase ends with `pnpm lint` + `pnpm build`
passing, plus a visual check.

## Blocked on owner input
- [ ] Correct LinkedIn URL: `/in/mohanadft` or `/in/mohanad-fteha`?
- [ ] Résumé PDF (ATS-parsable, same facts as the site)
- [ ] Real numbers for Work and Projects (latency, cost, throughput, test coverage)
- [ ] Explanation of the "three years" claim vs ~14 months of listed roles, and the Sep 2025–now gap
- [ ] Working hours/timezone, engagement type, and a payment route you have actually tested
- [ ] Accurate architecture of mini-osb, Contextly, and the Yaffa Lambda authorizer (for diagrams)
- [ ] Rust: evidence to add, or drop it from "core"?

## Phase 1: Fix what's broken (no design change)
- [ ] 1.1 `globals.css`: wrap the `a` / `a:hover` / `.eyebrow` rules in `@layer base`. Unlayered rules currently
      override Tailwind colors: the rail's active state never shows, and the Wasim link turns invisible on hover.
      Same PR: change the rail numerals from `text-rule` (1.42:1) to `text-muted`.
- [ ] 1.2 `public/photo.jpg`: re-export ~800px wide as WebP, **strip the EXIF GPS location** (currently public),
      shrink 1.6 MB to under 100 KB. This fixes the 12.3s LCP.
- [ ] 1.3 LinkedIn URL: one shared constant used by `Contact.tsx` and the JSON-LD in `layout.tsx`
- [ ] 1.4 `Projects.tsx`: `inert={!isOpen}` on the collapsed panel (focus currently lands on hidden links)
- [ ] 1.5 `Words.tsx`: visible focus ring on the acid card link
- [ ] 1.6 Headings: section eyebrows become `<h2>`; no `<h3>` inside `<button>` in Projects
- [ ] 1.7 404 page: its own title; skip link targets `#main`, not `#about`
- [ ] 1.8 Small items: `aria-live` on the Copy button, unique nav labels, drop the unused Plex 500 weight,
      fixed sitemap date, add `pnpm lint` to CI

## Phase 2: Recruiter conversion (content)
- [ ] 2.1 Hero: plain summary line visible at 0ms
      (role · years · stack · Gaza, UTC+2/+3 · open to remote) + Résumé button
- [ ] 2.2 Résumé PDF in `public/`, linked from the hero and Contact
- [ ] 2.3 Static 1200×630 OG image and `og:image`/`twitter:image` metadata (LinkedIn previews)
- [ ] 2.4 "Working with me remotely" block in Contact: overlap hours, engagement type, tested payment route
- [ ] 2.5 Work bullets rewritten as outcomes with numbers; fix the years claim
- [ ] 2.6 Testimonials: give Garfield Liddon a role/company; check the "Qwikx" label; link each PR
- [ ] 2.7 Privacy-friendly analytics (GoatCounter or Cloudflare Web Analytics)

## Phase 3: Rich design, direction A "Request Path"
Hard rules: final state readable without JS; hero text never delayed; at most one
looping animation on screen; loops pause offscreen; a `matchMedia` reduced-motion
gate for all JS motion; every diagram is `<svg role="img">` with a text
alternative; vertical diagram layouts on mobile.
- [ ] 3.0 Pick one animation library (GSAP + ScrollTrigger/DrawSVG, or Motion `useAnimate`) and add a shared reduced-motion hook
- [ ] 3.1 Projects become case studies: problem, animated architecture diagram, 2–3 decisions with alternatives rejected, numbers, what broke
- [ ] 3.2 Work: before→after metric bars drawn on scroll
- [ ] 3.3 Hero: small live request-path diagram (acid packets) beside the lede
- [ ] 3.4 Open Source: count-up plus a merge graph across the repos
- [ ] 3.5 Contact: `200 OK` terminus; Copy button shows `201 Created`
- [ ] 3.6 From direction C, only: hover-dimming on project rows, View Transition on the accordion
- [ ] 3.7 Re-run Lighthouse; Performance must not drop below the Phase 1 result

## Phase 4: Docs and writing
- [ ] 4.1 Rewrite stale `CLAUDE.md`, `DESIGN.md`, `PRODUCT.md`, `.impeccable/design.json`, `README.md` to match the real code
- [ ] 4.2 (Optional, highest long-term value) one deep technical post, e.g.
      "Building an Open Service Broker: async provisioning and idempotency"

## Review
_To be filled in after implementation._
