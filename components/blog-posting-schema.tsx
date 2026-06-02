import { SITE_NAME, SITE_URL } from "@/lib/site-config"

type BlogPostingSchemaProps = {
  title: string
  description: string
  url: string
  publishedAt: string
  modifiedAt?: string
  image?: string
}

const publisher = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo/colytics-logo-side.svg`,
  },
}

export function BlogPostingSchema({
  title,
  description,
  url,
  publishedAt,
  modifiedAt = publishedAt,
  image,
}: BlogPostingSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: {
      "@type": "Person",
      name: "Gaurav Sharma",
    },
    publisher,
    ...(image
      ? {
          image: [image],
        }
      : {}),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
