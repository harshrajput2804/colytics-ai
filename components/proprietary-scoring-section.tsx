import { ArrowRight, Check } from "lucide-react"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function ProprietaryScoringSection() {
    return (
        <section id="proprietary-scoring" className="enhanced-surface section-spacing bg-transparent border-t border-[#e8e8e8]">
            <div className="max-w-6xl mx-auto">
                <div id="aeo-readiness" className="max-w-3xl mb-12 scroll-mt-32">
                    <p className="section-label mb-5">THE INTELLIGENCE LAYER</p>
                    <h2 className="heading-2-compact max-w-3xl mb-3">
                        Proprietary scoring as a customer benefit.
                    </h2>
                    <p className="text-body">
                        One clear score, one predicted outcome, and one ranked next step — so customers know exactly what to do next.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="bg-white border border-[#efefef] rounded-2xl p-7 shadow-sm">
                        <div className="flex items-center justify-between gap-4 mb-4">
                            <div>
                                <h3 className="heading-3-lg font-semibold">AIVS</h3>
                                <p className="text-xs uppercase tracking-[0.2em] text-[#737373] mb-2">One number from 7 dimensions / 29 parameters</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-5">
                            Scores performance across every AI engine in a single proprietary value your customers can understand instantly.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-[#525252]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                Cross-engine visibility in one score
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#525252]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                7 dimensions, 29 weighted parameters
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-[#efefef] rounded-2xl p-7 shadow-sm">
                        <div className="flex items-center justify-between gap-4 mb-4">
                            <div>
                                <h3 className="heading-3-lg font-semibold">LCS</h3>
                                <p className="text-xs uppercase tracking-[0.2em] text-[#737373] mb-2">Predict citation likelihood before you publish</p>
                            </div>
                            
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-5">
                            Page-level intelligence that estimates whether a page is likely to earn AI citations before it goes live.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-[#525252]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                Forecast citation likelihood early
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#525252]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                Improve pages before publishing
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-[#efefef] rounded-2xl p-7 shadow-sm">
                        <div className="flex items-center justify-between gap-4 mb-4">
                            <div>
                                <h3 className="heading-3-lg font-semibold">IEU</h3>
                                <p className="text-xs uppercase tracking-[0.2em] text-[#737373] mb-2">Impact × Effort × Urgency</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-5">
                            Ranks every recommendation so teams know which action will create the biggest gain fastest.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-[#525252]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                Prioritize by impact, effort, and urgency
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#525252]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                Turn scores into ranked next steps
                            </li>
                        </ul>
                    </div>
                </div>

                

                <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-body flex-1">
                            Get one clear number and the ranked next step.
                        </p>
                        <EarlyAccessTrigger
                            label="See my scores"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg text-button hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
