import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DashboardMockup } from "@/components/dashboard-mockup"

export function HeroSection() {
  return (
    <section className="relative w-full pt-32 pb-0 overflow-x-hidden bg-white">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f5e9]/30 via-[#e3f2fd]/30 to-[#f3e5f5]/20 pointer-events-none" />
      
      {/* Diagonal strips pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]" 
        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #000, #000 1px, transparent 1px, transparent 6px)' }}
      />
      
      {/* Bottom fade transition to merge smoothly with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white text-[12px] font-medium text-muted-foreground">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1549f0]" />
            AI Citation Intelligence Platform — Early Access Open
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-4xl mx-auto relative">
          {/* Spotlight Glow (Premium silver/gray, made brighter/more visible) */}
          <div className="absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[180px] bg-sky-200/40 blur-[45px] rounded-full pointer-events-none -z-10" />
          
          <h1 className="font-serif text-[52px] md:text-[72px] lg:text-[84px] leading-[1.0] tracking-[-0.02em] text-[#0a0a0a] text-balance">
            Your competitors are cited in AI answers.
            <br />
            <span className="text-[#737373]">You are not.</span>
          </h1>
          <p className="mt-7 text-[17px] leading-relaxed text-[#525252] max-w-2xl mx-auto font-[350]">
            Colytics shows SEO teams exactly why their brand is invisible in ChatGPT, Gemini, and Perplexity —
            and delivers a prioritized fix list to change that.
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mt-8 max-w-[680px] mx-auto">
            {[
              { icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="2.5" fill="currentColor" opacity="0.6"/><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" opacity="0.2"/></svg>, label: "Citation Gap Analysis" },
              { icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 9L5 5L7 7L10 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/></svg>, label: "Share of Voice Tracking" },
              { icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1.5" y="3" width="9" height="1" rx="0.5" fill="currentColor" opacity="0.6"/><rect x="1.5" y="5.5" width="6" height="1" rx="0.5" fill="currentColor" opacity="0.4"/><rect x="1.5" y="8" width="7.5" height="1" rx="0.5" fill="currentColor" opacity="0.3"/></svg>, label: "Prompt Coverage Map" },
              { icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1L7.5 4.5H11L8.25 6.75L9.25 10.5L6 8.25L2.75 10.5L3.75 6.75L1 4.5H4.5L6 1Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/></svg>, label: "Prioritized Execution Roadmap" },
            ].map((chip, i) => (
              <div key={i} className="flex items-center gap-[7px] px-3 py-[7px] bg-white border border-border rounded-full shadow-sm text-[13px] text-foreground font-medium font-sans leading-none whitespace-nowrap">
                <span className="flex items-center justify-center">{chip.icon}</span>
                {chip.label}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap justify-center items-center gap-3">
            <Button
              className="h-11 px-6 rounded-full text-[14px] font-medium bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] border-0"
              asChild
            >
              <Link href="/signup">Claim Early Access</Link>
            </Button>
            <Button
              variant="outline"
              className="h-11 px-6 rounded-full text-[14px] font-medium border-border text-[#0a0a0a] hover:bg-[#f5f5f5] bg-white"
              asChild
            >
              <Link href="#product">See How It Works</Link>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="mt-7 flex flex-wrap justify-center items-center gap-5 text-[12px] text-[#9a9a9a]">
            <span>No credit card required</span>
            <span className="w-px h-3 bg-border" />
            <span>Free during early access</span>
            <span className="w-px h-3 bg-border" />
            <span>Built for 100–5,000 page sites</span>
          </div>
        </div>

        {/* Dashboard mockup — flush to bottom */}
        <div className="mt-16 relative">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
