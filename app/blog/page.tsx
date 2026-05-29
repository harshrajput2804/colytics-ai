import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, CalendarDays, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog — Colytics AI",
  description:
    "Explore in-depth articles on AI ad generators, marketing strategies, and tools for smart marketers.",
}

const blogPosts = [
  {
    slug: "best-ai-ad-generators",
    title: "15 Best AI Ad Generators for Smart Marketers in 2026",
    excerpt: "A comprehensive guide to the best AI ad generators available today, covering everything from budget-friendly options to enterprise-level solutions.",
    category: "AI Tools",
    author: "Gaurav Sharma",
    publishedAt: "2025-08-27",
    readTime: 30,
    image:
      "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_1287,h_753/https://attrock.com/wp-content/uploads/2025/08/Adcreativeai.jpg",
    featured: true,
  },
  {
    slug: "aeo-vs-seo",
    title: "AEO vs SEO: The Future of Search Optimization",
    excerpt: "Understanding the differences between Answer Engine Optimization and traditional SEO, and how to prepare your content for the AI-first search landscape.",
    category: "Strategy",
    author: "Gaurav Sharma",
    publishedAt: "2025-08-20",
    readTime: 18,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    featured: false,
  },
  {
    slug: "marketing-automation-guide",
    title: "Complete Guide to Marketing Automation in 2026",
    excerpt: "Learn how to implement marketing automation to save time, improve customer experience, and scale your campaigns effectively.",
    category: "Marketing",
    author: "Gaurav Sharma",
    publishedAt: "2025-08-15",
    readTime: 25,
    image:
      "https://images.unsplash.com/photo-1460925895917-adf4e5b6d08f?w=1200&h=600&fit=crop",
    featured: false,
  },
  {
    slug: "content-strategy-2026",
    title: "Content Strategy for Modern Marketers",
    excerpt: "Discover the content strategies that drive real results in 2026, from SEO-first content to AI-powered personalization.",
    category: "Content",
    author: "Gaurav Sharma",
    publishedAt: "2025-08-10",
    readTime: 22,
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=600&fit=crop",
    featured: false,
  },
  {
    slug: "performance-marketing-metrics",
    title: "Key Performance Metrics Every Marketer Should Track",
    excerpt: "Master the essential metrics that determine if your performance marketing campaigns are working and how to optimize them.",
    category: "Analytics",
    author: "Gaurav Sharma",
    publishedAt: "2025-08-05",
    readTime: 20,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    featured: false,
  },
]

const featuredPost = blogPosts.find((post) => post.featured)
const recentPosts = blogPosts.filter((post) => !post.featured)

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-[#0a0a0a]">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(21,73,240,0.12),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
                Colytics AI Blog
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                In-depth articles on AI marketing, content strategy, and tools for modern marketers. Stay ahead with insights from industry experts.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block rounded-3xl border border-border bg-linear-to-br from-brand/5 to-brand/0 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="grid gap-6 lg:grid-cols-[1.25fr_0.9fr] lg:gap-0">
                {/* Featured Post Image */}
                <div className="relative h-64 sm:h-80 lg:h-full min-h-96 overflow-hidden bg-muted">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Featured Post Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-brand/10 text-sm font-semibold text-brand">
                        Featured
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium text-muted-foreground">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-[#0a0a0a] group-hover:text-brand transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-7">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        <time dateTime={featuredPost.publishedAt}>
                          {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime} min read</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 font-semibold text-brand group-hover:gap-3 transition-all">
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Recent Posts Grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight">Recent articles</h2>
            <p className="mt-2 text-muted-foreground">
              Explore our latest insights and strategies for modern marketing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-white hover:shadow-lg hover:border-brand/20 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 p-5 sm:p-6 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-[#0a0a0a] group-hover:text-brand transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.readTime} min</span>
                    </div>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-3xl border bg-black bg-linear-to-r from-brand to-brand/80 p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-semibold">Stay updated with our latest insights</h2>
            <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
              Subscribe to get the latest articles on AI marketing, strategy, and tools delivered to your inbox.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-black/50 placeholder:text-white/60 text-white/50 border border-gray/30 focus:outline-none focus:border-white/90 transition-colors w-full sm:w-auto"
              />
              <button className="px-6 py-3 rounded-lg bg-white text-brand font-semibold hover:bg-white/90 text-black transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}