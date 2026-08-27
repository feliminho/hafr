import React from "react";
import { Link } from "react-router-dom";
import { ExpandingCards, CardItem } from "@/components/ui/expanding-cards";
import { Shovel, Truck, HardHat, ShieldCheck, ArrowRight, PhoneCall } from "lucide-react";

export const Hizmetler: React.FC = () => {
  const serviceCards: CardItem[] = [
    {
      id: "hafriyat",
      title: "Hafriyat & Kazı Dolgu",
      description:
        "Büyük ölçekli derin temel kazıları, lazer kot tesviyesi, arazi ıslahı ve resmi izinli döküm sahalarına hızlı tahliye mühendisliği.",
      imgSrc: "/excavator.jpg",
      icon: <Shovel size={26} />,
      linkHref: "/kurumsal",
      quoteHref: "/iletisim#teklif"
    },
    {
      id: "nakliye",
      title: "Ağır Yük & Damper Nakliyesi",
      description:
        "8x4 Hardox gövdeli yüksek tonajlı damperli tırlarımız ve Lowbed araçlarımızla agrega, mıcır ve ağır makine lojistiği.",
      imgSrc: "/fleet.jpg",
      icon: <Truck size={26} />,
      linkHref: "/filo",
      quoteHref: "/iletisim#teklif"
    },
    {
      id: "yikim",
      title: "Bina Yıkım & Kentsel Dönüşüm",
      description:
        "Yüksek erişimli hidrolik makaslar ve basınçlı toz bastırma sistemleri ile çevreye sıfır zararlı kontrollü betonarme yıkımı.",
      imgSrc: "/demolition.jpg",
      icon: <ShieldCheck size={26} />,
      linkHref: "/kurumsal",
      quoteHref: "/iletisim#teklif"
    },
    {
      id: "kiralama",
      title: "İş Makinesi Kiralama",
      description:
        "20 - 45 tonluk paletli ekskavatörler, loderler ve silindirler ile sertifikalı operatörlü esnek dönemsel kiralama çözümleri.",
      imgSrc: "/commercial-excavation.jpg",
      icon: <HardHat size={26} />,
      linkHref: "/filo",
      quoteHref: "/iletisim#teklif"
    }
  ];

  return (
    <div className="bg-brand-bgLight text-brand-textPrimary font-sans">
      {/* Header Banner */}
      <section className="relative bg-brand-dark py-20 border-b border-brand-gold/30 text-left">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-2">Faaliyetlerimiz & Mühendislik</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">Kurumsal Hizmetlerimiz</h1>
            <p className="text-white/80 mt-4 text-base sm:text-lg">
              Zemin etüdünden temel kazısına, ağır damper lojistiğinden kontrollü bina yıkımına kadar tüm saha operasyonlarımız.
            </p>
          </div>
        </div>
      </section>

      {/* Expanding Cards Section */}
      <section className="py-20 bg-brand-bgLight flex flex-col items-center justify-center">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl mb-12">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block mb-2">
              İnteraktif Hizmet Vitrini
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-dark">
              Uzmanlık Alanlarımızı Keşfedin
            </h2>
            <p className="text-brand-textSecondary text-sm sm:text-base mt-3">
              Kartların üzerine gelerek veya tıklayarak hizmet detaylarını inceleyebilir, anında teklif alabilirsiniz.
            </p>
          </div>

          {/* Expanding Cards Component */}
          <ExpandingCards items={serviceCards} defaultActiveIndex={0} />
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="py-20 bg-brand-dark text-white text-left border-t border-brand-gold/30">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-2">7/24 Kesintisiz Şantiye Desteği</span>
            <h3 className="text-3xl font-black text-white leading-tight mb-2">
              Projenize Özel Metraj & Fiyat Analizi Çıkaralım
            </h3>
            <p className="text-sm text-white/70">
              Saha mühendislerimiz arazinizde inceleme yaparak en ekonomik ve güvenli operasyon planını sunar.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="https://wa.me/905375151190?text=Merhaba,%20U%C3%A7ar%20Hafriyat%20ve%20Nakliyat%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 py-4 rounded-xl transition text-sm flex items-center gap-2 shadow-lg"
            >
              WhatsApp ile Yazın
            </a>
            <Link
              to="/iletisim#teklif"
              className="bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-black px-7 py-4 rounded-xl transition text-sm flex items-center gap-2 shadow-lg shadow-brand-gold/30"
            >
              Hızlı Teklif İste <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
