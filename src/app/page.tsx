import { HeroSection } from "@/components/sections/Hero";
import { SocialProofSection } from "@/components/sections/SocialProof";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolution";
import { ServicesSection } from "@/components/sections/Services";
import { HowItWorksSection } from "@/components/sections/HowItWorks";
import { LeadMagnetSection } from "@/components/sections/LeadMagnet";
import { DashboardPreviewSection } from "@/components/sections/DashboardPreview";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <SocialProofSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <HowItWorksSection />
      <LeadMagnetSection />
      <DashboardPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
