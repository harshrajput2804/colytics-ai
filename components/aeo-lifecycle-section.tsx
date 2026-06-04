"use client"

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

/**
 * Place nodes on a circle. Starts at top (-90°), goes clockwise.
 * Returns percentage coordinates (0-100) relative to the cycle container.
 */
function getNodePosition(index: number, total: number) {
    const angleDeg = -90 + (index * 360) / total
    const angleRad = (angleDeg * Math.PI) / 180
    // Radius = 40% — leaves room for labels inside the padded container
    return {
        x: 50 + 40 * Math.cos(angleRad),
        y: 50 + 40 * Math.sin(angleRad),
    }
}

/**
 * Each node gets a single label direction so text faces outward.
 * Manually mapped for 10 items on a clock face.
 */
type LabelSide = "top" | "bottom" | "left" | "right"
const labelSides: LabelSide[] = [
    "top",    // 01 – 12 o'clock
    "right",  // 02 – ~1:12
    "right",  // 03 – ~2:24
    "right",  // 04 – ~3:36
    "right",  // 05 – ~4:48
    "bottom", // 06 – 6 o'clock
    "left",   // 07 – ~7:12
    "left",   // 08 – ~8:24
    "left",   // 09 – ~9:36
    "left",   // 10 – ~10:48
]

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
                        className="relative mx-auto w-full rounded-3xl sm:rounded-4xl border border-[#e8e8e8] bg-[#fafafa]"
                        style={{ maxWidth: 720 }}
                    >
                        {/* Inner aspect-ratio wrapper with generous padding so labels fit inside */}
                        <div className="relative w-full p-10 sm:p-14 md:p-16">
                            {/* Square aspect ratio holder for the rings */}
                            <div className="relative w-full aspect-square">

                                {/* Outer dashed ring */}
                                <div className="absolute inset-[2%] rounded-full border border-dashed border-[#d4d4d4]" />

                                {/* Middle white ring */}
                                <div className="absolute inset-[18%] rounded-full border border-[#e8e8e8] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.04)]" />

                                {/* Center black circle */}
                                <div className="absolute inset-[30%] flex items-center justify-center rounded-full bg-[#0a0a0a] shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                                    <div className="text-center px-3">
                                        <p className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">
                                            Closed loop
                                        </p>
                                        <p className="mt-1 text-[14px] sm:text-[18px] md:text-[22px] font-semibold leading-snug text-white">
                                            Learn,<br />fix,<br />verify,<br />grow.
                                        </p>
                                    </div>
                                </div>

                                {/* --- 10 Nodes --- */}
                                {lifecycleStages.map((stage, index) => {
                                    const { x, y } = getNodePosition(index, lifecycleStages.length)
                                    const side = labelSides[index]

                                    // Flex direction based on label placement
                                    const flexDir =
                                        side === "top" ? "flex-col-reverse" :
                                            side === "bottom" ? "flex-col" :
                                                side === "left" ? "flex-row-reverse" :
                                                    "flex-row" // right

                                    const textAlign =
                                        side === "left" ? "text-right" :
                                            side === "top" || side === "bottom" ? "text-center" :
                                                "text-left"

                                    return (
                                        <div
                                            key={stage.label}
                                            className="absolute"
                                            style={{
                                                left: `${x}%`,
                                                top: `${y}%`,
                                                transform: "translate(-50%, -50%)",
                                            }}
                                        >
                                            <div className={`flex items-center gap-1.5 sm:gap-2 ${flexDir}`}>
                                                {/* Number badge */}
                                                <span className="flex h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-[8px] sm:text-[9px] md:text-[10px] font-bold text-white shadow-sm">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>

                                                {/* Label — constrained width, wraps naturally */}
                                                <span className={`max-w-[80px] sm:max-w-[100px] md:max-w-[120px] text-[9px] sm:text-[11px] md:text-[13px] font-medium leading-tight text-[#0a0a0a] ${textAlign}`}>
                                                    {stage.label}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
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
