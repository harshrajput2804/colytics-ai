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
  name: "Colytics AI",
  url: "https://colytics-ai-amber.vercel.app",
  logo: {
    "@type": "ImageObject",
    url: "https://colytics-ai-amber.vercel.app/logo/colytics-logo-side.svg",
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
