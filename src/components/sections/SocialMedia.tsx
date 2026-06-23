"use client";

import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

function AnimatedCounter({ end, suffix = "", duration = 2.5, decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeOut = 1 - Math.pow(1 - progress, 4); // easeOutQuart
        setCount(easeOut * end);
        if (progress < 1) {
          window.requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };
      window.requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  const displayCount = count.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref}>
      {displayCount}
      {suffix}
    </span>
  );
}

function VideoEmbed() {
  const ref = useRef(null);
  // Triggers when the top of the video is slightly in view
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <div ref={ref} className="relative w-full aspect-video rounded-[1.5rem] overflow-hidden bg-slate-900 shadow-lg">
      {isInView && (
        <iframe 
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/lp4sKuTmFsQ?start=35&autoplay=1&mute=1" 
          title="Indian Student in Italy" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export function SocialMediaSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-medium text-slate-900 mb-10 text-center"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          India's Largest Social Media Platform
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full bg-[#185c99] rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
        >
          {/* Left Side: Video */}
          <div className="w-full lg:w-[72%] p-3 md:p-4 lg:p-5">
            <VideoEmbed />
          </div>

          {/* Right Side: Stats */}
          <div className="w-full lg:w-[28%] flex flex-col justify-center px-6 py-10 lg:py-0 lg:pr-8 gap-8">
            
            {/* Google Reviews */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6"
            >
              <div className="flex-shrink-0 flex flex-col items-center justify-center gap-1 w-14 text-yellow-400">
                <div className="text-[44px] font-black leading-none -mt-2 tracking-tighter" style={{ fontFamily: "serif" }}>G</div>
                <div className="flex gap-0.5 mt-[-4px]">
                  <Star className="w-[12px] h-[12px] fill-current" />
                  <Star className="w-[12px] h-[12px] fill-current" />
                  <Star className="w-[12px] h-[12px] fill-current" />
                </div>
              </div>
              <div>
                <div className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-1">
                  <AnimatedCounter end={1621} />
                </div>
                <div className="text-white text-base md:text-lg font-medium">Google Reviews</div>
              </div>
            </motion.div>

            {/* YouTube */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-14 text-[#ff0000]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div>
                <div className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-1">
                  <AnimatedCounter end={452} suffix="K" />
                </div>
                <div className="text-white text-base md:text-lg font-medium">Youtube Subscribers</div>
              </div>
            </motion.div>

            {/* Instagram */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 ml-1 rounded-[14px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              <div className="pl-1">
                <div className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-1">
                  <AnimatedCounter end={15.3} suffix="K" decimals={1} />
                </div>
                <div className="text-white text-base md:text-lg font-medium">Instagram Followers</div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
