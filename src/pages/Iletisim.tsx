import React, { useState } from "react";
import { Phone, Mail, MapPin, PhoneCall, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SEO } from "@/components/SEO";

export const Iletisim: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const phoneNumber = "+905375151190";
  const whatsappUrl = "https://wa.me/905375151190?text=Merhaba,%20U%C3%A7ar%20Hafriyat%20ve%20Nakliyat%20hizmetleriniz%20hakk%C4%B1nda%20teklif%20ve%20bilgi%20almak%20istiyorum.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="bg-brand-bgLight text-brand-textPrimary font-sans">
      <SEO 
        title="İletişim & Fiyat Teklifi Al | Uçar Hafriyat ve Nakliyat"
        description="7/24 şantiye destek hattı: 0537 515 11 90. Projeniz için hemen ücretsiz keşif ve fiyat teklifi talep edin."
        canonical="https://ucarhafriyat.com/iletisim"
      />
      {/* Header Banner */}
      <section className="relative bg-brand-dark py-12 sm:py-20 border-b border-brand-gold/30 text-left">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-[10px] sm:text-xs font-bold text-brand-gold uppercase tracking-widest block mb-1.5 sm:mb-2">Bize Ulaşın</span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">İletişim & Teklif Formu</h1>
            <p className="text-white/80 mt-2 sm:mt-4 text-xs sm:text-base md:text-lg">
              Hafriyat, kazı dolgu, bina yıkımı veya nakliye projeleriniz için 7/24 bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="teklif" className="py-12 sm:py-20">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-dark mb-2 sm:mb-4">Şantiye ve Merkez İletişim</h2>
                <p className="text-brand-textSecondary text-xs sm:text-sm md:text-base leading-relaxed">
                  Proje detaylarınızı görüşmek veya ücretsiz keşif randevusu oluşturmak için doğrudan bizi arayabilir ya da WhatsApp üzerinden hızlıca yazabilirsiniz.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {/* Direct Call Card */}
                <a 
                  href={`tel:${phoneNumber}`}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 hover:border-brand-gold shadow-sm hover:shadow-md transition flex items-start gap-3 sm:gap-4 block group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-dark group-hover:bg-brand-gold text-brand-gold group-hover:text-brand-dark flex items-center justify-center shrink-0 transition">
                    <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-brand-textSecondary font-medium">Telefon & Şantiye Hattı (Tıkla Ara)</div>
                    <div className="text-base sm:text-lg font-black text-brand-dark group-hover:text-brand-gold transition">+90 537 515 11 90</div>
                    <div className="text-[11px] sm:text-xs text-brand-gold font-bold">7/24 Kesintisiz Destek</div>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#25D366] shadow-sm hover:shadow-md transition flex items-start gap-3 sm:gap-4 block group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center shrink-0 transition">
                    <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-brand-textSecondary font-medium">WhatsApp İletişim Hattı</div>
                    <div className="text-base sm:text-lg font-black text-brand-dark group-hover:text-[#25D366] transition">+90 537 515 11 90</div>
                    <div className="text-[11px] sm:text-xs text-[#25D366] font-bold">Anında Mesaj Gönderin</div>
                  </div>
                </a>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-dark text-brand-gold flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-brand-textSecondary font-medium">E-Posta</div>
                    <div className="text-sm sm:text-base md:text-lg font-black text-brand-dark">teklif@ucarhafriyat.com</div>
                    <div className="text-[11px] sm:text-xs text-brand-textSecondary">info@ucarhafriyat.com</div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-dark text-brand-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-brand-textSecondary font-medium">Merkez Şantiye Ofisi</div>
                    <div className="text-sm sm:text-base font-black text-brand-dark">Organize Ağır Sanayi Bölgesi</div>
                    <div className="text-[11px] sm:text-xs text-brand-textSecondary">Merkez / Türkiye</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-white p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xl">
              {formSubmitted ? (
                <div className="py-12 sm:py-16 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-2">Talebiniz Başarıyla Alındı!</h3>
                  <p className="text-brand-textSecondary text-xs sm:text-sm max-w-md mx-auto">
                    Mühendislerimiz ve saha ekibimiz en geç 2 saat içinde tarafınıza keşif ve teklif detayı ile dönüş yapacaktır.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h3 className="text-xl sm:text-2xl font-black text-brand-dark mb-4 sm:mb-6">Hızlı Fiyat & Keşif Formu</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-brand-dark mb-1">Adınız Soyadınız / Firma</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Örn: Ahmet Yılmaz" 
                        className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-brand-dark focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-brand-dark mb-1">Telefon Numaranız</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="05XX XXX XX XX" 
                        className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-brand-dark focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-brand-dark mb-1">Hizmet Türü</label>
                      <select className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-brand-dark focus:outline-none focus:border-brand-gold font-medium">
                        <option value="hafriyat">Hafriyat & Kazı Dolgu</option>
                        <option value="nakliye">Ağır Yük & Damper Nakliyesi</option>
                        <option value="kiralama">İş Makinesi Kiralama</option>
                        <option value="yikim">Kontrollü Bina Yıkımı</option>
                        <option value="diger">Özel Proje & Diğer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-brand-dark mb-1">Proje Lokasyonu</label>
                      <input 
                        type="text" 
                        placeholder="Şehir / İlçe / Şantiye" 
                        className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-brand-dark focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-brand-dark mb-1">Proje Detayları (m³, alan büyüklüğü vb.)</label>
                    <textarea 
                      rows={3} 
                      placeholder="Tahmini hafriyat metrajı, işin başlangıç tarihi ve diğer özel istekleriniz..." 
                      className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-brand-dark focus:outline-none focus:border-brand-gold resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-black py-3.5 sm:py-4 px-6 rounded-xl transition duration-200 shadow-lg text-xs sm:text-sm"
                  >
                    Teklif Talebini Gönder &rarr;
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
