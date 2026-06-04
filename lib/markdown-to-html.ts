function convertInlineMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-[#f3f3f3] text-[0.9em]">$1</code>')
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-[#0a0a0a] underline underline-offset-4" target="_blank" rel="noreferrer">$1</a>',
    )
}

function flushTable(tableLines: string[], html: string[]) {
  if (tableLines.length === 0) return

  const rows = tableLines.filter((line) => line.trim().length > 0)
  if (rows.length < 2) return

  const headerCells = rows[0]
    .split("|")
    .map((cell) => cell.trim())
    .filter((cell) => cell.length > 0)

  let tableHtml = "<table>\n<thead>\n<tr>\n"

  for (const cell of headerCells) {
    tableHtml += `<th>${convertInlineMarkdown(cell)}</th>\n`
  }

  tableHtml += "</tr>\n</thead>\n<tbody>\n"

  for (let i = 2; i < rows.length; i++) {
    const dataCells = rows[i]
      .split("|")
      .map((cell) => cell.trim())
      .filter((cell) => cell.length > 0)
    tableHtml += "<tr>\n"
    for (const cell of dataCells) {
      tableHtml += `<td>${convertInlineMarkdown(cell)}</td>\n`
    }
    tableHtml += "</tr>\n"
  }

  tableHtml += "</tbody>\n</table>"
  html.push(tableHtml)
}

/** Converts markdown policy/legal content to HTML using site typography classes. */
export function markdownToHtml(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n")
  const html: string[] = []
  let paragraphBuffer: string[] = []
  let listItems: string[] = []
  let inTable = false
  let tableLines: string[] = []

  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) return
    html.push(`<p>${convertInlineMarkdown(paragraphBuffer.join(" "))}</p>`)
    paragraphBuffer = []
  }

  const flushList = () => {
    if (listItems.length === 0) return
    html.push(`<ul>${listItems.map((item) => `<li>${convertInlineMarkdown(item)}</li>`).join("")}</ul>`)
    listItems = []
  }

  const flushTableBlock = () => {
    if (!inTable) return
    flushTable(tableLines, html)
    tableLines = []
    inTable = false
  }

  for (let index = 0; index < lines.length; index++) {
    const rawLine = lines[index]
    const line = rawLine.trim()
    const nextLine = lines[index + 1]?.trim() ?? ""

    if (line.includes("|") && (inTable || nextLine.includes("|"))) {
      flushParagraph()
      flushList()
      inTable = true
      tableLines.push(line)
      continue
    }

    if (inTable && !line.includes("|")) {
      flushTableBlock()
    }

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
      html.push(`<h${level}>${content}</h${level}>`)
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
  flushTableBlock()

  return html.join("\n")
}
