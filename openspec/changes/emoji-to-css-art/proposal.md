## Why

The invitation currently uses 15+ emojis for decorations, icons, and accents. Emojis look different on every OS/device, feel generic, and give the page a "WhatsApp forward" vibe rather than a designed invitation. Replacing them with CSS-drawn shapes and styled typography creates a unique, consistent visual identity.

## What Changes

- **Remove all emoji balloons** (8x 🎈) → Replace with CSS-drawn balloons (colored circles with string lines)
- **Remove decoration emojis** (⭐🎂🎁🎊) → Replace with CSS geometric shapes (stars via clip-path, circles, diamonds)
- **Remove party hat emojis** (🎉🎉 around name) → Replace with CSS accent shapes or colored brackets
- **Remove detail bubble emojis** (📅🕐📍) → Replace with small styled CSS circles containing Hebrew letters or simple symbols
- **Remove RSVP heart emoji** (💛) → Replace with CSS heart shape
- **Keep sound button 🔊** → This is functional UI, replace with a CSS speaker icon or SVG
- **Remove confetti emoji aesthetic** → Keep JS confetti but ensure particles are CSS shapes (already are)

## Capabilities

### New Capabilities
- `css-balloons`: Floating balloons built entirely with CSS — colored circles with thin string lines, replacing emoji balloons
- `css-decorations`: Geometric decorative shapes (stars, circles, diamonds) built with CSS clip-path and borders, replacing emoji decorations and party hats
- `css-icons`: Small styled indicator icons for detail bubbles and buttons, replacing emoji icons with CSS shapes or single-character typography

### Modified Capabilities
<!-- None -->

## Impact

- `index.html`: Replace all emoji `<span>` elements with `<div>` elements that CSS will style into shapes
- `styles.css`: New styles for CSS balloons, geometric decorations, icon indicators, CSS heart
- `script.js`: No changes expected (confetti already uses CSS divs)
