"use client";

import { motion } from "framer-motion";
import { PhoneCall, GraduationCap, Briefcase, ArrowRight, FileText, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/context/ModalContext";

export function ServicesSection() {
  const { openBookCall } = useModal();
  const services = [
    {
      title: "Free Guidance Call",
      benefit: "Get a baseline assessment of your profile and chances for full scholarships.",
      icon: <PhoneCall size={32} className="text-primary" />,
      cta: "Book Free Call",
      delay: 0.1
    },
    {
      title: "Mentorship Program",
      benefit: "Guided assistance on university selection, cover letters, and IELTS preparation.",
      icon: <GraduationCap size={32} className="text-secondary" />,
      cta: "Learn More",
      delay: 0.2
    },
    {
      title: "Visa & Documentation",
      benefit: "Stress-free paperwork for DSU scholarships, university pre-enrollment, and visa slot booking.",
      icon: <FileText size={32} className="text-primary" />,
      cta: "Get Visa Help",
      delay: 0.3
    },
  ];

  return (
    <section id="programs" className="relative py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-black tracking-widest text-blue-600 uppercase mb-6">Our Services</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">
            <span className="text-slate-900">How we can </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">help you</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Tailored support for every stage of your Italian academic journey. From first call to final enrollment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: service.delay, type: "spring", stiffness: 50 }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(37,99,235,0.2)" }}
              className="glass-card p-8 flex flex-col h-full bg-white/60 hover:bg-white border border-blue-50 hover:border-blue-200 transition-all duration-300 shadow-lg shadow-blue-900/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center mb-6 shadow-sm border border-blue-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 mb-8 flex-1 font-medium leading-relaxed">{service.benefit}</p>
              
              <Button onClick={service.cta === "Book Free Call" ? openBookCall : undefined} variant="outline" className="w-full justify-between group border-blue-100 hover:border-primary bg-white text-primary font-bold hover:bg-blue-50 transition-all duration-300">
                {service.cta}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
