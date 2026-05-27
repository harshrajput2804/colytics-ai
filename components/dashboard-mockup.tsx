import { Globe } from "lucide-react"

export function DashboardMockup() {
  // Bar chart data for citation share
  const bars = [
    { label: "Jan", you: 28, comp: 41 },
    { label: "Feb", you: 31, comp: 43 },
    { label: "Mar", you: 29, comp: 47 },
    { label: "Apr", you: 35, comp: 48 },
    { label: "May", you: 38, comp: 45 },
    { label: "Jun", you: 44, comp: 46 },
    { label: "Jul", you: 47, comp: 44 },
  ]
  const maxVal = 60

  return (
    <div
      className="w-full rounded-t-2xl overflow-hidden shadow-[0_-4px_60px_rgba(0,0,0,0.08)]"
      style={{ border: "1px solid #e8e8e8", borderBottom: "none" }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#fafafa] border-b border-[#e8e8e8]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 px-3 py-1 bg-white border border-[#e8e8e8] rounded-md text-[11px] text-[#9a9a9a] font-mono">
          <Globe className="w-3 h-3" />
            app.colytics.ai
          </div>
        </div>
        <div className="w-14" />
      </div>

      <div className="flex bg-white" style={{ minHeight: 480 }}>
        {/* Sidebar */}
        <div className="w-52 border-r border-[#e8e8e8] bg-[#fafafa] hidden md:flex flex-col p-4">
          {/* Logo mark */}
          <div className="flex items-center gap-2 mb-7 px-1">
            <img src="/logo/colytics-logo-notext.svg" alt="Colytics" className="w-6 h-6" />
            <span className="text-[13px] font-semibold text-[#0a0a0a]">Colytics</span>
          </div>

          {/* Project */}
          <div className="px-2 py-1.5 bg-white border border-[#e8e8e8] rounded-lg mb-5 flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#1549f0]/10 flex items-center justify-center">
              <span className="text-[#1549f0] text-[8px] font-bold">A</span>
            </div>
            <span className="text-[12px] text-[#0a0a0a] font-medium">acmecorp.com</span>
          </div>

          {/* Nav items */}
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

          {/* Bottom status */}
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

        {/* Main content */}
        <div className="flex-1 p-6 overflow-hidden">
          {/* Page header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-[15px] font-semibold text-[#0a0a0a]">Citation Analysis</h2>
              <p className="text-[12px] text-[#9a9a9a] mt-0.5">acmecorp.com — Last 90 days</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 bg-[#f5f5f5] border border-[#e8e8e8] rounded-lg text-[11px] text-[#525252] font-medium cursor-pointer">
                Last 90 days ↓
              </div>
              <div className="px-3 py-1.5 bg-[#1549f0] rounded-lg text-[11px] text-white font-medium cursor-pointer">
                Run audit
              </div>
            </div>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { label: "Total Citations", value: "1,248", delta: "+12%", positive: true },
              { label: "Missed Opportunities", value: "342", delta: "-8%", positive: false },
              { label: "AEO Readiness", value: "68/100", delta: "+5pts", positive: true },
              { label: "Share of Voice", value: "41%", delta: "+3%", positive: true },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-white border border-[#e8e8e8] rounded-xl p-4">
                <div className="text-[11px] text-[#9a9a9a] mb-1.5">{kpi.label}</div>
                <div className="text-[22px] font-semibold text-[#0a0a0a] leading-none mb-1.5 font-serif">{kpi.value}</div>
                <div className={`text-[11px] font-medium ${kpi.positive ? "text-[#16a34a]" : "text-[#dc2626]"}`}>
                  {kpi.delta} vs last period
                </div>
              </div>
            ))}
          </div>

          {/* Chart + Table row */}
          <div className="grid grid-cols-5 gap-4">
            {/* Bar chart */}
            <div className="col-span-3 bg-white border border-[#e8e8e8] rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[12px] font-medium text-[#0a0a0a]">Citation Share vs Top Competitor</div>
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
              {/* Chart */}
              <div className="flex items-end gap-2 h-28">
                {bars.map((b) => (
                  <div key={b.label} className="flex-1 flex items-end gap-0.5">
                    <div
                      className="flex-1 rounded-sm bg-[#0a0a0a]"
                      style={{ height: `${(b.you / maxVal) * 100}%`, minHeight: 4 }}
                    />
                    <div
                      className="flex-1 rounded-sm bg-[#e8e8e8]"
                      style={{ height: `${(b.comp / maxVal) * 100}%`, minHeight: 4 }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-around mt-1.5">
                {bars.map((b) => (
                  <span key={b.label} className="text-[9px] text-[#c0c0c0] flex-1 text-center">{b.label}</span>
                ))}
              </div>
            </div>

            {/* Model breakdown */}
            <div className="col-span-2 bg-white border border-[#e8e8e8] rounded-xl p-4">
              <div className="text-[12px] font-medium text-[#0a0a0a] mb-4">By AI Model</div>
              <div className="space-y-3">
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
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: m.color }} />
                        <span className="text-[11px] text-[#525252]">{m.model}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-medium text-[#0a0a0a]">{m.you}%</span>
                        <span className={`text-[10px] font-medium ${m.gap > 0 ? "text-[#16a34a]" : "text-[#dc2626]"}`}>
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

          {/* Missed citations table preview */}
          <div className="mt-4 bg-white border border-[#e8e8e8] rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#e8e8e8]">
              <span className="text-[12px] font-medium text-[#0a0a0a]">Top Missed Citation Opportunities</span>
              <span className="text-[11px] text-[#1549f0] font-medium cursor-pointer">View all 342 →</span>
            </div>
            <table className="w-full">
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
                {[
                  { prompt: "best enterprise seo tools 2025", model: "ChatGPT", comp: "Ahrefs, Semrush", reason: "Missing Schema", impact: "High" },
                  { prompt: "how to improve ai search visibility", model: "Gemini", comp: "Competitor A", reason: "Low entity density", impact: "High" },
                  { prompt: "aeo optimization software", model: "Perplexity", comp: "Competitor B", reason: "No FAQ structure", impact: "Med" },
                ].map((row, i) => (
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
        </div>
      </div>
    </div>
  )
}
