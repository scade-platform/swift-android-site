# swift-android-site

Swift for Android site, built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Project Structure

```
.
├── public/                  # static assets (favicon, logo, newsletter form, CNAME)
├── src/
│   ├── assets/               # images embedded via Astro's Image component
│   ├── content/docs/docs/    # documentation pages, served under /docs/
│   └── pages/index.astro     # landing page, served at /
├── astro.config.mjs
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :----------------- | :------------------------------------------- |
| `npm install`       | Installs dependencies                        |
| `npm run dev`        | Starts local dev server at `localhost:4321` |
| `npm run build`      | Build the production site to `./dist/`      |
| `npm run preview`    | Preview the build locally before deploying  |

## Editing content

- **Landing page**: edit `src/pages/index.astro`.
- **Documentation**: add or edit Markdown/MDX files under `src/content/docs/docs/`. Each file is exposed as a route under `/docs/`.
