"use client";

import { motion } from "framer-motion";

const universities = [
  { name: "Sapienza University of Rome", logo: "/s/1.jpg" },
  { name: "University of Bologna", logo: "/s/2.jpg" },
  { name: "Polytechnic of Milan", logo: "/s/3.jpg" },
  { name: "University of Milan", logo: "/s/4.jpg" },
  { name: "University of Turin", logo: "/s/5.jpg" },
  { name: "University of Florence", logo: "/s/6.jpg" },
  { name: "University of Naples Federico II", logo: "/s/7.jpg" },
  { name: "University of Genoa", logo: "/s/8.jpg" },
];

export function UniversityMarquee() {
  const duplicatedUniversities = [...universities, ...universities];

  return (
    <section className="w-full bg-white/50 backdrop-blur-md border-y border-blue-100/50 py-10 overflow-hidden relative z-20">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
          Italy's Top Public Universities
        </p>
      </div>

      <div className="flex overflow-hidden relative w-full group">
        {/* Left Gradient Fade */}
        <div className="absolute top-0 left-0 h-full w-12 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
          className="flex whitespace-nowrap w-max items-center"
        >
          {duplicatedUniversities.map((uni, idx) => {
            const isWhiteLogo =
              uni.logo.includes("logo_orizzontale_WHITE.svg") ||
              uni.logo.includes("logo (1).svg") ||
              uni.logo.includes("LogoHeader.svg");

            return (
              <div
                key={idx}
                className="flex items-center gap-5 text-slate-700 font-bold text-lg md:text-xl opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 pr-16 sm:pr-24"
              >
                <div className="relative w-28 h-16 md:w-36 md:h-20 flex items-center justify-center bg-white rounded-2xl p-2.5 shadow-md border border-slate-100 shrink-0">
                  {/* Fallback chain: Icon.horse -> UI Avatars */}
                  <img
                    src={uni.logo}
                    alt={`${uni.name} Logo`}
                    className={`max-h-full max-w-full object-contain transition-all duration-300 ${
                      isWhiteLogo ? "brightness-0 hover:brightness-0" : ""
                    }`}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('ui-avatars.com')) {
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(uni.name)}&background=0D8ABC&color=fff&rounded=true&bold=true`;
                      }
                    }}
                  />
                </div>
                <span>{uni.name}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Right Gradient Fade */}
        <div className="absolute top-0 right-0 h-full w-12 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
