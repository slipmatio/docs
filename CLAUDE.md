# Slipmat Docs Project Overview

This is a VitePress-based documentation site for a live streaming platform for musicians called Slipmat.io, hosted at https://docs.slipmat.io.

## Tone

When writing, use casual and upbeat tone instead of formal language. Keep in mind that you're writing for musicians and artists, often not familiar with technical details and technology (other than their musical instruments) in general. The site is built for artists by artists and the tone of the language should support that.

## Common Commands

- **Development server**: `npm run dev` or `pnpm dev`
- **Build**: `npm run build` or `pnpm build`
- **Preview built site**: `npm run preview` or `pnpm preview`

## Architecture

- **Framework**: VitePress (static site generator based on Vite + Vue)
- **Content Structure**:
  - `/guides/` - User-focused guides (v3 migration, account management, artist guides, technical guides)
  - `/reference/` - Technical reference materials (Frankie, open source info, glossary)
  - `/development/` - Development documentation (contributing, changelog)
- **Configuration**: `.vitepress/config.mts` contains site configuration, navigation, and sidebar structure
- **Theme**: Custom theme files in `.vitepress/theme/` with custom styling and components
- **Content Format**: Markdown files with frontmatter for page configuration

## Key Files

- `.vitepress/config.mts` - Main VitePress configuration
- `index.md` - Homepage layout configuration (references SlipmatIndex.vue component)
- `.vitepress/theme/SlipmatIndex.vue` - Custom homepage component
- Package manager: Uses pnpm (note pnpm-workspace.yaml and pnpm-lock.yaml)
