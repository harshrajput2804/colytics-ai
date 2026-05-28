import { ArrowRight } from "lucide-react"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function WhoForSection() {
  const personas = [
    {
      title: "SEO & Growth Agencies",
      href: "/for-agencies",
      points: [
        "Clients ask why they’re invisible in AI, and your current tools can’t answer — so you standardize AI audits fast.",
        "Defend and differentiate retainer value with white-label reports and clear citation-gap analysis.",
        "Expand content opportunities without adding headcount.",
      ],
      quote: "We finally had a clean way to show where clients were missing in AI search — and why the retainer deserved to stay.",
      attribution: "Agency Lead — Early Access",
    },
    {
      title: "Brand & Marketing Teams",
      href: "/for-in-house-seo",
      points: [
        "The CMO keeps asking where you show up in ChatGPT, and rankings alone don’t answer it.",
        "Prove revenue impact with GA4 attribution, citation-gap analysis, and benchmarks.",
        "Build a backlog ranked by citation impact — enterprises don’t need a special plan.",
      ],
      quote: "For the first time, we had a way to explain AI visibility in a language leadership actually cared about.",
      attribution: "Head of Digital — Early Access",
    },
    {
      title: "Consultants & Solopreneurs",
      href: "/for-solopreneurs",
      points: [
        "Six disconnected tools leave you drowning in what to fix first.",
        "Use one platform with a ranked roadmap so you know what matters next.",
        "Ship client-ready content without needing a writer.",
      ],
      quote: "It replaced the tool sprawl and gave me a much clearer next step for every client.",
      attribution: "Independent SEO Consultant — Early Access",
    },
  ]

  return (
    <section className="py-28 px-6 bg-white border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-5">Who It's For</p>
          <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]">
            From solo consultants to enterprise brands.
          </h2>
          <p className="mt-5 text-[15px] text-[#737373]">
            Any size, 10,000+ pages, no cap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {personas.map((p) => (
            <div key={p.title} className="border border-[#e8e8e8] rounded-2xl p-7 flex flex-col bg-white">
              <h3 className="text-[15px] font-semibold text-[#0a0a0a] mb-5">{p.title}</h3>
              <ul className="space-y-3 flex-1 mb-7">
                {p.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[13px] text-[#525252]">
                    <span className="w-1 h-1 rounded-full bg-[#9a9a9a] shrink-0 mt-2" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-[#f0f0f0]">
                <p className="text-[13px] italic text-[#525252] leading-relaxed mb-3">"{p.quote}"</p>
                <p className="text-[11px] text-[#9a9a9a] font-medium">{p.attribution}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[15px] text-[#737373] leading-relaxed flex-1">
               Whatever your seat, there’s a fit.
            </p>
            <EarlyAccessTrigger
              label="Find my fit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg font-medium text-[14px] hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
