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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Studying in Italy is hard. <br className="hidden md:block"/>
            <span className="text-gray-600">With Eurodreams,</span>{" "}
            <span className="text-gradient">it&apos;s a breeze.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Left Column: Problems */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-500 mb-6 px-4">
              The Old Way (Painful)
            </h3>
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 glass-card p-5 border-red-900/30 bg-red-950/10"
              >
                <XCircle className="text-red-500 shrink-0" size={28} />
                <p className="text-gray-700 font-medium">{problem}</p>
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
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-6 px-4">
              The Eurodreams Way
            </h3>
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 glass-card p-5 border-primary/30 bg-blue-50/50 hover:bg-blue-100 transition-colors"
              >
                <CheckCircle2 className="text-green-500 shrink-0" size={28} />
                <p className="text-gray-900 font-semibold">{solution}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
