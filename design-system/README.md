# Bloomgard Jaali

The design language for every Bloomgard product, page and document. One folder you copy into any project; it works for people and for AI coding agents.

Open `specimen.html` in a browser to see the whole system, including a sample product screen in light and dark.

## What's inside

| Path | What it is |
|---|---|
| `DESIGN.md` | The brand book: principles, voice, colour, type, space, motion, motifs, product identity, accessibility. |
| `SKILL.md` | The short rule sheet for AI agents. Also a ready-made Claude Code skill. |
| `AGENTS.md` | Pointer for other agents (Cursor, Codex, Copilot, v0, Lovable…). |
| `tokens/tokens.css` | Every token as CSS custom properties, light and dark themes. |
| `tokens/tailwind.css` | Tailwind CSS v4 theme mapping (`bg-canvas`, `text-ink`, `font-display`…). |
| `tokens/tokens.json` | Tokens as data, for native apps, design tools and scripts. |
| `css/jaali.css` | Base styles and components as plain CSS classes (`j-btn`, `j-card`, `j-table`…). |
| `assets/` | Wordmarks, product glyphs, app icons, mandala and jaali motifs. |
| `specimen.html` | Live reference page. |

## Use it in a new product

1. Copy this folder into the project, for example to `design/jaali/`.
2. Load the fonts:
   ```html
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap">
   ```
   In Next.js, use `next/font/google` with `Geist`, `Geist_Mono` and `Instrument_Serif` instead, and point `--font-sans`, `--font-mono` and `--font-display` at them.
3. Import the styles.
   - Plain CSS or any framework: `tokens/tokens.css`, then `css/jaali.css`, and add `class="j-root"` to `<body>`.
   - Tailwind v4: in your global CSS,
     ```css
     @import "tailwindcss";
     @import "../design/jaali/tokens/tokens.css";
     @import "../design/jaali/tokens/tailwind.css";
     @import "../design/jaali/css/jaali.css"; /* optional component classes */
     ```
4. Pick a theme: light by default; `data-theme="dark"` on `<html>` forces dark; leave it unset to follow the operating system.
5. Give the product its glyph and app icon from `assets/` (or make a new one; see "Product identity" in `DESIGN.md`).

## Teach an AI agent the system

- **Claude Code (one project):** copy this folder to `.claude/skills/bloomgard-jaali/` in the project. Claude loads `SKILL.md` automatically when it works on UI.
- **Claude Code (every project on your machine):** copy it to `~/.claude/skills/bloomgard-jaali/`.
- **Claude.ai and Claude Desktop:** zip this folder and upload it under Settings → Capabilities → Skills, or attach `SKILL.md` and `DESIGN.md` to a Project's knowledge.
- **Cursor, Codex, Copilot, Windsurf:** keep the folder in the repo and point the tool's rules file at `design/jaali/SKILL.md` (for example, add "Follow design/jaali/SKILL.md for all UI work" to `AGENTS.md`, `.cursor/rules` or `.github/copilot-instructions.md`).
- **v0, Lovable, Bolt:** paste `SKILL.md` into the project instructions and upload `tokens/tokens.css` and `css/jaali.css`.

A typical prompt: "Build the leads table screen for Bloomgard CRM using the Jaali design system, product register, both themes."

## Keeping it in sync

This folder is the source of truth. When a value changes, update `tokens/tokens.css`, `tokens/tokens.json` and the table in `DESIGN.md` together, then copy the folder to each product. The Bloomgard website (`src/app/globals.css` in this repository) predates the pack and keeps its own copy of the editorial values; it already matches the light theme.
