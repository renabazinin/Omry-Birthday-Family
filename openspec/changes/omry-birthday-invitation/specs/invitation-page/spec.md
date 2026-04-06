## ADDED Requirements

### Requirement: Page displays party details in Hebrew
The invitation page SHALL display all party information in Hebrew, including: the birthday child's name (עומרי), age (4), party date (יום שישי, 10.4), and a welcoming message. All text content MUST be in Hebrew.

#### Scenario: User opens the invitation
- **WHEN** a user opens the invitation page in a browser
- **THEN** the page displays a Hebrew birthday greeting, the child's name, age, date, and party details in readable, styled text

### Requirement: Full RTL layout
The page SHALL use `dir="rtl"` and `lang="he"` attributes on the root HTML element. All text alignment, flex/grid directions, and reading order MUST follow RTL conventions.

#### Scenario: Content flows right-to-left
- **WHEN** the page is rendered
- **THEN** all text is right-aligned, content flows from right to left, and the visual hierarchy follows Hebrew reading patterns

### Requirement: Modular file structure
The project SHALL consist of three separate files: `index.html` for structure, `styles.css` for styling, and `script.js` for interactive behavior.

#### Scenario: Files are properly linked
- **WHEN** `index.html` is opened in a browser
- **THEN** it loads `styles.css` and `script.js` as external resources, and all styles and scripts apply correctly

### Requirement: Zero external dependencies
The page SHALL NOT load any external libraries, CDNs, or frameworks. All code MUST be self-contained in the three project files.

#### Scenario: Page works offline
- **WHEN** the page files are served without internet access
- **THEN** the page renders fully with all styles and animations intact

### Requirement: Party information section
The page SHALL include a clearly visible section with practical party details: date (יום שישי, 10 באפריל), time, and any additional info the host provides.

#### Scenario: Parents can find logistics
- **WHEN** a parent views the invitation
- **THEN** they can quickly identify the date, day of week, and time of the party without scrolling excessively
