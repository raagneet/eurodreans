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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
  } as any;

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-300/30 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-300/20 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-[1400px] relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-[10px] sm:text-xs font-black tracking-widest text-blue-700 uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Wall of Love
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
              Students <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Success Stories</span>
            </h2>
            
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Don't just take our word for it. Hear directly from hundreds of students who transformed their dreams into reality with Eurodreams.
            </p>
          </motion.div>
        </div>

        {/* Videos Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {testimonials.map((test) => (
            <motion.div
              key={test.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Premium Light Shadow Frame */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-200 to-indigo-100 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-2 rounded-2xl bg-white/80 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:border-blue-200 group-hover:bg-white relative z-10">
                
                <div className="relative w-full aspect-video bg-slate-100 rounded-xl overflow-hidden shadow-inner">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src={test.videoUrl} 
                    title={`Student Success Story ${test.id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
