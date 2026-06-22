"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { MapPin, GraduationCap, Moon, ShoppingBag, Heart, Wallet, Plane, ChevronRight } from "lucide-react";

export default function ItalyPage() {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", title: "About Italy", icon: <MapPin size={18} /> },
    { id: "student-life", title: "Student Life", icon: <GraduationCap size={18} /> },
    { id: "nightlife", title: "Nightlife", icon: <Moon size={18} /> },
    { id: "shopping", title: "Shopping", icon: <ShoppingBag size={18} /> },
    { id: "culture", title: "Lifestyle & Culture", icon: <Heart size={18} /> },
    { id: "fees", title: "Tuition & Living", icon: <Wallet size={18} /> },
    { id: "flights", title: "Flights & Airports", icon: <Plane size={18} /> },
  ];

  return (
    <div className="h-screen overflow-y-auto hide-scrollbar bg-white text-slate-900 pt-28 pb-12 font-sans flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 max-w-[95%] 2xl:max-w-[1600px] w-full flex flex-col lg:flex-row gap-8 xl:gap-12 flex-1">
        
        {/* Left Column: Title & Navigation */}
        <div className="lg:w-[30%] xl:w-1/4 flex flex-col gap-6 shrink-0 relative">
        <div className="mb-2 shrink-0 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black tracking-widest text-blue-600 uppercase mb-3"
          >
            Destination Guide
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-3"
          >
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Italy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-600"
          >
            Everything you need to know about studying, living, and thriving in the beautiful country of Italy.
          </motion.p>
        </div>

        {/* Sidebar Navigation */}
        <div className="sticky top-28 z-10 flex flex-col">
          <div className="glass-card rounded-2xl p-4 border border-slate-100 bg-white/80 shadow-lg shadow-slate-200/50 hidden lg:flex flex-col">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-3">Contents</h3>
            <nav className="flex flex-col gap-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 text-left font-semibold text-[13px] ${
                      activeSection === section.id 
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/30" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                    }`}
                  >
                    <span className={activeSection === section.id ? "text-white" : "text-blue-500"}>
                      {section.icon}
                    </span>
                    {section.title}
                    {activeSection === section.id && (
                      <motion.div layoutId="chevron" className="ml-auto">
                        <ChevronRight size={16} />
                      </motion.div>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile Horizontal Navigation */}
            <div className="lg:hidden overflow-x-auto pb-4 -mx-6 px-6 hide-scrollbar sticky top-20 z-40 bg-slate-50/90 backdrop-blur-md shrink-0">
              <div className="flex gap-2 min-w-max pt-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold whitespace-nowrap ${
                      activeSection === section.id 
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/30" 
                        : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    <span className={activeSection === section.id ? "text-white" : "text-blue-500"}>
                      {section.icon}
                    </span>
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
            </div>
          </div>

        {/* Right Column: Dynamic Content Area */}
        {/* 👉 TWEAK CANVAS HEIGHT HERE: Change min-h-[750px] below to manually control the height of the right panel */}
        <div className="lg:w-[70%] xl:w-3/4 relative flex flex-col w-full min-h-[750px]">
          <AnimatePresence mode="wait">
            {activeSection === "about" && (
              <motion.div 
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-6 md:p-8 xl:p-10 border border-slate-100 shadow-xl shadow-slate-200/40 relative group absolute inset-0 overflow-y-auto hide-scrollbar"
              >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors duration-700 pointer-events-none" />
                  <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span className="p-2 bg-blue-100 text-blue-600 rounded-xl"><MapPin size={24} /></span>
                    About Italy
                  </h2>
                  <div className="flex flex-col xl:flex-row gap-8 items-stretch">
                    <div className="xl:w-3/5 prose prose-base md:prose-lg text-slate-600 max-w-none space-y-4">
                      <p>
                        Italy is a country of historic, artistic, and cultural significance, known for its elegance, food culture, and world heritage. Situated at the meeting point of the Eurasian and African tectonic plates, the country's northern boundary is defined by the towering Alps, while its southern end is graced by a stunning Mediterranean coastline.
                      </p>
                      <p>
                        With over <strong>53 UNESCO World Heritage Sites</strong>, Italy boasts the most World Heritage Sites of any nation. It attracts more than 50 million tourists annually.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4 mt-6">
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                          <h4 className="font-bold text-slate-900 mb-2 text-sm">Economy & Population</h4>
                          <p className="text-xs leading-relaxed">8th largest nominal GDP globally in 2025 with a population of 60.57 million. SMEs are the backbone of Italy's economy.</p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                          <h4 className="font-bold text-slate-900 mb-2 text-sm">Key Industries</h4>
                          <p className="text-xs leading-relaxed">Luxury goods, fashion (Gucci, Prada, Armani), automotive (Ferrari, Lamborghini), tourism, and food processing.</p>
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-2/5 w-full shrink-0">
                      <div className="relative w-full h-64 xl:h-full min-h-[300px] rounded-3xl overflow-hidden shadow-lg border border-slate-100/50">
                        <Image src="/images/italy/about_italy.png" alt="Colosseum in Rome, Italy" fill className="object-cover" sizes="(max-width: 1280px) 100vw, 40vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === "student-life" && (
                <motion.div 
                  key="student-life"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-6 md:p-8 xl:p-10 border border-slate-100 shadow-xl shadow-slate-200/40 relative group absolute inset-0 overflow-y-auto hide-scrollbar"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] group-hover:bg-indigo-500/10 transition-colors duration-700 pointer-events-none" />
                  <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span className="p-2 bg-indigo-100 text-indigo-600 rounded-xl"><GraduationCap size={24} /></span>
                    Student Life in Italy
                  </h2>
                  <div className="flex flex-col xl:flex-row-reverse gap-8 items-stretch">
                    <div className="xl:w-3/5 prose prose-base md:prose-lg text-slate-600 max-w-none space-y-4">
                      <p>
                        Studying in Italy is a very different and unique experience. Independent learning and practice is highly promoted. Students in STEM are taught under more strict conditions and molded towards research.
                      </p>
                      <p>
                        Student life is not all work and no play, Italy is a very beautiful country to live in. Traveling and food are major components of a typical student life. Another great component is the chance to learn a new language and culture.
                      </p>
                      <ul className="list-none space-y-3 mt-6 p-0 text-sm md:text-base">
                        <li className="flex items-start gap-3 bg-indigo-50/50 p-3 rounded-xl border border-indigo-100">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                          <span><strong>Football Culture:</strong> Students quickly adapt to the exciting sports atmosphere.</span>
                        </li>
                        <li className="flex items-start gap-3 bg-indigo-50/50 p-3 rounded-xl border border-indigo-100">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                          <span><strong>Culinary Delights:</strong> Students fall in love with staples like authentic pasta, pizza, and the famous Gelato.</span>
                        </li>
                        <li className="flex items-start gap-3 bg-indigo-50/50 p-3 rounded-xl border border-indigo-100">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                          <span><strong>Adventure & History:</strong> Many universities organize field trips that showcase the history, architecture, and wonders of Italy.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="xl:w-2/5 w-full shrink-0">
                      <div className="relative w-full h-64 xl:h-full min-h-[300px] rounded-3xl overflow-hidden shadow-lg border border-slate-100/50">
                        <Image src="/images/italy/student_life_italy.png" alt="Students studying in an Italian campus" fill className="object-cover" sizes="(max-width: 1280px) 100vw, 40vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === "nightlife" && (
                <motion.div 
                  key="nightlife"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-6 md:p-8 xl:p-10 border border-slate-100 shadow-xl shadow-slate-200/40 relative group absolute inset-0 overflow-y-auto hide-scrollbar"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] group-hover:bg-purple-500/10 transition-colors duration-700 pointer-events-none" />
                  <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span className="p-2 bg-purple-100 text-purple-600 rounded-xl"><Moon size={24} /></span>
                    Nightlife in Italy
                  </h2>
                  <div className="flex flex-col xl:flex-row gap-8 items-stretch">
                    <div className="xl:w-3/5 prose prose-base md:prose-lg text-slate-600 max-w-none space-y-4">
                      <p>
                        The night scene in Italy is unrivaled and known around the world for its uniqueness. Since Italians love to drink wine and have a good time, every day from the early evening late into the break of day, Italians have found a way to enjoy themselves.
                      </p>
                      <p>
                        The top cities in Italy for an unforgettable nighttime experience are <strong>Rome, Milan, Florence, Venice, and Sicily</strong>.
                      </p>
                      <div className="bg-purple-50 rounded-2xl p-6 mt-6 border border-purple-100">
                        <p className="text-purple-900 m-0 text-sm md:text-base leading-relaxed">
                          <strong>Rome Experience:</strong> Areas such as the <em>Piazza Navona</em> are famous for distinct cafes and bars that run late. Italians love to drink Campari as an opener before dinner. Summer is beautiful with festivals like <em>Roma Incontra il Mondo</em> celebrating culture on the streets.
                        </p>
                      </div>
                    </div>
                    <div className="xl:w-2/5 w-full shrink-0">
                      <div className="relative w-full h-64 xl:h-full min-h-[300px] rounded-3xl overflow-hidden shadow-lg border border-slate-100/50">
                        <Image src="/images/italy/nightlife_italy.png" alt="Italian nightlife and cafes" fill className="object-cover" sizes="(max-width: 1280px) 100vw, 40vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === "shopping" && (
                <motion.div 
                  key="shopping"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-6 md:p-8 xl:p-10 border border-slate-100 shadow-xl shadow-slate-200/40 relative group absolute inset-0 overflow-y-auto hide-scrollbar"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-[80px] group-hover:bg-pink-500/10 transition-colors duration-700 pointer-events-none" />
                  <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span className="p-2 bg-pink-100 text-pink-600 rounded-xl"><ShoppingBag size={24} /></span>
                    Shopping in Italy
                  </h2>
                  <div className="flex flex-col xl:flex-row-reverse gap-8 items-stretch">
                    <div className="xl:w-3/5 prose prose-base md:prose-lg text-slate-600 max-w-none space-y-4">
                      <p>
                        Shopping is a very important habit amongst locals, with food and clothing being the major commodities. There are supermarkets, grocery stores, and many local farmers' markets situated in cities across the country.
                      </p>
                      <p>
                        Since agriculture is one of the country's most significant exports, Italian food prices are considerably <strong>cheaper when compared to the rest of Europe</strong>.
                      </p>
                      <div className="flex gap-3 flex-wrap mt-6">
                        <div className="px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col min-w-[140px]">
                          <span className="text-xs text-slate-500 font-medium mb-1">Dairy</span>
                          <span className="font-bold text-pink-600 text-base">€1 - €2.50</span>
                        </div>
                        <div className="px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col min-w-[140px]">
                          <span className="text-xs text-slate-500 font-medium mb-1">Fruits & Veggies</span>
                          <span className="font-bold text-pink-600 text-base">€1 - €1.50</span>
                        </div>
                        <div className="px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col min-w-[140px]">
                          <span className="text-xs text-slate-500 font-medium mb-1">Staples (kg)</span>
                          <span className="font-bold text-pink-600 text-base">€1.50 - €3.0</span>
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-2/5 w-full shrink-0">
                      <div className="relative w-full h-64 xl:h-full min-h-[300px] rounded-3xl overflow-hidden shadow-lg border border-slate-100/50">
                        <Image src="/images/italy/shopping_italy.png" alt="Shopping street in Milan, Italy" fill className="object-cover" sizes="(max-width: 1280px) 100vw, 40vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === "culture" && (
                <motion.div 
                  key="culture"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-6 md:p-8 xl:p-10 border border-slate-100 shadow-xl shadow-slate-200/40 relative group absolute inset-0 overflow-y-auto hide-scrollbar"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] group-hover:bg-emerald-500/10 transition-colors duration-700 pointer-events-none" />
                  <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span className="p-2 bg-emerald-100 text-emerald-600 rounded-xl"><Heart size={24} /></span>
                    Lifestyle & Culture
                  </h2>
                  <div className="flex flex-col xl:flex-row gap-8 items-stretch">
                    <div className="xl:w-3/5 prose prose-base md:prose-lg text-slate-600 max-w-none space-y-4">
                      <p>
                        Italians are generally praised for preserving culture, landscape, and history. We cannot talk about Italian culture without mentioning food, drinks, and cheese. Italy has contributed over <strong>450 different types of cheese</strong> (Parmesan, Gorgonzola, Mozzarella, Ricotta).
                      </p>
                      <p>
                        Italians love their wine. The country produces one-third of the world's wine demands and ranks 5th in the world for wine consumption (42 liters per capita).
                      </p>
                      <p>
                        Italians are also known for looking sharp and luxurious. Fashion is a huge export for the country with Milan acting as one of the major fashion capitals in the world. Additionally, Italians are famous for their expressive gesticulations to buttress emotions when they speak—a stereotype they take pride in.
                      </p>
                    </div>
                    <div className="xl:w-2/5 w-full shrink-0">
                      <div className="relative w-full h-64 xl:h-full min-h-[300px] rounded-3xl overflow-hidden shadow-lg border border-slate-100/50">
                        <Image src="/images/italy/culture_italy.png" alt="Italian food and culture" fill className="object-cover" sizes="(max-width: 1280px) 100vw, 40vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === "fees" && (
                <motion.div 
                  key="fees"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-6 md:p-8 xl:p-10 border border-slate-100 shadow-xl shadow-slate-200/40 relative group absolute inset-0 overflow-y-auto hide-scrollbar"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] group-hover:bg-cyan-500/10 transition-colors duration-700 pointer-events-none" />
                  <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span className="p-2 bg-cyan-100 text-cyan-600 rounded-xl"><Wallet size={24} /></span>
                    Tuition Fees & Cost of Living
                  </h2>
                  <div className="prose prose-lg text-slate-600 max-w-none space-y-4">
                    <p>
                      Italy is generally more affordable than many other developed European countries. Bigger cities like Rome and Milan have a higher standard of living than smaller areas like Turin and Verona.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-cyan-50/50 p-6 rounded-2xl border border-cyan-100">
                        <h4 className="font-black text-cyan-800 text-xl mb-4">Education Costs</h4>
                        <ul className="space-y-2 text-sm m-0 p-0 list-none">
                          <li className="flex justify-between border-b border-cyan-200/50 pb-2"><span>Public University (Non-EU)</span> <strong className="text-cyan-700">€800 - €5,000 / year</strong></li>
                          <li className="flex justify-between pt-2"><span>Private University</span> <strong className="text-cyan-700">€6,000 - €20,000 / year</strong></li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h4 className="font-black text-slate-800 text-xl mb-4">Monthly Living Costs</h4>
                        <ul className="space-y-2 text-sm m-0 p-0 list-none">
                          <li className="flex justify-between border-b border-slate-200 pb-2"><span>Shared Housing</span> <strong className="text-slate-700">€150 - €300</strong></li>
                          <li className="flex justify-between border-b border-slate-200 py-2"><span>Private Housing</span> <strong className="text-slate-700">€200 - €500</strong></li>
                          <li className="flex justify-between border-b border-slate-200 py-2"><span>Utilities (Gas, Elec, Water)</span> <strong className="text-slate-700">€50 - €70</strong></li>
                          <li className="flex justify-between border-b border-slate-200 py-2"><span>Internet</span> <strong className="text-slate-700">~€30</strong></li>
                          <li className="flex justify-between border-b border-slate-200 py-2"><span>Monthly Bus Pass</span> <strong className="text-slate-700">~€22</strong></li>
                          <li className="flex justify-between pt-2"><span>Average Total</span> <strong className="text-slate-900 font-bold">€400 - €800</strong></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === "flights" && (
                <motion.div 
                  key="flights"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-6 md:p-8 xl:p-10 border border-slate-100 shadow-xl shadow-slate-200/40 relative group absolute inset-0 overflow-y-auto hide-scrollbar"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] group-hover:bg-sky-500/10 transition-colors duration-700 pointer-events-none" />
                  <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span className="p-2 bg-sky-100 text-sky-600 rounded-xl"><Plane size={24} /></span>
                    Flights & Airports
                  </h2>
                  <div className="prose prose-lg text-slate-600 max-w-none space-y-4">
                    <p>
                      Presently, there are 20 international airports serving more than 2 million passengers a year in Italy, alongside over 20 local airports with domestic routes.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4">Major International Airports</h4>
                        <ul className="grid grid-cols-1 gap-2 text-sm m-0 p-0 list-none">
                          <li className="bg-slate-50 px-3 py-2 rounded border border-slate-100">Rome Airport Fiumicino (FCO)</li>
                          <li className="bg-slate-50 px-3 py-2 rounded border border-slate-100">Milan Malpensa Airport (MXP)</li>
                          <li className="bg-slate-50 px-3 py-2 rounded border border-slate-100">Venice Airport (VCE)</li>
                          <li className="bg-slate-50 px-3 py-2 rounded border border-slate-100">Catania Airport (CTA)</li>
                          <li className="bg-slate-50 px-3 py-2 rounded border border-slate-100">Bologna Airport (BLQ)</li>
                          <li className="bg-slate-50 px-3 py-2 rounded border border-slate-100">Naples Airport (NAP)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4">Popular Airline Carriers</h4>
                        <div className="flex flex-wrap gap-2 text-sm">
                          {['Lufthansa', 'KLM', 'Air France', 'British Airways', 'Turkish Airlines', 'Qatar Airways', 'Air India', 'SWISS Air', 'Aeroflot'].map(airline => (
                            <span key={airline} className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full font-medium border border-sky-100">
                              {airline}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
