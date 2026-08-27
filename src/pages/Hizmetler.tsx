import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ExpandingCards, CardItem } from "@/components/ui/expanding-cards";
import { 
  Shovel, 
  Truck, 
  HardHat, 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Building2, 
  Wrench, 
  FileText,
  BadgeCheck,
  UserCheck
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const Hizmetler: React.FC = () => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number>(0);
  const detailSectionRef = useRef<HTMLDivElement>(null);

  // Kart sırası: 1. Hafriyat & Kazı Dolgu, 2. Ağır Yük & Damper Nakliyesi, 3. İş Makinesi Kiralama, 4. Bina Yıkım & Kırım İşleri
  const serviceCards: CardItem[] = [
    {
      id: "hafriyat",
      title: "Hafriyat & Kazı Dolgu",
      description:
        "Büyük ölçekli derin temel kazıları, lazer kot tesviyesi, arazi ıslahı ve resmi izinli döküm sahalarına hızlı tahliye mühendisliği.",
      imgSrc: "/excavator.jpg",
      icon: <Shovel size={24} />,
      linkHref: "/kurumsal",
      quoteHref: "/iletisim#teklif",
      tags: ["Temel Kazıları", "Lazer Kot Tesviye", "Stabilize Dolgu", "Resmi Döküm İzni"],
      fullDetails: {
        subtitle: "Lazer ve GPS Kot Ölçümlü Milimetrik Kazı & Arazi Islahı",
        specs: "20-45 Ton Paletli Ekskavatörler, Dozerler & 8x4 Damperli Kamyonlar",
        features: [
          "Büyük ölçekli konut, AVM ve sanayi tesisi derin temel kazıları",
          "Kaya zeminlerde hidrolik kırıcılarla seri ve güvenli kazı operasyonu",
          "Lazer nivelman ve GPS ile milimetrik sıfır hata kot tesviyesi",
          "Çevre mevzuatına %100 uygun, resmi barkodlu ve lisanslı döküm sahası tahliyesi"
        ],
        advantages: [
          "Ücretsiz arazi keşfi ve hassas metraj analizi",
          "Zamanında teslim taahhüdü ve kesintisiz 7/24 vardiya desteği",
          "A sınıfı iş güvenliği standartlarına uygun saha disiplini"
        ]
      }
    },
    {
      id: "nakliye",
      title: "Ağır Yük & Damper Nakliyesi",
      description:
        "8x4 Hardox gövdeli yüksek tonajlı damperli tırlarımız ve Lowbed araçlarımızla agrega, mıcır ve ağır makine lojistiği.",
      imgSrc: "/fleet.jpg",
      icon: <Truck size={24} />,
      linkHref: "/filo",
      quoteHref: "/iletisim#teklif",
      tags: ["8x4 Damperli Sevkiyat", "Lowbed Ağır Nakliye", "Agrega & Mıcır", "Hafriyat Tahliyesi"],
      fullDetails: {
        subtitle: "Yüksek Kapasiteli 8x4 Damper Filosu & Ruhsatlı Lowbed Taşımacılığı",
        specs: "22-32 m³ Hardox Damperler, 70 Ton Kapasiteli Lowbed Platformlar",
        features: [
          "Şantiyeler arası günlük binlerce ton hafriyat toprağı ve moloz sevkiyatı",
          "Taş ocağı ve santrallerden agrega, stabilize malzeme, mıcır ve kum temini",
          "Ağır iş makinelerinin şantiyeler arası karayolu izinli güvenli Lowbed transferi",
          "Otomatik brandalama ve kantarlı tartı sistemleriyle güvenli karayolu taşımacılığı"
        ],
        advantages: [
          "Büyük filoyla yüksek hacimli projelerde kesintisiz sevkiyat",
          "GPS araç takip sistemi ile anlık rota ve teslimat kontrolü",
          "SRC ve psikoteknik belgeli uzman şantiye şoför kadrosu"
        ]
      }
    },
    {
      id: "kiralama",
      title: "İş Makinesi Kiralama",
      description:
        "20 - 45 tonluk paletli ekskavatörler, loderler ve silindirler ile sertifikalı operatörlü esnek dönemsel kiralama çözümleri.",
      imgSrc: "/commercial-excavation.jpg",
      icon: <HardHat size={24} />,
      linkHref: "/filo",
      quoteHref: "/iletisim#teklif",
      tags: ["20-45 Ton Ekskavatör", "G Sınıfı Operatörlü", "Kaya Kırıcı Ataşman", "Dönemlik / Proje Bazlı"],
      fullDetails: {
        subtitle: "Sertifikalı Operatörlü & Bakımlı Ağır İş Makinesi Parkuru",
        specs: "Paletli Ekskavatörler, Beko Loderler, Dozerler ve Toprak Silindirleri",
        features: [
          "Saatlik, günlük, haftalık ve aylık esnek sözleşmeli makine kiralama seçenekleri",
          "G sınıfı ehliyetli, İSG eğitimli, en az 10 yıl saha tecrübeli uzman operatörler",
          "Kaya kırıcı, riper, kovalı ve polip ataşman seçenekleriyle tam donanım",
          "Şantiyede olası arızalara anında müdahale eden 7/24 gezici mobil teknik servis desteği"
        ],
        advantages: [
          "Son model, düşük çalışma saatli ve düzenli yetkili servis bakımlı araçlar",
          "Yakıtlı / yakıtsız esnek kiralama paketleri",
          "Projenizin büyüklüğüne göre anında filo büyütme esnekliği"
        ]
      }
    },
    {
      id: "yikim",
      title: "Bina Yıkım & Kırım İşleri",
      description:
        "Yüksek erişimli hidrolik makaslar ve basınçlı toz bastırma sistemleri ile çevreye sıfır zararlı kontrollü betonarme yıkımı.",
      imgSrc: "/demolition.jpg",
      icon: <ShieldCheck size={24} />,
      linkHref: "/kurumsal",
      quoteHref: "/iletisim#teklif",
      tags: ["Kentsel Dönüşüm", "Hidrolik Makas", "Toz Bastırma Sisleme", "Enkaz Ayrıştırma"],
      fullDetails: {
        subtitle: "Kentsel Dönüşüm, Fabrika ve Çok Katlı Yapılarda Kontrollü Yıkım Mühendisliği",
        specs: "24-32 Metre Yüksek Erişimli Ekskavatörler, Hidrolik Beton Makasları",
        features: [
          "Çevre yapılara, yollara ve alt yapılara sıfır zarar prensibiyle kat kat kontrollü yıkım",
          "Yüksek basınçlı su sisleme ve pülverize pülverizatör sistemleriyle tozumayı önleme",
          "Yıkım sonrası hurda demir, beton ve molozların yerinde ayrıştırılması ve geri dönüşümü",
          "Tüm belediye, valilik ve döküm alanı yıkım ruhsat izinlerinin anahtar teslim takibi"
        ],
        advantages: [
          "Risk analizi yapılmış profesyonel yıkım planı ve mühendis kontrolü",
          "Çevre güvenliğini sağlayan bariyerleme ve iş güvenliği emniyet tedbirleri",
          "Enkazın döküm sahasına süratli ve temiz tahliyesi"
        ]
      }
    }
  ];

  const location = useLocation();

  // Hash (#hafriyat, #nakliye, #kiralama, #yikim) ile gelindiğinde ilgili kartı seç ve alttaki detay bölümüne kaydır
  useEffect(() => {
    if (location.hash) {
      const cleanHash = location.hash.replace("#", "");
      const foundIdx = serviceCards.findIndex((s) => s.id === cleanHash);
      if (foundIdx !== -1) {
        setSelectedServiceIndex(foundIdx);
        // Kısa gecikme ile kart açılışı ve düzgün scroll sağlama
        setTimeout(() => {
          detailSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.hash]);

  const currentService = serviceCards[selectedServiceIndex];

  const handleDetailClick = (index: number) => {
    setSelectedServiceIndex(index);
    setTimeout(() => {
      detailSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // WhatsApp dinamik mesajı: Şirket sahibi Yasin Uçar'a hitaplı
  const whatsappUrl = `https://wa.me/905375151190?text=${encodeURIComponent(
    `Merhaba Yasin Bey, Uçar Hafriyat web sitenizden "${currentService.title}" hizmetiniz hakkında detaylı bilgi ve fiyat teklifi almak istiyorum. Proje detaylarımızı paylaşabilir miyim?`
  )}`;

  return (
    <div className="bg-brand-bgLight text-brand-textPrimary font-sans">
      {/* Header Banner */}
      <section className="relative bg-brand-dark py-12 sm:py-20 border-b border-brand-gold/30 text-left">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-[10px] sm:text-xs font-bold text-brand-gold uppercase tracking-widest block mb-1.5 sm:mb-2">Faaliyetlerimiz & Mühendislik</span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">Kurumsal Hizmetlerimiz</h1>
            <p className="text-white/80 mt-2 sm:mt-4 text-xs sm:text-base md:text-lg">
              Zemin etüdünden temel kazısına, ağır damper lojistiğinden kontrollü bina yıkımına kadar tüm saha operasyonlarımız.
            </p>
          </div>
        </div>
      </section>

      {/* Expanding Cards Section */}
      <section className="py-12 sm:py-20 bg-brand-bgLight flex flex-col items-center justify-center">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-bold text-brand-gold uppercase tracking-wider block mb-1.5 sm:mb-2">
              İnteraktif Hizmet Vitrini
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark">
              Uzmanlık Alanlarımızı Keşfedin
            </h2>
            <p className="text-brand-textSecondary text-xs sm:text-sm md:text-base mt-2 sm:mt-3">
              Kartların üzerine gelerek veya dokunarak hizmet detaylarını inceleyebilir, aşağıdaki detaylı bilgi panelinden anında WhatsApp ile teklif alabilirsiniz.
            </p>
          </div>

          {/* Expanding Cards Component */}
          <ExpandingCards 
            items={serviceCards} 
            activeIndex={selectedServiceIndex}
            onActiveChange={(idx) => setSelectedServiceIndex(idx)}
            onDetailClick={(idx) => handleDetailClick(idx)}
          />
        </div>
      </section>

      {/* İnteraktif Hizmet Vitrininin Altındaki Detaylı Bilgi ve WhatsApp Teklif Paneli */}
      <section 
        id="hizmet-detay-panel" 
        ref={detailSectionRef} 
        className="py-12 sm:py-20 bg-white border-y border-gray-200 scroll-mt-24"
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto text-left">
          
          {/* Hizmet Hızlı Sekmeleri */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 pb-4 border-b border-gray-100">
            <span className="text-xs font-bold text-brand-dark mr-2 uppercase tracking-wider">Hızlı Seçim:</span>
            {serviceCards.map((card, idx) => (
              <button
                key={card.id}
                onClick={() => setSelectedServiceIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  selectedServiceIndex === idx
                    ? "bg-brand-dark text-brand-gold shadow-md border-b-2 border-brand-gold"
                    : "bg-brand-bgSecondary text-brand-textSecondary hover:text-brand-dark hover:bg-gray-200"
                }`}
              >
                {card.icon}
                <span>{card.title}</span>
              </button>
            ))}
          </div>

          {/* Seçilen Hizmetin Detay Paneli */}
          <div className="bg-gradient-to-br from-brand-bgLight to-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-brand-dark/10 shadow-xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Sol: Detaylı Bilgi Açıklamaları */}
              <div className="lg:col-span-7 space-y-6">
                
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 text-brand-dark text-xs font-black uppercase tracking-wider mb-3">
                    <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                    Detaylı Hizmet Bilgisi
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark tracking-tight">
                    {currentService.title}
                  </h3>
                  <p className="text-brand-gold font-bold text-sm sm:text-base mt-1">
                    {currentService.fullDetails?.subtitle}
                  </p>
                </div>

                <p className="text-brand-textSecondary text-sm sm:text-base leading-relaxed">
                  {currentService.description}
                </p>

                {/* Makine ve Ekipman Bilgisi */}
                {currentService.fullDetails?.specs && (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-dark flex items-center justify-center text-brand-gold shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-brand-textSecondary uppercase tracking-wider">Kullanılan Donanım & Parkur</div>
                      <div className="text-xs sm:text-sm font-black text-brand-dark">{currentService.fullDetails.specs}</div>
                    </div>
                  </div>
                )}

                {/* Kapsam Maddeleri */}
                <div>
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-brand-dark mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Hizmet Kapsamı & Operasyon Standartları
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentService.fullDetails?.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-gray-200/80 text-xs text-brand-textPrimary font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Uçar Hafriyat Avantajları */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {currentService.fullDetails?.advantages.map((adv, aIdx) => (
                      <div key={aIdx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-bgSecondary text-xs font-semibold text-brand-dark">
                        <BadgeCheck className="w-3.5 h-3.5 text-brand-gold" />
                        {adv}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sağ: Görsel & WhatsApp Teklif Al Kartı */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                
                {/* Hizmet Görseli */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-brand-dark h-56 sm:h-72">
                  <img 
                    src={currentService.imgSrc} 
                    alt={currentService.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white">
                      <div className="text-[10px] uppercase font-bold text-brand-gold tracking-wider">Şirket Sahibi / Yetkili</div>
                      <div className="text-sm sm:text-base font-black flex items-center gap-1.5">
                        <UserCheck className="w-4 h-4 text-brand-gold" /> Yasin UÇAR
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Otomatik Mesaj ve Teklif Kutusu */}
                <div className="bg-brand-dark text-white rounded-2xl p-5 sm:p-6 border border-brand-gold/40 shadow-xl space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Doğrudan İletişim</span>
                      <span className="text-[10px] bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Çevrimiçi
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-black text-white">
                      Bu Hizmet İçin Hemen Teklif Alın
                    </h4>
                    <p className="text-xs text-white/75 mt-1">
                      Butona bastığınızda şirket sahibimiz <strong>Yasin Uçar</strong>'a seçtiğiniz hizmete özel otomatik WhatsApp mesajı gönderilir.
                    </p>
                  </div>

                  {/* Teklif Al WhatsApp Butonu */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm flex items-center justify-center gap-2.5 transition shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5 duration-200"
                  >
                    <FaWhatsapp className="w-5 h-5 text-white" />
                    WhatsApp ile Teklif Al (Yasin Uçar)
                  </a>

                  {/* Telefon ile Ara Butonu */}
                  <a
                    href="tel:+905375151190"
                    className="w-full py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition border border-white/10"
                  >
                    <PhoneCall className="w-4 h-4 text-brand-gold" />
                    Doğrudan Ara: 0537 515 11 90
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="py-12 sm:py-20 bg-brand-dark text-white text-left border-t border-brand-gold/30">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] sm:text-xs font-bold text-brand-gold uppercase tracking-widest block mb-1.5 sm:mb-2">7/24 Kesintisiz Şantiye Desteği</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
              Projenize Özel Metraj & Fiyat Analizi Çıkaralım
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Şirket sahibimiz <strong>Yasin Uçar</strong> ve saha mühendislerimiz arazinizde inceleme yaparak en ekonomik ve güvenli operasyon planını sunar.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4 shrink-0">
            <a
              href="https://wa.me/905375151190?text=Merhaba%20Yasin%20Bey,%20U%C3%A7ar%20Hafriyat%20ve%20Nakliyat%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20ve%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-5 py-3 sm:px-7 sm:py-4 rounded-xl transition text-xs sm:text-sm flex items-center gap-2 shadow-lg"
            >
              <FaWhatsapp className="w-4 h-4" /> WhatsApp ile Yazın
            </a>
            <Link
              to="/iletisim#teklif"
              className="bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-black px-5 py-3 sm:px-7 sm:py-4 rounded-xl transition text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-brand-gold/30"
            >
              Hızlı Teklif İste <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
