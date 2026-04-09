## ADDED Requirements

### Requirement: Sound is opt-in only
The page SHALL NOT autoplay any audio. Sound MUST only play when the user explicitly taps a button.

#### Scenario: No sound on load
- **WHEN** the page loads
- **THEN** no audio plays automatically

### Requirement: Sound toggle button
The page SHALL display a small circular button in a corner of the screen with a speaker/sound emoji. Tapping it SHALL play a short party horn sound effect.

#### Scenario: User taps sound button
- **WHEN** the user taps the sound button
- **THEN** a short (<1 second) party horn sound plays

### Requirement: Sound is self-contained
The audio data SHALL be embedded as a base64 data URI in JavaScript. No external audio files SHALL be required.

#### Scenario: Works offline
- **WHEN** the page is loaded without internet
- **THEN** the sound button still functions correctly

### Requirement: Button is non-intrusive
The sound button SHALL be small, positioned in a corner, and visually subtle so it does not distract from the invitation content.

#### Scenario: Button does not compete with content
- **WHEN** the page is viewed
- **THEN** the sound button is visible but small and positioned in a screen corner away from main content
