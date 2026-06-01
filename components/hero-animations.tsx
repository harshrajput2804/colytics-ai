"use client"

import { useDecorativeParallax, useHeadingReveal } from "@/app/visual-animations"

export function HeroAnimations() {
  useHeadingReveal()
  useDecorativeParallax({ selector: ".parallax-layer" })
  return null
}
