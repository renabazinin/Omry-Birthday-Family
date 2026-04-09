## Context

The invitation has 15+ emojis across balloons, decorations, detail icons, and accents. All need to become CSS-drawn elements while maintaining the playful birthday feel. The page is already zero-dependency static HTML/CSS/JS.

## Goals / Non-Goals

**Goals:**
- Replace every decorative emoji with a CSS-drawn equivalent
- Maintain the same visual rhythm and positions
- Look consistent across all devices (no more OS-dependent rendering)
- Feel more "designed" — like a crafted invitation, not a message

**Non-Goals:**
- Changing layout, colors, or animation timing (those are already set)
- Using SVG or external assets
- Redesigning the page structure

## Decisions

### 1. CSS Balloons: circle + pseudo-element string
**Choice**: Each balloon is a `div` with `border-radius: 50%`, a solid pastel color, and a `::after` pseudo-element that draws a thin curved string using `border` on a rotated empty element. A small triangle knot at the bottom via `::before`.
**Why**: Pure CSS, lightweight, looks clean and consistent. The string gives it the unmistakable balloon silhouette.
**Alternative**: SVG balloons — more control over shape but adds complexity for a simple shape.

### 2. Decorative shapes: clip-path stars + CSS diamonds/circles
**Choice**: Stars use `clip-path: polygon(...)` for a 4-point star. Diamonds use a rotated square. Small circles stay as `border-radius: 50%`. All colored with the existing palette.
**Why**: `clip-path` is well-supported and creates crisp geometric shapes. Rotated squares are trivial CSS.

### 3. Name accents: colored dots flanking the name
**Choice**: Replace 🎉🎉 party hats with small colored dots (2-3 stacked) on each side of the name, using `::before`/`::after` on `.name-badge`.
**Why**: Subtle, geometric, doesn't compete with the name text. Dots match the overall clean geometric aesthetic.

### 4. Detail bubble icons: colored circle with single character
**Choice**: A small circle (background color matching the bubble) with a single Hebrew character or simple CSS symbol inside: ״י״ for date (יום), ״ש״ for time (שעה), ״מ״ for location (מיקום).
**Why**: Hebrew letters as icons is unique to this invitation. Ties the icon system to the RTL Hebrew identity of the page.

### 5. RSVP accent: CSS heart via rotated squares
**Choice**: Replace 💛 with a small CSS heart shape (two `::before`/`::after` circles + rotated square, classic CSS heart trick), colored pink to match the gradient.
**Why**: Keeps the warm feel without relying on emoji. The CSS heart is a well-known technique.

### 6. Sound button: CSS speaker shape
**Choice**: Replace 🔊 with a CSS-drawn speaker — a small rectangle + triangle (using borders) for the cone shape.
**Why**: Consistent with the no-emoji aesthetic. Simple geometric shape.

## Risks / Trade-offs

- **[More CSS complexity]** → Each shape adds ~5-15 lines of CSS. Total ~100-150 lines added. Acceptable for the visual improvement.
- **[clip-path browser support]** → Supported in all modern browsers. No concern for this audience (parents on recent phones).
- **[Hebrew letter icons need good font sizing]** → Using system font at small size; Hebrew renders well on all platforms at small sizes.
