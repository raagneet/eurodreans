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
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-black tracking-widest text-indigo-600 uppercase mb-6">Student Stories</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">
            <span className="text-slate-900">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Success Stories</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Join the hundreds of students who are already living their Italian dream.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {testimonials.map((test, idx) => (
              <motion.div
               key={idx}
               initial={{ opacity: 0, y: 40, scale: 0.95 }}
               whileInView={{ opacity: 1, y: 0, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 50 }}
               whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.15)" }}
               className="glass-card p-10 flex flex-col relative bg-white/60 hover:bg-white/90 border border-blue-100 shadow-xl shadow-blue-900/5 transition-all duration-300 rounded-[2rem]"
            >
               <Quote className="absolute top-8 right-8 text-blue-100" size={64} />
               <p className="text-slate-600 italic mb-10 relative z-10 flex-1 leading-relaxed text-lg">
                 &quot;{test.quote}&quot;
               </p>
               <div className="flex items-center gap-5 border-t border-slate-100 pt-6 relative z-10">
                 <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                   <span className="text-white font-black text-xl">{test.name.charAt(0)}</span>
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-lg">{test.name}</h4>
                   <p className="text-sm text-blue-600 font-bold">{test.course}</p>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
