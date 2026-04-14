"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/context/ModalContext";

export function BookCallModal() {
  const { isBookCallOpen, closeBookCall } = useModal();

  return (
    <AnimatePresence>
      {isBookCallOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBookCall}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-[101] overflow-hidden"
          >
             <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
               <div>
                 <h2 className="text-2xl font-bold text-gray-900">Book Free Strategy Call</h2>
                 <p className="text-sm text-gray-600 mt-1">Talk to our experts within 24 hours.</p>
               </div>
               <button onClick={closeBookCall} className="text-gray-400 hover:text-gray-700 transition">
                 <X size={24} />
               </button>
             </div>
             
             <div className="p-6 space-y-4">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                 <input 
                   type="text" 
                   className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50" 
                   placeholder="Your Name"
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (WhatsApp)</label>
                 <input 
                   type="tel" 
                   className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50" 
                   placeholder="+91 9876543210"
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Target Intake</label>
                 <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option>Fall (September)</option>
                    <option>Spring (February)</option>
                    <option>Not Sure Yet</option>
                 </select>
               </div>
               
               <Button variant="gradient" className="w-full mt-6 py-4 text-lg">
                  Confirm Booking <Calendar size={18} className="ml-2 inline" />
               </Button>
               <p className="text-center text-xs text-gray-500 mt-2">
                 We'll redirect you to Calendly to pick your exact time slot.
               </p>
             </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
