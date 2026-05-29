"use client"

import Link from "next/link"
import { ArrowRight, CalendarDays, Clock3, FileText, Facebook, Instagram, Sparkles, Linkedin, Twitter } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

export type TocItem = {
  id: string
  label: string
  children?: TocItem[]
}

type BlogPostShellProps = {
  category: string
  title: string
  excerpt: string
  publishedAt: string
  readTime: string
  author?: string
  authorRole?: string
  authorBio?: string
  authorImage?: string
  toc: TocItem[]
  floatingTitle?: string
  floatingDescription?: string
  floatingLinkHref?: string
  floatingLinkLabel?: string
  children: React.ReactNode
}

function flattenToc(items: TocItem[]): TocItem[] {
  return items.flatMap((item) => [item, ...(item.children ? flattenToc(item.children) : [])])
}

export function BlogPostShell({
  category,
  title,
  excerpt,
  publishedAt,
  readTime,
  author = "Gaurav Sharma",
  authorRole = "Founder and CEO at Attrock",
  authorBio = "Gaurav Sharma is the Founder and CEO of Attrock, a results-driven digital marketing company. Grew an agency from 5-figure to 7-figure revenue in just two years | 10X leads | 2.8X conversions | 300K organic monthly traffic | 5K keywords on page 1. He also contributes to top publications like HuffPost, Adweek, Business2Community, TechCrunch, and more.",
  authorImage = "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://attrock.com/wp-content/uploads/2021/08/grv.png",
  toc,
  floatingTitle = "Need help turning this into results?",
  floatingDescription = "Use Colytics AI to turn strategy into pages, campaigns, and content that ship faster.",
  floatingLinkHref = "/contact",
  floatingLinkLabel = "Talk to us",
  children,
}: BlogPostShellProps) {
  const [heroLeft, setHeroLeft] = useState(false)
  const [authorReached, setAuthorReached] = useState(false)
  const [activeSection, setActiveSection] = useState(toc[0]?.id ?? "")

  const formattedDate = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(publishedAt)),
    [publishedAt],
  )

  useEffect(() => {
    const heroElement = document.getElementById("blog-post-hero")
    const authorElement = document.getElementById("blog-post-author")
    const sectionElements = toc
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element))

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: "-18% 0px -68% 0px",
        threshold: 0.01,
      },
    )

    sectionElements.forEach((element) => sectionObserver.observe(element))

    const heroObserver = heroElement
      ? new IntersectionObserver(
          ([entry]) => {
            setHeroLeft(!entry.isIntersecting)
          },
          { threshold: 0.2 },
        )
      : null

    if (heroElement && heroObserver) {
      heroObserver.observe(heroElement)
    }

    const authorObserver = authorElement
      ? new IntersectionObserver(
          ([entry]) => {
            if (entry.boundingClientRect.top <= window.innerHeight) {
              setAuthorReached(true)
            }
            if (entry.boundingClientRect.top > window.innerHeight) {
              setAuthorReached(false)
            }
          },
          { threshold: 0 },
        )
      : null

    if (authorElement && authorObserver) {
      authorObserver.observe(authorElement)
    }

    return () => {
      sectionObserver.disconnect()
      heroObserver?.disconnect()
      authorObserver?.disconnect()
    }
  }, [toc])

  useEffect(() => {
    const tocElement = document.getElementById("toc-list")
    if (!tocElement) return

    const onWheel = (event: WheelEvent) => {
      if (tocElement.scrollHeight <= tocElement.clientHeight) return
      const delta = event.deltaY
      const atTop = tocElement.scrollTop === 0
      const atBottom = Math.ceil(tocElement.scrollTop + tocElement.clientHeight) >= tocElement.scrollHeight

      if ((delta > 0 && !atBottom) || (delta < 0 && !atTop)) {
        event.preventDefault()
        tocElement.scrollTop += delta
      }
    }

    let startY = 0
    const onTouchStart = (event: TouchEvent) => {
      startY = event.touches[0].clientY
    }
    const onTouchMove = (event: TouchEvent) => {
      if (tocElement.scrollHeight <= tocElement.clientHeight) return
      const currentY = event.touches[0].clientY
      const deltaY = startY - currentY
      const atTop = tocElement.scrollTop === 0
      const atBottom = Math.ceil(tocElement.scrollTop + tocElement.clientHeight) >= tocElement.scrollHeight

      if ((deltaY > 0 && !atBottom) || (deltaY < 0 && !atTop)) {
        event.preventDefault()
        tocElement.scrollTop += deltaY
        startY = currentY
      }
    }

    tocElement.addEventListener("wheel", onWheel as EventListener, { passive: false })
    tocElement.addEventListener("touchstart", onTouchStart as EventListener, { passive: true })
    tocElement.addEventListener("touchmove", onTouchMove as EventListener, { passive: false })

    return () => {
      tocElement.removeEventListener("wheel", onWheel as EventListener)
      tocElement.removeEventListener("touchstart", onTouchStart as EventListener)
      tocElement.removeEventListener("touchmove", onTouchMove as EventListener)
    }
  }, [])

  function renderToc(items: TocItem[], level = 0) {
    return items.map((item) => {
      const isActive = activeSection === item.id
      const isParentActive = item.children ? flattenToc(item.children).some((child) => child.id === activeSection) : false

      return (
        <div key={item.id}>
          <a href={`#${item.id}`} className={`flex items-start gap-3 ${level === 0 ? "py-2" : "py-1"}`}>
            <span
              className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                isActive ? "bg-emerald-500" : isParentActive ? "bg-emerald-400" : "bg-muted-foreground"
              }`}
            />
            <span className={`block text-sm ${level === 0 ? "font-medium text-[#0a0a0a]" : "ml-1 text-sm text-muted-foreground"}`}>
              {item.label}
            </span>
          </a>
          {item.children ? <div className="ml-5 mt-1 space-y-1">{renderToc(item.children, level + 1)}</div> : null}
        </div>
      )
    })
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#0a0a0a]">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(21,73,240,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20">
          <div className="mx-auto max-w-5xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand/80">
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to blog
            </Link>

            <div
              id="blog-post-hero"
              className="mt-6 w-full rounded-4xl bg-[#0a0a0a] px-6 py-10 text-center text-white shadow-[0_25px_80px_rgba(0,0,0,0.18)] sm:px-10 sm:py-14 lg:px-16 lg:py-16"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <Sparkles className="h-4 w-4" />
                {category}
              </div>
              <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">{excerpt}</p>

              <div className="mt-8 grid gap-3 text-sm text-white/85 sm:grid-cols-3 lg:grid-cols-3 lg:gap-6">
                <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-sm">
                  <CalendarDays className="h-4 w-4 text-white" />
                  <span>Published: {formattedDate}</span>
                </div>
                <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-sm">
                  <Clock3 className="h-4 w-4 text-white" />
                  <span>{readTime} read</span>
                </div>
                <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-sm">
                  <Sparkles className="h-4 w-4 text-white" />
                  <span>By {author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid items-start gap-5 lg:grid-cols-[240px_minmax(0,1fr)_300px] lg:gap-4 xl:gap-8">
          <aside className="hidden lg:block lg:left-0" style={{}}>
            <div
              style={{ position: "fixed", top: "7rem", left: "calc(50% - 640px)", width: 240 }}
              className={`rounded-3xl border border-border bg-white/90 p-5 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur lg:z-50 flex min-h-0 flex-col transition-all duration-700 ease-out ${
                heroLeft && !authorReached ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0a0a0a]">
                <FileText className="h-4 w-4 text-brand" />
                Table of contents
              </div>
              <div id="toc-list" className="mt-5 flex-1 min-h-0 max-h-[70vh] space-y-2 overflow-y-auto pr-1">
                {renderToc(toc)}
              </div>
            </div>
          </aside>

          <article className="min-w-0 lg:pr-3">{children}</article>

          <aside className={`hidden lg:block transition-all duration-700 ease-out ${heroLeft ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div style={{ position: "fixed", top: "7rem", right: "calc(50% - 640px)", width: 300 }} className="h-full rounded-3xl border border-border bg-white p-5 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
              <p className="section-label">Floating panel</p>
              <div className="mt-3 rounded-2xl bg-[#0f172a] p-5 text-white">
                <p className="text-sm font-medium text-white/70">{floatingTitle}</p>
                <p className="mt-2 text-lg font-semibold leading-7">{floatingDescription}</p>
                <Link href={floatingLinkHref} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-colors hover:text-white">
                  {floatingLinkLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <section id="blog-post-author" className="mt-14 rounded-4xl border border-border bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
            <div className="mx-auto shrink-0 overflow-hidden rounded-3xl border border-border bg-[#f8f8fb] lg:mx-0 lg:w-60">
              <img src={authorImage} alt={author} className="h-full w-full object-cover" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="section-label">Author</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0a0a0a]">{author}</h2>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{authorRole}</p>
                </div>

                <div className="flex items-center gap-5 text-[#0a0a0a]">
                  <Link href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-colors hover:text-brand">
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <Link href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-brand">
                    <Instagram className="h-4 w-4" />
                  </Link>
                  <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-brand">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                  <Link href="https://www.twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="transition-colors hover:text-brand">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-[15px] leading-7 text-[#1f2937] sm:text-base sm:leading-8">
                {authorBio}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}