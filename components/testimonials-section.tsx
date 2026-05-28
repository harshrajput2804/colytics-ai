"use client"

import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import EarlyAccessTrigger from "@/components/early-access-trigger"

const testimonials = [
  {
    quote: "Our agency added AI citation analysis to every client retainer. Three clients expanded scope in the first month. Colytics gave us the data to have conversations that SEMrush never could.",
    name: "A. Rivera",
    company: "Founder, SEO Agency",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202025%2C%2011_35_19%20AM-z4zSRLsbOQDp7MJS1t8EXmGNB6Al9Z.png",
  },
  {
    quote: "We finally had data to prove to our CMO that rankings alone were not enough. Colytics showed exactly where our competitors were being cited and we weren't — and why.",
    name: "J. Park",
    company: "SEO Lead, B2B SaaS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202025%2C%2010_54_18%20AM-nbiecp92QNdTudmCrHr97uekrIPzCP.png",
  },
  {
    quote: "As a solo consultant, I replaced six tools with one. Colytics gives me clarity on exactly what to write next and how to structure it for AI citation. It is the edge I needed.",
    name: "S. Mehta",
    company: "Independent Consultant",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202025%2C%2011_01_05%20AM-TBOe92trRxKn4G5So1m9D2h7LRH4PG.png",
  },
]

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-28 px-6 bg-white border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto">
        {/* Header - keeping original */}
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-5">Early Access Feedback</p>
          <h2 className="font-serif text-[42px] md:text-[52px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]">
            What founding teams are saying.
          </h2>
        </div>

        {/* Testimonial carousel - current version style */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={testimonials[activeTestimonial].image}
              alt={testimonials[activeTestimonial].name}
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-xl transition-all duration-500"
            />
          </div>
          <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="min-h-[160px] flex items-center mb-6">
              <h3 className="font-serif text-2xl md:text-3xl leading-relaxed text-balance">"{testimonials[activeTestimonial].quote}"</h3>
            </div>
            <div>
              <div className="font-medium">{testimonials[activeTestimonial].name}</div>
              <div className="text-sm text-muted-foreground">{testimonials[activeTestimonial].company}</div>
            </div>
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${idx === activeTestimonial ? 'bg-foreground w-6' : 'bg-muted-foreground/30'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

         <div className="mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[15px] text-[#737373] leading-relaxed flex-1">
               Join the early users shaping the product — your feedback ships.
            </p>
            <EarlyAccessTrigger
              label="Get early access"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white rounded-lg font-medium text-[14px] hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
