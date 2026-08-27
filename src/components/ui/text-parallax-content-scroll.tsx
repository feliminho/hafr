import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Shovel, Truck, HardHat, ShieldCheck, CheckCircle2 } from "lucide-react";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-brand-bgLight">
      {/* 1. Hafriyat & Kazı Dolgu */}
      <TextParallaxContent
        imgUrl="/excavator.jpg"
        subheading="HAFRİYAT & ZEMİN MÜHENDİSLİĞİ"
        heading="Temele Güç, Geleceğe Güven."
      >
        <ServiceHafriyatContent />
      </TextParallaxContent>

      {/* 2. Ağır Yük & Damper Lojistiği */}
      <TextParallaxContent
        imgUrl="/fleet.jpg"
        subheading="AĞIR TONAJLI TAŞIMACILIK"
        heading="Zorlu Yollarda Kesintisiz İkmal."
      >
        <ServiceNakliyeContent />
      </TextParallaxContent>

      {/* 3. Kontrollü Bina & Tesis Yıkımı */}
      <TextParallaxContent
        imgUrl="/demolition.jpg"
        subheading="KENTSEL DÖNÜŞÜM & YIKIM"
        heading="Sıfır Hata, Yüksek Hassasiyet."
      >
        <ServiceYikimContent />
      </TextParallaxContent>

      {/* 4. İş Makinesi Kiralama */}
      <TextParallaxContent
        imgUrl="/commercial-excavation.jpg"
        subheading="GÜÇLÜ MAKİNE PARKI"
        heading="Her Tonajda Ağır Hizmet Çözümü."
      >
        <ServiceKiralamaContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

export const TextParallaxContent: React.FC<TextParallaxContentProps> = ({ 
  imgUrl, 
  subheading, 
  heading, 
  children 
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      className="mb-8"
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage: React.FC<{ imgUrl: string }> = ({ imgUrl }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl shadow-2xl border border-white/10"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/75"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy: React.FC<{ subheading: string; heading: string }> = ({ subheading, heading }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white px-6 text-center"
    >
      <p className="mb-2 text-center text-sm md:text-xl font-bold tracking-widest text-brand-gold uppercase bg-black/60 px-4 py-1.5 rounded-full border border-brand-gold/40 backdrop-blur-md">
        {subheading}
      </p>
      <p className="text-center text-3xl font-black sm:text-5xl md:text-7xl max-w-4xl leading-tight drop-shadow-2xl">
        {heading}
      </p>
    </motion.div>
  );
};

const ServiceHafriyatContent = () => (
  <div id="hafriyat" className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-24 pt-16 md:grid-cols-12 text-left bg-white rounded-3xl shadow-lg border border-gray-200 mt-6">
    <div className="col-span-1 md:col-span-4">
      <div className="w-14 h-14 rounded-2xl bg-brand-dark flex items-center justify-center mb-4">
        <Shovel className="w-7 h-7 text-brand-gold" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-black text-brand-dark leading-tight">
        Derin Temel & Altyapı Kazı Mühendisliği
      </h2>
      <p className="text-xs text-brand-gold font-bold uppercase tracking-wider mt-2">
        Milisaniyelik GPS Kot Ölçümü
      </p>
    </div>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-base sm:text-lg text-brand-textSecondary leading-relaxed">
        Büyük ölçekli konut, ticari kule, organize sanayi fabrikaları ve otoyol viyadük kazılarında lazer kot takip sistemleriyle milimetrik kazı yapıyoruz.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Kademeli Şev ve İksa Güvenliği</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Kaya Kırıcı ve Riperli Kazı</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Resmi İzinli Döküm Sahası Sevki</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Stabilize Dolgu ve Sıkıştırma</span>
        </div>
      </div>
      <Link
        to="/iletisim#teklif"
        className="inline-flex items-center gap-2 rounded-xl bg-brand-dark px-8 py-4 text-sm font-bold text-white transition-all hover:bg-brand-gold hover:text-brand-dark shadow-md"
      >
        Hafriyat Fiyat Teklifi Al <FiArrowUpRight className="text-lg" />
      </Link>
    </div>
  </div>
);

const ServiceNakliyeContent = () => (
  <div id="nakliye" className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-24 pt-16 md:grid-cols-12 text-left bg-white rounded-3xl shadow-lg border border-gray-200 mt-6">
    <div className="col-span-1 md:col-span-4">
      <div className="w-14 h-14 rounded-2xl bg-brand-dark flex items-center justify-center mb-4">
        <Truck className="w-7 h-7 text-brand-gold" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-black text-brand-dark leading-tight">
        8x4 Damperli Kamyon & Lowbed Lojistiği
      </h2>
      <p className="text-xs text-brand-gold font-bold uppercase tracking-wider mt-2">
        Günlük 1.500+ Ton Taşıma Kapasitesi
      </p>
    </div>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-base sm:text-lg text-brand-textSecondary leading-relaxed">
        Hardox gövdeli yüksek tonajlı damperli tırlarımız ve ağır hizmet 8x4 kamyonlarımızla taş ocağından, limandan veya şantiyeden aralıksız agrega ve moloz nakliyesi yapıyoruz.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Kum, Mıcır, Çakıl, Agrega Sevki</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Lowbed Ağır Makine Transferi</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Otomatik Tartım & Sefer Raporu</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>7/24 Şehirlerarası Lojistik İkmal</span>
        </div>
      </div>
      <Link
        to="/iletisim#teklif"
        className="inline-flex items-center gap-2 rounded-xl bg-brand-dark px-8 py-4 text-sm font-bold text-white transition-all hover:bg-brand-gold hover:text-brand-dark shadow-md"
      >
        Nakliye ve Sefer Teklifi İste <FiArrowUpRight className="text-lg" />
      </Link>
    </div>
  </div>
);

const ServiceYikimContent = () => (
  <div id="yikim" className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-24 pt-16 md:grid-cols-12 text-left bg-white rounded-3xl shadow-lg border border-gray-200 mt-6">
    <div className="col-span-1 md:col-span-4">
      <div className="w-14 h-14 rounded-2xl bg-brand-dark flex items-center justify-center mb-4">
        <ShieldCheck className="w-7 h-7 text-brand-gold" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-black text-brand-dark leading-tight">
        Kentsel Dönüşüm & Kontrollü Bina Yıkımı
      </h2>
      <p className="text-xs text-brand-gold font-bold uppercase tracking-wider mt-2">
        Toz Bastırma & İSG Standardı
      </p>
    </div>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-base sm:text-lg text-brand-textSecondary leading-relaxed">
        Riskli yapılar, eski fabrika kompleksleri ve sanayi tesislerinin çevre güvenliği, toz bastırma su pülverizasyonu ve çevre binalara sıfır sarsıntı hassasiyetiyle yıkımını gerçekleştiriyoruz.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Yüksek Erişimli Hidrolik Makaslar</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Hurda & Demir Ayrıştırma Yönetimi</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Basınçlı Sis Sulama ile Sıfır Toz</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Enkazın Tamamı Geri Dönüşüme</span>
        </div>
      </div>
      <Link
        to="/iletisim#teklif"
        className="inline-flex items-center gap-2 rounded-xl bg-brand-dark px-8 py-4 text-sm font-bold text-white transition-all hover:bg-brand-gold hover:text-brand-dark shadow-md"
      >
        Yıkım Keşfi & Teklif Talep Et <FiArrowUpRight className="text-lg" />
      </Link>
    </div>
  </div>
);

const ServiceKiralamaContent = () => (
  <div id="kiralama" className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-24 pt-16 md:grid-cols-12 text-left bg-white rounded-3xl shadow-lg border border-gray-200 mt-6">
    <div className="col-span-1 md:col-span-4">
      <div className="w-14 h-14 rounded-2xl bg-brand-dark flex items-center justify-center mb-4">
        <HardHat className="w-7 h-7 text-brand-gold" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-black text-brand-dark leading-tight">
        Operatörlü İş Makinesi Parkuru Kiralama
      </h2>
      <p className="text-xs text-brand-gold font-bold uppercase tracking-wider mt-2">
        20 - 45 Tonluk Geniş Filo
      </p>
    </div>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-base sm:text-lg text-brand-textSecondary leading-relaxed">
        Saatlik, günlük, haftalık ve proje bazlı aylık kiralama seçeneklerimizle, alanında uzman sertifikalı operatörlerimizle şantiyenizin gücüne güç katıyoruz.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Paletli Ağır Ekskavatörler</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Kaya Kırıcı & Riper Ataşmanları</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>7/24 Mobil Sahada Servis & Bakım</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-textPrimary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Dönemsel Operatörlü / Operatörsüz</span>
        </div>
      </div>
      <Link
        to="/filo"
        className="inline-flex items-center gap-2 rounded-xl bg-brand-dark px-8 py-4 text-sm font-bold text-white transition-all hover:bg-brand-gold hover:text-brand-dark shadow-md"
      >
        Tüm Makine Parkını Görüntüle <FiArrowUpRight className="text-lg" />
      </Link>
    </div>
  </div>
);

export default TextParallaxContentExample;
