import React, { useState } from "react";
import { Phone, Mail, MapPin, PhoneCall, CheckCircle2, MessageCircle } from "lucide-react";

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
      {/* Header Banner */}
      <section className="relative bg-brand-dark py-20 border-b border-brand-gold/30 text-left">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-2">Bize Ulaşın</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">İletişim & Teklif Formu</h1>
            <p className="text-white/80 mt-4 text-base sm:text-lg">
              Hafriyat, kazı dolgu, bina yıkımı veya nakliye projeleriniz için 7/24 bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="teklif" className="py-20">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl font-black text-brand-dark mb-4">Şantiye ve Merkez İletişim</h2>
                <p className="text-brand-textSecondary text-sm sm:text-base leading-relaxed">
                  Proje detaylarınızı görüşmek veya ücretsiz keşif randevusu oluşturmak için doğrudan bizi arayabilir ya da WhatsApp üzerinden hızlıca yazabilirsiniz.
                </p>
              </div>

              <div className="space-y-4">
                {/* Direct Call Card */}
                <a 
                  href={`tel:${phoneNumber}`}
                  className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-brand-gold shadow-sm hover:shadow-md transition flex items-start gap-4 block group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-dark group-hover:bg-brand-gold text-brand-gold group-hover:text-brand-dark flex items-center justify-center shrink-0 transition">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-brand-textSecondary font-medium">Telefon & Şantiye Hattı (Tıkla Ara)</div>
                    <div className="text-lg font-black text-brand-dark group-hover:text-brand-gold transition">+90 537 515 11 90</div>
                    <div className="text-xs text-brand-gold font-bold">7/24 Kesintisiz Destek</div>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#25D366] shadow-sm hover:shadow-md transition flex items-start gap-4 block group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center shrink-0 transition">
                    <MessageCircle className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-brand-textSecondary font-medium">WhatsApp İletişim Hattı</div>
                    <div className="text-lg font-black text-brand-dark group-hover:text-[#25D366] transition">+90 537 515 11 90</div>
                    <div className="text-xs text-[#25D366] font-bold">Anında Mesaj Gönderin</div>
                  </div>
                </a>

                <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-gold flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-brand-textSecondary font-medium">E-Posta</div>
                    <div className="text-lg font-black text-brand-dark">teklif@ucarhafriyat.com</div>
                    <div className="text-xs text-brand-textSecondary">info@ucarhafriyat.com</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-brand-textSecondary font-medium">Merkez Şantiye Ofisi</div>
                    <div className="text-base font-black text-brand-dark">Organize Ağır Sanayi Bölgesi</div>
                    <div className="text-xs text-brand-textSecondary">Merkez / Türkiye</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-xl">
              {formSubmitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">Talebiniz Başarıyla Alındı!</h3>
                  <p className="text-brand-textSecondary text-sm max-w-md mx-auto">
                    Mühendislerimiz ve saha ekibimiz en geç 2 saat içinde tarafınıza keşif ve teklif detayı ile dönüş yapacaktır.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-black text-brand-dark mb-6">Hızlı Fiyat & Keşif Formu</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1.5">Adınız Soyadınız / Firma</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Örn: Ahmet Yılmaz" 
                        className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-brand-dark focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1.5">Telefon Numaranız</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="05XX XXX XX XX" 
                        className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-brand-dark focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1.5">Hizmet Türü</label>
                      <select className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-brand-dark focus:outline-none focus:border-brand-gold font-medium">
                        <option value="hafriyat">Hafriyat & Kazı Dolgu</option>
                        <option value="nakliye">Ağır Yük & Damper Nakliyesi</option>
                        <option value="kiralama">İş Makinesi Kiralama</option>
                        <option value="yikim">Kontrollü Bina Yıkımı</option>
                        <option value="diger">Özel Proje & Diğer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1.5">Proje Lokasyonu</label>
                      <input 
                        type="text" 
                        placeholder="Şehir / İlçe / Şantiye" 
                        className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-brand-dark focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1.5">Proje Detayları (m³, alan büyüklüğü vb.)</label>
                    <textarea 
                      rows={4} 
                      placeholder="Tahmini hafriyat metrajı, işin başlangıç tarihi ve diğer özel istekleriniz..." 
                      className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-brand-dark focus:outline-none focus:border-brand-gold resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-black py-4 px-6 rounded-xl transition duration-200 shadow-lg text-sm"
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
