export function StatsSection() {
  return (
    <section className="w-full px-6 py-20 md:py-28" style={{ backgroundColor: '#1B1D21' }}>
      <div className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center text-center">
        <div className="mb-8 md:mb-10">
          <div
            className="text-[88px] leading-none md:text-[120px] lg:text-[144px]"
            style={{
              color: '#C9A227',
              fontFamily: "'DM Mono', monospace",
              letterSpacing: '-0.06em',
            }}
          >
            58%
          </div>
          <p className="mt-4 text-xs md:text-sm" style={{ color: '#8F9399', fontFamily: "'Helvetica', sans-serif" }}>
            Source: Colytics AI Analysis 2025
          </p>
        </div>

        <h2
          className="max-w-4xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
          style={{ color: '#FDFDFD', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.01em' }}
        >
          of Informational Queries Now Get Answered by AI — Without a Click.
        </h2>

        <div className="mt-8 max-w-3xl space-y-6">
          <p className="text-base leading-relaxed md:text-lg" style={{ color: '#CCD1D5', fontFamily: "'Helvetica', sans-serif" }}>
            Search is no longer about rankings. AI assistants synthesize answers from sources they trust. If your content is not structured, extractable, and citation-ready, your brand disappears from the answers your customers are reading — even when you rank on page one of Google.
          </p>
          <p className="text-base leading-relaxed md:text-lg" style={{ color: '#C9A227', fontFamily: "'Helvetica', sans-serif" }}>
            The question is no longer “do we rank?” It is “do we get cited?”
          </p>
        </div>
      </div>
    </section>
  )
}
