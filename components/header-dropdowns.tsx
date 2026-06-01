"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

function useDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handle)
    return () => document.removeEventListener("mousedown", handle)
  }, [])
  return { open, setOpen, ref }
}

export function ProductMegaMenu() {
  const { open, setOpen, ref } = useDropdown()
  const productStructuredItems = [
    { label: "What is Colytics AI?", sub: "Learn how Colytics unifies AI visibility + website intelligence.", href: "/#what-colytics-is" },
    { label: "AI Search Visibility", sub: "Track brand citations across 9 AI engines.", href: "/#ai-search-visibility" },
    { label: "Proprietary scoring", sub: "Crawl, audit, and prioritize technical SEO + content fixes.", href: "/#proprietary-scoring" },
    { label: "AI Citation Visibility", sub: "Visibility into how AI systems cite your site.", href: "/#ai-citation-visibility" },
    { label: "ASK AI", sub: "Measure readiness for Answer Engine Optimization.", href: "/#ask-ai" },
    { label: "Connect to Claude", sub: "Detect and surface schema opportunities for AI citations.", href: "/#connect-claude" },
    { label: "Competitor Intelligence", sub: "Compare AI visibility and citations across competitors.", href: "/#comparison" },
    { label: "Prompt Visibility Tracking", sub: "Track prompts and AI answer visibility over time.", href: "/#prompt-visibility" },
    { label: "SEO Visibility & Search Optimization", sub: "Traditional and AI-focused visibility metrics.", href: "/#the-solution" },
  ]

  const firstColumn = productStructuredItems.slice(0, 3)
  const coreFeatures = productStructuredItems.slice(3)

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        Product <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-140 bg-white rounded-xl border shadow-xl p-6 z-50 grid grid-cols-2 gap-8 transition-all duration-300 ease-out before:absolute before:-top-3 before:left-0 before:w-full before:h-3 ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 pointer-events-none"}`}>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">Product</p>
          <div className="space-y-3">
            {firstColumn.map((item) => (
              <Link key={item.label} href={item.href} className="block group" onClick={() => setOpen(false)} data-info={item.sub} aria-label={`${item.label} — ${item.sub}`}>
                <div className="text-sm font-medium group-hover:text-foreground text-foreground/80 transition-colors">{item.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">Core Features</p>
          <div className="space-y-2">
            {coreFeatures.map((item) => (
              <Link key={item.label} href={item.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5" onClick={() => setOpen(false)} data-info={item.sub ?? item.label} aria-label={item.label}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function SolutionsDropdown() {
  const { open, setOpen, ref } = useDropdown()
  const items = [
    { label: "AI Search Visibility Platform", sub: "Monitor brand mentions across 9 AI engines", href: "/#ai-citation-visibility" },
    { label: "AEO Software", sub: "Optimize content for Answer Engine Optimization", href: "/#aeo-readiness" },
    { label: "Website Audit Tool", sub: "Identify technical SEO issues at scale", href: "/#the-solution" },
    { label: "Technical SEO Audit Software", sub: "Deep crawl analysis and prioritized fixes", href: "/#the-solution" },
    { label: "Content Intelligence Platform", sub: "Data-driven insights for content strategy", href: "/#the-solution" },
    { label: "SEO Automation Platform", sub: "Automate reporting and monitoring tasks", href: "/#the-solution" },
    { label: "AI Citation Monitoring", sub: "Track and protect your brand citations", href: "/#ai-citation-visibility" },
    { label: "Prompt Tracking Software", sub: "Analyze user prompts related to your niche", href: "/#prompt-visibility" },
  ]
  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
        Solutions <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-xl border shadow-xl p-3 z-50 transition-all duration-300 ease-out before:absolute before:-top-3 before:left-0 before:w-full before:h-3 ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 pointer-events-none"}`}>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-2 mb-3">Solutions</p>
        {items.map((item) => (
          <Link key={item.label} href={item.href} className="block px-2 py-2.5 rounded-lg hover:bg-muted/50 transition-colors" onClick={() => setOpen(false)}>
            <div className="text-sm font-medium text-foreground/80" data-info={item.sub} aria-label={item.label}>{item.label}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function UseCasesDropdown() {
  const { open, setOpen, ref } = useDropdown()
  const items = [
    { label: "For Agencies", sub: "SEO & growth agencies managing multiple clients", href: "/#who-for" },
    { label: "For In-house SEO Teams", sub: "Corporate SEO departments", href: "/#who-for" },
    { label: "For Solopreneurs", sub: "Freelancers & consultants", href: "/#who-for" },
    { label: "For SaaS Companies", sub: "SaaS teams optimizing for AI discovery", href: "/#who-for" },
    { label: "For eCommerce Teams", sub: "eCommerce product optimization for AI answers", href: "/#who-for" },
    { label: "For Publishers", sub: "Publishers optimizing content for AI citations", href: "/#who-for" },
  ]
  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
        Use Cases <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-xl border shadow-xl p-3 z-50 transition-all duration-300 ease-out before:absolute before:-top-3 before:left-0 before:w-full before:h-3 ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 pointer-events-none"}`}>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-2 mb-3">Use Cases</p>
        {items.map((item) => (
          <Link key={item.label} href={item.href} className="block px-2 py-2.5 rounded-lg hover:bg-muted/50 transition-colors" onClick={() => setOpen(false)}>
            <div className="text-sm font-medium text-foreground/80">{item.label}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function ResourcesMegaMenu() {
  const { open, setOpen, ref } = useDropdown()
  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
        Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-140 bg-white rounded-2xl border shadow-xl p-6 z-50 grid grid-cols-2 gap-8 transition-all duration-300 ease-out before:absolute before:-top-3 before:left-0 before:w-full before:h-3 ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 pointer-events-none"}`}>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">Educational Content</p>
          <div className="space-y-3">
            {[
              { label: "Blog", sub: "Latest insights on AI SEO, GEO trends.", href: "/blog" },
              { label: "AI SEO Guide", sub: "Comprehensive guide to optimizing for AI-powered search.", href: "/blog/aeo-vs-seo" },
              { label: "What is AEO?", sub: "Definition, importance, how to measure it.", href: "/#aeo-readiness" },
              { label: "What is AI Search Visibility?", sub: "Why it matters vs traditional SEO.", href: "/#ai-search-visibility" },
              { label: "LLM SEO Framework", sub: "Step-by-step framework for getting cited by LLMs.", href: "/#the-solution" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="block group" onClick={() => setOpen(false)}>
                <div className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">{item.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">Tools & Templates</p>
          <div className="space-y-1">
            {[
              { label: "AI SEO ROI Calculator", href: "/#roi-calculator" },
              { label: "Sample Report", href: "/#ai-search-visibility" },
              { label: "AI SEO Checklist", href: "/#the-solution" },
              { label: "Schema Templates", href: "/#structured-data" },
              { label: "AI Prompt Library", href: "/#prompt-visibility" },
              { label: "Content Audit Template", href: "/#the-solution" },
              { label: "AIVS Score Checker", href: "/#ai-search-visibility" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
