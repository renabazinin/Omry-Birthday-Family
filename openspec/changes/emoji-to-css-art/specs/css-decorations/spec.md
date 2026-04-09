## ADDED Requirements

### Requirement: CSS star shapes replace emoji stars
The ⭐ emoji decorations SHALL be replaced with CSS-drawn 4-point stars using `clip-path: polygon(...)`. Stars MUST be colored and retain the existing sparkle animation.

#### Scenario: Stars render as geometric shapes
- **WHEN** the page loads
- **THEN** star decorations appear as crisp geometric 4-point stars, not emoji

### Requirement: CSS shapes replace cake/gift/confetti emojis
The 🎂, 🎁, and 🎊 emoji decorations SHALL be replaced with simple CSS geometric shapes: small colored circles, diamonds (rotated squares), or other geometric forms. Each shape MUST be visually distinct.

#### Scenario: Decorations are geometric
- **WHEN** the page renders
- **THEN** decoration positions show colored geometric shapes with the existing sway/sparkle animations

### Requirement: CSS accent dots replace party hat emojis
The 🎉 emojis flanking the child's name SHALL be replaced with small stacked colored dots (2-3 dots per side) or another subtle CSS accent that doesn't compete with the name text.

#### Scenario: Name has subtle accents
- **WHEN** the page renders
- **THEN** the child's name has small geometric accents on each side instead of emoji

### Requirement: CSS heart replaces RSVP emoji
The 💛 in the RSVP text SHALL be replaced with a CSS-drawn heart shape using pseudo-elements, colored to match the RSVP button's pink theme.

#### Scenario: Heart renders as CSS shape
- **WHEN** the RSVP bubble is visible
- **THEN** a small pink heart shape appears, drawn with CSS, not an emoji character
