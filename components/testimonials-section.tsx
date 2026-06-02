import EarlyAccessTrigger from "@/components/early-access-trigger"

const testimonials = [
  {
    quote:
      "Our agency added AI citation analysis to every client retainer. Three clients expanded scope in the first month. Colytics gave us the data to have conversations that SEMrush never could.",
    name: "A. Rivera",
    company: "Founder, SEO Agency",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202025%2C%2011_35_19%20AM-z4zSRLsbOQDp7MJS1t8EXmGNB6Al9Z.png",
  },
  {
    quote:
      "We finally had data to prove to our CMO that rankings alone were not enough. Colytics showed exactly where our competitors were being cited and we were not, and why.",
    name: "J. Park",
    company: "SEO Lead, B2B SaaS",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202025%2C%2010_54_18%20AM-nbiecp92QNdTudmCrHr97uekrIPzCP.png",
  },
  {
    quote:
      "As a solo consultant, I replaced six tools with one. Colytics gives me clarity on exactly what to write next and how to structure it for AI citation. It is the edge I needed.",
    name: "S. Mehta",
    company: "Independent Consultant",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202025%2C%2011_01_05%20AM-TBOe92trRxKn4G5So1m9D2h7LRH4PG.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="enhanced-surface border-t border-[#e8e8e8] bg-transparent px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="section-label mb-5">Early Access Feedback</p>
          <h2 className="font-serif text-[32px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a] sm:text-[42px] md:text-[52px]">
            What founding teams are saying.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="flex h-full flex-col rounded-2xl border border-[#e8e8e8] bg-white p-5 shadow-sm">
              <img src={testimonial.image} alt={testimonial.name} loading="lazy" className="mb-6 h-28 w-28 rounded-2xl object-cover shadow-md" />
              <blockquote className="flex-1">
                <p className="font-serif text-xl leading-relaxed text-[#0a0a0a]">&quot;{testimonial.quote}&quot;</p>
              </blockquote>
              <footer className="mt-6 border-t border-[#e8e8e8] pt-4">
                <div className="font-medium text-[#0a0a0a]">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </footer>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
          <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
            <p className="flex-1 text-[15px] leading-relaxed text-[#737373]">
              Join the early users shaping the product. Your feedback ships.
            </p>
            <EarlyAccessTrigger
              label="Get early access"
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#0a0a0a] px-8 py-4 text-[14px] font-medium text-white transition-colors hover:bg-[#0a0a0a]/90 sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
