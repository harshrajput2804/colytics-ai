"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import EarlyAccessTrigger from "@/components/early-access-trigger"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { ProductMegaMenu, SolutionsDropdown, UseCasesDropdown, ResourcesMegaMenu } from "@/components/header-dropdowns"

const mobileNavSections = [
  {
    title: "Product",
    links: [
      { label: "What is Colytics AI?", href: "/#what-colytics-is" },
      { label: "AI Search Visibility", href: "/#ai-search-visibility" },
      { label: "Proprietary scoring", href: "/#proprietary-scoring" },
      // { label: "Reporting & Automation", href: "/#the-solution" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "AI Search Visibility Platform", href: "/#ai-citation-visibility" },
      { label: "AEO Software", href: "/#aeo-readiness" },
      { label: "Website Audit Tool", href: "/#the-solution" },
      { label: "Technical SEO Audit Software", href: "/#the-solution" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "For Agencies", href: "/#who-for" },
      { label: "For In-house SEO Teams", href: "/#who-for" },
      { label: "For Solopreneurs", href: "/#who-for" },
      { label: "For SaaS Companies", href: "/#who-for" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "AI SEO Guide", href: "/blog/aeo-vs-seo" },
      { label: "Comparison Pages", href: "/#comparison" },
      { label: "ROI Calculator", href: "/#roi-calculator" },
    ],
  },
]

export function Header() {
  return (
    <header
      id="site-header"
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white/50 backdrop-blur-md border-b border-border/40 transition-all"
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto py-3 sm:py-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center shrink-0">
          <img src="/logo/colytics-logo-side.svg" alt="Colytics AI" className="h-8 sm:h-10 w-auto -my-4 sm:-my-6" />
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          <ProductMegaMenu />
          <SolutionsDropdown />
          <UseCasesDropdown />
          <ResourcesMegaMenu />
          <Link
            href="/#pricing"
            className="text-ui-md text-muted-foreground hover:text-foreground transition-colors"
            onClick={(e) => {
              if (typeof window !== "undefined" && window.location.pathname === "/") {
                e.preventDefault()
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Pricing
          </Link>
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">Login</Link>
          </Button>
          <EarlyAccessTrigger label="Get early access →" />
        </div>
        <div className="flex items-center gap-2 sm:hidden">
          <Button variant="ghost" size="icon-sm" asChild>
            <Link href="/">Login</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon-sm" className="rounded-full bg-white">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] sm:w-sm overflow-y-auto px-4">
              <SheetHeader className="px-0 pt-6">
                <SheetTitle className="heading-3-lg text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="space-y-6 pb-6 pt-2">
                {mobileNavSections.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <p className="section-label">{section.title}</p>
                    <div className="grid gap-2">
                      {section.links.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link href={link.href} className="rounded-lg border border-border px-3 py-2 text-ui-md text-foreground transition-colors hover:bg-muted">
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="grid gap-2 pt-2">
                  <EarlyAccessTrigger label="Get early access →" className="w-full" />
                  <SheetClose asChild>
                    <Link href="/#pricing" className="rounded-full bg-[#0a0a0a] px-4 py-3 text-center text-ui-md font-medium text-white transition-colors hover:bg-[#1a1a1a]">
                      View Pricing
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
