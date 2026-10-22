# Bloomgard Jaali

Jaali is Bloomgard's design language. A jaali is the carved stone lattice of Indian architecture: a strict geometric structure that lets light and air through. The system works the same way. A small, strict set of tokens and shapes holds every Bloomgard surface together while leaving each product room to breathe.

It covers two registers that share one set of tokens:

- **Editorial** is for the company website, product launch pages, decks and print. It uses large serif type, ivory paper, the mandala and generous space.
- **Product** is for applications people work in every day: the CRM, dashboards, consoles and admin tools. It uses compact sans-serif type, dense layouts, both light and dark themes, and the motifs at a whisper.

Pick the register by the job of the screen, not by the product. A product's marketing page is editorial; its settings page is product.

## Principles

1. **Built in Mumbai, made for the world.** Draw from Indian materials and geometry (cotton paper, kohl ink, vermilion, marigold, indigo, lattice screens, stepwells) and express them with Bay Area restraint: few elements, exact spacing, nothing decorative that does not carry meaning.
2. **Infrastructure-grade calm.** Bloomgard runs systems people depend on. Screens look steady and legible before they look exciting. Reserve colour for meaning and for one moment of emphasis per view.
3. **One bold thing per screen.** On a page, that is one italic serif phrase in `accent`, one mandala, one dark `surface-inverse` band or one large metric. Never several at once.
4. **Structure is information.** Numbered eyebrows, rules, badges and glyphs always say something true: a real sequence, a real state, a real product.

## Voice and writing

- Write plainly, as a knowledgeable person talks. Short sentences, active voice, no jargon a customer would not use.
- Use sentence case everywhere: headings, buttons, menu items. Uppercase appears only in `label` and `eyebrow` styles, which set it in CSS, so write the source text in sentence case.
- Use British and Indian spelling: organisation, centre, colour, optimise.
- Use "we" for Bloomgard and "you" for the reader. Never "users" in customer-facing copy.
- No emoji, no exclamation marks, no hype words (revolutionary, seamless, cutting-edge, game-changing).
- Buttons state exactly what happens: "Create lead", "Export CSV", "Invite teammate". Confirmations echo the verb: "Lead created".
- Errors say what went wrong and how to fix it: "That email is already on another account. Sign in instead, or use a different email."
- Be honest about status. Live things are called live; planned things are described as being built. Never present a roadmap item as shipped.

Real examples from bloomgard.co:

> Intelligence for the systems *that run the world.*

> Each division takes on one critical system, and all seven share the same AI core.

## Colour

### Brand palette

The four main colours are **white, blue, orange and black**: a near-white page, sapphire-to-indigo blues for depth, one bright vermilion orange for emphasis and kohl black for type. Marigold, peacock and lotus support them. Brand values never change between themes.

| Token | Hex | Name and origin | Use |
|---|---|---|---|
| `kora` | `#fbfaf7` | Kora, whitewashed cotton | The light canvas: white with the faintest warmth. |
| `kora-light` | `#ffffff` | Pure white | Cards, raised surfaces, text on dark bands. |
| `kajal` | `#15120e` | Kajal, kohl | Ink, primary buttons, the motif belt, dark cards. |
| `neelam` | `#2747d8` | Neelam, sapphire | The bright blue: glows, gradient ends, glyphs on division pages, links, focus. |
| `akash` | `#e8eeff` | Akash, sky | Soft blue washes behind sections and hover rows. |
| `neel` | `#18214a` | Neel, indigo | Inverse bands, app icon ground, the middle of every blue gradient. |
| `neel-deep` | `#0e1430` | Deep indigo | Footers and the dark start of blue gradients. |
| `sindoor` | `#ea5420` | Sindoor, bright vermilion | The orange accent: the italic phrase in a headline, the orange glow, primary-button hover. 3.5:1 on `kora`, so only 24px+ or as a fill. |
| `marigold` | `#e5a03a` | Genda, marigold | Highlights on dark and blue surfaces only. Fails contrast on `kora`. |
| `peacock` | `#0f6e6a` | Peacock teal | Data series and supporting illustration. |
| `lotus` | `#b8476d` | Lotus pink | Data series only. |

### Semantic roles

Build interfaces only from the role tokens below. They switch automatically between the light theme (Kora) and the dark theme (Raat).

- **Surfaces.** Set the page on `canvas`. Group content on `surface`. Lift inputs, tables and popovers onto `surface-raised`. Use `surface-inverse` for one full-bleed dark band per page, and `surface-ink` for a single dark feature card.
- **Lines.** Use `line` for dividers and card borders. Use `line-strong` for borders of controls a person operates (inputs, secondary buttons), because it meets 3:1 against every surface.
- **Text.** Set body copy in `ink`. Set secondary copy, captions, labels and placeholders that must be read in `ink-soft`. `ink-mute` is decorative only (eyebrows at large sizes, watermarks, disabled hints) because it reaches only 3.5:1 on `canvas` in the light theme. On `surface-inverse` and `surface-ink`, use `ink-inverse`.
- **Actions.** The primary button is `primary` with `on-primary` text (black with white text in light, ivory with ink in dark). On hover it turns `accent`; the website keeps white text there, which reads at 3.6:1, so in products use `on-accent` (ink, 5.2:1). Use `accent` for large italic display phrases and fills; use `accent-text` (`#b83a0e`) for accent-coloured words at body size. `accent-soft` is the tint behind accent badges.
- **Blue.** `brand-blue` carries the blue side of the brand in UI: division glyphs at rest, list-row hover text, links and the second chart series. `brand-blue-soft` is the matching wash for hovered rows and soft section backgrounds.
- **Focus.** Every focusable element shows a 2px `focus` outline with 2px offset: sapphire in light theme, marigold in dark.
- **Status.** `success`, `warning`, `danger` and `info` each have a `-soft` background. Always pair a status colour with a word or icon. Success is teal-leaning and danger is crimson, so they differ in lightness as well as hue.
- **Data.** Colour series in the order `data-1` to `data-6`. Charts with one series use `data-1`; use `ink-soft` for axes and `line` for gridlines.

Never use pure black or grey from a framework default. Neutrals here are warm: they carry a little of the kora cotton. Pure white is reserved for cards and raised surfaces on the `kora` page.

### Signature gradients

Gradients are part of the brand, always in blue, with orange only as a glow. Use these four and nothing else (they live in `tokens.css` as `--glow-blue`, `--glow-orange`, `--band-blue` and `--card-ink-blue`):

- **Twin glow.** Behind an editorial hero, a large blue radial glow (`#6f8dff` → `#2747d8`, about 600px, 45–50% opacity, heavily blurred) overlaps a slightly smaller orange glow (`#ffb15c` → `#ea5420`, about 460–520px, 40–45%). They must touch and melt into each other; the soft violet where they meet is intended. The mandala sits over both.
- **Blue band.** Full-bleed dark sections (vision, manifesto) use a 160° linear gradient from `neel-deep` through `neel` to `neelam`, with the jaali lattice and a marigold mandala on top. Headline italics on it are `marigold`.
- **Ink-to-blue card.** A single feature card goes from `kajal` through `neel` to `neelam` at 135°.
- **Sky wash.** A section may fade from `akash` at 60% at the top to white, to set it apart without a border.

Never use purple-to-pink, rainbow or multi-stop decorative gradients.

## Typography

Three families, all free on Google Fonts:

- **Instrument Serif** (`--font-display`) for display type and page titles. Regular weight only. Its italic is the brand's voice of emphasis.
- **Geist** (`--font-sans`) for all interface and body text. Weights 400 and 500; 600 only for numbers inside dense tables.
- **Geist Mono** (`--font-mono`) for eyebrows, labels, badges, codes, IDs and tabular data.

Load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap">
```

### Editorial scale

| Style | Family | Size / line height | Use |
|---|---|---|---|
| `display-xl` | Display | 120 / 0.98 | One per page: the hero thesis. 56px on phones. |
| `display-l` | Display | 72 / 1.0 | Section openers, division names. |
| `display-m` | Display | 48 / 1.05 | Statements, card titles in feature rows. |
| `display-s` | Display | 32 / 1.15 | Pull quotes, small feature titles. |
| `lede` | Sans | 20 / 32 | The paragraph under a headline, about 60 characters a line. |
| `eyebrow` | Mono | 11.5 / 16, 0.14em, uppercase | Section labels such as "(02) Divisions". |

In display type, put the second half of a thesis in italic `accent-text`: "Intelligence for the systems *that run the world.*" Use this once per page.

### Product scale

| Style | Family | Size / line height | Weight | Use |
|---|---|---|---|---|
| `title` | Display | 32 / 36 | 400 | Page titles and empty states. One per screen. |
| `heading` | Sans | 18 / 26 | 500 | Card and section headings. |
| `subheading` | Sans | 15 / 22 | 500 | Group headings inside cards, dialog titles. |
| `body` | Sans | 14 / 20 | 400 | Default interface text. |
| `body-sm` | Sans | 13 / 18 | 400 | Tables, dense lists, nav items. |
| `caption` | Sans | 12 / 16 | 400 | Hints and timestamps, in `ink-soft`. |
| `label` | Mono | 11 / 14, 0.1em, uppercase | 500 | Table headers, field groups, badges. |
| `data` | Mono | 13 / 18, tabular | 400 | IDs, amounts, codes. |
| `metric` | Display | 40 / 40, tabular | 400 | The headline number of a metric tile. |

Rules: keep body text near 65 characters wide (`--reading-max`). Give headings `text-wrap: balance`. Never set sans-serif text bold for emphasis in running copy; rephrase or use `ink` against `ink-soft`.

## Space, layout and shape

- **Spacing** follows a 4px grid: `space-1` (4) through `space-32` (128). Inside components use `space-2` to `space-6`. Between page sections use `space-24` to `space-32` in editorial and `space-8` to `space-12` in product.
- **Layout.** Content maxes out at `--content-max` (1280px) with side gutters of 16px on phones, 24px on tablets and 40px on desktop. Editorial pages use a 12-column grid where a label column (3 columns) sits beside content (9 columns). Product screens use a 240px sidebar and a fluid main area.
- **Radius.** `radius-pill` for buttons, tabs and badges. `radius-md` (10px) for inputs and nav items. `radius-lg` (16px) for cards, tables and panels. `radius-xl` (24px) for one feature card. `radius-xs`/`radius-sm` for checkboxes and tiny chips.
- **Elevation.** Separate things with borders and surface steps, not shadows. `shadow-pop` is reserved for elements that float above the page: menus, popovers, dialogs and toasts.
- **Hairline panels.** To group equal items (principles, pillars, settings), place them in a `j-panels` grid: 1px `line` gutters inside one `radius-lg` frame.

## Motion

- Ease everything with `--ease-out` (`cubic-bezier(0.22, 1, 0.36, 1)`).
- Hover and press: `duration-fast` (150ms). Panels and menus: `duration-base` (300ms). Section reveals: `duration-reveal` (800ms), fading up 24px, once.
- The mandala may rotate at one turn per 120 seconds. Nothing else moves on its own.
- Respect `prefers-reduced-motion`: drop reveals and the rotation entirely.
- Content is always readable before any animation finishes. Never leave text at zero opacity waiting for a scroll.

## Motifs

Motifs are what make a Bloomgard surface recognisable without the logo. Use at most one large motif per view.

- **Mandala.** A generated, line-drawn mandala of concentric rings, petals, spokes and dots. Place it as ambient art behind a hero or a feature band, partly off-canvas, at 10–14% `ink` on light or 12% `marigold` on `surface-inverse`. In product UI, use it only on empty states, login and onboarding screens, at 6–8%. Never put text directly on its densest centre.
- **Jaali lattice.** A 56px tile of a diamond, a circle and (on dark) a cross. Lay it over `surface-inverse` bands, footers and app sidebars in dark theme at 6–7% stroke opacity. It should be felt, not seen.
- **Grain.** A fine paper noise over the light `canvas` on editorial heroes and feature sections. It makes kora read as material. Do not use it in dense product views.
- **Twin glow.** The overlapping blue and orange glows described under Signature gradients. Editorial only.
- **Motif belt.** A slim kajal band, about 88px tall, with dashed marigold stitching along both edges and a single repeating row of Indian motifs: buta (paisley), rangoli star, chakra and lotus, joined by small jaali diamonds, drawn in white, marigold and pale blue (`#7f9bff`) line at 1.4px. It drifts sideways once every 48 seconds. The page's glyph sits in a round kajal medallion with a marigold ring, larger than the belt so it reads as a buckle. Use it once per page, between a hero and the content, in place of a strip of words or numbers. Never put text on it.

## Product identity

Every Bloomgard product and division gets a **glyph**: a geometric line mark drawn on a 120-unit grid with a 1.25-unit stroke, round caps and no fills except a single focal dot. Each glyph comes from Indian geometry and states what the product does:

| Product | Glyph | Idea |
|---|---|---|
| Enterprise | Interlocking squares in a dashed ring | The organisation as coordinated structure |
| Energy | Surya: a sun with long and short rays | Power and light |
| Data | Stepwell: nested terraces | Layers descending to a cool centre |
| QNTM | Three orbitals around a nucleus | The atom (anu) |
| Finance | Lotus of eight petals in coin rings | Wealth with purpose |
| Education | Rising arcs over an open page | Knowledge unfolding |
| Life | Seed of life: seven circles | Growth and health |

To make a glyph for a new product: start from the 120×120 grid, keep the mark inside a 104-unit circle, use only circles, arcs, straight lines and squares, keep it legible at 16px, and give it one idea a customer would recognise. Glyphs render in `ink` at rest and `brand-blue` on hover or when active; on dark belts and medallions they are `marigold`.

**App icons** place the glyph in `kora` on a `neel` rounded square (radius 22.5% of the side) with one `marigold` dot at the top right. Every product icon follows this template, so the family reads as one company.

**Naming.** Products are "Bloomgard" plus one plain English word: Bloomgard CRM, Bloomgard Energy. In product chrome, show the glyph and the product word in `title` style; the company wordmark appears in the footer, sign-in and about screens.

**Wordmark.** The Bloomgard wordmark is a heavy grotesk with a full stop. Use `wordmark-kajal.png` on light surfaces and `wordmark-kora.png` on dark ones, at a minimum height of 16px. Do not recolour, stretch or set it in another font.

## Iconography

Use Lucide (lucide.dev) for interface icons, at 16px in dense UI and 20px elsewhere, with the default 2px stroke, coloured by the surrounding text token. Do not mix icon sets. Use glyphs for products and Lucide for actions; never use a glyph as a button icon. No emoji in the interface.

## Data visualisation

Lead with the number, then the chart. Put the headline figure in a `metric` style above its chart. Use `data-1` for the series that matters most and `ink-soft`/`line` for everything structural. Area fills use the series colour at 12%. Mark the latest point with a 4px dot. Label axes in `label` style. Never use more than six series; group the rest as "Other" in `data-6`.

## Accessibility

- Every text pairing in both themes meets 4.5:1, except `ink-mute`, which is reserved for decoration and text 24px and larger.
- Control borders (`line-strong`), focus rings and meaningful icons meet 3:1.
- Status is never colour alone: a badge always has a word, an alert always has an icon and a sentence.
- Interactive targets are at least 28px tall in dense tables and 36px elsewhere; 44px on touch-first screens.
- Support keyboard focus everywhere with the `focus` outline. Never remove outlines without replacing them.

## Do and don't

- Do use one italic accent phrase per page. Don't colour several words in different hues.
- Do let `kora` breathe with wide margins. Don't fill empty space with cards.
- Do use borders to separate. Don't stack shadows.
- Do use the mandala as atmosphere. Don't use it as a bullet, an icon or a loading spinner.
- Do use Devanagari only for a real phrase that belongs in the content, set in `--font-deva`. Don't scatter Hindi words as decoration.
- Don't use purple-to-blue gradients, glassmorphism, emoji, stock photography of people at laptops, or coloured left-border accents on cards.
