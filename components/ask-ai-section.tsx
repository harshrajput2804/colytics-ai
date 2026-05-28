"use client"

import { ArrowRight, Check, MessageSquareText, Sparkles } from "lucide-react"
import EarlyAccessTrigger from "@/components/early-access-trigger"
import { useState } from "react"

export function AskAiSection() {
    const models = [
        { id: 'chatgpt', label: 'ChatGPT', value: 52, color: '#0a0a0a' },
        { id: 'gemini', label: 'Gemini', value: 38, color: '#4285f4' },
        { id: 'perplexity', label: 'Perplexity', value: 61, color: '#5046e5' },
    ]

    const [selected, setSelected] = useState(models[1]) // default Gemini like the attachment

    const answers: Record<string, string> = {
        chatgpt:
            "Your ChatGPT share slipped after a competitor updated comparison pages and improved schema. Focus on adding product schema + FAQ to priority pages — ranked High impact / Low effort.",
        gemini:
            "Your Gemini share slipped because a competitor published structured comparison pages. Add Product schema + an FAQ block to pricing — ranked High impact / Low effort. Open the fix?",
        perplexity:
            "Perplexity citations dropped after a key page lost schema signals. Restore structured data on top-performing pages and re-audit the crawl to recover citations.",
    }
    return (
        <section id="ask-ai" className="py-20 px-6 bg-white border-t border-[#e8e8e8]">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="max-w-xl">
                        <p className="section-label mb-5">ASK AI</p>
                        <h2 className="font-serif text-[32px] md:text-[40px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a] mb-4">
                            Don’t read the dashboard. Ask it.
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-[16px] mb-6">
                            Every chart, score and alert has an Ask AI button — it explains what you’re seeing, why it changed, and the best next move, in plain language.
                        </p>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3 text-sm text-[#525252]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                Plain-language answers on any screen
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#525252]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                Tells you the why and the next action
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#525252]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                No training, no manual
                            </li>
                        </ul>

                        <EarlyAccessTrigger
                            label="Ask your first question"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg font-medium text-[14px] hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap"
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-4xl bg-[radial-gradient(circle_at_top,rgba(21,73,240,0.10),transparent_60%)] blur-2xl" />
                        <div className="relative rounded-3xl border border-[#e8e8e8] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)] overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#fafafa] border-b border-[#e8e8e8]">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="flex items-center gap-2 px-3 py-1 bg-white border border-[#e8e8e8] rounded-md text-[11px] text-[#737373] font-medium">
                                        <MessageSquareText className="w-3 h-3" />
                                        Ask AI
                                    </div>
                                </div>
                                <div className="w-14" />
                            </div>
                            <div className="p-5 md:p-6 flex flex-col gap-4 bg-white">
                                <div className="mb-2">
                                    <div className="text-[11px] text-[#9a9a9a] uppercase tracking-[0.18em] mb-2">Share of voice · Last 30 days</div>
                                    <div className="space-y-3">
                                        {models.map((m) => (
                                            <div key={m.id} className="flex items-center gap-3">
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <div className="text-[13px] font-medium text-[#0a0a0a]">{m.label}</div>
                                                        <div className="text-[13px] font-mono text-[#525252]">{m.value}%</div>
                                                    </div>
                                                    <div className="w-full h-1.5 bg-[#f3f3f3] rounded-full overflow-hidden">
                                                        <div
                                                            role="button"
                                                            onClick={() => setSelected(m)}
                                                            className="h-full rounded-full transition-all cursor-pointer"
                                                            style={{ width: `${m.value}%`, background: m.color }}
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-[#e8e8e8] bg-[#fafafa] p-4">
                                    <div className="flex items-center justify-between gap-4 mb-3">
                                        <div>
                                            <div className="text-[11px] text-[#9a9a9a] uppercase tracking-[0.18em] mb-1">Question</div>
                                            <p className="text-[14px] font-medium text-[#0a0a0a]">Why did {selected.label} share change?</p>
                                        </div>
                                        <button className="inline-flex items-center gap-2 rounded-lg border border-[#e8e8e8] bg-white px-3 py-2 text-[11px] font-medium text-[#0a0a0a]">
                                            <Sparkles className="h-3.5 w-3.5 text-[#1549f0]" />
                                            Ask AI
                                        </button>
                                    </div>
                                    <div className="h-px bg-[#e8e8e8] mb-3" />
                                    <p className="text-[13px] leading-relaxed text-[#525252] mb-3">
                                        {answers[selected.id]}
                                    </p>
                                    <div className="grid sm:grid-cols-3 gap-2">
                                        {[
                                            { label: "Cause", value: "Schema gap" },
                                            { label: "Effect", value: "Score -6 pts" },
                                            { label: "Next move", value: "Fix FAQ schema" },
                                        ].map((item) => (
                                            <div key={item.label} className="rounded-xl border border-[#e8e8e8] bg-white p-3">
                                                <div className="text-[10px] uppercase tracking-[0.16em] text-[#9a9a9a] mb-1">{item.label}</div>
                                                <div className="text-[12px] font-medium text-[#0a0a0a]">{item.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}