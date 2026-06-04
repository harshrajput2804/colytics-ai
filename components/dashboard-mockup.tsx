import { Globe } from "lucide-react"

const missedRows = [
  { prompt: "best enterprise seo tools 2025", model: "ChatGPT", comp: "Ahrefs, Semrush", reason: "Missing Schema", impact: "High" },
  { prompt: "how to improve ai search visibility", model: "Gemini", comp: "Competitor A", reason: "Low entity density", impact: "High" },
  { prompt: "aeo optimization software", model: "Perplexity", comp: "Competitor B", reason: "No FAQ structure", impact: "Med" },
]

export function DashboardMockup() {
  const bars = [
    { label: "Jan", you: 50, comp: 71 },
    { label: "Feb", you: 51, comp: 63 },
    { label: "Mar", you: 49, comp: 67 },
    { label: "Apr", you: 55, comp: 68 },
    { label: "May", you: 58, comp: 75 },
    { label: "Jun", you: 64, comp: 86 },
    { label: "Jul", you: 67, comp: 54 },
  ]

  return (
    <div
      id="ai-citation-visibility"
      className="mockup-shell w-full rounded-t-2xl overflow-hidden shadow-[0_-4px_60px_rgba(0,0,0,0.08)]"
      style={{ border: "1px solid #e8e8e8", borderBottom: "none" }}
    >
      <div className="flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 bg-[#fafafa] border-b border-[#e8e8e8]">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex justify-center min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white border border-[#e8e8e8] rounded-md text-[10px] sm:text-[11px] text-[#9a9a9a] font-mono max-w-full truncate">
            <Globe className="w-3 h-3 shrink-0" />
            <span className="truncate">app.colytics.ai</span>
          </div>
        </div>
        <div className="w-6 sm:w-14 shrink-0" />
      </div>

      <div className="md:hidden flex items-center gap-2 overflow-x-auto scrollbar-hide px-3 py-2.5 bg-[#fafafa] border-b border-[#e8e8e8]">
        {["Citation Analysis", "Share of Voice", "Prompt Coverage"].map((item, index) => (
          <span
            key={item}
            className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium ${
              index === 0
                ? "bg-white border border-[#e8e8e8] text-[#0a0a0a] shadow-sm"
                : "text-[#737373]"
            }`}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-col md:flex-row bg-white min-h-0 md:min-h-[480px]">
        <div className="w-full md:w-52 border-r border-[#e8e8e8] bg-[#fafafa] hidden md:flex flex-col p-4">
          <div className="flex items-center gap-2 mb-7 px-1">
            <img src="/logo/colytics-logo-notext.svg" alt="Colytics" className="w-6 h-6" />
            <span className="text-[13px] font-semibold text-[#0a0a0a]">Colytics</span>
          </div>

          <div className="px-2 py-1.5 bg-white border border-[#e8e8e8] rounded-lg mb-5 flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#1549f0]/10 flex items-center justify-center">
              <span className="text-[#1549f0] text-[8px] font-bold">A</span>
            </div>
            <span className="text-[12px] text-[#0a0a0a] font-medium truncate">acmecorp.com</span>
          </div>

          <nav className="space-y-0.5 flex-1">
            {[
              { label: "Citation Analysis", active: true, icon: "M3 3h18v4H3zM3 9h12v2H3zM3 13h15v2H3zM3 17h10v2H3z" },
              { label: "Share of Voice", active: false, icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
              { label: "Prompt Coverage", active: false, icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
              { label: "Execution Roadmap", active: false, icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
              { label: "Website Audit", active: false, icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Reports", active: false, icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 px-2 py-2 rounded-md text-[12px] cursor-pointer ${
                  item.active
                    ? "bg-white border border-[#e8e8e8] text-[#0a0a0a] font-medium shadow-sm"
                    : "text-[#737373] hover:text-[#0a0a0a] hover:bg-white/60"
                }`}
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                {item.label}
              </div>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#e8e8e8]">
            <div className="text-[10px] text-[#9a9a9a] mb-1.5">Crawl usage</div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] text-[#525252] font-medium">2,450 / 5,000</span>
              <span className="text-[10px] text-[#9a9a9a]">49%</span>
            </div>
            <div className="w-full h-1 bg-[#e8e8e8] rounded-full overflow-hidden">
              <div className="h-full bg-[#0a0a0a] rounded-full" style={{ width: "49%" }} />
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0 p-3 sm:p-4 md:p-6 overflow-hidden">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
            <div className="min-w-0">
              <p className="ui-heading">Citation Analysis</p>
              <p className="text-[11px] sm:text-[12px] text-[#9a9a9a] mt-0.5 truncate">acmecorp.com — Last 90 days</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <div className="px-2.5 sm:px-3 py-1.5 bg-[#f5f5f5] border border-[#e8e8e8] rounded-lg text-[10px] sm:text-[11px] text-[#525252] font-medium whitespace-nowrap">
                Last 90 days ↓
              </div>
              <div className="px-2.5 sm:px-3 py-1.5 bg-[#1549f0] rounded-lg text-[10px] sm:text-[11px] text-white font-medium whitespace-nowrap">
                Run audit
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
            {[
              { label: "Total Citations", value: "1,248", delta: "+12%", positive: true },
              { label: "Missed Opportunities", value: "342", delta: "-8%", positive: false },
              { label: "AEO Readiness", value: "68/100", delta: "+5pts", positive: true },
              { label: "Share of Voice", value: "41%", delta: "+3%", positive: true },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-white border border-[#e8e8e8] rounded-xl p-3 sm:p-4 min-w-0">
                <div className="text-[10px] sm:text-[11px] text-[#9a9a9a] mb-1 sm:mb-1.5 truncate">{kpi.label}</div>
                <div className="text-[18px] sm:text-[22px] font-semibold text-[#0a0a0a] leading-none mb-1 sm:mb-1.5 font-serif">{kpi.value}</div>
                <div className={`text-[10px] sm:text-[11px] font-medium ${kpi.positive ? "text-[#16a34a]" : "text-[#dc2626]"}`}>
                  {kpi.delta} vs last period
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-5 gap-3 sm:gap-4">
            <div className="col-span-1 xl:col-span-3 bg-white border border-[#e8e8e8] rounded-xl p-3 sm:p-4 flex h-full flex-col min-w-0">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                <div className="text-[11px] sm:text-[12px] font-medium text-[#0a0a0a]">Citation Share vs Top Competitor</div>
                <div className="flex items-center gap-3 text-[10px] text-[#9a9a9a]">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-sm inline-block bg-[#0a0a0a]" />
                    You
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-sm inline-block bg-[#e8e8e8]" />
                    Competitor A
                  </span>
                </div>
              </div>
              <div className="relative mt-auto h-44 sm:h-56 xl:h-80 rounded-lg bg-linear-to-b from-white to-[#fcfcfc] px-1 pt-6 sm:pt-8 pb-3 sm:pb-4">
                <div className="absolute inset-x-1 top-8 sm:top-10 border-t border-dashed border-[#efefef]" />
                <div className="absolute inset-x-1 top-[24%] border-t border-dashed border-[#f1f1f1]" />
                <div className="absolute inset-x-1 top-[68%] border-t border-dashed border-[#f1f1f1]" />
                <div className="absolute inset-x-1 bottom-5 sm:bottom-6 border-t border-[#e8e8e8]" />
                <div className="absolute right-2 top-2 text-[8px] sm:text-[9px] text-[#c0c0c0] uppercase tracking-wide">Target 65%</div>
                <div className="absolute inset-x-0 bottom-6 sm:bottom-8 flex items-end gap-1 sm:gap-2 px-0.5 sm:px-1">
                  {bars.map((b, idx) => (
                    <div key={b.label} className="flex-1 flex flex-col items-stretch gap-1 min-w-0">
                      <div className="flex items-end gap-0.5 sm:gap-1 h-24 sm:h-28 xl:h-36">
                        <div className="flex-1 flex flex-col items-center justify-end gap-1 min-w-0">
                          <span className="text-[8px] sm:text-[9px] font-semibold text-[#0a0a0a]">{b.you}</span>
                          <div
                            className="motion-bar w-full rounded-sm bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(0,0,0,0.02)]"
                            style={{ height: `${18 + b.you * 1.6}px`, minHeight: 18, animationDelay: `${idx * 0.18}s` }}
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-end gap-1 min-w-0">
                          <span className="text-[8px] sm:text-[9px] font-semibold text-[#9a9a9a]">{b.comp}</span>
                          <div
                            className="motion-bar w-full rounded-sm bg-[#e8e8e8] shadow-[0_0_0_1px_rgba(0,0,0,0.01)]"
                            style={{ height: `${16 + b.comp * 1.45}px`, minHeight: 16, animationDelay: `${idx * 0.22 + 0.1}s` }}
                          />
                        </div>
                      </div>
                      <div className="text-[8px] sm:text-[9px] text-[#c0c0c0] text-center">{b.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-1 xl:col-span-2 bg-white border border-[#e8e8e8] rounded-xl p-3 sm:p-4 min-w-0">
              <div className="text-[11px] sm:text-[12px] font-medium text-[#0a0a0a] mb-3 sm:mb-4">By AI Model</div>
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  { model: "ChatGPT", you: 45, gap: -7, color: "#10a37f" },
                  { model: "Gemini", you: 38, gap: -3, color: "#4285f4" },
                  { model: "Claude", you: 25, gap: -40, color: "#cc785c" },
                  { model: "Perplexity", you: 62, gap: 34, color: "#5046e5" },
                  { model: "Grok", you: 31, gap: 12, color: "#111827" },
                  { model: "DeepSeek", you: 29, gap: 9, color: "#0f766e" },
                  { model: "Copilot", you: 33, gap: 7, color: "#2563eb" },
                  { model: "AI Overviews", you: 41, gap: 15, color: "#7c3aed" },
                  { model: "Meta AI", you: 27, gap: 4, color: "#db2777" },
                ].map((m) => (
                  <div key={m.model}>
                    <div className="flex items-center justify-between mb-1 gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="w-1.5 h-1.5 rounded-full inline-block shrink-0" style={{ background: m.color }} />
                        <span className="text-[10px] sm:text-[11px] text-[#525252] truncate">{m.model}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] sm:text-[11px] font-medium text-[#0a0a0a]">{m.you}%</span>
                        <span className={`text-[9px] sm:text-[10px] font-medium ${m.gap > 0 ? "text-[#16a34a]" : "text-[#dc2626]"}`}>
                          {m.gap > 0 ? "+" : ""}{m.gap}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-1 bg-[#f0f0f0] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${m.you}%`, background: m.color, opacity: 0.7 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 sm:mt-4 bg-white border border-[#e8e8e8] rounded-xl overflow-hidden">
            <div className="flex items-center justify-between gap-3 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-[#e8e8e8]">
              <span className="text-[11px] sm:text-[12px] font-medium text-[#0a0a0a]">Top Missed Citation Opportunities</span>
              <span className="text-[10px] sm:text-[11px] text-[#1549f0] font-medium whitespace-nowrap">View all 342 →</span>
            </div>

            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="bg-[#fafafa]">
                    <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-[#9a9a9a] uppercase tracking-wide">Prompt</th>
                    <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-[#9a9a9a] uppercase tracking-wide">Model</th>
                    <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-[#9a9a9a] uppercase tracking-wide">Competitor Cited</th>
                    <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-[#9a9a9a] uppercase tracking-wide">Gap Reason</th>
                    <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-[#9a9a9a] uppercase tracking-wide">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {missedRows.map((row, i) => (
                    <tr key={i} className="border-t border-[#f0f0f0] hover:bg-[#fafafa]">
                      <td className="px-4 py-2.5 text-[11px] text-[#0a0a0a] font-mono">{row.prompt}</td>
                      <td className="px-4 py-2.5 text-[11px] text-[#525252]">{row.model}</td>
                      <td className="px-4 py-2.5 text-[11px] text-[#525252]">{row.comp}</td>
                      <td className="px-4 py-2.5">
                        <span className="px-2 py-0.5 bg-[#fef3c7] text-[#92400e] text-[10px] font-medium rounded">{row.reason}</span>
                      </td>
                      <td className="px-4 py-2.5">
                        <span className={`px-2 py-0.5 text-[10px] font-medium rounded ${row.impact === "High" ? "bg-[#fef2f2] text-[#991b1b]" : "bg-[#f0fdf4] text-[#166534]"}`}>
                          {row.impact}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sm:hidden divide-y divide-[#f0f0f0]">
              {missedRows.map((row, i) => (
                <div key={i} className="p-3 space-y-2">
                  <p className="text-[11px] font-mono text-[#0a0a0a] leading-snug break-words">{row.prompt}</p>
                  <div className="flex flex-wrap items-center gap-2 text-[10px] text-[#525252]">
                    <span>{row.model}</span>
                    <span className="text-[#d4d4d4]">·</span>
                    <span className="truncate">{row.comp}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-[#fef3c7] text-[#92400e] text-[10px] font-medium rounded">{row.reason}</span>
                    <span className={`px-2 py-0.5 text-[10px] font-medium rounded ${row.impact === "High" ? "bg-[#fef2f2] text-[#991b1b]" : "bg-[#f0fdf4] text-[#166534]"}`}>
                      {row.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
