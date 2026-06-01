import EarlyAccessTrigger from "@/components/early-access-trigger"

export function ProblemSection() {
  return (
    <section className="enhanced-surface py-20 px-4 sm:px-6 bg-[#fafafa] border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-5">THE PROBLEM</p>
          <h2 className="font-serif text-[32px] sm:text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]">
            You can’t fix what you can’t see.
          </h2>
          <p className="mt-5 text-[16px] text-[#737373] leading-relaxed">
            Two incomplete camps leave the real gap untouched: traditional SEO tools show rankings, while AI visibility monitors show the scoreboard without the playbook.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          <div className="bg-white border border-[#e8e8e8] rounded-2xl p-6 sm:p-7">
            <div className="w-8 h-8 rounded-lg bg-[#f5f5f5] border border-[#e8e8e8] flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="text-[15px] font-semibold text-[#0a0a0a] mb-2">Traditional SEO tools</h3>
            <p className="text-[14px] text-[#737373] leading-relaxed mb-5">
              Rankings, backlinks, and crawl health are useful — but they do not tell you when AI systems cite your competitors or skip your brand entirely.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Rank tracking", "Backlinks", "Crawls", "Technical SEO"].map((t) => (
                <span key={t} className="px-2.5 py-1 bg-[#f5f5f5] border border-[#e8e8e8] rounded-full text-[11px] text-[#737373] font-medium">{t}</span>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-[#f0f0f0]">
              <p className="text-[12px] text-[#9a9a9a]"><span className="font-semibold text-[#525252]">Blind spot:</span> Rankings, not citations.</p>
            </div>
          </div>

          <div className="bg-white border border-[#e8e8e8] rounded-2xl p-6 sm:p-7">
            <div className="w-8 h-8 rounded-lg bg-[#f5f5f5] border border-[#e8e8e8] flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </div>
            <h3 className="text-[15px] font-semibold text-[#0a0a0a] mb-2">AI visibility monitors</h3>
            <p className="text-[14px] text-[#737373] leading-relaxed mb-5">
              They surface citations and share of voice, but not the website-level diagnosis that explains how to improve them.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Citations", "Share of voice", "Monitoring", "Reports"].map((t) => (
                <span key={t} className="px-2.5 py-1 bg-[#f5f5f5] border border-[#e8e8e8] rounded-full text-[11px] text-[#737373] font-medium">{t}</span>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-[#f0f0f0]">
              <p className="text-[12px] text-[#9a9a9a]"><span className="font-semibold text-[#525252]">Blind spot:</span> A scoreboard, no playbook.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-[#0a0a0a] rounded-2xl p-7 md:p-8 text-white">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-4">Five blind spots</p>
          <ul className="grid gap-3 md:grid-cols-2 text-[14px] text-white">
            {[
              "Which prompts trigger competitor citations",
              "Why a specific page fails to get cited",
              "How to create content AI actually wants to cite",
              "Whether that content passes AI detection at scale",
              "How citation gains turn into real traffic and revenue",
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start rounded-xl border border-white/10 bg-white/5 px-4 py-3 leading-relaxed text-white">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-7 pt-7 border-t border-[#e8e8e8]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-8">
              <p className="text-[15px] text-[#737373] leading-relaxed flex-1">
                See the structural reason competitors win.
              </p>
              <EarlyAccessTrigger
                label={"Diagnose my gaps →"}
                className={"inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg font-medium text-[14px] hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap w-full sm:w-auto"}
              />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}
