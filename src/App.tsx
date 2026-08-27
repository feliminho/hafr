import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Home } from "@/pages/Home";
import { Kurumsal } from "@/pages/Kurumsal";
import { Hizmetler } from "@/pages/Hizmetler";
import { Filo } from "@/pages/Filo";
import { Iletisim } from "@/pages/Iletisim";

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll restoration to top on any navigation change */}
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between bg-brand-bgLight text-brand-textPrimary font-sans relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kurumsal" element={<Kurumsal />} />
            <Route path="/hizmetler" element={<Hizmetler />} />
            <Route path="/filo" element={<Filo />} />
            <Route path="/iletisim" element={<Iletisim />} />
          </Routes>
        </main>
        <Footer />
        {/* Floating WhatsApp with official icon & Call Buttons */}
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
}
