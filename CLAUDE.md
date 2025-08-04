# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VitePress-based documentation site for Slipmat.io v3, hosted at https://docs.slipmat.io. The documentation covers user guides, technical references, and development information for the Slipmat.io platform.

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

## Development Notes

- Site uses force-dark appearance mode
- Includes Plausible analytics for docs.slipmat.io domain
- Local search provider configured
- Edit links point to GitHub repository for easy contribution
- Content is organized in a hierarchical structure matching the sidebar navigation