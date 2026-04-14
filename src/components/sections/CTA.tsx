"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Calendar } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function CTASection() {
  const { openBookCall } = useModal();
  
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with subtle Oceanic tint */}
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 40 }}
          className="glass-card p-8 md:p-24 relative overflow-hidden border border-blue-100 shadow-[0_40px_80px_-20px_rgba(37,99,235,0.2)] bg-white/80 backdrop-blur-2xl rounded-[3rem]"
        >
           {/* Abstract background shapes */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

           <h2 className="text-3xl md:text-6xl font-black mb-6 text-slate-900 leading-tight">
             Ready to start your <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">Italian Journey?</span>
           </h2>
           
           <p className="text-lg md:text-xl text-slate-500 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
             Join 500+ students who secured 100% scholarships. Your dream university is closer than you think.
           </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <Button onClick={openBookCall} variant="gradient" size="lg" className="w-full sm:w-auto px-8 sm:px-12 py-6 text-lg sm:text-xl shadow-xl shadow-blue-500/20 hover:scale-105 transition-all gap-2">
                 <Calendar size={20} />
                 Book Free Call NOW
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-6 text-base sm:text-lg border-blue-100 bg-white hover:bg-blue-50 transition-colors gap-2 text-primary font-black">
                 <MessageCircle className="text-primary" />
                 WhatsApp Us
              </Button>
           </div>

           <p className="mt-8 text-sm text-slate-400 font-medium">
             *Average response time for WhatsApp is less than 15 minutes.
           </p>
        </motion.div>
      </div>
    </section>
  );
}
