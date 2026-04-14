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

      <div className="container mx-auto max-w-4xl glass-card relative z-10 p-8 md:p-12 border-primary/20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold tracking-wide text-primary uppercase">
              Free Download
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get the Ultimate <br className="hidden md:block"/>
              <span className="text-gradient">Italy Scholarship Guide</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Learn exactly how to apply for the DSU scholarship and study in Italy for completely free. Everything you need to know in a 10-page PDF.
            </p>
            <div className="hidden md:flex items-center justify-center w-full h-48 bg-gray-100 rounded-2xl border border-gray-200">
              <DownloadCloud size={64} className="text-gray-300" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" 
                placeholder="John Doe"
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" 
                placeholder="john@example.com"
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (WhatsApp)</label>
              <input 
                type="tel" 
                required
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" 
                placeholder="+91 9876543210"
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <Button variant="gradient" className="w-full py-6 text-lg mt-4 group">
              Download Free PDF Guide 
              <motion.span 
                 className="inline-block ml-2 group-hover:translate-y-1 transition-transform"
              >
                  ↓
              </motion.span>
            </Button>
            <p className="text-xs text-center text-gray-500 mt-4">We respect your privacy. No spam.</p>
          </form>

        </div>
      </div>
    </section>
  );
}
