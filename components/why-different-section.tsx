import { ArrowRight } from "lucide-react"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function WhyDifferentSection() {
    const brands = ["HubSpot", "Semrush", "BigCommerce", "GetResponse", "LivePerson"]

    return (
        <section id="why-different" className="py-20 px-6 bg-[#fafafa] border-t border-[#e8e8e8]">
            <div className="max-w-6xl mx-auto">
                <div className="rounded-[2rem] border border-[#e8e8e8] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)] overflow-hidden">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center p-8 md:p-12 lg:p-14">
                        <div className="max-w-2xl">
                            <p className="section-label mb-5">WHY WE’RE DIFFERENT</p>
                            <h2 className="font-serif text-[34px] md:text-[46px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]">
                                Built by the agency that lived the problem.
                            </h2>
                            <p className="mt-5 text-[16px] text-[#525252] leading-relaxed max-w-xl">
                                A product of Attrock — a 12-year-old marketing agency, 100+ brands, 15+ countries. Scoreboard vs playbook: we give the why, the ranked fix, the content and the revenue proof.
                            </p>

                            <div className="grid sm:grid-cols-3 gap-3 mt-8">
                                <div className="rounded-2xl border border-[#e8e8e8] bg-[#fafafa] px-4 py-4">
                                    <div className="text-[11px] uppercase tracking-[0.18em] text-[#9a9a9a]">Agency age</div>
                                    <div className="mt-2 text-[22px] font-semibold text-[#0a0a0a]">12 years</div>
                                </div>
                                <div className="rounded-2xl border border-[#e8e8e8] bg-[#fafafa] px-4 py-4">
                                    <div className="text-[11px] uppercase tracking-[0.18em] text-[#9a9a9a]">Brands served</div>
                                    <div className="mt-2 text-[22px] font-semibold text-[#0a0a0a]">100+</div>
                                </div>
                                <div className="rounded-2xl border border-[#e8e8e8] bg-[#fafafa] px-4 py-4">
                                    <div className="text-[11px] uppercase tracking-[0.18em] text-[#9a9a9a]">Markets</div>
                                    <div className="mt-2 text-[22px] font-semibold text-[#0a0a0a]">15+ countries</div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[1.75rem] border border-[#e8e8e8] bg-[#fafafa] p-6 md:p-8">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9a9a9a] mb-5">
                                Brand strip
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {brands.map((brand) => (
                                    <div
                                        key={brand}
                                        className="inline-flex items-center justify-center rounded-full border border-[#dcdcdc] bg-white px-4 py-2 text-[13px] font-medium text-[#525252] shadow-sm"
                                    >
                                        {brand}
                                    </div>
                                ))}
                                <div className="inline-flex items-center justify-center rounded-full border border-dashed border-[#cfcfcf] bg-transparent px-4 py-2 text-[13px] font-medium text-[#737373]">
                                    +100 more
                                </div>
                            </div>

                            <div className="mt-8 rounded-2xl border border-[#e8e8e8] bg-white p-5">
                                <div className="text-[12px] font-medium text-[#0a0a0a] mb-2">What that means for your team</div>
                                <p className="text-[13px] leading-relaxed text-[#525252]">
                                    You get a partner who has already seen the playbook across channels, industries, and growth stages — not a generic AI visibility dashboard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-[15px] text-[#737373] leading-relaxed flex-1">
                            Partner with operators who’ve done it 100+ times. 
                        </p>
                        <EarlyAccessTrigger
                            label="Work with operators"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg font-medium text-[14px] hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}