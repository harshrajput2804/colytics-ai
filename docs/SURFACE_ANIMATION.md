# Global surface animation — guide

The landing page background is a fixed gold canvas animation rendered by `GlobalSurfaceAnimation`. Content sits above it (`z-10`); the canvas is `z-0` and does not block clicks.

**Main file:** `components/global-surface-animation.tsx`

---

## How it behaves

| Area on screen | Animation visibility |
|----------------|----------------------|
| **Header** (`#site-header`) | Visible (full width) |
| **Hero** (`#landing-hero`) | Visible (full width) |
| **Footer** (`#site-footer`) | Visible (full width) |
| **All other sections** (stats, features, pricing, etc.) | **Hidden** — no animation |

While you scroll, the script measures which zones intersect the viewport and **clears** the canvas in every vertical band that is not header, hero, or footer. Example: top of the screen in the hero → animation shows; lower part of the same screen already in “Stats” → no animation there.

The header is `position: fixed`, so the top strip always counts as a visible zone when it’s on screen.

---

## Quick tuning (most common)

Open `components/global-surface-animation.tsx` and edit the **two exported constants** at the top. Save and refresh the browser.

```ts
export const SURFACE_ALPHA_SCALE = 0.85
export const HERO_FULL_BLEED_ALPHA_SCALE = 1.35
```

| Constant | What it controls | Turn **up** when… | Turn **down** when… |
|----------|------------------|-------------------|---------------------|
| `SURFACE_ALPHA_SCALE` | Overall strength in visible zones | Animation feels too faint | Header/hero/footer feel too busy |
| `HERO_FULL_BLEED_ALPHA_SCALE` | Extra boost when header, hero, or footer cover more of the viewport (`1` = no boost) | Hero should pop more | Those zones feel too strong |

**Suggested ranges**

- `SURFACE_ALPHA_SCALE`: `0.45` (subtle) → `0.85` (strong)
- `HERO_FULL_BLEED_ALPHA_SCALE`: `1.0` → `1.35`

---

## Where animation is allowed

Defined in `FULL_BLEED_SELECTORS` in the same file:

```ts
const FULL_BLEED_SELECTORS = [
  "#site-header",
  "#landing-hero",
  "#site-footer",
]
```

**Add another visible section** (e.g. CTA):

1. Give the section an `id` in its component, e.g. `id="cta"`.
2. Add `"#cta"` to `FULL_BLEED_SELECTORS`.

**Remove animation from a zone:** remove its selector from the array (or remove the `id` from the DOM).

**Required DOM ids (homepage):**

| Element | File | ID |
|---------|------|-----|
| Header | `components/header.tsx` | `site-header` |
| Hero | `components/hero-section.tsx` | `landing-hero` |
| Footer | `components/footer.tsx` | `site-footer` |

---

## Colors

Gold palette matches [colytics.ai](https://colytics.ai):

| Token | Hex | Used for |
|-------|-----|----------|
| Primary | `#A87C1B` | Glows, lines, nodes |
| Bright | `#C2941F` | Secondary glow (top-right) |

To change brand color in the animation, edit `SURFACE_GOLD` and `SURFACE_GOLD_BRIGHT` (RGB strings, no `#`) in `global-surface-animation.tsx`.

---

## Where it’s mounted

- **Homepage:** `app/page.tsx` — `<GlobalSurfaceAnimation />` is rendered once at the root, before the main layout.
- Other routes do not include it unless you add the component there.

---

## Accessibility

If the user has **Reduce motion** enabled in the OS/browser, the animation draws **one static frame** and does not loop.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| No animation | Confirm `GlobalSurfaceAnimation` is on the page; check console for errors. |
| Hero not showing animation | Ensure `id="landing-hero"` exists on the hero `<section>`. |
| Footer has no animation | Ensure `id="site-footer"` on the `<footer>` element. |
| Animation on body sections | Remove extra selectors from `FULL_BLEED_SELECTORS`; only header/hero/footer should be listed. |
| Too weak in hero | Raise `SURFACE_ALPHA_SCALE` or `HERO_FULL_BLEED_ALPHA_SCALE`. |
| Too strong in hero only | Lower `HERO_FULL_BLEED_ALPHA_SCALE`. |
| Change not visible | Hard refresh; confirm you edited `global-surface-animation.tsx` and saved. |

---

## Checklist after changes

1. Scroll homepage: hero shows animation → mid sections (none) → footer shows animation.
2. Header stays animated while scrolling.
3. Toggle OS “reduce motion” if you care about that path.

---

*Animation is limited to `FULL_BLEED_SELECTORS` only; no left/right side masks on body sections.*
