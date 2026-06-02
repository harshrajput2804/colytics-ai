import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { VisualEnhancements } from "@/components/visual-enhancements"
import { SITE_NAME, SITE_URL } from "@/lib/site-config"

const entityStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo/colytics-logo-side.svg`,
      },
      email: "hello@colytics.ai",
      description:
        "Colytics AI is an AI visibility and AEO intelligence platform for tracking brand citations, diagnosing AI search visibility gaps, and improving answer engine optimization.",
      knowsAbout: [
        "AI visibility",
        "Answer Engine Optimization",
        "AI citation tracking",
        "LLM visibility",
        "AI search visibility",
        "Technical SEO",
        "Structured data",
      ],
      makesOffer: {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: SITE_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: SITE_URL,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      about: {
        "@id": `${SITE_URL}/#software`,
      },
      inLanguage: "en",
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Colytics AI — The AI Visibility & AEO Intelligence Platform",
  description:
    "Colytics AI shows why AI and Google ignore your brand—and fixes it. Get cited across 9 AI engines. Free during early access.",
  keywords:
    "AI visibility, AEO, AI citation tracking, answer engine optimization, Google AI Overviews, AI search visibility, LLM visibility, AI SEO",
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entityStructuredData) }} />
        <link rel="icon" href="/logo/colytics-logo-favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <VisualEnhancements />
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  )
}
