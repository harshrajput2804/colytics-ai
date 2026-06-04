import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { markdownToHtml } from "@/lib/markdown-to-html"

export const metadata: Metadata = {
  title: "Cookie Policy | Colytics AI",
  description:
    "Cookie Policy for Colytics AI. Learn about the cookies we use, how to manage your preferences, and your rights under global data protection laws.",
  alternates: {
    canonical: "https://colytics-ai-amber.vercel.app/cookie-policy",
  },
}

async function getCookiePolicyMarkdown() {
  const filePath = path.resolve(process.cwd(), "info_doc", "website-cookie-policy.md")
  return readFile(filePath, "utf-8")
}

export default async function CookiePolicyPage() {
  const markdown = await getCookiePolicyMarkdown()
  const html = markdownToHtml(markdown)

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <section className="flex-1 max-w-4xl mx-auto w-full min-w-0 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <p className="text-body text-sm mb-8">
            <span className="font-medium text-[#0a0a0a]">Last Updated:</span> 18 May 2026
          </p>
          <article className="prose-content" dangerouslySetInnerHTML={{ __html: html }} />
          <footer className="mt-12 pt-8 border-t border-[#e8e8e8]">
            <nav className="flex flex-wrap gap-6 text-sm">
              <a href="/privacy-policy" className="text-[#0a0a0a] underline underline-offset-4 hover:text-[#3a3a3a]">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-[#0a0a0a] underline underline-offset-4 hover:text-[#3a3a3a]">
                Terms of Service
              </a>
            </nav>
          </footer>
        </section>
      </main>
      <Footer />
    </>
  )
}
