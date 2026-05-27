export function TheShiftSection() {
  return (
    <section className="py-20 md:py-28 px-6" style={{ backgroundColor: '#1B1D21' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Large stat number */}
          <div>
            <div 
              className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-4"
              style={{ 
                color: '#C9A227', 
                fontFamily: "'DM Mono', monospace",
                letterSpacing: '-0.02em'
              }}
            >
              58%
            </div>
            <p className="text-xs md:text-sm" style={{ color: '#8F9399', fontFamily: "'Helvetica', sans-serif" }}>
              Source: Colytics AI Analysis 2025
            </p>
          </div>

          {/* Section Headline */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl"
            style={{ color: '#FDFDFD', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.01em' }}
          >
            of Informational Queries Now Get Answered by AI — Without a Click.
          </h2>

          {/* Body Copy */}
          <div className="max-w-2xl space-y-6" style={{ fontFamily: "'Helvetica', sans-serif" }}>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#CCD1D5' }}
            >
              Search is no longer about rankings. AI assistants synthesize answers from sources they trust. If your content is not structured, extractable, and citation-ready, your brand disappears from the answers your customers are reading — even when you rank on page one of Google.
            </p>
            <p 
              className="text-base md:text-lg leading-relaxed font-bold"
              style={{ color: '#C9A227' }}
            >
              The question is no longer "do we rank?" It is "do we get cited?"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
