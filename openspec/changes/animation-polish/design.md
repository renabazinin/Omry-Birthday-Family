## Context

The birthday invitation for Omry (turning 4) is a single-page HTML/CSS/JS site with a Spidey-themed banner image at the top. It's consumed primarily as a GIF/MP4 captured via Puppeteer — not interactive. The current animations (entrance choreography, confetti, floating balloons) work but lack a narrative arc and don't connect the Spidey banner to the rest of the page.

The codebase is simple: `index.html`, `styles.css`, `script.js`. No build tools, no frameworks. Animations are a mix of CSS keyframes (entrance, balloons, glow) and JS-driven DOM manipulation (confetti particles).

## Goals / Non-Goals

**Goals:**
- Create a clear animation story arc: land → connect → reveal → celebrate
- Make the Spidey banner feel thematic (bounce landing, web lines)
- Make the age badge "4" the focal moment with a starburst effect
- Improve confetti timing so it feels like a celebration beat, not background noise
- Keep everything working for headless Puppeteer capture (no hover/click/scroll triggers)

**Non-Goals:**
- No color palette changes
- No new npm dependencies
- No interactive elements
- No image manipulation or layer splitting
- No changes to the detail bubbles or RSVP section animations

## Decisions

### 1. Confetti delay: JS setTimeout vs CSS animation-delay

**Decision:** JS `setTimeout` wrapping the existing `createConfettiBurst()` call.

**Why:** The confetti system is already fully JS-driven (DOM creation + inline transition styles). Adding a delay is a one-line change. CSS animation-delay wouldn't work here since confetti particles are created dynamically.

**Second burst:** Call `createConfettiBurst()` again at 2.8s with a reduced particle count (~25 instead of 60) by adding an optional `count` parameter.

### 2. Starburst effect: CSS pseudo-element vs JS particles

**Decision:** Pure CSS using `::after` pseudo-element on `.age-badge` with a radial gradient that scales up and fades out, triggered by adding a `.landed` class via JS.

**Why:** CSS is simpler, more performant, and doesn't add DOM nodes. The starburst is a single visual flash, not a particle system — pseudo-element is the right tool. JS only adds the trigger class after the drop animation timing (setTimeout at ~1.5s).

### 3. Banner bounce: update existing keyframes vs new animation

**Decision:** Update the existing `@keyframes bannerReveal` in-place with more keyframe stops for overshoot and spring-back.

**Why:** The `.anim-banner` class already references `bannerReveal`. No need to add a new animation name or class — just make the existing keyframes more dynamic. Extend duration from 0.8s to 1.0s to give the bounce room to breathe.

### 4. Web lines: inline SVG vs separate SVG file

**Decision:** Inline SVG element in `index.html`, positioned between the banner and hero section using absolute positioning.

**Why:** The lines need to visually connect the banner bottom edge to the greeting area. Inline SVG allows CSS animation of `stroke-dasharray` / `stroke-dashoffset` for the drawing effect. A separate file would add an HTTP request and complicate the CSS animation targeting. The SVG is tiny (3 paths with quadratic curves).

**Positioning:** The SVG container is `position: absolute` within `.invitation` (which is already `position: relative`), spanning from below the banner to above the greeting. Lines use semi-transparent light gray (`rgba(180, 180, 200, 0.3)`) so they don't compete with content.

## Risks / Trade-offs

**Timing sensitivity in GIF capture** — The animation timeline is tuned for real-time playback. Puppeteer's frame capture uses `setTimeout` intervals which may not perfectly match real-time, especially under CPU load. Mitigation: the animations use CSS transitions/keyframes which are time-based, not frame-based, so they'll look correct in screenshots taken at any interval.

**Web lines visual balance** — Spider-web lines could look busy or childish if overdone. Mitigation: keep them very subtle (low opacity, thin stroke, only 2-3 lines) and test via preview screenshot. Easy to remove if they don't land.

**Starburst on small screens** — The `::after` pseudo-element scales outward from the age badge. On very small viewports the badge is already small, so the starburst needs to be proportional (use `em` units, not `px`). Mitigation: size starburst relative to badge using `em`.
