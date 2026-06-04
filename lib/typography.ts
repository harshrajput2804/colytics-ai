/**
 * Typography class names — must stay in sync with `app/globals.css`.
 * See `docs/TYPOGRAPHY.md` for usage guide.
 */
export const typography = {
  /** Page hero only (largest display H1) */
  h1: "heading-1",
  /** Standard page H1 (blog index, etc.) */
  h1Page: "heading-1-page",
  /** H1 on dark hero bands (blog posts) */
  h1Inverse: "heading-1-inverse",
  /** Major section title (H2) — use everywhere for section headings */
  h2: "heading-2",
  /** @deprecated Use `h2` — aliases for backward compatibility */
  h2Md: "heading-2",
  h2Compact: "heading-2",
  h2Sm: "heading-2",
  /** H2 on dark backgrounds (CTA band) */
  h2Inverse: "heading-2-inverse",
  /** Card / list subsection title (H3, sans) */
  h3: "heading-3",
  /** Feature card or pricing title (H3, serif) */
  h3Lg: "heading-3-lg",
  /** Module card title (H3, serif, smaller) */
  h3Serif: "heading-3-serif",
  h4: "heading-4",
  h5: "heading-5",
  h6: "heading-6",
  lead: "text-lead",
  body: "text-body",
  bodyDark: "text-body-dark",
  prose: "prose-content",
  uiHeading: "ui-heading",
  uiXs: "text-ui-xs",
  uiSm: "text-ui-sm",
  uiMd: "text-ui-md",
  uiLg: "text-ui-lg",
  label: "text-label",
  button: "text-button",
  caption: "text-caption",
  badge: "text-badge",
  sectionLabel: "section-label",
} as const

export type TypographyClass = (typeof typography)[keyof typeof typography]
