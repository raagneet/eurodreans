"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap, ArrowRight, LibraryBig, Search, Filter, ChevronDown } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function CoursesPage() {
  const { openBookCall } = useModal();

  const featuredPrograms = [
    { name: "Economics & Business", category: "Economics, Business & Management" },
    { name: "Economics & Management", category: "Economics, Business & Management" },
    { name: "Sustainable agriculture for food quality Enviroments", category: "Natural Sciences & Environment" },
    { name: "International Business Administration – International Business Economics", category: "Economics, Business & Management" },
    { name: "Media & Performing Arts – Communication & DAMS", category: "Humanities, Arts & Social Sciences" },
    { name: "Economic Management & Computer Science", category: "Engineering & Technology" },
    { name: "International Economics and Finance", category: "Economics, Business & Management" },
    { name: "Business ( World Bachelor in Business )", category: "Economics, Business & Management" },
    { name: "Economics & Social Science", category: "Economics, Business & Management" },
    { name: "Philosophy International & Economics Studies", category: "Humanities, Arts & Social Sciences" },
    { name: "Business Administration & Management Physiological Sciences & Techniques", category: "Economics, Business & Management" },
    { name: "Obstetrics", category: "Medicine, Health & Life Sciences" },
    { name: "Bio-Medical Lab Techniques", category: "Medicine, Health & Life Sciences" },
    { name: "Physiotherapy", category: "Medicine, Health & Life Sciences" },
    { name: "Nursing", category: "Medicine, Health & Life Sciences" },
    { name: "Radiology, Diagnostic, Imaging and radiotherapy techniques", category: "Medicine, Health & Life Sciences" },
    { name: "Psychological Science", category: "Humanities, Arts & Social Sciences" },
    { name: "Animal Care", category: "Medicine, Health & Life Sciences" },
    { name: "Bio Informatics", category: "Engineering & Technology" },
    { name: "Bio Science & Biotechnology", category: "Medicine, Health & Life Sciences" },
    { name: "Geological, Natural & Enus sciences", category: "Natural Sciences & Environment" }
  ];

  const specializedPrograms = [
    { name: "International Economics & Management", category: "Economics, Business & Management" },
    { name: "International Politics & Govt.", category: "Humanities, Arts & Social Sciences" },
    { name: "Business and Economics / Economics and Business Management", category: "Economics, Business & Management" },
    { name: "Economics and Finance", category: "Economics, Business & Management" },
    { name: "Geonomics", category: "Natural Sciences & Environment" },
    { name: "Business Administration & Economics", category: "Economics, Business & Management" },
    { name: "Global Governance", category: "Humanities, Arts & Social Sciences" },
    { name: "Engineering Sciences", category: "Engineering & Technology" },
    { name: "Pharmacy", category: "Medicine, Health & Life Sciences" },
    { name: "Business & Management", category: "Economics, Business & Management" },
    { name: "Mechanical Engineering", category: "Engineering & Technology" },
    { name: "Automobile Engineering", category: "Engineering & Technology" },
    { name: "Mechatronic Engineering", category: "Engineering & Technology" },
    { name: "Architecture", category: "Humanities, Arts & Social Sciences" },
    { name: "Digital Management", category: "Economics, Business & Management" },
    { name: "Computer Engineering", category: "Engineering & Technology" },
    { name: "Philoscophy International & Economics Studies", category: "Humanities, Arts & Social Sciences" },
    { name: "Psychological Sciences and Techniques", category: "Humanities, Arts & Social Sciences" },
    { name: "Dentistry", category: "Medicine, Health & Life Sciences" },
    { name: "Medicine and Surgery", category: "Medicine, Health & Life Sciences" },
    { name: "Automotive Engineering", category: "Engineering & Technology" }
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

  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filterCourse = (course: { name: string, category: string }) => {
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  };

  const filteredFeatured = featuredPrograms.filter(filterCourse);
  const filteredSpecialized = specializedPrograms.filter(filterCourse);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 selection:bg-blue-500/30 overflow-hidden pt-20 pb-16 relative font-sans">

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
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-black tracking-widest text-blue-600 uppercase mb-4 shadow-sm"
          >
            <LibraryBig size={14} />
            Academic Excellence
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3 leading-[1.1] text-slate-900"
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

        {/* Search and Filter Section */}
        <div className="mb-12 max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-1">
            <div className="relative w-full sm:max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="relative w-full sm:max-w-[280px]">
              <select
                className="block w-full pl-4 pr-10 py-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm appearance-none cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All Categories">All Categories</option>
                <option value="Economics, Business & Management">Economics, Business & Management</option>
                <option value="Medicine, Health & Life Sciences">Medicine, Health & Life Sciences</option>
                <option value="Engineering & Technology">Engineering & Technology</option>
                <option value="Humanities, Arts & Social Sciences">Humanities, Arts & Social Sciences</option>
                <option value="Natural Sciences & Environment">Natural Sciences & Environment</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>
          
          <div className="flex bg-white/80 backdrop-blur-sm p-1.5 rounded-2xl border border-slate-200 shadow-sm w-full md:w-auto overflow-x-auto shrink-0">
            {["All", "Featured", "Specialized"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeFilter === filter 
                    ? "bg-blue-600 text-white shadow-md" 
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Programs Section */}
        {(activeFilter === "All" || activeFilter === "Featured") && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
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
            {filteredFeatured.length > 0 ? (
              filteredFeatured.map((course, idx) => (
                <div key={idx} className="group relative bg-white/75 backdrop-blur-md rounded-2xl p-5 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${getGradient(idx)} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <div className="flex flex-col gap-2 pl-2">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 shrink-0">
                        <BookOpen size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors">
                        {course.name}
                      </h3>
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 pl-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      {course.category}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-8 text-center text-slate-500 text-sm">
                No featured programs found matching your criteria.
              </div>
            )}
          </div>
          
          <div className="mt-8 sm:hidden flex justify-center">
             <button onClick={openBookCall} className="flex items-center gap-2 text-sm font-bold text-blue-600 bg-blue-50 px-6 py-3 rounded-full border border-blue-100">
               Learn More <ArrowRight size={16} />
             </button>
          </div>
        </motion.div>
        )}

        {/* Specialized Programs Section */}
        {(activeFilter === "All" || activeFilter === "Specialized") && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
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
            {filteredSpecialized.length > 0 ? (
              filteredSpecialized.map((course, idx) => (
                <div key={idx} className="group relative bg-white/75 backdrop-blur-md rounded-2xl p-5 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${getGradient(idx + 3)} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <div className="flex flex-col gap-2 pl-2">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 shrink-0">
                        <BookOpen size={18} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-indigo-700 transition-colors">
                        {course.name}
                      </h3>
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 pl-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      {course.category}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-8 text-center text-slate-500 text-sm">
                No specialized programs found matching your criteria.
              </div>
            )}
          </div>
          
          <div className="mt-8 sm:hidden flex justify-center">
             <button onClick={openBookCall} className="flex items-center gap-2 text-sm font-bold text-indigo-600 bg-indigo-50 px-6 py-3 rounded-full border border-indigo-100">
               Learn More <ArrowRight size={16} />
             </button>
          </div>
        </motion.div>
        )}

      </div>
    </div>
  );
}
