"use client";

import { motion } from "framer-motion";
import { CheckCircle2, LayoutDashboard, Bell, FileText } from "lucide-react";

export function DashboardPreviewSection() {
  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
            Complete <span className="text-gradient">Transparency.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
            Track your entire application progress from Day 1 securely via our private student dashboard. No more guessing games.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl rounded-2xl glass-card overflow-hidden shadow-2xl shadow-primary/20 border-white/10">
           {/* Mock Mac Window Header */}
           <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
           </div>

           {/* Dashboard Mock UI */}
           <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 bg-white/80">
              
              {/* Sidebar */}
              <div className="w-full md:w-1/4 space-y-4">
                 <div className="h-10 bg-gray-100 rounded-lg flex items-center px-4 gap-3 text-gray-900 font-medium">
                   <LayoutDashboard size={18} />
                   Home
                 </div>
                 <div className="h-10 hover:bg-gray-50 rounded-lg flex items-center px-4 gap-3 text-gray-600 font-medium">
                   <FileText size={18} />
                   Documents
                 </div>
                 <div className="h-10 hover:bg-gray-50 rounded-lg flex items-center px-4 gap-3 text-gray-600 font-medium">
                   <Bell size={18} />
                   Alerts
                    <span className="ml-auto bg-primary text-xs px-2 py-0.5 rounded-full text-white">2</span>
                 </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 space-y-6">
                 <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-1">Welcome back, John!</h3>
                   <p className="text-sm text-gray-600">Your application to Sapienza University is 80% complete.</p>
                 </div>

                 {/* Progress Bar */}
                 <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-primary"
                    />
                 </div>

                 {/* Task Checklist */}
                 <div className="space-y-3">
                   {["Profile Built & Resume Optimized", "University Shortlisted (Top 3)", "Motivation Letter Finalized", "Scholarship Application (Pending)"].map((task, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100"
                      >
                         <CheckCircle2 className={i === 3 ? "text-gray-300" : "text-green-500"} />
                         <span className={i === 3 ? "text-gray-400" : "text-gray-700"}>{task}</span>
                      </motion.div>
                   ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
