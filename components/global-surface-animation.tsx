"use client"

import { useEffect, useRef } from "react"

type SurfaceState = {
  scrollProgress: number
  ctaBoost: number
}

type MaskBand = {
  y0: number
  y1: number
  fullBleed: boolean
}

// Visibility tuning — see docs/SURFACE_ANIMATION.md

export const SURFACE_ALPHA_SCALE = 0.85
export const HERO_FULL_BLEED_ALPHA_SCALE = 1.35

const FULL_BLEED_SELECTORS = [
  "#site-header",
  "#landing-hero",
  "#site-footer",
]

/** Matches colytics.ai --gold (#A87C1B) */
const SURFACE_GOLD = "168,124,27"
const SURFACE_GOLD_BRIGHT = "194,148,31"

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value))
}

function mergeIntervals(intervals: [number, number][]): [number, number][] {
  if (intervals.length === 0) return []
  const sorted = [...intervals].sort((a, b) => a[0] - b[0])
  const merged: [number, number][] = [sorted[0]]
  for (let i = 1; i < sorted.length; i++) {
    const last = merged[merged.length - 1]
    const [a, b] = sorted[i]
    if (a <= last[1]) last[1] = Math.max(last[1], b)
    else merged.push([a, b])
  }
  return merged
}

function computeMaskBands(viewportHeight: number): MaskBand[] {
  const intervals: [number, number][] = []

  for (const selector of FULL_BLEED_SELECTORS) {
    const el = document.querySelector(selector)
    if (!el) continue
    const rect = el.getBoundingClientRect()
    const y0 = Math.max(0, rect.top)
    const y1 = Math.min(viewportHeight, rect.bottom)
    if (y1 > y0) intervals.push([y0, y1])
  }

  const merged = mergeIntervals(intervals)
  const bands: MaskBand[] = []
  let cursor = 0

  for (const [a, b] of merged) {
    if (cursor < a) {
      bands.push({ y0: cursor, y1: a, fullBleed: false })
    }
    bands.push({ y0: a, y1: b, fullBleed: true })
    cursor = b
  }

  if (cursor < viewportHeight) {
    bands.push({ y0: cursor, y1: viewportHeight, fullBleed: false })
  }

  if (bands.length === 0) {
    bands.push({ y0: 0, y1: viewportHeight, fullBleed: false })
  }

  return bands
}

/** Hide animation outside header / hero / footer vertical bands. */
function applyViewportMask(
  ctx: CanvasRenderingContext2D,
  w: number,
  bands: MaskBand[]
) {
  ctx.globalCompositeOperation = "destination-in"
  ctx.fillStyle = "rgba(0,0,0,0)"

  for (const band of bands) {
    if (band.fullBleed) continue
    ctx.fillRect(0, band.y0, w, band.y1 - band.y0)
  }

  ctx.globalCompositeOperation = "source-over"
}

export function GlobalSurfaceAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const stateRef = useRef<SurfaceState>({ scrollProgress: 0, ctaBoost: 0 })

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d", { alpha: true })
    if (!context) return

    let rafId = 0
    let width = 0
    let height = 0
    let dpr = 1
    let alphaScale = SURFACE_ALPHA_SCALE
    const reducedMotion = media.matches

    const surfaceAlpha = (value: number) => value * alphaScale

    const nodes = Array.from({ length: 60 }, (_, i) => ({
      seed: i * 37.91,
      size: 1.5 + Math.random() * 2,
    }))

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const updateScrollState = () => {
      const doc = document.documentElement
      const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1)
      const scrollProgress = clamp01(window.scrollY / maxScroll)

      const cta = document.getElementById("cta")
      let ctaBoost = 0
      if (cta) {
        const rect = cta.getBoundingClientRect()
        const triggerPoint = window.innerHeight * 0.92
        ctaBoost = clamp01(
          (triggerPoint - rect.top) / Math.max(window.innerHeight * 0.75, 1)
        )
      }

      stateRef.current = { scrollProgress, ctaBoost }
    }

    const draw = (time: number) => {
      const t = time * 0.001

      const { scrollProgress, ctaBoost } = stateRef.current

      const maskBands = computeMaskBands(height)
      const fullBleedCoverage =
        maskBands
          .filter((b) => b.fullBleed)
          .reduce((sum, b) => sum + (b.y1 - b.y0), 0) / Math.max(height, 1)

      alphaScale =
        SURFACE_ALPHA_SCALE *
        (1 + fullBleedCoverage * (HERO_FULL_BLEED_ALPHA_SCALE - 1))

      const base = 0.035
      const scrollGain = Math.pow(scrollProgress, 1.6) * 0.05
      const ctaGain = ctaBoost * 0.04

      const pulse = (Math.sin(t * 1.5) + 1) * 0.5

      const intensity = clamp01(
        base + scrollGain + ctaGain + pulse * 0.03
      )

      context.clearRect(0, 0, width, height)

      const driftX = Math.sin(t * 0.18) * 40
      const driftY = Math.cos(t * 0.14) * 28

      const glowA = context.createRadialGradient(
        width * 0.14 + driftX,
        height * 0.2 + driftY,
        10,
        width * 0.14 + driftX,
        height * 0.2 + driftY,
        Math.max(width, height) * 0.56
      )

      glowA.addColorStop(
        0,
        `rgba(${SURFACE_GOLD},${surfaceAlpha(0.24 * intensity)})`
      )
      glowA.addColorStop(1, `rgba(${SURFACE_GOLD},0)`)

      context.fillStyle = glowA
      context.fillRect(0, 0, width, height)

      const glowB = context.createRadialGradient(
        width * 0.88 - driftX * 0.7,
        height * 0.14 - driftY * 0.5,
        10,
        width * 0.88 - driftX * 0.7,
        height * 0.14 - driftY * 0.5,
        Math.max(width, height) * 0.5
      )

      glowB.addColorStop(
        0,
        `rgba(${SURFACE_GOLD_BRIGHT},${surfaceAlpha(0.16 * intensity)})`
      )
      glowB.addColorStop(1, `rgba(${SURFACE_GOLD_BRIGHT},0)`)

      context.fillStyle = glowB
      context.fillRect(0, 0, width, height)

      const beamAlpha = surfaceAlpha(0.02 + intensity * 0.045)

      const beam = context.createLinearGradient(
        -width * 0.2 + Math.sin(t * 0.25) * width * 0.2,
        0,
        width * 1.2 + Math.sin(t * 0.25) * width * 0.2,
        height
      )

      beam.addColorStop(0, `rgba(${SURFACE_GOLD},${beamAlpha * 0.4})`)
      beam.addColorStop(0.48, `rgba(${SURFACE_GOLD},${beamAlpha})`)
      beam.addColorStop(1, `rgba(${SURFACE_GOLD},0)`)

      context.fillStyle = beam
      context.fillRect(0, 0, width, height)

      for (let layer = 0; layer < 3; layer++) {
        context.beginPath()

        for (let x = 0; x <= width; x += 12) {
          const y =
            height * (0.55 + layer * 0.08) +
            Math.sin(x * 0.004 + t * (0.8 + layer * 0.3)) *
              (10 + intensity * 20) +
            Math.cos(x * 0.002 + t * (0.4 + layer * 0.2)) *
              (8 + intensity * 15)

          if (x === 0) context.moveTo(x, y)
          else context.lineTo(x, y)
        }

        context.lineTo(width, height)
        context.lineTo(0, height)
        context.closePath()

        context.fillStyle = `rgba(${SURFACE_GOLD},${surfaceAlpha(0.02 + intensity * 0.02)})`
        context.fill()
      }

      const nodePositions: { x: number; y: number }[] = []

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        const baseX = (i / nodes.length) * width
        const x = baseX + Math.sin(node.seed + t * 0.02) * 80
        const y = height * 0.5 + Math.cos(node.seed * 1.3 + t * 0.03) * 250
        nodePositions.push({ x, y })
      }

      for (let i = 0; i < nodePositions.length; i++) {
        for (let j = i + 1; j < nodePositions.length; j++) {
          const a = nodePositions[i]
          const b = nodePositions[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 180) {
            const alpha = surfaceAlpha(
              (1 - distance / 180) * (0.06 + intensity * 0.12)
            )

            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.strokeStyle = `rgba(${SURFACE_GOLD},${alpha})`
            context.lineWidth = 1
            context.stroke()
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        const pos = nodePositions[i]

        context.beginPath()
        context.arc(pos.x, pos.y, node.size, 0, Math.PI * 2)
        context.fillStyle = `rgba(${SURFACE_GOLD},${surfaceAlpha(0.18 + intensity * 0.22)})`
        context.fill()
      }

      for (let i = 0; i < 12; i++) {
        const start = nodePositions[i]
        const end = nodePositions[(i + 7) % nodePositions.length]
        const progress = (t * 0.08 + i * 0.13) % 1
        const x = start.x + (end.x - start.x) * progress
        const y = start.y + (end.y - start.y) * progress

        context.beginPath()
        context.arc(x, y, 2.5, 0, Math.PI * 2)
        context.fillStyle = `rgba(255,255,255,${surfaceAlpha(0.2 + intensity * 0.22)})`
        context.fill()
      }

      const particleAlpha = surfaceAlpha(0.025 + intensity * 0.07)

      for (let i = 0; i < 35; i++) {
        const seed = i * 17.31
        const px =
          ((Math.sin(seed + t * (0.08 + i * 0.005)) + 1) * 0.5) * width
        const py =
          ((Math.cos(seed * 1.7 + t * (0.06 + i * 0.004)) + 1) * 0.5) * height
        const radius = 0.8 + (i % 3) * 0.45 + intensity * 0.9

        context.beginPath()
        context.arc(px, py, radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(${SURFACE_GOLD},${particleAlpha * (0.6 + (i % 5) * 0.08)})`
        context.fill()
      }

      applyViewportMask(context, width, maskBands)

      if (!reducedMotion) {
        rafId = window.requestAnimationFrame(draw)
      }
    }

    resize()
    updateScrollState()
    rafId = window.requestAnimationFrame(draw)

    window.addEventListener("resize", resize)
    window.addEventListener("scroll", updateScrollState, { passive: true })

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("scroll", updateScrollState)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
