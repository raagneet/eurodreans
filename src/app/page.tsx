import { HeroSection } from "@/components/sections/Hero";
import { SocialProofSection } from "@/components/sections/SocialProof";
import { WhyStudyInItalySection } from "@/components/sections/WhyStudyInItaly";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolution";
import { ServicesSection } from "@/components/sections/Services";
import { HowItWorksSection } from "@/components/sections/HowItWorks";
import { LeadMagnetSection } from "@/components/sections/LeadMagnet";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQ";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <HeroSection />
      <SocialProofSection />
      <WhyStudyInItalySection />
      <ProblemSolutionSection />
      <ServicesSection />
      <HowItWorksSection />
      <LeadMagnetSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}
