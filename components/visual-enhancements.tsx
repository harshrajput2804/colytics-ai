"use client"

import { useDecorativeParallax, useHeadingReveal, usePageSectionReveal } from "@/app/visual-animations"

export function VisualEnhancements() {
  useHeadingReveal()
  useDecorativeParallax({ selector: ".parallax-layer" })
  usePageSectionReveal()
  return null
}
