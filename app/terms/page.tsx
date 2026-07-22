import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { generateStaticMetadata } from "@/lib/seo";

export const metadata = generateStaticMetadata(
  "Terms of Service | WebsiteTemplates",
  "Preliminary terms-of-service information for WebsiteTemplates.",
  "/terms",
);

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto max-w-3xl flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Preliminary</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-6 text-muted-foreground">
          This page is a temporary placeholder. Reviewed terms of service will be published before WebsiteTemplates accepts live customers.
        </p>
      </main>
      <Footer />
    </div>
  );
}
