import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { markdownToHtml } from "@/lib/markdown-to-html"

export const metadata: Metadata = {
  title: "Privacy Policy | Colytics AI",
  description:
    "Privacy Policy for Colytics AI. Learn how ATTROCK Consultancy Private Limited collects, uses, and protects your personal data.",
  alternates: {
    canonical: "https://colytics-ai-amber.vercel.app/privacy-policy",
  },
}

async function getPrivacyPolicyMarkdown() {
  const filePath = path.resolve(process.cwd(), "info_doc", "website-privacy-policy.md")
  return readFile(filePath, "utf-8")
}

export default async function PrivacyPolicyPage() {
  const markdown = await getPrivacyPolicyMarkdown()
  const html = markdownToHtml(markdown)
  const lastUpdated = markdown.match(/\*\*Last Updated:\*\*\s*(.+)/i)?.[1]?.trim() ?? "Not specified"

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <section className="flex-1 max-w-4xl mx-auto w-full min-w-0 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <p className="text-body text-sm mb-8">
            <span className="font-medium text-[#0a0a0a]">Last Updated:</span> {lastUpdated}
          </p>
          <article className="prose-content" dangerouslySetInnerHTML={{ __html: html }} />
          <footer className="mt-12 pt-8 border-t border-[#e8e8e8]">
            <nav className="flex flex-wrap gap-6 text-sm">
              <a href="/terms-of-service" className="text-[#0a0a0a] underline underline-offset-4 hover:text-[#3a3a3a]">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-[#0a0a0a] underline underline-offset-4 hover:text-[#3a3a3a]">
                Cookie Policy
              </a>
            </nav>
          </footer>
        </section>
      </main>
      <Footer />
    </>
  )
}
