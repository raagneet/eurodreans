"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Star, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

export function HeroSection() {
  const { openBookCall } = useModal();
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >


          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900">
            Study in Italy with <br />
            <span className="text-gradient">100% Scholarships</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            Stop worrying about tuition fees. We help ambitious students secure 
            fully-funded Master&apos;s admissions in top Italian public universities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button onClick={openBookCall} variant="gradient" size="lg" className="px-8 text-lg hover:scale-105 transition-transform w-full sm:w-auto">
              Book Free Call
            </Button>
            <Button variant="outline" size="lg" className="px-8 text-lg bg-white border-gray-200 w-full sm:w-auto gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Chat on WhatsApp
            </Button>
          </div>

          <p className="text-sm text-accent font-medium animate-pulse">
            O Hurry! Only limited slots left for this intake
          </p>
        </motion.div>

        {/* Right Content / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          {/* Main Visual abstraction */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-gray-100">
             <Image src="/hero_italy.png" alt="Study in Italy 3D" fill className="object-cover" priority />
          </div>

          {/* Floating Trust Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -left-10 top-20 glass-card p-4 flex items-center gap-3"
          >
            <div className="bg-green-500/20 p-2 rounded-full">
              <Star className="text-green-500 fill-green-500" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">98%</p>
              <p className="text-xs text-gray-600">Success Rate</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 bottom-32 glass-card p-4 flex items-center gap-3"
          >
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-background overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">500+</p>
              <p className="text-xs text-gray-600">Students Sent</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
