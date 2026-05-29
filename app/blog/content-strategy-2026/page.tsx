import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostShell, type TocItem } from "@/components/blog-post-shell"

export const metadata: Metadata = {
  title: "Content Strategy for Modern Marketers",
  description:
    "Discover the content strategies that drive real results in 2026, from SEO-first content to AI-powered personalization.",
}

const toc: TocItem[] = [
  { id: "foundation", label: "Understanding Your Audience" },
  { id: "pillars", label: "Content Pillars and Topics" },
  { id: "seo-aeo", label: "The Role of SEO and AEO" },
  { id: "distribution", label: "Distribution Strategy" },
  { id: "measure", label: "Measuring Success" },
]

export default function ContentStrategyPage() {
  return (
    <>
      <Header />
      <BlogPostShell
        category="Content"
        title="Content Strategy for Modern Marketers"
        excerpt="Discover the content strategies that drive real results in 2026, from SEO-first content to AI-powered personalization."
        publishedAt="2025-08-10"
        readTime="22 min"
        toc={toc}
        floatingTitle="Build content that performs across channels"
        floatingDescription="We help teams turn content strategy into usable pages, campaigns, and conversion paths."
        floatingLinkHref="/pricing"
        floatingLinkLabel="See pricing"
      >
        <div className="prose prose-lg max-w-none py-16 sm:py-20">
          <section id="foundation" className="scroll-mt-32">
            <h2>Building a Content Strategy That Works</h2>
            <p>
              Content strategy isn't just about creating blog posts. It's about understanding your audience, their challenges, and how your solutions can help them succeed.
            </p>
          </section>

          <section id="pillars" className="scroll-mt-32 mt-10">
            <h3>Content Pillars and Topics</h3>
            <p>
              Organize your content around core topics that matter to your business and audience. This helps with topical authority and makes it easier to plan content at scale.
            </p>
          </section>

          <section id="seo-aeo" className="scroll-mt-32 mt-10">
            <h3>The Role of SEO and AEO</h3>
            <p>
              Modern content strategy must account for both traditional search and AI-powered answers. Optimize your content for both by providing clear, well-structured information with direct answers to common questions.
            </p>
          </section>

          <section id="distribution" className="scroll-mt-32 mt-10">
            <h3>Distribution Strategy</h3>
            <ul>
              <li>Blog and owned content first</li>
              <li>Repurpose content across multiple channels</li>
              <li>Leverage social media strategically</li>
              <li>Partner with influencers when relevant</li>
              <li>Email nurture for top performers</li>
            </ul>
          </section>

          <section id="measure" className="scroll-mt-32 mt-10">
            <h3>Measuring Success</h3>
            <p>
              Track metrics that matter: organic traffic, engagement, lead generation, and revenue attributed to content. Use these insights to continuously improve your strategy.
            </p>
          </section>
        </div>
      </BlogPostShell>
      <Footer />
    </>
  )
}
