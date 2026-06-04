# Colytics AI — Typography System

This document explains **what each typography class means** and **when to use it**. All styles are defined in `app/globals.css` and exported as constants in `lib/typography.ts`.

---

## Font families

| Role | Family | Used for |
|------|--------|----------|
| **Sans (default)** | **DM Sans** | Body copy, UI labels, buttons, navigation, forms, H3–H6 (sans), tables, FAQ |
| **Serif (display)** | **Instrument Serif** | H1, H2, large H3 (`heading-3-lg`, `heading-3-serif`), prose article titles |

`body` uses `font-sans` (DM Sans). Do not add one-off `font-serif` or arbitrary `text-[Npx]` on marketing content—use the classes below.

---

## Semantic headings (HTML + class)

| HTML | Class | When to use |
|------|-------|-------------|
| **`<h1>`** | `heading-1` | **One per page.** Landing hero only (largest display size). |
| **`<h1>`** | `heading-1-page` | Blog index, policy pages (via markdown), any standard page title. |
| **`<h1>`** | `heading-1-inverse` | Blog post hero on dark background. |
| **`<h2>`** | `heading-2` | Major section headings (Features, Pricing, FAQ, blog sections). |
| **`<h2>`** | `heading-2-inverse` | Section headings on dark backgrounds (e.g. CTA band). |
| **`<h3>`** | `heading-3` | Card titles, persona names, small subsection labels (sans, 15px). |
| **`<h3>`** | `heading-3-lg` | Feature/pricing card titles, form step titles (serif). |
| **`<h3>`** | `heading-3-serif` | Module grid titles (serif, 18px). |
| **`<h4>`–`<h6>`** | `heading-4` … `heading-6` | Nested subsections, FAQ questions (`heading-5`), footer column labels (`heading-6`). |

**Aliases:** `heading-2-md`, `heading-2-compact`, and `heading-2-sm` now map to the same visual scale as `heading-2` (unified H2 styling).

**Do not use `<h1>`–`<h6>` for mockup chrome** (dashboard panels, chart labels). Use `ui-heading` or `text-ui-*` on a `<p>` / `<span>`.

---

## Body text

| Class | Size | Weight | Line height | Color | When to use |
|-------|------|--------|-------------|-------|-------------|
| `text-lead` | 15px (fluid) | 350 | 1.625 | `#525252` | Hero subcopy, intro paragraphs under H1 |
| `text-body` | 15px | 400 | 1.625 | `#737373` | Default section description, footer CTAs |
| `text-body-dark` | 15px | 400 | 1.75 | `#3a3a3a` | Emphasized body on light backgrounds |

---

## UI & component text (non-heading)

| Class | Size | Weight | When to use |
|-------|------|--------|-------------|
| `section-label` | 11px | 600 | Eyebrow above H2 (“THE PROBLEM”, “FAQ”) |
| `text-ui-xs` | 11px | 600 | Captions, table headers, mobile nav group labels |
| `text-ui-sm` | 13px | 400 | Footer links, meta lines, small list items |
| `text-ui-md` | 14px | 500 | Nav links, button text (pair with `text-button`) |
| `text-ui-lg` | 15px | 400 | Mockup panel titles, floating panel body |
| `text-label` | 13px | 600 | Form field labels |
| `text-button` | 14px | 500 | Custom `<button>` / link CTAs not using `<Button>` |
| `text-caption` | 11px | 500 | Helper text, timestamps (normal case) |
| `text-badge` | 11px | 700 | “Featured”, “Most Popular” pills |
| `ui-heading` | 15px | 600 | Mockup section titles (not document outline) |

Shadcn `<Button>` uses `text-sm font-medium` (14px)—aligned with `text-button`.

---

## Long-form content

| Wrapper | When to use |
|---------|-------------|
| `prose-content` | Blog article body, legal/policy HTML from markdown |

Inside `prose-content`, use semantic `<h2>`, `<h3>`, `<p>`, `<ul>` **without** extra `text-*` or `font-*` classes. Spacing and sizes are applied automatically.

---

## CSS tokens (`:root`)

Defined in `app/globals.css` for maintenance:

- `--font-family-sans`, `--font-family-serif`
- `--text-h1-size`, `--text-h1-hero-size`, `--text-h2-size`, `--text-h3-*`, `--text-body-size`
- `--text-ui-xs-size` through `--text-ui-lg-size`
- `--text-foreground`, `--text-muted`, `--text-body-color`, `--text-body-dark-color`

---

## Rules for developers

1. **One `<h1>` per page.**
2. **Section title = `<h2 className="heading-2">`.**
3. **Subsections = `<h3>`** with `heading-3`, `heading-3-lg`, or `heading-3-serif` as appropriate.
4. **Paragraphs = `text-body` or `text-lead`** — not `text-[15px]` or `text-muted-foreground` alone.
5. **No arbitrary pixel font sizes** on marketing pages; mockup data labels may stay compact if documented as UI chrome.
6. Import classes from `lib/typography` when composing in TSX: `className={typography.h2}`.

---

## Pages covered

- Landing (`/`) — all section components
- Blog index, posts, long-form article
- Privacy, Terms, Cookie policies
- Header, footer, modals, early access, cookie consent
- ROI calculator, pricing, FAQ, forms

---

## Mockup / dashboard exception

Product mockups (`dashboard-mockup`, `citation-analysis-mockup`, `ai-visibility-report-mockup`, `roi-mockup`, `ask-ai-mockup`) intentionally use **compact 11–13px labels** to simulate dense SaaS UI. These are **not** document headings and do not use `heading-*` classes. Prefer `text-ui-xs` / `text-ui-sm` when touching mockup copy; do not promote mockup labels to H2/H3.
