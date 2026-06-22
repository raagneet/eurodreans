"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, CalendarCheck, MapPin, GraduationCap, ArrowRight } from "lucide-react";

export function LeadMagnetSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-transparent">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-100/50 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
        <div className="absolute bottom-[0%] -left-[10%] w-[60%] h-[60%] bg-indigo-100/50 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-black tracking-widest text-indigo-600 uppercase mb-6">
            Expert Guidance
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Appointments</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center glass-card p-4 sm:p-8 md:p-12 border-blue-100/50 bg-white/70 backdrop-blur-2xl rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)]">
          
          {/* Left Column: Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-[320px] group">
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20 blur-lg" />
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-[2rem] rotate-2 group-hover:rotate-4 transition-transform duration-500" />
              
              {/* Image Container */}
              <div className="w-full relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-slate-200 border-4 border-white transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
                 {/* Make sure to save the image as dipanshu.png in the public folder */}
                 <Image 
                   src="/deepanshu.png" 
                   alt="Dipanshu Chouhan" 
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                   sizes="(max-width: 768px) 100vw, 320px"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            
            <div className="mt-8 text-center px-4 w-full">
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Dipanshu Chouhan
              </h3>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center justify-center gap-2 text-slate-600 font-medium bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                  <GraduationCap className="text-blue-600 shrink-0" size={18} />
                  <span className="text-sm">Msc. Global Economics & Business</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600 font-medium bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                  <MapPin className="text-indigo-600 shrink-0" size={18} />
                  <span className="text-sm">University of Cassino, Italy</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Booking UI */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="lg:col-span-7 w-full h-full"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-blue-900/5 border border-white h-full flex flex-col justify-center relative overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
              
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Secure Your Spot
              </h3>
              <p className="text-slate-500 font-medium mb-8">
                Get personalized guidance, profile evaluation, and direct answers to all your study abroad questions.
              </p>
              
              <a href="https://topmate.io/dipanshu_chouhan" target="_blank" rel="noopener noreferrer" className="block relative group cursor-pointer">
                {/* Glow behind the selection card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500" />
                
                <div className="relative bg-white border border-blue-100 rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center shrink-0 border border-blue-100 shadow-inner group-hover:scale-110 transition-transform duration-300">
                     <Clock className="text-blue-600" size={28} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      1-on-1 Consultation
                    </h4>
                    <p className="text-slate-500 font-medium mb-4">
                      30 Min Session via Video Call
                    </p>
                    
                    <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 mb-6 sm:mb-0">
                      <span className="text-indigo-600 font-bold">€ 35 EUR</span>
                    </div>
                  </div>

                  <div className="w-full sm:w-auto self-center">
                    <button className="w-full sm:w-auto bg-slate-900 group-hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] group-hover:-translate-y-1">
                      Book Now
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </a>
              
              <div className="mt-8 flex items-start sm:items-center gap-3 text-sm text-slate-500 font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CalendarCheck className="text-emerald-500 shrink-0 mt-0.5 sm:mt-0" size={20} />
                <p>Slots are limited. Rescheduling available up to 24 hours before the session.</p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
