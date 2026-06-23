"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

function DesignerBadge() {
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
      <span>Designed by</span>
      <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors font-bold">
        @NEET
      </a>
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();
  if (pathname === '/italy' || pathname === '/admin') return null;

  return (
    <footer className="bg-slate-50 text-slate-600 py-8 border-t border-blue-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 pb-8 border-b border-slate-200">
          {/* Brand & Mission */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="px-2 py-1.5 bg-white rounded-lg border border-slate-100 shadow-sm mb-4 inline-block">
              <Image
                src="/Logo-Euro-dreams-1536x410.png"
                alt="Eurodreams Logo"
                width={130}
                height={34}
                style={{ width: 'auto', height: 'auto' }}
                className="h-6 object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-500 max-w-md">
              <strong className="text-slate-800 block mb-1">TRANSFORMING DREAMS INTO REALITY.</strong>
              Your trusted partner for securing 100% scholarships and making your study abroad journey to Italy seamless.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Courses", href: "/courses" },
                { label: "Contact", href: "/contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm hover:text-blue-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study in Italy */}
          <div className="md:col-span-3">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-4">Study in Italy</h4>
            <ul className="space-y-2">
              {["About Italy", "Tuition Fees", "Requirements", "Scholarships"].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-sm hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Contact info from the user's image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Phone */}
          <div className="md:col-span-4">
            <h4 className="text-blue-800 font-bold text-lg mb-4">Phone</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                  <Phone size={14} className="text-blue-600" />
                </div>
                <a href="tel:+916267332364" className="text-sm font-medium hover:text-blue-600 transition-colors text-slate-700">
                  +91 6267332364
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                  <Phone size={14} className="text-blue-600" />
                </div>
                <a href="tel:+918817147082" className="text-sm font-medium hover:text-blue-600 transition-colors text-slate-700">
                  +91 8817147082
                </a>
              </li>
            </ul>
          </div>

          {/* Headquarter & Offices */}
          <div className="md:col-span-5">
            <h4 className="text-blue-800 font-bold text-lg mb-4">Headquater & Offices</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100 mt-0.5">
                  <MapPin size={14} className="text-indigo-600" />
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  <strong className="text-slate-800 font-bold">Headquarter –</strong> 306, 3rd Floor, Arbitto Mall, Near C-21 Mall, Vijay Nagar, Indore, Madhya Pradesh 452010
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100 mt-0.5">
                  <MapPin size={14} className="text-indigo-600" />
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  <strong className="text-slate-800 font-bold">Delhi –</strong> Regal Building, 44, Connaught Cir, Hanuman Road Area, Connaught Place, New Delhi, Delhi 110001
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100 mt-0.5">
                  <MapPin size={14} className="text-indigo-600" />
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  <strong className="text-slate-800 font-bold">Chennai –</strong> Skcl tech square second floor innov 8, Guindy Chennai Landmark opp. To DHL office 600032
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100 mt-0.5">
                  <MapPin size={14} className="text-indigo-600" />
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  <strong className="text-slate-800 font-bold">Italy –</strong> Via Vicolo verdi 10, Cassino(FR), Italy, 03043
                </p>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-3">
            <h4 className="text-blue-800 font-bold text-lg mb-4">Contact Us</h4>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0 border border-cyan-100">
                <Mail size={14} className="text-cyan-600" />
              </div>
              <a href="mailto:info.eurodreamsstudyabroad@gmail.com" className="text-sm font-medium hover:text-blue-600 transition-colors text-slate-700 break-all">
                info.eurodreamsstudyabroad@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-slate-500">
            &copy; {new Date().getFullYear()} Eurodreams. All rights reserved.
          </p>
          
          <DesignerBadge />

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm font-medium hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm font-medium hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
