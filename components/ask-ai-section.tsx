import { Check } from "lucide-react"
import { AskAiMockup } from "@/components/ask-ai-mockup"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function AskAiSection() {
  return (
    <section id="ask-ai" className="enhanced-surface border-t border-[#e8e8e8] bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="section-label mb-5">ASK AI</p>
            <h2 className="mb-4 font-serif text-[32px] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a] md:text-[40px]">
              Don&apos;t read the dashboard. Ask it.
            </h2>
            <p className="mb-6 text-[16px] leading-relaxed text-muted-foreground">
              Every chart, score and alert has an Ask AI button. It explains what you are seeing, why it changed, and the best next move, in plain language.
            </p>

            <ul className="mb-8 space-y-3">
              {["Plain-language answers on any screen", "Tells you the why and the next action", "No training, no manual"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#525252]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <EarlyAccessTrigger
              label="Ask your first question"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-[#0a0a0a] px-8 py-4 text-[14px] font-medium text-white transition-colors hover:bg-[#0a0a0a]/90"
            />
          </div>

          <AskAiMockup />
        </div>
      </div>
    </section>
  )
}
