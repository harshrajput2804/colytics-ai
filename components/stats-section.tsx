export function StatsSection() {
  return (
    <section className="py-28 px-6 bg-white border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: The big stat */}
          <div>
            <p className="section-label mb-5">The Shift</p>
            <div className="font-serif text-[96px] md:text-[120px] leading-none text-[#0a0a0a] tracking-tight">
              58<span className="text-[#9a9a9a]">%</span>
            </div>
            <h2 className="text-[22px] font-semibold text-[#0a0a0a] mt-4 mb-4 leading-snug">
              of informational queries now get answered by AI — without a click.
            </h2>
            <p className="text-[15px] text-[#737373] leading-relaxed">
              AI assistants synthesize answers from sources they trust. If your content is not structured and citation-ready, your brand disappears from the answers your customers are reading — even when you rank on page one of Google.
            </p>
            <p className="mt-6 font-serif text-[18px] italic text-[#0a0a0a]/50">
              "The question is no longer 'do we rank?' It is 'do we get cited?'"
            </p>
          </div>

          {/* Right: What's changing */}
          <div className="space-y-4">
            {[
              {
                heading: "Traditional search",
                sub: "Users click through 10 blue links. Rankings determine visibility.",
                state: "fading",
              },
              {
                heading: "AI-powered search",
                sub: "One synthesized answer. One source gets cited. One brand wins.",
                state: "rising",
              },
            ].map((card) => (
              <div
                key={card.heading}
                className={`p-6 rounded-xl border ${
                  card.state === "rising"
                    ? "bg-[#0a0a0a] border-[#0a0a0a] text-white"
                    : "bg-white border-[#e8e8e8] text-[#0a0a0a]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[12px] font-semibold ${card.state === "rising" ? "text-white/60" : "text-[#9a9a9a]"}`}>
                    {card.state === "rising" ? "NOW" : "THEN"}
                  </span>
                  {card.state === "rising" && (
                    <span className="text-[11px] px-2 py-0.5 bg-white/10 rounded-full text-white/70">Where value now lives</span>
                  )}
                </div>
                <p className="text-[14px] font-semibold mb-1">{card.heading}</p>
                <p className={`text-[13px] leading-relaxed ${card.state === "rising" ? "text-white/70" : "text-[#737373]"}`}>
                  {card.sub}
                </p>
              </div>
            ))}

            {/* Models tracked */}
            <div className="p-4 bg-[#f5f5f5] rounded-xl border border-[#e8e8e8]">
              <p className="text-[11px] text-[#9a9a9a] font-medium uppercase tracking-wide mb-3">AI models tracked by Colytics</p>
              <div className="flex gap-2">
                {[
                  { name: "ChatGPT", logo: "/llm-logo/openai.svg" },
                  { name: "Gemini", logo: "/llm-logo/gemini.svg" },
                  { name: "Claude", logo: "/llm-logo/claude.svg" },
                ].map((m) => (
                  <div key={m.name} className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-white border border-[#e8e8e8] rounded-lg">
                    <img src={m.logo} alt={m.name} className="w-4 h-4" />
                    <span className="text-[11px] font-medium text-[#0a0a0a]">{m.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
