export function ProblemSection() {
  return (
    <section className="py-28 px-6 bg-[#fafafa] border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-5">The Problem</p>
          <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]">
            You cannot fix what you cannot see.
          </h2>
          <p className="mt-5 text-[16px] text-[#737373] leading-relaxed">
            Most SEO teams have zero visibility into AI-generated answers. They don't know which prompts trigger citations, why competitors appear, or which content gaps are causing invisibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {/* Camp 1 */}
          <div className="bg-white border border-[#e8e8e8] rounded-2xl p-7">
            <div className="w-8 h-8 rounded-lg bg-[#f5f5f5] border border-[#e8e8e8] flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="text-[15px] font-semibold text-[#0a0a0a] mb-2">Traditional SEO Tools</h3>
            <p className="text-[14px] text-[#737373] leading-relaxed mb-5">
              SEMrush, Ahrefs, and Screaming Frog were built for rankings and backlinks. They do not track AI citations or measure citation readiness. They were designed for a search era that is ending.
            </p>
            <div className="flex flex-wrap gap-2">
              {["SEMrush", "Ahrefs", "Screaming Frog", "Moz"].map((t) => (
                <span key={t} className="px-2.5 py-1 bg-[#f5f5f5] border border-[#e8e8e8] rounded-full text-[11px] text-[#737373] font-medium">{t}</span>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-[#f0f0f0]">
              <p className="text-[12px] text-[#9a9a9a]"><span className="font-semibold text-[#525252]">Gap:</span> No AI citation tracking. No citation readiness scoring.</p>
            </div>
          </div>

          {/* Camp 2 */}
          <div className="bg-white border border-[#e8e8e8] rounded-2xl p-7">
            <div className="w-8 h-8 rounded-lg bg-[#f5f5f5] border border-[#e8e8e8] flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </div>
            <h3 className="text-[15px] font-semibold text-[#0a0a0a] mb-2">AI Visibility Monitors</h3>
            <p className="text-[14px] text-[#737373] leading-relaxed mb-5">
              LLMRefs, Peec, and Scrunch tell you whether you were cited. Useful — but they cannot tell you <em>why</em> you were not. They don't analyze your website. Scoreboards without a playbook.
            </p>
            <div className="flex flex-wrap gap-2">
              {["LLMRefs", "Peec AI", "Scrunch", "Otterly"].map((t) => (
                <span key={t} className="px-2.5 py-1 bg-[#f5f5f5] border border-[#e8e8e8] rounded-full text-[11px] text-[#737373] font-medium">{t}</span>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-[#f0f0f0]">
              <p className="text-[12px] text-[#9a9a9a]"><span className="font-semibold text-[#525252]">Gap:</span> No website analysis. No "why" diagnosis. No fix list.</p>
            </div>
          </div>
        </div>

        {/* Gap banner */}
        <div className="bg-[#0a0a0a] rounded-2xl p-8 md:p-10 text-white text-center">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-3">The gap no tool closes</p>
          <p className="font-serif text-[24px] md:text-[32px] leading-snug text-balance max-w-2xl mx-auto">
            No platform connects citation monitoring with the website intelligence needed to actually fix the problem.
          </p>
          <p className="mt-4 text-[14px] text-white/50">Colytics closes that gap.</p>
        </div>
      </div>
    </section>
  )
}
