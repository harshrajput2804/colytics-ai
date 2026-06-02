import { ArrowRight, Check, MessageSquare, Sparkles } from "lucide-react"
import EarlyAccessTrigger from "@/components/early-access-trigger"

interface ConnectToClaudeSectionProps {
  reverseLayout?: boolean
}

export function ConnectToClaudeSection({ reverseLayout = false }: ConnectToClaudeSectionProps) {
    return (
        <section id="connect-claude" className="enhanced-surface py-20 px-6 bg-transparent border-t border-[#e8e8e8]">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Claude Chat Mockup */}
                    <div className={`relative ${reverseLayout ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
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
                                        <MessageSquare className="w-3 h-3" />
                                        Claude.ai
                                    </div>
                                </div>
                                <div className="w-14" />
                            </div>
                            <div className="p-5 md:p-6 flex flex-col gap-4 bg-white min-h-[480px]">
                                {/* Context badge */}
                                <div className="text-[12px] text-[#9a9a9a] font-medium mb-2">CMO in Claude - Colytics connected</div>

                                {/* Chat messages */}
                                <div className="space-y-4 flex-1 overflow-y-auto">
                                    {/* User message */}
                                    <div className="flex justify-end">
                                        <div className="max-w-sm bg-[#000000] text-white rounded-2xl rounded-tr-md px-4 py-3 text-[13px] leading-relaxed">
                                            How are we doing in AI search this month? Build me a one-page report.
                                        </div>
                                    </div>

                                    {/* Assistant response with detailed info */}
                                    <div className="flex justify-start">
                                        <div className="max-w-lg bg-[#f5f5f5] text-[#0a0a0a] rounded-2xl rounded-tl-md p-4 text-[13px]">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Sparkles className="w-4 h-4 text-[#1549f0]" />
                                                <span className="text-[11px] font-medium text-[#000000]">Colytics via MCP</span>
                                            </div>
                                            
                                            {/* Main insight */}
                                            <div className="mb-4 pb-4 border-b border-[#e8e8e8]">
                                                <div className="flex items-baseline gap-2 mb-2">
                                                    <div className="text-[20px] font-bold text-[#0a0a0a]">AIVS? 71</div>
                                                    <span className="text-[12px] font-semibold text-green-600">(+12)</span>
                                                </div>
                                                <p className="text-[12px] text-[#525252] leading-relaxed">You recovered 41 lost citations and lead on Perplexity; the biggest gap is comparison content on ChatGPT.</p>
                                            </div>

                                            {/* Report status */}
                                            <div className="space-y-3 mb-4">
                                                <p className="text-[12px] font-medium text-[#0a0a0a]">One-page report ready:</p>
                                                <div className="flex items-center gap-3 bg-white border border-[#e8e8e8] rounded-lg p-3">
                                                    <div className="text-[16px] text-[#1549f0] font-medium">PDF</div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-[12px] font-medium text-[#0a0a0a] truncate">AI-Visibility-Report.pdf</div>
                                                        <div className="text-[11px] text-[#9a9a9a]">generated</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#000000] text-white rounded-lg font-medium text-[12px] hover:bg-[#000000]/90 transition-colors">
                                                View Full Report
                                                <ArrowRight className="h-3 w-3" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copy */}
                    <div className={`max-w-xl ${reverseLayout ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                        <p className="section-label mb-5">Connect to Claude - MCP</p>
                        <h2 className="font-serif text-[32px] md:text-[40px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a] mb-4">
                            Bring Colytics into Claude.
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-[16px] mb-6">
                            CMOs and managers don't log in - connect Colytics to Claude via MCP and ask how the brand/team is performing, then pull a report in the chat.
                        </p>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3 text-sm text-[#525252]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                Ask in plain English from inside Claude
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#525252]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                Live answers from your data, no login
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#525252]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                Generate and pull reports in the chat
                            </li>
                        </ul>

                        <EarlyAccessTrigger
                            label="Connect to Claude"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg font-medium text-[14px] hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
