import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WebsiteTemplates — Ready-Made Business Websites",
    template: "%s | WebsiteTemplates",
  },
  description:
    "Professional, ready-made website templates for small businesses. Gym, salon, restaurant, tuition, and real estate templates built with Next.js 15.",
  keywords: [
    "website templates",
    "business website",
    "nextjs templates",
    "small business website",
    "gym website",
    "salon website",
    "restaurant website",
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://websitetemplates.vercel.app"
  ),
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
      <body className={`${inter.variable} font-sans antialiased`}>
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
