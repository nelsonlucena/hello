---
name: editorial-memo-deck
description: Generate PowerPoint (.pptx) decks in the "Editorial Memo" house style — warm paper background, Libre Baskerville + Source Sans 3, oxblood accents, eyebrow labels, serif titles with one italicized phrase, hairline rules, status dot pills, serif hero numbers, and a dark closing slide for decisions/asks. Use whenever the user asks for a PowerPoint/deck/slides in this style, references "the memo deck," or asks to update/extend a deck built with this skill. Do not use for other visual styles — this skill encodes one specific, fixed design system.
---

# Editorial Memo Deck

Generates `.pptx` files in a fixed editorial/memo design system reverse-engineered
from a reference deck ("COG Transformation Update — Biweekly Briefing"). The
design system — colors, fonts, type scale, component patterns — is documented
in `references/style-guide.md` and is **not up for reinterpretation**: the
whole value of this skill is visual consistency across every deck it produces.
Read that file before building or editing any content spec.

## How it works

1. Read `references/style-guide.md` to (re)internalize the palette, type
   scale, and component patterns.
2. Write a **content spec** (JSON) describing the deck's slides. See
   `assets/example_content.json` for a complete worked example matching the
   reference deck, and the schema notes below.
3. Run the generator:
   ```
   python3 scripts/build_deck.py <content.json> <output.pptx>
   ```
   (Requires `python-pptx` — `pip install python-pptx` if not already
   installed.)
4. Open/inspect the resulting `.pptx`. If LibreOffice is available in the
   environment, `soffice --headless --convert-to pdf <output.pptx>` and
   render to PNG is a fast way to visually QA layout before handing it back.

Never hand-edit slide XML or bypass `scripts/deck_kit.py`'s component
functions — every visual element in a deck should trace back to one of that
module's helpers so decks stay consistent with each other.

## Slide types

The generator supports five slide types (`type` field in the content spec),
matching the five distinct slide patterns in the reference deck:

| type              | Use for                                                      |
|-------------------|----------------------------------------------------------------|
| `cover`           | Memo-style title slide: header (To/From/Date), title, subtitle, 2-3 stat cards |
| `progress`        | Single-topic status slide: breadcrumb, title, hero-number stat row, two detail columns |
| `two_column`      | Two named sub-topics side by side, each with its own status pill + hero number + bullets |
| `risks`           | 1-3 accent-bordered risk/exposure cards with a "THE GATE" callout each |
| `decisions_dark`  | The dark closing slide: numbered asks/decisions in a 2-column grid |

If a deck needs a slide shape not covered by these five, **compose it from
the same primitives** in `deck_kit.py` (`add_eyebrow`, `add_title`,
`add_status_pill`, `add_hero_number`, `add_card`, `add_bullets`,
`add_body_text`, `add_footer`, `add_frame_bands`) rather than inventing new
colors or styles. Add a new builder function to `build_deck.py` following the
existing ones as a template.

## Content spec schema (by example)

Top level:
```json
{ "deck_name": "Shown in the footer", "slides": [ {"type": "...", ...}, ... ] }
```

Rich text (titles, body copy, bullets) uses a segment list so callers can
mark italics/bold inline without touching markup:
- A **title line** is a list of segments; each segment is a plain string or
  `{"text": "...", "italic": true}`. Exactly one italic segment per title.
- A **body paragraph** is a list of segments; each is a plain string or
  `{"text": "...", "bold": true}` for inline emphasis.
- An **eyebrow/breadcrumb** is a list of plain strings or
  `{"text": "...", "accent": true}` (accent = oxblood/terracotta, default = muted gray).

Status values are exactly `"ON TRACK"`, `"AT RISK"`, `"PROGRAM-LEVEL"`, or
`"EXECUTION"` — these map to the fixed green/red/red/amber status colors.
Don't invent new status strings; they'll render in the default gray.

See `assets/example_content.json` for the full shape of each slide type's
fields (`cover`, `progress`, `two_column`, `risks`, `decisions_dark`).

## Hard constraints (do not violate)

- Fonts: Libre Baskerville (serif) + Source Sans 3 (sans) only.
- Colors: only the tokens in `references/style-guide.md`. No gradients, no
  new accent colors, no shadows/rounded corners.
- Exactly one italicized phrase per title, colored oxblood (paper slides) or
  terracotta (dark slide).
- Every paper-background slide gets the top+bottom black frame bands; the
  `decisions_dark` slide is the only full-dark slide and never gets them.
- Eyebrows/footers/status labels are always ALL CAPS with letter-spacing.
- Reuse `deck_kit.py` components — don't draw ad hoc shapes/text with raw
  python-pptx calls in a builder.

## Known environment gotcha

python-pptx computes shape geometry in EMU (integers). Dividing an `Inches`/
`Emu` value with plain `/` produces a Python float, which corrupts the
`.pptx` XML (non-integer EMU attributes) and makes PowerPoint/LibreOffice
refuse to open the file even though the zip itself looks valid. Always use
`deck_kit.div(value, n)` for any EMU division (e.g. splitting a row into N
equal columns) instead of `value / n`.
