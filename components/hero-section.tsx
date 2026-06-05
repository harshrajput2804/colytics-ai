import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DashboardMockup } from "@/components/dashboard-mockup"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function HeroSection() {
  return (
    <section
      id="landing-hero"
      className="enhanced-surface relative w-full pt-24 sm:pt-28 lg:pt-32 pb-0 overflow-x-hidden bg-transparent"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#e8f5e9]/30 via-[#e3f2fd]/30 to-[#f3e5f5]/20 pointer-events-none" />

      {/* Bottom fade transition to merge smoothly with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-background to-transparent pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white text-ui-sm font-medium text-muted-foreground">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1549f0]" />
            AI Visibility & AEO Intelligence Platform
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-4xl mx-auto relative">
          {/* Spotlight Glow (Premium silver/gray, made brighter/more visible) */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md sm:max-w-lg h-32 sm:h-45 bg-sky-200/40 blur-[45px] rounded-full pointer-events-none -z-10" />

          <h1 className="heading-1">
            Get cited.
            <br />
            <span className="text-[#99903c]">Everywhere your buyers ask.</span>
          </h1>
          <p className="text-lead mt-6 sm:mt-7 max-w-2xl mx-auto px-1 sm:px-0">
            One closed loop for AI visibility and AEO — audit, diagnose, fix, generate and track citations across every major AI model, built by a 12-year-old agency that lived the problem.
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mt-8 max-w-170 mx-auto px-1">
            {[
              { icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="2.5" fill="currentColor" opacity="0.6" /><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" opacity="0.2" /></svg>, label: "Citation Gap Analysis" },
              { icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 9L5 5L7 7L10 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" /></svg>, label: "Share of Voice Tracking" },
              { icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1.5" y="3" width="9" height="1" rx="0.5" fill="currentColor" opacity="0.6" /><rect x="1.5" y="5.5" width="6" height="1" rx="0.5" fill="currentColor" opacity="0.4" /><rect x="1.5" y="8" width="7.5" height="1" rx="0.5" fill="currentColor" opacity="0.3" /></svg>, label: "9 AI Engines Tracked" },
              { icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1L7.5 4.5H11L8.25 6.75L9.25 10.5L6 8.25L2.75 10.5L3.75 6.75L1 4.5H4.5L6 1Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" /></svg>, label: "Prioritized AEO Roadmap" },
            ].map((chip, i) => (
              <div key={i} className="flex items-center gap-1.75 px-3 py-2 bg-white border border-border rounded-full shadow-sm text-ui-sm text-foreground font-medium font-sans leading-snug max-w-full">
                <span className="flex items-center justify-center">{chip.icon}</span>
                {chip.label}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
            <EarlyAccessTrigger />
            <Button
              className="text-button h-11 w-full sm:w-auto px-6 rounded-full bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:shadow-md border-0"
              asChild
            >
              <Link href="#the-solution">See how the loop works</Link>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="mt-7 flex flex-wrap justify-center items-center gap-3 text-caption">
            <span>Built by a 12-year-old agency</span>
            <span className="w-px h-3 bg-border" />
            <span>Free during early access</span>
          </div>
        </div>

        {/* Dashboard mockup — flush to bottom */}
        <div className="mt-10 sm:mt-12 md:mt-16 relative motion-float -mx-1 sm:mx-0">
          <DashboardMockup />

          {/* <div
            className="relative mx-auto w-full"
            style={{ maxWidth: 720 }}
          >
            <img
              src="/dashboard_mockup.png"
              alt="The AEO Lifecycle (Circular Loop)"
              width={720}
              height={720}
              loading="lazy"
              className="w-full h-auto block"
            />
          </div> */}
        </div>
      </div>
    </section>
  )
}
