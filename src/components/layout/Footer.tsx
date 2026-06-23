"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUp, Globe, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const offices = [
  {
    city: "Indore (HQ)",
    address: "306, 3rd Floor, Arbitto Mall, Near C-21 Mall, Vijay Nagar, Indore, MP 452010",
    mapUrl: "https://maps.google.com/?q=Arbitto+Mall+Indore"
  },
  {
    city: "Delhi",
    address: "Regal Building, 44, Connaught Cir, Hanuman Road Area, Connaught Place, New Delhi, Delhi 110001",
    mapUrl: "https://maps.google.com/?q=Regal+Building+Connaught+Place+New+Delhi"
  },
  {
    city: "Chennai",
    address: "Skcl Tech Square, Second Floor, Innov 8, Guindy, Chennai - 600032",
    mapUrl: "https://maps.google.com/?q=Skcl+Tech+Square+Guindy+Chennai"
  },
  {
    city: "Italy",
    address: "Via Vicolo verdi 10, Cassino (FR), Italy, 03043",
    mapUrl: "https://maps.google.com/?q=Via+Vicolo+verdi+10+Cassino"
  }
];

function DesignerBadge() {
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
      <span>Designed by</span>
      <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors font-bold">
        @NEET
      </a>
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();
  const [activeOffice, setActiveOffice] = useState(0);

  if (pathname === '/italy' || pathname === '/admin') return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 pt-12 pb-6 border-t border-slate-900 overflow-hidden">
      {/* Subtle ambient light leaks */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-10">
          {/* Column 1: Brand & Bio (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            <div className="px-2 py-1 bg-white rounded-lg shadow-sm border border-slate-200">
              <Image
                src="/Logo-Euro-dreams-1536x410.png"
                alt="Eurodreams Logo"
                width={120}
                height={32}
                style={{ width: 'auto', height: 'auto' }}
                className="h-5.5 object-contain"
              />
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              <strong className="text-slate-200 block mb-0.5 tracking-wide uppercase text-[10px]">Transforming Dreams Into Reality</strong>
              Your trusted partner for securing 100% scholarships and making your study abroad journey to Italy seamless.
            </p>
            {/* Clean, compact contact strip */}
            <div className="flex flex-col space-y-2 pt-2 text-xs">
              <a href="mailto:info.eurodreamsstudyabroad@gmail.com" className="flex items-center gap-2.5 hover:text-blue-400 transition-colors w-fit">
                <Mail size={13} className="text-blue-500 shrink-0" />
                <span>info.eurodreamsstudyabroad@gmail.com</span>
              </a>
              <div className="flex items-center gap-2.5">
                <Phone size={13} className="text-blue-500 shrink-0" />
                <div className="flex items-center gap-2">
                  <a href="tel:+916267332364" className="hover:text-blue-400 transition-colors">+91 6267332364</a>
                  <span className="text-slate-700">|</span>
                  <a href="tel:+918817147082" className="hover:text-blue-400 transition-colors">+91 8817147082</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-200 font-semibold text-[11px] uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Sparkles size={10} className="text-blue-500" />
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {[
                { label: "Home", href: "/" },
                { label: "Courses", href: "/courses" },
                { label: "Scholarship", href: "/italy-scholarships" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/#contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Interactive Location Selector (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <h4 className="text-slate-200 font-semibold text-[11px] uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Globe size={10} className="text-blue-500" />
              Our Offices
            </h4>
            
            {/* Location Tabs */}
            <div className="flex flex-wrap gap-1 mb-3 bg-slate-900/50 p-1 rounded-lg border border-slate-900">
              {offices.map((office, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveOffice(idx)}
                  className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-all cursor-pointer ${
                    activeOffice === idx
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                  }`}
                >
                  {office.city}
                </button>
              ))}
            </div>

            {/* Address Panel */}
            <div className="bg-slate-900/30 border border-slate-900 rounded-xl p-3.5 min-h-[90px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOffice}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs leading-relaxed text-slate-400 flex items-start gap-2.5"
                >
                  <MapPin size={14} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>{offices[activeOffice].address}</span>
                </motion.div>
              </AnimatePresence>
              
              <div className="mt-3 pt-2.5 border-t border-slate-900 flex justify-end">
                <a
                  href={offices[activeOffice].mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-semibold text-blue-500 hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>View on Map</span>
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Bottom bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p>&copy; {new Date().getFullYear()} Eurodreams. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <DesignerBadge />
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-all border border-slate-900 cursor-pointer shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
