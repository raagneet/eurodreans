"use client";

import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: { question: string, answer: ReactNode }[] = [
    {
      question: "What services does Euro Dreams Study Abroad Consultancy offer?",
      answer: (
        <>
          We provide end-to-end support for students applying to public universities in Italy. Our services include:
          <br /><br />
          <strong>• Application Process:</strong> Helping you apply to English-taught bachelor’s and master’s programs in Italian public universities.
          <br />
          <strong>• Pre-Enrollment Assistance:</strong> Guidance on document preparation, translations, and application submission.
          <br />
          <strong>• Scholarship Assistance:</strong> We help you secure the <strong>Regional Government Scholarship</strong>, which provides a <strong>full tuition fee waiver</strong> and a <strong>monthly stipend</strong> for living expenses.
          <br />
          <strong>• Visa Process:</strong> Support with preparing and submitting your visa application to the Italian consulate, as well as the process at VFS Global.
          <br />
          • All of this is available for a <strong>fixed fee of INR 1.3 lakhs</strong>
        </>
      )
    },
    {
      question: "How does the scholarship work?",
      answer: (
        <>
          All our students are eligible for the <strong>Regional Government Scholarship</strong>, which offers a <strong>100% tuition fee waiver</strong> and a <strong>stipend</strong> for living expenses. This scholarship covers your entire study in Italy, making it possible to study for free, with no tuition fees and financial support for your stay. We assist you throughout the process to ensure you are successfully awarded this scholarship.
        </>
      )
    },
    {
      question: "Do I need to meet any specific academic requirements?",
      answer: (
        <>
          Yes, to apply for courses in Italian public universities, you need to have at least <strong>60% marks</strong> in your previous education. This is the minimum requirement to be eligible for most programs.
        </>
      )
    },
    {
      question: "Are IELTS, GRE, GMAT, or TOEFL scores required for the application?",
      answer: (
        <>
          <strong>No</strong>, IELTS, GRE, GMAT, or TOEFL scores are not mandatory for your application to Italian universities. While these tests may strengthen your profile, especially for highly competitive programs, they are <strong>not a requirement</strong>. We guide you through the process regardless of whether you have these test scores or not.
        </>
      )
    },
    {
      question: "Is the IMAT exam required for MBBS programs?",
      answer: (
        <>
          Yes, the <strong>IMAT (International Medical Admissions Test)</strong> is <strong>compulsory</strong> for students applying to <strong>MBBS</strong> programs in Italy. It is an entrance test that you need to take before applying to medical schools in Italy. We assist with the IMAT registration and preparation guidance as well.
        </>
      )
    },
    {
      question: "Are the courses taught in English?",
      answer: (
        <>
          Yes, all the programs offered by the Italian public universities we apply to are taught in <strong>English</strong>. Whether you're applying for a <strong>bachelor's</strong> or <strong>master's</strong> degree, you will find courses available in English to cater to international students.
        </>
      )
    },
    {
      question: "How does Euro Dreams choose the universities for me?",
      answer: (
        <>
          We apply to Italian public universities based on your <strong>academic profile, career goals</strong>, and <strong>preferences</strong>. After discussing your interests, preferred course, and location in Italy, we help you choose the best university that fits your academic and personal preferences. Our team ensures that your university choice aligns with your aspirations.
        </>
      )
    },
    {
      question: "What is included in the INR 1.3 lakh fee?",
      answer: (
        <>
          The INR 1.3 lakh fee covers:
          <br /><br />
          • <strong>University Application:</strong> We handle the application process for your chosen universities.<br />
          • <strong>Pre-Enrollment Assistance:</strong> Help with all necessary documents for the application process.<br />
          • <strong>Scholarship Application:</strong> We assist you in securing the <strong>Regional Government Scholarship</strong>.<br />
          • <strong>Visa Assistance:</strong> We guide you through the visa application process, including preparing documents and booking visa appointments.<br />
          • <strong>Pre-departure Support:</strong> You will receive support for your travel and settling in Italy.<br /><br />
          However, <strong>this package does not include the funds required to be shown for the visa application</strong> or the <strong>visa application fee at VFS Global.</strong>
        </>
      )
    },
    {
      question: "What documents are needed for the visa application?",
      answer: (
        <>
          For your visa application, you will need to show <strong>proof of financial funds</strong> for your stay in Italy. This is a separate requirement from our services. Additionally, you will need the following documents for the visa:
          <br /><br />
          • Valid Passport<br />
          • University Admission Letter<br />
          • Proof of Scholarship<br />
          • Proof of Funds (for visa purposes)<br />
          • Health Insurance<br />
          • Visa application fee (paid directly to VFS Global)<br /><br />
          Our team provides guidance on how to prepare these documents for your visa application.
        </>
      )
    },
    {
      question: "Are there any additional costs that I need to consider?",
      answer: (
        <>
          Yes, the <strong>funds to be shown for the visa application</strong> and the <strong>visa application fee</strong> at VFS Global are separate costs. These expenses are not included in the INR 1.3 lakh package. You will need to arrange these funds to meet the visa requirements, as stipulated by the Italian consulate.
        </>
      )
    },
    {
      question: "Can I apply for both bachelor’s and master’s programs through Euro Dreams?",
      answer: (
        <>
          Yes, we assist students with both <strong>bachelor’s</strong> and <strong>master’s programs</strong>. Whether you are starting your higher education journey or continuing your studies at the postgraduate level, we offer guidance and support for both types of applications.
        </>
      )
    },
    {
      question: "What happens if I am not eligible for the scholarship?",
      answer: (
        <>
          All students applying through Euro Dreams are eligible for the <strong>Regional Government Scholarship</strong>, provided they meet the academic and documentation requirements. If there is any issue with eligibility, our team will guide you on how to resolve it or explore alternative solutions to ensure you receive financial support.
        </>
      )
    },
    {
      question: "Do you provide post-arrival services in Italy?",
      answer: (
        <>
          While our primary services focus on the application, scholarship, and visa processes, we also offer <strong>pre-departure assistance</strong> to help you settle into life in Italy. This includes guidance on finding accommodation, opening a bank account, and understanding the culture. However, we do not provide direct post-arrival services on the ground in Italy.
        </>
      )
    },
    {
      question: "How long does the entire application process take?",
      answer: (
        <>
          The entire process, including application submission, scholarship assistance, and visa processing, generally takes around <strong>4 to 6 months</strong>. However, we recommend starting the process early to ensure enough time for visa approval and other formalities.
        </>
      )
    },
    {
      question: "When can I apply for the September 2025 intake?",
      answer: (
        <>
          Applications for the September 2025 intake are already open. The deadlines for each university may vary, but we advise applying as soon as possible to ensure a smooth process. Generally, the application deadlines for Italian public universities are in <strong>April-May 2025</strong> for the September intake.
        </>
      )
    },
    {
      question: "Do I need to learn Italian to study in Italy?",
      answer: (
        <>
          No, you do not need to learn Italian to study in Italy. All programs we assist with are taught in <strong>English</strong>, and you will have no trouble studying or communicating in the language. However, learning some basic Italian can help you in daily life and enhance your experience in Italy.
        </>
      )
    },
    {
      question: "Can I work while studying in Italy?",
      answer: (
        <>
          Yes, as an international student in Italy, you are allowed to work part-time during your studies. You can work up to 20 hours per week during the academic year and full-time during breaks, provided you have the necessary student visa.
        </>
      )
    },
    {
      question: "What are the advantages of studying in Italy?",
      answer: (
        <>
          Studying in Italy offers numerous advantages:
          <br /><br />
          • High-quality education in world-renowned universities.<br />
          • No tuition fees for eligible students through the <strong>Regional Government Scholarship</strong>.<br />
          • A rich cultural experience in one of the most beautiful countries in Europe.<br />
          • The opportunity to live in a country with excellent healthcare, a vibrant student life, and low living costs compared to other European destinations.
        </>
      )
    }
  ];

  return (
    <section className="relative py-24 bg-transparent overflow-hidden" id="faq">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-black tracking-widest text-blue-600 uppercase mb-6">
            Got Questions?
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Questions</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about studying in Italy, scholarships, and the Eurodreams process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 h-fit"
            >
              <button
                className="w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-base pr-4 leading-snug ${openIndex === index ? 'text-blue-600' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  <ChevronDown 
                    className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-600' : ''}`} 
                    size={20} 
                  />
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[1000px] opacity-100 pb-5" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
