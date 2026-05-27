"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import EarlyAccessTrigger from "@/components/early-access-trigger"

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

function ProductMegaMenu() {
  const { open, setOpen, ref } = useDropdown()
  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        Product <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-180 bg-white rounded-2xl border shadow-xl p-6 z-50 grid grid-cols-3 gap-8 transition-all duration-300 ease-out before:absolute before:-top-3 before:left-0 before:w-full before:h-3 ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 pointer-events-none"}`}>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">Platform Overview</p>
            <div className="space-y-3">
              {[
                { label: "What is Colytics AI?", sub: "Learn how Colytics unifies AI visibility + website intelligence.", href: "/" },
                { label: "AI Search Visibility", sub: "Track brand citations across 9 AI engines.", href: "/product/ai-search-visibility" },
                { label: "Website Intelligence", sub: "Crawl, audit, and prioritize technical SEO + content fixes.", href: "/product/website-intelligence" },
                { label: "Reporting & Automation", sub: "Weekly reports, alerts, API access, white-label exports.", href: "/product/reporting" },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="block group" onClick={() => setOpen(false)}>
                  <div className="text-sm font-medium group-hover:text-foreground text-foreground/80 transition-colors">{item.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">Core Features</p>
            <div className="space-y-2">
              {["AI Citation Visibility","AEO Readiness Scoring","Technical Audit","Content Audit","Structured Data & Schema","Competitor Intelligence","Prompt Visibility Tracking","SEO Visibility & Search Optimization"].map((item) => (
                <Link key={item} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5" onClick={() => setOpen(false)}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">Integrations</p>
            <div className="space-y-3">
              {[
                { label: "Google Search Console", sub: "Connect GSC for keyword data." },
                { label: "Google Analytics", sub: "Link GA4 for traffic attribution." },
                { label: "CMS Integrations", sub: "WordPress, HubSpot, Webflow. (Coming Soon)" },
                { label: "API Access", sub: "Custom integrations & automation. (Coming Soon)" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-sm font-medium text-foreground/80">{item.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

function SolutionsDropdown() {
  const { open, setOpen, ref } = useDropdown()
  const items = [
    { label: "AI Search Visibility Platform", sub: "Monitor brand mentions across 9 AI engines", href: "/ai-search-visibility" },
    { label: "AEO Software", sub: "Optimize content for Answer Engine Optimization", href: "/aeo-tool" },
    { label: "Website Audit Tool", sub: "Identify technical SEO issues at scale", href: "/website-audit-tool" },
    { label: "Technical SEO Audit Software", sub: "Deep crawl analysis and prioritized fixes", href: "/technical-seo-audit" },
    { label: "Content Intelligence Platform", sub: "Data-driven insights for content strategy", href: "/content-audit" },
    { label: "SEO Automation Platform", sub: "Automate reporting and monitoring tasks", href: "/seo-automation-platform" },
    { label: "AI Citation Monitoring", sub: "Track and protect your brand citations", href: "/ai-citation-tracking" },
    { label: "Prompt Tracking Software", sub: "Analyze user prompts related to your niche", href: "/prompt-tracking" },
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
            <div className="text-sm font-medium text-foreground/80">{item.label}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function UseCasesDropdown() {
  const { open, setOpen, ref } = useDropdown()
  const items = [
    { label: "For Agencies", sub: "SEO & growth agencies managing multiple clients", href: "/for-agencies" },
    { label: "For In-house SEO Teams", sub: "Corporate SEO departments", href: "/for-in-house-seo" },
    { label: "For Solopreneurs", sub: "Freelancers & consultants", href: "/for-solopreneurs" },
    { label: "For SaaS Companies", sub: "SaaS teams optimizing for AI discovery", href: "/for-saas" },
    { label: "For eCommerce Teams", sub: "eCommerce product optimization for AI answers", href: "/for-ecommerce" },
    { label: "For Publishers", sub: "Publishers optimizing content for AI citations", href: "/for-publishers" },
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

function ResourcesMegaMenu() {
  const { open, setOpen, ref } = useDropdown()
  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
        Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-170 bg-white rounded-2xl border shadow-xl p-6 z-50 grid grid-cols-3 gap-8 transition-all duration-300 ease-out before:absolute before:-top-3 before:left-0 before:w-full before:h-3 ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 pointer-events-none"}`}>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">Educational Content</p>
            <div className="space-y-3">
              {[
                { label: "Blog", sub: "Latest insights on AI SEO, GEO trends.", href: "/blog" },
                { label: "AI SEO Guide", sub: "Comprehensive guide to optimizing for AI-powered search.", href: "/guide/ai-seo" },
                { label: "What is AEO?", sub: "Definition, importance, how to measure it.", href: "/what-is-aeo" },
                { label: "What is AI Search Visibility?", sub: "Why it matters vs traditional SEO.", href: "/what-is-ai-search-visibility" },
                { label: "LLM SEO Framework", sub: "Step-by-step framework for getting cited by LLMs.", href: "/framework/llm-seo" },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="block group" onClick={() => setOpen(false)}>
                  <div className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">{item.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">Competitive Positioning</p>
            <div className="space-y-1">
              {[
                { label: "Colytics vs Ahrefs", href: "/colytics-vs-ahrefs" },
                { label: "Colytics vs SEMrush", href: "/colytics-vs-semrush" },
                { label: "Colytics vs Screaming Frog", href: "/colytics-vs-screaming-frog" },
                { label: "Colytics vs Surfer", href: "/colytics-vs-surfer" },
                { label: "Spotlight Alternative", href: "/spotlight-alternative" },
                { label: "Ahrefs Alternative", href: "/ahrefs-alternative" },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">Tools & Templates</p>
            <div className="space-y-1">
              {[
                { label: "AI SEO ROI Calculator", href: "/calculator" },
                { label: "Sample Report", href: "/sample-report" },
                { label: "AI SEO Checklist", href: "/checklist" },
                { label: "Schema Templates", href: "/templates/schema" },
                { label: "AI Prompt Library", href: "/library/prompts" },
                { label: "Content Audit Template", href: "/templates/audit" },
                { label: "AIVS Score Checker", href: "/aivs-checker" },
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

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40 transition-all">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto py-4 px-6">
        <Link href="/" className="flex items-center shrink-0">
          <img src="/logo/colytics-logo-side.svg" alt="Colytics AI" className="h-10 w-auto -my-6" />
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          <ProductMegaMenu />
          <SolutionsDropdown />
          <UseCasesDropdown />
          <ResourcesMegaMenu />
          <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <EarlyAccessTrigger />
        </div>
      </div>
    </header>
  )
}
