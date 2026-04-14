"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export function ProblemSolutionSection() {
  const problems = [
    "High tuition fees block your dreams",
    "Confusing visa process causing rejections",
    "Fake agents with hidden fees",
    "Scattered & outdated university information",
  ];

  const solutions = [
    "We secure 100% fully-funded scholarships",
    "Step-by-step verified visa assistance",
    "100% transparent process. No hidden fees",
    "Curated university shortlisting tailored for you",
  ];

  return (
    <section className="relative py-24 bg-background border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-xs font-black tracking-widest text-rose-600 uppercase mb-6">The Problem We Solve</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight leading-tight">
            <span className="text-slate-900">Studying in Italy is hard.</span><br />
            <span className="text-slate-400 font-bold">With Eurodreams, </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">it&apos;s a breeze.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            We turn a complex, bureaucratic nightmare into a smooth, guaranteed journey to your dream university.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center relative">
          
          {/* Left Column: Problems */}
          <div className="space-y-4">
            <h3 className="text-base font-black text-rose-400 mb-6 px-4 uppercase tracking-widest">
              ✕ The Old Way (Painful)
            </h3>
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -40, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 60 }}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(225,29,72,0.15)" }}
                className="flex items-center gap-4 glass-card p-5 border border-red-100 bg-red-50/50 shadow-md shadow-red-900/5 transition-all"
              >
                <XCircle className="text-red-500 shrink-0" size={28} />
                <p className="text-slate-700 font-semibold">{problem}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Connector (Hidden on mobile) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center h-full gap-4 z-10 pointer-events-none">
             <div className="w-px h-1/4 bg-gradient-to-b from-transparent to-gray-700" />
             <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center bg-background border-gray-700 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <ArrowRight className="text-primary" />
             </div>
             <div className="w-px h-1/4 bg-gradient-to-t from-transparent to-gray-700" />
          </div>

          {/* Right Column: Solutions */}
          <div className="space-y-4">
            <h3 className="text-base font-black text-emerald-500 mb-6 px-4 uppercase tracking-widest">
              ✓ The Eurodreams Way
            </h3>
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 60 }}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(16,185,129,0.15)" }}
                className="flex items-center gap-4 glass-card p-5 border border-emerald-100 bg-emerald-50/50 shadow-md shadow-emerald-900/5 transition-all"
              >
                <CheckCircle2 className="text-green-500 shrink-0" size={28} />
                <p className="text-slate-700 font-semibold">{solution}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
