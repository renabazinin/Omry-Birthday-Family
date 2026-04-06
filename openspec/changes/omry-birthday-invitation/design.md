## Context

This is a greenfield project — a single-page animated birthday invitation for Omry's 4th birthday party on Friday, April 10th 2026. The audience is Hebrew-speaking families. Parents will receive the link (via WhatsApp or similar) and may show it to their kids. The page must be fully in Hebrew with RTL layout.

No existing codebase. No backend needed. Pure static HTML/CSS/JS.

## Goals / Non-Goals

**Goals:**
- Create a visually appealing, animated birthday invitation page
- Full Hebrew RTL support for all content
- Mobile-first responsive design (primary device: phones via WhatsApp links)
- Modular code: separate `index.html`, `styles.css`, `script.js`
- Zero dependencies — no frameworks, no build tools, no npm packages
- Works offline once loaded (no external API calls)

**Non-Goals:**
- RSVP functionality or form submissions
- Backend or database
- Multi-language support (Hebrew only)
- Analytics or tracking
- PWA or service worker capabilities
- Print-optimized styling

## Decisions

### 1. Pure CSS animations + minimal JS
**Choice**: Use CSS `@keyframes` for repeating animations (floating balloons, pulsing text) and JS only for one-time triggered effects (confetti burst on load).
**Why**: CSS animations are GPU-accelerated, performant on mobile, and don't require JS overhead. JS adds the confetti burst which is harder to do purely in CSS.
**Alternative considered**: A library like canvas-confetti — rejected to keep zero-dependency goal.

### 2. Single HTML page with external CSS/JS
**Choice**: One `index.html` linking to `styles.css` and `script.js`.
**Why**: Simplest modular structure. Easy to host anywhere. CSS and JS are cleanly separated for maintainability.
**Alternative considered**: CSS-in-HTML with `<style>` tags — rejected as it reduces modularity.

### 3. CSS Grid + Flexbox for layout
**Choice**: Use CSS Grid for overall page structure, Flexbox for component-level alignment.
**Why**: Native RTL support via `dir="rtl"` on `<html>`. Grid and Flexbox automatically flip in RTL mode. No hacks needed.
**Alternative considered**: Float-based layout — rejected as floats require manual RTL flipping.

### 4. Emoji + CSS shapes for decorations
**Choice**: Use emoji characters (balloons, cake, stars) and CSS-generated shapes instead of image assets.
**Why**: Zero external assets to load. Emojis render natively on all devices. Keeps the project self-contained.
**Alternative considered**: SVG illustrations — would look better but adds complexity and file management.

### 5. Viewport-based sizing
**Choice**: Use `clamp()`, `vw`/`vh` units for responsive typography and spacing.
**Why**: Fluid scaling from phone to desktop without breakpoint jumps. Single set of styles works across all screen sizes.

## Risks / Trade-offs

- **[Emoji rendering varies across OS/devices]** → Acceptable for a casual birthday invitation. Emojis will look slightly different on Android vs iOS but will always be recognizable.
- **[No RSVP tracking]** → Parents will need to respond via WhatsApp/phone directly. This is intentional to keep scope minimal.
- **[Hebrew font rendering]** → System fonts handle Hebrew well on all modern devices. No custom font needed, reducing load time.
- **[JS-disabled browsers won't see confetti]** → The page content and CSS animations still work fully without JS. Confetti is progressive enhancement.
