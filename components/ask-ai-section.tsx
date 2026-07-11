import { Check, Sparkles } from "lucide-react"
import { AskAiMockup } from "@/components/ask-ai-mockup"
import EarlyAccessTrigger from "@/components/early-access-trigger"

export function AskAiSection() {
  return (
    <section id="ask-ai" className="enhanced-surface section-spacing border-t border-[#e8e8e8] bg-transparent">
      <div className="mx-auto max-w-6xl min-w-0">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2">
          <div className="max-w-xl order-1">
            <p className="section-label mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1.5 text-[#A87C1B]">
              <Sparkles className="h-3.5 w-3.5" />
              ASK AI
            </p>
            <h2 className="heading-2-compact mb-4">
              Don&apos;t read the dashboard.{" "}
              <span className="font-semibold text-[#A87C1B]">
                Ask It
              </span>{" "}
            </h2>
            <p className="text-body mb-6">
              Every chart, score and alert has an{" "}
              <span className="rounded-md bg-[#D4AF37]/10 px-1.5 py-0.5 font-bold text-[#A87C1B]">
                Ask AI
              </span>{" "}
              button. It explains what you are seeing, why it changed, and the best next move, in plain language.
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
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0a0a0a] px-8 py-4 text-[14px] font-medium !text-white transition-colors hover:bg-[#0a0a0a]/90 w-full sm:w-auto min-h-11"
            />
          </div>

          <div className="order-2 min-w-0">
            <AskAiMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
