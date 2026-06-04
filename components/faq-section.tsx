const faqs = [
  { q: "What is Colytics?", a: "Colytics is an AI citation intelligence platform that monitors whether your content is cited by major AI engines (ChatGPT, Gemini, Claude, Perplexity, Grok, DeepSeek, Copilot, Google AI Overviews, and Meta AI) and diagnoses why citations are or aren't happening. It combines automated citation tracking with actionable insights to optimize your visibility in AI-generated answers." },
  { q: "What happens after I register?", a: "You receive immediate access to the dashboard. Add your domain, and your first citation analysis begins within minutes. No setup calls or waiting lists." },
  { q: "How do you measure AI citation visibility?", a: "Colytics tracks how nine AI engines (ChatGPT, Gemini, Claude, Perplexity, Grok, DeepSeek, Copilot, Google AI Overviews, and Meta AI) respond to prompts relevant to your industry. We detect whether your brand, pages, or competitors are cited — then analyze the structural reasons behind each gap, including content structure, schema coverage, entity clarity, and fact density." },
  { q: "What is the Ask AI feature?", a: "Ask AI lets you query your citation data using natural language. Powered by Claude and our proprietary analysis engine, it answers questions like 'which content gaps caused my citation drop?' or 'what schema changes would improve visibility?' without manual report review." },
  { q: "Does Colytics replace traditional SEO tools?", a: "No. Colytics operates in a different layer — AI citation intelligence. You can use Colytics alongside your existing SEO stack. We diagnose why you are or are not being cited in AI answers, which is a question traditional SEO tools were never designed to answer." },
  { q: "What site sizes does Colytics support?", a: "Colytics works with any site size — from small businesses to enterprise properties with 10,000+ pages. There is no upper limit on crawl capacity. We optimize based on your site structure and citation needs." },
  { q: "How often are citation checks refreshed?", a: "Weekly for tracked prompts. On-demand audits are available at any time. You can also set up alerts for citation drops, new competitor appearances, or model behavior changes." },
  { q: "Is there a free plan?", a: "Yes. Our Starter plan is free and includes one project, basic website auditing, and limited crawl capacity. No credit card required. We also offer Pro plan for free during your first 60 days to let you experience all features risk-free." },
  { q: "What plans are available?", a: "We offer two core plans: Starter (free forever) for individuals and small teams, and Pro for agencies and growing businesses. Pro includes multiple projects, advanced citation tracking, Ask AI feature, and white-label reporting. Annual plans are available at 20% off monthly pricing." },
  { q: "Who is behind Colytics?", a: "Colytics is built by Attrock, a 12-year-old digital marketing agency specializing in SEO, content strategy, and marketing analytics. We created Colytics to solve the AI citation visibility problem we saw across our client base." },
  { q: "What is your refund policy?", a: "We offer a 14-day refund window from the date of your first paid subscription. If Colytics does not meet your expectations within the first 14 days, contact support for a full refund. After 14 days, subscriptions are non-refundable but can be cancelled at any time." },
  { q: "Can I upgrade or downgrade my plan?", a: "Yes. Upgrades take effect immediately — the prorated difference is applied to your current billing cycle. Downgrades take effect at the start of your next billing cycle. No penalties or lock-in contracts." },
  { q: "Do you offer annual billing discounts?", a: "Yes. Annual plans are available at 20% off compared to monthly billing. Founding members on early access receive additional pricing benefits." },
  { q: "Can I use Colytics for multiple client websites?", a: "Yes. Our Pro plan supports multiple projects. Each gets its own crawl, citation analysis, and reporting. White-label reporting capabilities are available for agencies." },
  { q: "Is my data secure?", a: "All data is encrypted in transit and at rest. Colytics does not share your data with third parties. Your competitive citation data is visible only to your team. We are working toward SOC 2 compliance as part of our enterprise readiness roadmap." },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
}

export function FaqSection() {
  return (
    <section id="faq" className="enhanced-surface section-spacing bg-transparent border-t border-[#e8e8e8]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 sm:gap-16">
        <div className="md:sticky md:top-32 self-start">
          <p className="section-label mb-5">FAQ</p>
          <h2 className="heading-2-compact mb-4">
            Frequently asked questions.
          </h2>
          <p className="text-body text-sm">
            Can't find what you're looking for? Contact us at{" "}
            <a href="mailto:hello@colytics.ai" className="text-[#0a0a0a] underline underline-offset-2">
              hello@colytics.ai
            </a>
          </p>
        </div>

        <div>
          {/* {faqs.map((faq) => (
            <details key={faq.q} className="group border-t border-[#e8e8e8] py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left">
                <h3 className="heading-5 pr-8 leading-snug">{faq.q}</h3>
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#e8e8e8] transition-colors group-open:bg-[#0a0a0a] group-open:border-[#0a0a0a]">
                  <svg
                    className="h-2.5 w-2.5 text-[#737373] transition-transform group-open:rotate-45 group-open:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </summary>
              <div className="pt-4">
                <p className="text-body pr-8 text-sm">{faq.a}</p>
              </div>
            </details>
          ))} */}


          {faqs.map((faq, index) => (
            <div key={faq.q} className="border-t border-[#e8e8e8] py-8">
              <div className="flex gap-4">
                <span className="heading-3 font-medium tracking-wider text-[#737373] shrink-0">
                  Q{index + 1}.
                </span>

                <div>
                  <h3 className="heading-3 mb-3">
                    {faq.q}
                  </h3>

                  <p className="text-body">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-[#e8e8e8]" />
        </div>
      </div>
    </section>
  )
}
