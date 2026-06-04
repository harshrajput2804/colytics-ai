import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function ModulesSection() {
    return (
        <section id="modules" className="enhanced-surface section-spacing bg-transparent border-t border-[#e8e8e8]">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-3xl mb-12">
                    <p className="section-label mb-5">MODULES Inside the platform</p>
                    <h2 className="heading-2-compact max-w-3xl mb-3">
                        Nine connected modules from audit to cited content to revenue — no extra tools
                    </h2>
                    {/* <p className="text-muted-foreground leading-relaxed">Nine connected modules from audit to cited content to revenue — no extra tools.</p> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8">
                    <div id="structured-data" className="bg-[#fafafa] border border-[#efefef] rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center font-semibold">A</div>
                            <h3 className="heading-3-serif">Website & Content Analyzer</h3>
                        </div>
                        <p className="text-body">Crawls and scores every page for AI-readiness, citation potential, content quality and technical AEO health.</p>
                    </div>

                    <div id="prompt-visibility" className="bg-[#fafafa] border border-[#efefef] rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center font-semibold">B</div>
                            <h3 className="heading-3-serif">Structured Data & AI Files</h3>
                        </div>
                        <p className="text-body">Schema, `llms.txt`, `facts.json` so AI engines read and trust your content.</p>
                    </div>

                    <div className="bg-[#fafafa] border border-[#efefef] rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center font-semibold">C</div>
                            <h3 className="heading-3-serif">AI SEO / AEO Visibility</h3>
                        </div>
                        <p className="text-body">Answer-completeness & entity scoring, LLM answer simulator, actions ranked by citation lift.</p>
                    </div>

                    <div className="bg-[#fafafa] border border-[#efefef] rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center font-semibold">D</div>
                            <h3 className="heading-3-serif">Keyword → Prompt Intelligence</h3>
                        </div>
                        <p className="text-body">Transforms keywords into buyer prompts, scored and mapped to content gaps.</p>
                    </div>

                    <div className="bg-[#fafafa] border border-[#efefef] rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center font-semibold">E</div>
                            <h3 className="heading-3-serif">Prompt Tracking & Multi-Model Tester</h3>
                        </div>
                        <p className="text-body">Tracks prompts across engines with prompt → response → cited-URL trails.</p>
                    </div>

                    <div className="bg-[#fafafa] border border-[#efefef] rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center font-semibold">F</div>
                            <h3 className="heading-3-serif">Competitor AI Intelligence</h3>
                        </div>
                        <p className="text-body">Where competitors get cited and why; prompt-wins library, source-gap map, alerts.</p>
                    </div>

                    <div className="bg-[#fafafa] border border-[#efefef] rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center font-semibold">G</div>
                            <h3 className="heading-3-serif">Reports & Alerts</h3>
                        </div>
                        <p className="text-body">Weekly reports + alerts on lost citations, model drift, and new rivals.</p>
                    </div>

                    <div className="bg-[#fafafa] border border-[#efefef] rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center font-semibold">H</div>
                            <h3 className="heading-3-serif">Impact Analytics</h3>
                        </div>
                        <p className="text-body">AI citations → GA4 traffic, conversions and revenue.</p>
                    </div>

                    <div className="bg-[#fafafa] border border-[#efefef] rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center font-semibold">I</div>
                            <h3 className="heading-3-serif">Content Generation & AI Detection</h3>
                        </div>
                        <p className="text-body">Long-form citation-ready content, validated humanized and AEO-ready.</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-6 mb-6 bg-gray-50 border-l-4 border-black p-5 sm:p-6 rounded-md">
                    <p className="text-[15px] text-[#111827] font-semibold mb-4">The edge isn’t one feature — it’s the combination:</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-gray-700">
                                <Check className="w-4 h-4" />
                            </span>
                            <span className="text-gray-700">Prompt intelligence</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-gray-700">
                                <Check className="w-4 h-4" />
                            </span>
                            <span className="text-gray-700">Structured data & AI files</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-gray-700">
                                <Check className="w-4 h-4" />
                            </span>
                            <span className="text-gray-700">Content auditing</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-gray-700">
                                <Check className="w-4 h-4" />
                            </span>
                            <span className="text-gray-700">Citation-ready generation</span>
                        </li>
                    </ul>
                </div>

                <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                        <p className="text-body flex-1">
                            Generate content that gets cited.
                        </p>
                        <EarlyAccessTrigger
                            label="Explore the modules"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg text-button hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap w-full sm:w-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
