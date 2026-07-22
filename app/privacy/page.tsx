import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { generateStaticMetadata } from "@/lib/seo";

export const metadata = generateStaticMetadata(
  "Privacy Policy | WebsiteTemplates",
  "Preliminary privacy-policy information for WebsiteTemplates.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto max-w-3xl flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Preliminary</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-6 text-muted-foreground">
          This page is a temporary placeholder. A reviewed privacy policy will be published before WebsiteTemplates accepts live customers.
        </p>
      </main>
      <Footer />
    </div>
  );
}
