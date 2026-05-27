export function WhoForSection() {
  const personas = [
    {
      title: "SEO Agencies",
      href: "/for-agencies",
      points: [
        "Standardize AI visibility audits across every client account",
        "Deliver differentiated strategy that goes beyond rankings",
        "Generate white-label citation intelligence reports",
      ],
      quote: "Our agency added AI citation analysis to every client retainer. Three clients expanded scope in the first month.",
      attribution: "Agency Lead — Early Access",
    },
    {
      title: "In-House SEO Teams",
      href: "/for-in-house-seo",
      points: [
        "Show leadership exactly where AI visibility gaps exist",
        "Prioritize backlog with citation-impact data, not guesswork",
        "Monitor competitive citation movement weekly",
      ],
      quote: "We finally had data to prove to our CMO that rankings alone were not enough.",
      attribution: "In-House SEO Manager — Early Access",
    },
    {
      title: "Solopreneurs & Consultants",
      href: "/for-solopreneurs",
      points: [
        "Replace six tools with one unified platform",
        "Focus on highest-impact fixes without analysis paralysis",
        "Get clarity on what to write next and how to structure it",
      ],
      quote: "As a solo consultant, I replaced six tools with one. The edge I needed.",
      attribution: "Independent SEO Consultant — Early Access",
    },
  ]

  return (
    <section className="py-28 px-6 bg-white border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-5">Who It's For</p>
          <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]">
            Built for teams that compete in AI search and AEO.
          </h2>
          <p className="mt-5 text-[15px] text-[#737373]">
            Currently optimized for websites with 100–5,000 pages. Enterprise-scale crawling on the roadmap.
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
      </div>
    </section>
  )
}
