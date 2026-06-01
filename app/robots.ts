import type { MetadataRoute } from "next"

export const revalidate = false

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://colytics-ai-amber.vercel.app/sitemap.xml",
  }
}