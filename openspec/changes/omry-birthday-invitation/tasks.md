## 1. HTML Structure

- [x] 1.1 Create `index.html` with `<!DOCTYPE html>`, `<html dir="rtl" lang="he">`, meta viewport, and links to `styles.css` and `script.js`
- [x] 1.2 Add hero section with main Hebrew greeting, Omry's name, and age (4) using semantic headings
- [x] 1.3 Add party details section with date (יום שישי, 10 באפריל), time, and any location info
- [x] 1.4 Add decorative emoji containers for balloons and other party elements

## 2. CSS Styling & Layout

- [x] 2.1 Create `styles.css` with CSS reset/base styles, RTL-friendly defaults, and color scheme (kid-friendly, colorful)
- [x] 2.2 Implement mobile-first full-viewport hero layout using CSS Grid/Flexbox with `min-height: 100vh`
- [x] 2.3 Add responsive typography using `clamp()` for headings and body text
- [x] 2.4 Add media queries for tablet (768px+) and desktop (1024px+) with max-width centering
- [x] 2.5 Style the party details section for quick readability

## 3. CSS Animations

- [x] 3.1 Create `@keyframes` for floating balloon animations with staggered delays and varied horizontal positions
- [x] 3.2 Create entrance animations for text elements (fade-in, scale-up, bounce)
- [x] 3.3 Add continuous subtle animations for decorative elements (pulse, sway, sparkle)
- [x] 3.4 Ensure all animations use `transform`/`opacity` only for GPU acceleration

## 4. JavaScript Interactions

- [x] 4.1 Create `script.js` with confetti burst function that triggers on DOMContentLoaded
- [x] 4.2 Implement confetti particle generation using absolutely positioned `div` elements with random colors, positions, and fall trajectories
- [x] 4.3 Clean up confetti DOM elements after animation completes (3-4 seconds)

## 5. Polish & Testing

- [x] 5.1 Test on mobile viewport (375px) — verify no horizontal scroll, readable text, smooth animations
- [x] 5.2 Test on desktop viewport — verify centered layout with max-width, proper spacing
- [x] 5.3 Verify all Hebrew text renders correctly with proper RTL flow
- [x] 5.4 Verify page works with JavaScript disabled (content + CSS animations still functional)
