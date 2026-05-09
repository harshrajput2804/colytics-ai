export function ComparisonSection() {
  const rows = [
    { capability: "Citation detection", monitors: true, colytics: true },
    { capability: "Multi-model tracking", monitors: true, colytics: true },
    { capability: "Share of Voice tracking", monitors: true, colytics: true },
    { capability: "Website crawl & technical audit", monitors: false, colytics: true },
    { capability: "Content structure analysis", monitors: false, colytics: true },
    { capability: "Schema & structured data intelligence", monitors: false, colytics: true },
    { capability: "Citation readiness scoring", monitors: false, colytics: true },
    { capability: "\"Why you were not cited\" diagnosis", monitors: false, colytics: true },
    { capability: "Prioritized fix recommendations", monitors: false, colytics: true },
    { capability: "Execution roadmap with impact scoring", monitors: false, colytics: true },
  ]

  return (
    <section className="py-28 px-6 bg-[#fafafa] border-t border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-5">The Difference</p>
          <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]">
            The scoreboard vs the playbook.
          </h2>
          <p className="mt-5 text-[16px] text-[#737373] leading-relaxed">
            AI visibility monitors tell you whether you were cited. Colytics tells you why you were not — and exactly what to fix.
          </p>
        </div>

        <div className="bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_160px_160px] border-b border-[#e8e8e8] bg-[#fafafa]">
            <div className="px-6 py-4 text-[11px] font-semibold uppercase tracking-widest text-[#9a9a9a]">Capability</div>
            <div className="px-6 py-4 text-center">
              <div className="text-[12px] font-semibold text-[#525252]">AI Monitors</div>
              <div className="text-[10px] text-[#9a9a9a] mt-0.5">LLMRefs, Peec, Scrunch</div>
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
              className={`grid grid-cols-[1fr_160px_160px] border-b border-[#f0f0f0] last:border-0 items-center ${
                !row.monitors ? "bg-[#eff4ff]/20" : ""
              }`}
            >
              <div className="px-6 py-4 text-[13px] text-[#525252]">{row.capability}</div>
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

        <p className="text-center mt-10 font-serif text-[20px] italic text-[#9a9a9a]">
          "AI visibility monitors show you the scoreboard. Colytics gives you the playbook."
        </p>
      </div>
    </section>
  )
}
