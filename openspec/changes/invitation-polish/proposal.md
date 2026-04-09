## Why

The invitation works but feels flat — elements enter similarly, the "4" doesn't stand out enough, and the background is plain. These five enhancements add visual depth and choreography to make the invitation feel polished and memorable.

## What Changes

- Redesign the age "4" as a large circular badge centerpiece instead of inline text
- Add soft animated background blobs (blurred pastel circles) for a modern lava-lamp feel
- Choreograph entrance animations with distinct styles and sequenced timing per element
- Add a subtle CSS repeating pattern (dots/stars) for wrapping-paper texture on the background
- Add an opt-in sound button that plays a short party horn on tap

## Capabilities

### New Capabilities
- `age-badge`: The number 4 presented as a big colorful circle badge — the visual centerpiece of the invitation
- `background-effects`: Animated blurred blobs drifting slowly behind content, plus a subtle repeating dot/star pattern overlay
- `entrance-choreography`: Each element gets a unique entrance style (scale, drop, slide, fade) with sequenced timing for a polished reveal
- `party-sound`: Small opt-in button that plays a short party horn sound effect on tap

### Modified Capabilities
<!-- None -->

## Impact

- `styles.css`: New background blob elements, pattern overlay, age badge styles, reworked animation keyframes and delays
- `index.html`: Restructured age section markup, added blob divs, added sound button element
- `script.js`: Sound playback logic, potentially blob positioning
- New asset: short party horn sound file (base64-encoded inline or tiny mp3)
