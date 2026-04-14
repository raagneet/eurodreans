import { HeroSection } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTA";

export default function MastersInItaly() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Pursue your <span className="text-gradient">Master's in Italy</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Specialized Master's degrees completely in English. Access DSU Scholarships and start your global career across Europe.</p>
      </div>
      <HeroSection />
      <CTASection />
    </div>
  );
}
