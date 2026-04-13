import { Layout } from "@/components/layout";
import { FAQSection } from "@/components/sections";
import { SEOHead } from "@/components/common";

export default function FAQPage() {
  return (
    <Layout>
      <SEOHead
        title="Aqua Remodeling LLC - FAQ"
        description="Frequently asked questions about remodeling, permits and South Florida renovation services."
        pathname="/faq"
      />
      <FAQSection />
    </Layout>
  );
}
