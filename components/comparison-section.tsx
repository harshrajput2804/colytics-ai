import { ArrowRight } from "lucide-react"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function ComparisonSection() {
  const rows = [
    { capability: "Citation detection", traditional: false, monitors: true, colytics: true },
    { capability: "Multi-model tracking", traditional: false, monitors: true, colytics: true },
    { capability: "Share of Voice tracking", traditional: false, monitors: true, colytics: true },
    { capability: "Website crawl & technical audit", traditional: true, monitors: false, colytics: true },
    { capability: "Content structure analysis", traditional: true, monitors: false, colytics: true },
    { capability: "Schema & structured data intelligence", traditional: true, monitors: false, colytics: true },
    { capability: "Citation readiness scoring", traditional: false, monitors: false, colytics: true },
    { capability: "Why you were not cited (diagnosis)", traditional: false, monitors: false, colytics: true },
    { capability: "Prioritized fix recommendations", traditional: false, monitors: false, colytics: true },
    { capability: "Execution roadmap with impact scoring", traditional: false, monitors: false, colytics: true },
  ]

  function StatusIcon({ value, highlight = false }: { value: boolean; highlight?: boolean }) {
    if (value) {
      if (highlight) {
        return (
          <div className="w-5 h-5 rounded-full bg-[#0a0a0a] flex items-center justify-center mx-auto">
            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        )
      }
      return (
        <svg className="w-4 h-4 text-[#737373] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      )
    }
    return (
      <svg className="w-4 h-4 text-[#d4d4d4] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
  }

  return (
    <section id="comparison" className="enhanced-surface section-spacing bg-transparent border-t border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto min-w-0">
        <div className="max-w-2xl mb-10 sm:mb-16">
          <p className="section-label mb-5">The Difference</p>
          <h2 className="heading-2">
            The Gap no other tool closes.
          </h2>
          <p className="text-body mt-5">
            Traditional SEO tools track rankings; AI visibility monitors track citations; neither tells you why you're not cited or fixes it. Colytics connects both — and runs the full loop.
          </p>
        </div>

        <div className="bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden">
          <div className="md:hidden divide-y divide-[#f0f0f0]">
            {rows.map((row, i) => (
              <div key={i} className="p-4">
                <p className="text-ui-md text-[#0a0a0a] font-medium mb-3 leading-snug">{row.capability}</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-[#9a9a9a] mb-2">SEO tools</p>
                    <StatusIcon value={row.traditional} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-[#9a9a9a] mb-2">Monitors</p>
                    <StatusIcon value={row.monitors} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-[#1549f0] mb-2">Colytics</p>
                    <StatusIcon value={row.colytics} highlight />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-[1fr_140px_140px_140px] border-b border-[#e8e8e8] bg-[#fafafa]">
                <div className="px-6 py-4 text-ui-xs">Capability</div>
                <div className="px-6 py-4 text-center">
                  <div className="text-ui-sm font-semibold text-[#525252]">Traditional SEO tools</div>
                </div>
                <div className="px-6 py-4 text-center">
                  <div className="text-ui-sm font-semibold text-[#525252]">AI visibility monitors</div>
                </div>
                <div className="px-6 py-4 text-center">
                  <div className="text-ui-sm font-semibold text-[#0a0a0a]">Colytics AI</div>
                  <div className="inline-flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1549f0]" />
                    <span className="text-[10px] text-[#1549f0] font-medium">Full platform</span>
                  </div>
                </div>
              </div>

              {rows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_140px_140px_140px] border-b border-[#f0f0f0] last:border-0 items-center"
                >
                  <div className="px-6 py-4 text-ui-md text-[#525252]">{row.capability}</div>
                  <div className="px-6 py-4 flex justify-center">
                    <StatusIcon value={row.traditional} />
                  </div>
                  <div className="px-6 py-4 flex justify-center">
                    <StatusIcon value={row.monitors} />
                  </div>
                  <div className="px-6 py-4 flex justify-center">
                    <StatusIcon value={row.colytics} highlight />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <p className="text-body flex-1">
              "AI visibility monitors show you the scoreboard. Colytics gives you the playbook."
            </p>
            <EarlyAccessTrigger
              label="Replace the stack"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] !text-white rounded-lg text-button hover:bg-[#0a0a0a]/90 transition-colors w-full sm:w-auto min-h-11"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
