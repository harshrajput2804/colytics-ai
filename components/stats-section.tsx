export function StatsSection() {
  return (
    <section className="py-20 bg-white border-t border-[#e8e8e8]">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-16 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
          <div>
            <p className="section-label mb-8 text-[#d4a574]">THE SHIFT</p>
            <h1 className="text-[50px] md:text-[60px] font-serif font-bold text-[#0a0a0a] mb-6 leading-tight tracking-tight max-w-2xl">
              Search didn't evolve. It was replaced.
            </h1>
            <p className="text-[16px] text-[#5a5a5a] leading-relaxed max-w-2xl">
              AI assistants now synthesize the answer directly — no ten blue links, no click. Roughly <span className="font-semibold">58% of informational queries</span> now end inside an AI answer. The question stopped being "do we rank?" — it's now <span className="font-bold text-[#5a5a5a]">"do we get cited?"</span> — and if not, "why, and what do we fix?"
            </p>
          </div>

          <div className="w-full">
            <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-12">
              <div className="w-full md:col-span-5 p-6 rounded-xl border bg-white border-[#e8e8e8] text-[#0a0a0a]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] font-semibold text-[#9a9a9a]">THEN</span>
                </div>
                <p className="text-[14px] font-semibold mb-1">Traditional search</p>
                <p className="text-[13px] leading-relaxed text-[#737373]">
                  Users click through 10 blue links. Rankings determine visibility.
                </p>
              </div>

              <div className="flex items-center justify-center px-2 text-[34px] leading-none md:px-0 md:col-span-2">
                →
              </div>

              <div className="w-full md:col-span-5 p-6 rounded-xl border bg-[#0a0a0a] border-[#0a0a0a] text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] font-semibold text-white/60">NOW</span>
                  <span className="text-[11px] px-2 py-0.5 bg-white/10 rounded-full text-white/70">Where value now lives</span>
                </div>
                <p className="text-[14px] font-semibold mb-1">AI-powered search</p>
                <p className="text-[13px] leading-relaxed text-white/70">
                  One synthesized answer. One source gets cited. One brand wins.
                </p>
              </div>
            </div>

            <div className="mt-8 w-full p-4 bg-[#f5f5f5] rounded-xl border border-[#e8e8e8]">
              <p className="text-[11px] text-[#9a9a9a] font-medium uppercase tracking-wide mb-3">AI engines tracked by Colytics</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  "ChatGPT",
                  "Google Gemini",
                  "Anthropic Claude",
                  "Perplexity",
                  "xAI Grok",
                  "DeepSeek",
                  "Microsoft Copilot",
                  "Google AI Overviews",
                  "Meta AI",
                ].map((name) => (
                  <div key={name} className="flex items-center justify-center px-2 py-2 bg-white border border-[#e8e8e8] rounded-lg min-h-10">
                    <span className="text-[10px] font-medium text-[#0a0a0a] text-center leading-tight">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 pt-7 border-t border-[#e8e8e8]">
          <div className="flex items-center justify-between gap-8">
            <p className="text-[15px] text-[#737373] leading-relaxed flex-1">
              The answer layer is being written now, with or without your brand.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg font-medium text-[14px] hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap">
              Get on the map
              <span className="text-[16px]">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
