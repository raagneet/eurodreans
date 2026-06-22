"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function Navbar() {
  const { openBookCall } = useModal();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Italy", href: "/italy" },
    { name: "Requirements", href: "/requirements" },
    { name: "Courses", href: "/courses" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled ? "bg-white/90 backdrop-blur-md border-slate-200/50 shadow-md shadow-slate-200/10" : "bg-white/40 backdrop-blur-sm border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 h-16 flex items-center justify-between">
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
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <motion.a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSelWs6zYK01AKTnSAVMYb7CH5q-x6MEJKH13xANbdBwnSbCGw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium h-11 px-6 py-2 bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 shadow-lg"
          >
            Book Free Call
          </motion.a>
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
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-600 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
              <motion.a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSelWs6zYK01AKTnSAVMYb7CH5q-x6MEJKH13xANbdBwnSbCGw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium h-11 px-6 py-2 bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 shadow-lg"
              >
                Book Free Call
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
