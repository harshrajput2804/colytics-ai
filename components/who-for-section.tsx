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
    <section className="py-20 px-6" style={{ backgroundColor: '#1B1D21' }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="section-label mb-5 text-[#CCD1D5]">Who It's For</p>
          <h2 className="font-serif text-[40px] md:text-[48px] leading-[1.05] tracking-[-0.01em]" style={{ color: '#FDFDFD' }}>
            Built for Teams That Compete in the AI Search Era.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div key={p.title} className="rounded-3xl p-6 md:p-7 flex flex-col bg-[#0E0E0F] border border-white/8">
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#FDFDFD] mb-4">{p.title}</h3>
              <ul className="space-y-3 flex-1 mb-6">
                {p.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-3 text-[14px] text-[#CCD1D5]">
                    <span className="mt-1 text-[#C9A227]">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[14px] italic text-[#CCD1D5] leading-relaxed mb-2">"{p.quote}"</p>
                <p className="text-[12px] text-[#8F9399] font-medium">{p.attribution}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#8F9399] max-w-4xl">Currently optimized for websites with 100–5,000 pages. Enterprise-scale crawling is on the roadmap.</p>
      </div>
    </section>
  )
}
