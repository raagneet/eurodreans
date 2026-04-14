"use client";

import Link from "next/link";
import { Mail, MapPin, Footprints } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

function DesignerBadge() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setMousePos({ x, y });
  };

  return (
    <div 
      className="relative flex items-center justify-center p-4 cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePos({ x: 0, y: 0 });
      }}
    >
      <motion.div
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          rotateX: -mousePos.y * 0.1,
          rotateY: mousePos.x * 0.1,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 25, mass: 1 }}
        className="relative perspective-distant group"
      >
        <motion.div
          className="relative flex items-center gap-2 px-4 py-1.5 rounded-lg border border-white/5 bg-black/40 backdrop-blur-xl overflow-hidden z-20 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-primary/10"
        >
          {/* Main Label with Chromatic Aberration on Hover */}
          <div className="relative font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
            <span className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300">
               Design <span className="text-emerald-500 italic">@NEET</span>
            </span>
            
            {/* Red Shift */}
            <motion.span 
              animate={{ x: isHovering ? 2 : 0, opacity: isHovering ? 0.5 : 0 }}
              className="absolute inset-0 text-emerald-800 z-0 pointer-events-none"
            >
               Design @NEET
            </motion.span>
            
            {/* Blue Shift */}
            <motion.span 
              animate={{ x: isHovering ? -2 : 0, opacity: isHovering ? 0.5 : 0 }}
              className="absolute inset-0 text-emerald-700 z-0 pointer-events-none"
            >
               Design @NEET
            </motion.span>
          </div>

          {/* Liquid Scanline Effect */}
          <motion.div 
            animate={{ x: isHovering ? ["-100%", "200%"] : "-100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent skew-x-12"
          />
        </motion.div>

        {/* Trail / Ghost Effect */}
        <motion.div 
          animate={{
            x: mousePos.x * 0.5,
            y: mousePos.y * 0.5,
            opacity: isHovering ? 0.2 : 0,
            scale: isHovering ? 1.1 : 1
          }}
          className="absolute inset-0 bg-primary/30 blur-xl rounded-full -z-10"
        />
      </motion.div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-white/5 pb-12">
           <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6 group">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg]">
                  <div className="absolute inset-0 rounded-xl bg-white/30 blur-sm mix-blend-overlay"></div>
                  <svg className="relative w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-3xl md:text-4xl font-black tracking-tighter">
                  <span className="text-white drop-shadow-sm">Euro</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-sm">dreams</span>
                </span>
              </div>
             <p className="text-gray-300 max-w-sm mb-6">
                Your trusted partner for securing 100% scholarships to study in Italy's top public universities.
             </p>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-primary hover:bg-white/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
             </div>
           </div>

           <div>
             <h4 className="text-white font-bold mb-4">Quick Links</h4>
             <ul className="space-y-2">
                <li><Link href="#programs" className="text-gray-400 hover:text-primary text-sm transition-colors">Programs</Link></li>
                <li><Link href="#scholarships" className="text-gray-400 hover:text-primary text-sm transition-colors">Scholarship Guide</Link></li>
                <li><Link href="#process" className="text-gray-400 hover:text-primary text-sm transition-colors">How it works</Link></li>
                <li><Link href="#testimonials" className="text-gray-400 hover:text-primary text-sm transition-colors">Success Stories</Link></li>
             </ul>
           </div>

           <div>
             <h4 className="text-white font-bold mb-4">Contact Info</h4>
             <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                   <Mail size={16} className="mt-0.5 text-primary shrink-0" />
                   admissions@eurodreams.com
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                   <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
                   101, Education Hub, Milan, Italy
                </li>
             </ul>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
           <p>&copy; {new Date().getFullYear()} Eurodreams. All rights reserved.</p>
           
           <DesignerBadge />
           
           <div className="flex gap-4 mt-4 md:mt-0">
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
