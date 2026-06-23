"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  FileText, 
  Languages, 
  Award, 
  BookOpen, 
  FileCheck, 
  Shield, 
  Activity, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function ServicesPage() {
  const { openBookCall } = useModal();

  const services = [
    {
      name: "End-to-End Premium Counseling",
      price: "₹ 1,60,000",
      description: "Full counseling package covering university evaluation, application, admission, scholarship, and student visa processing.",
      icon: <GraduationCap className="text-blue-600" size={24} />,
      color: "from-blue-500/20 to-cyan-500/20",
      features: [
        "Profile evaluation & assessment",
        "Shortlisting top public universities",
        "Assistance with pre-enrollment",
        "Full scholarship & visa application support"
      ]
    },
    {
      name: "Document Correction Only",
      price: "₹ 15,000",
      description: "Professional review of Statement of Purpose (SOP), Letter of Recommendation (LORs), and Cover letter for high admission success.",
      icon: <FileText className="text-indigo-600" size={24} />,
      color: "from-indigo-500/20 to-purple-500/20",
      features: [
        "SOP formatting & spelling review",
        "LOR flow & language optimization",
        "Cover letter structure corrections",
        "Expert feedback on content strength"
      ]
    },
    {
      name: "Medical Test (IMAT)",
      price: "₹ 30,000",
      description: "Comprehensive study materials, coaching, and preparation guide for the Italian Medical Admissions Test.",
      icon: <Activity className="text-red-600" size={24} />,
      color: "from-red-500/20 to-rose-500/20",
      features: [
        "Dedicated mock practice tests",
        "Deep dive into chemistry, biology, math",
        "Critical thinking & logical reasoning prep",
        "Previous years' exam analysis"
      ]
    },
    {
      name: "English Test Preparations",
      price: "₹ 10,000",
      description: "Intensive training program to score high in IELTS, TOEFL, PTE, or Duolingo English examinations.",
      icon: <Languages className="text-emerald-600" size={24} />,
      color: "from-emerald-500/20 to-teal-500/20",
      features: [
        "Listening, Reading, Writing, Speaking drills",
        "Doubt clearing sessions",
        "Mock exams & performance feedback",
        "Tips to master score-specific criteria"
      ]
    },
    {
      name: "Entrance Exam Preparations",
      price: "₹ 10,000",
      description: "Targeted training and mock test sessions for GMAT, GRE, SAT, and CENT S examination success.",
      icon: <Award className="text-rose-600" size={24} />,
      color: "from-rose-500/20 to-orange-500/20",
      features: [
        "Quantitative & verbal reasoning prep",
        "Exam-taking strategy & speed guides",
        "Sectional practice assessments",
        "Detailed performance analytics"
      ]
    },
    {
      name: "Language Classes",
      price: "₹ 10,000",
      description: "Interactive foundation classes for European languages including Italian, French, and German.",
      icon: <BookOpen className="text-amber-600" size={24} />,
      color: "from-amber-500/20 to-yellow-500/20",
      features: [
        "Native/certified expert educators",
        "A1 & A2 grammar basics",
        "Interactive speaking & listening tasks",
        "Culture & vocabulary sessions"
      ]
    },
    {
      name: "Attestations, Apostille & Translations",
      price: "₹ 5,000 / Doc",
      description: "Fast-track and reliable processing for all legal and certified document requirements.",
      icon: <FileCheck className="text-violet-600" size={24} />,
      color: "from-violet-500/20 to-fuchsia-500/20",
      features: [
        "Apostille validation assistance",
        "Assistance with official translations",
        "Attestation of educational documents",
        "Doorstep document pick & drop assistance"
      ]
    },
    {
      name: "Overseas Medical Insurance",
      price: "₹ 7,000",
      description: "Approved student medical insurance plans matching strict consulate visa requirements.",
      icon: <Shield className="text-sky-600" size={24} />,
      color: "from-sky-500/20 to-indigo-500/20",
      features: [
        "Consulate-compliant coverage",
        "Cashless hospitalization network",
        "Quick policy generation & activation",
        "Pre-existing illness advice"
      ]
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 pt-32 pb-24 overflow-hidden relative font-sans min-h-screen">
      
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#f8fafc_0%,#f1f5f9_100%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/5 blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-400/5 blur-[100px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles size={12} className="animate-pulse" />
            Our Comprehensive Portfolio
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 leading-tight"
          >
            Premium Study Abroad <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg font-medium"
          >
            From document correction to language classes and university counseling, we provide dedicated support for every step of your international education journey.
          </motion.p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 60, damping: 15 }}
              className="relative bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group flex flex-col h-full"
            >
              {/* Dynamic Gradient Blob Background */}
              <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${service.color} blur-[30px] group-hover:scale-150 transition-transform duration-700 ease-out`} />

              {/* Icon & Title */}
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2 relative z-10 group-hover:text-blue-600 transition-colors">
                {service.name}
              </h3>

              {/* Price Tag */}
              <div className="mb-4 relative z-10">
                <div className="inline-flex items-baseline px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-blue-600 font-extrabold text-lg">
                  {service.price}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6 flex-1 relative z-10">
                {service.description}
              </p>

              <hr className="border-slate-100 mb-4 relative z-10" />

              {/* Features List */}
              <div className="relative z-10">
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-[11px] font-medium leading-snug">
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
          transition={{ delay: 0.5 }}
          className="text-center bg-white border border-slate-100 rounded-3xl p-8 max-w-3xl w-full shadow-[0_12px_40px_-15px_rgba(0,0,0,0.03)]"
        >
          <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Need a custom plan?</h3>
          <p className="text-slate-500 text-sm font-medium mb-6">
            Contact us today for a personalized consultation. Our study abroad experts will evaluate your academic history and recommend the best roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={openBookCall}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-full shadow-[0_10px_20px_-10px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all duration-300 text-sm flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Book Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
            <a 
              href="https://wa.me/916267332364"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold py-3.5 px-8 rounded-full hover:-translate-y-0.5 transition-all duration-300 text-sm flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
