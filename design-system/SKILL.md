---
name: bloomgard-jaali
description: Bloomgard's design language (Jaali). Use whenever building or restyling any Bloomgard interface, website, landing page, dashboard, app screen, email, deck or graphic, so it matches the brand: tokens, type, colour, motifs, product glyphs and components.
---

# Bloomgard Jaali — build guide for agents

Apply this whenever you create or change UI for Bloomgard or any Bloomgard product. The full brand book is `DESIGN.md` in this folder; read it once before a large piece of work. This file is the short version you must follow.

## 1. Choose the register

- **Editorial**: websites, launch pages, decks, emails, social graphics. Big serif type on near-white `kora`, the blue-and-orange twin glow with a mandala, a motif belt, blue gradient bands, wide spacing.
- **Product**: app screens, dashboards, settings, tables, forms. Geist sans at 13–14px, compact spacing, light and dark themes, motifs nearly invisible.

## 2. Wire up the tokens

Copy this folder into the project (for example `design/jaali/`). Then:

- **Any web stack**: load the fonts link below, import `tokens/tokens.css`, then `css/jaali.css`. Put `class="j-root"` on `<body>`.
- **Tailwind v4**: after `@import "tailwindcss";` import `tokens/tokens.css` and `tokens/tailwind.css`. Use `bg-canvas`, `text-ink`, `text-ink-soft`, `border-line`, `bg-primary text-on-primary`, `text-accent-text`, `font-display`, `font-mono`, `rounded-lg`.
- **Native, Figma or other tools**: read values from `tokens/tokens.json` (light first, then dark).

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap">
```

Theme: light by default; set `data-theme="dark"` on `<html>` for dark, or leave it unset to follow the OS.

## 3. Rules you must follow

- Use only role tokens for colour (`canvas`, `surface`, `surface-raised`, `line`, `line-strong`, `ink`, `ink-soft`, `primary`, `on-primary`, `accent`, `accent-text`, `success`/`warning`/`danger`/`info` and their `-soft`). Never hard-code hex values in components, and never use framework default greys, pure black or pure white.
- `ink-mute` is decorative only. Small readable text uses `ink-soft`.
- Primary action: `j-btn j-btn--primary` (ink pill, turns sindoor on hover). One primary button per view.
- `accent` (sindoor) appears once per view as emphasis: an italic serif phrase, an active dot, a key number. Not as a background for large areas.
- The main colours are white, blue, orange and black. Blue (`brand-blue`, `neelam`, the gradients) gives depth; orange (`accent`) is for one large italic phrase or fill per view; small orange text uses `accent-text`.
- `marigold` only on dark and blue surfaces.
- Gradients: only the four signature gradients in `DESIGN.md` (`--glow-blue`, `--glow-orange`, `--band-blue`, `--card-ink-blue`).
- Headlines: Instrument Serif, regular weight, tight leading, `text-wrap: balance`. Body: Geist. Labels, badges, table headers, IDs: Geist Mono uppercase with letter-spacing.
- Separate with 1px borders and surface steps. Shadows only on floating layers (`--shadow-pop`).
- Radii: pills for buttons, tabs and badges; 10px for inputs; 16px for cards and tables.
- Spacing on the 4px grid (`--space-*`).
- Status always carries a word or icon, never colour alone.
- Icons: Lucide, 16px in dense UI, 20px elsewhere. No emoji anywhere.
- Copy: plain, sentence case, British/Indian spelling, buttons name the action ("Create lead"). Never claim a planned feature is live.
- Motion: `--ease-out`, 150ms hovers, 300ms panels, an 800ms fade-up reveal once. Respect reduced motion. Content must be readable without animation.
- Do not use other gradients, glassmorphism, stock photos of people, "Live"/"New" pill tags as decoration, or coloured left-border cards.

## 4. Brand assets in this folder

- `assets/logo/wordmark-kajal.png` (on light) and `wordmark-kora.png` (on dark). Never redraw the wordmark.
- `assets/glyphs/<product>.svg`: product marks. `assets/glyphs/inline/` versions use `currentColor` for inline SVG.
- `assets/app-icons/<product>.svg`: app icon template (glyph in kora on neel, marigold dot).
- `assets/motifs/mandala.svg`, `jaali-tile-light.svg`, `jaali-tile-dark.svg`. CSS helpers: `.j-jaali`, `.j-grain`, `.j-spin-slow`.

A new product needs a new glyph: follow "Product identity" in `DESIGN.md` (120 grid, 1.25 stroke, round caps, one idea, legible at 16px), then make its app icon from the template.

## 5. Components

Class reference (all in `css/jaali.css`; see `specimen.html` for live examples):

| Component | Markup |
|---|---|
| Button | `<button class="j-btn j-btn--primary">` · `--secondary` · `--ghost` · `--accent` · `--danger` · sizes `--sm` `--lg` `--icon` |
| Field | `<label class="j-field"><span class="j-field__label">Email</span><input class="j-input"><span class="j-field__hint">…</span></label>`; also `j-select`, `j-textarea`, `aria-invalid="true"` + `j-field__error` |
| Badge | `<span class="j-badge j-badge--success">Active</span>` · `--accent` `--warning` `--danger` `--info` `--plain` |
| Card | `<div class="j-card">` · `--raised` · `--ink` · `--interactive`; equal groups in `<div class="j-panels">` |
| Metric | `<div class="j-metric"><span class="j-label">Pipeline</span><span class="j-metric__value">₹4.2 Cr</span><span class="j-metric__delta j-metric__delta--up">+12.4%</span></div>` |
| Table | `<div class="j-table-wrap"><table class="j-table">…` numbers in `<td class="j-num">` |
| Tabs | `<div class="j-tabs" role="tablist"><button class="j-tab" role="tab" aria-selected="true">` |
| Sidebar | `<nav class="j-sidebar">` with `j-sidebar__brand`, `j-sidebar__group`, `<a class="j-nav-item" aria-current="page">` |
| Type | `j-display-xl/l/m/s`, `j-lede`, `j-eyebrow`, `j-title`, `j-heading`, `j-subheading`, `j-body`, `j-body-sm`, `j-caption`, `j-label`, `j-data` |

Money in Indian products uses the Indian system and symbol: ₹4,20,000 or ₹4.2 L / ₹4.2 Cr; set it in tabular numerals.

## 6. Before you finish

Check: both themes readable; one primary button and one accent moment per view; no hard-coded colours; fonts load; focus outlines visible; works at 375px width with no sideways scroll.
