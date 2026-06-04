import { RoiMockup } from "@/components/roi-mockup"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function RoiCalculator() {
    return (
        <>
            <section id="roi-calculator" className="enhanced-surface section-spacing bg-transparent border-t border-[#e8e8e8]">
                <div className="max-w-6xl mx-auto min-w-0">
                    <div className="max-w-2xl mb-10 sm:mb-16">
                        <p className="section-label mb-5">The Time & Money Calculator</p>
                        <h2 className="heading-2">
                            What does flying blind actually cost?
                        </h2>
                        <p className="text-body mt-5">
                            Move the sliders - the math is yours to tune.
                        </p>
                    </div>
                </div>

                <RoiMockup />

                <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7 px-0">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                        <p className="text-body flex-1">
                            Reclaim the time and budget you lose flying blind.
                        </p>
                        <EarlyAccessTrigger
                            label="Reclaim the time"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] !text-white rounded-lg text-button hover:bg-[#0a0a0a]/90 transition-colors w-full sm:w-auto min-h-11"
                        />
                    </div>
                </div>
            </section>

        </>
    )
}
