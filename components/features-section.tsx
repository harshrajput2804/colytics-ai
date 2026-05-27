export function FeaturesSection() {
  return (
    <section id="product" className="w-full px-6 py-20 md:py-28" style={{ backgroundColor: '#0E0E0F' }}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: '#FDFDFD', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.01em' }}
          >
            Monitoring Tells You IF. Colytics Tells You WHY — and What to Fix.
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: '#CCD1D5', fontFamily: "'Helvetica', sans-serif" }}>
            The first platform that combines AI citation intelligence with deep website diagnostics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-[#C9A227] bg-[#1B1D21] p-7 md:p-8 shadow-[0_0_0_1px_rgba(201,162,39,0.12)]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C9A227]/30 bg-[#C9A227]/10 text-[#C9A227]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5m8 14V3m8 16V9" />
              </svg>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9A227]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              THE LEAD
            </p>
            <h3 className="mt-4 text-2xl md:text-[28px] leading-tight text-[#FDFDFD]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              AI Citation Intelligence
            </h3>
            <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[#CCD1D5]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              What AI models are saying about your brand — and your competitors.
            </p>
            <ul className="mt-6 space-y-4 text-[14px] md:text-[15px] leading-relaxed text-[#CCD1D5]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              <li><span className="text-[#C9A227]">•</span> Citation Gap Analysis: See exactly which prompts cite your competitors but not you, and understand the structural reasons why</li>
              <li><span className="text-[#C9A227]">•</span> Prompt Coverage Map: Identify the questions your brand should own in AI answers — and where you are missing</li>
              <li><span className="text-[#C9A227]">•</span> Share of Voice Tracking: Measure your citation presence vs competitors across ChatGPT, Gemini, Claude, and Perplexity</li>
              <li><span className="text-[#C9A227]">•</span> Citation Drift Alerts: Get notified when your citations drop, a competitor gains, or model behavior changes</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-[#54595B] bg-[#0E0E0F] p-7 md:p-8 shadow-[0_0_0_1px_rgba(84,89,91,0.12)]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#54595B]/30 bg-white/5 text-[#8F9399]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8F9399]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              THE PROOF
            </p>
            <h3 className="mt-4 text-2xl md:text-[28px] leading-tight text-[#FDFDFD]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              Website Intelligence Engine
            </h3>
            <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[#CCD1D5]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              The diagnostic layer that makes citation intelligence actionable.
            </p>
            <ul className="mt-6 space-y-4 text-[14px] md:text-[15px] leading-relaxed text-[#CCD1D5]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              <li><span className="text-[#8F9399]">•</span> AEO Readiness Score: A composite score measuring how extractable, structured, and citation-ready your content is for AI systems</li>
              <li><span className="text-[#8F9399]">•</span> Content Structure Audit: Tables, FAQs, comparison blocks, entity density, fact density — the content patterns AI models prefer</li>
              <li><span className="text-[#8F9399]">•</span> Schema & Structured Data Analysis: Detect missing schema, generate fix-ready JSON-LD, and track structured data coverage</li>
              <li><span className="text-[#8F9399]">•</span> Technical Foundation Check: Crawlability, indexability, canonical correctness, robots directives — the infrastructure AI crawlers need</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-[#FDFDFD] bg-[#1B1D21] p-7 md:p-8 shadow-[0_0_0_1px_rgba(253,253,253,0.08)]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FDFDFD]/30 bg-white/5 text-[#FDFDFD]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14" />
              </svg>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FDFDFD]/70" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              THE CLOSER
            </p>
            <h3 className="mt-4 text-2xl md:text-[28px] leading-tight text-[#FDFDFD]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              Execution Roadmap
            </h3>
            <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[#CCD1D5]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              Not another dashboard. A prioritized action list.
            </p>
            <ul className="mt-6 space-y-4 text-[14px] md:text-[15px] leading-relaxed text-[#CCD1D5]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              <li><span className="text-[#FDFDFD]">•</span> Impact × Effort Prioritization: Every recommendation ranked by expected citation lift vs implementation cost</li>
              <li><span className="text-[#FDFDFD]">•</span> Dev-Ready Fix Lists: Export actionable tickets your team or agency can execute immediately</li>
              <li><span className="text-[#FDFDFD]">•</span> Weekly Progress Reports: Track citation gains tied directly to fixes shipped</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
