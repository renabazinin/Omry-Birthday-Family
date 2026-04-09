## ADDED Requirements

### Requirement: Age badge starburst on landing
The `.age-badge` element SHALL display a radial starburst flash effect after its drop animation completes, using a CSS `::after` pseudo-element.

#### Scenario: Starburst triggers after badge drop
- **WHEN** approximately 1.5 seconds have elapsed after page load (after the drop-bounce animation settles)
- **THEN** a `.landed` class SHALL be added to `.age-badge`
- **THEN** the `::after` pseudo-element SHALL animate: scaling up from 0 to ~2x the badge size and fading from visible to transparent

### Requirement: Starburst is proportional to badge size
The starburst effect SHALL use `em` units relative to the badge, not fixed `px` values, so it scales correctly on all viewport sizes.

#### Scenario: Small mobile viewport
- **WHEN** the badge renders at its minimum clamp size (3rem)
- **THEN** the starburst SHALL scale proportionally and not overflow the visible area

### Requirement: Starburst is a one-shot animation
The starburst SHALL play exactly once and then remain invisible. It SHALL NOT loop.

#### Scenario: After starburst completes
- **WHEN** the starburst animation finishes (~600ms)
- **THEN** the `::after` pseudo-element SHALL remain at `opacity: 0`
