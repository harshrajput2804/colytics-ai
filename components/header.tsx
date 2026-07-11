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

const navLinks = [
  { label: "Overview", href: "/#what-colytics-is" },
  { label: "AI Visibility", href: "/#ai-search-visibility" },
  { label: "Scoring", href: "/#proprietary-scoring" },
  { label: "Ask AI", href: "/#ask-ai" },
  { label: "ROI", href: "/#roi-calculator" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ui-md text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <EarlyAccessTrigger label="Get early access →" />
        </div>
        <div className="flex items-center gap-2 sm:hidden">
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
                <div className="grid gap-2">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link href={link.href} className="rounded-lg border border-border px-3 py-2 text-ui-md text-foreground transition-colors hover:bg-muted">
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <div className="grid gap-2 pt-2">
                  <EarlyAccessTrigger label="Get early access →" className="w-full" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
