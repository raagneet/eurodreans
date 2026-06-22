"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap, ArrowRight, LibraryBig } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function CoursesPage() {
  const { openBookCall } = useModal();

  const featuredPrograms = [
    "Economics & Business",
    "Economics & Management",
    "Sustainable agriculture for food quality Enviroments",
    "International Business Administration – International Business Economics",
    "Media & Performing Arts – Communication & DAMS",
    "Economic Management & Computer Science",
    "International Economics and Finance",
    "Business ( World Bachelor in Business )",
    "Economics & Social Science",
    "Philosophy International & Economics Studies",
    "Business Administration & Management Physiological Sciences & Techniques",
    "Obstetrics",
    "Bio-Medical Lab Techniques",
    "Physiotherapy",
    "Nursing",
    "Radiology, Diagnostic, Imaging and radiotherapy techniques",
    "Psychological Science",
    "Animal Care",
    "Bio Informatics",
    "Bio Science & Biotechnology",
    "Geological, Natural & Enus sciences"
  ];

  const specializedPrograms = [
    "International Economics & Management",
    "International Politics & Govt.",
    "Business and Economics / Economics and Business Management",
    "Economics and Finance",
    "Geonomics",
    "Business Administration & Economics",
    "Global Governance",
    "Engineering Sciences",
    "Pharmacy",
    "Business & Management",
    "Mechanical Engineering",
    "Automobile Engineering",
    "Mechatronic Engineering",
    "Architecture",
    "Digital Management",
    "Computer Engineering",
    "Philoscophy International & Economics Studies",
    "Psychological Sciences and Techniques",
    "Dentistry",
    "Medicine and Surgery",
    "Automotive Engineering"
  ];

  // Helper to assign a slightly different gradient to each card based on its index
  const getGradient = (index: number) => {
    const gradients = [
      "from-blue-500 to-cyan-500",
      "from-indigo-500 to-purple-500",
      "from-emerald-500 to-teal-500",
      "from-amber-500 to-orange-500",
      "from-rose-500 to-pink-500"
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 selection:bg-blue-500/30 overflow-hidden pt-24 pb-20 relative font-sans">

      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#f8fafc_0%,#f1f5f9_100%)]" />
        <div className="absolute -top-[10%] -right-[15%] w-[55vw] h-[55vw] rounded-full bg-blue-200/40 blur-[130px] mix-blend-multiply" />
        <div className="absolute bottom-[5%] -left-[10%] w-[45vw] h-[45vw] rounded-full bg-indigo-200/40 blur-[120px] mix-blend-multiply" />
        <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-cyan-200/30 blur-[100px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-black tracking-widest text-blue-600 uppercase mb-6 shadow-sm"
          >
            <LibraryBig size={14} />
            Academic Excellence
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-slate-900"
          >
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Courses</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-medium leading-relaxed"
          >
            Discover top-tier Bachelor's and Master's programs across Italy. From Engineering and Medicine to Business and Performing Arts, find the perfect path to elevate your future with 100% funding opportunities.
          </motion.p>
        </div>

        {/* Featured Programs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200">
                <Briefcase className="text-blue-600" size={20} />
              </div>
              Featured Programs
            </h2>
            <button onClick={openBookCall} className="hidden sm:flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
              Learn More <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredPrograms.map((course, idx) => (
              <div key={idx} className="group relative bg-white/75 backdrop-blur-md rounded-2xl p-5 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${getGradient(idx)} opacity-50 group-hover:opacity-100 transition-opacity`} />
                <div className="flex items-start gap-4 pl-2">
                  <div className="mt-1 shrink-0">
                    <BookOpen size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors">
                    {course}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 sm:hidden flex justify-center">
             <button onClick={openBookCall} className="flex items-center gap-2 text-sm font-bold text-blue-600 bg-blue-50 px-6 py-3 rounded-full border border-blue-100">
               Learn More <ArrowRight size={16} />
             </button>
          </div>
        </motion.div>

        {/* Specialized Programs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0 border border-indigo-200">
                <GraduationCap className="text-indigo-600" size={24} />
              </div>
              Specialized Programs
            </h2>
            <button onClick={openBookCall} className="hidden sm:flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
              Learn More <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializedPrograms.map((course, idx) => (
              <div key={idx} className="group relative bg-white/75 backdrop-blur-md rounded-2xl p-5 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${getGradient(idx + 3)} opacity-50 group-hover:opacity-100 transition-opacity`} />
                <div className="flex items-start gap-4 pl-2">
                  <div className="mt-1 shrink-0">
                    <BookOpen size={18} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-indigo-700 transition-colors">
                    {course}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 sm:hidden flex justify-center">
             <button onClick={openBookCall} className="flex items-center gap-2 text-sm font-bold text-indigo-600 bg-indigo-50 px-6 py-3 rounded-full border border-indigo-100">
               Learn More <ArrowRight size={16} />
             </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
