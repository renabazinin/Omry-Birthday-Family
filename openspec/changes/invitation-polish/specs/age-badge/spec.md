## ADDED Requirements

### Requirement: Age displayed as circular badge
The age number "4" SHALL be displayed inside a large circular badge element, visually centered as the hero's centerpiece. The badge MUST use a vibrant gradient background with white text.

#### Scenario: Badge renders as circle
- **WHEN** the page loads
- **THEN** the number 4 appears inside a circle (equal width and height, border-radius 50%) with a gradient background and the number centered

### Requirement: Badge has glow effect
The age badge SHALL have a subtle animated glow using box-shadow that pulses gently to draw attention.

#### Scenario: Glow pulses continuously
- **WHEN** the page is idle after entrance animations complete
- **THEN** the badge shadow smoothly oscillates between a subtle and slightly more pronounced glow

### Requirement: Age label outside badge
The text "בן" SHALL appear above or below the badge (not inside it), keeping the badge clean with just the number.

#### Scenario: Label is separate from badge
- **WHEN** the page renders
- **THEN** "בן" text is visible near the badge but not inside the circle
