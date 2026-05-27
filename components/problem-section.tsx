export function ProblemSection() {
  return (
    <section className="w-full px-4 md:px-6 py-20 md:py-28" style={{ backgroundColor: '#0E0E0F' }}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl mb-12 md:mb-14">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-[-0.02em]"
            style={{ color: '#FDFDFD', fontFamily: "'Bebas Neue', sans-serif" }}
          >
            You Cannot Fix What You Cannot See.
          </h2>

          <div className="mt-8 space-y-5" style={{ fontFamily: "'Helvetica', sans-serif" }}>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#CCD1D5' }}>
              Right now, most SEO teams have zero visibility into AI-generated answers. They do not know which prompts trigger citations. They do not know why competitors appear and they do not. They do not know which content gaps are causing invisibility.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#8F9399' }}>
              Existing tools fall into two camps — and neither solves the full problem:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 items-stretch">
          {/* Traditional SEO Tools */}
          <div className="rounded-3xl border border-white/8 bg-white/5 p-6 md:p-8 opacity-70">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <svg className="h-5 w-5 text-[#8F9399]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>

            <h3 className="text-[18px] md:text-[22px] font-bold leading-snug text-[#8F9399]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              Traditional SEO Tools
            </h3>

            <p className="mt-4 text-[15px] md:text-[17px] leading-relaxed text-[#8F9399]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              SEMrush, Ahrefs, and Screaming Frog were built for rankings and backlinks. They do not track AI citations or measure citation readiness. They were designed for a search era that is ending.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {['SEMrush', 'Ahrefs', 'Screaming Frog', 'Moz'].map((tool) => (
                <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] text-[#8F9399]">
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-[14px] leading-relaxed text-[#8F9399]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
                <span className="font-semibold text-[#C9A227]">Gap:</span> No AI citation tracking. No citation readiness scoring.
              </p>
            </div>
          </div>

          {/* AI Visibility Monitors */}
          <div className="rounded-3xl border border-white/8 bg-white/5 p-6 md:p-8 opacity-70">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <svg className="h-5 w-5 text-[#8F9399]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </div>

            <h3 className="text-[18px] md:text-[22px] font-bold leading-snug text-[#8F9399]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              AI Visibility Monitors
            </h3>

            <p className="mt-4 text-[15px] md:text-[17px] leading-relaxed text-[#8F9399]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              LLMRefs, Peec, and Scrunch tell you whether you were cited. That is useful. But they cannot tell you why you were not cited — because they do not analyze your website. They are scoreboards without a playbook.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {['LLMRefs', 'Peec AI', 'Scrunch', 'Otterly'].map((tool) => (
                <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] text-[#8F9399]">
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-[14px] leading-relaxed text-[#8F9399]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
                <span className="font-semibold text-[#C9A227]">Gap:</span> No website analysis. No “why” diagnosis. No fix list.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-[#1B1D21] px-6 py-12 md:px-10 md:py-16 text-center shadow-[0_10px_30px_rgba(0,0,0,0.18)] border border-white/5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8F9399]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
            THE GAP NO TOOL CLOSES
          </p>
          <p className="mx-auto mt-5 max-w-4xl text-3xl md:text-4xl lg:text-5xl leading-tight text-[#C9A227]" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.01em' }}>
            No platform connects citation monitoring with the website intelligence needed to actually fix the problem.
          </p>
          <p className="mt-6 text-base md:text-lg text-[#FDFDFD]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
            Colytics closes that gap.
          </p>
        </div>
      </div>
    </section>
  )
}
