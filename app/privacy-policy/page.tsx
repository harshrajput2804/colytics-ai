import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { readFile } from "node:fs/promises"
import path from "node:path"

export const metadata: Metadata = {
  title: "Privacy Policy | Colytics AI",
  description:
    "Privacy Policy for Colytics AI. Learn how ATTROCK Consultancy Private Limited collects, uses, and protects your personal data.",
}

function convertInlineMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-[#f3f3f3] text-[0.9em]">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#0a0a0a] underline underline-offset-4" target="_blank" rel="noreferrer">$1</a>')
}

function markdownToHtml(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n")
  const html: string[] = []
  let paragraphBuffer: string[] = []
  let listItems: string[] = []

  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) return
    html.push(`<p class="text-[15px] leading-7 text-[#3a3a3a] mb-5">${convertInlineMarkdown(paragraphBuffer.join(" "))}</p>`)
    paragraphBuffer = []
  }

  const flushList = () => {
    if (listItems.length === 0) return
    html.push(`<ul class="list-disc pl-6 mb-6 space-y-2">${listItems.map((item) => `<li class="text-[15px] leading-7 text-[#3a3a3a]">${convertInlineMarkdown(item)}</li>`).join("")}</ul>`)
    listItems = []
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (line.length === 0) {
      flushParagraph()
      flushList()
      continue
    }

    if (/^---+$/.test(line)) {
      flushParagraph()
      flushList()
      html.push('<hr class="my-8 border-[#e8e8e8]" />')
      continue
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/)
    if (headingMatch) {
      flushParagraph()
      flushList()

      const level = headingMatch[1].length
      const content = convertInlineMarkdown(headingMatch[2])

      if (level === 1) {
        html.push(`<h1 class="text-3xl md:text-4xl font-semibold tracking-tight text-[#0a0a0a] mb-6">${content}</h1>`)
      } else if (level === 2) {
        html.push(`<h2 class="text-2xl md:text-[30px] font-semibold tracking-tight text-[#0a0a0a] mt-10 mb-4">${content}</h2>`)
      } else if (level === 3) {
        html.push(`<h3 class="text-xl md:text-2xl font-semibold text-[#0a0a0a] mt-8 mb-3">${content}</h3>`)
      } else {
        html.push(`<h${level} class="text-lg font-semibold text-[#0a0a0a] mt-6 mb-2">${content}</h${level}>
`)
      }

      continue
    }

    const listMatch = line.match(/^-\s+(.+)$/)
    if (listMatch) {
      flushParagraph()
      listItems.push(listMatch[1])
      continue
    }

    paragraphBuffer.push(line)
  }

  flushParagraph()
  flushList()

  return html.join("\n")
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
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <section className="flex-1 max-w-4xl mx-auto w-full px-6 py-16 md:py-20">
        <p className="text-sm text-[#6b6b6b] mb-8">
          <span className="font-medium text-[#0a0a0a]">Last Updated:</span> {lastUpdated}
        </p>
        <article dangerouslySetInnerHTML={{ __html: html }} />
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
      <Footer />
    </main>
  )
}
