import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  Clock
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  };

  const navLinks = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Kurumsal", path: "/kurumsal" },
    { name: "Hizmetlerimiz", path: "/hizmetler" },
    { name: "Araç Filomuz", path: "/filo" },
    { name: "İletişim", path: "/iletisim" },
  ];

  const phoneNumber = "+905375151190";
  const whatsappUrl = "https://wa.me/905375151190?text=Merhaba,%20U%C3%A7ar%20Hafriyat%20ve%20Nakliyat%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

  return (
    <>
      {/* Top Header Bar */}
      <div className="bg-[#141413] text-white text-xs sm:text-sm py-2.5 px-4 border-b border-[#2C2C2B] relative z-50">
        <div className="w-full px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 text-[#A0A09F]">
            <span className="flex items-center gap-1.5 hover:text-brand-gold transition">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0" /> Ağır Sanayi & Şantiye Bölgesi, Türkiye
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-brand-gold transition">
              <Mail className="w-4 h-4 text-brand-gold shrink-0" /> info@ucarhafriyat.com
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-white/60">
              <Clock className="w-3.5 h-3.5 text-brand-gold" /> 7/24 Kesintisiz Saha Operasyonu
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-bold hover:underline"
            >
              <FaWhatsapp className="w-4 h-4" /> WhatsApp
            </a>
            <a 
              href={`tel:${phoneNumber}`} 
              className="flex items-center gap-1.5 text-brand-gold font-bold hover:underline"
            >
              <Phone className="w-4 h-4" /> 7/24 Şantiye Destek: +90 537 515 11 90
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#1A1A19]/98 backdrop-blur-md shadow-2xl py-3 border-b border-brand-gold/40" 
          : "bg-[#1A1A19] py-4 border-b border-white/10"
      }`}>
        <div className="w-full px-4 sm:px-8 lg:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border-2 border-brand-gold group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shadow-lg shadow-brand-gold/20">
              <img src="/logo.png" alt="Uçar Hafriyat ve Nakliyat Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
                UÇAR <span className="text-brand-gold text-xs font-bold tracking-widest px-2 py-0.5 rounded bg-white/10 border border-brand-gold/40">HAFRİYAT</span>
              </div>
              <p className="text-[10.5px] text-[#A0A09F] tracking-widest uppercase font-semibold">Hafriyat & Nakliyecilik A.Ş.</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8 text-sm font-semibold text-white/80">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`transition-colors py-1 relative ${
                    isActive 
                      ? "text-brand-gold font-bold" 
                      : "hover:text-brand-gold text-white/90"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Header Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366] hover:text-white rounded-lg transition"
            >
              <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp
            </a>
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-md shadow-brand-gold/20 flex items-center gap-2"
            >
              Hemen Ara: 0537 515 11 90 <Phone className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-white p-2 hover:text-brand-gold transition"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-brand-gold" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#1A1A19] border-b border-brand-gold/30 px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className={`block text-lg font-medium py-1 ${
                  location.pathname === link.path ? "text-brand-gold font-bold" : "text-white hover:text-brand-gold"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-lg bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4" /> WhatsApp ile Mesaj Gönder
              </a>
              <a 
                href={`tel:${phoneNumber}`} 
                className="w-full text-center py-3 rounded-lg bg-brand-gold text-brand-dark font-black text-sm shadow flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> 0537 515 11 90 Numarasını Ara
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
