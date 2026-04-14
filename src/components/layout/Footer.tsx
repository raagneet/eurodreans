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
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      className="relative flex items-center justify-center p-2 mt-4 md:mt-0"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        className="relative flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 overflow-hidden cursor-none z-10"
        whileHover={{ scale: 1.05, borderColor: "rgba(59,130,246,0.5)", backgroundColor: "rgba(59,130,246,0.1)" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="text-gray-400 font-mono text-xs tracking-wider z-10 relative">
          Designer <strong className="text-primary group-hover:text-white transition-colors duration-300">@NEET</strong>
        </span>

        {/* Dynamic Footprint that follows the exact mouse position over the button */}
        <motion.div
          animate={{
            x: mousePos.x - 10, // Center pointer offset
            y: mousePos.y - 10,
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0.5,
            rotate: isHovering ? (mousePos.x > 50 ? 15 : -15) : 0, // slight tilt based on X position
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute pointer-events-none text-accent"
        >
          <Footprints size={20} className="drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
        </motion.div>
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
             <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4 block">
                Eurodreams
             </span>
             <p className="text-gray-400 max-w-sm mb-6">
                Your trusted partner for securing 100% scholarships to study in Italy's top public universities.
             </p>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white/10 transition-all">
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
