"use client";

import { motion } from "framer-motion";
import { ClipboardList, Map, Handshake } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      title: "Profile Evaluation",
      desc: "We analyze your academics, goals, and strictly align them with 100% scholarship criteria.",
      icon: <ClipboardList size={32} className="text-white" />,
      color: "from-blue-500 to-primary",
    },
    {
      title: "University Shortlist",
      desc: "Our experts curate a list of top Italian public universities maximizing your admit chances.",
      icon: <Map size={32} className="text-white" />,
      color: "from-purple-500 to-secondary",
    },
    {
      title: "Application + Visa",
      desc: "Seamless document preparation, university applications, and guaranteed visa assistance.",
      icon: <Handshake size={32} className="text-white" />,
      color: "from-orange-400 to-accent",
    }
  ];

  return (
    <section id="process" className="relative py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Your Journey in <span className="text-gradient">3 Simple Steps</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-10 left-[15%] w-[70%] h-1 bg-gray-200 -translate-y-1/2 rounded-full overflow-hidden z-0">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-gradient-to-r from-primary via-secondary to-accent" 
             />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6 ring-4 ring-background border-2 border-white/50`}>
                   {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Step {idx + 1}: {step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
