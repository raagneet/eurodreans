"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Wallet, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Download, 
  X, 
  Loader2 
} from "lucide-react";

export default function FreeResourcesPage() {
  const [selectedResource, setSelectedResource] = useState<any | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const resources = [
    {
      id: "study-for-free",
      title: "Study in Italy for Free",
      description: "The complete step-by-step roadmap to securing 100% tuition waiver public education in Italy.",
      icon: <GraduationCap className="text-blue-600" size={22} />,
      color: "from-blue-500/20 to-cyan-500/20",
      features: [
        "Step-by-step university application guide",
        "List of top public English-taught programs",
        "IELTS waiver sample templates",
        "Essential admission checklist for 2026"
      ],
      pdfName: "Study_In_Italy_For_Free_Guide.pdf"
    },
    {
      id: "scholarship-guide-2026",
      title: "Scholarship Guide 2026",
      description: "Your ultimate manual to regional Italian scholarships (DSU, DiscoLazio, EDISU, etc.) and application steps.",
      icon: <Award className="text-indigo-600" size={22} />,
      color: "from-indigo-500/20 to-purple-500/20",
      features: [
        "Income limit thresholds by region",
        "Required document checklist (Apostille/Translation)",
        "CAF & ISEE-Parificato calculation tips",
        "Deadlines and rank list release dates"
      ],
      pdfName: "Italy_Scholarship_Guide_2026.pdf"
    },
    {
      id: "cost-of-studying",
      title: "Cost of Studying in Italy",
      description: "A realistic breakdown of student living costs, rent comparison by city, food, transport, and utilities.",
      icon: <Wallet className="text-emerald-600" size={22} />,
      color: "from-emerald-500/20 to-teal-500/20",
      features: [
        "Rent comparison: Milan vs Rome vs Pisa vs Cassino",
        "Average grocery and public transport costs",
        "Part-time job rules and hourly pay rates",
        "Monthly student budget calculator sheet"
      ],
      pdfName: "Cost_of_Studying_in_Italy_2026.pdf"
    },
    {
      id: "mbbs-in-italy",
      title: "MBBS in Italy",
      description: "Complete guide to the Italian Medical Admissions Test (IMAT), public medical school seat allocations, and cutoffs.",
      icon: <Activity className="text-rose-600" size={22} />,
      color: "from-rose-500/20 to-orange-500/20",
      features: [
        "IMAT test structure and subject breakdown",
        "Seat allocations for EU vs Non-EU candidates",
        "Previous years' university cutoff lists",
        "Recommended preparation books and mock plans"
      ],
      pdfName: "MBBS_IMAT_Italy_Prep_Guide.pdf"
    }
  ];

  const handleOpenModal = (resource: any) => {
    setSelectedResource(resource);
    setSubmitState("idle");
    setFormData({ name: "", email: "", phone: "" });
    setErrorMessage("");
  };

  const handleCloseModal = () => {
    setSelectedResource(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setSubmitState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to submit details.");
      }

      setSubmitState("success");
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred. Please try again.");
      setSubmitState("error");
    }
  };

  const handleDownload = () => {
    // Generate dummy download trigger
    const link = document.createElement("a");
    link.href = "/Logo-Euro-dreams-1536x410.png"; // Fallback real file to trigger standard browser download UI
    link.download = selectedResource?.pdfName || "Guide.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleCloseModal();
  };

  return (
    <div className="w-full bg-slate-50 text-slate-900 pt-32 pb-24 overflow-hidden relative font-sans min-h-screen">
      
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#f8fafc_0%,#f1f5f9_100%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/5 blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-400/5 blur-[100px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles size={12} className="animate-pulse" />
            100% Free Downloads
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 leading-tight"
          >
            Free Study in Italy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Guides</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg font-medium"
          >
            Get instant access to our expert-written, high-quality guides. Everything you need to successfully transition to studying in Italy for free.
          </motion.p>
        </div>

        {/* 4-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16 max-w-7xl">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 60, damping: 15 }}
              onClick={() => handleOpenModal(resource)}
              className="relative bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group flex flex-col h-full cursor-pointer"
            >
              {/* Dynamic Gradient Blob Background */}
              <div className={`absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br ${resource.color} blur-[25px] group-hover:scale-150 transition-transform duration-700 ease-out`} />

              {/* Icon & Title Header */}
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                  {resource.icon}
                </div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Download Guide
                </span>
              </div>

              <h3 className="text-base font-extrabold text-slate-900 leading-snug mb-2 relative z-10 group-hover:text-blue-600 transition-colors">
                {resource.title}
              </h3>

              <p className="text-slate-500 text-xs font-medium leading-relaxed mb-4 relative z-10">
                {resource.description}
              </p>

              {/* Features List */}
              <div className="relative z-10 mt-auto pt-2">
                <ul className="space-y-2">
                  {resource.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-[11px] font-semibold leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lead Capture Modal */}
        <AnimatePresence>
          {selectedResource && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              />

              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden p-6 sm:p-8"
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>

                {submitState !== "success" ? (
                  <>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-2">Get Your Free Guide</h3>
                    <p className="text-slate-500 text-xs font-semibold mb-6">
                      Fill out the form below to unlock access and download <strong className="text-blue-600">{selectedResource.title}</strong> instantly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm font-medium"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm font-medium"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">WhatsApp / Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm font-medium"
                          required
                        />
                      </div>

                      {errorMessage && (
                        <p className="text-red-500 text-xs font-semibold">{errorMessage}</p>
                      )}

                      <button
                        type="submit"
                        disabled={submitState === "loading"}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:bg-slate-300 text-sm"
                      >
                        {submitState === "loading" ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Unlocking Guide...
                          </>
                        ) : (
                          "Unlock Free Guide"
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-gradient-to-tr from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
                      <CheckCircle2 size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Unlocked Successfully!</h3>
                    <p className="text-slate-500 text-xs font-medium mb-8 max-w-xs mx-auto leading-relaxed">
                      Thank you! Your details have been verified. Click below to download your copy of <strong className="text-slate-800">{selectedResource.title}</strong> now.
                    </p>

                    <button
                      onClick={handleDownload}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 text-sm shadow-md shadow-emerald-600/20"
                    >
                      <Download size={16} />
                      Download Guide Now
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
