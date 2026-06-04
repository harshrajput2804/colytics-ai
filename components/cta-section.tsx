"use client"

import { useEffect, useRef, useState } from "react"
import EarlyAccessTrigger from "./early-access-trigger"

export function CtaSection() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px"
      }
    )
    if (cardRef.current) {
      observer.observe(cardRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section id="cta" className="py-24 px-6 bg-white relative overflow-hidden border-t border-neutral-100">
      {/* Background glowing effects to match the premium design */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#BF953F]/3 blur-[120px] pointer-events-none" />

      {/* Outer container */}
      <div className="max-w-5xl mx-auto">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .cta-black-card {
                position: relative;
                background:
                  radial-gradient(
                    circle at 85% 50%,
                    rgba(212,175,55,0.28) 0%,
                    rgba(212,175,55,0.12) 18%,
                    rgba(18,18,18,0.96) 55%,
                    #050505 100%
                  );
                background-color: #050505;

                box-shadow:
                  0 35px 80px rgba(0,0,0,0.45),
                  0 8px 30px rgba(212,175,55,0.06);

                border: 1px solid rgba(212,175,55,0.18);

                transform: perspective(1200px) rotateX(15deg) scale(0.93) translateY(50px);
                opacity: 0.6;

                transition:
                  transform 1.1s cubic-bezier(0.16, 1, 0.3, 1),
                  opacity 1.1s ease-out,
                  border-color 0.5s ease;

                will-change: transform, opacity;
              }

              .cta-black-card::before {
                content: "";
                position: absolute;
                inset: 0;

                background-image:
                  linear-gradient(
                    rgba(255,255,255,0.025) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(255,255,255,0.025) 1px,
                    transparent 1px
                  );

                background-size: 36px 36px;
                pointer-events: none;
              }

              .cta-black-card::after {
                content: "";
                position: absolute;
                inset: 0;

                background:
                  radial-gradient(
                    circle at 80% 70%,
                    rgba(212,175,55,0.15),
                    transparent 40%
                  );

                pointer-events: none;
              }

              .cta-black-card.in-view {
                transform:
                  perspective(1200px)
                  rotateX(0deg)
                  scale(1)
                  translateY(0);

                opacity: 1;
                border-color: rgba(212,175,55,0.32);
              }
            `,
          }}
        />

        {/* The Card itself */}
        <div
          ref={cardRef}
          className={`cta-black-card rounded-[32px] p-8 md:p-14 relative overflow-hidden text-left ${inView ? 'in-view' : ''}`}
        >
          {/* Background Wordmark */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
            <p
              className="hidden sm:block text-center font-serif leading-none text-[#D4AF37]/[0.05] select-none whitespace-nowrap"
              style={{ fontSize: "clamp(80px, 15vw, 200px)" }}
            >
              Colytics AI
            </p>

            <img
              src="/logo/notext.png"
              alt="logo"
              className="w-[280px] sm:w-[480px] md:w-[600px] h-auto block opacity-[0.08]"
            />
          </div>

          {/* Inner details to match the original content */}
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37]">Early Access Open</span>
            </div>

            <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.08] tracking-[-0.03em] text-[#FAFAF8] mb-8">
              Your competitors are already being cited.
            </h2>

            <div className="space-y-4 mb-10">
              {[
                "Discover AI citations your competitors already have",
                "See exactly which LLMs are citing your site",
                "Optimize for AEO and claim your AI visibility",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-[15px] text-[#E8E8E8] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#D4AF37]/15 pt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] text-[#D4AF37] uppercase tracking-widest font-semibold mb-3">Enterprise Ready</p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-white/60">
                  <span>No credit card needed</span>
                  <span>Bank-level encryption</span>
                  <span>GDPR & CCPA compliant</span>
                </div>
              </div>

              <EarlyAccessTrigger
                label="Ask your first question"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 !bg-[#E0B84D] hover:!bg-[#E8C15A] !text-[#0a0a0a] rounded-lg text-button transition-all duration-300 w-full sm:w-auto min-h-11 font-bold shadow-[0_10px_35px_rgba(224,184,77,0.28)] hover:shadow-[0_15px_45px_rgba(224,184,77,0.4)] border border-[#D4AF37]/20 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
