"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually")

  const pricing = {
    starter: { monthly: 0, annually: 0 },
    pro: { monthly: 49, annually: 39 },
    agency: { monthly: 149, annually: 119 },
    enterprise: { monthly: 499, annually: 399 },
  }

  const plans = [
    {
      key: "starter" as const,
      name: "Starter",
      description: "For individual exploration and getting started with AI visibility and AEO.",
      cta: "Start for free",
      features: [
        "1 project (website)",
        "Basic website auditing",
        "Limited crawl capacity",
        "Citation monitoring across core AI engines",
        "Community support",
      ],
      featured: false,
    },
    {
      key: "pro" as const,
      name: "Pro",
      description: "For solopreneurs and small teams competing in AI search.",
      cta: "Claim Early Access",
      features: [
        "Up to 5 projects",
        "Full citation gap analysis",
        "All 9 AI engines tracked",
        "AEO Readiness Score",
        "Schema & structured data audit",
        "Weekly citation reports",
        "Priority support",
      ],
      featured: true,
    },
    {
      key: "agency" as const,
      name: "Agency",
      description: "For SEO agencies managing multiple client websites.",
      cta: "Claim Early Access",
      features: [
        "Unlimited client projects",
        "White-label reporting",
        "Multi-client dashboard",
        "Dev-ready fix exports",
        "Citation drift alerts",
        "Dedicated onboarding",
        "API access",
      ],
      featured: false,
    },
    {
      key: "enterprise" as const,
      name: "Enterprise",
      description: "For large-scale operations with 10,000+ page websites.",
      cta: "Contact sales",
      features: [
        "Everything in Agency",
        "Enterprise-scale crawling",
        "Custom AI model tracking",
        "SOC 2 compliant",
        "SSO integration",
        "Dedicated account manager",
        "Custom contracts",
      ],
      featured: false,
    },
  ]

  return (
    <section id="pricing" className="py-28 px-6 bg-[#fafafa] border-t border-[#e8e8e8] relative overflow-hidden">
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
            Founding member pricing locked for life.<br />Start free, upgrade when you're ready.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12 relative z-10">
          <div className="inline-flex relative bg-muted/30 p-1 rounded-full border">
            {/* Sliding Pill Background */}
            <div 
              className={`absolute top-1 bottom-1 w-32.5 bg-white rounded-full shadow-sm transition-transform duration-300 ease-out ${
                billingPeriod === "annually" ? "translate-x-0" : "translate-x-full"
              }`}
            />
            <button
              onClick={() => setBillingPeriod("annually")}
              className={`relative z-10 w-32.5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                billingPeriod === "annually" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annually <span className="text-xs text-green-600 ml-1">-20%</span>
            </button>
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`relative z-10 w-32.5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                billingPeriod === "monthly" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.key} 
              className={`rounded-2xl p-8 flex flex-col transition-colors relative ${
                plan.featured 
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
              <p className="text-sm mb-6 h-15 text-muted-foreground">
                {plan.description}
              </p>
              
              <div className="mb-8 relative h-12 overflow-hidden shrink-0">
                <div 
                  className={`absolute inset-0 transition-all duration-500 ease-in-out flex items-center ${
                    billingPeriod === 'annually' ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                  }`}
                >
                  <span className="text-4xl font-serif text-foreground leading-none">
                    {pricing[plan.key]["annually"] === 0 ? "Free" : `$${pricing[plan.key]["annually"]}`}
                  </span>
                  {pricing[plan.key]["annually"] > 0 && (
                    <span className="text-sm text-muted-foreground ml-1 self-end mb-0.75">/mo</span>
                  )}
                </div>
                <div 
                  className={`absolute inset-0 transition-all duration-500 ease-in-out flex items-center ${
                    billingPeriod === 'monthly' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <span className="text-4xl font-serif text-foreground leading-none">
                    {pricing[plan.key]["monthly"] === 0 ? "Free" : `$${pricing[plan.key]["monthly"]}`}
                  </span>
                  {pricing[plan.key]["monthly"] > 0 && (
                    <span className="text-sm text-muted-foreground ml-1 self-end mb-0.75">/mo</span>
                  )}
                </div>
              </div>

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
      </div>
    </section>
  )
}
