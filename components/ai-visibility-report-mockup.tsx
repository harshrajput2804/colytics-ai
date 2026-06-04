import { Globe } from "lucide-react"

export function AIVisibilityReportMockup() {
  const moduleScores = [
    { label: "LLM Score", value: 78, color: "#4f46e5" },
    { label: "Entity Cov.", value: 85, color: "#10b981" },
    { label: "Comprehensiveness", value: 92, color: "#8b5cf6" },
    { label: "Consistency", value: 68, color: "#f59e0b" },
  ]

  const aeoBreakdown = [
    { category: "Crawl Access", score: 92, status: "Good" },
    { category: "Schema Signals", score: 45, status: "Poor" },
    { category: "Content Quality", score: 78, status: "Fair" },
    { category: "Tech Hygiene", score: 88, status: "Good" },
    { category: "Structure", score: 55, status: "Poor" },
  ]

  const opportunities = [
    { title: "Add Schema markup for FAQ", impact: "High", status: "Not started", statusColor: "#dc2626" },
    { title: "Improve entity density in intro", impact: "High", status: "In progress", statusColor: "#f59e0b" },
    { title: "Update meta descriptions", impact: "Medium", status: "Done", statusColor: "#10b981" },
    { title: "Add structured data for jobs", impact: "High", status: "Not started", statusColor: "#dc2626" },
  ]

  return (
    <div
      className="mockup-shell w-full rounded-2xl overflow-hidden shadow-[0_-4px_60px_rgba(0,0,0,0.08)]"
      style={{ border: "1px solid #e8e8e8" }}
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
        <span className="shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium bg-white border border-[#e8e8e8] text-[#0a0a0a] shadow-sm">
          AI Visibility Scorecards
        </span>
        <span className="shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium text-[#737373]">
          Citation Analysis
        </span>
      </div>

      <div className="flex flex-col md:flex-row bg-white min-h-0 md:min-h-[520px]">
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
              { label: "AI Visibility Scorecards", active: true },
              { label: "Citation Analysis", active: false },
              { label: "Share of Voice", active: false },
              { label: "Prompt Coverage", active: false },
              { label: "Execution Roadmap", active: false },
              { label: "Website Audit", active: false },
              { label: "Reports", active: false },
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v4H3zM3 9h12v2H3zM3 13h15v2H3zM3 17h10v2H3z" />
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
              <p className="ui-heading">AI Visibility Scorecard</p>
              <p className="text-[11px] sm:text-[12px] text-[#9a9a9a] mt-0.5">How well your page performs across all AI engine dimensions</p>
            </div>
            <button className="self-start px-3 py-1.5 bg-[#4f46e5] rounded-lg text-[11px] text-white font-medium hover:bg-[#4338ca] whitespace-nowrap">
              Add AI
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-3 sm:gap-4 mb-4 sm:mb-6 items-stretch">
            <div className="col-span-1 xl:col-span-3">
              <div className="bg-white border border-[#e8e8e8] rounded-xl p-4 flex flex-col items-center justify-center h-full">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-3">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e8e8e8" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="8"
                      strokeDasharray={`${45 * Math.PI * 2 * 0.57} ${45 * Math.PI * 2}`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[26px] sm:text-[30px] font-bold text-[#0a0a0a]">57</span>
                  </div>
                </div>
                <div className="text-[11px] text-[#9a9a9a] text-center">Overall Score</div>
                <div className="text-[10px] text-[#dc2626] mt-1">Fair</div>
              </div>
            </div>

            <div className="col-span-1 xl:col-span-6">
              <div className="bg-white border border-[#e8e8e8] rounded-xl p-4 h-full">
                <div className="text-[11px] sm:text-[12px] font-medium text-[#0a0a0a] mb-3">Module Score Overview</div>
                <div className="flex items-end gap-2 sm:gap-3 h-24 sm:h-28">
                  {moduleScores.map((m, idx) => (
                    <div key={m.label} className="flex-1 flex flex-col items-center min-w-0">
                      <div
                        className="motion-bar w-full rounded-sm mb-2 transition-all"
                        style={{
                          background: m.color,
                          height: `${(m.value / 100) * 88}px`,
                          minHeight: 8,
                          animationDelay: `${idx * 0.22}s`,
                        }}
                      />
                      <span className="text-[8px] sm:text-[9px] text-[#9a9a9a] text-center leading-tight">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-2 xl:col-span-3 grid grid-cols-3 sm:grid-cols-1 gap-2 sm:gap-3">
              {[
                { label: "CURRENT", value: "64.9", color: "#0a0a0a" },
                { label: "PREDICTED", value: "90.4", color: "#10b981" },
                { label: "POTENTIAL", value: "+25.5", color: "#3b82f6" },
              ].map((metric) => (
                <div key={metric.label} className="bg-white border border-[#e8e8e8] rounded-xl p-3 sm:p-4 min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-semibold text-[#9a9a9a] uppercase tracking-wide mb-1 sm:mb-2 truncate">{metric.label}</div>
                  <div className="text-[18px] sm:text-[24px] font-bold leading-none" style={{ color: metric.color }}>
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-3 sm:gap-4">
            <div className="col-span-1 xl:col-span-4 bg-white border border-[#e8e8e8] rounded-xl p-3 sm:p-4">
              <div className="text-[11px] sm:text-[12px] font-medium text-[#0a0a0a] mb-3">AEO Checker</div>
              <div className="space-y-2">
                {aeoBreakdown.map((a) => (
                  <div key={a.category} className="flex items-center justify-between gap-3">
                    <div className="text-[10px] sm:text-[11px] truncate">{a.category}</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold shrink-0">{a.score}%</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-1 xl:col-span-8 bg-white border border-[#e8e8e8] rounded-xl p-3 sm:p-4 min-w-0">
              <div className="text-[11px] sm:text-[12px] font-medium text-[#0a0a0a] mb-3">Top Opportunities</div>

              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full min-w-[420px] text-[11px]">
                  <thead>
                    <tr className="border-b border-[#e8e8e8]">
                      <th className="text-left py-2 px-2 text-[#9a9a9a] font-medium">Opportunity</th>
                      <th className="text-left py-2 px-2 text-[#9a9a9a] font-medium">Impact</th>
                      <th className="text-left py-2 px-2 text-[#9a9a9a] font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {opportunities.map((item, i) => (
                      <tr key={i} className="border-b border-[#f0f0f0] hover:bg-[#fafafa] transition-colors">
                        <td className="py-2 px-2 text-[#0a0a0a]">{item.title}</td>
                        <td className="py-2 px-2">
                          <span className={`font-semibold ${item.impact === "High" ? "text-[#dc2626]" : "text-[#f59e0b]"}`}>
                            {item.impact}
                          </span>
                        </td>
                        <td className="py-2 px-2">
                          <span
                            className="px-2 py-1 rounded text-[10px] font-medium"
                            style={{
                              background: item.statusColor + "15",
                              color: item.statusColor,
                            }}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="sm:hidden divide-y divide-[#f0f0f0]">
                {opportunities.map((item, i) => (
                  <div key={i} className="py-2.5 first:pt-0 last:pb-0 space-y-2">
                    <p className="text-[11px] text-[#0a0a0a] leading-snug">{item.title}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[10px] font-semibold ${item.impact === "High" ? "text-[#dc2626]" : "text-[#f59e0b]"}`}>
                        {item.impact} impact
                      </span>
                      <span
                        className="px-2 py-1 rounded text-[10px] font-medium"
                        style={{
                          background: item.statusColor + "15",
                          color: item.statusColor,
                        }}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
