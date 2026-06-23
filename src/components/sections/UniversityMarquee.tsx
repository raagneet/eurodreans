"use client";

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
    <section className="w-full bg-slate-50/60 backdrop-blur-md border-y border-slate-200/80 py-10 overflow-hidden relative z-20">
      <style>{`
        @keyframes marquee-120 {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee-120 {
          display: flex;
          width: max-content;
          animation: marquee-120 30s linear infinite;
          will-change: transform;
        }
        .group:hover .animate-marquee-120 {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-6 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-3 shadow-sm">
          Partner Institutions
        </div>
        <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
          Italy's Top Public Universities
        </h3>
      </div>

      <div className="flex overflow-hidden relative w-full group">
        <div className="animate-marquee-120 items-center">
          {duplicatedUniversities.map((uni, idx) => {
            const isWhiteLogo =
              uni.logo.includes("logo_orizzontale_WHITE.svg") ||
              uni.logo.includes("logo (1).svg") ||
              uni.logo.includes("LogoHeader.svg");

            return (
              <div
                key={idx}
                className="flex items-center gap-5 text-slate-800 font-extrabold text-sm md:text-base transition-all duration-300 pr-16 sm:pr-24 group/item cursor-pointer"
              >
                <div className="relative w-28 h-16 md:w-36 md:h-20 flex items-center justify-center bg-white rounded-2xl p-3 shadow-md shadow-slate-200/80 border border-slate-200/80 shrink-0 group-hover/item:border-blue-500 group-hover/item:shadow-lg group-hover/item:shadow-blue-500/10 group-hover/item:scale-105 transition-all duration-300">
                  {/* Fallback chain: Icon.horse -> UI Avatars */}
                  <img
                    src={uni.logo}
                    alt={`${uni.name} Logo`}
                    className={`max-h-full max-w-full object-contain transition-all duration-300 ${
                      isWhiteLogo ? "brightness-0" : ""
                    }`}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('ui-avatars.com')) {
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(uni.name)}&background=0D8ABC&color=fff&rounded=true&bold=true`;
                      }
                    }}
                  />
                </div>
                <span className="group-hover/item:text-blue-600 transition-colors duration-300">{uni.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
