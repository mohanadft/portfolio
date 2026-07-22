# Portfolio — Step 1: Console chrome + Amber/Green phosphor toggle

Direction chosen by Mohanad after a 4-agent brainstorm on differentiating the terminal
portfolio from the genre's defaults:
- **Structure:** "Just step 1" — add persistent console chrome (top identity bar + bottom
  status bar) carrying recruiter-critical facts always on screen. Points toward the
  larger "Control Plane" direction without committing to a rebuild.
- **Palette:** Amber/green "monitor" phosphor toggle as an ownable signature flourish.

Guiding rule (dual-legibility): anything a recruiter needs is rendered text on load;
anything an engineer enjoys stays optional interaction.

## Todo

- [x] 1. Persistent top identity bar (`Nav.tsx`): always-visible `Mohanad Fteha · Backend &
      Infra Engineer`; transparent at scroll-top, gains backdrop/border on scroll; section
      links fade in on scroll; right padding reserved for the floating toggles.
- [x] 2. Enhanced bottom status bar (`Nav.tsx`): `● Open to work` (pulsing dot) + `Gaza,
      Palestine` on the left; active section + scroll % kept on the right; no longer
      `aria-hidden` since it now carries meaningful info.
- [x] 3. Amber/green phosphor toggle: `data-phosphor` attribute + pre-hydration script in
      `layout.tsx`; amber token overrides (dark + light) in `globals.css`; new
      `PhosphorToggle.tsx` mirroring `ThemeToggle.tsx`'s docking behavior; hardcoded green
      keyframe literal converted to `var(--accent-green)` so it follows the toggle.
- [x] 4. a11y fix: darkened light-theme `--text-muted` from ~4.0:1 to ~4.6:1 contrast.
- [x] 5. `pnpm build` passes clean. Verified all 4 combinations (dark/light ×
      green/amber) in-browser, plus mobile viewport (390px) — no collisions, toggle
      docking works, status bar wraps correctly.

## Review

**What changed:**
- `src/components/Nav.tsx` — top nav is now always rendered (was gated behind a scroll
  threshold with an `AnimatePresence` mount/unmount). It shows the identity always, and
  reveals section links via an opacity transition on scroll instead of sliding the whole
  bar in. The bottom status bar gained real content (availability + location) instead of
  being purely decorative/`aria-hidden`.
- `src/app/globals.css` — added `[data-phosphor="amber"]` overrides for both themes,
  a `.status-dot` pulse utility, and fixed one a11y contrast issue in the light theme.
- `src/app/layout.tsx` — added a second pre-hydration script (mirroring the existing theme
  one) so the phosphor choice applies before first paint, no flash.
- `src/components/PhosphorToggle.tsx` (new) — same structure/docking as `ThemeToggle.tsx`.
- `src/app/page.tsx` — mounts `PhosphorToggle`.

**Scope discipline:** touched only what the plan called for. Did not fix the pre-existing
`react-hooks/set-state-in-effect` lint error in `ThemeToggle.tsx` (and now mirrored in
`PhosphorToggle.tsx`) — confirmed via `git stash` that it already fails on `main` before
any of these changes, so it's out of scope for this change.

**One snag during verification:** a stale `next dev` process from earlier in the session
was serving an old build and didn't pick up the CSS changes via HMR. Killed it, cleared
`.next`, and restarted — not a bug in the change itself, just a leftover dev-server issue.

**Not done (deliberately, per the chosen scope):** the mini-osb reconciliation hero, the
`:` command palette, and the resource-meter rail from the fuller "Control Plane" direction
— those are documented as sequenced next steps in `~/.claude/plans/greedy-bubbling-reddy.md`
if Mohanad wants to keep going.
