## ADDED Requirements

### Requirement: CSS-drawn balloon shape
Each balloon SHALL be a colored circle (`border-radius: 50%`) with a small triangular knot at the bottom and a thin curved string line extending downward. No emoji characters SHALL be used.

#### Scenario: Balloon is visually recognizable
- **WHEN** the page renders
- **THEN** each floating element is clearly identifiable as a balloon shape — round body, knot, and string

### Requirement: Varied balloon colors
Each balloon SHALL have a distinct color from the page's pastel/vibrant palette. Colors MUST be consistent across devices (no OS-dependent rendering).

#### Scenario: Balloons are colorful
- **WHEN** the page renders
- **THEN** balloons display in multiple distinct colors (pink, purple, blue, lavender, etc.)

### Requirement: Same float animation behavior
CSS balloons SHALL use the existing `floatUp` keyframe animation with the same staggered timing and horizontal positions as the current emoji balloons.

#### Scenario: Balloons float upward
- **WHEN** the page is viewed
- **THEN** balloons float from bottom to top with the same timing as before
