"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

const plans = [
  {
    name: "Admission Process",
    price: "₹ 40,000",
    description: "Phase 1: Your journey begins with university selection and applications.",
    features: [
      "Assessment of profile",
      "Universities shortlisting",
      "Format of the letter of recommendation",
      "Format of English proficiency format",
      "Letter of motivation / SOP format",
      "Application sent to highly regarded Universities"
    ],
    popular: false,
    cta: "Start Admission",
  },
  {
    name: "Pre-Enrollment",
    price: "₹ 40,000",
    description: "Phase 2: Securing your acceptance and preparing official documents.",
    features: [
      "University Acceptance Letter",
      "HRD attestation Assistance",
      "Apostille, Translation and Legalization process",
      "Courier Charges",
      "Pre-enrollment Application process",
      "DOV (Declaration of value) Assistance"
    ],
    popular: false,
    cta: "Begin Pre-Enrollment",
  },
  {
    name: "Scholarship Process",
    price: "₹ 40,000",
    description: "Phase 3: Securing full funding and submitting necessary documents.",
    features: [
      "Scholarship Document - Application & submission",
      "Apostille, Translation & Legalization process",
      "Courier Charges"
    ],
    popular: false,
    cta: "Secure Scholarship",
  },
  {
    name: "VISA Process",
    price: "₹ 40,000",
    description: "Phase 4: Finalizing your move with a guaranteed step-by-step visa plan.",
    features: [
      "Visa application assistance & Appointment",
      "Application form filling & Cover letter",
      "Sponsor letter & 1-year Travel insurance",
      "Itinerary & Accommodation proof (Visa only)",
      "International contact assistance",
      "Visa Interview Preparation (Mock Interviews)"
    ],
    popular: false,
    cta: "Apply For Visa",
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as any;

export function PricingSection() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-indigo-100/30 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-bold tracking-widest text-blue-700 uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Transparent Pricing Breakdown
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            A Step-by-Step Investment <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">in your Italian Dream.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We break down our comprehensive service into four manageable phases. Pay as you progress through each crucial step of your journey to Italy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative rounded-3xl p-5 lg:p-6 bg-white text-slate-900 border border-slate-200 shadow-md transition-all duration-300 hover:shadow-xl flex flex-col h-full hover:-translate-y-1"
            >
              
              <h3 className="text-lg font-bold mb-1 text-slate-500">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-black tracking-tight">{plan.price}</span>
              </div>
              <p className="text-xs mb-6 leading-relaxed min-h-[40px] text-slate-600">
                {plan.description}
              </p>

              <div className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" />
                    <span className="text-xs font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
