"use client"

import EarlyAccessTrigger from "@/components/early-access-trigger"

export function AeoLifecycleSection() {
    return (
        <section id="aeo-lifecycle" className="enhanced-surface section-spacing bg-white border-t border-[#e8e8e8]">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-3xl mb-14">
                    <p className="section-label mb-5">THE AEO LIFECYCLE (CIRCULAR LOOP)</p>
                    <h2 className="heading-2 max-w-3xl">
                        One closed loop. No other platform runs it.
                    </h2>
                    <p className="text-body mt-5 max-w-2xl">
                        Every pass learns what worked and feeds it back into your scores, priorities and content briefs — so Colytics gets sharper with every cycle.
                    </p>
                </div>

                <div className="mx-auto w-full max-w-5xl">
                    {/* --- Cycle Diagram Container --- */}
                    <div
                        className="relative mx-auto w-full"
                        style={{ maxWidth: 720 }}
                    >
                        <img
                            src="/life_cycle.png"
                            alt="The AEO Lifecycle (Circular Loop)"
                            width={720}
                            height={720}
                            loading="lazy"
                            className="w-full h-auto block"
                        />
                    </div>

                    <div className="mx-auto mt-10 w-full max-w-4xl rounded-2xl border border-[#e8e8e8] bg-[#fafafa] p-6 sm:p-8">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#737373]">Why the loop matters</p>
                        <p className="mt-4 text-[16px] leading-relaxed text-[#4a4a4a]">
                            Every pass learns what worked and feeds it back into your scores, priorities and content briefs — so Colytics gets sharper with every cycle.
                        </p>
                    </div>

                    <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                            <p className="text-body flex-1">
                                Run the whole lifecycle in one system.
                            </p>
                            <EarlyAccessTrigger
                                label="Ask your first question"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] !text-white rounded-lg text-button hover:bg-[#0a0a0a]/90 transition-colors w-full sm:w-auto min-h-11"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
