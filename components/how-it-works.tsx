"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { Globe, Search, ListChecks } from "lucide-react"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function HowItWorks() {
  const stepsRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const pathRef = useRef<SVGPathElement | null>(null)
  const [progress, setProgress] = useState(0)
  const [pathD, setPathD] = useState("")

  useEffect(() => {
    const node = stepsRef.current
    if (!node) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = node.getBoundingClientRect()
      const viewportAnchor = window.innerHeight * 0.58
      const start = rect.top + window.scrollY - window.innerHeight * 0.1
      const end = rect.bottom + window.scrollY - window.innerHeight * 0.34
      const current = window.scrollY + viewportAnchor
      const next = Math.max(0, Math.min(1, (current - start) / Math.max(end - start, 1)))
      setProgress(next)

      const positions = cardRefs.current
        .map((el) => el?.getBoundingClientRect())
        .filter((box): box is DOMRect => Boolean(box))

      if (positions.length === 3) {
        const containerRect = node.getBoundingClientRect()
        const points = positions.map((box) => ({
          x: box.left + box.width / 2 - containerRect.left,
          y: box.top + box.height / 2 - containerRect.top,
        }))
        const d = [
          `M ${points[0].x} ${points[0].y}`,
          `L ${points[1].x} ${points[1].y}`,
          `L ${points[2].x} ${points[2].y}`,
        ].join(" ")
        setPathD(d)
      }
    }

    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  const activeStep = progress < 0.34 ? 1 : progress < 0.67 ? 2 : 3

  return (
    <section id="solutions" className="enhanced-surface py-20 px-4 sm:px-6 bg-[#fafafa] border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-5">Get Started</p>
          <h2 className="font-serif text-[32px] sm:text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]">
            Three steps to AI visibility and AEO intelligence.
          </h2>
        </div>

        <div ref={stepsRef} className="relative space-y-7 md:pl-10">
          <svg
            className="pointer-events-none absolute inset-0 z-0 hidden md:block overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="how-it-works-line" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1549f0" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#1549f0" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="#e8e8e8"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.75"
              pathLength={1000}
            />
            <path
              d={pathD}
              fill="none"
              stroke="url(#how-it-works-line)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1000}
              strokeDasharray="1000"
              strokeDashoffset={1000 * (1 - progress)}
              style={{ transition: "stroke-dashoffset 120ms linear" }}
            />
          </svg>

          <StepRow
            step={1}
            title="Add your domain"
            body="Crawling starts immediately, so you can get to the first signal fast."
            card={<DomainCard />}
            reverse={false}
            active={activeStep >= 1}
            cardRef={(el) => {
              cardRefs.current[0] = el
            }}
          />

          <StepRow
            step={2}
            title="See where you're invisible"
            body="See which engines cite competitors instead of you, and why those answers skip your brand."
            card={<GapAnalysisCard />}
            reverse
            active={activeStep >= 2}
            cardRef={(el) => {
              cardRefs.current[1] = el
            }}
          />

          <StepRow
            step={3}
            title="Ship the ranked fixes"
            body="Use the IEU list and generated content to close the highest-value gaps and help AIVS? climb."
            card={<RoadmapCard />}
            reverse={false}
            active={activeStep >= 3}
            cardRef={(el) => {
              cardRefs.current[2] = el
            }}
          />
        </div>
      </div>

      <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <p className="text-[15px] text-[#737373] leading-relaxed flex-1">
            Your first audit is minutes away.
          </p>
          <EarlyAccessTrigger
            label="Run my free audit"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg font-medium text-[14px] hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  )
}

function StepRow({
  step,
  title,
  body,
  card,
  reverse,
  active,
  cardRef,
}: {
  step: number
  title: string
  body: string
  card: ReactNode
  reverse: boolean
  active: boolean
  cardRef: (el: HTMLDivElement | null) => void
}) {
  return (
    <div className="relative z-10 md:pl-10">
      <div
        className={`absolute left-[0.15rem] top-6 hidden md:flex h-4 w-4 items-center justify-center rounded-full border bg-white transition-colors ${
          active ? "border-[#1549f0]" : "border-[#d9d9d9]"
        }`}
      >
        <div className={`h-2 w-2 rounded-full transition-colors ${active ? "bg-[#1549f0]" : "bg-[#d9d9d9]"}`} />
      </div>
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
        <div className={reverse ? "order-2 md:order-2" : "order-2 md:order-1"}>
          <h3 className={`font-serif text-2xl md:text-3xl mb-4 transition-colors ${active ? "text-[#0a0a0a]" : "text-[#525252]"}`}>
            {step}. {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{body}</p>
        </div>
        <div ref={cardRef} className={reverse ? "order-1 md:order-1" : "order-1 md:order-2"}>
          {card}
        </div>
      </div>
    </div>
  )
}

function DomainCard() {
  return (
    <div className="bg-muted/50 rounded-xl p-6">
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <h4 className="text-sm font-medium mb-4">Add your domain</h4>
        <div className="flex items-center gap-2 p-3 border rounded-lg mb-4">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm">yourwebsite.com</span>
        </div>

        <h4 className="text-sm font-medium mb-3 mt-6">Crawling starts immediately</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-3 border rounded-lg bg-muted/20">
            <Search className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">"best enterprise seo tools"</span>
          </div>
          <div className="flex items-center gap-2 p-3 border rounded-lg bg-muted/20">
            <Search className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">"how to improve ai search visibility"</span>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
          <span className="text-sm text-green-600">Crawling started</span>
        </div>
      </div>
    </div>
  )
}

function GapAnalysisCard() {
  return (
    <div className="bg-muted/50 rounded-xl p-6">
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium">Where you’re invisible</h4>
          <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Missed Citation</span>
        </div>

        <div className="space-y-4">
          <div className="p-3 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Engines citing competitors</span>
            </div>
            <p className="text-xs text-muted-foreground">
              "...Results cite <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Competitor A</span> and{" "}
              <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Competitor B</span> because they have clearer structure,
              stronger entity coverage, and better answer formatting..."
            </p>
          </div>

          <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
            <div className="text-sm font-medium text-red-800 mb-1">Why you missed this:</div>
            <ul className="text-xs text-red-700 space-y-1 list-disc pl-4">
              <li>Weak schema and structure</li>
              <li>Competitors answer the query more clearly</li>
              <li>Low entity density for the topic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function RoadmapCard() {
  return (
    <div className="bg-muted/50 rounded-xl p-6">
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium">Ranked fixes</h4>
          <ListChecks className="w-4 h-4 text-muted-foreground" />
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 border rounded-lg bg-green-50">
            <div className="w-5 h-5 rounded-full border border-green-500 shrink-0 flex items-center justify-center">
              <span className="text-green-500 text-xs">✓</span>
            </div>
            <div>
              <div className="text-sm font-medium">IEU list: add SoftwareApplication schema</div>
              <div className="text-xs text-muted-foreground">Expected Impact: High</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 border rounded-lg">
            <div className="w-5 h-5 rounded-full border shrink-0"></div>
            <div>
              <div className="text-sm font-medium">Generated content for the pricing page</div>
              <div className="text-xs text-muted-foreground">Expected Impact: Medium</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 border rounded-lg">
            <div className="w-5 h-5 rounded-full border shrink-0"></div>
            <div>
              <div className="text-sm font-medium">AIVS™ climb: improve entity density and answer depth</div>
              <div className="text-xs text-muted-foreground">Expected Impact: Medium</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
