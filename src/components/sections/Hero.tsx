"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Star, GraduationCap, Sparkles } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

export function HeroSection() {
  const { openBookCall } = useModal();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-16 overflow-hidden bg-background">
      {/* Ultra-Premium Atmosphere Background */}
      <div className="absolute inset-0 bg-slate-50/30" />
      <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-blue-600/15 via-indigo-600/15 to-purple-600/15 blur-[120px] rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-400/15 to-blue-500/15 blur-[130px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Content - Fixed Simple Text Arrangement */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="-mt 2 flex flex-col items-start text-left max-w-xl mx-auto lg:mx-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-blue-100 shadow-[0_4px_20px_-4px_rgba(37,99,235,0.1)] mb-10"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-inner">
              <Sparkles size={14} className="text-white" />
            </span>
            <span className="text-xs font-black tracking-widest text-slate-800 uppercase pr-2">Premium Abroad Experts</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tighter mb-4 leading-[1.05] text-slate-900 -mt-7">
            Study in <br className="hidden sm:block" />
            <span className="relative inline-block mt-2">
              <span className="absolute -inset-2 bg-amber-400/20 blur-2xl rounded-full scale-110"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500">
                Italy
              </span>
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-5 mb-8">
            <div className="hidden sm:block h-[3px] w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-700 tracking-tight">
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">100% Fundings</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-lg border-l-4 border-blue-500/30 pl-6">
            Stop worrying about tuition fees. We help ambitious students secure
            fully-funded Master&apos;s admissions in top Italian public institutions.
          </p>

          <div className="flex flex-col sm:flex-row w-full gap-5 mb-10">
            <Button onClick={openBookCall} variant="gradient" size="lg" className="px-10 py-7 text-xl hover:scale-105 transition-all w-full sm:w-auto shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] font-black bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white border-0 rounded-2xl">
              Book Free Call
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-7 text-lg bg-white/80 backdrop-blur-md border-[2px] border-blue-100 w-full sm:w-auto gap-3 text-slate-800 font-black hover:bg-blue-50/50 hover:border-blue-200 transition-all shadow-xl shadow-blue-500/5 rounded-2xl group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 group-hover:scale-110 transition-transform">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Chat on WhatsApp
            </Button>
          </div>

          <p className="text-slate-500 text-sm font-black tracking-widest uppercase flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Limited intake slots available right now
          </p>
        </motion.div>

        {/* 
          ========================================================================
          IMAGE ORIENTATION CONTROL PANEL
          ========================================================================
          To control the orientation (tilt) of the image:
          1. Find the 'rotate' property in the 'initial' and 'animate' blocks below.
          2. Use Negative Numbers (e.g., -15) to tilt it to the LEFT.
          3. Use Positive Numbers (e.g., 15) to tilt it to the RIGHT.
          4. Use 0 to keep it perfectly straight.
          ========================================================================
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -15 }} // <-- SET INITIAL TILT HERE
          animate={{
            opacity: 1,
            scale: isHovering ? 1.05 : 1,
            rotate: isHovering ? 0 : 4, // <-- SET HOVER TILT AND FINAL TILT HERE
          }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative hidden lg:block h-[500px] w-full group overflow-visible"
        >
          {/* Main Visual Container - Professional Gradient Border */}
          <motion.div
            className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_-30px_rgba(37,99,235,0.4)] flex items-center justify-center bg-gray-900 border-[6px] border-blue-400/30 backdrop-blur-sm transition-all duration-700 group-hover:border-blue-400/60 group-hover:shadow-[0_60px_120px_-30px_rgba(79,70,229,0.4)]"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/thumbnails/student1.png"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-student-walking-on-the-campus-4361-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-blue-900/10" />
          </motion.div>

          {/* Floating Trust Badges - Dynamic Glow */}
          <motion.div
            animate={{
              y: isHovering ? -20 : 0
            }}
            className="absolute -left-16 top-1/4 glass-card p-5 flex items-center gap-4 z-30 shadow-2xl border-white/60 bg-white/90 backdrop-blur-xl"
          >
            <div className="bg-gradient-to-br from-sky-400 to-blue-600 p-3 rounded-2xl shadow-lg">
              <Star className="text-white fill-white" size={28} />
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900">98%</p>
              <p className="text-xs text-slate-600 font-bold uppercase tracking-widest">Success</p>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: isHovering ? 20 : 0
            }}
            className="absolute -right-10 bottom-1/4 glass-card p-5 flex items-center gap-4 z-30 shadow-2xl border-white/60 bg-white/90 backdrop-blur-xl"
          >
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-2xl shadow-lg">
              <Sparkles className="text-white absolute mt-[-2px] ml-[-2px]" size={32} />
              <div className="w-8 h-8 opacity-0"></div>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900">500+</p>
              <p className="text-xs text-slate-600 font-bold uppercase tracking-widest">Students</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
