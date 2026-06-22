"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  CheckCircle,
  MapPin,
  Headset,
  Award,
  Users,
  Sparkles,
  MessageSquare,
  BookOpen,
  Globe,
  TrendingUp,
  GraduationCap,
  Shield,
  Percent
} from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative rounded-3xl border border-slate-200 bg-white/60 backdrop-blur-md transition-shadow hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default function AboutPage() {
  const { openBookCall } = useModal();
  
  // Interactive Background Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });
  
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [mouseX, mouseY]);

  const bgX1 = useTransform(springX, [-1, 1], [-50, 50]);
  const bgY1 = useTransform(springY, [-1, 1], [-50, 50]);
  const bgX2 = useTransform(springX, [-1, 1], [50, -50]);
  const bgY2 = useTransform(springY, [-1, 1], [50, -50]);

  // GSAP Refs
  const storyRef = useRef(null);
  const storyTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        storyTextRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 75%",
          },
        }
      );
      

    });

    return () => ctx.revert();
  }, []);

  const features = [
    "Eurodreams is specialised for Italy Study Visa Process.",
    "Dedicated Experienced Team for Admission, Scholarship and Visa.",
    "1000s of Success Stories.",
    "FREE Counselling Session",
    "FREE IELTS and ITALIAN Classes.",
    "Office Located in Italy.",
    "Half a Million followers across social media platforms.",
    "Eurodreams deals only in Public Universities.",
    "Transparent process with no hidden charges.",
    "Highest visa ratio."
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 selection:bg-blue-500/30 overflow-hidden pt-16 pb-8 relative font-sans">
      
      {/* Immersive Mouse-Interactive Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#f8fafc_0%,#f1f5f9_100%)]" />
        
        <motion.div 
          style={{ x: bgX1, y: bgY1 }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/20 blur-[120px] mix-blend-multiply" 
        />
        <motion.div 
          style={{ x: bgX2, y: bgY2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-400/20 blur-[100px] mix-blend-multiply" 
        />
      </div>

      <section className="relative z-10 flex flex-col items-center justify-center min-h-0 px-8 sm:px-16 lg:px-24 text-center pt-12 pb-8 overflow-hidden">
        {/* Local Interactive Glow Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            style={{ x: bgX1, y: bgY1 }}
            className="absolute top-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-[80px]"
          />
          <motion.div 
            style={{ x: bgX2, y: bgY2 }}
            className="absolute bottom-[10%] right-[20%] w-[250px] h-[250px] rounded-full bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 blur-[80px]"
          />
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
        </div>

        <div className="relative z-10 w-full max-w-6xl bg-white/40 backdrop-blur-md border border-white/50 p-8 md:p-10 lg:p-12 rounded-[2.5rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.05)] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/3 shrink-0 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
              Our <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Mission</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="md:w-2/3 text-base md:text-lg text-slate-600 leading-relaxed font-medium space-y-4"
          >
            <h3 className="font-bold text-xl md:text-2xl text-blue-600 tracking-tight text-center md:text-left">
              TRANSFORMING DREAMS INTO REALITY
            </h3>
            <p className="text-center md:text-left">
              Euro Dreams motto is "TRANSFORMING DREAMS INTO REALITY" and that is exactly what we aspire to do by allowing our students live their dreams of a brighter future with excellent education offered at low or no cost aided by government scholarships.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 pt-12 pb-20 bg-white/40 border-y border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent)] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Title Block (Sticky) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                The Euro Dreams Edge
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Euro Dreams?</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We simplify the complex process of studying in Italy, providing transparent guidance, zero-cost education opportunities, and top-tier coaching at every step of your journey.
              </p>
              
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4 text-sm text-slate-500 font-semibold">
                <div className="flex -space-x-2">
                  <span className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">IT</span>
                  <span className="w-8 h-8 rounded-full bg-cyan-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">EU</span>
                  <span className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">10K</span>
                </div>
                <span>Trusted by thousands of aspiring students</span>
              </div>
            </div>

            {/* Right Column: List of 10 Features (Compact & Sleek) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => {
                const icons = [
                  <Award key={0} size={20} className="text-blue-600" />,
                  <Users key={1} size={20} className="text-cyan-600" />,
                  <Sparkles key={2} size={20} className="text-indigo-600" />,
                  <MessageSquare key={3} size={20} className="text-purple-600" />,
                  <BookOpen key={4} size={20} className="text-pink-600" />,
                  <Globe key={5} size={20} className="text-blue-600" />,
                  <TrendingUp key={6} size={20} className="text-emerald-600" />,
                  <GraduationCap key={7} size={20} className="text-amber-600" />,
                  <Shield key={8} size={20} className="text-teal-600" />,
                  <Percent key={9} size={20} className="text-rose-600" />,
                ];
                
                const bgColors = [
                  "bg-blue-50 border-blue-100",
                  "bg-cyan-50 border-cyan-100",
                  "bg-indigo-50 border-indigo-100",
                  "bg-purple-50 border-purple-100",
                  "bg-pink-50 border-pink-100",
                  "bg-blue-50 border-blue-100",
                  "bg-emerald-50 border-emerald-100",
                  "bg-amber-50 border-amber-100",
                  "bg-teal-50 border-teal-100",
                  "bg-rose-50 border-rose-100",
                ];

                return (
                  <div key={i} className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${bgColors[i]} group-hover:scale-105 transition-transform duration-300`}>
                      {icons[i] || <CheckCircle size={20} />}
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        FEATURE {(i + 1).toString().padStart(2, '0')}
                      </span>
                      <p className="text-sm font-bold text-slate-800 leading-snug">{feature}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Our Story & Achievement */}
      <section className="relative z-10 pt-16 pb-12" ref={storyRef}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div ref={storyTextRef} className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Column: Premium Image Card */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(37,99,235,0.3)] border-[6px] border-white group">
                {/* 
                  NOTE: Successfully updated to use the uploaded photo.
                */}
                <Image 
                  src="/about-us.png"
                  alt="Eurodreams Our Story"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />
                
                {/* Floating Stats Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white transform translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0 border border-blue-200">
                       <Award className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-black text-slate-900 leading-none mb-1">1000+</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Success Stories</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Glows */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl -z-10" />
            </div>

            {/* Right Column: Text Content & Grid */}
            <div className="space-y-6 order-1 lg:order-2 lg:pl-6">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
                  Our Story & <br className="hidden lg:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Achievement</span>
                </h2>
                <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mb-6 shadow-sm" />
                
                <div className="space-y-4 text-base text-slate-600 leading-relaxed font-medium">
                  <p>
                    Many students often return to their home nation with neither a degree nor constructive experience due to poor guidance. We at Euro Dreams stay adamant to avoid any such scenarios. With all our perseverance, we work to build our students' careers and fulfill their dreams.
                  </p>
                  
                  <blockquote className="relative p-6 rounded-2xl bg-blue-50/80 border border-blue-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500" />
                    <Sparkles className="absolute top-4 right-4 text-blue-200 opacity-50 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                    <p className="text-slate-800 italic font-semibold relative z-10 text-lg leading-relaxed pr-8">
                      "As soon as students choose Euro Dreams, their concerns become ours. We cater to their needs from the initial application step until their successful arrival."
                    </p>
                  </blockquote>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:-translate-y-1 transition-transform">
                  <div className="text-2xl lg:text-3xl font-black text-blue-600 mb-1">1.5K+</div>
                  <div className="font-bold text-slate-400 text-[9px] lg:text-[10px] uppercase tracking-widest">Google Reviews</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:-translate-y-1 transition-transform">
                  <div className="text-2xl lg:text-3xl font-black text-cyan-600 mb-1">500K+</div>
                  <div className="font-bold text-slate-400 text-[9px] lg:text-[10px] uppercase tracking-widest">YouTube Subs</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:-translate-y-1 transition-transform">
                  <div className="text-2xl lg:text-3xl font-black text-indigo-600 mb-1">150K+</div>
                  <div className="font-bold text-slate-400 text-[9px] lg:text-[10px] uppercase tracking-widest">Instagram</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Join Us / CTA Section */}
      <section className="relative z-10 pt-8 pb-4 text-center">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="p-12 md:p-16 rounded-[3rem] border border-blue-100 bg-white relative overflow-hidden shadow-[0_30px_80px_-20px_rgba(59,130,246,0.15)]">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              join us for more information
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Eurodreams is offering <span className="font-bold text-blue-600">FREE ITALIAN</span> and <span className="font-bold text-blue-600">FREE IELTS</span> Classes to all Registered Students.
            </p>
            
            <a 
              href="https://api.whatsapp.com/send/?phone=916267332364&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Contact Us Now
            </a>
            
            <div className="mt-12 flex flex-col items-center justify-center gap-6 text-slate-600 font-medium border-t border-slate-100 pt-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <span className="flex items-center gap-2">
                  <Headset size={20} className="text-blue-500" />
                  <a href="tel:6267332364" className="hover:text-blue-600">+91 6267332364</a>
                </span>
                <span className="flex items-center gap-2">
                  <Headset size={20} className="text-blue-500" />
                  <a href="tel:8817147082" className="hover:text-blue-600">+91 8817147082</a>
                </span>
              </div>
              <span className="flex items-center gap-2">
                info.eurodreamsstudyabroad@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
