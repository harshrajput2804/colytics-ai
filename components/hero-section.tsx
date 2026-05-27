import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DashboardMockup } from "@/components/dashboard-mockup"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: '#0E0E0F' }}>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left Content - 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 md:space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#54595B] bg-[#1B1D21] text-[11px] font-medium text-[#CCD1D5]" style={{ fontFamily: "'Helvetica', sans-serif" }}>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1549f0]" />
                AI Citation Intelligence Platform — Early Access Open
              </div>
            </div>

            {/* Main headline */}
            <div className="space-y-2">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                style={{ color: '#FDFDFD', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.01em' }}
              >
                Your Competitors Are Getting Cited in AI Answers.
              </h1>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                style={{ color: '#FDFDFD', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.01em' }}
              >
                You Are Not.
              </h1>
            </div>

            {/* Subheadline */}
            <p 
              className="text-sm md:text-base leading-relaxed"
              style={{ color: '#CCD1D5', fontFamily: "'Helvetica', sans-serif" }}
            >
              Colytics AI is the citation intelligence platform that shows you exactly why your brand is invisible in ChatGPT, Gemini, and Perplexity — and gives your team a prioritized fix list to change that.
            </p>

            {/* Support Bullets */}
            <ul className="space-y-2.5" style={{ fontFamily: "'Helvetica', sans-serif" }}>
              <li className="flex items-start gap-3 text-sm md:text-base" style={{ color: '#CCD1D5' }}>
                <span className="text-[#C9A227] font-bold mt-0.5 shrink-0">•</span>
                <span>See which prompts trigger competitor citations — not yours</span>
              </li>
              <li className="flex items-start gap-3 text-sm md:text-base" style={{ color: '#CCD1D5' }}>
                <span className="text-[#C9A227] font-bold mt-0.5 shrink-0">•</span>
                <span>Diagnose the content, schema, and structural gaps causing invisibility</span>
              </li>
              <li className="flex items-start gap-3 text-sm md:text-base" style={{ color: '#CCD1D5' }}>
                <span className="text-[#C9A227] font-bold mt-0.5 shrink-0">•</span>
                <span>Get a prioritized execution roadmap, not just a dashboard</span>
              </li>
              <li className="flex items-start gap-3 text-sm md:text-base" style={{ color: '#CCD1D5' }}>
                <span className="text-[#C9A227] font-bold mt-0.5 shrink-0">•</span>
                <span>Track citation gains across AI models over time</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <EarlyAccessTrigger />
              <Button
                variant="outline"
                className="h-11 px-6 text-sm md:text-base font-bold"
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#FDFDFD',
                  borderColor: '#54595B',
                  fontFamily: "'Helvetica', sans-serif"
                }}
                asChild
              >
                <Link href="#product">See How It Works</Link>
              </Button>
            </div>

            {/* Microcopy */}
            <p 
              className="text-xs md:text-sm pt-2"
              style={{ color: '#8F9399', fontFamily: "'Helvetica', sans-serif" }}
            >
              Built for SEO teams managing 100–5,000 pages. No credit card required.
            </p>
          </div>

          {/* Right side - Product Screenshot - 7 cols */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end">
            <div className="w-full h-auto max-w-2xl">
              <div 
                className="rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm"
                style={{
                  boxShadow: '0 20px 60px rgba(201, 162, 39, 0.1), 0 0 60px rgba(201, 162, 39, 0.05)',
                  border: '1px solid rgba(201, 162, 39, 0.1)'
                }}
              >
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
