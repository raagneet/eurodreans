"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, XCircle, ArrowRight, GraduationCap, Wallet, Plane } from "lucide-react";

interface EligibilityPopupProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "admission" | "scholarship" | "visa";
}

export function EligibilityPopup({ isOpen, onClose, initialTab = "admission" }: EligibilityPopupProps) {
  const [activeTab, setActiveTab] = useState<"admission" | "scholarship" | "visa">(initialTab);
  const [status, setStatus] = useState<"pending" | "eligible" | "ineligible">("pending");
  const [failReason, setFailReason] = useState<string>("");

  // Admission State
  const [academicBg, setAcademicBg] = useState("");
  const [program, setProgram] = useState("postgraduation");
  const [marks, setMarks] = useState<number | "">("");

  // Scholarship State
  const [income, setIncome] = useState<number>(500000);

  // Visa State
  const [funds, setFunds] = useState<number>(500000);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const checkEligibility = () => {
    if (activeTab === "admission") {
      if (!academicBg) {
        setFailReason("Please select your academic background.");
        setStatus("ineligible");
        return;
      }
      if (marks === "") {
        setFailReason("Please provide your graduation marks.");
        setStatus("ineligible");
        return;
      }
      if (typeof marks !== 'number' || marks < 60) {
        setFailReason("Unfortunately, a minimum of 60% marks is required for admission eligibility.");
        setStatus("ineligible");
        return;
      }
      setStatus("eligible");
    } else if (activeTab === "scholarship") {
      if (income >= 2500000) {
        setFailReason("Unfortunately, scholarships are only available for family income below ₹25 Lakhs.");
        setStatus("ineligible");
        return;
      }
      setStatus("eligible");
    } else if (activeTab === "visa") {
      if (funds <= 1100000) {
        setFailReason("Unfortunately, a minimum fund of ₹11 Lakhs is required for the Visa process.");
        setStatus("ineligible");
        return;
      }
      setStatus("eligible");
    }
  };

  const reset = () => {
    setStatus("pending");
    setActiveTab(initialTab);
    setFailReason("");
    setAcademicBg("");
    setProgram("postgraduation");
    setMarks("");
    setIncome(500000);
    setFunds(500000);
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    } else {
      setActiveTab(initialTab);
      setStatus("pending");
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Eligibility Check</h2>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Top Tabs Navigation */}
          {status === "pending" && (
            <div className="flex justify-center px-4 pt-4 pb-0 bg-slate-50/50 border-b border-slate-100 gap-2 overflow-x-auto hide-scrollbar">
              <button
                onClick={() => setActiveTab("admission")}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 font-bold text-sm transition-colors whitespace-nowrap ${
                  activeTab === "admission" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                <GraduationCap size={18} /> Admission
              </button>
              <button
                onClick={() => setActiveTab("scholarship")}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 font-bold text-sm transition-colors whitespace-nowrap ${
                  activeTab === "scholarship" ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                <Wallet size={18} /> Scholarship
              </button>
              <button
                onClick={() => setActiveTab("visa")}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 font-bold text-sm transition-colors whitespace-nowrap ${
                  activeTab === "visa" ? "border-emerald-600 text-emerald-600" : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                <Plane size={18} /> Visa
              </button>
            </div>
          )}

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              {status === "pending" && (
                <motion.div
                  key={`tab-${activeTab}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Tab Content: Admission */}
                  {activeTab === "admission" && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Academic Background</label>
                        <select
                          value={academicBg}
                          onChange={(e) => setAcademicBg(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                        >
                          <option value="">Select your background</option>
                          <option value="engineering">Engineering</option>
                          <option value="business">Business</option>
                          <option value="arts_design">Arts & Design</option>
                          <option value="computer_science">Computer Science</option>
                          <option value="medicine">Medicine</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Program</label>
                        <select
                          value={program}
                          onChange={(e) => setProgram(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                        >
                          <option value="graduation">Bachelors (Graduation)</option>
                          <option value="postgraduation">Masters (Postgraduation)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Graduation Marks (%)</label>
                        <input
                          type="number"
                          placeholder="Enter percentage (e.g. 75)"
                          value={marks}
                          onChange={(e) => setMarks(e.target.value ? Number(e.target.value) : "")}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        />
                      </div>
                    </div>
                  )}

                  {/* Tab Content: Scholarship */}
                  {activeTab === "scholarship" && (
                    <div className="space-y-6">
                      <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <label className="block text-sm font-semibold text-slate-700 mb-6 text-center">Annual Family Income</label>
                        <div className="text-4xl font-black text-indigo-600 mb-8 text-center drop-shadow-sm">
                          {formatCurrency(income)}
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="10000000"
                          step="100000"
                          value={income}
                          onChange={(e) => setIncome(Number(e.target.value))}
                          className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 shadow-inner"
                        />
                        <div className="flex justify-between text-sm text-slate-400 mt-4 font-bold">
                          <span>₹0</span>
                          <span>₹1 Cr</span>
                        </div>
                      </div>
                      <p className="text-xs text-center text-slate-500 font-medium px-4">
                        * Adjust the slider to represent your total annual family income.
                      </p>
                    </div>
                  )}

                  {/* Tab Content: Visa */}
                  {activeTab === "visa" && (
                    <div className="space-y-6">
                      <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <label className="block text-sm font-semibold text-slate-700 mb-6 text-center">Available Funds for Visa</label>
                        <div className="text-4xl font-black text-emerald-600 mb-8 text-center drop-shadow-sm">
                          {formatCurrency(funds)}
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="5000000"
                          step="100000"
                          value={funds}
                          onChange={(e) => setFunds(Number(e.target.value))}
                          className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 shadow-inner"
                        />
                        <div className="flex justify-between text-sm text-slate-400 mt-4 font-bold">
                          <span>₹0</span>
                          <span>₹50 L</span>
                        </div>
                      </div>
                      <p className="text-xs text-center text-slate-500 font-medium px-4">
                        * Provide an estimate of available liquid funds for visa proof.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Status Cards */}
              {status === "eligible" && (
                <motion.div
                  key="eligible"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-24 h-24 bg-gradient-to-tr from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/30">
                    <CheckCircle size={48} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-3">You are Eligible!</h3>
                  <p className="text-base text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
                    {activeTab === "admission" && "Congratulations! Your profile meets all academic requirements for admission to top Italian universities."}
                    {activeTab === "scholarship" && "Congratulations! You are eligible for 100% funding scholarships based on your family income."}
                    {activeTab === "visa" && "Congratulations! You meet the minimum fund requirements for a successful Italian student visa."}
                    {" "}Let's start your journey to Italy!
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSelWs6zYK01AKTnSAVMYb7CH5q-x6MEJKH13xANbdBwnSbCGw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-base hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 w-full"
                  >
                    Proceed to Consultation
                  </a>
                </motion.div>
              )}

              {status === "ineligible" && (
                <motion.div
                  key="ineligible"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-24 h-24 bg-gradient-to-tr from-red-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-red-500/30">
                    <XCircle size={48} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-3">Not Eligible</h3>
                  <p className="text-sm font-semibold text-red-600 mb-8 max-w-md mx-auto bg-red-50/50 py-3 px-4 rounded-xl border border-red-100/50">
                    {failReason}
                  </p>
                  <button
                    onClick={reset}
                    className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 text-slate-700 rounded-full font-bold text-base hover:bg-slate-200 transition-colors w-full"
                  >
                    Try Again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Check Button */}
          {status === "pending" && (
            <div className="p-6 border-t border-slate-100 bg-white">
              <button
                onClick={checkEligibility}
                className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10 hover:scale-[1.02] active:scale-95"
              >
                Check {activeTab === "admission" ? "Admission" : activeTab === "scholarship" ? "Scholarship" : "Visa"} Eligibility <ArrowRight size={20} />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
