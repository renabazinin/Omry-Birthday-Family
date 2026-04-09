## ADDED Requirements

### Requirement: Confetti burst fires after content reveal
The confetti burst SHALL NOT fire on page load. It SHALL fire at approximately 2.0 seconds after DOMContentLoaded, after all entrance animations have completed.

#### Scenario: Primary confetti burst timing
- **WHEN** the page loads and 2.0 seconds have elapsed
- **THEN** a confetti burst of 60 particles SHALL appear

### Requirement: Second smaller confetti burst
A second, smaller confetti burst SHALL fire at approximately 2.8 seconds for extra festivity.

#### Scenario: Secondary confetti burst
- **WHEN** 2.8 seconds have elapsed after DOMContentLoaded
- **THEN** a confetti burst of 25 particles SHALL appear

### Requirement: Confetti particle count is configurable
The `createConfettiBurst` function SHALL accept an optional particle count parameter, defaulting to 60 if not provided.

#### Scenario: Default particle count
- **WHEN** `createConfettiBurst()` is called with no arguments
- **THEN** 60 confetti particles SHALL be created

#### Scenario: Custom particle count
- **WHEN** `createConfettiBurst(25)` is called
- **THEN** 25 confetti particles SHALL be created
