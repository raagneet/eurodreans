"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  TrendingUp, 
  Clock, 
  CalendarCheck, 
  Home, 
  Banknote,
  Plane,
  Globe,
  MessageCircle
} from "lucide-react";

export function WhyStudyInItalySection() {
  const cards = [
    {
      title: "FREE EDUCATION",
      description: "To all International Students.",
      icon: GraduationCap,
      color: "bg-blue-200/60 border-blue-300/60",
      iconColor: "text-blue-700 bg-white/80",
    },
    {
      title: "GUARANTEED SCHOLARSHIPS",
      description: "Up to €8,000 /year (~₹8 Lakhs)",
      icon: Award,
      color: "bg-emerald-200/60 border-emerald-300/60",
      iconColor: "text-emerald-700 bg-white/80",
    },
    {
      title: "EASIER ROI",
      subtitle: "(RETURN ON INVESTMENT)",
      description: "With the help of scholarships",
      icon: TrendingUp,
      color: "bg-purple-200/60 border-purple-300/60",
      iconColor: "text-purple-700 bg-white/80",
    },
    {
      title: "PART-TIME JOB",
      subtitle: "OPPORTUNITIES",
      description: "20 Hours per week",
      icon: Clock,
      color: "bg-orange-200/60 border-orange-300/60",
      iconColor: "text-orange-700 bg-white/80",
    },
    {
      title: "1-YEAR POST-STUDY",
      subtitle: "VISA",
      description: "Permission to stay and work",
      icon: CalendarCheck,
      color: "bg-rose-200/60 border-rose-300/60",
      iconColor: "text-rose-700 bg-white/80",
    },
    {
      title: "PERMANENT",
      subtitle: "RESIDENCY",
      description: "After 5 years of stay in Italy",
      icon: Home,
      color: "bg-teal-200/60 border-teal-300/60",
      iconColor: "text-teal-700 bg-white/80",
    },
    {
      title: "ATTRACTIVE",
      subtitle: "SALARY",
      description: "Depends on Job Profile (~₹3-4+ Lakhs/Month Easily)",
      icon: Banknote,
      color: "bg-amber-200/60 border-amber-300/60",
      iconColor: "text-amber-700 bg-white/80",
    },
    {
      title: "TRAVEL ACROSS",
      subtitle: "EUROPE",
      description: "Schengen Visa access",
      icon: Plane,
      color: "bg-indigo-200/60 border-indigo-300/60",
      iconColor: "text-indigo-700 bg-white/80",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      {/* Ambient Orbs for Glassmorphism */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Top Decorative Border (like in image) */}
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-slate-200 -z-10 hidden md:block"></div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-slate-50 px-8 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
          >
            <span className="text-[#1a3b5c]">WHY STUDY IN </span>
            <span className="text-[#db7023] drop-shadow-sm">ITALY?</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`flex flex-col items-center text-center p-7 rounded-[2rem] ${card.color} border shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 h-full group backdrop-blur-xl`}
            >
              <div className="mb-6 min-h-[50px] flex flex-col justify-end w-full">
                <h3 className="font-extrabold text-slate-800 text-lg md:text-xl leading-tight uppercase tracking-wide group-hover:text-slate-900 transition-colors duration-300">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <h4 className="font-bold text-slate-500 text-sm md:text-base leading-tight uppercase mt-1">
                    {card.subtitle}
                  </h4>
                )}
              </div>
              
              <div className={`w-20 h-20 flex items-center justify-center rounded-2xl mb-8 ${card.iconColor} shadow-sm shrink-0 backdrop-blur-md`}>
                <card.icon size={36} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="flex items-start gap-2.5 mt-auto text-left w-full justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-[7px] shrink-0"></div>
                <p className="text-slate-700 font-medium text-base md:text-[17px] leading-snug">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <div className="bg-[#fef1e5] rounded-full px-6 py-4 md:px-10 md:py-4 flex flex-col sm:flex-row items-center gap-4 shadow-md border-2 border-[#fce0c7] hover:shadow-lg transition-shadow duration-300">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white z-10 shadow-sm">
                <Globe size={20} className="text-blue-600" />
              </div>
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center border-2 border-white z-0 shadow-sm">
                <MessageCircle size={20} className="text-orange-600" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <span className="text-slate-900 font-black text-lg md:text-xl tracking-wide uppercase block sm:inline">
                ENGLISH-TAUGHT PROGRAMS
              </span>
              <span className="text-[#db7023] font-bold text-base md:text-lg ml-0 sm:ml-2 block sm:inline mt-1 sm:mt-0">
                Widely Available
              </span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
