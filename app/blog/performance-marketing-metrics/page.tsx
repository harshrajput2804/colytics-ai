import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostShell, type TocItem } from "@/components/blog-post-shell"
import { BlogPostingSchema } from "@/components/blog-posting-schema"

export const metadata: Metadata = {
  title: "Key Performance Metrics Every Marketer Should Track",
  description:
    "Master the essential metrics that determine if your performance marketing campaigns are working and how to optimize them.",
  alternates: {
    canonical: "https://colytics-ai-amber.vercel.app/blog/performance-marketing-metrics",
  },
}

const toc: TocItem[] = [
  { id: "metrics", label: "Metrics That Matter" },
  { id: "top-funnel", label: "Top-of-Funnel Metrics" },
  { id: "mid-funnel", label: "Mid-Funnel Metrics" },
  { id: "bottom-funnel", label: "Bottom-Funnel Metrics" },
  { id: "roi", label: "The Golden Metric: ROI" },
  { id: "tracking", label: "Setting Up Your Tracking" },
]

export default function PerformanceMetricsPage() {
  return (
    <>
      <Header />
      <BlogPostingSchema
        title="Key Performance Metrics Every Marketer Should Track"
        description="Master the essential metrics that determine if your performance marketing campaigns are working and how to optimize them."
        url="https://colytics-ai-amber.vercel.app/blog/performance-marketing-metrics"
        publishedAt="2025-08-05"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
      />
      <BlogPostShell
        category="Analytics"
        title="Key Performance Metrics Every Marketer Should Track"
        excerpt="Master the essential metrics that determine if your performance marketing campaigns are working and how to optimize them."
        publishedAt="2025-08-05"
        readTime="20 min"
        toc={toc}
        floatingTitle="Use metrics to guide the next move"
        floatingDescription="We help marketing teams turn raw numbers into clearer decisions and better landing pages."
        floatingLinkHref="/contact"
        floatingLinkLabel="Talk to an expert"
      >
        <div className="prose prose-lg max-w-none py-16 sm:py-20">
          <section id="metrics" className="scroll-mt-32">
            <h2>Metrics That Matter</h2>
            <p>
              Not all metrics are created equal. Vanity metrics might look good in reports, but they don't tell you if your marketing is actually driving business results.
            </p>
          </section>

          <section id="top-funnel" className="scroll-mt-32 mt-10">
            <h3>Top-of-Funnel Metrics</h3>
            <ul>
              <li><strong>Impressions:</strong> Raw visibility, but limited insight</li>
              <li><strong>Click-Through Rate (CTR):</strong> Shows how compelling your messaging is</li>
              <li><strong>Cost Per Click (CPC):</strong> Efficiency of paid campaigns</li>
              <li><strong>Cost Per Impression (CPM):</strong> Baseline media cost</li>
            </ul>
          </section>

          <section id="mid-funnel" className="scroll-mt-32 mt-10">
            <h3>Mid-Funnel Metrics</h3>
            <ul>
              <li><strong>Cost Per Lead (CPL):</strong> Indicates prospecting efficiency</li>
              <li><strong>Lead Quality Score:</strong> Not all leads are equal</li>
              <li><strong>Engagement Rate:</strong> Shows content relevance</li>
              <li><strong>Email Open Rate:</strong> Subject line and sender reputation</li>
            </ul>
          </section>

          <section id="bottom-funnel" className="scroll-mt-32 mt-10">
            <h3>Bottom-Funnel Metrics</h3>
            <ul>
              <li><strong>Conversion Rate:</strong> Percentage of visitors who take desired action</li>
              <li><strong>Cost Per Acquisition (CPA):</strong> True customer acquisition cost</li>
              <li><strong>Customer Lifetime Value (CLV):</strong> Long-term value of each customer</li>
              <li><strong>Return on Ad Spend (ROAS):</strong> Revenue per marketing dollar spent</li>
            </ul>
          </section>

          <section id="roi" className="scroll-mt-32 mt-10">
            <h3>The Golden Metric: ROI</h3>
            <p>
              At the end of the day, marketing ROI is what matters. Calculate this by dividing profit generated from marketing by the total marketing cost. If your ROI is positive, you're on the right track.
            </p>
          </section>

          <section id="tracking" className="scroll-mt-32 mt-10">
            <h3>Setting Up Your Tracking</h3>
            <p>
              Use tools like Google Analytics, Mixpanel, or dedicated marketing analytics platforms to track these metrics consistently. Set baseline measurements and track progress over time to identify trends and opportunities for optimization.
            </p>
          </section>
        </div>
      </BlogPostShell>
      <Footer />
    </>
  )
}
