"use client";

import { motion } from "framer-motion";
import { ClipboardList, Map, Handshake } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      title: "Profile Evaluation",
      desc: "We analyze your academics, goals, and strictly align them with 100% scholarship criteria.",
      icon: <ClipboardList size={32} className="text-white" />,
      color: "from-primary to-blue-600",
    },
    {
      title: "University Shortlist",
      desc: "Our experts curate a list of top Italian public universities maximizing your admit chances.",
      icon: <Map size={32} className="text-white" />,
      color: "from-blue-600 to-secondary",
    },
    {
      title: "Application + Visa",
      desc: "Seamless document preparation, university applications, and guaranteed visa assistance.",
      icon: <Handshake size={32} className="text-white" />,
      color: "from-secondary to-accent",
    }
  ];

  return (
    <section id="process" className="relative py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-black tracking-widest text-indigo-600 uppercase mb-6">How It Works</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">
            <span className="text-slate-900">Your Journey in </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">3 Simple Steps</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            From profile assessment to boarding your flight, we guide you every step of the way.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden md:block absolute top-10 left-[15%] w-[70%] h-1 bg-gray-200 -translate-y-1/2 rounded-full overflow-hidden z-0">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-gradient-to-r from-primary via-secondary to-accent" 
             />
          </div>

          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute top-10 left-1/2 w-1 h-[75%] bg-gray-100 -translate-x-1/2 rounded-full overflow-hidden z-0">
             <motion.div 
               initial={{ height: 0 }}
               whileInView={{ height: "100%" }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 2, ease: "easeInOut" }}
               className="w-full bg-gradient-to-b from-primary via-secondary to-accent" 
             />
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2, type: "spring", stiffness: 60 }}
                whileHover={{ y: -10, boxShadow: "0 20px 60px -15px rgba(37,99,235,0.15)" }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/50 border border-blue-50 hover:bg-white hover:border-blue-100 transition-all duration-300 shadow-md shadow-blue-900/5"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6 ring-4 ring-background border-2 border-white/50`}>
                   {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Step {idx + 1}: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{step.title}</span></h3>
                 <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
