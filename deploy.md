# JAS Platform Build & Deploy (DEPLOY.md)

## Development Setup
1. `npm install` — Installs Next.js, Tailwind, Recharts, and Framer Motion.
2. `cp .env.example .env.local` — Configure API keys (Anthropic, Leaflet).
3. `npm run dev` — Start the local development server with mock API.

## Storybook
- `npm run docs:storybook` — Builds the interactive component library documentation.
- Location: `/storybook`

## Deployment
- **CI/CD:** Automated builds on Vercel.
- **Audit:** `npm run audit:tokens` — Runs the automated Tailwind token compliance checker before merge.
- **Testing:** `npm run test:rtl` — Runs Playwright RTL regression suite.
