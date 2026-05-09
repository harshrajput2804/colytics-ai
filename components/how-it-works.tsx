import { Globe, Search, ListChecks } from "lucide-react"

export function HowItWorks() {
  return (
    <section id="solutions" className="py-28 px-6 bg-[#fafafa] border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto">
        {/* Section header - keeping original */}
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-5">How It Works</p>
          <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]">
            Three steps to AI citation intelligence.
          </h2>
        </div>

        {/* Step 1 */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-7">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-2xl md:text-3xl mb-4">1. Connect Your Domain</h3>
            <p className="text-muted-foreground leading-relaxed">
              Add your website URL. Add prompts and topics. Colytics begins crawling, analyzing content structure, and mapping your schema coverage.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <DomainCard />
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-7">
          <div>
            <GapAnalysisCard />
          </div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-4">2. See Your Citation Gaps</h3>
            <p className="text-muted-foreground leading-relaxed">
              Within minutes, see where competitors are cited and you are not. Understand the structural reasons behind every gap.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-2xl md:text-3xl mb-4">3. Execute the Fix List</h3>
            <p className="text-muted-foreground leading-relaxed">
              Get a prioritized roadmap of content, schema, and structural changes ranked by expected citation impact. Ship fixes. Track gains.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <RoadmapCard />
          </div>
        </div>
      </div>
    </section>
  )
}

function DomainCard() {
  return (
    <div className="bg-muted/50 rounded-xl p-6">
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <h4 className="text-sm font-medium mb-4">Setup Target Domain</h4>
        <div className="flex items-center gap-2 p-3 border rounded-lg mb-4">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm">yourwebsite.com</span>
        </div>
        
        <h4 className="text-sm font-medium mb-3 mt-6">Target Prompts</h4>
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
          <span className="text-sm text-green-600">Crawling initialized</span>
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
          <h4 className="text-sm font-medium">Citation Gap: "best seo tools"</h4>
          <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Missed Citation</span>
        </div>

        <div className="space-y-4">
          <div className="p-3 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">ChatGPT Response</span>
            </div>
            <p className="text-xs text-muted-foreground">
              "...Some of the top enterprise SEO tools include <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Competitor A</span> and <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Competitor B</span> due to their comprehensive backlink analysis..."
            </p>
          </div>

          <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
            <div className="text-sm font-medium text-red-800 mb-1">Why you missed this:</div>
            <ul className="text-xs text-red-700 space-y-1 list-disc pl-4">
              <li>Missing relevant Schema markup</li>
              <li>Content lacks structured lists</li>
              <li>Low entity density for "enterprise seo"</li>
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
          <h4 className="text-sm font-medium">Prioritized Fixes</h4>
          <ListChecks className="w-4 h-4 text-muted-foreground" />
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 border rounded-lg bg-green-50">
            <div className="w-5 h-5 rounded-full border border-green-500 flex-shrink-0 flex items-center justify-center">
              <span className="text-green-500 text-xs">✓</span>
            </div>
            <div>
              <div className="text-sm font-medium">Add SoftwareApplication Schema</div>
              <div className="text-xs text-muted-foreground">Expected Impact: High</div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 border rounded-lg">
            <div className="w-5 h-5 rounded-full border flex-shrink-0"></div>
            <div>
              <div className="text-sm font-medium">Structure pricing page data</div>
              <div className="text-xs text-muted-foreground">Expected Impact: Medium</div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 border rounded-lg">
            <div className="w-5 h-5 rounded-full border flex-shrink-0"></div>
            <div>
              <div className="text-sm font-medium">Increase entity density on /enterprise</div>
              <div className="text-xs text-muted-foreground">Expected Impact: Medium</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
