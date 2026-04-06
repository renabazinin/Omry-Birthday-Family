## ADDED Requirements

### Requirement: Floating balloon animations
The page SHALL display animated balloons that float upward using CSS `@keyframes` animations. Balloons MUST use emoji characters and have varied speeds and horizontal positions for a natural feel.

#### Scenario: Balloons animate on page load
- **WHEN** the page loads
- **THEN** balloon emojis float upward from the bottom of the screen with staggered timing and varying horizontal positions

### Requirement: Confetti burst on load
The page SHALL trigger a JavaScript-driven confetti animation when the page first loads. The confetti MUST consist of colorful small elements that scatter across the screen.

#### Scenario: Confetti appears on first visit
- **WHEN** the page finishes loading
- **THEN** a burst of colorful confetti particles animates across the viewport for 2-4 seconds

### Requirement: Text entrance animations
Key text elements (greeting, name, age) SHALL animate into view with CSS transitions such as scale-up, fade-in, or bounce effects.

#### Scenario: Title animates in
- **WHEN** the page loads
- **THEN** the main greeting text and child's name appear with a playful entrance animation (not instantly)

### Requirement: Continuous subtle animations
Decorative elements SHALL have continuous looping animations (gentle pulse, sway, or sparkle) to keep the page feeling alive without being distracting.

#### Scenario: Decorations keep moving
- **WHEN** the user views the page for an extended time
- **THEN** decorative elements continue to animate in subtle, non-distracting loops

### Requirement: Performance on mobile
All animations SHALL be performant on mid-range mobile devices. Animations MUST use CSS `transform` and `opacity` properties (GPU-accelerated) rather than layout-triggering properties.

#### Scenario: Smooth animation on phone
- **WHEN** the page is viewed on a mid-range Android phone
- **THEN** animations run at a consistent frame rate without visible jank or lag
