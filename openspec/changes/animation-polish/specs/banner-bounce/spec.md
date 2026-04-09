## ADDED Requirements

### Requirement: Banner entrance uses Spidey-style bounce
The banner SHALL animate in with a bounce-overshoot entrance that evokes a Spider-Man landing, replacing the current gentle slide-down.

#### Scenario: Banner bounce keyframes
- **WHEN** the page loads
- **THEN** the banner SHALL animate over ~1.0 second with these stages:
  - Start above viewport, scaled down to 0.92, rotated -2deg
  - At 55%, overshoot downward by ~10px, scale to 1.02, rotate +1deg
  - At 75%, bounce back up slightly, scale to 0.99
  - At 100%, settle in final position with no rotation and scale 1

### Requirement: Banner bounce uses existing animation class
The bounce SHALL be implemented by updating the existing `@keyframes bannerReveal` and adjusting the `.anim-banner` animation duration to 1.0s.

#### Scenario: No new CSS classes needed
- **WHEN** the banner renders
- **THEN** it SHALL use the existing `.anim-banner` class with the updated `bannerReveal` keyframes
