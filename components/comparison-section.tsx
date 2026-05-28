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

  return (
    <section className="py-28 px-6 bg-[#fafafa] border-t border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-5">The Difference</p>
          <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]">
            The Gap no other tool closes.
          </h2>
          <p className="mt-5 text-[16px] text-[#737373] leading-relaxed">
            Traditional SEO tools track rankings; AI visibility monitors track citations; neither tells you why you're not cited or fixes it. Colytics connects both — and runs the full loop.
          </p>
        </div>

        <div className="bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_140px_140px_140px] border-b border-[#e8e8e8] bg-[#fafafa]">
            <div className="px-6 py-4 text-[11px] font-semibold uppercase tracking-widest text-[#9a9a9a]">Capability</div>
            <div className="px-6 py-4 text-center">
              <div className="text-[12px] font-semibold text-[#525252]">Traditional SEO tools</div>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="text-[12px] font-semibold text-[#525252]">AI visibility monitors</div>
            </div>
            <div className="px-6 py-4 text-center">
              <div className="text-[12px] font-semibold text-[#0a0a0a]">Colytics AI</div>
              <div className="inline-flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1549f0]" />
                <span className="text-[10px] text-[#1549f0] font-medium">Full platform</span>
              </div>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_140px_140px_140px] border-b border-[#f0f0f0] last:border-0 items-center ${!row.colytics ? "bg-[#fff]" : ""
                }`}
            >
              <div className="px-6 py-4 text-[13px] text-[#525252]">{row.capability}</div>

              {/* Traditional SEO tools */}
              <div className="px-6 py-4 flex justify-center">
                {row.traditional ? (
                  <svg className="w-4 h-4 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-[#d4d4d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>

              {/* AI visibility monitors */}
              <div className="px-6 py-4 flex justify-center">
                {row.monitors ? (
                  <svg className="w-4 h-4 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-[#d4d4d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>

              {/* Colytics */}
              <div className="px-6 py-4 flex justify-center">
                <div className="w-5 h-5 rounded-full bg-[#0a0a0a] flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[15px] text-[#737373] leading-relaxed flex-1">
              "AI visibility monitors show you the scoreboard. Colytics gives you the playbook."
            </p>
            <EarlyAccessTrigger
              label="Replace the stack"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg font-medium text-[14px] hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
