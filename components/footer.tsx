import Link from "next/link"

export function Footer() {
  const columns = [
    {
      title: "Product",
      links: [
        { label: "Platform Overview", href: "/" },
        { label: "AI Search Visibility", href: "/product/ai-search-visibility" },
        { label: "AEO Readiness Score", href: "/product/aeo-readiness" },
        { label: "Website Intelligence", href: "/product/website-intelligence" },
        { label: "Reporting & Automation", href: "/product/reporting" },
        { label: "Integrations", href: "/integrations" },
        { label: "API Access", href: "/api" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "AI Search Visibility", href: "/ai-search-visibility" },
        { label: "AEO Software", href: "/aeo-tool" },
        { label: "Website Audit Tool", href: "/website-audit-tool" },
        { label: "Technical SEO Audit", href: "/technical-seo-audit" },
        { label: "Content Audit Software", href: "/content-audit" },
        { label: "Competitor Analysis", href: "/competitors" },
      ],
    },
    {
      title: "Use Cases",
      links: [
        { label: "SEO Agencies", href: "/for-agencies" },
        { label: "In-house SEO Teams", href: "/for-in-house-seo" },
        { label: "Solopreneurs", href: "/for-solopreneurs" },
        { label: "SaaS Teams", href: "/for-saas" },
        { label: "eCommerce Teams", href: "/for-ecommerce" },
        { label: "Publishers", href: "/for-publishers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "AI SEO Framework", href: "/framework/llm-seo" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Sample Reports", href: "/sample-report" },
        { label: "ROI Calculator", href: "/calculator" },
        { label: "Comparison Pages", href: "/comparisons" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Roadmap", href: "/roadmap" },
        { label: "Contact", href: "/contact" },
        { label: "Press", href: "/press" },
        { label: "Affiliate Program", href: "/affiliates" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Data Processing Agreement", href: "/dpa" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Security", href: "/security" },
        { label: "Compliance", href: "/compliance" },
      ],
    },
  ]

  return (
    <footer className="bg-white border-t border-[#e8e8e8] pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo + tagline */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-14">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <img src="/logo/colytics-logo-notext.svg" alt="Colytics" className="w-6 h-6" />
              <span className="font-semibold text-[14px] text-[#0a0a0a]">Colytics AI</span>
            </Link>
            <p className="text-[13px] text-[#9a9a9a] leading-relaxed">
              The AI citation intelligence platform for SEO teams competing in the age of AI search.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <Link href="/signup" className="inline-flex items-center h-9 px-5 rounded-full bg-[#0a0a0a] text-white text-[13px] font-medium hover:bg-[#1a1a1a] transition-colors">
              Get Early Access
            </Link>
            <Link href="/pricing" className="inline-flex items-center h-9 px-5 rounded-full border border-[#e8e8e8] text-[#525252] text-[13px] font-medium hover:bg-[#f5f5f5] transition-colors">
              View Pricing
            </Link>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-14">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#9a9a9a] mb-4">{col.title}</h3>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[12px] text-[#737373] hover:text-[#0a0a0a] transition-colors leading-snug"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 py-5 border-t border-[#e8e8e8]">
          <p className="text-[12px] text-[#9a9a9a]">© 2026 Colytics AI, Inc. All rights reserved.</p>
          <div className="flex gap-5 text-[12px] text-[#9a9a9a]">
            <Link href="/privacy" className="hover:text-[#0a0a0a] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#0a0a0a] transition-colors">Terms</Link>
            <Link href="/security" className="hover:text-[#0a0a0a] transition-colors">Security</Link>
          </div>
        </div>

        {/* Wordmark */}
        <div className="overflow-hidden py-4">
          <p
            className="text-center font-serif leading-none text-[#f0f0f0] select-none"
            style={{ fontSize: "clamp(60px, 14vw, 180px)" }}
          >
            Colytics AI
          </p>
        </div>
      </div>
    </footer>
  )
}
