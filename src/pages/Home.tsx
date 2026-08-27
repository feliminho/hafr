import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Truck, 
  Shovel, 
  ShieldCheck, 
  HardHat, 
  CheckCircle2, 
  TrendingUp,
  Award,
  PhoneCall,
  Star,
  Quote,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  FileDown
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Accordion02 } from "@/components/ui/accordion-04";
import { SEO } from "@/components/SEO";

export const Home: React.FC = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroSlides = [
    {
      badge: "GÜÇLÜ MAKİNE PARKI & GÜVENİLİR LOJİSTİK",
      title: "Zemine Güç, Geleceğe Sağlam Temel Katıyoruz",
      desc: "Uçar Hafriyat ve Nakliyat; modern ağır iş makineleri ve uzman kadrosuyla hafriyat, zemin kazı-dolgu, bina yıkımı ve ağır nakliye alanlarında anahtar teslim kurumsal çözümler sunar.",
      image: "/commercial-excavation.jpg",
    },
    {
      badge: "TÜRKİYE GENELİ LOJİSTİK TAŞIMA",
      title: "Ağır Tonajlı Damper Filosu & Lojistik İkmal",
      desc: "Zorlu şantiye zeminlerinde 8x4 çekiş gücüne sahip yüksek kapasiteli damperli tırlarımızla malzeme akışınızı hiç aksatmadan yürütüyoruz.",
      image: "/fleet.jpg",
    },
    {
      badge: "UZMAN KADRO & ÇEVRE GÜVENLİĞİ",
      title: "Yüksek Hassasiyetli Kontrollü Bina & Tesis Yıkımı",
      desc: "Çevre ve iş sağlığı standartlarına tam uyumlu hidrolik makas ve beton kırıcı donanımlı ekskavatörlerimizle güvenli kentsel yıkım.",
      image: "/demolition.jpg",
    },
    {
      badge: "KİRALIK AĞIR İŞ MAKİNESİ PARKI",
      title: "20 - 45 Tonluk Ekskavatör & Ağır Hizmet Filosu",
      desc: "Kaya kırıcı, riper ve yüksek hidrolik koparma gücüne sahip sertifikalı operatörlü iş makinesi kiralama hizmetleri.",
      image: "/excavator.jpg",
    }
  ];

  // 5 seconds auto transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const stats = [
    { value: "20+", label: "Yıllık Sektör Tecrübesi", sub: "1994'ten günümüze kesintisiz hizmet" },
    { value: "500+", label: "Büyük Proje Başarısı", sub: "Altyapı, konut ve sanayi temeli" },
    { value: "45+", label: "Ağır Makine & Damper", sub: "Geniş tonajlı özmal araç filosu" },
    { value: "%100", label: "Zamanında Teslimat", sub: "Taahhüt edilen iş takvimine sadakat" },
  ];

  const featuredServices = [
    {
      id: "hafriyat",
      title: "Hafriyat & Kazı Dolgu",
      desc: "Lidar ve lazer kot ölçümleriyle milimetrik temel kazıları, hafriyat tahliyesi ve stabilize dolgu mühendisliği.",
      icon: <Shovel className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold" />,
      link: "/hizmetler#hafriyat",
      tags: ["Temel Kazıları", "Tesviye", "Moloz Tahliyesi"]
    },
    {
      id: "nakliye",
      title: "Ağır Yük & Damper Nakliyesi",
      desc: "Şantiyeler arası kum, mıcır, çakıl, agrega ve ağır makine lojistiğinde yüksek tonajlı kesintisiz taşıma.",
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold" />,
      link: "/hizmetler#nakliye",
      tags: ["Damperli Sevkiyat", "Lowbed Ağır Makine", "Agrega Taşımacılığı"]
    },
    {
      id: "kiralama",
      title: "İş Makinesi Kiralama",
      desc: "20-45 tonluk ekskavatörler, loderler, dozer ve silindirler ile saatlik/günlük/aylık operatörlü kiralama.",
      icon: <HardHat className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold" />,
      link: "/hizmetler#kiralama",
      tags: ["Paletli Ekskavatör", "Uzman Operatör", "7/24 Saha Servisi"]
    },
    {
      id: "yikim",
      title: "Bina Yıkım & Kırım İşleri",
      desc: "Kentsel dönüşüm alanlarında toz bastırma sulama sistemleri eşliğinde kontrollü bina ve betonarme yıkımı.",
      icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold" />,
      link: "/hizmetler#yikim",
      tags: ["Hidrolik Makas", "Enkaz Tahliyesi", "İş Güvenliği"]
    }
  ];

  const testimonials = [
    {
      name: "Murat Özdemir",
      company: "Özdemir İnşaat & Taahhüt A.Ş.",
      title: "Proje Müdürü",
      comment: "140.000 m³'lük fabrika temel kazısı ve zemin dolgu projemizi öngörülen süreden 1 hafta önce, sıfır aksama ile teslim ettiler. Güçlü makine parkurları ve dakik damper lojistiği takdire şayan.",
      rating: 5
    },
    {
      name: "Kenan Aktaş",
      company: "Aktaş Altyapı & Yapı Grubu",
      title: "Şantiye Şefi",
      comment: "Zorlu kaya zemin ve kentsel dönüşüm yıkım işlerimizde hidrolik kırıcı donanımlı ekskavatörleriyle çok hızlı ve güvenli çalıştılar. Döküm sahası izin süreçlerindeki kurumsallıkları işimizi çok kolaylaştırdı.",
      rating: 5
    },
    {
      name: "Serdar Yılmaz",
      company: "Kuzey Lojistik & Antrepo",
      title: "Genel Koordinatör",
      comment: "Lowbed ile ağır makine nakliyesi ve şantiyeler arası günlük 1.000 ton agrega sevkiyatında 7/24 kesintisiz iletişim ve tam zamanında teslimat aldık. Kesinlikle tavsiye ederim.",
      rating: 5
    }
  ];

  const partnerLogos = [
    "KALYON GRUP", "LİMAK İNŞAAT", "CENGİZ HOLDİNG", "KOLİN İNŞAAT", "TOKİ TAŞERONLARI", "ORGANİZE SANAYİ BÖLGESİ"
  ];

  const faqs = [
    {
      q: "Hafriyat döküm izinleri ve yasal belgeler nasıl temin ediliyor?",
      a: "Tüm projelerimizde Çevre, Şehircilik ve İklim Değişikliği Bakanlığı ve ilgili belediyeler tarafından onaylı resmi lisanslı hafriyat döküm sahalarıyla çalışıyoruz. Döküm fişleri ve izin evrakları eksiksiz teslim edilmektedir."
    },
    {
      q: "İş makineleri operatörlü mü yoksa operatörsüz mü kiralanıyor?",
      a: "İhtiyacınıza göre hem G sınıfı ehliyetli ve sertifikalı uzman operatörlerimizle hem de operatörsüz/yakıtsız dönemlik (günlük, haftalık, aylık) kiralama seçenekleri sunuyoruz."
    },
    {
      q: "Şantiyeye keşif ve metraj hesaplama hizmeti ücretli mi?",
      a: "Hayır. Saha mühendislerimiz ve teknik ekibimiz projenizin bulunduğu araziye gelerek lazer kot ölçümü ve metraj analizini tamamen ÜCRETSİZ olarak gerçekleştirir."
    },
    {
      q: "Bina yıkımında çevre güvenliği ve toz önleme nasıl sağlanıyor?",
      a: "Yıkım esnasında yüksek basınçlı pülverize su sisleme sistemleri kullanılarak toz kalkması engellenir. Çevre binaların statik güvenliği korunarak hidrolik makaslarla kat kat kontrollü yıkım yapılır."
    }
  ];

  const galleryImages = [
    { title: "Büyük Ölçekli Zemin Kazısı", img: "/commercial-excavation.jpg", tag: "Derin Kazı" },
    { title: "8x4 Damperli Sevkiyat", img: "/fleet.jpg", tag: "Lojistik" },
    { title: "Kontrollü Bina Yıkımı", img: "/demolition.jpg", tag: "Yıkım" },
    { title: "7/24 Gece Vardiya Operasyonu", img: "/night-site.jpg", tag: "7/24 Vardiya" },
  ];

  const handleLinkClick = () => {
    // Hash yoksa en üste kaydır, hash varsa ilgili sayfadaki hash listener yönetecek
  };

  return (
    <div className="bg-brand-bgLight text-brand-textPrimary font-sans">
      <SEO 
        title="Uçar Hafriyat ve Nakliyat | Ağır Yük, Güvenli Zemin ve Yıkım Çözümleri"
        description="20+ yıllık tecrübe, geniş ekskavatör ve 8x4 damper filosu ile temel kazısı, arazi ıslahı, bina yıkımı ve ağır nakliye çözümleri."
        canonical="https://ucarhafriyat.com"
      />
      
      {/* 1. ULTRA MODERN CORPORATE HERO SECTION (Responsive Typography Optimizasyonu) */}
      <section className="relative min-h-[85svh] sm:min-h-[92svh] lg:min-h-[780px] w-full bg-brand-dark overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            key={currentHeroSlide}
            src={heroSlides[currentHeroSlide].image} 
            alt="Uçar Hafriyat İş Makineleri" 
            className="w-full h-full object-cover object-center transform scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A19] via-[#1A1A19]/90 md:via-[#1A1A19]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A19] via-transparent to-[#1A1A19]/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent"></div>
        </div>

        {/* Hero Left-Aligned Content */}
        <div className="relative z-10 w-full px-4 sm:px-10 lg:px-16 py-12 sm:py-20">
          <div className="max-w-[46rem] text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-black/80 border border-brand-gold/50 backdrop-blur-md mb-4 sm:mb-6 shadow-xl">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-gold animate-pulse"></span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-gold">
                {heroSlides[currentHeroSlide].badge}
              </span>
            </div>

            {/* Scaled Responsive Hero Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.18] sm:leading-[1.1] tracking-tight text-white drop-shadow-2xl">
              {heroSlides[currentHeroSlide].title.split("Sağlam Temel")[0]}
              <span className="text-brand-gold">Sağlam Temel</span>
              {heroSlides[currentHeroSlide].title.split("Sağlam Temel")[1] || " Katıyoruz."}
            </h1>

            {/* Scaled Responsive Hero Paragraph */}
            <p className="mt-3 sm:mt-6 max-w-2xl text-xs sm:text-base md:text-lg leading-relaxed text-white/90 drop-shadow font-normal">
              {heroSlides[currentHeroSlide].desc}
            </p>

            <div className="mt-6 sm:mt-9 flex flex-wrap items-center justify-start gap-3 sm:gap-4">
              <Link
                to="/iletisim#teklif"
                onClick={handleLinkClick}
                className="rounded-lg bg-brand-gold hover:bg-brand-goldHover px-5 py-3 sm:px-8 sm:py-4 text-xs sm:text-base font-extrabold text-brand-dark transition-all duration-200 transform hover:-translate-y-0.5 shadow-xl shadow-brand-gold/30 flex items-center gap-2"
              >
                Hızlı Fiyat Teklifi Al <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/hizmetler"
                onClick={handleLinkClick}
                className="rounded-lg border-2 border-white/40 bg-black/60 backdrop-blur-md px-4 py-3 sm:px-7 sm:py-4 text-xs sm:text-base font-bold text-white transition-all duration-200 hover:border-brand-gold hover:text-brand-gold hover:bg-black/90 flex items-center gap-2"
              >
                Hizmetlerimiz
              </Link>
            </div>

            {/* Slide Navigation Dots */}
            <div className="mt-8 sm:mt-12 flex items-center gap-2.5 sm:gap-3">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentHeroSlide(idx)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                    currentHeroSlide === idx ? "w-7 sm:w-10 bg-brand-gold" : "w-2.5 sm:w-3 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
              <span className="text-[10px] sm:text-xs font-semibold text-white/60 ml-1.5 sm:ml-2">
                0{currentHeroSlide + 1} / 0{heroSlides.length}
              </span>
            </div>

          </div>
        </div>
      </section>



      {/* 3. LIVE SECTOR STATS */}
      <section className="bg-brand-dark border-b-2 border-brand-gold/30 py-8 sm:py-12">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-left">
            {stats.map((st, i) => (
              <div key={i} className="p-3.5 sm:p-5 rounded-xl bg-white/5 border border-white/5 hover:border-brand-gold/40 transition">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-gold mb-0.5 sm:mb-1">{st.value}</div>
                <div className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1">{st.label}</div>
                <div className="text-[10px] sm:text-xs text-[#A0A09F]">{st.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORPORATE PROFILE */}
      <section className="py-14 sm:py-24 bg-brand-bgLight">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 text-brand-gold font-bold text-[10px] sm:text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">
                <span className="w-6 sm:w-8 h-[2px] bg-brand-gold"></span> Kurumsal Güven & Deneyim
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark tracking-tight leading-[1.2] mb-4 sm:mb-6">
                Ağır İş Makinesi Parkı ve <br />
                <span className="text-brand-gold">Mühendislik Hassasiyeti</span>
              </h2>
              <p className="text-brand-textSecondary text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
                Uçar Hafriyat ve Nakliyat; kurulduğu günden bu yana kamu projeleri, kentsel dönüşüm sahaları, otoyol viyadük kazıları ve organize sanayi bölgelerinde lider zemin yüklenicisi olarak hizmet vermektedir.
              </p>
              <p className="text-brand-textSecondary text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
                Tüm saha operasyonlarımızda iş sağlığı ve güvenliği (İSG) kurallarına azami dikkat gösteriyor, zemin etütlerine uygun doğru tonajlı makinelerle projenizi zamanında tamamlıyoruz.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-brand-bgSecondary border border-gray-200">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-dark text-xs sm:text-sm">Resmi Ruhsat & Döküm İzinleri</h4>
                    <p className="text-[11px] sm:text-xs text-brand-textSecondary mt-0.5">Çevre şehircilik standartlarına uygun resmi izinli hafriyat döküm sahası anlaşmaları.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-brand-bgSecondary border border-gray-200">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-dark text-xs sm:text-sm">Kesintisiz 8x4 Damper Lojistiği</h4>
                    <p className="text-[11px] sm:text-xs text-brand-textSecondary mt-0.5">Büyük hacimli kazılarda şantiyenizin durmaması için dakik kamyon sirkülasyonu.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/kurumsal"
                  onClick={handleLinkClick}
                  className="inline-flex items-center gap-2 bg-brand-dark hover:bg-black text-white font-bold text-xs sm:text-sm px-5 py-3 sm:px-7 sm:py-3.5 rounded-lg transition shadow-md"
                >
                  Şirket Profilimizi İnceleyin <ArrowRight className="w-4 h-4 text-brand-gold" />
                </Link>
                <Link
                  to="/filo"
                  onClick={handleLinkClick}
                  className="inline-flex items-center gap-2 bg-brand-bgSecondary hover:bg-gray-200 text-brand-dark font-bold text-xs sm:text-sm px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg transition border border-gray-300"
                >
                  Makine Parkı Listesi
                </Link>
              </div>
            </div>

            {/* Right Side Visual Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-brand-dark">
                <img 
                  src="/kurumsal-saha.jpg" 
                  alt="Uçar Hafriyat Kazı Sahası" 
                  className="w-full h-64 sm:h-96 lg:h-[480px] object-cover hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-brand-dark/95 backdrop-blur-md border border-brand-gold/40 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-brand-gold font-bold text-[10px] sm:text-xs uppercase tracking-widest">Geniş Filo Gücü</div>
                      <h4 className="font-black text-sm sm:text-base lg:text-lg text-white mt-0.5">Yüksek Tonajlı Paletli Ekskavatörler</h4>
                      <p className="text-[10px] sm:text-xs text-white/70 mt-0.5 sm:mt-1">Sert zemin kırıcı ve riper ataşmanlarıyla her türlü araziye hazırız.</p>
                    </div>
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-brand-gold text-brand-dark font-bold flex items-center justify-center shrink-0 ml-3">
                      <Truck className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FEATURED SERVICES */}
      <section className="py-14 sm:py-24 bg-brand-bgSecondary border-y border-gray-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-14 gap-3 sm:gap-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-brand-gold font-bold text-[10px] sm:text-xs sm:text-sm tracking-wider uppercase mb-1.5 sm:mb-2">
                <span className="w-6 sm:w-8 h-[2px] bg-brand-gold"></span> Temel Faaliyetlerimiz
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark tracking-tight">
                Uzmanlık Alanlarımız
              </h2>
            </div>
            <Link 
              to="/hizmetler" 
              onClick={handleLinkClick}
              className="text-xs sm:text-sm font-bold text-brand-gold hover:text-brand-goldHover flex items-center gap-1 underline"
            >
              Tüm Hizmet Detayları <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredServices.map((srv, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-gold group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-brand-dark flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform">
                    {srv.icon}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-brand-dark mb-2 sm:mb-3 group-hover:text-brand-gold transition-colors text-left">
                    {srv.title}
                  </h3>
                  <p className="text-brand-textSecondary text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 text-left">
                    {srv.desc}
                  </p>
                </div>

                <div>
                  <div className="border-t border-gray-100 pt-3 sm:pt-4 space-y-1.5 sm:space-y-2">
                    {srv.tags.map((tag, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-brand-textPrimary text-left">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-gold shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={srv.link} 
                    onClick={handleLinkClick}
                    className="mt-4 sm:mt-6 w-full py-2 sm:py-2.5 px-3 sm:px-4 text-xs font-bold text-center block rounded-lg bg-brand-bgSecondary hover:bg-brand-gold hover:text-brand-dark transition duration-200 text-brand-dark"
                  >
                    Hizmeti İncele &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ŞANTİYE FOTOĞRAF & VİDEO GALERİSİ */}
      <section className="py-14 sm:py-24 bg-brand-bgLight">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-14 gap-3 sm:gap-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-brand-gold font-bold text-[10px] sm:text-xs sm:text-sm tracking-wider uppercase mb-1.5 sm:mb-2">
                <span className="w-6 sm:w-8 h-[2px] bg-brand-gold"></span> Canlı Saha & Operasyon Görüntüleri
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark tracking-tight">
                Şantiye & Araç Filomuz
              </h2>
            </div>
            
            <a
              href="/logo.png"
              download="Ucar_Hafriyat_Makine_Katalogu.png"
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-brand-dark hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md transition"
            >
              <FileDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold" /> Makine Kataloğu (PDF)
            </a>
          </div>

          {/* Grid Gallery (3 Gerçek Saha Görseli + 1 Canlı Saha Videosu) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="group relative rounded-2xl overflow-hidden shadow-md border border-gray-200 h-56 sm:h-64">
              <img src="/saha-1.jpeg" alt="Uçar Hafriyat Saha Operasyonu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-5 text-left">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-gold bg-black/60 px-2 py-0.5 rounded w-fit mb-1">Saha İkmal</span>
                <h4 className="text-white font-bold text-xs sm:text-sm">Şantiye Kazı & Taşıma</h4>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-md border border-gray-200 h-56 sm:h-64">
              <img src="/saha-2.jpeg" alt="Uçar Hafriyat Kamyon ve Makine Filosu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-5 text-left">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-gold bg-black/60 px-2 py-0.5 rounded w-fit mb-1">Ağır Filo</span>
                <h4 className="text-white font-bold text-xs sm:text-sm">Damperli Nakliyat Filosu</h4>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-md border border-gray-200 h-56 sm:h-64">
              <img src="/saha-3.jpeg" alt="Uçar Hafriyat Zemin Kazı ve Yükleme" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-5 text-left">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-gold bg-black/60 px-2 py-0.5 rounded w-fit mb-1">Zemin Kazısı</span>
                <h4 className="text-white font-bold text-xs sm:text-sm">Ekskavatör Yükleme Operasyonu</h4>
              </div>
            </div>

            {/* Video Kartı */}
            <div className="group relative rounded-2xl overflow-hidden shadow-md border-2 border-brand-gold/40 h-56 sm:h-64 bg-black">
              <video 
                src="/saha-video.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute top-3 right-3 bg-brand-gold/90 text-brand-dark text-[10px] font-black uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> Canlı Video
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-5 text-left pointer-events-none">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-gold bg-black/60 px-2 py-0.5 rounded w-fit mb-1">Canlı Saha</span>
                <h4 className="text-white font-bold text-xs sm:text-sm">Aktif Şantiye Çalışması</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MÜŞTERİ YORUMLARI (TESTIMONIALS) */}
      <section className="py-14 sm:py-24 bg-brand-dark text-white border-y border-brand-gold/30">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-left max-w-3xl mb-8 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-brand-gold font-bold text-[10px] sm:text-xs sm:text-sm tracking-wider uppercase mb-1.5 sm:mb-2">
              <span className="w-6 sm:w-8 h-[2px] bg-brand-gold"></span> Müşteri Memnuniyeti
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Saha Ortaklarımız Ne Diyor?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 text-left">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#242423] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 relative flex flex-col justify-between hover:border-brand-gold/60 transition shadow-xl">
                <div>
                  <div className="flex items-center gap-1 text-brand-gold mb-4 sm:mb-6">
                    {[...Array(t.rating)].map((_, r) => (
                      <Star key={r} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold/30 mb-2 sm:mb-3" />
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic mb-5 sm:mb-8">
                    "{t.comment}"
                  </p>
                </div>

                <div className="border-t border-white/10 pt-3 sm:pt-4 flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-gold text-brand-dark font-black flex items-center justify-center text-xs sm:text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-[10px] sm:text-xs text-brand-gold font-medium">{t.title} - {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SIKÇA SORULAN SORULAR (SSS) */}
      <section className="py-14 sm:py-24 bg-brand-bgLight text-left">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-brand-gold font-bold text-[10px] sm:text-xs sm:text-sm tracking-wider uppercase mb-1.5 sm:mb-2">
              <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Merak Edilenler & SSS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xs sm:text-sm text-brand-textSecondary mt-2">
              Hafriyat, resmi döküm izinleri, kiralama ve saha operasyonlarımızla ilgili merak ettiğiniz soruların yanıtları.
            </p>
          </div>

          {/* Radix UI & Animated Plus/Minus Accordion */}
          <Accordion02 
            items={[
              {
                id: "01",
                title: "Hafriyat döküm izinleri ve yasal belgeler nasıl temin ediliyor?",
                content: "Tüm projelerimizde Çevre, Şehircilik ve İklim Değişikliği Bakanlığı ve ilgili belediyeler tarafından onaylı resmi lisanslı hafriyat döküm sahalarıyla çalışıyoruz. Döküm fişleri, izin evrakları ve barkod kayıtları eksiksiz teslim edilmektedir."
              },
              {
                id: "02",
                title: "İş makineleri operatörlü mü yoksa operatörsüz mü kiralanıyor?",
                content: "İhtiyacınıza göre hem G sınıfı ehliyetli ve sertifikalı uzman operatörlerimizle hem de operatörsüz/yakıtsız dönemlik (günlük, haftalık, aylık) kiralama seçenekleri sunuyoruz."
              },
              {
                id: "03",
                title: "Şantiyeye keşif ve metraj hesaplama hizmeti ücretli mi?",
                content: "Hayır. Şirket sahibimiz Yasin Uçar ve saha mühendislerimiz projenizin bulunduğu araziye gelerek lazer kot ölçümü ve metraj analizini tamamen ÜCRETSİZ olarak gerçekleştirir."
              },
              {
                id: "04",
                title: "Bina yıkımında çevre güvenliği ve toz önleme nasıl sağlanıyor?",
                content: "Yıkım esnasında yüksek basınçlı pülverize su sisleme sistemleri kullanılarak toz kalkması engellenir. Çevre binaların statik güvenliği korunarak hidrolik makaslarla kat kat kontrollü yıkım yapılır."
              },
              {
                id: "05",
                title: "Ağır nakliye ve damperli sevkiyat kapasiteniz nedir?",
                content: "8x4 Hardox gövdeli yüksek tonajlı damperli tırlarımız ve 70 tona kadar taşıma kapasiteli Lowbed araçlarımızla günlük 2.000 tonun üzerinde malzeme ve agrega nakliyesini kesintisiz yönetebiliyoruz."
              }
            ]}
            defaultValue="01"
          />
        </div>
      </section>

      {/* 9. FAST CONTACT & CALL TO ACTION */}
      <section className="py-14 sm:py-20 bg-brand-dark border-t border-brand-gold/30 text-white text-left">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-2 sm:mb-3">
              Şantiyeniz İçin Hemen Ücretsiz Keşif Talep Edin
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-white/70">
              Mühendislerimiz ve uzman teknik personelimiz arazinize gelerek net metraj tespiti ve en ekonomik fiyatlandırmayı sunsun.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4 shrink-0">
            <a
              href="https://wa.me/905375151190?text=Merhaba,%20U%C3%A7ar%20Hafriyat%20ve%20Nakliyat%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-5 py-3 sm:px-7 sm:py-4 rounded-xl transition flex items-center gap-2 text-xs sm:text-sm shadow-lg"
            >
              <FaWhatsapp className="w-4 h-4" /> WhatsApp ile Yazın
            </a>
            <a
              href="tel:+905375151190"
              className="bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition shadow-lg shadow-brand-gold/30 text-xs sm:text-sm flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" /> 0537 515 11 90
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
