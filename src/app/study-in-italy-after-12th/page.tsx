import { HeroSection } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTA";

export default function StudyInItalyAfter12th() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Study in Italy <span className="text-gradient">After 12th</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Discover bachelors programs in English across top Italian Public Universities. No IELTS required for specific courses.</p>
      </div>
      <HeroSection />
      <CTASection />
    </div>
  );
}
