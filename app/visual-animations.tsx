"use client"

import { useEffect } from "react"

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
}

export function useHeadingReveal() {
  useEffect(() => {
    if (prefersReducedMotion()) return
    const selector = [
      ".reveal-heading",
      "main header h1",
      "main section > h1",
      "main section > h2",
      "main section > h3",
      "main article > h1",
      "main article > h2",
      "main article > h3",
      "main section > div > h2",
      "main section > div > h3",
      "main section > div > div > h2",
      "main section > div > div > h3",
    ].join(", ")
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
      (el) => !el.closest("[data-no-heading-reveal]"),
    )
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).classList.add("is-visible")
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 },
    )

    els.forEach((el) => {
      el.classList.add("reveal-ready")
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])
}

export function useDecorativeParallax(options?: { selector?: string }) {
  useEffect(() => {
    const selector = options?.selector ?? ".parallax-layer"
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (!els.length) return

    if (prefersReducedMotion()) {
      // Leave them in the initial position; still crawable.
      return
    }

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        raf = 0
        const y = window.scrollY || 0
        for (const el of els) {
          const speedAttr = el.getAttribute("data-speed")
          const speed = speedAttr ? Number(speedAttr) : 0.08
          const translate = y * speed
          el.style.transform = `translate3d(0, ${translate}px, 0)`
        }
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [options?.selector])
}

export function usePageSectionReveal(options?: { selector?: string }) {
  useEffect(() => {
    if (prefersReducedMotion()) return
    const selector = options?.selector ?? "main.landing-page > section"
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    )

    els.forEach((el) => {
      el.classList.add("page-section-reveal")
      io.observe(el)
    })

    return () => io.disconnect()
  }, [options?.selector])
}

