export function FeaturesSection() {

  return (
    <section id="product" className="py-28 px-6 bg-white border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-5">The Solution</p>
          <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]">
            Monitoring tells you IF. Colytics tells you WHY — and what to fix.
          </h2>
          <p className="mt-5 text-[16px] text-[#737373] leading-relaxed">
            The first platform that combines AI citation intelligence with deep website diagnostics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border bg-muted/20 rounded-2xl p-8 flex flex-col gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">Pillar A</span>
            <h3 className="text-xl font-semibold">AI Citation Intelligence</h3>
            <p className="text-muted-foreground text-sm">
              Citation Gap Analysis, Prompt Coverage Map, Share of Voice Tracking, and Citation Drift Alerts — across ChatGPT, Gemini, Claude, and Perplexity.
            </p>
            <div className="mt-6 flex-1 bg-white border rounded-xl flex items-center justify-center p-6 min-h-[200px]">
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg"></div>
            </div>
          </div>

          <div className="border bg-muted/20 rounded-2xl p-8 flex flex-col gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">Pillar B</span>
            <h3 className="text-xl font-semibold">Website Intelligence Engine</h3>
            <p className="text-muted-foreground text-sm">
              AEO Readiness Score, Content Structure Audit, Schema & Structured Data Analysis, and Technical Foundation Check. The diagnostic layer that makes citation intelligence actionable.
            </p>
            <div className="mt-6 flex-1 bg-white border rounded-xl flex items-center justify-center p-6 min-h-[200px]">
              <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg"></div>
            </div>
          </div>

          <div className="border bg-muted/20 rounded-2xl p-8 flex flex-col gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">Pillar C</span>
            <h3 className="text-xl font-semibold">Execution Roadmap</h3>
            <p className="text-muted-foreground text-sm">
              Every recommendation ranked by expected citation lift vs implementation cost. Export dev-ready fix tickets and track weekly progress tied directly to fixes shipped.
            </p>
            <div className="mt-6 flex-1 bg-white border rounded-xl flex items-center justify-center p-6 min-h-[200px]">
              <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg"></div>
            </div>
          </div>

          <div className="border border-foreground bg-foreground text-background rounded-2xl p-8 flex flex-col gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] opacity-60">The Difference</span>
            <h3 className="text-xl font-semibold">The Gap No Other Tool Closes</h3>
            <p className="opacity-80 text-sm">
              Traditional SEO tools track rankings. AI monitors track citations. Neither diagnoses why you are not cited. Colytics connects citation monitoring with website intelligence to give you the playbook — not just the scoreboard.
            </p>
            <div className="mt-6 flex-1 bg-white/10 rounded-xl flex items-center justify-center p-6 min-h-[200px]">
               <div className="text-center font-serif text-2xl italic opacity-50">Playbook, not just scoreboard</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
