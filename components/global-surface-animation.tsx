"use client"

import { useEffect, useRef } from "react"

type SurfaceState = {
  scrollProgress: number
  ctaBoost: number
}

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value))
}

export function GlobalSurfaceAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const stateRef = useRef<SurfaceState>({ scrollProgress: 0, ctaBoost: 0 })

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (media.matches) return

    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d", { alpha: true })
    if (!context) return

    let rafId = 0
    let width = 0
    let height = 0
    let dpr = 1

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
        ctaBoost = clamp01((triggerPoint - rect.top) / Math.max(window.innerHeight * 0.75, 1))
      }

      stateRef.current = { scrollProgress, ctaBoost }
    }

    const draw = (time: number) => {
      const t = time * 0.001
    
      const { scrollProgress, ctaBoost } = stateRef.current
    
      const base = 0.04
      const scrollGain = Math.pow(scrollProgress, 1.6) * 0.11
      const ctaGain = ctaBoost * 0.09
    
      const pulse = (Math.sin(t * 1.5) + 1) * 0.5
    
      const intensity = clamp01(
        base +
          scrollGain +
          ctaGain +
          pulse * 0.08
      )
    
      context.clearRect(0, 0, width, height)
    
      // ==================================
      // GLOWS FIRST (BACKGROUND)
      // ==================================
    
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
        `rgba(21,73,240,${0.16 * intensity})`
      )
      glowA.addColorStop(1, "rgba(21,73,240,0)")
    
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
        `rgba(34,197,94,${0.11 * intensity})`
      )
      glowB.addColorStop(1, "rgba(34,197,94,0)")
    
      context.fillStyle = glowB
      context.fillRect(0, 0, width, height)
    
      const beamAlpha = 0.02 + intensity * 0.05
    
      const beam = context.createLinearGradient(
        -width * 0.2 +
          Math.sin(t * 0.25) * width * 0.2,
        0,
        width * 1.2 +
          Math.sin(t * 0.25) * width * 0.2,
        height
      )
    
      beam.addColorStop(
        0,
        `rgba(21,73,240,${beamAlpha * 0.4})`
      )
      beam.addColorStop(
        0.48,
        `rgba(21,73,240,${beamAlpha})`
      )
      beam.addColorStop(1, "rgba(21,73,240,0)")
    
      context.fillStyle = beam
      context.fillRect(0, 0, width, height)
    
      // ==================================
      // AURORA
      // ==================================
    
      for (let layer = 0; layer < 3; layer++) {
        context.beginPath()
    
        for (let x = 0; x <= width; x += 12) {
          const y =
            height * (0.55 + layer * 0.08) +
            Math.sin(
              x * 0.004 +
                t * (0.8 + layer * 0.3)
            ) *
              (10 + intensity * 20) +
            Math.cos(
              x * 0.002 +
                t * (0.4 + layer * 0.2)
            ) *
              (8 + intensity * 15)
    
          if (x === 0) context.moveTo(x, y)
          else context.lineTo(x, y)
        }
    
        context.lineTo(width, height)
        context.lineTo(0, height)
        context.closePath()
    
        context.fillStyle = `rgba(21,73,240,${
          0.03 + intensity * 0.03
        })`
    
        context.fill()
      }
    
      // ==================================
      // CALCULATE NODE POSITIONS
      // ==================================
    
      const nodePositions: {
        x: number
        y: number
      }[] = []
    
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
    
        const baseX =
          (i / nodes.length) * width
    
        const x =
          baseX +
          Math.sin(
            node.seed + t * 0.25
          ) *
            80
    
        const y =
          height * 0.5 +
          Math.cos(
            node.seed * 1.3 + t * 0.3
          ) *
            250
    
        nodePositions.push({ x, y })
      }
    
      // ==================================
      // CONNECTIONS
      // ==================================
    
      for (
        let i = 0;
        i < nodePositions.length;
        i++
      ) {
        for (
          let j = i + 1;
          j < nodePositions.length;
          j++
        ) {
          const a = nodePositions[i]
          const b = nodePositions[j]
    
          const dx = a.x - b.x
          const dy = a.y - b.y
    
          const distance = Math.sqrt(
            dx * dx + dy * dy
          )
    
          if (distance < 180) {
            const alpha =
              (1 - distance / 180) *
              (0.08 + intensity * 0.18)
    
            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
    
            context.strokeStyle = `rgba(21,73,240,${alpha})`
            context.lineWidth = 1
    
            context.stroke()
          }
        }
      }
    
      // ==================================
      // NODES
      // ==================================
    
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        const pos = nodePositions[i]
    
        context.beginPath()
    
        context.arc(
          pos.x,
          pos.y,
          node.size,
          0,
          Math.PI * 2
        )
    
        context.fillStyle = `rgba(21,73,240,${
          0.25 + intensity * 0.4
        })`
    
        context.fill()
      }
    
      // ==================================
      // DATA PACKETS
      // ==================================
    
      for (let i = 0; i < 12; i++) {
        const start = nodePositions[i]
    
        const end =
          nodePositions[
            (i + 7) % nodePositions.length
          ]
    
        const progress =
          (t * 0.5 + i * 0.13) % 1
    
        const x =
          start.x +
          (end.x - start.x) * progress
    
        const y =
          start.y +
          (end.y - start.y) * progress
    
        context.beginPath()
    
        context.arc(
          x,
          y,
          2.5,
          0,
          Math.PI * 2
        )
    
        context.fillStyle = `rgba(255,255,255,${
          0.35 + intensity * 0.4
        })`
    
        context.fill()
      }
    
      // ==================================
      // PARTICLES
      // ==================================
    
      const particleCount = 35
    
      const particleAlpha =
        0.04 + intensity * 0.12
    
      for (let i = 0; i < particleCount; i++) {
        const seed = i * 17.31
    
        const px =
          ((Math.sin(
            seed + t * (0.08 + i * 0.005)
          ) +
            1) *
            0.5) *
          width
    
        const py =
          ((Math.cos(
            seed * 1.7 +
              t * (0.06 + i * 0.004)
          ) +
            1) *
            0.5) *
          height
    
        const radius =
          0.8 +
          (i % 3) * 0.45 +
          intensity * 0.9
    
        context.beginPath()
    
        context.arc(
          px,
          py,
          radius,
          0,
          Math.PI * 2
        )
    
        context.fillStyle = `rgba(21,73,240,${
          particleAlpha *
          (0.6 + (i % 5) * 0.08)
        })`
    
        context.fill()
      }
    
      rafId = window.requestAnimationFrame(draw)
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
