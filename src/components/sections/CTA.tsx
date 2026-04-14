"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function CTASection() {
  const { openBookCall } = useModal();
  return (
    <section className="relative py-32 bg-background overflow-hidden border-t border-gray-200">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900">
            Start Your <br/>
            <span className="text-gradient">Italy Journey Today</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10">
            Don't let another intake pass by. Book your free consultation and secure your fully-funded Master's seat.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <Button onClick={openBookCall} variant="gradient" size="lg" className="w-full sm:w-auto px-6 sm:px-10 py-6 text-base sm:text-lg">
                Book Free Call NOW
             </Button>
             <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-6 text-base sm:text-lg border-gray-200 bg-white hover:bg-gray-50 gap-2 text-gray-900">
                <MessageCircle className="text-green-500" />
                WhatsApp Us
             </Button>
          </div>
          
          <p className="mt-8 text-sm text-gray-600">
            ⏱️ Intakes for this semester are closing soon. Limited spots available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
