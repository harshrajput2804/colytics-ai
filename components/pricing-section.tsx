import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function PricingSection() {
  const plans = [
    {
      key: "free" as const,
      name: "Free Forever",
      price: 0,
      description: "Everything you need to start.",
      cta: "Start free →",
      features: [
        "1 project",
        "Website & Content Analyzer",
        "Structured data & AI files (llms.txt, schema)",
        "Citation monitoring",
        "Community support",
      ],
      featured: false,
    },
    {
      key: "pro" as const,
      name: "Pro",
      price: 49,
      promo: "Free for 60 days",
      description: "Everything to compete in AI search.",
      cta: "Start free →",
      features: [
        "Up to 2 projects",
        "Tracking across all 9 AI engines",
        "Full citation gap analysis + Share of Voice",
        "AIVS™ + per-page LCS™",
        "Website & content audit",
        "Structured data & AI files (schema, llms.txt, facts.json)",
        "Keyword → prompt intelligence",
        "Competitor AI intelligence",
        "Prompt tracking (prompt → answer → cited-URL)",
        "Content generation (humanized + AI detection)",
        "Reports, alerts & weekly summaries",
        "GA4 impact attribution",
        "Ask AI + Claude (MCP)",
      ],
      featured: true,
    },
  ]

  return (
    <section id="pricing" className="enhanced-surface py-28 px-4 sm:px-6 bg-[#fafafa] border-t border-[#e8e8e8] relative overflow-hidden">
      {/* Diagonal strips pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #000, #000 1px, transparent 1px, transparent 6px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - centered */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm border rounded-full mb-6 font-medium">Plans & Pricing</span>
          <h2 className="font-serif text-3xl md:text-5xl text-balance text-foreground">
            Simple pricing for every team
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            No card to start · 14-day refund on paid plans · annual billing 20% off
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col transition-colors relative ${plan.featured
                  ? "bg-muted border-muted-foreground/20 shadow-md ring-1 ring-muted-foreground/10"
                  : "bg-white border shadow-sm"
                }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-lg font-medium mb-2">{plan.name}</h3>
              <p className="text-sm mb-6 text-muted-foreground">
                {plan.description}
              </p>

              <div className="mb-2">
                <span className="text-4xl font-serif text-foreground leading-none">
                  {plan.price === 0 ? "Free" : `$${plan.price}`}
                </span>
                {plan.price > 0 && (
                  <span className="text-sm text-muted-foreground ml-1">/mo</span>
                )}
              </div>

              {plan.promo && (
                <div className="mb-6 text-xs text-green-600 font-medium">
                  {plan.promo}, no card
                </div>
              )}

              <Button
                variant={plan.featured ? "default" : "outline"}
                className={`w-full rounded-full mb-8 ${plan.featured ? "bg-foreground text-background hover:bg-foreground/90 shadow-sm" : ""}`}
              >
                {plan.cta}
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-green-500" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <p className="text-[15px] text-[#737373] leading-relaxed flex-1">
              Get the full platform free for 60 days — no card, no risk.
            </p>
            <EarlyAccessTrigger
              label="Start Free"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg font-medium text-[14px] hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
