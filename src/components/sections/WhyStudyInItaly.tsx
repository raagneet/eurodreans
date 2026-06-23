"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  GraduationCap, 
  Euro, 
  Plane, 
  TrendingUp, 
  Clock, 
  FileCheck, 
  Home, 
  Wallet,
  Briefcase
} from "lucide-react";

export function WhyStudyInItalySection() {
  const listItems = [
    { icon: <GraduationCap size={22} />, text: <><span className="font-bold tracking-wide text-black uppercase text-sm">Free Education</span> <span className="text-slate-500 mx-1">&mdash;</span> to all International Students.</> },
    { icon: <Euro size={22} />, text: <><span className="font-bold tracking-wide text-black uppercase text-sm">Guaranteed scholarships</span> <span className="text-slate-500 mx-1">&mdash;</span> upto 8000 Euro/year (INR – 8 Lacs)</> },
    { icon: <TrendingUp size={22} />, text: <><span className="font-bold tracking-wide text-black uppercase text-sm">ROI is much easier</span> <span className="text-slate-500 mx-1">&mdash;</span> with scholarships</> },
    { icon: <Clock size={22} />, text: <><span className="font-bold tracking-wide text-black uppercase text-sm">Part-Time Job</span> <span className="text-slate-500 mx-1">&mdash;</span> 20 Hours/Week.</> },
    { icon: <FileCheck size={22} />, text: <><span className="font-bold tracking-wide text-black uppercase text-sm">1 year Post Study Visa</span>.</> },
    { icon: <Home size={22} />, text: <><span className="font-bold tracking-wide text-black uppercase text-sm">Permanent residency</span> <span className="text-slate-500 mx-1">&mdash;</span> after 5 years of Stay</> },
    { icon: <Wallet size={22} />, text: <><span className="font-bold tracking-wide text-black uppercase text-sm">Attractive Salary</span> <span className="text-slate-500 mx-1">&mdash;</span> Depends on Job Profile (3–4 Lacs+/Month Easily).</> },
    { icon: <Plane size={22} />, text: <><span className="font-bold tracking-wide text-black uppercase text-sm">Travel Across Europe</span> <span className="text-slate-500 mx-1">&mdash;</span> (Schengen Visa).</> },
    { icon: <Briefcase size={22} />, text: <><span className="font-bold tracking-wide text-black uppercase text-sm">English-Taught Programs</span> <span className="text-slate-500 mx-1">&mdash;</span> Widely Available.</> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center py-12 bg-slate-50 overflow-hidden">
      {/* Background Animated Loops */}
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-indigo-200/30 rounded-full blur-[120px] pointer-events-none"
      />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-[55%] flex flex-col w-full">
          {/* Top Header */}
          <div className="max-w-3xl mb-10 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-[10px] sm:text-xs font-black tracking-widest text-blue-700 uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                The Italian Advantage
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 leading-[1.2]">
                Why Study In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm font-sans font-black">Italy?</span>
              </h2>
            </motion.div>
          </div>

          {/* Compact Grid List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-4 max-w-3xl"
          >
            {listItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 text-blue-600 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <p className="text-black font-medium text-base md:text-lg leading-snug">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Image Collage */}
        <div className="lg:w-[45%] w-full relative min-h-[600px] hidden lg:block">
           <motion.div 
             initial={{ opacity: 0, y: 50, rotate: -5 }}
             whileInView={{ opacity: 1, y: 0, rotate: -3 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             whileHover={{ scale: 1.05, zIndex: 40, rotate: 0 }}
             className="absolute right-0 top-10 w-64 h-72 rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10 transition-transform duration-300"
           >
              <Image src="/images/italy/italy_library_students.png" fill className="object-cover" alt="Students in Italian Library" />
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 50, rotate: 5 }}
             whileInView={{ opacity: 1, y: 0, rotate: 3 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             whileHover={{ scale: 1.05, zIndex: 40, rotate: 0 }}
             className="absolute right-40 top-32 w-72 h-80 rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-20 transition-transform duration-300"
           >
              <Image src="/images/italy_education_cinematic.png" fill className="object-cover" alt="Cinematic Italy Education" />
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 50, rotate: -8 }}
             whileInView={{ opacity: 1, y: 0, rotate: -6 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
             whileHover={{ scale: 1.05, zIndex: 40, rotate: 0 }}
             className="absolute right-20 top-80 w-56 h-56 rounded-full overflow-hidden shadow-2xl border-8 border-white z-30 transition-transform duration-300"
           >
              <Image src="/images/italy/student_life_italy.png" fill className="object-cover" alt="Student Life in Italy" />
           </motion.div>
        </div>
      </div>
    </section>
  );
}
