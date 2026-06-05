import EarlyAccessTrigger from "@/components/early-access-trigger"

const aiEngines = [
  { name: "ChatGPT", logo: "/llm-logo/openai.svg" },
  { name: "Google Gemini", logo: "/llm-logo/gemini.svg" },
  { name: "Anthropic Claude", logo: "/llm-logo/claude.svg" },
  { name: "Perplexity", logo: "/llm-logo/perplexity.svg" },
  { name: "xAI Grok", logo: "/llm-logo/grok.svg" },
  { name: "DeepSeek", logo: "/llm-logo/deepseek.svg" },
  { name: "Microsoft Copilot", logo: "/llm-logo/copilot.svg" },
  { name: "Google AI Overviews", logo: "/llm-logo/google-aio.svg" },
  { name: "Meta AI", logo: "/llm-logo/meta.svg" },
]

export function StatsSection() {
  return (
    <section id="the-shift" className="bg-white py-20 border-t border-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-16 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
          <div>
            <p className="section-label mb-8 text-[#d4a574]">THE SHIFT</p>
            <h2 className="heading-2 mb-6 max-w-2xl">
              Search didn't evolve. It was replaced.
            </h2>
            <p className="text-body-dark max-w-2xl">
              AI assistants now synthesize the answer directly — no ten blue links, no click. Roughly <span className="font-semibold">58% of informational queries</span> now end inside an AI answer. The question stopped being "do we rank?" — it's now <span className="font-bold text-[#5a5a5a]">"do we get cited?"</span> — and if not, "why, and what do we fix?"
            </p>
          </div>

          <div className="w-full min-w-0">
            <div className="flex flex-col md:grid md:grid-cols-12 w-full gap-6 items-stretch min-w-0">
              <div className="w-full md:col-span-5 p-5 sm:p-6 rounded-xl border bg-white border-[#e8e8e8] text-[#0a0a0a] min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] font-semibold text-[#9a9a9a]">THEN</span>
                </div>
                <p className="text-[14px] font-semibold mb-1">Traditional search</p>
                <p className="text-[13px] leading-relaxed text-[#737373]">
                  Users click through 10 blue links. Rankings determine visibility.
                </p>
              </div>

              <div className="flex items-center justify-center py-2 md:py-0 px-2 text-[28px] sm:text-[34px] leading-none md:px-0 md:col-span-2 text-muted-foreground">
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </div>

              <div className="w-full md:col-span-5 p-5 sm:p-6 rounded-xl border bg-[#0a0a0a] border-[#0a0a0a] text-white min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] font-semibold text-white">NOW</span>
                  <span className="text-[11px] px-2 py-0.5 bg-white/10 rounded-full text-white">Where value now lives</span>
                </div>
                <p className="text-[14px] font-semibold mb-1">AI-powered search</p>
                <p className="text-[13px] leading-relaxed text-white">
                  One synthesized answer. One source gets cited. One brand wins.
                </p>
              </div>
            </div>

            <div className="mt-8 w-full p-4 bg-[#f5f5f5] rounded-xl border border-[#e8e8e8] overflow-hidden relative group">
              <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee-scroll {
                  0% {
                    transform: translateX(0%);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                @keyframes wave-bob {
                  0%, 100% {
                    transform: translateY(-5px);
                  }
                  50% {
                    transform: translateY(5px);
                  }
                }
                .animate-marquee-scroll {
                  display: flex;
                  width: max-content;
                  animation: marquee-scroll 25s linear infinite;
                }
                .group:hover .animate-marquee-scroll {
                  animation-play-state: paused;
                }
                .animate-wave-bob {
                  animation: wave-bob 3s ease-in-out infinite;
                }
              `}} />

              <p className="text-[11px] text-[#9a9a9a] font-medium uppercase tracking-wide mb-3">
                AI engines tracked by Colytics
              </p>

              {/* Horizontal sliding track with wave motion */}
              <div className="relative w-full py-4 overflow-hidden">
                {/* Left/right fade gradients for premium feel */}
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent z-10 pointer-events-none" />

                <div className="animate-marquee-scroll flex gap-3.5 items-center">
                  {[...aiEngines, ...aiEngines].map((engine, idx) => {
                    const originalIndex = idx % aiEngines.length;
                    // Stagger delays based on position to create a sine wave
                    const delay = (originalIndex * (3 / aiEngines.length)).toFixed(2);
                    return (
                      <div
                        key={`${engine.name}-${idx}`}
                        className="animate-wave-bob flex items-center justify-center bg-white border border-[#e8e8e8] rounded-xl shadow-xs hover:shadow-md hover:border-[#d4a574]/40 transition-all duration-300 w-14 h-14 shrink-0 relative cursor-pointer"
                        style={{
                          animationDelay: `${delay}s`,
                        }}
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <img
                            src={engine.logo}
                            alt={engine.name}
                            className="max-w-full max-h-full object-contain"
                            title={engine.name}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 pt-7 border-t border-[#e8e8e8]">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-8">
            <p className="text-body flex-1">
              The answer layer is being written now, with or without your brand.
            </p>
            <EarlyAccessTrigger
              label={"Get on the map →"}
              className={"inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg text-button hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap w-full sm:w-auto"}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
