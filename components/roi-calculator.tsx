"use client"
import { ArrowRight } from "lucide-react"
import { RoiMockup } from "@/components/roi-mockup"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function RoiCalculator() {
    return (
        <>
            <section className="py-20 px-6 bg-white border-t border-[#e8e8e8]">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-16">
                        <p className="section-label mb-5">The Time & Money Calculator</p>
                        <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]">
                            What does flying blind actually cost?
                        </h2>
                        <p className="mt-5 text-[15px] text-[#737373]">
                            Run the full AEO lifecycle by hand and it eats ~68 hours per site every month. Stitch together separate point tools and it's still ~28. Colytics does it in ~5. Move the sliders — the math is yours to tune.
                        </p>
                    </div>
                </div>

                <RoiMockup />

                <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-[15px] text-[#737373] leading-relaxed flex-1">
                            Reclaim the time and budget you lose flying blind.
                        </p>
                        <EarlyAccessTrigger
                            label="Reclaim the time"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg font-medium text-[14px] hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap"
                        />
                    </div>
                </div>
            </section>

        </>
    )
}
