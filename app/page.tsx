import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyHumanData } from "@/components/home/WhyHumanData";
import { IndustriesPreview } from "@/components/home/IndustriesPreview";
import { Workflow } from "@/components/home/Workflow";
import { Quality } from "@/components/home/Quality";
import { Workforce } from "@/components/home/Workforce";
import { SoutheastAsia } from "@/components/home/SoutheastAsia";
// import { CaseStudies } from "@/components/home/CaseStudies"; // hidden until real case studies exist
// import { TrustSection } from "@/components/home/TrustSection"; // hidden until real certifications exist
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
      {/* <CaseStudies /> — re-enable once real, verifiable case studies exist */}
      {/* <TrustSection /> — re-enable once real certifications / compliance standards exist */}
      <CTASection />
    </>
  );
}
