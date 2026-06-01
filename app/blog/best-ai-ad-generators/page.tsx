import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogArticlePage } from "@/components/blog-article-page"
import { BlogPostingSchema } from "@/components/blog-posting-schema"

export const metadata: Metadata = {
  title: "Blog — 15 Best AI Ad Generators for Smart Marketers in 2026",
  description:
    "A comprehensive guide to the best AI ad generators available today, covering everything from budget-friendly options to enterprise-level solutions.",
  alternates: {
    canonical: "https://colytics-ai-amber.vercel.app/blog/best-ai-ad-generators",
  },
}

export default function BlogArticleRoute() {
  return (
    <>
      <Header />
      <BlogPostingSchema
        title="15 Best AI Ad Generators for Smart Marketers in 2026"
        description="A comprehensive guide to the best AI ad generators available today, covering everything from budget-friendly options to enterprise-level solutions."
        url="https://colytics-ai-amber.vercel.app/blog/best-ai-ad-generators"
        publishedAt="2025-08-27"
        image="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_1287,h_753/https://attrock.com/wp-content/uploads/2025/08/Adcreativeai.jpg"
      />
      <BlogArticlePage />
      <Footer />
    </>
  )
}
