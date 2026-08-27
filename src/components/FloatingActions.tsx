import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const FloatingActions: React.FC = () => {
  const phoneNumber = "+905375151190";
  const whatsappUrl = "https://wa.me/905375151190?text=Merhaba,%20U%C3%A7ar%20Hafriyat%20ve%20Nakliyat%20hizmetleriniz%20hakk%C4%B1nda%20fiyat%20ve%20bilgi%20almak%20istiyorum.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Official Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
        aria-label="WhatsApp ile İletişime Geçin"
      >
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          WhatsApp'tan Yazın
        </span>
        <div className="w-6 h-6 flex items-center justify-center">
          <FaWhatsapp className="w-6 h-6 text-white" />
        </div>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group flex items-center gap-3 bg-brand-gold hover:bg-brand-goldHover text-brand-dark p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
        aria-label="Hemen Arayın: +90 537 515 11 90"
      >
        <span className="hidden sm:inline font-black text-xs tracking-wide">
          0537 515 11 90
        </span>
        <div className="w-6 h-6 flex items-center justify-center animate-bounce">
          <Phone className="w-5 h-5 fill-current text-brand-dark" />
        </div>
      </a>
    </div>
  );
};
