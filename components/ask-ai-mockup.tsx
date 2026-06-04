"use client"

import { MessageSquareText, Sparkles } from "lucide-react"
import { useState } from "react"

const models = [
  { id: "chatgpt", label: "ChatGPT", value: 52, color: "#0a0a0a" },
  { id: "gemini", label: "Gemini", value: 38, color: "#4285f4" },
  { id: "perplexity", label: "Perplexity", value: 61, color: "#5046e5" },
]

const answers: Record<string, string> = {
  chatgpt:
    "Your ChatGPT share slipped after a competitor updated comparison pages and improved schema. Focus on adding product schema and FAQ to priority pages, ranked High impact / Low effort.",
  gemini:
    "Your Gemini share slipped because a competitor published structured comparison pages. Add Product schema and an FAQ block to pricing, ranked High impact / Low effort. Open the fix?",
  perplexity:
    "Perplexity citations dropped after a key page lost schema signals. Restore structured data on top-performing pages and re-audit the crawl to recover citations.",
}

export function AskAiMockup() {
  const [selected, setSelected] = useState(models[1])

  return (
    <div className="relative min-w-0">
      <div className="absolute -inset-2 sm:-inset-4 rounded-4xl bg-[radial-gradient(circle_at_top,rgba(21,73,240,0.10),transparent_60%)] blur-2xl" />
      <div className="relative mockup-shell overflow-hidden rounded-2xl sm:rounded-3xl border border-[#e8e8e8] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-2 border-b border-[#e8e8e8] bg-[#fafafa] px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex flex-1 justify-center">
            <div className="flex items-center gap-2 rounded-md border border-[#e8e8e8] bg-white px-3 py-1 text-[11px] font-medium text-[#737373]">
              <MessageSquareText className="h-3 w-3" />
              Ask AI
            </div>
          </div>
          <div className="w-14" />
        </div>

        <div className="flex flex-col gap-4 bg-white p-4 sm:p-5 md:p-6">
          <div className="mb-2">
            <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#9a9a9a]">Share of voice - Last 30 days</div>
            <div className="space-y-3">
              {models.map((model) => (
                <div key={model.id} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-[13px] font-medium text-[#0a0a0a]">{model.label}</div>
                      <div className="font-mono text-[13px] text-[#525252]">{model.value}%</div>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#f3f3f3]">
                      <button
                        type="button"
                        onClick={() => setSelected(model)}
                        className="block h-full cursor-pointer rounded-full transition-all"
                        style={{ width: `${model.value}%`, background: model.color }}
                        aria-label={`Show ${model.label} answer`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#e8e8e8] bg-[#fafafa] p-3 sm:p-4">
            <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="mb-1 text-[11px] uppercase tracking-[0.18em] text-[#9a9a9a]">Question</div>
                <p className="text-[13px] sm:text-[14px] font-medium text-[#0a0a0a]">Why did {selected.label} share change?</p>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e8e8e8] bg-white px-3 py-2.5 text-[11px] font-medium text-[#0a0a0a] shrink-0 min-h-11">
                <Sparkles className="h-3.5 w-3.5 text-[#1549f0]" />
                Ask AI
              </button>
            </div>
            <div className="mb-3 h-px bg-[#e8e8e8]" />
            <p className="mb-3 text-[13px] leading-relaxed text-[#525252]">{answers[selected.id]}</p>
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-3">
              {[
                { label: "Cause", value: "Schema gap" },
                { label: "Effect", value: "Score -6 pts" },
                { label: "Next move", value: "Fix FAQ schema" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-[#e8e8e8] bg-white p-3">
                  <div className="mb-1 text-[10px] uppercase tracking-[0.16em] text-[#9a9a9a]">{item.label}</div>
                  <div className="text-[12px] font-medium text-[#0a0a0a]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
