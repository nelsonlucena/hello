---
name: static-remix
description: Turn a PDF of winning competitor static ads into on-brand recreations for your product, using Nano Banana Pro (Gemini 3 Pro Image Preview) for image generation. Extracts ad frameworks from the PDF, asks for product URL and image counts, fetches product visuals, writes per-concept briefs, and generates images via Gemini.
---

# static-remix

Turn a PDF of winning competitor static ads into on-brand recreations for your product,
using Nano Banana Pro (Gemini 3 Pro Image Preview) for image generation.

When invoked, follow **all 9 steps below in order**. Never skip a step.
Never silently default the four required user questions in Step 3.

---

## Meta Ads Aesthetic Intelligence Layer

Apply these conversion-design principles throughout every step that produces briefs,
teardowns, prompts, or reports. They inform what you write — not override brand rules.

### Visual Hierarchy Mandate

Every creative must have exactly three visual levels:
1. **Hook element** — face, emotion, bold statement, or visual anomaly; captures attention in <1.5s
2. **Value frame** — product, benefit visual, or before/after; earns consideration
3. **Action signal** — CTA button, swipe prompt, or brand badge; drives the click

Never design with flat or equal visual weight across elements.

### Format Rules

- **Primary canvas**: 1:1 square (1080×1080px) for feed — **default for all generations**
- **Secondary canvas**: 9:16 vertical (1080×1920px) for Stories/Reels — use only when user requests
  or when the brief explicitly calls for vertical format; critical content in 1080×1350px safe zone
- Text on image: **maximum 20% of the frame**; always with contrast-boosting shadow or overlay
- **Typography**: use brand-specified typefaces first (Sora/Inter for SaudApp, product page fonts
  for other brands); if brand has no typeface spec, prefer humanist sans (DM Sans, Plus Jakarta Sans,
  Gilroy); max 2 typefaces per creative
- All text must be legible at 30% of full size (simulate mobile viewing distance)

### Aesthetic Calibration

- **Brand palette as high-contrast palette**: use the brand's dominant color as background and its
  electric accent color as the contrast driver — do not abandon the brand palette for a generic
  high-contrast scheme; treat dark brand backgrounds (e.g. #2D1B69) as inherently scroll-stopping
- **Dark or rich backgrounds** stop the scroll more reliably than white/light backgrounds — prefer
  the dark end of the brand palette when choosing background color
- Incorporate **authenticity signals** when possible: real faces, real results, UGC styling,
  TikTok-style captions
- Avoid: stock-photo aesthetics, over-polished layouts, cluttered compositions, generic gradients

### Emotional Frame

Before finalising any concept brief in Step 6, define three fields inside the brief:

```
Emotion:  <exact emotion being triggered — fear of missing out / aspiration / relief / pride / curiosity>
Promise:  <single concrete promise — one idea only; everything else splits across variants>
Identity: <the viewer's self-thought — "this is for someone like me" — complete the sentence>
```

### Conversion Checklist

Append this checklist to every concept brief and mark each item as it is verified:

```
Conversion check:
  [ ] First frame works as a frozen screenshot
  [ ] Hook resolves within 1.5 seconds
  [ ] CTA copy reflects the visual promise (not generic "Learn More" / "Saiba mais")
  [ ] Creative is thumb-safe (no critical elements in bottom 25% of frame)
  [ ] Looks like organic content at first glance
  [ ] One and only one dominant message
```

### Variant Strategy

When producing a batch:
- Produce at least one **UGC-style** and one **polished** variant per concept when concept count
  allows — vary the hook mechanism: text-led, face-led, product-led, problem-led
- Keep brand anchor consistent across all variants: same logo position, same brand color accent

### People in Images — Permanent Rule

**ALL faces, lifestyle photos, and people must match the target market.**
For SaudApp (Brazilian product): ALWAYS specify Brazilian-looking individuals — warm brown skin
tones (pele morena), dark hair, Brazilian facial features, Brazilian domestic/urban environments.
Never generate Northern European, East Asian, or generic stock-model appearances.
Include this instruction verbatim in every Gemini prompt that features a person:
> "pessoa BRASILEIRA de pele morena, traços brasileiros, cabelo escuro, ambiente brasileiro"

---

## Enhanced Visual Pattern Library

These patterns were extracted from the winning-statics PDF reference set. Apply them
when writing briefs and Gemini prompts — they are proven compositions that convert.

### US VS THEM — two proven layouts

**Layout A — Bullet-led** (text-forward):
- Strict 50/50 vertical split. Brand side left (dark brand bg), adversary side right (grey/neutral).
- 3–5 bullets per side with ✓ (brand accent color) vs ✕ (red). Product centered on VS divider.
- Headers: brand name left, adversary label right. Tagline in footer.

**Layout B — Product-photo-led** (visual-forward):
- Actual product/app photos on each side. "ours" header over brand side, "theirs" over competitor.
- Fewer bullets (2–3) — let the visual contrast carry the argument.
- Use when the product has a clear visual differentiator. More scroll-stopping than bullets alone.

### BOLD CLAIM — two distinct modes

**Polished mode**: Product/app photo dominant (40–50% frame) + clean short claim (≤6 words) in
brand typography on dark background. Outcome-first language: "Médico no celular. Em 10 minutos."

**Provocateur mode** (pattern interrupt, high urgency):
- Bright contrasting background (yellow, orange, or acid green). All-caps heavy serif or
  condensed sans. "WARNING:" / "ATENÇÃO:" prefix. Short aggressive 4–6 word headline.
- Hard CTA button in contrasting color ("RUSH MY ORDER!" / "QUERO AGORA!").
- No product photo needed — pure typographic impact stops the scroll via shock/disruption.
- Best for urgency plays and cold audiences who haven't seen the brand.

### FEATURES & BENEFITS — three layout variants

**Variant A — Number hero**: Giant number (12, 27.000, R$0,40) top-left. Product right. Icons below.

**Variant B — Spoke-wheel with illustrations**: Product/app in center. Feature names + small
illustrated icons radiating outward in a circle. More visual, more "science/completeness" feel.
Conveys breadth at a glance — viewer absorbs all benefits simultaneously without reading.

**Variant C — "WHAT'S INSIDE" two-column**: Clean two-column ingredient/feature list beside
product photo. Tagline/qualifier strip at bottom ("No Gelatin · No Artificial Flavors"). Clinical
authority. For SaudApp: "O QUE ESTÁ INCLUÍDO" with two-column assistências list.

### BEFORE & AFTER — face close-up slider

Tightest, highest-impact B&A composition:
- Face fills 90%+ of frame. "BEFORE" label top-left, "AFTER [timeframe]" top-right.
- Slider divider arrow in center — implies interactivity even as a static; triggers swipe urge.
- Minimal text — the transformation IS the message. Never explain what the viewer can see.
- **Timeframe is mandatory** on the After side: "DEPOIS DE 7 DIAS", "APÓS 2 SEMANAS".
- For non-physical products (SaudApp): Use emotional state — stressed/worried face (Before) →
  relaxed/relieved face same person (After). Same lighting, tight crop, same framing.

### TESTIMONIAL — three distinct sub-types (use as separate variants)

**Sub-type A — Dark Authority** (credibility-led):
- Near-black or deep brand-color background. Face occupies right 45–50% of frame.
- Opening quote mark (large). 2–3 short lines of quote. 5 yellow/gold stars below quote.
- Name + "Cliente Verificado" label. No product in hand — face IS the authority signal.
- Best for: masculine personas, high-trust claims, before/after health results.

**Sub-type B — Light Aspirational** (warmth-led):
- Warm beige/cream/white background. **5 stars appear at TOP of frame** (trust before skepticism).
- Person holds or uses the product — physical endorsement. Warm natural lighting.
- Quote leads with transformation outcome: "Minha vida mudou..." "Nunca mais fiquei sem..."
- Name + verified badge at bottom. Best for: feminine personas, family/lifestyle, warm verticals.

**Sub-type C — Review Card** (authenticity-led):
- White card on neutral background. No person photo — pure text.
- Bold first line of review as hero headline: "Mudou tudo!" / "Incrível!"
- 2–3 sentence paragraph review below. "Compra Verificada" badge + timestamp (e.g. "2 dias atrás").
- Looks identical to a real App Store / Google Play review = maximum UGC authenticity.
- Best for: cold audiences, skeptical buyers, high-volume social proof play.

### CLAIM-LED — two distinct tones

Minimal, product-forward format. The claim does all the work — no storytelling needed.

**Tone A — Simple/Essential** (confidence play):
- Light/neutral background. Product photo right or centered. Very short 3-word claim left:
  "SIMPLE. EFFECTIVE. ESSENTIAL." — periods between each word for rhythm and impact.
- Small body line below (1 sentence). Solid CTA button. Negative space is intentional.
- Best for: everyday-use products, supplements, apps — "the obvious choice" positioning.

**Tone B — Clinical/Proof** (authority play):
- Bold large type left (4–6 lines, each line 2–4 words): "CLINICALLY PROVEN TO / VISIBLY REDUCE /
  FINE LINES / IN 7 DAYS". Specific timeframe or stat always present.
- Product photo right. Minimal background (white or light neutral). "SHOP NOW" button.
- Best for: health, beauty, SaaS — "science backs this" positioning.

### OFFER — promo urgency variant

**Flash sale layout**: Bright contrasting background (brand accent or yellow). Large "% OFF" or
"R$X OFF" as hero element. "APENAS HOJE" / "LIMITED TIME ONLY" above the number in smaller caps.
Promo code in a bordered box. Solid CTA button below. No product photo needed — the deal IS
the hook. Append "SHOP NOW" / "ASSINE AGORA" as a button, never as plain text.

---

## Step 1 — Locate the PDF and create a dated run folder

1. **Default PDF path** (do not ask — use this unless the user provides a different one):
   ```
   ~/.claude/skills/static-remix/winning-statics.pdf
   ```
   This is the pre-loaded copy of "Copy of Winning Statics.pdf" (Nelson's winning ads
   document). If a new PDF is ever uploaded, the user will say so explicitly.

   Check if the file exists: `ls ~/.claude/skills/static-remix/winning-statics.pdf`
   If not found, tell the user and wait for them to re-upload before continuing.

2. Resolve the path (expand `~`). Confirm the file exists with `ls`.

3. Create a dated run folder:
   ```bash
   RUN_DIR=~/.claude/skills/static-remix/runs/$(date +%Y%m%d-%H%M)
   mkdir -p "$RUN_DIR/extracted" "$RUN_DIR/production"
   ```

4. Report: "Run folder created at `$RUN_DIR`."

---

## Step 2 — Extract images from the PDF, labelled by framework heading

Run a Python extraction script using PyMuPDF (`import fitz`).

### Known PDF facts (pre-analysed — use directly)

- **Heading font**: auto-detected by the extraction script (clean sans-serif, ~18pt bold)
- **6 frameworks** across 2 pages, ~2–3 example ads each:

  | Framework           | Slug                  | Page | Psychology                                        |
  |---------------------|-----------------------|------|---------------------------------------------------|
  | Us vs Them          | us_vs_them            |  1   | Split contrast, checkmarks vs X                   |
  | Bold Claim          | bold_claim            |  1   | Hero product + single bold result claim           |
  | Features and Benefits | features_and_benefits | 1  | Spoke-wheel ingredients / "What's Inside" list    |
  | Promotion           | promotion             | 1–2  | Flash sale, discount code, buy-more-get-more CTA  |
  | Testimonials        | testimonials          |  2   | Dark Authority / Light Aspirational / Review Card |
  | Claim-led           | claim_led             |  2   | Product photo + short authoritative claim + CTA   |

- **Skip banner**: Skip if width > 1.5× height AND width > 1200px.
- **Skip decorative icon**: Skip if image is < 50KB and near-monochrome.

### Python extraction script

Write to `/tmp/extract_pdf.py` and run as:
```bash
python3 /tmp/extract_pdf.py "$PDF_PATH" "$RUN_DIR"
```

```python
import fitz, os, sys, re, io
from collections import defaultdict
from PIL import Image

pdf_path = sys.argv[1]
run_dir  = sys.argv[2]
doc = fitz.open(pdf_path)

# Auto-detect heading font
font_pages = defaultdict(set)
for pno, page in enumerate(doc):
    for block in page.get_text("dict")["blocks"]:
        if block["type"] != 0: continue
        for line in block["lines"]:
            for span in line["spans"]:
                text = span["text"].strip()
                if 1 <= len(text) <= 60:
                    font_pages[(span["font"], round(span["size"]))].add(pno)

heading_font, heading_size = max(font_pages.keys(), key=lambda k: (len(font_pages[k]), k[1]))
print(f"Heading font: {heading_font} @ {heading_size}pt")

def slugify(s):
    return re.sub(r'[^a-z0-9_]', '', s.lower().replace(' ', '_'))[:40]

framework_stats = defaultdict(lambda: {"pages": set(), "images": 0})
current_heading = "UNKNOWN"
xref_seen = set()

for pno, page in enumerate(doc):
    page_headings = []
    for block in page.get_text("dict")["blocks"]:
        if block["type"] != 0: continue
        for line in block["lines"]:
            for span in line["spans"]:
                if span["font"] == heading_font and round(span["size"]) == heading_size:
                    text = span["text"].strip()
                    if text:
                        page_headings.append((span["origin"][1], text))
    page_headings.sort()

    for idx, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        if xref in xref_seen: continue
        xref_seen.add(xref)

        base_image = doc.extract_image(xref)
        img_bytes = base_image["image"]
        im = Image.open(io.BytesIO(img_bytes))
        w, h = im.size

        # Skip banners and decorative icons
        if w > 1200 and w > h * 1.5: continue
        if len(img_bytes) < 51200 and w == h: continue  # tiny icon

        rects = page.get_image_rects(xref)
        img_y = rects[0].y0 if rects else 9999

        heading_for_image = current_heading
        for (hy, ht) in page_headings:
            if hy <= img_y + 50:
                heading_for_image = ht
                current_heading = ht

        slug = slugify(heading_for_image)
        framework_stats[heading_for_image]["pages"].add(pno + 1)
        framework_stats[heading_for_image]["images"] += 1

        fname = f"{slug}_p{pno+1}_img{idx+1}.png"
        im.save(os.path.join(run_dir, "extracted", fname), "PNG")
        print(f"  Saved: {fname} [{w}x{h}]")

lines = [f"{'Framework':<30} | {'Pages':<10} | Images"]
lines.append("-" * 55)
for fw, stats in sorted(framework_stats.items()):
    pages_str = ",".join(str(p) for p in sorted(stats["pages"]))
    lines.append(f"{fw:<30} | {pages_str:<10} | {stats['images']}")
summary = "\n".join(lines)
print(summary)
with open(os.path.join(run_dir, "frameworks.txt"), "w") as f:
    f.write(summary)
```

---

## Step 3 — Ask the four required user questions (NEVER skip, NEVER default)

Use `AskUserQuestion` to ask **all four questions**. Always required.

**Question a** — Product URL
> "What is your product page URL?"

**Question b** — Total images
> "How many total images do you want to generate? (e.g. 10, 50, 100)"

**Question c** — Variations per concept
> "How many variations per concept? (Usually 2 — same framework, one axis changes per variation.)"

**Question d** — Per-framework split
Show the 6 frameworks, then ask:
```
Frameworks in your PDF:
  1. Us vs Them          — split comparison, checkmarks vs X
  2. Bold Claim          — hero product + single bold result claim
  3. Features & Benefits — spoke-wheel or "What's Inside" feature list
  4. Promotion           — flash sale, discount code, buy-more-get-more
  5. Testimonials        — Dark Authority / Light Aspirational / Review Card
  6. Claim-led           — product photo + short authoritative claim + CTA

How many images of each? Say 'even split' or give counts like
'10 Us vs Them, 10 Bold Claim, 10 Testimonials, 10 Claim-led'.
Counts must sum to [total_images].
```

### Validation

1. Compute `concepts = total_images / variations_per_concept`.
2. Sum per-framework image counts — must equal `total_images`. If not, show the mismatch and loop until valid.
3. Estimated cost: `total_images × $0.25`. If > $10, confirm before continuing.

---

## Step 4 — Fetch the product page and visually describe the product

1. If the user provided an HTML file path instead of a URL, read that file directly with the `Read` tool.
   Otherwise use `WebFetch` on the product URL.
2. **For Shopify stores**: also fetch `<product_url>.json` to get `product.images` CDN URLs.
3. Download the hero product photo to `<RUN_DIR>/product_photo.jpg` via curl.
4. **Open the photo with the `Read` tool** (multimodal). Write a concrete visual description:
   - Package shape and color
   - Cap/closure color
   - Label typography (weight, color, style)
   - Product/capsule/softgel color if visible
   - Brand color palette (primary, secondary, accent) — extract exact hex values from CSS if available
   - Distinctive graphic elements or icons
   - Overall aesthetic/mood
5. Save to `<RUN_DIR>/product_visual.txt`.
6. Report: "Product photo saved. Key visual: [one sentence]."

The product photo is passed as a reference image on every Gemini call — this is what keeps generations on-brand.

---

## Step 5 — Teardown the source examples

For each framework used in this run:
1. Pick the 1–2 best example images from `<RUN_DIR>/extracted/`.
2. Open each with the `Read` tool.
3. Write a teardown covering:
   - Framework + psychological mechanism
   - Visual hierarchy: identify the hook element / value frame / action signal in the source ad
   - Visual composition to replicate
   - Copy/overlay patterns to keep
   - What to swap in for this brand
4. Save to `<RUN_DIR>/teardowns.txt`.

---

## Step 6 — Write one production brief per concept

Use this template for every concept brief:

```
CONCEPT NN — <FRAMEWORK>
────────────────────────────────────────────────────
Scene:       <detailed visual description>
Headline:    "<exact text>"
Subheadline: "<exact text, if any>"
Body copy:   "<exact text>"
CTA:         "<exact button text — must reflect the visual promise, never generic>"
Caption:     "<feed caption>"
Offer copy:  [verbatim from product page — never invented]

Visual hierarchy:
  Hook:   <hook element — what grabs in <1.5s>
  Value:  <value frame — what earns consideration>
  Action: <action signal — what drives the click>

Emotion:  <emotion being triggered>
Promise:  <single concrete promise — one idea only>
Identity: <viewer's self-thought — "this is for someone like me...">

Conversion check:
  [ ] First frame works as a frozen screenshot
  [ ] Hook resolves within 1.5 seconds
  [ ] CTA copy reflects the visual promise
  [ ] Creative is thumb-safe (no critical elements in bottom 25%)
  [ ] Looks like organic content at first glance
  [ ] One and only one dominant message

Variant strategy:
  Axis: <one dimension that changes across variants>
  var_01: <description + hook mechanism: text-led / face-led / product-led / problem-led>
  var_02: <description + hook mechanism>
  UGC/polished note: <which variant is UGC-style, which is polished — if applicable>
────────────────────────────────────────────────────
```

Rules:
- Pricing/offer copy verbatim from product page only. Never invent numbers.
- Each brief must be self-contained.
- Vary hook mechanism across var_01 and var_02 wherever possible.
- Prefer dark brand background over white when the brand palette supports it.

Save all briefs to `<RUN_DIR>/briefs.txt`.

---

## Step 7 — Generate images with Nano Banana Pro (Gemini 3 Pro Image Preview)

### Pre-flight
1. Check `GEMINI_API_KEY` is set: `echo ${GEMINI_API_KEY:+set}` — pause and ask user if missing.
2. `chmod +x ~/.claude/skills/static-remix/scripts/gemini-image-ref.sh`

### Permanent prompt locks (inject into EVERY Gemini call)

**BRAND_LOCK** — always inject:
```
CRITICAL: Use ONLY the brand colors extracted from the product page. Reproduce the exact
product logo from the reference image. No color substitutions. Logo must be prominent and
legible. Prefer the dark end of the brand palette for the background.
```

**AESTHETIC_LOCK** — always inject:
```
AESTHETIC: High-contrast composition — dominant dark background + electric accent color.
Text covers at most 20% of the frame. Critical elements inside the central safe zone (top 10%
and bottom 25% of frame must be empty). Avoid: stock-photo aesthetics, over-polished or
corporate layouts, cluttered compositions, generic gradients. Prefer authentic feels — real
faces, real environments, UGC or TikTok-style caption overlays when the brief calls for it.
```

**PEOPLE_LOCK** — inject whenever the brief features any person or face:
```
PEOPLE: All people in this image must look Brazilian — warm brown skin (pele morena),
dark hair, Brazilian facial features and expressions, Brazilian domestic or urban environment.
No Northern European, Nordic, or East Asian appearances.
```

**SAFE_ZONE note for 9:16**: add to every vertical prompt:
```
FORMAT: 9:16 vertical (1080×1920px). All text, logos, and key visuals must sit within the
central 1080×1350px safe zone. Leave the top 10% and bottom 25% of frame clear of
critical elements to avoid crop/UI overlap.
```

### Generation loop

For each concept NN × variation MM:

1. Build prompt from brief: scene + copy overlays + brand visual description + framework style cues.
2. Append BRAND_LOCK + AESTHETIC_LOCK to every prompt.
3. If the brief features any person/face, also append PEOPLE_LOCK.
4. Aspect ratio: `"1:1"` for all generations (default). Use `"9:16"` only when the brief
   explicitly calls for Stories/Reels format or the user requests vertical.
5. Run:
```bash
~/.claude/skills/static-remix/scripts/gemini-image-ref.sh \
  "$PROMPT" \
  "1:1" \
  "$RUN_DIR/production/concept_$(printf '%02d' $NN)_var_$(printf '%02d' $MM).png" \
  "$RUN_DIR/product_photo.jpg"
```
(Replace `"1:1"` with `"9:16"` only if user requested Stories/Reels vertical format.)
6. On exit code 1: log to `<RUN_DIR>/retry_queue.txt`, continue. Retry all queued items after main loop.
7. After each success: print `[NN/TOTAL] concept_NN_var_MM.png ✓`

---

## Step 8 — Write report.txt

Write `<RUN_DIR>/report.txt`:

```
STATIC-REMIX RUN REPORT
Generated: <datetime>
Product:   <url>
Run:       <RUN_DIR>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMAGES PRODUCED
Total requested: X  |  Generated: Y  |  Failed: Z

By framework:
  <FRAMEWORK>: N images (concepts A–B)

TOP 3 CONCEPTS TO TEST FIRST
1. concept_NN — <Framework> — <one-line reason including emotional trigger>
2. concept_NN — <Framework> — <one-line reason including emotional trigger>
3. concept_NN — <Framework> — <one-line reason including emotional trigger>

TESTING PLAYBOOK
Budget per creative: R$30–50/day (or local equivalent) for 3–5 days minimum
Kill:  CTR < 0.8% after R$50 spend, or CPA > 3× target after R$150 spend
Scale: CTR > 2% + CPA below target for 3 consecutive days
Week 1: Run all top-variation ads simultaneously (var_01 of each concept)
Week 2: Kill bottom 2 CTR; add var_02 of the top 3 performers
Week 3: Scale winning creative 3×, test new hooks on same winning framework

VARIANT STRATEGY NOTE
For each concept, note which variant is UGC-style and which is polished.
Hook mechanism per variant: text-led / face-led / product-led / problem-led.

ALL CONCEPTS
CONCEPT NN — <FRAMEWORK>
  Emotion: <emotion>  |  Promise: <promise>
  Headline: "..."  Caption: "..."
  var_01: ... (<hook mechanism>)
  var_02: ... (<hook mechanism>)
  Files: concept_NN_var_01.png, concept_NN_var_02.png
```

---

## Step 9 — Final chat summary

```
Static-remix complete.

Run folder: ~/.claude/skills/static-remix/runs/<YYYYMMDD-HHMM>/
Images:     Y generated (Z failed)

Top 3 to test:
  1. concept_NN — <Framework> — <reason + emotion>
  2. concept_NN — <Framework> — <reason + emotion>
  3. concept_NN — <Framework> — <reason + emotion>

Full report: <RUN_DIR>/report.txt
```

---

## Requirements

```bash
pip install pymupdf pillow
export GEMINI_API_KEY=your_key_here
```

Helper script: `~/.claude/skills/static-remix/scripts/gemini-image-ref.sh`
PDF: `~/.claude/skills/static-remix/winning-statics.pdf`
