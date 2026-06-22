"use client";

import { motion } from "framer-motion";
import { GraduationCap, FileText, CheckCircle2, Award, Plane, BookOpen } from "lucide-react";

export default function RequirementsPage() {
  const scholarshipDocs = [
    "Family Income Certificate",
    "Property Certificate",
    "Bank Balance Certificate",
    "Passport",
  ];

  const admissionDocs = [
    "Passport",
    "Educational documents",
    "Europass Cv",
    "English proficiency certificate – Medium of Instruction Certificate or IELTS",
    "2 letters of recommendation (LOR)",
    "Photo",
    "Statement of Purpose (SOP)",
  ];

  const visaDocs = [
    "Cover Letter (max 1 page)",
    "Passport and copy",
    "Visa application form",
    "2 passport size photographs",
    "Acceptance letter",
    "Pre enrolment summary",
    "All educational Documents",
    "Sponsorship affidavit",
    "6 months Bank statement of sponsor",
    "Sponsors source of income",
    "Overseas Medical Insurance of 30,000 euro",
    "Accommodation booking of 30 days",
    "Air ticket reservation",
    "Cv",
    "DOV or CIMEA",
  ];

  return (
    <div className="h-screen w-full bg-slate-50 text-slate-900 selection:bg-blue-500/30 overflow-hidden relative font-sans flex flex-col pt-20 pb-4">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#f8fafc_0%,#f1f5f9_100%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/10 blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-400/10 blur-[100px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col h-full overflow-hidden gap-4">
        
        {/* Header Section (Compact) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 shrink-0 mt-4 md:mt-2">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black tracking-widest text-blue-600 uppercase mb-2 shadow-sm"
            >
              <BookOpen size={12} />
              Step-by-Step Guide
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black tracking-tight leading-none text-slate-900"
            >
              Admission & Visa <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Requirements</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-slate-600 font-medium max-w-md text-center md:text-right hidden md:block"
          >
            Keep this checklist handy as you gather your documents for a successful study abroad journey to Italy.
          </motion.p>
        </div>

        {/* Admission Requirements Banner (Compact) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="shrink-0 bg-white/60 backdrop-blur-md rounded-2xl border border-blue-100/50 shadow-sm p-4 md:p-5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500" />
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 hidden md:flex items-center justify-center shrink-0 border-[3px] border-white shadow-sm">
              <GraduationCap className="text-blue-600" size={24} />
            </div>
            
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex items-start gap-2 bg-white/50 p-2.5 rounded-lg border border-slate-100/50">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block uppercase tracking-wider">Bachelors</span>
                    <span className="text-xs text-slate-600 font-medium">12 years schooling</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/50 p-2.5 rounded-lg border border-slate-100/50">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block uppercase tracking-wider">Masters</span>
                    <span className="text-xs text-slate-600 font-medium">15 years education</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/50 p-2.5 rounded-lg border border-slate-100/50">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block uppercase tracking-wider">Grades</span>
                    <span className="text-xs text-slate-600 font-medium">60% Minimum</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/50 p-2.5 rounded-lg border border-slate-100/50">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block uppercase tracking-wider">Language</span>
                    <span className="text-xs text-slate-600 font-medium">IELTS (Optional)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Checklists Grid (Scrollable internally) */}
        <div className="flex-1 min-h-0 grid md:grid-cols-3 gap-4 lg:gap-6 pb-2">
          
          {/* Card 1: Scholarship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm flex flex-col overflow-hidden"
          >
            <div className="p-4 md:p-5 border-b border-slate-100 bg-white/50 shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center border border-cyan-100 shrink-0">
                <Award className="text-cyan-600" size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Scholarship Docs</h3>
            </div>
            <div className="p-4 md:p-5 overflow-y-auto flex-1 custom-scrollbar">
              <ul className="space-y-3">
                {scholarshipDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-600 font-medium text-sm">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Admission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm flex flex-col overflow-hidden"
          >
            <div className="p-4 md:p-5 border-b border-slate-100 bg-white/50 shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 shrink-0">
                <FileText className="text-blue-600" size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Admission Docs</h3>
            </div>
            <div className="p-4 md:p-5 overflow-y-auto flex-1 custom-scrollbar">
              <ul className="space-y-3">
                {admissionDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-600 font-medium text-sm">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Visa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm flex flex-col overflow-hidden"
          >
            <div className="p-4 md:p-5 border-b border-slate-100 bg-white/50 shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100 shrink-0">
                <Plane className="text-indigo-600" size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Student Visa Docs</h3>
            </div>
            <div className="p-4 md:p-5 overflow-y-auto flex-1 custom-scrollbar">
              <ul className="space-y-3">
                {visaDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-600 font-medium text-sm">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}} />
    </div>
  );
}

