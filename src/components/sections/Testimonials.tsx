"use client";

import { motion } from "framer-motion";

export function TestimonialsSection() {
  const testimonials = [
    { id: "1", videoUrl: "https://www.youtube.com/embed/KU3dx5vL4Y0?si=9xG491BgWOL8nvLd" },
    { id: "2", videoUrl: "https://www.youtube.com/embed/cNlOJUpMs84?si=59m2Mpv6Ot4MKhcE" },
    { id: "3", videoUrl: "https://www.youtube.com/embed/FPm2qAvEVD4?si=iF7ap4Z34h8ngCQN" },
    { id: "4", videoUrl: "https://www.youtube.com/embed/Cc8ogtWgbo0?si=Lulqe_0kmi13Oirr" },
    { id: "5", videoUrl: "https://www.youtube.com/embed/4OCy0kuRzuk?si=3lZQ6xDF2rjkIPRI" },
    { id: "6", videoUrl: "https://www.youtube.com/embed/0LWFg4-OSiU?si=KzS32buFY0KA5aBZ" },
    { id: "7", videoUrl: "https://www.youtube.com/embed/u9q6iiRA1p4?si=yNSSqB8wLOvdI1_d" },
    { id: "8", videoUrl: "https://www.youtube.com/embed/qqfE60bWu8k?si=I0xq__-FzytBvtaX" },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-transparent">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight"
          >
            Students Success Stories
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)" }}
              className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 group"
            >
              <iframe 
                className="absolute top-0 left-0 w-full h-full border-0"
                src={test.videoUrl} 
                title={`Student Success Story ${test.id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              {/* Subtle overlay effect on hover to make it feel premium */}
              <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-xl transition-colors duration-300 group-hover:border-white/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
