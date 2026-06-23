"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Star, GraduationCap, ArrowRight, PlayCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { EligibilityPopup } from "@/components/ui/EligibilityPopup";

const bgImages = [
  "/images/italy_hero_new.png",
  "/images/italy_education_hero.png",
  "/italy_campus.png",
  "/hero_italy.png"
];

const fgImages = [
  "/images/italy_education_cinematic.png",
  "/images/italy/student_life_italy.png",
  "/images/italy/about_italy.png",
  "/images/italy/italy_library_students.png"
];

export function HeroSection() {
  const { openBookCall } = useModal();
  const [showEligibility, setShowEligibility] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // 🛠️ TWEAK THESE VALUES TO MOVE THE BACKGROUND GIRL 🛠️
  const bgZoom = 1.0;     // 1.0 is normal, 1.2 is zoomed in 20%
  const bgMoveX = "5%";   // Move left/right (e.g. "10%", "-50px")
  const bgMoveY = "2.5%";   // Move up/down (e.g. "5%", "-20px")
  // ----------------------------------------------------

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full pt-28 pb-28 lg:pt-36 lg:pb-36 flex flex-col justify-center overflow-hidden bg-slate-900"
    >
      <EligibilityPopup isOpen={showEligibility} onClose={() => setShowEligibility(false)} />

      {/* Full Bleed Static Background Image */}
      <div className="absolute inset-0 z-0">
        {/* White background behind the girl */}
        <div className="absolute inset-0 bg-white" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        >
          <Image
            src="/girl.png"
            alt="Italian Education Campus"
            fill
            unoptimized
            className="object-cover"
            style={{
              objectPosition: "0% 50%",
              transform: `scale(${bgZoom}) translate(${bgMoveX}, ${bgMoveY})`,
              transformOrigin: "left center",
            }}
            priority
          />
        </motion.div>
      </div>

      {/* Left-Aligned Content Container */}
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-20 h-full flex flex-col items-start justify-center text-left">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-[2px] w-8 bg-orange-600 rounded-full" />
          <span className="text-orange-600 font-extrabold tracking-widest uppercase text-xs sm:text-sm">
            INDIA'S LEADING ITALY EDUCATION EXPERTS.
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1] max-w-3xl"
        >
          Study in{" "}
          <span className="relative inline-block group cursor-pointer">
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic pr-4 transition-all duration-300 group-hover:scale-105 inline-block origin-left">
              Italy
            </span>
            <span className="absolute bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-[90%]" />
          </span>
          <br />
          <span className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] text-slate-800 mt-3 block font-extrabold tracking-tight">
            with{" "}
            <span className="relative inline-block group cursor-pointer">
              <span className="text-blue-600 transition-colors duration-300 group-hover:text-indigo-600">
                100% Scholarship
              </span>
              <span className="absolute bottom-1 left-0 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-6">
            Eurodreams is offering FREE ITALIAN and FREE IELTS Classes to all Registered Students.
            <br />
            <br />
            Admissions are open for September 2027 Intake
          </p>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {[
              "Free Education",
              "€8000 Scholarship",
              "No Tuition fee",
              "Top Public Universities"
            ].map((feature, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-700 text-xs sm:text-sm font-bold shadow-sm backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
                {feature}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-start w-full sm:w-auto gap-5 mb-16"
        >
          <button
            onClick={() => setShowEligibility(true)}
            className="inline-flex items-center justify-center h-14 px-10 text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-0 rounded-full w-full sm:w-auto gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 group"
          >
            Check Eligibility
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <a
            href="https://api.whatsapp.com/send/?phone=916267332364"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-8 text-lg bg-slate-50 border border-slate-200/80 text-slate-700 font-bold hover:bg-white hover:text-slate-900 hover:border-slate-300 hover:scale-105 active:scale-95 shadow-sm transition-all duration-300 rounded-full w-full sm:w-auto gap-3 group"
          >
            <svg className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Social Proof Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-start gap-6"
        >
          <div className="flex -space-x-3">
            {[
              "/thumbnails/student1.png",
              "/thumbnails/student2.png",
              "/thumbnails/student4.png",
              "/thumbnails/student3.png",
            ].map((src, i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-white/10 overflow-hidden relative shadow-lg transition-transform duration-300 hover:-translate-y-1.5 hover:z-20 cursor-pointer">
                <Image src={src} alt="student" fill className="object-cover" sizes="48px" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[11px] font-bold text-white z-10 shadow-lg transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer">
              500+
            </div>
          </div>
          <div className="text-sm font-medium text-slate-600 text-center sm:text-left leading-tight">
            Trusted by 15,000+ students <br /> admitted at top universities
          </div>
        </motion.div>
      </div>
    </section>
  );
}
