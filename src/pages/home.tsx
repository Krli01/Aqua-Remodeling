import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/sections";
import { ServicesSection } from "@/components/sections";
import { FAQSection } from "@/components/sections";
import { ContactSection } from "@/components/sections";
import { SEOHead } from "@/components/common";

export default function HomePage() {
  return (
    <Layout>
      <SEOHead
        title="Aqua Remodeling LLC - Home"
        description="Aqua Remodeling LLC offers South Florida renovation services for bathrooms, kitchens, plumbing, painting and general contracting with full permit management."
        pathname="/"
      />
      <HeroSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection isHomePage={true} />
    </Layout>
  );
}
