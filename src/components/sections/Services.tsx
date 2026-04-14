"use client";

import { motion } from "framer-motion";
import { PhoneCall, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
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
      title: "Done-for-you Service",
      benefit: "We handle EVERYTHING. From application to visa and accommodation setup in Italy.",
      icon: <Briefcase size={32} className="text-accent" />,
      cta: "Get Premium Help",
      delay: 0.3
    }
  ];

  return (
    <section id="programs" className="relative py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            How we can <span className="text-gradient">help you</span>
          </h2>
          <p className="text-gray-600 text-lg">Choose the right level of support for your Italy journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px -15px rgba(59,130,246,0.3)" }}
              className="glass-card p-8 flex flex-col h-full border border-gray-200 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-8 flex-1">{service.benefit}</p>
              
              <Button onClick={service.cta === "Book Free Call" ? openBookCall : undefined} variant="outline" className="w-full justify-between group border-gray-200 hover:border-primary bg-white text-gray-900">
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
