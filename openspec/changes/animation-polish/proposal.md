# Animation Polish — Make the invitation GIF feel alive

## Problem

The current invitation animation is functional but flat — everything fades/slides in independently with no narrative arc. When viewed as a non-interactive GIF, it doesn't build anticipation or deliver a satisfying "moment." The Spidey theme from the banner doesn't carry through to the rest of the page.

## Solution

Four targeted animation enhancements that create a **story arc** — the banner lands with a Spidey bounce, web lines connect it to the content, confetti celebrates after the reveal, and a starburst makes the age badge pop.

## What changes

### 1. Confetti burst after content reveal

Move the confetti burst from page load to **after all content is visible** (~2.0s). This turns confetti into a celebration of the completed invitation rather than background noise during the entrance.

- **Where:** `script.js` — delay `createConfettiBurst()` call to ~2.0s
- **Bonus:** add a second smaller burst at ~2.8s for extra festivity

### 2. Stronger age badge glow/starburst

When the age badge lands after its drop animation, trigger a brief radial starburst effect — a CSS pseudo-element that flashes outward and fades. Makes the age badge the undeniable focal point.

- **Where:** `styles.css` — new `@keyframes starburst` on `.age-badge::after`
- **Trigger:** activated via a `.landed` class added by JS after drop animation completes
- **Duration:** ~600ms one-shot

### 3. Spidey-style banner bounce entrance

Replace the current gentle slide-down with an entrance that evokes a Spider-Man landing — slight overshoot downward + subtle rotation, then spring back into place.

- **Where:** `styles.css` — update `@keyframes bannerReveal`
- **Feel:**
  ```
  0%   → above viewport, scaled down, rotated -2deg
  60%  → overshoots down by ~10px, rotated +1deg
  80%  → bounces back up slightly
  100% → settled in place, no rotation
  ```

### 4. Spider-web connector lines

Thin SVG lines from the banner's bottom edge down to the greeting, styled as spider-web threads. Animated with `stroke-dashoffset` so they "draw" themselves after the banner lands.

- **Where:** new SVG element in `index.html` between banner and hero, animated in `styles.css`
- **Design:** 2-3 thin curved lines (#ddd or semi-transparent), subtle — decoration not distraction
- **Timing:** starts at 0.4s (after banner lands), draws over 0.6s

## Revised animation timeline

```
0.0s  ┌─ Banner BOUNCES in (Spidey landing)
0.4s  ├─ Web lines draw downward from banner
0.5s  ├─ "מוזמנים לחגוג!" scales in
0.8s  ├─ "עמרי" slides in
1.0s  ├─ Age badge drops + bounce
1.5s  ├─ STARBURST flash on age badge
1.6s  ├─ Details slide up, bubbles pop in
2.0s  ├─ CONFETTI BURST (celebration!)
2.8s  ├─ Second mini confetti burst
3.2s  ├─ RSVP wiggle starts
      └─ Balloons float continuously
```

## Non-goals

- No color scheme overhaul (keeping current pink/purple palette)
- No image splitting or parallax (too complex for the payoff)
- No interactivity — everything is passive animation for GIF/video capture
- No new npm dependencies

## Files affected

| File | Changes |
|------|---------|
| `styles.css` | Banner bounce keyframes, starburst effect, web-line animation |
| `script.js` | Delayed confetti, starburst trigger class |
| `index.html` | SVG web-line element between banner and hero |
