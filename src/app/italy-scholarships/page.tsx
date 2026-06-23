"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Euro, ShieldCheck, Key, FileText, Calendar, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { EligibilityPopup } from "@/components/ui/EligibilityPopup";

export default function ItalyScholarships() {
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);

  const regions = [
    { name: "Lombardy (Milan, Pavia)", body: "DSU", coverage: "100% Tuition Waiver + Free Canteen Meals + Up to €7,000/year" },
    { name: "Lazio (Rome)", body: "DiscoLazio", coverage: "100% Tuition Waiver + Accommodation Subsidy + Cash Stipend" },
    { name: "Piedmont (Turin)", body: "EDISU", coverage: "100% Tuition Waiver + Campus Housing + Cash Stipend" },
    { name: "Tuscany (Florence, Pisa)", body: "DSU Toscana", coverage: "100% Tuition Waiver + Free Meals + Cash Stipend" }
  ];

  const documents = [
    { title: "Family Composition Certificate", desc: "An official document listing all members living in your household." },
    { title: "Gross Annual Income Certificates", desc: "Income tax returns (ITR) or official salary slips for every working member of the family for the previous calendar year." },
    { title: "Property & Real Estate Certificates", desc: "Documents stating the built-up area (in square meters) of the family home, or a certificate proving you live in a rented property." },
    { title: "Bank Balance Statements", desc: "Certified bank balances for all family members as of December 31st of the previous year." },
    { title: "Apostille & Italian Translation", desc: "Crucial note—all native documents must be officially translated into Italian and legalized/apostilled by the Ministry of External Affairs (MEA).", alert: true }
  ];

  const timeline = [
    { period: "March - May", title: "University Admissions & Offers", desc: "Secure your offer letter from your target Italian university." },
    { period: "May - June", title: "Document Preparation & Apostille", desc: "Gather local financial documents, get them translated into Italian, and obtain MEA Apostille stamps." },
    { period: "July - August", title: "Regional Scholarship Applications Open", desc: "Submit the financial data online directly to the specific regional portal (DSU, EDISU, etc.) before the hard deadlines close." },
    { period: "September - October", title: "Final Rankings & Disbursement", desc: "Arrive in Italy, submit physical documents to the CAF office, and receive your official results. First stipend installments are usually disbursed by December." }
  ];

  // Common animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as any;
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="bg-white text-slate-900 font-sans overflow-x-hidden">

      {/* 1. Super Premium Animated Hero Section */}
      <section className="relative pt-16 md:pt-20 pb-8 md:pb-10 flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradients */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 bg-[length:400%_400%] z-0"
        />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 w-full px-4 md:px-8 xl:px-16 flex flex-col items-center text-center"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/50 text-blue-700 font-bold text-[11px] mb-4 shadow-sm shadow-blue-900/5 cursor-default"
          >
            <Euro className="w-3.5 h-3.5" />
            <span className="tracking-widest uppercase">The Italian Promise</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-4xl xl:text-5xl font-black tracking-tight text-slate-900 mb-4 leading-tight max-w-4xl mx-auto"
          >
            Education is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 pb-1">Fundamental Right.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Study at top-tier public universities with a <strong className="text-blue-700 font-bold">100% tuition waiver</strong> and receive cash stipends to cover living expenses. No academic cut-offs. Purely need-based.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Full Bleed Scholarship Breakdown */}
      <section className="relative w-full bg-slate-50 text-slate-900 pt-8 pb-12 md:pt-10 md:pb-16 overflow-hidden">
        {/* Animated BG */}
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 bg-[length:200%_200%] pointer-events-none"
        />

        <div className="px-4 md:px-8 xl:px-16 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
          >
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">The Core Breakdown</h2>
            </div>
          </motion.div>


          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-x-auto hide-scrollbar bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 pb-2"
          >
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-widest text-[11px] font-bold bg-slate-100/50">
                  <th className="py-4 pl-6 w-1/3">Region</th>
                  <th className="py-4 w-1/4">Body</th>
                  <th className="py-4 pr-6 w-1/2">Coverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {regions.map((region, idx) => (
                  <motion.tr 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ backgroundColor: "rgba(248, 250, 252, 1)" }}
                    key={idx} 
                    className="group transition-colors duration-300"
                  >
                    <td className={`pt-4 ${idx === regions.length - 1 ? 'pb-8' : 'pb-4'} pl-6 text-base font-bold group-hover:text-indigo-700 transition-colors`}>{region.name}</td>
                    <td className={`pt-4 ${idx === regions.length - 1 ? 'pb-8' : 'pb-4'} text-sm font-bold text-indigo-600 transition-colors`}>{region.body}</td>
                    <td className={`pt-4 ${idx === regions.length - 1 ? 'pb-8' : 'pb-4'} pr-6 text-sm text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors`}>{region.coverage}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* 3. The Golden Key (ISEE) - Edge to Edge Split */}
      <section className="w-full flex flex-col lg:flex-row min-h-[40vh]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 bg-violet-600 p-6 md:p-12 flex flex-col justify-center text-white relative overflow-hidden"
        >
          {/* Animated Background Element */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[20%] w-[50%] h-[50%] rounded-full bg-violet-500/50 blur-[80px]"
          />
          
          <div className="relative z-10">
            <motion.div whileHover={{ rotate: 15 }} className="inline-block">
              <Key className="w-10 h-10 text-violet-200 mb-4" />
            </motion.div>
            <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4 tracking-tighter">
              Demystifying the ISEE-Parificato
            </h2>
            <p className="text-base font-medium text-violet-100 leading-relaxed">
              It is an official financial index certificate calculated by an authorized Italian authority (CAF). It measures your family's economic status by looking at global income and property values.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 bg-violet-50 p-6 md:p-12 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-xl md:text-3xl font-black text-violet-900 mb-4">The Threshold</h3>
            <p className="text-base text-violet-800 leading-relaxed mb-6">
              To qualify for the maximum 100% scholarship and cash stipend, your family's annual ISEE value must fall below the regional threshold.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="inline-block self-start px-5 py-3 bg-white rounded-xl shadow-lg shadow-violet-900/10 border border-violet-100 transition-all cursor-default"
            >
              <div className="text-[11px] font-bold text-violet-600 uppercase tracking-widest mb-1">Typically Around</div>
              <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">
                €23k - €25k
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 4. Required Documents - Full Width Alternate Layout */}
      <section className="relative w-full bg-slate-50 py-12 md:py-16 overflow-hidden">
        {/* Floating Background Shapes */}
        <motion.div
          animate={{ y: [0, 40, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-emerald-200/40 blur-[100px] pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -40, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-amber-200/30 blur-[120px] pointer-events-none"
        />

        <div className="px-4 md:px-8 xl:px-16 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="mb-10 flex flex-col items-center text-center"
          >
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 4, repeat: Infinity }} className="inline-block">
              <FileText className="w-10 h-10 text-emerald-500 mb-3" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Required Documents</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {documents.map((doc, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-6 ${idx === documents.length - 1 ? 'md:col-span-2 lg:col-span-2 bg-amber-100/90' : 'bg-white/90'} backdrop-blur-md ${doc.alert ? 'text-amber-900' : 'text-slate-900'} shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl border ${doc.alert ? 'border-amber-200 hover:border-amber-400' : 'border-white hover:border-emerald-200'}`}
              >
                <div className="mb-3">
                  {doc.alert ? (
                    <motion.div animate={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }} className="inline-block">
                      <AlertCircle className="w-8 h-8 text-amber-600" />
                    </motion.div>
                  ) : (
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2 leading-tight">{doc.title}</h3>
                <p className={`text-sm leading-relaxed ${doc.alert ? 'text-amber-800' : 'text-slate-600'}`}>{doc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. The Timeline - Edge to Edge Horizontal Scroll or Large Grid */}
      <section className="relative w-full bg-white py-12 md:py-16 overflow-hidden">
        {/* Floating Background */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-cyan-50/80 blur-[120px] pointer-events-none"
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="px-4 md:px-8 xl:px-16 mb-8 relative z-10"
        >
          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }} className="inline-block">
            <Calendar className="w-10 h-10 text-cyan-500 mb-3" />
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">The Critical Timeline</h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="flex overflow-x-auto pb-8 px-4 md:px-8 xl:px-16 gap-5 hide-scrollbar snap-x relative z-10 pt-4"
        >
          {timeline.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.03 }}
              className="min-w-[85vw] md:min-w-[280px] snap-center bg-cyan-50/80 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-cyan-100 flex flex-col hover:shadow-xl hover:shadow-cyan-900/10 hover:border-cyan-300 transition-all duration-300"
            >
              <div className="text-[11px] font-bold text-cyan-600 tracking-widest uppercase mb-3 bg-white px-2.5 py-1 rounded-full w-max shadow-sm">{step.period}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{step.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed mt-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 6. Section Call-to-Action (CTA) */}
      <section className="w-full bg-blue-600 py-16 px-4 md:px-8 xl:px-16 text-center text-white relative overflow-hidden">
        {/* Pulsating Gradient Overlay */}
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent mix-blend-overlay"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-5 leading-tight">
            Uncertain if your family income qualifies you for a full waiver?
          </h2>
          <p className="text-base text-blue-100 mb-8 leading-relaxed max-w-2xl">
            One tiny formatting mistake in your financial file can lead to a scholarship rejection. Let our experts evaluate your profile safely.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 20px 25px -5px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEligibilityOpen(true)}
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-base px-6 py-3 rounded-full transition-all group"
          >
            Check My Eligibility Now
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <ArrowRight className="w-5 h-5 group-hover:text-blue-700 transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>
      </section>

      <EligibilityPopup
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
        initialTab="scholarship"
      />
    </div>
  );
}


