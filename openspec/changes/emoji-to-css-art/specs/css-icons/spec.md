## ADDED Requirements

### Requirement: Hebrew letter icons for detail bubbles
The 📅, 🕐, and 📍 emoji icons in detail bubbles SHALL be replaced with small colored circles containing a single Hebrew letter: ״י״ for date (יום), ״ש״ for time (שעה), ״מ״ for location (מיקום).

#### Scenario: Detail icons show Hebrew letters
- **WHEN** the detail bubbles render
- **THEN** each bubble has a small colored circle with a Hebrew letter instead of an emoji

### Requirement: Icon circles match bubble colors
Each icon circle's background color SHALL match or complement its parent bubble's color scheme (pink circle for date, purple for time, blue for location).

#### Scenario: Icons are color-coordinated
- **WHEN** the bubbles are visible
- **THEN** each icon circle's color matches the bubble it belongs to

### Requirement: CSS speaker icon for sound button
The 🔊 emoji on the sound button SHALL be replaced with a CSS-drawn speaker shape (rectangle + triangle cone) or a simple typographic symbol.

#### Scenario: Sound button has CSS icon
- **WHEN** the page renders
- **THEN** the sound button shows a geometric speaker shape, not an emoji
