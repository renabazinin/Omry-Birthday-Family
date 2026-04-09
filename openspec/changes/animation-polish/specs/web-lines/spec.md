## ADDED Requirements

### Requirement: Spider-web lines connect banner to content
An inline SVG element SHALL be placed between the banner and hero section, containing 2-3 thin curved paths that visually connect the banner bottom edge to the greeting area.

#### Scenario: Web lines are present in DOM
- **WHEN** the page renders
- **THEN** an SVG element with class `.web-lines` SHALL exist between `.banner` and `.hero`
- **THEN** it SHALL contain 2-3 `<path>` elements with quadratic curves

### Requirement: Web lines draw themselves with animation
The SVG paths SHALL animate using `stroke-dasharray` and `stroke-dashoffset` to create a "drawing" effect where lines appear to extend from the banner downward.

#### Scenario: Drawing animation timing
- **WHEN** 0.4 seconds have elapsed after page load (after banner lands)
- **THEN** the web lines SHALL begin drawing over a duration of 0.6 seconds

### Requirement: Web lines are visually subtle
The web lines SHALL be decorative and not compete with the main content.

#### Scenario: Line styling
- **WHEN** the web lines render
- **THEN** they SHALL use a semi-transparent color (`rgba(180, 180, 200, 0.3)`)
- **THEN** stroke width SHALL be 1-1.5px
- **THEN** they SHALL have no fill

### Requirement: Web lines do not affect layout
The SVG SHALL be absolutely positioned and SHALL NOT push or shift any content elements.

#### Scenario: Layout integrity
- **WHEN** the web lines SVG is present
- **THEN** the banner and hero section positions SHALL be identical to when the SVG is removed
