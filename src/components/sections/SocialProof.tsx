"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { PlayCircle, Award, CheckCircle } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };
      window.requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function SocialProofSection() {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Animated Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-24 glass-card p-6 sm:p-8 border border-blue-100 shadow-[0_20px_50px_-12px_rgba(37,99,235,0.1)] bg-white/60 backdrop-blur-md rounded-3xl"
        >
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
              <AnimatedCounter end={500} suffix="+" />
            </h3>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Students Placed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 mb-2">
              <AnimatedCounter end={100} suffix="%" />
            </h3>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Scholarship Success</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-2">
              <AnimatedCounter end={5} suffix="M+" />
            </h3>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Funding Secured</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-2">
              <AnimatedCounter end={50} suffix="+" />
            </h3>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Partner Universities</p>
          </div>
        </motion.div>



      </div>
    </section>
  );
}
