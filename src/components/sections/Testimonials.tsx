"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aisha Patel",
      course: "Politecnico di Milano",
      quote: "Eurodreams handled my entire process. I was worried about the DSU scholarship, but they made it so simple. I'm now studying tuition-free!",
    },
    {
      name: "Kevin Thomas",
      course: "University of Padua",
      quote: "The transparency is unmatched. I always knew exactly what stage my application was at. Highly recommend their mentorship.",
    },
    {
      name: "Sneha Reddy",
      course: "Sapienza University of Rome",
      quote: "I was rejected last year applying on my own. This year, with the Eurodreams team, I got admitted with a full ride scholarship.",
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="text-gradient">Success Stories</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((test, idx) => (
              <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="glass-card p-8 flex flex-col relative"
            >
               <Quote className="absolute top-6 right-6 text-gray-200" size={64} />
               <p className="text-gray-600 italic mb-8 relative z-10 flex-1">
                 &quot;{test.quote}&quot;
               </p>
               <div className="flex items-center gap-4 border-t border-gray-100 pt-4 relative z-10">
                 <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full" />
                 <div>
                   <h4 className="font-bold text-gray-900">{test.name}</h4>
                   <p className="text-xs text-primary">{test.course}</p>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
