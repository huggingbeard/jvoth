# jvoth.com — working rules

## CONTENT LOCK (mandatory, top priority)

Never change the TEXT that describes Hans-Joachim Voth's work without his explicit OK.

This text includes: paper **abstracts**, paper **titles**, **author lists**,
**journal / venue names**, dates, the **bio**, and any **description** of his work.

- A redesign of **colours, fonts, spacing, or layout is allowed** and must **NEVER**
  change this text. A style change that alters wording is a bug.
- Any change to the words themselves needs JV's sign-off first. If in doubt, ask.

## Abstracts

Abstracts must be the **actual published abstract from the paper, verbatim** — never an
AI summary, never a shortened paraphrase. Source of truth = the paper PDF or the journal
page. Full verbatim abstracts for every paper are saved at
`C:\Users\hvoth\jvoth-abstracts\abstracts_final.json` (one row per paper, with provenance).

## Where abstracts live (so a redesign does not drop them)

- `papers/<slug>.html` — detail page: the visible `<section class="abstract">` **and**
  the JSON-LD `"abstract"` field.
- `publications.html`:
  - Forthcoming / Revisions / Working tabs use a `<details>` block.
  - Published tab uses the inline toggle: `<div class="links abs-row">` containing
    `<details class="abs-inline"><summary>Abstract</summary><p>…</p></details>` then the
    links. It sits on the same line as the links and adds no height when collapsed.
  - Books tab holds **book** blurbs, not paper abstracts — leave it alone.
- Journal/venue names use `.paper .venue` and render in the burgundy accent everywhere.
