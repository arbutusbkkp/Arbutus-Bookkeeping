# Arbutus Bookkeeping

Marketing site for Arbutus Bookkeeping (Logan Shim, CPA) — a single scrolling
page: nav → hero → services → pricing → about → CTA → contact → footer.

Built with Vite + React, implementing the design handed off from Claude
Design (see **Design source**, below).

## Development

```
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

## Contact form

The contact form and the CTA email-capture form POST to a form service
(Formspree-compatible: a JSON POST to a single endpoint). To enable real
delivery:

1. Create a form at [formspree.io](https://formspree.io) (or any service
   that accepts `POST` with `Content-Type: application/json`) pointed at
   arbutusbkkp@gmail.com.
2. Copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` to the form's
   endpoint URL.
3. Rebuild. Without this set, submissions are logged to the browser console
   instead of sent anywhere, and the UI still shows the success state.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages
on every push to `main`.

One-time setup after pushing this repo to GitHub:

1. Repo **Settings → Pages → Build and deployment → Source**: select
   "GitHub Actions".
2. If using a real form endpoint, add it as a repo/environment variable
   named `VITE_FORM_ENDPOINT` (**Settings → Environments → github-pages →
   Variables**, or **Settings → Secrets and variables → Actions → Variables**)
   so the build step can read it.
3. Push to `main` — the workflow builds and deploys automatically.

The Vite build uses a relative `base` path, so it works both at a domain
root and at a GitHub Pages project subpath
(`https://<user>.github.io/<repo>/`) without extra configuration.

## Project structure

```
index.html            Vite entry HTML
src/
  main.jsx            React root
  App.jsx              Page composition (header, sections, footer)
  content.js           Brand info, nav, services, pricing tiers, credentials
  sections/            Hero, Services, Pricing, About, Closing, Contact
  layout/              Container, Section
  components/          Design-system components (buttons, cards, forms, nav, ...)
  lib/formSubmit.js    Shared form-POST helper
  styles/              Design tokens (colors, type, spacing, ...) + globals
  assets/              Logo and headshot images
```

## Design source

This site was implemented from a Claude Design handoff bundle, kept for
reference:

- `chats/chat1.md` — the design conversation and decisions (pricing copy,
  tier names, bio content, logo treatment, etc.)
- `project/` — the original HTML/JS/JSX prototype (in-browser Babel + a
  compiled design-system bundle, not meant to be shipped as-is) and the
  original image assets.

If the design changes again in Claude Design, treat a new handoff bundle
the same way: read the chat transcript for intent, then update
`src/content.js` and the relevant section/component under `src/` to match —
there's no need to regenerate the whole app from scratch.
