import {
  AboutSection,
  CaseStudySection,
  ClientFitSection,
  ContactSection,
  HeroSection,
  PricingSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
  WhyHireMeSection,
} from "@/components/site/sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CaseStudySection />
      <WhyHireMeSection />
      <TestimonialsSection />
      <PricingSection />
      <ClientFitSection />
      <ContactSection />
    </>
  );
}
