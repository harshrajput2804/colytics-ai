import { Globe, Search, ListChecks, ArrowRight } from "lucide-react"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function HowItWorks() {
  return (
    <section id="solutions" className="py-20 px-6 bg-[#fafafa] border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-5">Get Started</p>
          <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]">
            Three steps to AI visibility and AEO intelligence.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-7">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-2xl md:text-3xl mb-4">1. Add your domain</h3>
            <p className="text-muted-foreground leading-relaxed">
              Crawling starts immediately, so you can get to the first signal fast.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <DomainCard />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-7">
          <div>
            <GapAnalysisCard />
          </div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-4">2. See where you’re invisible</h3>
            <p className="text-muted-foreground leading-relaxed">
              See which engines cite competitors instead of you, and why those answers skip your brand.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-2xl md:text-3xl mb-4">3. Ship the ranked fixes</h3>
            <p className="text-muted-foreground leading-relaxed">
              Use the IEU list and generated content to close the highest-value gaps and help AIVS™ climb.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <RoadmapCard />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[15px] text-[#737373] leading-relaxed flex-1">
            Your first audit is minutes away.
          </p>
          <EarlyAccessTrigger
            label="Run my free audit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg font-medium text-[14px] hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap"
          />
        </div>
      </div>
    </section>
  )
}

function DomainCard() {
  return (
    <div className="bg-muted/50 rounded-xl p-6">
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <h4 className="text-sm font-medium mb-4">Add your domain</h4>
        <div className="flex items-center gap-2 p-3 border rounded-lg mb-4">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm">yourwebsite.com</span>
        </div>

        <h4 className="text-sm font-medium mb-3 mt-6">Crawling starts immediately</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-3 border rounded-lg bg-muted/20">
            <Search className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">"best enterprise seo tools"</span>
          </div>
          <div className="flex items-center gap-2 p-3 border rounded-lg bg-muted/20">
            <Search className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">"how to improve ai search visibility"</span>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
          <span className="text-sm text-green-600">Crawling started</span>
        </div>
      </div>
    </div>
  )
}

function GapAnalysisCard() {
  return (
    <div className="bg-muted/50 rounded-xl p-6">
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium">Where you’re invisible</h4>
          <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Missed Citation</span>
        </div>

        <div className="space-y-4">
          <div className="p-3 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Engines citing competitors</span>
            </div>
            <p className="text-xs text-muted-foreground">
              "...Results cite <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Competitor A</span> and <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Competitor B</span> because they have clearer structure, stronger entity coverage, and better answer formatting..."
            </p>
          </div>

          <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
            <div className="text-sm font-medium text-red-800 mb-1">Why you missed this:</div>
            <ul className="text-xs text-red-700 space-y-1 list-disc pl-4">
              <li>Weak schema and structure</li>
              <li>Competitors answer the query more clearly</li>
              <li>Low entity density for the topic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function RoadmapCard() {
  return (
    <div className="bg-muted/50 rounded-xl p-6">
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium">Ranked fixes</h4>
          <ListChecks className="w-4 h-4 text-muted-foreground" />
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 border rounded-lg bg-green-50">
            <div className="w-5 h-5 rounded-full border border-green-500 shrink-0 flex items-center justify-center">
              <span className="text-green-500 text-xs">✓</span>
            </div>
            <div>
              <div className="text-sm font-medium">IEU list: add SoftwareApplication schema</div>
              <div className="text-xs text-muted-foreground">Expected Impact: High</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 border rounded-lg">
            <div className="w-5 h-5 rounded-full border shrink-0"></div>
            <div>
              <div className="text-sm font-medium">Generated content for the pricing page</div>
              <div className="text-xs text-muted-foreground">Expected Impact: Medium</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 border rounded-lg">
            <div className="w-5 h-5 rounded-full border shrink-0"></div>
            <div>
              <div className="text-sm font-medium">AIVS™ climb: improve entity density and answer depth</div>
              <div className="text-xs text-muted-foreground">Expected Impact: Medium</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
