import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"

export const metadata: Metadata = {
  title: "Colytics AI — The AI Visibility & AEO Intelligence Platform",
  description:
    "Colytics AI shows why AI and Google ignore your brand—and fixes it. Get cited across 9 AI engines. Free during early access.",
  keywords:
    "AI visibility, AEO, AI citation tracking, answer engine optimization, Google AI Overviews, AI search visibility, LLM visibility, AI SEO",
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
        <link rel="icon" href="/logo/colytics-logo-favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  )
}
