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
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Animated Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 glass-card p-8">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              <AnimatedCounter end={500} suffix="+" />
            </h3>
            <p className="text-sm text-gray-600 font-medium">Students Placed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              <AnimatedCounter end={100} suffix="%" />
            </h3>
            <p className="text-sm text-gray-600 font-medium">Scholarship Success</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              <AnimatedCounter end={5} suffix="M+" />
            </h3>
            <p className="text-sm text-gray-600 font-medium">Funding Secured</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              <AnimatedCounter end={50} suffix="+" />
            </h3>
            <p className="text-sm text-gray-600 font-medium">Partner Universities</p>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Don&apos;t just take our word for it. <br/>
            See the <span className="text-gradient">Real Results.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Watch the stories of students who trusted Eurodreams to make their Italian dream a reality.
          </p>
        </div>

        {/* Video Testimonials Carousel Area */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide">
          {[1, 2, 3, 4].map((item) => (
            <motion.div 
              key={item}
              whileHover={{ scale: 1.02 }}
              className="min-w-[320px] md:min-w-[400px] h-[250px] relative rounded-2xl overflow-hidden snap-center glass-card border-gray-800 shrink-0 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply group-hover:bg-gray-900/60 transition-colors" />
              {/* Mock Video Thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle size={64} className="text-white/80 group-hover:text-primary transition-colors group-hover:scale-110 duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-semibold text-white text-lg">Rohit Sharma</p>
                <p className="text-sm text-primary">Master&apos;s in Data Science @ Sapienza</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visa Approvals Mock UI grid */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
             <h3 className="text-2xl font-bold flex items-center gap-2">
                <Award className="text-accent" /> 
                Recent Visa Approvals
             </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1, 2, 3, 4].map((item) => (
               <motion.div 
                 key={`visa-${item}`}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: item * 0.1 }}
                 className="p-4 rounded-xl glass-card relative overflow-hidden"
               >
                 <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                      <CheckCircle className="text-white w-5 h-5" />
                   </div>
                   <div>
                     <p className="text-sm font-bold text-gray-900">Visa Approved</p>
                     <p className="text-xs text-gray-500">2 days ago</p>
                   </div>
                 </div>
                 <div className="h-20 bg-white/5 rounded-lg border border-white/5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-80" />
               </motion.div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}
