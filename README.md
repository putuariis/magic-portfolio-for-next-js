# I Putu Arisgunarta — Climate Portfolio

A personalized, responsive Next.js portfolio for **I Putu Arisgunarta**, based on the supplied CV and portfolio materials.

## Positioning

**Climate Analyst | Applied Climatology**

The visual direction combines a scientific/data-oriented interface with an earthy, environmental palette inspired by tropical landscapes and fieldwork.

Content is grounded in the supplied profile:
- Applied climatology and applied meteorology
- Climate and air-quality research
- AI-based temperature modeling
- PM2.5 / ESP32 IoT monitoring
- Climate education and youth engagement
- Project coordination, MEL, reporting, and stakeholder communication

## Main sections

- **Home** — positioning, impact snapshot, selected projects
- **Profile** — professional experience, education, and technical toolkit
- **Research** — project case studies
- Blog and gallery routes are disabled by default because the supplied profile does not require them.

## Run locally

Requires Node.js 18.17+.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Vercel

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`.
5. Output directory: leave the Vercel default.
6. Deploy.
7. Add your custom domain in Vercel's project settings.

The canonical site URL is configured in `src/resources/once-ui.config.ts`.

## Where to edit content

- `src/resources/content.tsx` — identity, home copy, experience, education, skills, social links.
- `src/resources/once-ui.config.ts` — domain, theme, navigation, effects.
- `src/app/work/projects/*.mdx` — research/project case studies.
- `src/resources/custom.css` — visual refinements.

## Important

The project uses the original Magic Portfolio / Once UI architecture. The placeholder designer/developer profile and placeholder case studies were replaced with the supplied climate profile and project information.

The project cover graphics in `public/images/projects/` are custom-generated visual placeholders for the case studies; replace them with original research figures, screenshots, or photographs when available.

## Carbon Calculator

If you have a standalone `Carbon Calculator.html`, place it in `public/` and link it from a project card or a dedicated route. The source was not included in the uploaded ZIP, so it has intentionally not been fabricated.


## Integrated Carbon Tool

The portfolio now includes the provided `index (7).html` as the interactive **Carbon Footprint Detective** tool.

- Portfolio route: `/carbon-calculator`
- Static calculator source: `public/carbon-calculator.html`
- Project page: `src/app/work/projects/carbon-footprint-detective.mdx`
- The calculator is surfaced from the main navigation and homepage.

The calculator keeps its client-side logic and methodology notes intact while its visible branding has been adapted to **I Putu Arisgunarta — Climate × Data × Community**.
