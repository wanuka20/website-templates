import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "WebsiteTemplates — Ready-Made Business Websites",
    template: "%s | WebsiteTemplates",
  },
  description:
    "Professional, ready-made website templates for small businesses. Gym, salon, restaurant, tuition, and real estate templates built with Next.js 16.",
  keywords: [
    "website templates",
    "business website",
    "nextjs templates",
    "small business website",
    "gym website",
    "salon website",
    "restaurant website",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "WebsiteTemplates",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="website-templates-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
