# NischalSkanda.tech Clone (React + Vite)

This project is a local clone of `https://www.nischalskanda.tech/` using the site's React/Vite code and assets.

It now runs from editable source files in `src/` (not directly from hashed files in `assets/`).

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Editable React Source

Entry points:

- `src/main.jsx`
- `src/modules/AppShell.js`
- `src/styles/app.css`

Main page modules you can customize:

- `src/modules/HomePage.js`
- `src/modules/ProjectsPage.js`
- `src/modules/LifePage.js`
- `src/modules/JourneyPage.js`
- `src/modules/ContactPage.js`
- `src/modules/BlogPage.js`
- `src/modules/BlogPostPage.js`
- `src/modules/PlaygroundPage.js`
- `src/modules/NotFoundPage.js`

Case study route modules:

- `src/modules/AIForgeryDetectiveCaseStudy.js`
- `src/modules/RideXpressCaseStudy.js`
- `src/modules/RideXpressCaseStudyLegacy.js`
- `src/modules/ParkEZCaseStudy.js`
- `src/modules/ParkEZCaseStudyLegacy.js`
- `src/modules/ParkEZUnderConstructionPage.js`
- `src/modules/QuestionLibraryCaseStudy.js`
- `src/modules/CourierManagementCaseStudy.js`
- `src/modules/PostyAICaseStudy.js`

Shared component modules:

- `src/modules/Header.js`
- `src/modules/Footer.js`
- `src/modules/ScribbleUnderline.js`
- `src/modules/StickyNote.js`
- `src/modules/PaperBackground.js`
- `src/modules/ConnectDropdown.js`
- `src/modules/FloatingCircle.js`

If you re-copy modules from `assets/`, regenerate editable source with:

```bash
npm run generate:editable
```

## Routes Included

- `/`
- `/projects`
- `/life`
- `/journey`
- `/contact`
- `/playground`
- `/projects/ai-forgery-detective`
- `/projects/ridexpress`
- `/projects/ridexpress-legacy`
- `/projects/ridexpress-alt`
- `/projects/park-ez`
- `/projects/park-ez-construction`
- `/projects/park-ez-legacy`
- `/projects/question-library`
- `/projects/courier-management`
- `/projects/postyai`
- `/blog`
- `/blog/:slug`

`vite.config.js` is set to SPA mode so deep links resolve to the React router.
