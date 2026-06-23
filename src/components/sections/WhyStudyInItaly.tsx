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
      color: "bg-[#eaf4fc] border-[#d1e6f7]",
      iconColor: "text-sky-600 bg-white",
    },
    {
      title: "GUARANTEED SCHOLARSHIPS",
      description: "Up to €8,000 /year (~₹8 Lakhs)",
      icon: Award,
      color: "bg-[#eaf5eb] border-[#d2ecd5]",
      iconColor: "text-emerald-600 bg-white",
    },
    {
      title: "EASIER ROI",
      subtitle: "(RETURN ON INVESTMENT)",
      description: "With the help of scholarships",
      icon: TrendingUp,
      color: "bg-[#eaf5eb] border-[#d2ecd5]",
      iconColor: "text-emerald-600 bg-white",
    },
    {
      title: "PART-TIME JOB",
      subtitle: "OPPORTUNITIES",
      description: "20 Hours per week",
      icon: Clock,
      color: "bg-[#fef1e5] border-[#fce0c7]",
      iconColor: "text-orange-600 bg-white",
    },
    {
      title: "1-YEAR POST-STUDY",
      subtitle: "VISA",
      description: "Permission to stay and work",
      icon: CalendarCheck,
      color: "bg-[#eaf4fc] border-[#d1e6f7]",
      iconColor: "text-sky-600 bg-white",
    },
    {
      title: "PERMANENT",
      subtitle: "RESIDENCY",
      description: "After 5 years of stay in Italy",
      icon: Home,
      color: "bg-[#eaf5eb] border-[#d2ecd5]",
      iconColor: "text-emerald-600 bg-white",
    },
    {
      title: "ATTRACTIVE",
      subtitle: "SALARY",
      description: "Depends on Job Profile (~₹3-4+ Lakhs/Month Easily)",
      icon: Banknote,
      color: "bg-[#eaf5eb] border-[#d2ecd5]",
      iconColor: "text-emerald-600 bg-white",
    },
    {
      title: "TRAVEL ACROSS",
      subtitle: "EUROPE",
      description: "(Schengen Visa access)",
      icon: Plane,
      color: "bg-[#fef1e5] border-[#fce0c7]",
      iconColor: "text-orange-600 bg-white",
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
              className={`flex flex-col items-center text-center p-6 rounded-2xl border-2 ${card.color} shadow-sm hover:shadow-lg transition-all duration-300 h-full`}
            >
              <div className="mb-6 min-h-[50px] flex flex-col justify-end w-full">
                <h3 className="font-bold text-slate-900 text-lg md:text-xl leading-tight uppercase">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <h4 className="font-bold text-slate-800 text-sm md:text-base leading-tight uppercase mt-1">
                    {card.subtitle}
                  </h4>
                )}
              </div>
              
              <div className={`w-20 h-20 flex items-center justify-center rounded-full mb-8 ${card.iconColor} shadow-sm border border-slate-100 shrink-0 group`}>
                <card.icon size={40} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="flex items-start gap-2 mt-auto text-left w-full justify-center">
                {index !== 7 && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1a3b5c] mt-2 shrink-0"></div>
                )}
                <p className={`text-[#1a3b5c] font-medium text-base md:text-lg ${index === 7 ? 'text-center -translate-y-3' : ''}`}>
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
