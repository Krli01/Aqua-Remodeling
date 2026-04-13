import { Layout } from "@/components/layout";
import { ServicesSection } from "@/components/sections";
import { SEOHead } from "@/components/common";

export default function ServicesPage() {
  return (
    <Layout>
      <SEOHead
        title="Aqua Remodeling LLC - Services"
        description="Browse Aqua Remodeling LLC's South Florida remodeling services for bathrooms, kitchens, painting, plumbing, and general contracting."
        pathname="/services"
      />
      <ServicesSection />
    </Layout>
  );
}
