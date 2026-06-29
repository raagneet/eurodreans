"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  if (pathname === "/admin") return null;

  const { openBookCall } = useModal();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Courses", href: "/courses" },
    { name: "Scholarship", href: "/italy-scholarships" },
    { name: "Services", href: "/services" },
    { name: "Success Stories", href: "/#testimonials" },
    { name: "About Us", href: "/about" },
    { name: "Free resources", href: "/free-resources" },
    {
      name: "More",
      dropdown: [
        { name: "About Italy", href: "/italy" }
      ]
    },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? "bg-white/90 backdrop-blur-md border-slate-200/50 shadow-md shadow-slate-200/10" : "bg-white/40 backdrop-blur-sm border-white/10"
        }`}
    >
      <div className="w-full px-3 sm:px-6 lg:px-00 h-16 flex items-center justify-between">
        <Link href="/#hero" className="flex items-center group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative h-12 w-auto"
          >
            <Image
              src="/Logo-Euro-dreams-1536x410.png"
              alt="Eurodreams Logo"
              width={180}
              height={48}
              priority
              style={{ width: 'auto', height: 'auto' }}
              className="h-full object-contain"
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <button className="flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-primary transition-colors h-16">
                  {link.name}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute right-0 top-[60px] w-48 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2 flex flex-col">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 hover:text-primary transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href!}
                className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSelWs6zYK01AKTnSAVMYb7CH5q-x6MEJKH13xANbdBwnSbCGw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold h-11 px-8 transition-all duration-300 hover:scale-105 active:scale-95 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30"
          >
            <span className="relative z-20 flex items-center gap-2 tracking-wide">
              Book Free Consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b border-gray-200 px-6 py-4 shadow-lg"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="flex flex-col gap-3">
                  <span className="text-lg font-medium text-gray-900 flex items-center justify-between">
                    {link.name}
                  </span>
                  <div className="pl-4 flex flex-col gap-3 border-l-2 border-gray-100 ml-2">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="text-base font-medium text-gray-600 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href!}
                  className="text-lg font-medium text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSelWs6zYK01AKTnSAVMYb7CH5q-x6MEJKH13xANbdBwnSbCGw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full group relative inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold h-12 px-8 transition-all duration-300 active:scale-95 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30"
              >
                <span className="relative z-20 flex items-center gap-2 tracking-wide">
                  Book Free Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
