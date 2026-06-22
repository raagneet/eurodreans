"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Star, GraduationCap, ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

const bgImages = [
  "/images/italy_hero_new.png",
  "/images/italy_education_hero.png",
  "/italy_campus.png",
  "/hero_italy.png"
];

const fgImages = [
  "/images/italy_education_cinematic.png",
  "/images/italy/student_life_italy.png",
  "/images/italy/about_italy.png",
  "/images/italy/italy_library_students.png"
];

export function HeroSection() {
  const { openBookCall } = useModal();
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [bgIndex, setBgIndex] = useState(0);
  const [fgIndex, setFgIndex] = useState(0);

  useEffect(() => {
    setIsMounted(true);

    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    let fgInterval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      fgInterval = setInterval(() => {
        setFgIndex((prev) => (prev + 1) % fgImages.length);
      }, 5000);
    }, 2500); // offset foreground slide transitions for visual pacing

    return () => {
      clearInterval(bgInterval);
      clearTimeout(timeout);
      if (fgInterval) clearInterval(fgInterval);
    };
  }, []);

  // Mouse interactivity setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rx = (e.clientX / window.innerWidth) * 2 - 1;
      const ry = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(rx);
      mouseY.set(ry);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax transforms for the images
  const img1X = useTransform(springX, [-1, 1], [-15, 15]);
  const img1Y = useTransform(springY, [-1, 1], [-15, 15]);

  const img2X = useTransform(springX, [-1, 1], [25, -25]);
  const img2Y = useTransform(springY, [-1, 1], [25, -25]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full pt-32 pb-20 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-visible bg-transparent min-h-[90vh]"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[1400px] relative z-10 h-full flex flex-col lg:flex-row items-center gap-16 lg:gap-10">

        {/* Left Text Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left z-20 mt-4 lg:mt-0">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tight text-slate-900 mb-6 leading-[1.15] pb-2"
          >
            Study in{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-2 bg-violet-200/40 blur-xl rounded-full"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 italic pr-4">Italy</span>
            </span>
            <br />
            <span className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] text-slate-600 mt-2 block font-extrabold tracking-tight">with 100% Fundings</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-slate-600 font-medium mb-10 max-w-xl leading-relaxed"
          >
            We help ambitious students secure fully-funded Master&apos;s admissions in top Italian public institutions. Stop worrying about tuition fees and focus on your future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-5 mb-10"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSelWs6zYK01AKTnSAVMYb7CH5q-x6MEJKH13xANbdBwnSbCGw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 text-lg group hover:scale-105 transition-transform shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] font-black bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-[1rem] w-full sm:w-auto gap-2"
            >
              Book Free Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=916267332364"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 text-lg bg-transparent text-slate-600 font-bold hover:text-[#25D366] hover:bg-[#25D366]/10 transition-colors rounded-[1rem] w-full sm:w-auto gap-2 group"
            >
              <svg className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Social Proof Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <div className="flex -space-x-3">
              {[
                "/thumbnails/student1.png",
                "/thumbnails/student2.png",
                "/thumbnails/student4.png",
                "/thumbnails/student3.png",
              ].map((src, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 overflow-hidden relative">
                  <Image src={src} alt="student" fill className="object-cover" sizes="40px" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-violet-500/30 flex items-center justify-center text-[10px] font-bold text-white z-10">
                500+
              </div>
            </div>
            <div className="text-sm font-semibold text-slate-500">
              Trusted by 500+ <br /> successful students
            </div>
          </motion.div>
        </div>

        {/* Right Image Composition */}
        <div className="w-full lg:w-[50%] relative flex justify-center lg:justify-end mt-12 lg:mt-0 h-[380px] lg:h-[480px] perspective-1000 max-w-xl mx-auto lg:mx-0">

          {/* Main Background Image */}
          <motion.div
            style={{ x: img1X, y: img1Y }}
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 40 }}
            className="absolute top-2 right-4 lg:right-6 w-[70%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white bg-slate-100 z-10"
          >
            <AnimatePresence>
              <motion.div
                key={bgIndex}
                initial={{ opacity: 0, scale: 1.15, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotate: -2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={bgImages[bgIndex]}
                  alt="Italian Education Campus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent z-15 pointer-events-none" />
          </motion.div>

          {/* Overlapping Foreground Image */}
          <motion.div
            style={{ x: img2X, y: img2Y }}
            initial={{ opacity: 0, scale: 0.8, x: -50, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0, rotate: -4 }}
            transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 50 }}
            className="absolute bottom-2 left-4 lg:left-0 w-[55%] aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(37,99,235,0.25)] border-[6px] border-white bg-white z-20"
          >
            <AnimatePresence>
              <motion.div
                key={fgIndex}
                initial={{ opacity: 0, scale: 0.85, x: 30, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.05, x: -30, rotate: 5 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={fgImages[fgIndex]}
                  alt="Students in Italy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-0 right-0 lg:-top-2 lg:right-2 glass-card p-3 sm:p-4 flex items-center gap-3 shadow-xl bg-white/95 backdrop-blur-xl rounded-2xl border border-white z-30"
          >
            <div className="bg-emerald-100 p-2 sm:p-2.5 rounded-xl text-emerald-600">
              <Star size={18} fill="currentColor" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-slate-900 leading-none mb-0.5">98%</p>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-widest">Visa Success</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
