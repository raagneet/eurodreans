"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Euro, Landmark, Plane, Users } from "lucide-react";

export function WhyStudyInItalySection() {
  const reasons = [
    {
      icon: <Euro size={32} />,
      title: "Low or Zero Tuition Fees",
      description: "Italian public universities offer education at very low or even zero tuition fees, aided by regional scholarships (DSU) based on financial need rather than just merit.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <Landmark size={32} />,
      title: "World-Class Universities",
      description: "Home to some of the oldest and most prestigious universities in the world, renowned for their heritage, research, and academic excellence.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: <GraduationCap size={32} />,
      title: "English-Taught Programs",
      description: "A wide array of Master's and Bachelor's degree programs are entirely taught in English, making it accessible for international students.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
    },
    {
      icon: <MapPin size={32} />,
      title: "Rich Cultural Heritage",
      description: "Immerse yourself in a country boasting the highest number of UNESCO World Heritage Sites, incredible art, fashion, and culinary traditions.",
      color: "text-rose-500",
      bgColor: "bg-rose-50",
    },
    {
      icon: <Plane size={32} />,
      title: "Gateway to Europe",
      description: "With a student visa, you can freely travel across the Schengen Area, making it incredibly easy to explore other European countries.",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
    },
    {
      icon: <Users size={32} />,
      title: "Vibrant Student Life",
      description: "Experience a dynamic and welcoming international community, with plenty of networking opportunities and vibrant student activities.",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent)] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent)] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-black tracking-widest text-blue-600 uppercase mb-6"
          >
            Discover the Opportunity
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900"
          >
            Why Study In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Italy?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed"
          >
            Italy is not just a destination; it's an experience. Offering an exceptional combination of high-quality education, affordability, and a lifestyle like no other.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-white rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${reason.bgColor} ${reason.color} group-hover:scale-110 transition-transform duration-300`}>
                {reason.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed font-medium">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
