"use client"

import { useState } from "react"

const faqs = [
  { q: "What happens after I register?", a: "You receive immediate access to the early access dashboard. Add your domain, and your first citation analysis begins within minutes. No setup calls or waiting lists." },
  { q: "How do you measure AI citation visibility?", a: "Colytics tracks how AI models (ChatGPT, Gemini, Claude, Perplexity) respond to prompts relevant to your industry. We detect whether your brand, pages, or competitors are cited — then analyze the structural reasons behind each gap, including content structure, schema coverage, entity clarity, and fact density." },
  { q: "Is Colytics replacing SEMrush or Ahrefs?", a: "No. Colytics operates in a different layer — AI citation intelligence. You can use Colytics alongside your existing SEO stack. We diagnose why you are or are not being cited in AI answers, which is a question traditional SEO tools were never designed to answer." },
  { q: "How large a site can Colytics crawl?", a: "During early access, Colytics is optimized for sites with 100–5,000 pages. This covers the majority of SMB, mid-market, and agency client websites. Enterprise-scale crawling (10,000+ pages) is on the development roadmap." },
  { q: "How often are citation checks refreshed?", a: "Weekly for tracked prompts. On-demand audits are available at any time. You can also set up alerts for citation drops, new competitor appearances, or model behavior changes." },
  { q: "What if I already use LLMRefs or Peec?", a: "Those tools show you whether you were cited. Colytics tells you why you were not — and what to fix. Most teams find Colytics replaces the need for a separate monitor because it includes citation tracking plus the diagnostic and execution layer." },
  { q: "Is there a free plan?", a: "Yes. Our Starter plan is free and includes one project, basic website auditing, and limited crawl capacity. No credit card required to start." },
  { q: "What is your refund policy?", a: "We offer a 14-day refund window from the date of your first paid subscription. If Colytics does not meet your expectations within the first 14 days, contact support for a full refund. After 14 days, subscriptions are non-refundable but can be cancelled at any time." },
  { q: "Can I upgrade or downgrade my plan?", a: "Yes. Upgrades take effect immediately — the prorated difference is applied to your current billing cycle. Downgrades take effect at the start of your next billing cycle. No penalties or lock-in contracts." },
  { q: "Do you offer annual billing discounts?", a: "Yes. Annual plans are available at 20% off compared to monthly billing. Founding members on early access receive additional pricing benefits." },
  { q: "Which AI models does Colytics track?", a: "Colytics currently tracks citations across ChatGPT, Google Gemini, Anthropic Claude, and Perplexity. We continuously evaluate new models as they become significant sources of answer traffic." },
  { q: "Can I use Colytics for multiple client websites?", a: "Yes. Our Agency and Enterprise plans support multiple projects. Each gets its own crawl, citation analysis, and reporting. Agency plans include white-label reporting capabilities." },
  { q: "Is my data secure?", a: "All data is encrypted in transit and at rest. Colytics does not share your data with third parties. Your competitive citation data is visible only to your team. We are working toward SOC 2 compliance as part of our enterprise readiness roadmap." },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-28 px-6 bg-white border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[300px_1fr] gap-16">
        {/* Left */}
        <div className="md:sticky md:top-32 self-start">
          <p className="section-label mb-5">FAQ</p>
          <h2 className="font-serif text-[36px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a] mb-4">
            Frequently asked questions.
          </h2>
          <p className="text-[14px] text-[#737373] leading-relaxed">
            Can't find what you're looking for? Contact us at{" "}
            <a href="mailto:hello@colytics.ai" className="text-[#0a0a0a] underline underline-offset-2">
              hello@colytics.ai
            </a>
          </p>
        </div>

        {/* Right: accordion */}
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-[#e8e8e8]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-[14px] font-medium text-[#0a0a0a] pr-8 leading-snug">{faq.q}</span>
                <div className={`w-5 h-5 rounded-full border border-[#e8e8e8] flex items-center justify-center flex-shrink-0 transition-colors ${open === i ? "bg-[#0a0a0a] border-[#0a0a0a]" : "bg-transparent"}`}>
                  <svg
                    className={`w-2.5 h-2.5 transition-transform ${open === i ? "text-white rotate-45" : "text-[#737373]"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-200 ease-in-out ${open === i ? "max-h-64 pb-5" : "max-h-0"}`}>
                <p className="text-[14px] text-[#737373] leading-relaxed pr-8">{faq.a}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-[#e8e8e8]" />
        </div>
      </div>
    </section>
  )
}
