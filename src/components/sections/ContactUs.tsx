"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.interest || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", interest: "", message: "" });
    } catch (err) {
      console.error("Failed to save enquiry:", err);
      alert("Something went wrong while submitting your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-emerald-100/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-xl shadow-slate-200/50 border-y border-slate-100 overflow-hidden flex flex-col md:flex-row"
        >
          {/* Left Column: Info */}
          <div className="w-full md:w-[40%] bg-blue-50/40 p-8 md:py-16 md:pl-[5vw] lg:pl-[10vw] xl:pl-[15vw] md:pr-10 border-r border-slate-100 flex flex-col justify-center">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-4 shadow-sm">
                Get In Touch
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3 tracking-tight leading-tight">
                Let's plan your <br />
                <span className="text-blue-600">Italian Journey.</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our expert counselors are ready to help you secure your fully-funded scholarship to Italy.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-0.5">Visit Us</h4>
                  <p className="text-slate-500 text-xs">Connaught Place, New Delhi</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-0.5">Call Us</h4>
                  <p className="text-slate-500 text-xs">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-0.5">Email Us</h4>
                  <p className="text-slate-500 text-xs">hello@eurodreams.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full md:w-[60%] p-8 md:py-16 md:pr-[5vw] lg:pr-[10vw] xl:pr-[15vw] md:pl-10 bg-white flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Send a direct message</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex flex-col items-center justify-center"
              >
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                <h4 className="text-xl font-extrabold text-emerald-900 mb-2">Message Sent Successfully!</h4>
                <p className="text-emerald-700 text-sm max-w-sm">
                  Thank you for reaching out. One of our counselors will contact you on WhatsApp or Email within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-bold text-emerald-600 hover:text-emerald-800 underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative">
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="peer w-full border-b-2 border-slate-200 bg-transparent py-2 text-slate-900 focus:border-blue-600 focus:outline-none transition-colors placeholder-transparent text-sm"
                      placeholder="Full Name"
                      required
                    />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs font-bold text-slate-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-blue-600 cursor-text">
                      Full Name
                    </label>
                  </div>

                  <div className="relative">
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="peer w-full border-b-2 border-slate-200 bg-transparent py-2 text-slate-900 focus:border-blue-600 focus:outline-none transition-colors placeholder-transparent text-sm"
                      placeholder="Email Address"
                      required
                    />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs font-bold text-slate-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-blue-600 cursor-text">
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <select 
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="peer w-full border-b-2 border-slate-200 bg-transparent py-2 text-slate-900 focus:border-blue-600 focus:outline-none transition-colors appearance-none cursor-pointer text-sm"
                    required
                  >
                    <option value="" disabled>Select an area of interest</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="scholarship">100% Scholarship Support</option>
                  </select>
                  <label htmlFor="interest" className="absolute left-0 -top-3.5 text-xs font-bold text-blue-600 transition-all">
                    How can we help?
                  </label>
                </div>

                <div className="relative mt-8">
                  <textarea 
                    id="message"
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="peer w-full border-b-2 border-slate-200 bg-transparent py-2 text-slate-900 focus:border-blue-600 focus:outline-none transition-colors placeholder-transparent resize-none text-sm"
                    placeholder="Tell us about your background..."
                    required
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs font-bold text-slate-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-blue-600 cursor-text">
                    Tell us about your background...
                  </label>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white w-full py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 text-sm"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"} <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
