import React from "react";
import { Link } from "react-router-dom";
import { Truck, HardHat, CheckCircle2, ArrowRight, Shield } from "lucide-react";

export const Filo: React.FC = () => {
  const machinery = [
    {
      title: "Ağır Sınıf Paletli Ekskavatörler (30 - 45 Ton)",
      desc: "Derin temel kazısı, kaya kırma ve yüksek hacimli yükleme operasyonları için maksimum hidrolik güç.",
      image: "/excavator.jpg",
      specs: [
        "Kova Kapasitesi: 1.8 m³ - 2.6 m³",
        "Maksimum Kazma Derinliği: 8.5 Metre",
        "Donanım: Hidrolik Kırıcı & Riper Uyumu",
        "Durum: Operatörlü / Operatörsüz Kiralık"
      ]
    },
    {
      title: "Yüksek Kapasiteli 8x4 Damperli Kamyon Filosu",
      desc: "Zorlu şantiye arazi şartlarında yüksek taşıma kapasitesi ve hızlı boşaltma özelliği.",
      image: "/fleet.jpg",
      specs: [
        "Damper Hacmi: 22 - 32 m³ Hardox Gövde",
        "Taşıma Kapasitesi: 30 - 40 Ton",
        "Çekiş: 8x4 Ağır Hizmet Şantiye Tipi",
        "Donanım: Otomatik Branda & Tartı Sistemi"
      ]
    },
    {
      title: "Kentsel Yıkım & Yüksek Erişimli Ekskavatörler",
      desc: "Bina yıkımlarında yüksek katlara erişim sağlayan hidrolik makaslı özel yıkım makineleri.",
      image: "/demolition.jpg",
      specs: [
        "Erişim Yüksekliği: 24 - 32 Metre",
        "Donanım: Beton Kesici & Demir Ayrıştırıcı",
        "Güvenlik: Su Pülverize Toz Bastırma Sistemi",
        "Durum: Özel Yıkım Ekibiyle Beraber"
      ]
    },
    {
      title: "Lowbed Ağır Makine Taşıma Araçları",
      desc: "İş makinelerinin şantiyeler arası güvenli ve ruhsatlı transferini sağlayan çok dingilli platformlar.",
      image: "/project-highway.jpg",
      specs: [
        "Platform Kapasitesi: 70 Tona Kadar",
        "Dingil Tipi: Hidrolik Dümenlenebilir",
        "Güvenlik: Ağır Nakliye Yol İzin Belgeli",
        "Durum: 7/24 Şehirlerarası Sevk"
      ]
    }
  ];

  return (
    <div className="bg-brand-bgLight text-brand-textPrimary font-sans">
      {/* Header Banner */}
      <section className="relative bg-brand-dark py-20 border-b border-brand-gold/30 text-left">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-2">Makine Parkuru</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">Araç & İş Makinesi Filomuz</h1>
            <p className="text-white/80 mt-4 text-base sm:text-lg">
              Periyodik bakımları yetkili servislerce yapılan, en zorlu şantiye şartlarında durmaksızın çalışan güçlü makine parkımız.
            </p>
          </div>
        </div>
      </section>

      {/* Grid List */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {machinery.map((item, idx) => (
              <div key={idx} className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-72 overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-black text-brand-dark mb-3">{item.title}</h3>
                    <p className="text-brand-textSecondary text-xs sm:text-sm leading-relaxed mb-6">{item.desc}</p>
                    
                    <div className="bg-brand-bgSecondary p-4 rounded-xl space-y-2 border border-gray-200">
                      {item.specs.map((sp, sIdx) => (
                        <div key={sIdx} className="text-xs font-semibold text-brand-textPrimary flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                          <span>{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-0">
                  <Link
                    to="/iletisim#teklif"
                    className="w-full py-3 px-4 text-xs font-extrabold text-center block rounded-xl bg-brand-gold hover:bg-brand-goldHover text-brand-dark transition shadow"
                  >
                    Kiralama ve Fiyat Teklifi Al &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
