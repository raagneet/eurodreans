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
      gradient: "bg-gradient-to-br from-slate-600 to-slate-700",
      blobColor: "bg-gradient-to-br from-blue-400 to-blue-600",
      iconColor: "text-blue-600 bg-white/90 shadow-sm border border-white",
    },
    {
      title: "ASSURED SCHOLARSHIPS",
      description: "Up to €8,000 /year (~₹8 Lakhs)",
      icon: Award,
      gradient: "bg-gradient-to-br from-emerald-700 to-emerald-900",
      blobColor: "bg-gradient-to-br from-emerald-400 to-emerald-600",
      iconColor: "text-emerald-600 bg-white/90 shadow-sm border border-white",
    },
    {
      title: "EASIER ROI",
      subtitle: "(RETURN ON INVESTMENT)",
      description: "With the help of scholarships",
      icon: TrendingUp,
      gradient: "bg-gradient-to-br from-purple-700 to-slate-800",
      blobColor: "bg-gradient-to-br from-purple-400 to-purple-600",
      iconColor: "text-purple-600 bg-white/90 shadow-sm border border-white",
    },
    {
      title: "PART-TIME JOB",
      subtitle: "OPPORTUNITIES",
      description: "20 Hours per week",
      icon: Clock,
      gradient: "bg-gradient-to-br from-orange-800 to-stone-800",
      blobColor: "bg-gradient-to-br from-orange-400 to-orange-600",
      iconColor: "text-orange-600 bg-white/90 shadow-sm border border-white",
    },
    {
      title: "1-YEAR POST-STUDY",
      subtitle: "VISA",
      description: "Permission to stay and work",
      icon: CalendarCheck,
      gradient: "bg-gradient-to-br from-rose-800 to-stone-800",
      blobColor: "bg-gradient-to-br from-rose-400 to-rose-600",
      iconColor: "text-rose-600 bg-white/90 shadow-sm border border-white",
    },
    {
      title: "PERMANENT",
      subtitle: "RESIDENCY",
      description: "After 5 years of stay in Italy",
      icon: Home,
      gradient: "bg-gradient-to-br from-teal-700 to-teal-900",
      blobColor: "bg-gradient-to-br from-teal-400 to-teal-600",
      iconColor: "text-teal-600 bg-white/90 shadow-sm border border-white",
    },
    {
      title: "ATTRACTIVE",
      subtitle: "SALARY",
      description: "Depends on Job Profile (~₹3-4+ Lakhs/Month Easily)",
      icon: Banknote,
      gradient: "bg-gradient-to-br from-stone-600 to-stone-800",
      blobColor: "bg-gradient-to-br from-amber-400 to-amber-600",
      iconColor: "text-amber-600 bg-white/90 shadow-sm border border-white",
    },
    {
      title: "TRAVEL ACROSS",
      subtitle: "EUROPE",
      description: "Schengen Visa access",
      icon: Plane,
      gradient: "bg-gradient-to-br from-indigo-700 to-slate-800",
      blobColor: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      iconColor: "text-indigo-600 bg-white/90 shadow-sm border border-white",
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

  // 🎨 TWEAK THESE VALUES TO CHANGE THE DARKNESS AND STYLE OF THE CARDS 🎨
  const cardStyle = {
    // This adds a dark overlay ON TOP of the vibrant gradients.
    // e.g. "bg-black/0" (vibrant colors), "bg-black/20" (darker but still colorful), "bg-black/60" (very muted)
    overlayOpacity: "bg-black/0",

    // Adjust border color and opacity
    border: "border-white/10",

    // Adjust text colors to ensure visibility against your chosen background
    textPrimary: "text-white",
    textSecondary: "text-slate-200",
    bulletColor: "bg-white",
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
            <div key={index} className="relative group h-full">
              {/* Colorful glowing blob behind the glass card */}
              <div className={`absolute inset-0 rounded-[2rem] opacity-30 group-hover:opacity-60 blur-xl transition duration-500 ${card.blobColor}`}></div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative flex flex-col items-center text-center p-7 rounded-[2rem] ${card.gradient} ${cardStyle.overlayOpacity} border ${cardStyle.border} shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 h-full backdrop-blur-2xl z-10`}
              >
                <div className="mb-6 min-h-[50px] flex flex-col justify-end w-full">
                  <h3 className={`font-extrabold ${cardStyle.textPrimary} text-lg md:text-xl leading-tight uppercase tracking-wide`}>
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <h4 className={`font-extrabold ${cardStyle.textSecondary} text-sm md:text-base leading-tight uppercase mt-1`}>
                      {card.subtitle}
                    </h4>
                  )}
                </div>

                <div className={`w-20 h-20 flex items-center justify-center rounded-2xl mb-8 ${card.iconColor} shadow-md shrink-0 backdrop-blur-md`}>
                  <card.icon size={36} strokeWidth={2} className="group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="flex items-start gap-2.5 mt-auto text-left w-full justify-center">
                  <div className={`w-2 h-2 rounded-full ${cardStyle.bulletColor} mt-[7px] shrink-0`}></div>
                  <p className={`${cardStyle.textPrimary} font-semibold text-base md:text-[17px] leading-snug`}>
                    {card.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>



      </div>
    </section>
  );
}
