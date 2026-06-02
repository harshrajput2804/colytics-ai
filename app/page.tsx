import type { Metadata } from "next"
import { Header } from "@/components/header"
import { GlobalSurfaceAnimation } from "@/components/global-surface-animation"
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
import { SITE_NAME, SITE_URL } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `${SITE_NAME} — AI visibility and AEO intelligence in one platform`,
  description:
    "See why AI engines cite or skip your brand, fix the gaps, and track prompts, citations, and AEO readiness across the homepage loop.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} — AI visibility and AEO intelligence in one platform`,
    description:
      "See why AI engines cite or skip your brand, fix the gaps, and track prompts, citations, and AEO readiness across the homepage loop.",
    url: SITE_URL,
    type: "website",
  },
}
const baseUrl = SITE_URL

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  description: "AI visibility and AEO intelligence platform. Track brand citations across 9 AI engines, audit content for Answer Engine Optimization, and detect schema opportunities.",
  url: baseUrl,
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "50",
  },
}

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Colytics Product Overview",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "What is Colytics AI?",
      url: `${baseUrl}/#what-colytics-is`,
      description: "Learn how Colytics unifies AI visibility + website intelligence.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Search Visibility",
      url: `${baseUrl}/#ai-search-visibility`,
      description: "Track brand citations across 9 AI engines.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Proprietary scoring",
      url: `${baseUrl}/#proprietary-scoring`,
      description: "Crawl, audit, and prioritize technical SEO + content fixes.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "AI Citation Visibility",
      url: `${baseUrl}/#ai-citation-visibility`,
      description: "Visibility into how AI systems cite your site.",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "ASK AI",
      url: `${baseUrl}/#ask-ai`,
      description: "Measure readiness for Answer Engine Optimization.",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Connect to Claude",
      url: `${baseUrl}/#connect-claude`,
      description: "Detect and surface schema opportunities for AI citations.",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Competitor Intelligence",
      url: `${baseUrl}/#comparison`,
      description: "Compare AI visibility and citations across competitors.",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "Prompt Visibility Tracking",
      url: `${baseUrl}/#prompt-visibility`,
      description: "Track prompts and AI answer visibility over time.",
    },
    {
      "@type": "ListItem",
      position: 9,
      name: "SEO Visibility & Search Optimization",
      url: `${baseUrl}/#the-solution`,
      description: "Traditional and AI-focused visibility metrics.",
    },
  ],
} as const

export default function Home() {
  return (
    <>
      <GlobalSurfaceAnimation />
      <div className="relative z-10">
        <Header />
        <main className="landing-page min-h-screen bg-white/96 text-[#0a0a0a] overflow-x-hidden">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }} />
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
        </main>
        <Footer />
      </div>
    </>
  )
}
