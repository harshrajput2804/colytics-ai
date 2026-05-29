import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogArticlePage } from "@/components/blog-article-page"

export const metadata: Metadata = {
  title: "Blog — 15 Best AI Ad Generators for Smart Marketers in 2026",
  description:
    "A comprehensive guide to the best AI ad generators available today, covering everything from budget-friendly options to enterprise-level solutions.",
}

export default function BlogArticleRoute() {
  return (
    <>
      <Header />
      <BlogArticlePage />
      <Footer />
    </>
  )
}
