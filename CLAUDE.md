# Slipmat Docs

This is a VitePress-based documentation site for a live-streaming platform for musicians called Slipmat.io, hosted at <https://docs.slipmat.io>

**Important**: read local repo info and other notes from `LOCAL_NOTES.md` before ANY task.

## Tone

You're writing for artists, who are often not familiar with technical terms and Web technology in general (other than their musical instruments), so avoid technical jargon. The site is built for artists by artists, and the tone of the language should support that. Do not overdo it; keep the overall tone professional.

Write tightly, do not add any unneeded filler. All documentation should have as long as possible shelf-life; avoid unnecessary details and everything that rots as soon as the code changes slightly.

## Writing Rules

- **Never** invent things. Every single sentence and claim must be based on reality. Either actual source code or _explicit_ statement from the user. Do not add ANY unverified claims or unneeded filler.

### Terms

- `Event` when talking about events, NEVER a show unless you **actually** are talking about (not yet public) Show model
- `Slipmat` when talking about the site in general, `Slipmat.io` when extra formal or talking about the actual Web site
- `Web`, not `web`

## Key Files

- `.vitepress/config.mts` - Main VitePress configuration
- `index.md` - Homepage layout configuration (references SlipmatIndex.vue component)
- `.vitepress/theme/` - Custom styling and components
- `.vitepress/theme/SlipmatIndex.vue` - Custom homepage component

## Commands

- **Development server**: `pnpm dev`
- **Build**: `pnpm build`
- **Preview built site**: `pnpm preview`
