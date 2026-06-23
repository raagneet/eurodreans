"use client";

import { motion } from "framer-motion";
import { Search, FileText, Landmark, Plane } from "lucide-react";

export function RoadmapSection() {
  const phases = [
    {
      id: "Phase 1",
      title: "Profile Alignment & Selection",
      desc: "We analyze your GPA, background, and goals to build a strategic shortlist of universities where you have the highest probability of acceptance.",
      icon: <Search className="w-5 h-5 text-white" />,
      color: "from-blue-500 to-indigo-600",
      borderColor: "border-blue-100",
      bgColor: "bg-blue-50"
    },
    {
      id: "Phase 2",
      title: "Bulletproof Document Strategy",
      desc: "We optimize your SOP, format your CV to European standards, and refine your LORs to stand out to admission committees.",
      icon: <FileText className="w-5 h-5 text-white" />,
      color: "from-purple-500 to-fuchsia-600",
      borderColor: "border-purple-100",
      bgColor: "bg-purple-50"
    },
    {
      id: "Phase 3",
      title: "Scholarship & Bureaucracy",
      desc: "We guide you through the complex financial documentation for ISEE calculation, ensuring you lock in maximum scholarship benefits.",
      icon: <Landmark className="w-5 h-5 text-white" />,
      color: "from-amber-500 to-orange-600",
      borderColor: "border-amber-100",
      bgColor: "bg-amber-50"
    },
    {
      id: "Phase 4",
      title: "Universitaly Portal & Visa",
      desc: "We handle your Universitaly registration, manage CIMEA/DoV acquisition, and organize a flawless visa dossier for a stress-free interview.",
      icon: <Plane className="w-5 h-5 text-white" />,
      color: "from-emerald-500 to-teal-600",
      borderColor: "border-emerald-100",
      bgColor: "bg-emerald-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  } as any;

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center py-16 bg-white overflow-hidden border-y border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[10px] sm:text-xs font-black tracking-widest text-blue-600 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              The Roadmap: How We Get You There
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
              From Profile Evaluation to Landing in Italy. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">We Handle the Chaos.</span>
            </h2>
            
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
              Navigating portals, legal translations, and strict deadlines can be overwhelming. We break down the walls and manage the entire journey for you, step by step.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Process Map */}
        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="absolute top-[36px] left-[10%] right-[10%] h-[3px] bg-slate-100 hidden md:block z-0" />
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10"
          >
            {phases.map((phase, index) => (
              <motion.div 
                key={phase.id}
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                {/* Process Node */}
                <div className="w-[72px] h-[72px] rounded-full bg-white border-4 border-slate-50 flex items-center justify-center shadow-sm mb-6 relative group-hover:scale-110 transition-transform duration-300">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br ${phase.color} shadow-lg shadow-black/10`}>
                    {phase.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full ${phase.bgColor} border ${phase.borderColor} rounded-2xl p-5 shadow-sm group-hover:shadow-md transition-shadow h-full flex flex-col items-center`}>
                  <div className={`text-[10px] font-black tracking-widest uppercase mb-2 bg-clip-text text-transparent bg-gradient-to-r ${phase.color}`}>
                    {phase.id}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">{phase.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
