import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyHumanData } from "@/components/home/WhyHumanData";
import { IndustriesPreview } from "@/components/home/IndustriesPreview";
import { Workflow } from "@/components/home/Workflow";
import { Quality } from "@/components/home/Quality";
import { Workforce } from "@/components/home/Workforce";
import { SoutheastAsia } from "@/components/home/SoutheastAsia";
import { CaseStudies } from "@/components/home/CaseStudies";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ServicesPreview />
      <WhyHumanData />
      <IndustriesPreview />
      <Workflow />
      <Quality />
      <Workforce />
      <SoutheastAsia />
      <CaseStudies />
      <TrustSection />
      <CTASection />
    </>
  );
}
