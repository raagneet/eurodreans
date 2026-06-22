"use client";

import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, FileCheck, Award, Plane, Sparkles } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function PricingPage() {
  const { openBookCall } = useModal();

  const pricingPlans = [
    {
      step: "Phase 1",
      name: "Admission",
      price: "₹ 40,000",
      icon: <GraduationCap size={20} className="text-blue-600" />,
      color: "from-blue-500/20 to-cyan-500/20",
      features: [
        "Assessment of profile.",
        "Universities shortlisting.",
        "Format of the letter of recommendation.",
        "Format of English proficiency format.",
        "Letter of motivation/SOP format",
        "Application to highly regarded Univs"
      ],
    },
    {
      step: "Phase 2",
      name: "Pre-Enrollment",
      price: "₹ 40,000",
      icon: <FileCheck size={20} className="text-indigo-600" />,
      color: "from-indigo-500/20 to-purple-500/20",
      features: [
        "University Acceptance Letter",
        "HRD attestation Assistance",
        "Apostille & Legalization",
        "Courier Charges",
        "Pre-enrollment Application",
        "DOV Process Assistance"
      ],
    },
    {
      step: "Phase 3",
      name: "Scholarships",
      price: "₹ 40,000",
      icon: <Award size={20} className="text-emerald-600" />,
      color: "from-emerald-500/20 to-teal-500/20",
      features: [
        "Scholarship Application & submission.",
        "Apostille & Legalization process.",
        "Courier Charges included."
      ],
    },
    {
      step: "Phase 4",
      name: "VISA Process",
      price: "₹ 40,000",
      icon: <Plane size={20} className="text-rose-600" />,
      color: "from-rose-500/20 to-orange-500/20",
      features: [
        "Visa application & Appointment.",
        "Form filling & Cover letter",
        "Sponsor letter & Travel insurance",
        "Itinerary & Accommodation proof",
        "International contact assistance.",
        "Mock Interviews"
      ],
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 pt-32 pb-16 overflow-hidden relative font-sans">
      
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#f8fafc_0%,#f1f5f9_100%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/10 blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-400/10 blur-[100px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
      </div>
      
      <div className="container mx-auto px-4 max-w-[1400px] relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-slate-900 leading-tight"
          >
            Transparent & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Best Pricing</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center justify-center bg-white px-5 py-2 rounded-xl shadow-lg shadow-blue-900/5 border border-slate-100"
          >
            <h2 className="text-lg md:text-xl font-bold text-slate-700">
              Total Fees: <span className="text-xl md:text-2xl font-black text-blue-600">₹ 1,60,000</span> <span className="text-xs text-slate-400 font-medium ml-1">Including GST.</span>
            </h2>
          </motion.div>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, type: "spring", stiffness: 50 }}
              className="relative bg-white rounded-3xl p-5 border border-slate-100 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col h-full"
            >
              {/* Dynamic Gradient Blob Background */}
              <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${plan.color} blur-[30px] group-hover:scale-150 transition-transform duration-700 ease-out`} />

              {/* Header */}
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-1 block">
                    {plan.step}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 leading-tight">{plan.name}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {plan.icon}
                </div>
              </div>

              {/* Price Pill */}
              <div className="mb-4 relative z-10">
                <div className="inline-flex items-baseline px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-xl font-black text-slate-900 tracking-tight">{plan.price}</span>
                </div>
              </div>

              <hr className="border-slate-100 mb-4" />

              {/* Features List */}
              <div className="flex-1 relative z-10">
                <ul className="space-y-2.5">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-[11px] md:text-xs font-medium leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center flex justify-center"
        >
          <button 
            onClick={openBookCall}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 px-8 rounded-full shadow-[0_10px_20px_-10px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all duration-300 text-sm flex items-center gap-2"
          >
            Start Your Journey Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
        </motion.div>

      </div>
    </div>
  );
}
