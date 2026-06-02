import Link from "next/link"
import EarlyAccessTrigger from "@/components/early-access-trigger"
import { CcpaOptOutButton } from "@/components/footer-ccpa-handler"

export function Footer() {
  const columns = [
    {
      title: "Product",
      links: [
        { label: "Platform Overview", href: "/#what-colytics-is" },
        { label: "AI Search Visibility", href: "/#ai-search-visibility" },
        { label: "ASK AI", href: "/#ask-ai" },
        { label: "Connect to Claude", href: "/#connect-claude" },
        { label: "Proprietary scoring ", href: "/#proprietary-scoring" },
        { label: "AI Citation Visibility", href: "/#ai-citation-visibility" },
        { label: "Prompt Visibility Tracking", href: "/#prompt-visibility" },
        { label: "SEO Visibility & Search Optimization", href: "/#the-solution" },
        { label: "Reporting & Automation", href: "/#the-solution" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "AI Search Visibility", href: "/#ai-search-visibility" },
        { label: "AI Search Visibility Platform", href: "/#ai-citation-visibility" },
        { label: "AEO Software", href: "/#aeo-readiness" },
        { label: "Website Audit Tool", href: "/#the-solution" },
        { label: "Technical SEO Audit", href: "/#the-solution" },
        { label: "Technical SEO Audit Software", href: "/#the-solution" },
        { label: "Content Intelligence Platform", href: "/#the-solution" },
        { label: "Content Audit Software", href: "/#the-solution" },
        { label: "SEO Automation Platform", href: "/#the-solution" },
        { label: "AI Citation Monitoring", href: "/#ai-citation-visibility" },
        { label: "Prompt Tracking Software", href: "/#prompt-visibility" },
        { label: "Competitor Analysis", href: "/#comparison" },
      ],
    },
    {
      title: "Use Cases",
      links: [
        { label: "SEO Agencies", href: "/#who-for" },
        { label: "In-house SEO Teams", href: "/#who-for" },
        { label: "Solopreneurs", href: "/#who-for" },
        { label: "SaaS Teams", href: "/#who-for" },
        { label: "eCommerce Teams", href: "/#who-for" },
        { label: "Publishers", href: "/#who-for" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "AI SEO Framework", href: "/blog/aeo-vs-seo" },
        { label: "AI SEO Guide", href: "/blog/aeo-vs-seo" },
        { label: "What is AEO?", href: "/#aeo-readiness" },
        { label: "What is AI Search Visibility?", href: "/#ai-search-visibility" },
        { label: "LLM SEO Framework", href: "/#the-solution" },
        { label: "Case Studies", href: "/#comparison" },
        { label: "Sample Reports", href: "/#ai-search-visibility" },
        { label: "ROI Calculator", href: "/#roi-calculator" },
        { label: "AI SEO Checklist", href: "/#the-solution" },
        { label: "Schema Templates", href: "/#structured-data" },
        { label: "AI Prompt Library", href: "/#prompt-visibility" },
        { label: "Content Audit Template", href: "/#the-solution" },
        { label: "AIVS Score Checker", href: "/#ai-search-visibility" },
        { label: "Comparison Pages", href: "/#comparison" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/#the-solution" },
        { label: "Careers", href: "/#who-for" },
        { label: "Roadmap", href: "/#modules" },
        { label: "Contact", href: "/#faq" },
        { label: "Email hello@colytics.ai", href: "mailto:hello@colytics.ai" },
        { label: "Press", href: "/#comparison" },
        { label: "Affiliate Program", href: "/#pricing" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "ccpa", href: null, isButton: true },
      ],
    },
  ]

  return (
    <>
      <footer className="bg-white/60 border-t border-[#e8e8e8] pt-16 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Logo + tagline */}
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-14">
            <div className="max-w-xs">
              <Link href="/" className="flex items-center gap-2 mb-3">
                <img src="/logo/colytics-logo-notext.svg" alt="Colytics" className="w-6 h-6" />
                <span className="font-semibold text-[14px] text-[#0a0a0a]">Colytics AI</span>
              </Link>
              <p className="text-[13px] text-[#9a9a9a] leading-relaxed">
                The AI Visibility & AEO Intelligence Platform for teams competing in AI search.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-start">
              <EarlyAccessTrigger label="Get early access →" />
              <Link href="/#pricing" className="inline-flex items-center justify-center h-9 px-5 rounded-full border border-[#e8e8e8] text-[#525252] text-[13px] font-medium hover:bg-[#f5f5f5] transition-colors">
                View Pricing
              </Link>
            </div>

          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 mb-14">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#9a9a9a] mb-4">{col.title}</h3>
                <div className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    link.isButton ? (
                      <CcpaOptOutButton key="ccpa" />
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href as string}
                        className="text-[12px] text-[#737373] hover:text-[#0a0a0a] transition-colors leading-snug"
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 py-5 border-t border-[#e8e8e8]">
            <p className="text-[12px] text-[#9a9a9a]">© 2026 Colytics AI, Inc. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-5 text-[12px] text-[#9a9a9a]">
              <Link href="/privacy-policy" className="hover:text-[#0a0a0a] transition-colors">Privacy</Link>
              <Link href="/terms-of-service" className="hover:text-[#0a0a0a] transition-colors">Terms</Link>
              <Link href="/#faq" className="hover:text-[#0a0a0a] transition-colors">Security</Link>
            </div>
          </div>
          {/* Wordmark */}
          <div className="overflow-hidden py-4">
            <p
              className="text-center font-serif leading-none text-black/30 select-none"
              style={{ fontSize: "clamp(60px, 14vw, 180px)" }}
            >
              Colytics AI
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
