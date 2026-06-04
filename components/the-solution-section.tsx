import { Button } from "@/components/ui/button"
import EarlyAccessTrigger from "@/components/early-access-trigger"
import { ArrowRight } from "lucide-react"

export function TheSolutionSection() {
    return (
        <section id="the-solution" className="enhanced-surface section-spacing bg-transparent border-t border-[#e8e8e8]">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-3xl mb-14">
                    <p className="section-label mb-5">THE SOLUTION</p>
                    <h2 className="heading-2 max-w-3xl">
                        Four moves. One closed loop.
                    </h2>
                    <p className="text-body mt-5 max-w-2xl">
                        Colytics runs your AI visibility as a continuous loop — every pass feeds the next, so it gets sharper the more you use it. Four moves:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 items-stretch">
                    <div className="bg-[#fafafa] border border-[#efefef] rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col h-full">
                        <h3 className="heading-3-lg mb-3">See — AI Citation Intelligence</h3>
                        <p className="text-body flex-1">Track citations, share of voice, buyer prompts and competitors across every engine — know where you’re cited and where you’re not.</p>
                    </div>

                    <div className="bg-[#fafafa] border border-[#efefef] rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col h-full">
                        <h3 className="heading-3-lg mb-3">Diagnose — Website & Content Intelligence</h3>
                        <p className="text-body flex-1">AIVS™ plus per-page LCS™ and structure/schema analysis explain why each page is or isn’t being cited.</p>
                    </div>

                    <div className="bg-[#fafafa] border border-[#efefef] rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col h-full">
                        <h3 className="heading-3-lg mb-3">Act — Content & Fixes</h3>
                        <p className="text-body flex-1">A ranked roadmap and citation-ready content generation in your voice — validated to read as human.</p>
                    </div>

                    <div className="bg-[#fafafa] border border-[#efefef] rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col h-full">
                        <h3 className="heading-3-lg mb-3">Prove — Impact & Growth</h3>
                        <p className="text-body flex-1">GA4-linked attribution ties AI citations to traffic, conversions and revenue so you can prove impact.</p>
                    </div>
                </div>

                <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-body flex-1">
                            Run the entire loop in one system.
                        </p>
                        <EarlyAccessTrigger
                            label="Walk the loop"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg text-button hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
