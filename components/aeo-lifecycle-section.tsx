import { ArrowRight } from "lucide-react"
import EarlyAccessTrigger from "@/components/early-access-trigger"

const lifecycleStages = [
    { label: "Website Audit" },
    { label: "Content Audit" },
    { label: "Competitor Analysis" },
    { label: "Fix Your Content" },
    { label: "Generate Humanized Content" },
    { label: "Fix Your Website" },
    { label: "Identify Prompts" },
    { label: "Track Prompts" },
    { label: "Verify Impact" },
    { label: "Grow" },
]

const circleRadius = "clamp(160px, 24vw, 245px)"

export function AeoLifecycleSection() {
    return (
        <section id="aeo-lifecycle" className="enhanced-surface py-28 px-6 bg-transparent border-t border-[#e8e8e8]">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-3xl mb-14">
                    <p className="section-label mb-5">THE AEO LIFECYCLE (CIRCULAR LOOP)</p>
                    <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a] max-w-3xl">
                        One closed loop. No other platform runs it.
                    </h2>
                    <p className="mt-5 text-[16px] leading-relaxed text-[#737373] max-w-2xl">
                        Every pass learns what worked and feeds it back into your scores, priorities and content briefs — so Colytics gets sharper with every cycle.
                    </p>
                </div>

                <div className="mx-auto w-full max-w-5xl">
                    <div className="relative mx-auto flex w-full max-w-190 items-center justify-center rounded-4xl border border-[#e8e8e8] bg-[#fafafa] p-6 sm:p-10 overflow-hidden">
                        <div className="absolute inset-8 rounded-full border border-dashed border-[#d9d9d9]" />
                        <div className="absolute inset-[18%] rounded-full border border-[#e8e8e8] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.04)]" />
                        <div className="absolute inset-[34%] flex items-center justify-center rounded-full border border-[#141414] bg-[#0a0a0a] px-6 text-center text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">Closed loop</p>
                                <p className="mt-2 text-[18px] font-semibold leading-snug">Learn, fix, verify, grow.</p>
                            </div>
                        </div>

                        <div className="relative h-140 w-140 max-w-full sm:h-160 sm:w-160">
                            {lifecycleStages.map((stage, index) => {
                                const angle = 360 + index * 36

                                return (
                                    <div
                                        key={stage.label}
                                        className="absolute left-1/2 top-1/2"
                                        style={{
                                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * ${circleRadius})) rotate(${-angle}deg)`,
                                        }}
                                    >
                                        <div className="flex min-h-18 w-36 items-center justify-center gap-2 px-3 text-center sm:w-39">
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-[10px] font-semibold text-white">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-left text-[12px] font-medium leading-snug text-[#0a0a0a] sm:text-[13px]">
                                                {stage.label}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="mx-auto mt-10 w-full max-w-4xl rounded-2xl border border-[#e8e8e8] bg-[#fafafa] p-6 sm:p-8">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#737373]">Why the loop matters</p>
                        <p className="mt-4 text-[16px] leading-relaxed text-[#4a4a4a]">
                            Every pass learns what worked and feeds it back into your scores, priorities and content briefs — so Colytics gets sharper with every cycle.
                        </p>
                    </div>

                    <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
                        <div className="flex items-center justify-between gap-8">
                            <p className="text-[15px] text-[#737373] leading-relaxed flex-1">
                                Run the whole lifecycle in one system.
                            </p>
                            <EarlyAccessTrigger
                                label="Ask your first question"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg font-medium text-[14px] hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
