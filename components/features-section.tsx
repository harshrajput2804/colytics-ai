import Image from "next/image"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function FeaturesSection() {

  return (
    <>
      <section id="what-colytics-is" className="enhanced-surface section-spacing pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-transparent border-t border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="section-label mb-5">WHAT COLYTICS AI IS</p>
            <h2 className="heading-2 max-w-2xl">
              Not a monitor. An intelligence system.
            </h2>
            <p className="text-body mt-5 max-w-2xl">
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
                <p className="heading-3 mb-0">{item.title}</p>
                <p className="text-ui-sm mt-2">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#141414] bg-[#0a0a0a]">
            <div className="grid grid-cols-1 divide-y divide-[#eadfcf] md:grid-cols-5 md:divide-x md:divide-y-0">
              {[
                { value: "5", label: "AI engines tracked" },
                { value: "9", label: "core modules" },
                { value: "10", label: "lifecycle stages" },
                { value: "29", label: "AIVS parameters" },
                { value: "1", label: "closed loop" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-h-[150px] flex-col items-center justify-center bg-[#0a0a0a] px-6 py-8 text-center"
                >
                  <span className="text-[52px] leading-none font-semibold tracking-[-0.05em] text-white md:text-[58px]">
                    {stat.value}
                  </span>
                  <span className="mt-5 font-mono text-[14px] leading-none tracking-[0.02em] text-white md:text-[15px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 pt-7 border-t border-[#e8e8e8]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-body flex-1">
                Give the team intelligence, not another dashboard.
              </p>
              <EarlyAccessTrigger
                label="Start free →"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0a0a0a] px-8 py-4 text-button !text-white transition-colors hover:bg-[#0a0a0a]/90 w-full sm:w-auto min-h-11"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="ai-search-visibility" className="enhanced-surface section-spacing pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-transparent border-t border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="section-label mb-4">SAMPLE REPORT</p>
            <h2 className="heading-2-md">
              See a real report — before you sign up.
            </h2>
            <p className="text-body mt-4">
              Preview shows the AIVS score, top citation gaps, and a ranked fix list. The full PDF stays gated behind email capture.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
              <Image
                src="/AI-visibiliti.png"
                alt="Colytics AI visibility scorecards dashboard"
                width={1693}
                height={929}
                className="block h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-7 pt-7 border-t border-[#e8e8e8]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-body flex-1">
                The preview is free.
              </p>
              <EarlyAccessTrigger
                label="Get the sample report →"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0a0a0a] px-8 py-4 text-button text-white transition-colors hover:bg-[#0a0a0a]/90 w-full sm:w-auto min-h-11"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
