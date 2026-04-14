"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/context/ModalContext";

export function LoginModal() {
  const { isLoginOpen, closeLogin } = useModal();

  return (
    <AnimatePresence>
      {isLoginOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLogin}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-[101] overflow-hidden"
          >
             <div className="flex justify-between items-center p-6 border-b border-gray-100">
               <h2 className="text-2xl font-bold text-gray-900">Student Portal Login</h2>
               <button onClick={closeLogin} className="text-gray-400 hover:text-gray-700 transition">
                 <X size={24} />
               </button>
             </div>
             
             <div className="p-6 space-y-4">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Email / Phone</label>
                 <input 
                   type="text" 
                   className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50" 
                   placeholder="Enter your registered email"
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                 <input 
                   type="password" 
                   className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50" 
                   placeholder="••••••••"
                 />
               </div>
               <div className="flex justify-between items-center pt-2">
                 <label className="flex items-center gap-2 text-sm text-gray-600">
                   <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                   Remember me
                 </label>
                 <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
               </div>
               <Button variant="gradient" className="w-full mt-4 py-4 text-lg">
                  Access Portal
               </Button>
               <p className="text-center text-sm text-gray-500 mt-4">
                 Don't have an account? <span className="text-primary font-medium cursor-pointer" onClick={() => { closeLogin(); }}>Start Application</span>
               </p>
             </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
