## ADDED Requirements

### Requirement: Mobile-first design
The CSS SHALL be written mobile-first, with base styles targeting phone screens (320px–480px width). Larger screen adaptations MUST use `min-width` media queries.

#### Scenario: Default styles fit mobile
- **WHEN** the page is viewed on a 375px wide phone screen
- **THEN** all content is readable, properly spaced, and no horizontal scrolling occurs

### Requirement: Responsive typography
Text sizes SHALL scale fluidly using `clamp()` or viewport-relative units. The main greeting MUST be large and impactful on all screen sizes without overflowing.

#### Scenario: Text scales between phone and desktop
- **WHEN** the viewport width changes from 375px to 1200px
- **THEN** text sizes increase proportionally, remaining readable at all sizes

### Requirement: Full-viewport layout
The invitation SHALL fill the full viewport height on initial load, presenting the key information (greeting, name, age) without requiring scrolling. Additional details MAY be below the fold.

#### Scenario: Hero section fills screen
- **WHEN** the page loads on any device
- **THEN** the main invitation content fills the viewport height (min-height: 100vh or equivalent)

### Requirement: Tablet and desktop presentation
On screens wider than 768px, the layout SHALL center the content with a maximum width to prevent overly wide text lines. Decorative elements MAY use the extra space.

#### Scenario: Centered on wide screens
- **WHEN** the page is viewed on a 1024px+ wide screen
- **THEN** the main content is centered with reasonable max-width, and decorations fill the surrounding space
