## 1. Banner Bounce Entrance

- [x] 1.1 Update `@keyframes bannerReveal` in `styles.css` with overshoot/spring-back keyframe stops (0%, 55%, 75%, 100%) and -2deg/+1deg rotation
- [x] 1.2 Change `.anim-banner` animation duration from 0.8s to 1.0s

## 2. Spider-Web Connector Lines

- [x] 2.1 Add inline SVG element with class `.web-lines` in `index.html` between `.banner` and `.hero`, containing 2-3 curved `<path>` elements
- [x] 2.2 Add `.web-lines` CSS: absolute positioning, `stroke-dasharray`/`stroke-dashoffset` animation, semi-transparent styling (rgba(180,180,200,0.3), stroke-width 1-1.5px)
- [x] 2.3 Set web-line draw animation to start at 0.4s delay, 0.6s duration

## 3. Starburst Effect on Age Badge

- [x] 3.1 Add `.age-badge::after` pseudo-element in `styles.css` with radial gradient, initially hidden (scale 0, opacity 0)
- [x] 3.2 Add `@keyframes starburst` that scales up to ~2x and fades to transparent over 600ms, using `em` units
- [x] 3.3 Add `.age-badge.landed::after` rule that triggers the starburst animation (one-shot, `forwards` fill)
- [x] 3.4 Add JS in `script.js` to add `.landed` class to `.age-badge` after ~1.5s setTimeout

## 4. Confetti Timing

- [x] 4.1 Add optional `count` parameter to `createConfettiBurst(count)` in `script.js`, defaulting to 60
- [x] 4.2 Replace immediate `createConfettiBurst()` call with `setTimeout` at 2.0s
- [x] 4.3 Add second `setTimeout` calling `createConfettiBurst(25)` at 2.8s

## 5. Verify

- [x] 5.1 Run `node preview.js` and confirm all elements visible and animations look correct on mobile viewport
- [x] 5.2 Run `node capture-gif.js` and verify the GIF/MP4 captures the full animation timeline
