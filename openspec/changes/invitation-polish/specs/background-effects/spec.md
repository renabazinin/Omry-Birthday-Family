## ADDED Requirements

### Requirement: Animated background blobs
The page SHALL display 3-4 large blurred circles (blobs) that drift slowly across the background. Each blob MUST use a distinct pastel color and `filter: blur()`.

#### Scenario: Blobs are visible behind content
- **WHEN** the page loads
- **THEN** soft, blurred pastel circles are visible behind the main content, slowly moving

#### Scenario: Blobs animate continuously
- **WHEN** the user views the page for an extended time
- **THEN** blobs continue to drift in slow looping paths without sudden jumps

### Requirement: Blobs stay behind content
The blobs SHALL be positioned behind all content using a low `z-index` and MUST NOT interfere with text readability or tap targets.

#### Scenario: Content remains readable
- **WHEN** a blob drifts behind text
- **THEN** the text remains fully legible due to the blob's blur and low opacity

### Requirement: Subtle dot pattern overlay
The background SHALL include a repeating dot pattern at very low opacity (3-5%) to add a wrapping-paper texture feel.

#### Scenario: Pattern is barely visible
- **WHEN** the user views the page
- **THEN** a subtle repeating dot grid is perceptible on close inspection but does not compete with content

### Requirement: Background effects are performant
All background effects SHALL use GPU-accelerated properties (`transform`, `opacity`) for animations. Blur MUST be applied to static or slowly-moving elements only.

#### Scenario: No jank on mobile
- **WHEN** the page is viewed on a mid-range phone
- **THEN** background animations run without visible frame drops
