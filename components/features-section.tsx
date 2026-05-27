import { CitationAnalysisMockup } from "@/components/citation-analysis-mockup"

export function FeaturesSection() {

  return (
    <>
      <section id="product" className="pt-28 pb-16 px-6 bg-white border-t border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="section-label mb-5">SECTION 04 · WHAT COLYTICS AI IS</p>
            <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a] max-w-2xl">
              Not a monitor. An intelligence system.
            </h2>
            <p className="mt-5 text-[16px] text-[#737373] leading-relaxed max-w-2xl">
              Colytics AI closes the loop between seeing what changed, understanding why it changed, and knowing what to do next.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "It remembers",
                body: "Running memory of audits, scores, and fixes so every new report builds on the last one.",
              },
              {
                title: "It tracks",
                body: "Mentions, share of voice, competitors, and model shifts across every AI engine.",
              },
              {
                title: "It recommends",
                body: "A ranked to-do list scored by Impact × Effort × Urgency.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#e8e8e8] bg-[#fafafa] p-6">
                <p className="text-[14px] font-semibold text-[#0a0a0a]">{item.title}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-[#737373]">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#141414] bg-[#0a0a0a]">
            <div className="grid grid-cols-1 divide-y divide-[#eadfcf] md:grid-cols-5 md:divide-x md:divide-y-0">
              {[
                { value: "9", label: "AI engines tracked" },
                { value: "9", label: "core modules" },
                { value: "10", label: "lifecycle stages" },
                { value: "29", label: "AIVS™ parameters" },
                { value: "1", label: "closed loop" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-h-[150px] flex-col items-center justify-center bg-[#0a0a0a] px-6 py-8 text-center"
                >
                  <span className="text-[52px] leading-none font-semibold tracking-[-0.05em] text-white/75 md:text-[58px]">
                    {stat.value}
                  </span>
                  <span className="mt-5 font-mono text-[14px] leading-none tracking-[0.02em] text-white/75 md:text-[15px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 pt-7 border-t border-[#e8e8e8]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-[15px] leading-relaxed text-[#737373] flex-1">
                Give the team intelligence, not another dashboard.
              </p>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0a0a0a] px-8 py-4 text-[14px] font-medium text-white transition-colors hover:bg-[#0a0a0a]/90 whitespace-nowrap">
                Start free
                <span className="text-[16px]">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-28 pb-16 px-6 bg-[#fafafa] border-t border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="section-label mb-4">SECTION 04B · SAMPLE REPORT</p>
            <h3 className="font-serif text-[32px] md:text-[38px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]">
              See a real report — before you sign up.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[#737373]">
              Preview shows the AIVS™ score, top citation gaps, and a ranked fix list. The full PDF stays gated behind email capture.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
          <CitationAnalysisMockup />
        </div>

          <div className="mt-7 pt-7 border-t border-[#e8e8e8]">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="text-[15px] text-[#737373] leading-relaxed flex-1">
                  The preview is free. The full report is the lead magnet.
                </p>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0a0a0a] px-8 py-4 text-[14px] font-medium text-white transition-colors hover:bg-[#0a0a0a]/90 whitespace-nowrap">
                  Get the sample report
                  <span className="text-[16px]">→</span>
                </button>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}
