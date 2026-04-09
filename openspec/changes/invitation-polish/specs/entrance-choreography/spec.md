## ADDED Requirements

### Requirement: Sequenced reveal timeline
Page elements SHALL enter in a choreographed sequence over approximately 2 seconds: decorations first, then greeting, then name, then age badge, then details section.

#### Scenario: Elements appear in order
- **WHEN** the page loads
- **THEN** elements animate in one after another with no two major elements entering at the exact same time

### Requirement: Varied entrance styles
Each major element SHALL use a distinct entrance animation style. The greeting MUST scale in, the name MUST fade-slide in, the age badge MUST drop from above with a bounce, and the details MUST slide up.

#### Scenario: Greeting scales in
- **WHEN** the greeting enters
- **THEN** it scales from small to full size with slight overshoot

#### Scenario: Age badge drops with bounce
- **WHEN** the age badge enters
- **THEN** it translates downward from above and bounces slightly before settling

#### Scenario: Details slide up
- **WHEN** the details section enters
- **THEN** it slides upward from below and fades in

### Requirement: Entrance completes quickly
The full entrance sequence SHALL complete within 2.5 seconds from page load. After completion, only continuous subtle animations (blobs, balloons, badge glow) SHALL remain active.

#### Scenario: No lingering entrance animations
- **WHEN** 3 seconds have passed since page load
- **THEN** all entrance animations have completed and elements are in their final positions
