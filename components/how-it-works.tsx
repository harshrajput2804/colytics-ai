"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Globe, ListChecks, Search } from "lucide-react"
import EarlyAccessTrigger from "@/components/early-access-trigger"

const STEPS = [
  {
    number: "01",
    title: "Connect Your Domain",
    body: "Add your website URL. Add prompts and topics. Colytics begins crawling, analyzing content structure, and mapping your schema coverage.",
  },
  {
    number: "02",
    title: "See Your Citation Gaps",
    body: "Within minutes, see where competitors are cited and you are not. Understand the structural reasons behind every gap.",
  },
  {
    number: "03",
    title: "Execute the Fix List",
    body: "Get a prioritized roadmap of content, schema, and structural changes ranked by expected citation impact. Ship fixes. Track gains.",
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const lineRef = useRef<HTMLDivElement | null>(null)
  const [fillPercent, setFillPercent] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReducedMotion(mq.matches)
    onChange()
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      setFillPercent(100)
      return
    }

    const section = sectionRef.current
    if (!section) return

    let raf = 0
    let current = 0

    const update = () => {
      raf = 0
      const rect = section.getBoundingClientRect()
      // Start filling when section top hits 80% viewport height
      // Finish when section bottom hits 30% viewport height
      const start = window.innerHeight * 0.60
      const end = window.innerHeight * 0.10
      const raw = (start - rect.top) / (start - end + rect.height * 0.8)
      const target = Math.max(0, Math.min(1, raw)) * 100
      // Smooth lerp
      current += (target - current) * 0.08
      setFillPercent(current)
      if (Math.abs(target - current) > 0.1) {
        raf = requestAnimationFrame(update)
      }
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [reducedMotion])

  // Each step activates at roughly 0%, 40%, 75% fill
  const stepThresholds = [0, 38, 72]
  const activeStep = stepThresholds.reduce(
    (acc, threshold, i) => (fillPercent >= threshold ? i : acc),
    -1
  )

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="section-spacing bg-[#fafafa] border-t border-[#e8e8e8]"
    >
      <div className="max-w-3xl mx-auto min-w-0">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#737373] mb-4">
            How It Works
          </p>
          <h2 className="heading-2-sm">
            Three steps to AI visibility and AEO intelligence.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical track line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-[#e5e5e5] hidden sm:block" />

          {/* Animated fill line */}
          <div
            className="absolute left-[19px] top-0 w-[2px] bg-[#2563eb] hidden sm:block transition-none pointer-events-none"
            style={{
              height: `${fillPercent}%`,
              boxShadow: "0 0 8px rgba(37,99,235,0.4)",
            }}
          />

          {/* Steps */}
          <div className="space-y-0">
            {STEPS.map((step, i) => {
              const isActive = activeStep >= i
              return (
                <div key={step.number} className="relative flex gap-6 sm:gap-10 pb-16 last:pb-0">
                  {/* Node dot */}
                  <div className="relative z-10 shrink-0 hidden sm:flex items-start pt-1">
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-500 ${isActive
                          ? "border-[#2563eb] bg-[#2563eb] text-white shadow-[0_0_16px_rgba(37,99,235,0.35)]"
                          : "border-[#d4d4d4] bg-white text-[#a3a3a3]"
                        }`}
                    >
                      {isActive ? (
                        i === STEPS.length - 1 && activeStep === STEPS.length - 1 ? (
                          <Check className="w-4 h-4" strokeWidth={2.5} />
                        ) : (
                          step.number
                        )
                      ) : (
                        step.number
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    {/* Step label — mobile only */}
                    <div className="flex items-center gap-3 mb-3 sm:hidden">
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-500 ${isActive
                            ? "border-[#2563eb] bg-[#2563eb] text-white"
                            : "border-[#d4d4d4] bg-white text-[#a3a3a3]"
                          }`}
                      >
                        {step.number}
                      </div>
                    </div>

                    <h3
                      className={`heading-3-lg mb-3 transition-colors duration-500 ${isActive ? "text-[#0a0a0a]" : "text-[#c0c0c0]"
                        }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-body-dark max-w-xl transition-colors duration-500 ${isActive ? "text-[#525252]" : "text-[#c8c8c8]"
                        }`}
                    >
                      {step.body}
                    </p>

                    {/* Card for each step */}
                    <div
                      className={`mt-6 transition-all duration-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-40 translate-y-2"
                        }`}
                    >
                      {i === 0 && <DomainCard />}
                      {i === 1 && <GapAnalysisCard />}
                      {i === 2 && <RoadmapCard />}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA footer */}
      <div className="mx-auto mt-20 w-full max-w-3xl border-t border-[#e8e8e8] pt-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <p className="text-body">
            Your first audit is minutes away.
          </p>
          <EarlyAccessTrigger
            label="Run my free audit"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] !text-white rounded-lg text-button hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  )
}

function DomainCard() {
  return (
    <div className="rounded-2xl border border-[#e8e8e8] bg-white p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] max-w-lg">
      <p className="ui-heading mb-4">Setup Target Domain</p>
      <div className="flex items-center gap-2.5 p-3 border border-[#e8e8e8] rounded-xl mb-4 bg-[#fafafa]">
        <Globe className="w-4 h-4 text-[#a3a3a3] shrink-0" />
        <span className="text-sm text-[#525252]">yourwebsite.com</span>
      </div>
      <p className="text-[11px] font-semibold text-[#737373] uppercase tracking-widest mb-3">Target Prompts</p>
      <div className="space-y-2">
        <div className="flex items-center gap-2.5 p-3 border border-[#e8e8e8] rounded-xl">
          <Search className="w-4 h-4 text-[#a3a3a3] shrink-0" />
          <span className="text-sm text-[#525252]">best enterprise seo tools</span>
        </div>
        <div className="flex items-center gap-2.5 p-3 border border-[#e8e8e8] rounded-xl">
          <Search className="w-4 h-4 text-[#a3a3a3] shrink-0" />
          <span className="text-sm text-[#525252]">how to improve ai search visibility</span>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
          <Check className="w-3 h-3 text-white" strokeWidth={3} />
        </div>
        <span className="text-sm font-medium text-green-600">Crawling initialized</span>
      </div>
    </div>
  )
}

function GapAnalysisCard() {
  return (
    <div className="rounded-2xl border border-[#e8e8e8] bg-white p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] max-w-lg">
      <div className="flex items-start justify-between gap-3 mb-4">
        <p className="ui-heading">Citation Gap: &apos;best seo tools&apos;</p>
        <span className="shrink-0 px-2.5 py-1 bg-red-50 text-red-600 rounded-full text-[11px] font-semibold border border-red-100">
          Missed Citation
        </span>
      </div>
      <div className="p-3.5 border border-[#e8e8e8] rounded-xl mb-3 bg-[#fafafa]">
        <p className="text-[10px] font-semibold text-[#a3a3a3] uppercase tracking-widest mb-2">ChatGPT Response</p>
        <p className="text-xs text-[#525252] leading-relaxed">
          &quot;Top options include{" "}
          <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded font-medium">Competitor A</span>
          {" "}and{" "}
          <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded font-medium">Competitor B</span>
          {" "}for enterprise teams needing scalable SEO workflows...&quot;
        </p>
      </div>
      <div className="p-3.5 bg-red-50 border border-red-100 rounded-xl">
        <p className="text-xs font-semibold text-red-800 mb-2">Why you missed this:</p>
        <ul className="text-xs text-red-700 space-y-1 list-disc pl-4">
          <li>Missing relevant Schema markup</li>
          <li>Content lacks structured lists</li>
          <li>Low entity density for &quot;enterprise seo&quot;</li>
        </ul>
      </div>
    </div>
  )
}

function RoadmapCard() {
  const items = [
    { done: true, title: "Add SoftwareApplication Schema", impact: "High" },
    { done: false, title: "Structure pricing page data", impact: "Medium" },
    { done: false, title: "Increase entity density on /enterprise", impact: "Medium" },
  ]
  return (
    <div className="rounded-2xl border border-[#e8e8e8] bg-white p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] max-w-lg">
      <div className="flex items-center justify-between mb-4">
        <p className="ui-heading">Prioritized Fixes</p>
        <ListChecks className="w-4 h-4 text-[#a3a3a3]" />
      </div>
      <div className="space-y-2.5">
        {items.map((item) => (
          <div
            key={item.title}
            className={`flex items-start gap-3 p-3 rounded-xl border ${item.done ? "border-green-200 bg-green-50" : "border-[#e8e8e8] bg-white"
              }`}
          >
            <div
              className={`mt-0.5 w-5 h-5 rounded-full shrink-0 flex items-center justify-center border ${item.done ? "border-green-500 bg-green-500" : "border-[#d4d4d4]"
                }`}
            >
              {item.done ? <Check className="w-3 h-3 text-white" strokeWidth={3} /> : null}
            </div>
            <div>
              <p className="text-sm font-medium text-[#0a0a0a]">{item.title}</p>
              <p className="text-xs text-[#737373] mt-0.5">Expected Impact: {item.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}