# Editorial Memo — Style Guide

Design system extracted from the reference deck ("COG Transformation Update —
Biweekly Briefing"). This is the single source of truth for the
`editorial-memo-deck` skill. **Do not deviate** from the colors, fonts, type
scale, or component patterns below when generating a deck — that consistency
is the entire point of the skill.

## Fonts

| Role  | Family            | Notes                                             |
|-------|-------------------|----------------------------------------------------|
| Serif | Libre Baskerville | Titles, hero numbers, subtitles. Regular/Bold/Italic. |
| Sans  | Source Sans 3     | Eyebrows, body copy, labels, CTAs. Regular/Bold.  |

Both are free Google Fonts. If they aren't installed on the machine that
opens the deck, PowerPoint will substitute a fallback and the layout will
still work, but install them for a faithful render:
https://fonts.google.com/specimen/Libre+Baskerville
https://fonts.google.com/specimen/Source+Sans+3

Never substitute a different serif/sans pair. Never use a third font.

## Color palette

Paper (light) slides:

| Token         | Hex       | Use                                                              |
|---------------|-----------|-------------------------------------------------------------------|
| `paper`       | `#FAF8F4` | Slide background                                                 |
| `ink`         | `#1A1A17` | Headlines, hero numbers, strong body text                        |
| `body_gray`   | `#3C3C37` | Body paragraph copy                                              |
| `muted_gray`  | `#797972` | Eyebrow labels (default), footers, unit labels                   |
| `hairline`    | `#DDDCD8` | Thin rules, card borders                                         |
| `card_border` | `#C8C4B8` | Slightly stronger card borders when needed                       |
| `band_black`  | `#121212` | Top/bottom frame bands on paper slides                           |
| `oxblood`     | `#8B1A1A` | **Primary accent.** Italicized title phrase, default card accent bar, "THE GATE" label |
| `status_red`  | `#C62828` | Status dot/label: "AT RISK" / "PROGRAM-LEVEL"                    |
| `status_green`| `#2E7D32` | Status dot/label: "ON TRACK"                                     |
| `status_amber`| `#B07900` | Status dot/label: "EXECUTION" / caution                          |

Dark closing slide only:

| Token           | Hex       | Use                                        |
|-----------------|-----------|---------------------------------------------|
| `dark_bg`       | `#16140F` | Closing-slide background                    |
| `cream_text`    | `#F2EFE6` | Headlines/body on dark background           |
| `tan_text`      | `#A29D8E` | Secondary text on dark background           |
| `terracotta`    | `#D98A59` | Accent on dark background: decision numbers, section eyebrow, CTA links |

**No other colors.** Status colors (`status_red` / `status_green` /
`status_amber`) are the only palette members that carry semantic meaning —
don't repurpose them decoratively, and don't invent a fourth status color.

## Type scale

All sizes in points, for a 13.333″ × 7.5″ (16:9) slide.

| Token                 | Size | Family            | Weight/Style        | Color (default)     | Tracking |
|-----------------------|------|--------------------|-----------------------|----------------------|----------|
| `micro_footer`        | 8    | Source Sans 3      | Regular, ALL CAPS    | `muted_gray`         | 1.5pt    |
| `eyebrow`              | 10.5 | Source Sans 3      | Bold, ALL CAPS       | `muted_gray`*        | 1.5pt    |
| `cta_link`             | 10.5 | Source Sans 3      | Bold, ALL CAPS       | `oxblood`/`terracotta` | 1.5pt  |
| `card_label`           | 10.5 | Source Sans 3      | Bold, ALL CAPS       | `ink`/`cream_text`    | 1pt      |
| `body`                 | 12   | Source Sans 3      | Regular               | `body_gray`          | 0        |
| `stat_unit_label`      | 12   | Libre Baskerville  | Regular, small caps look (type as caps) | `muted_gray` | 0 |
| `subtitle`             | 15   | Libre Baskerville  | Regular               | `body_gray`          | 0        |
| `decision_item_title`  | 16   | Libre Baskerville  | Bold                  | `ink`/`cream_text`    | 0        |
| `h3_card_title`        | 18   | Libre Baskerville  | Bold (+ one italic run) | `ink` + `oxblood` italic | 0  |
| `h2_section_title`     | 28   | Libre Baskerville  | Bold (+ one italic run) | `ink` + `oxblood` italic | 0  |
| `h1_cover_title`       | 36   | Libre Baskerville  | Bold (+ one italic run), 2 lines | `ink` + `oxblood` italic | 0 |
| `hero_number`          | 34   | Libre Baskerville  | Bold                  | `ink`                | 0        |
| `hero_number_xl`       | 44   | Libre Baskerville  | Bold                  | `ink`                | 0        |
| `decision_number`      | 40   | Libre Baskerville  | Bold                  | `terracotta`          | 0        |

\* `eyebrow` swaps to `oxblood` for section/breadcrumb eyebrows (e.g. "SECTION
III RISKS"), `status_amber`/`terracotta` on the decisions section eyebrow,
and stays `muted_gray` for plain context labels (e.g. "BIWEEKLY
TRANSFORMATION UPDATE"). It is still the *same size and weight* — only the
color changes with context.

Never introduce a font size outside this table. Never bold body copy wholesale
— use bold **inline** for emphasis phrases only (the reference deck bolds
2-4 word spans inside sentences, e.g. "insufficient detail and weak
project-management structure").

## Signature components

### 1. Frame bands
Every paper-background slide is bookended by solid `band_black` bars: a thin
band at the very top (~0.35″) and a heavier band at the very bottom (~0.55″).
This is the deck's structural signature — don't drop it, don't recolor it.

### 2. Memo header (cover slide only)
Left: eyebrow `INTERNAL MEMORANDUM — CONFIDENTIAL` in `oxblood`.
Right: three right-aligned lines, each `To` / `From` / `Date` as a bold
`ink` label immediately followed by a `body_gray` value, all at `body` size.

### 3. Eyebrow + hairline breadcrumb
Interior slides open with a breadcrumb: a small caps label (e.g.
`PROGRESS · 01` in `muted_gray` followed by the section name in `oxblood`,
or `SECTION III` in `muted_gray` + `RISKS` in `oxblood`), immediately
followed by a hairline rule that runs to the slide's right margin at the
same baseline.

### 4. Serif title with one italicized phrase
Every title (`h1_cover_title` / `h2_section_title` / `h3_card_title`) is set
in Libre Baskerville Bold, with **exactly one** short phrase (2-4 words) set
in Libre Baskerville *Italic* and colored `oxblood` (or `terracotta` on the
dark slide). Never italicize a whole title; never italicize more than one
phrase; never skip the italic phrase entirely — it's the title's focal point.

### 5. Status dot pill
A small filled circle (~0.09″ diameter) in a status color, immediately
followed by its ALL CAPS label at `card_label`/`eyebrow` size in the *same*
status color. Three values only: `ON TRACK` (green), `AT RISK` /
`PROGRAM-LEVEL` (red), `EXECUTION` (amber). Always right-aligned opposite a
title or name on the same line.

### 6. Hero numbers
A large `hero_number`/`hero_number_xl` figure in `ink`, Libre Baskerville
Bold, immediately followed (same baseline, small gap) by a small
`stat_unit_label` in `muted_gray` (e.g. "FTE", "FNOL / FIRST CONTACT").
Used for the headline metric in stat cards and progress rows.

### 7. Stat / progress cards
A row of 2-3 cards, each a hairline-bordered rectangle (`hairline` stroke,
no fill or `paper` fill) containing: card-label line (bold caps label, left;
status pill, right) → hero number + unit → 1-2 lines of `body` description.
Cards are separated by the border itself, not extra gutters.

### 8. Two-column split
Section content splits into two columns separated by a single vertical
hairline rule. Each column repeats the card-label + status-pill header
pattern, then a hero number or bullet list.

### 9. Risk / exposure card
A card with a **left accent bar** (3pt solid rule, full card height) in
`status_red` or `oxblood` depending on severity, card-label + status pill
header, `h3_card_title` (with italic phrase), body paragraph with 1-2 bold
emphasis spans, and a bottom callout: `THE GATE` (tiny oxblood tracked
label) + one line describing the unblock condition.

### 10. Numbered decision / ask
A large `decision_number` (serif bold, terracotta) beside a
`decision_item_title` + body paragraph + a `cta_link` line ending in " →".
Laid out as a 2×2 grid on the closing slide.

### 11. Footer
Bottom-left: `micro_footer` label (deck name, all caps, tracked). Bottom-right:
page number. Sits inside the paper area just above the bottom band (light
slides) or directly on the dark background (closing slide).

### 12. Dark closing slide
Full-bleed `dark_bg`. Same breadcrumb/eyebrow + title pattern as interior
slides but recolored: eyebrow and italic title phrase use `terracotta`,
body copy uses `cream_text`, secondary text uses `tan_text`. Reserved for
the decisions/asks (or any "what we need from you") slide — the one deliberate
tonal break in the deck. Don't use the dark background anywhere else, and
don't use paper background for this slide type.

## Hard rules

- Only these two fonts, only this palette, only the components above.
- Exactly one italicized phrase per title, always `oxblood`/`terracotta`.
- Status colors are semantic — green/red/amber only ever mean on-track/at-risk/execution-caution.
- Every paper slide gets the top+bottom black frame bands; the dark slide never does.
- Eyebrows and micro labels are always ALL CAPS with tracking, never title case.
- Don't add drop shadows, gradients, rounded corners beyond a hairline stroke, or icons — the aesthetic is flat, typographic, and print-derived.
