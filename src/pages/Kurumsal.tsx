import React from "react";
import { Link } from "react-router-dom";
import { Award, ShieldCheck, Clock, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

export const Kurumsal: React.FC = () => {
  return (
    <div className="bg-brand-bgLight text-brand-textPrimary font-sans">
      <SEO 
        title="Kurumsal Profilimiz & Hakkımızda | Uçar Hafriyat ve Nakliyat"
        description="20 yıllık sektör tecrübesi, iş sağlığı ve güvenliği standartları ve şirket sahibimiz Yasin Uçar liderliğinde sağlam taahhütler."
        canonical="https://ucarhafriyat.com/kurumsal"
      />
      {/* Header Banner */}
      <section className="relative bg-brand-dark py-12 sm:py-20 border-b border-brand-gold/30 text-left">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-[10px] sm:text-xs font-bold text-brand-gold uppercase tracking-widest block mb-1.5 sm:mb-2">Hakkımızda & Vizyon</span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">Kurumsal Profilimiz</h1>
            <p className="text-white/80 mt-2 sm:mt-4 text-xs sm:text-base md:text-lg">
              Türkiye'nin her noktasında sağlam temeller, güvenli zeminler ve zamanında teslim edilen altyapı projeleri inşa ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center text-left">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-dark mb-4 sm:mb-6">
                20 Yıllık Güven ve Güçlü Makine Parkuru
              </h2>
              <p className="text-brand-textSecondary text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
                <strong>Uçar Hafriyat ve Nakliyat</strong>, hafriyat, kentsel dönüşüm bina yıkımı, derin temel kazısı ve ağır nakliye alanında sektörün en tecrübeli ve güvenilir firmalarından biridir.
              </p>
              <p className="text-brand-textSecondary text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
                Gelişmiş GPS zemin kot takip cihazları, yeni nesil ekskavatör ve damper filomuzla hem çevre mevzuatına %100 uyum sağlıyor hem de müşterilerimize en yüksek verimlilikle hizmet sunuyoruz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-3.5 sm:p-4 bg-brand-bgSecondary rounded-xl border border-gray-200">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold mb-2" />
                  <h4 className="font-bold text-xs sm:text-sm text-brand-dark">Resmi Döküm İzinleri</h4>
                  <p className="text-[11px] sm:text-xs text-brand-textSecondary mt-1">Yasal ve lisanslı döküm sahalarıyla sıfır cezai risk.</p>
                </div>
                <div className="p-3.5 sm:p-4 bg-brand-bgSecondary rounded-xl border border-gray-200">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold mb-2" />
                  <h4 className="font-bold text-xs sm:text-sm text-brand-dark">İSG & Çevre Uyumu</h4>
                  <p className="text-[11px] sm:text-xs text-brand-textSecondary mt-1">A sınıfı iş güvenliği uzmanlarımızla kontrollü saha.</p>
                </div>
              </div>

              {/* Kurucu / Şirket Sahibi Kartı */}
              <div className="p-4 sm:p-5 rounded-2xl bg-brand-dark text-white border border-brand-gold/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-bold text-brand-gold tracking-widest block">Şirket Sahibi & Genel Yönetim</span>
                  <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">Yasin UÇAR</h3>
                  <p className="text-xs text-white/70 mt-1">20+ yıllık saha tecrübesiyle anahtar teslim hafriyat taahhütleri.</p>
                </div>
                <a
                  href="https://wa.me/905375151190?text=Merhaba%20Yasin%20Bey,%20U%C3%A7ar%20Hafriyat%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-brand-gold hover:bg-brand-goldHover text-brand-dark text-xs font-black transition shrink-0 ml-3"
                >
                  Görüşme Başlat
                </a>
              </div>
            </div>

            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-brand-dark">
              <img src="/kurumsal-saha.jpg" alt="Uçar Hafriyat Şantiye Sahası" className="w-full h-64 sm:h-96 lg:h-[450px] object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
