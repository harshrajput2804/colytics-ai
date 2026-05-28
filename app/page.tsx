import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ProblemSection } from "@/components/problem-section"
import { FeaturesSection } from "@/components/features-section"
import { AeoLifecycleSection } from "@/components/aeo-lifecycle-section"
import { HowItWorks } from "@/components/how-it-works"
import { RoiCalculator } from "@/components/roi-calculator"
import { TheSolutionSection } from "@/components/the-solution-section"
import { ModulesSection } from "@/components/modules-section"
import { ProprietaryScoringSection } from "@/components/proprietary-scoring-section"
import { AskAiSection } from "@/components/ask-ai-section"
import { ConnectToClaudeSection } from "@/components/connect-to-claude-section"
import { WhyDifferentSection } from "@/components/why-different-section"
import { WhoForSection } from "@/components/who-for-section"
import { ComparisonSection } from "@/components/comparison-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0a0a0a] overflow-x-hidden">
      <Header />
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <FeaturesSection />
      <AeoLifecycleSection />
      <TheSolutionSection />
      <ModulesSection />
      <ProprietaryScoringSection />
      <AskAiSection />
      <ConnectToClaudeSection />
      <WhyDifferentSection />
      <ComparisonSection />
      <WhoForSection />
      <HowItWorks />
      <RoiCalculator />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
