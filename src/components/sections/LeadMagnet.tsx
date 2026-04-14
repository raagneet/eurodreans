"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { DownloadCloud } from "lucide-react";
import { useState } from "react";

export function LeadMagnetSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
         alert("Success! Scholarship Guide PDF sent to your email. We'll be in touch!");
         setFormData({ name: "", email: "", phone: "" });
      } else {
         alert("Something went wrong. Please try again later.");
      }
    } catch(err) {
       console.error("Failed to submit form", err);
    }
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto max-w-6xl glass-card relative z-10 p-8 md:p-16 border border-blue-200/50 shadow-[0_30px_60px_-15px_rgba(37,99,235,0.15)] bg-white/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-200 text-xs font-black tracking-widest text-blue-600 uppercase">
              Free Download
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Get the Ultimate <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">Italy Scholarship Guide</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-lg font-medium leading-relaxed mb-8 lg:mb-0">
              Learn exactly how to apply for the DSU scholarship and study in Italy for completely free. Everything you need to know in a 10-page expert-curated PDF.
            </p>
          </div>

          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6 glass-card p-6 md:p-10 bg-white/60 border-white/40 shadow-2xl shadow-blue-500/5 transition-all duration-500 rounded-3xl">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white border border-blue-100 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 hover:border-blue-300 transition-all font-medium shadow-sm" 
                    placeholder="John Doe"
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white border border-blue-100 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 hover:border-blue-300 transition-all font-medium shadow-sm" 
                    placeholder="john@example.com"
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number (WhatsApp)</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-white border border-blue-100 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 hover:border-blue-300 transition-all font-medium shadow-sm" 
                  placeholder="+91 9876543210"
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <Button variant="gradient" className="w-full py-7 rounded-2xl text-lg font-black group hover:scale-[1.02] shadow-xl shadow-blue-600/20 transition-all mt-4">
                Send My Free PDF Guide 
                <motion.span 
                   className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                >
                    →
                </motion.span>
              </Button>
              <p className="text-xs text-center text-slate-500 font-medium">We respect your privacy. Instant access to PDF after submission.</p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
