import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eurodreams | Study in Italy with Scholarships",
  description: "Maximize your chances of studying in Italy with 100% scholarships. Book your free profile evaluation with Eurodreams today.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ModalProvider } from "@/context/ModalContext";
import { LoginModal } from "@/components/modals/LoginModal";
import { BookCallModal } from "@/components/modals/BookCallModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <LoginModal />
          <BookCallModal />
        </ModalProvider>
      </body>
    </html>
  );
}
