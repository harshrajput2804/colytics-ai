"use client"
import { useState } from "react"

export function RoiMockup() {
  const [websites, setWebsites] = useState<number>(1)
  const [hourlyRate, setHourlyRate] = useState<number>(75)
  const [currentToolSpend, setCurrentToolSpend] = useState<number>(375)
  const [compareAgainst, setCompareAgainst] = useState<string>("Multiple tools")
  const [plan, setPlan] = useState<string>("Pro - $49/mo")

  const planCost = plan === "Pro - $49/mo" ? 49 : 0
  const manualMonthlyHoursPerSite = 68
  const multipleToolsMonthlyHoursPerSite = 28.5
  const colyticsMonthlyHoursPerSite = 5.25
  const hoursSavedPerSite = compareAgainst === "Doing it fully by hand"
    ? manualMonthlyHoursPerSite - colyticsMonthlyHoursPerSite
    : multipleToolsMonthlyHoursPerSite - colyticsMonthlyHoursPerSite

  const totalMonthlyHoursSaved = websites * hoursSavedPerSite
  const valueOfTimeSaved = totalMonthlyHoursSaved * hourlyRate
  const toolSavings = Math.max(currentToolSpend - planCost, 0)
  const monthlySavings = valueOfTimeSaved + toolSavings
  const annualSavings = monthlySavings * 12

  const rows = [
    ["A · Website & Content Analyzer", 8.0, 3.0, 0.5],
    ["B · Structured Data & AI Files", 6.0, 2.5, 0.5],
    ["C · AI SEO / AEO Visibility", 7.0, 3.0, 0.75],
    ["D · Keyword → Prompt Intelligence", 6.0, 2.5, 0.5],
    ["E · Prompt Tracking & Multi-Model", 10.0, 4.0, 0.5],
    ["F · Competitor AI Intelligence", 6.0, 3.0, 0.5],
    ["G · Reports & Alerts", 5.0, 2.5, 0.25],
    ["H · Impact Analytics", 4.0, 2.0, 0.25],
    ["I · Content Generation & Detection", 16.0, 6.0, 1.5],
  ] as const

  return (
    <div className="px-6">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white shadow-[0_-4px_60px_rgba(0,0,0,0.08)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden opacity-80">
          <div className="motion-sweep h-px w-1/3 bg-linear-to-r from-transparent via-[#1549f0] to-transparent" />
        </div>
        <div className="flex items-center gap-2 border-b border-[#e8e8e8] bg-[#fafafa] px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 rounded-md border border-[#e8e8e8] bg-white px-3 py-1 text-[11px] font-mono text-[#9a9a9a]">
              <span className="inline-block h-2 w-2 rounded-full border border-[#cfcfcf]" />
              app.colytics.ai/roi-calculator
            </div>
          </div>
          <div className="w-14" />
        </div>

        <div className="grid gap-0 lg:grid-cols-[320px_1fr] min-w-0">
          <div className="space-y-5 border-b border-[#e8e8e8] bg-[#fafafa] px-5 py-5 lg:border-b-0 lg:border-r min-w-0">
            <label className="block">
              <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-gray-600">
                <span>Websites / Clients</span>
                <span>{websites}</span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                value={websites}
                onChange={(event) => setWebsites(Number(event.target.value))}
                className="w-full accent-gray-700"
              />
            </label>

            <label className="block">
              <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-gray-600">
                <span>Blended Hourly Rate</span>
                <span>${hourlyRate}</span>
              </div>
              <input
                type="range"
                min={25}
                max={250}
                step={5}
                value={hourlyRate}
                onChange={(event) => setHourlyRate(Number(event.target.value))}
                className="w-full accent-gray-700"
              />
            </label>

            <label className="block">
              <div className="mb-2 text-[11px] uppercase tracking-[0.25em] text-gray-600">Current Monthly Tool Spend</div>
              <input
                type="number"
                min={0}
                value={currentToolSpend}
                onChange={(event) => setCurrentToolSpend(Number(event.target.value) || 0)}
                className="w-full border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500"
              />
            </label>

            <label className="block">
              <div className="mb-2 text-[11px] uppercase tracking-[0.25em] text-gray-600">Compare Against</div>
              <select
                value={compareAgainst}
                onChange={(event) => setCompareAgainst(event.target.value)}
                className="w-full border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500"
              >
                <option>Doing it fully by hand</option>
                <option>Multiple tools</option>
              </select>
            </label>

            <label className="block">
              <div className="mb-2 text-[11px] uppercase tracking-[0.25em] text-gray-600">Your Colytics Plan</div>
              <select
                value={plan}
                onChange={(event) => setPlan(event.target.value)}
                className="w-full border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500"
              >
                <option>Free - $0/mo</option>
                <option>Pro - $49/mo</option>
              </select>
            </label>
          </div>

          <div className="px-5 py-5 lg:pb-4 min-w-0">
            <div className="space-y-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-gray-500">
                  {websites === 1 ? "1 site" : `${websites} sites`}
              </div>
                <div className="mt-1 text-4xl font-semibold tracking-tight md:text-5xl">{totalMonthlyHoursSaved.toFixed(0)} HRS</div>
                <p className="mt-1 text-sm text-gray-600">saved every month with Colytics AI vs. your {compareAgainst.toLowerCase()}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="border border-gray-200 bg-gray-50 p-4">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Time Value / Month</div>
                  <div className="mt-2 text-2xl font-semibold">${valueOfTimeSaved.toLocaleString()}</div>
                </div>
                <div className="border border-gray-200 bg-gray-50 p-4">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Tool Savings / Month</div>
                  <div className="mt-2 text-2xl font-semibold">${toolSavings.toLocaleString()}</div>
                </div>
              </div>

              <div className="border border-gray-300 bg-white px-4 py-4">
                <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Total Saved Per Year</div>
                <div className="mt-2 text-3xl font-semibold">${annualSavings.toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div className="px-5 pb-5 pt-0 lg:col-span-2 lg:pt-0 min-w-0">
            {/* Mobile swipe indicator */}
            <div className="flex items-center justify-between gap-2 mb-3 lg:hidden text-[10px] text-gray-400 font-medium tracking-wider uppercase select-none">
              <span>Lifecycle Modules</span>
              <span className="flex items-center gap-1 font-sans text-[11px] normal-case text-gray-500">
                Swipe to scroll <span className="animate-pulse">→</span>
              </span>
            </div>

            <div className="relative mockup-scroll-hint">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] border text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 text-left text-[10px] uppercase tracking-[0.25em] text-gray-600">
                      <th className="pb-3 font-medium w-[30%] min-w-[200px]">Module & Lifecycle Work</th>
                      <th className="pb-3 font-medium w-[10%] min-w-[70px]">Manual</th>
                      <th className="pb-3 font-medium w-[14%] min-w-[100px]">Multiple Tools</th>
                      <th className="pb-3 font-medium w-[12%] min-w-[90px]">Colytics AI</th>
                      <th className="pb-3 font-medium text-right w-[17%] min-w-[120px]">Save vs Manual</th>
                      <th className="pb-3 font-medium text-right w-[17%] min-w-[120px]">Save vs Tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => {
                      const saveManual = row[1] - row[3]
                      const saveTools = row[2] - row[3]
                      return (
                        <tr key={row[0]} className="border-b border-gray-200 align-top">
                          <td className="py-2.5 pr-4 text-gray-800 font-medium">{row[0]}</td>
                          <td className="py-2.5 text-gray-700">{row[1].toFixed(1)}</td>
                          <td className="py-2.5 text-gray-700">{row[2].toFixed(1)}</td>
                          <td className="py-2.5 text-gray-700">{row[3].toFixed(2)}</td>
                          <td className="py-2.5 text-right font-semibold text-gray-700">{saveManual.toFixed(saveManual >= 10 ? 1 : 2)} h</td>
                          <td className="py-2.5 text-right font-semibold text-gray-700">{saveTools.toFixed(saveTools >= 10 ? 1 : 2)} h</td>
                        </tr>
                      )
                    })}
                    <tr className="border-b border-gray-300 bg-gray-50/50 font-semibold">
                      <td className="py-3 pr-4 text-gray-800">Total per site / month</td>
                      <td className="py-3 text-gray-700">68.0</td>
                      <td className="py-3 text-gray-700">28.5</td>
                      <td className="py-3 text-gray-700">5.25</td>
                      <td className="py-3 text-right text-gray-700">62.75 hrs</td>
                      <td className="py-3 text-right text-gray-700">23.25 hrs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-600">
              Colytics runs the lifecycle in ~{colyticsMonthlyHoursPerSite.toFixed(2)} hrs/site/mo vs ~{(compareAgainst === "Doing it fully by hand" ? manualMonthlyHoursPerSite : multipleToolsMonthlyHoursPerSite).toFixed(1)} with separate tools.
            </p>

            <p className="mt-4 text-[11px] leading-relaxed text-gray-500">
              Illustrative benchmarks for a monthly AEO cycle, based on agency experience — starting points you can tune. "Multiple tools" assumes a typical stack (rank tracker + AI monitor + schema tool + AI writer + detector). Defaults: $375/mo example stack, $75/hr blended rate.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default RoiMockup
