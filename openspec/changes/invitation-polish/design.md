## Context

The birthday invitation for Omry (turning 4) is functional with floating balloons, confetti, colored detail bubbles, and a blue-lavender-pink gradient background. This change adds five polish layers: a big age badge, background blobs, choreographed entrances, a dot pattern texture, and opt-in party sound.

Existing files: `index.html`, `styles.css`, `script.js` — all zero-dependency, static.

## Goals / Non-Goals

**Goals:**
- Make the "4" the visual centerpiece of the page
- Add depth to the background with animated blobs and a subtle pattern
- Create a choreographed reveal sequence that feels intentional
- Add an opt-in sound moment for fun

**Non-Goals:**
- Changing the detail bubbles section (already redesigned)
- Adding interactivity beyond the sound button
- External dependencies or assets loaded from CDN

## Decisions

### 1. Age badge: CSS circle with large number
**Choice**: A `width/height` circle with the number centered, using a vibrant gradient background and a subtle box-shadow glow.
**Why**: Pure CSS, no images. A circle is the most natural "badge" shape and the gradient ties into the existing name gradient.
**Alternative**: SVG badge — rejected as overkill for a circle with text.

### 2. Background blobs: CSS pseudo-elements with blur
**Choice**: 3-4 large `div` elements with `border-radius: 50%`, pastel backgrounds, `filter: blur(60-80px)`, and slow CSS `@keyframes` drift animations. Positioned with `position: fixed` behind content.
**Why**: Pure CSS, GPU-accelerated (transform + opacity), creates depth without images. The blur makes them feel organic.
**Alternative**: SVG filters or canvas — too heavy for decorative background.

### 3. Background pattern: CSS radial-gradient dots
**Choice**: A `::before` pseudo-element on body with a repeating `radial-gradient` creating tiny dots in a grid pattern at low opacity.
**Why**: Zero-asset approach. Tiny dots at 3-5% opacity add texture like wrapping paper without competing with content.
**Alternative**: Inline SVG pattern — more control but more markup.

### 4. Entrance choreography: varied keyframes with staggered delays
**Choice**: Replace the single `enterIn` animation with multiple named keyframes: `dropIn` (for badge — drops from above with bounce), `scaleIn` (greeting pill), `fadeSlideIn` (details), each with specific delays creating a 0→2s reveal timeline.
**Why**: Different entrance styles per element type makes the reveal feel directed rather than everything doing the same thing.

### 5. Sound: Base64-encoded short audio + small toggle button
**Choice**: Embed a very short (< 1s) party horn as a base64 data URI in JS. A small circular button in the corner plays it on tap. Not autoplay.
**Why**: No external file to host. Opt-in respects users on public transport. Base64 keeps zero-dependency goal.
**Alternative**: External mp3 file — simpler but adds a file to manage/host.

## Risks / Trade-offs

- **[Blur performance on low-end devices]** → Use `will-change: transform` and limit to 3-4 blobs. Blur is computed once per element since they only translate.
- **[Base64 audio adds to JS file size]** → A <1s sound at low quality is ~10-15KB base64. Acceptable for a single-page invitation.
- **[Too much animation]** → The choreography must feel snappy (complete within ~2s). After that, only subtle loops remain (blobs, balloons, badge glow pulse).
