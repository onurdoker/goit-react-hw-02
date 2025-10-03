# Feedback App (React + Vite)

A small React application built with Vite. It allows users to leave feedback (Good, Neutral, Bad), shows a running total
and the percentage of positive feedback, and persists counts in localStorage. This repository is part of the GoIT React
homework series.

## Overview

- Users can select Good, Neutral, or Bad.
- Totals and a Positive % are displayed once feedback exists.
- Data is persisted in the browser via localStorage.
- Built with React 19 and Vite 7; includes ESLint configuration for development quality.

## Tech Stack

- Language: JavaScript (ES Modules)
- Framework/Library: React 19
- Build Tool/Dev Server: Vite 7
- Linting: ESLint 9 with React Hooks and React Refresh plugins
- Package Manager: npm (package-lock.json present)

## Requirements

- Node.js: 18+ recommended (compatible with Vite 7)
    - TODO: Confirm exact Node version policy for this course/repo.
- npm: comes with Node.js

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server (HMR):
   ```bash
   npm run dev
   ```
   Vite will print a local URL (typically http://localhost:5173).
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build locally:
   ```bash
   npm run preview
   ```
5. Lint the code:
   ```bash
   npm run lint
   ```

## Available Scripts

Defined in package.json:

- dev — Start Vite dev server
- build — Build for production using Vite
- preview — Preview the built app locally
- lint — Run ESLint on the project

## Entry Points

- index.html — Vite HTML entry that includes the root container and script tag.
- src/main.jsx — React bootstrap (creates root and renders <App />).
- src/App.jsx — Main application component orchestrating state and UI.

## Environment Variables

- This project currently does not define custom environment variables.
- Vite uses import.meta.env for env access; variables must be prefixed with VITE_.
    - Example (in a .env file):
      ```env
      VITE_API_BASE_URL=https://example.com
      ```
    - Access in code:
      ```js
      const baseUrl = import.meta.env.VITE_API_BASE_URL
      ```
- TODO: Add any required environment variables if/when backend integration is introduced.

## Tests

- No test setup or scripts are present in this repository.
- TODO: Add tests (e.g., Vitest/RTL) and a test script in package.json if required.

## Project Structure

```
.
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ eslint.config.js
├─ public/
├─ src/
│  ├─ App.jsx
│  ├─ App.css
│  ├─ main.jsx
│  ├─ index.css
│  ├─ description/
│  │  └─ Description.jsx
│  ├─ option/
│  │  └─ Option.jsx
│  └─ feedback/
│     ├─ Feedback.jsx
│     └─ Feedback.module.css
└─ README.md
```

## How It Works (Brief)

- App.jsx manages three pieces of state: good, neutral, bad; loads from and persists to localStorage.
- Option.jsx renders buttons to increment counts and reset when totals exist.
- Feedback.jsx displays counts, total, and positive percentage or a placeholder when no feedback.

## Accessibility and Browser Support

- Modern browsers supported via Vite defaults.
- TODO: Define explicit browser support matrix if needed.

## Deployment

- Output is a static bundle in dist/ after `npm run build`.
- Can be hosted on any static hosting (e.g., GitHub Pages, Netlify, Vercel).
- TODO: Document chosen hosting/deployment steps if standardized for this course.

## License

- No license file found in the repository.
- TODO: Add a LICENSE file and update this section accordingly (e.g., MIT).

## Acknowledgements

- Based on the React + Vite starter. The original template notes about Babel/SWC and TypeScript have been superseded by
  this project-specific README. See Vite and React docs for more information.
