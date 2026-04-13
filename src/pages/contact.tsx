import { Layout } from "@/components/layout";
import { ContactSection } from "@/components/sections";
import { SEOHead } from "@/components/common";

export default function ContactPage() {
  return (
    <Layout>
      <SEOHead
        title="Aqua Remodeling LLC - Contact"
        description="Contact Aqua Remodeling LLC for South Florida renovation quotes, permit coordination and bilingual project support."
        pathname="/contact"
      />
      <ContactSection isHomePage={false} />
    </Layout>
  );
}
