import { HeroSection } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTA";

export default function ItalyScholarships() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Complete Guide to <span className="text-gradient">Italy Scholarships</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Get comprehensive coverage on DSU, EDISU, ER.GO and regional scholarships in Italy offering tuition waivers, stipends, and free accommodation.</p>
      </div>
      <HeroSection />
      <CTASection />
    </div>
  );
}
