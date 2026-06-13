import type { Metadata } from "next";
import type { SEOConfig } from "@/types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://websitetemplates.vercel.app";

export function generateMetadata(
  config: SEOConfig,
  path: string = "/"
): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url,
      siteName: "WebsiteTemplates",
      images: config.ogImage
        ? [
            {
              url: config.ogImage,
              width: 1200,
              height: 630,
              alt: config.title,
            },
          ]
        : [],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateBusinessSchema(business: {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  type: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": business.type,
    name: business.name,
    description: business.description,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.city,
    },
    url: SITE_URL,
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  price: number;
  currency: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency,
      availability: "https://schema.org/InStock",
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
