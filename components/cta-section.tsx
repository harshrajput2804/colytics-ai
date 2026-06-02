"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ComplianceSnippet } from "@/components/compliance-snippet"

export function CtaSection() {
  const [email, setEmail] = useState("")
  const [url, setUrl] = useState("")
  const [question, setQuestion] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email && url) setSubmitted(true)
  }

  return (
    <section id="cta" className="enhanced-surface py-28 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left: messaging */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1549f0]" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/40">Early Access Open</span>
          </div>
          <h2 className="font-serif text-[48px] md:text-[64px] leading-none tracking-[-0.02em] text-white mb-6">
            Your competitors are already being cited.
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-10">
            <p className="text-[16px] text-white/50 font-semibold mb-2">✓ Full Pro free for 60 days</p>
            <p className="text-[14px] text-white/70 leading-relaxed">Then $49/mo, or stay on Free Forever with essential features. No credit card required.</p>
          </div>

          <div className="space-y-3">
            {[
              "Discover AI citations your competitors already have",
              "See exactly which LLMs are citing your site",
              "Optimize for AEO and claim your AI visibility",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1549f0]/20 flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 text-[#1549f0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-[13px] text-white/70">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-white/10">
            <p className="text-[11px] text-white/30 uppercase tracking-widest font-medium mb-4">Enterprise Ready</p>
            <div className="flex flex-wrap gap-5 text-[12px] text-white/40">
              <span>No credit card needed</span>
              <span>Bank-level encryption</span>
              <span>GDPR & CCPA compliant</span>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div>
          {!submitted ? (
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-[18px] font-semibold text-[#0a0a0a] mb-1">Get 60 days free</h3>
              <p className="text-[13px] text-[#737373] mb-7">Start today. Cancel anytime. No credit card required.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#525252] mb-2">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 text-[14px] border border-[#e8e8e8] rounded-xl bg-[#fafafa] focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/10 focus:border-[#0a0a0a] transition-colors placeholder:text-[#c0c0c0]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#525252] mb-2">
                    Website URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-4 py-3 text-[14px] border border-[#e8e8e8] rounded-xl bg-[#fafafa] focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/10 focus:border-[#0a0a0a] transition-colors placeholder:text-[#c0c0c0]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#525252] mb-2">
                    Your biggest AI visibility question{" "}
                    <span className="text-[#9a9a9a] font-normal">(optional)</span>
                  </label>
                  <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="e.g. Why is my competitor getting cited in ChatGPT and I'm not?"
                    rows={3}
                    className="w-full px-4 py-3 text-[14px] border border-[#e8e8e8] rounded-xl bg-[#fafafa] focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/10 focus:border-[#0a0a0a] transition-colors resize-none placeholder:text-[#c0c0c0]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] text-[14px] font-semibold border-0 mt-2"
                >
                  Claim Your Spot →
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mx-auto mb-5">
                <svg className="w-5 h-5 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-serif text-[28px] text-[#0a0a0a] mb-2">You're in.</h3>
              <p className="text-[14px] text-[#737373] leading-relaxed">
                Check your inbox — your early access details will arrive shortly. We'll be in touch with your onboarding link within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
