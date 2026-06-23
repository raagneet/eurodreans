import { HeroSection } from "@/components/sections/Hero";
import { UniversityMarquee } from "@/components/sections/UniversityMarquee";
import { WhyStudyInItalySection } from "@/components/sections/WhyStudyInItaly";
import { SocialMediaSection } from "@/components/sections/SocialMedia";
import { RoadmapSection } from "@/components/sections/Roadmap";
import { PricingSection } from "@/components/sections/Pricing";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolution";
import { ContactUsSection } from "@/components/sections/ContactUs";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <HeroSection />
      <UniversityMarquee />
      <WhyStudyInItalySection />
      <SocialMediaSection />
      <TestimonialsSection />
      <RoadmapSection />
      <PricingSection />
      <ProblemSolutionSection />
      <ContactUsSection />
    </div>
  );
}
