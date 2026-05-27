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
    <section className="py-20 px-6" style={{ backgroundColor: '#0E0E0F' }}>
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="section-label mb-5 text-[#CCD1D5]">The Difference</p>
          <h2 className="font-serif text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.01em]" style={{ color: '#FDFDFD' }}>
            The Difference Between Monitoring and Intelligence.
          </h2>
          <p className="mt-4 text-[15px] text-[#CCD1D5] leading-relaxed">
            AI visibility monitors show you the scoreboard. Colytics gives you the playbook.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-white/6">
          {/* header */}
          <div className="grid grid-cols-[1fr_200px_200px] bg-[#0E0E0F] border-b border-white/6">
            <div className="px-6 py-4 text-[12px] font-semibold uppercase tracking-widest text-[#8F9399]">Capability</div>
            <div className="px-6 py-4 text-center">
              <div className="text-[13px] font-semibold text-[#8F9399]">AI Visibility Monitors</div>
              <div className="text-[11px] text-[#8F9399] mt-0.5">LLMRefs, Peec, Scrunch</div>
            </div>
            <div className="px-6 py-4 text-center bg-linear-to-r from-transparent to-transparent">
              <div className="text-[13px] font-semibold text-[#FDFDFD]">Colytics AI</div>
            </div>
          </div>

          {rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-[1fr_200px_200px] items-center border-b ${i === rows.length - 1 ? 'border-b-0' : 'border-white/6'}`}>
              <div className="px-6 py-4 text-[14px] text-[#CCD1D5]">{row.capability}</div>
              <div className="px-6 py-4 flex justify-center">
                {row.monitors ? (
                  <svg className="w-5 h-5 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-[#374151] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <div className="px-6 py-4 flex justify-center">
                {row.colytics ? (
                  <svg className="w-6 h-6 text-[#C9A227]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-[#374151] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 font-serif text-[18px] italic text-[#8F9399]">
          "AI visibility monitors show you the scoreboard. Colytics gives you the playbook."
        </p>
      </div>
    </section>
  )
}
