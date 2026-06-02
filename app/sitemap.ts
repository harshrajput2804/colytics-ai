import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site-config"

export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const baseUrl = SITE_URL

  return [
    { url: baseUrl, lastModified },
    { url: `${baseUrl}/blog`, lastModified },
    { url: `${baseUrl}/blog/aeo-vs-seo`, lastModified },
    { url: `${baseUrl}/blog/marketing-automation-guide`, lastModified },
    { url: `${baseUrl}/blog/performance-marketing-metrics`, lastModified },
    { url: `${baseUrl}/blog/content-strategy-2026`, lastModified },
    { url: `${baseUrl}/blog/best-ai-ad-generators`, lastModified },
    { url: `${baseUrl}/privacy-policy`, lastModified },
    { url: `${baseUrl}/terms-of-service`, lastModified },
    { url: `${baseUrl}/cookie-policy`, lastModified },
  ]
}