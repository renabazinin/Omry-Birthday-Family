## 1. Age Badge Centerpiece

- [x] 1.1 Restructure age HTML: replace inline `<p class="age">` with a badge container holding a circle div with the number, and a separate "בן" label
- [x] 1.2 Style the badge as a circle (equal width/height, border-radius 50%) with a vibrant gradient, white bold number, centered with flexbox
- [x] 1.3 Add a pulsing glow animation on the badge using animated box-shadow

## 2. Background Effects

- [x] 2.1 Add 3-4 blob divs to index.html (fixed position, behind content, aria-hidden)
- [x] 2.2 Style blobs: large circles, pastel colors, filter blur(60-80px), low opacity, z-index behind content
- [x] 2.3 Create slow drift @keyframes for each blob with varied durations (15-25s) and translate paths
- [x] 2.4 Add dot pattern overlay using a ::before pseudo-element on body with repeating radial-gradient at ~4% opacity

## 3. Entrance Choreography

- [x] 3.1 Replace the single enterIn keyframe with distinct keyframes: scaleIn (greeting), fadeSlideIn (name), dropBounce (age badge), slideUp (details)
- [x] 3.2 Set staggered animation-delay values creating a 0-2s reveal timeline: decorations(0s) → greeting(0.2s) → name(0.5s) → badge(0.8s) → details(1.2s)
- [x] 3.3 Ensure all entrance animations use fill-mode forwards and elements start invisible

## 4. Party Sound

- [x] 4.1 Add a small circular sound button to index.html, positioned in a corner with a speaker emoji
- [x] 4.2 Style the button: small circle, semi-transparent background, fixed position bottom-left corner
- [x] 4.3 Add JS click handler that creates an Audio element from a base64 data URI and plays a short party horn sound
- [x] 4.4 Generate or embed a short (<1s) party horn sound as base64

## 5. Integration & Polish

- [x] 5.1 Verify all layers stack correctly: pattern → blobs → balloons → content → confetti → sound button
- [x] 5.2 Test on mobile viewport — confirm everything fits in one screen, no jank from blobs + balloons + confetti combined
- [x] 5.3 Verify entrance choreography completes within ~2.5s and feels intentional
