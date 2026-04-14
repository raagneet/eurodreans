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

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-black tracking-widest text-blue-600 uppercase mb-6">Real Results</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Don&apos;t just take our word for it. <br/>
            See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Real Results.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            Watch the stories of students who trusted Eurodreams to make their Italian dream a reality.
          </p>
        </div>

        {/* Video Testimonials Carousel Area */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide">
          {[
            { id: 1, name: "Rohit Sharma", university: "Sapienza", img: "/thumbnails/student1.png" },
            { id: 2, name: "Ananya Iyer", university: "Polytechnic of Milan", img: "/thumbnails/student2.png" },
            { id: 3, name: "Vikram Singh", university: "University of Bologna", img: "/thumbnails/student3.png" },
            { id: 4, name: "Sanya Gupta", university: "Catholic University of the Sacred Heart", img: "/thumbnails/student1.png" },
          ].map((student) => (
            <motion.div 
              key={student.id}
              whileHover={{ scale: 1.02 }}
              className="min-w-[320px] md:min-w-[400px] h-[250px] relative rounded-2xl overflow-hidden snap-center glass-card border-white/10 shrink-0 group cursor-pointer shadow-lg"
            >
              <img 
                src={student.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt={student.name}
              />
              <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/30 transition-colors" />
              {/* Video Thumbnail UI */}
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle size={64} className="text-white/90 group-hover:text-primary transition-colors group-hover:scale-110 duration-300 drop-shadow-lg" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-semibold text-white text-lg">{student.name}</p>
                <p className="text-sm text-blue-200 font-bold tracking-wide">Master's in Data Science @ {student.university}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visa Approvals Mock UI grid */}
        <div className="mt-20">
          <div className="text-center mb-10">
             <h3 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3 text-slate-900">
                <Award className="text-amber-500" /> 
                Recent Visa Approvals
             </h3>
             <p className="text-slate-500 font-medium mt-2">Verified results from the last 30 days</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
             {[1, 2, 3, 4].map((item) => (
               <motion.div 
                 key={`visa-${item}`}
                 initial={{ opacity: 0, y: 40, scale: 0.95 }}
                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.5, delay: item * 0.1, type: "spring", stiffness: 50 }}
                 whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(37,99,235,0.15)" }}
                 className="p-6 rounded-3xl glass-card relative overflow-hidden flex flex-col items-center text-center border-blue-100 hover:border-blue-300 bg-white/80 transition-all duration-300 shadow-xl shadow-blue-900/5"
               >
                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-primary flex items-center justify-center mb-4 shadow-lg">
                    <CheckCircle className="text-white w-8 h-8" />
                 </div>
                 <div className="mb-4">
                   <p className="text-lg font-bold text-slate-900">Visa Approved</p>
                   <p className="text-xs text-slate-500 font-medium">Verified 2 days ago</p>
                 </div>
                 <div className="w-full h-24 bg-blue-50/20 rounded-xl border border-dashed border-primary/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                    <div className="flex flex-col items-center">
                       <div className="w-12 h-1.5 bg-gray-200 rounded-full mb-1 ml-[-20%]" />
                       <div className="w-16 h-1.5 bg-gray-100 rounded-full ml-[10%]" />
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}
