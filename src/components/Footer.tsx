import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const Footer: React.FC = () => {
  const phoneNumber = "+905375151190";
  const whatsappUrl = "https://wa.me/905375151190?text=Merhaba,%20U%C3%A7ar%20Hafriyat%20ve%20Nakliyat%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t-2 border-brand-gold/40">
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10 text-left">
          
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white p-0.5 border-2 border-brand-gold shrink-0">
                <img src="/logo.png" alt="Uçar Hafriyat Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight text-white">UÇAR</div>
                <div className="text-xs text-brand-gold font-bold uppercase tracking-wider">Hafriyat & Nakliyat</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#A0A09F] leading-relaxed mb-6">
              20 yılı aşkın sektörel deneyim, güçlü ağır makine filosu ve alanında uzman saha kadrosuyla hafriyat, zemin kazı-dolgu ve lojistikte güvenilir çözüm ortağınız.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80">
              <ShieldCheck className="w-4 h-4 text-brand-gold" /> ISO 9001 & İş Güvenliği Belgeli
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-brand-gold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span> Sayfalar
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link to="/" onClick={handleLinkClick} className="hover:text-brand-gold transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold" /> Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/kurumsal" onClick={handleLinkClick} className="hover:text-brand-gold transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold" /> Kurumsal & Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/hizmetler" onClick={handleLinkClick} className="hover:text-brand-gold transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold" /> Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link to="/filo" onClick={handleLinkClick} className="hover:text-brand-gold transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold" /> İş Makinelerimiz & Filo
                </Link>
              </li>
              <li>
                <Link to="/iletisim" onClick={handleLinkClick} className="hover:text-brand-gold transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold" /> İletişim & Teklif
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-brand-gold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span> Faaliyetlerimiz
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li><Link to="/hizmetler" onClick={handleLinkClick} className="hover:text-brand-gold">Temel & Altyapı Kazı İşleri</Link></li>
              <li><Link to="/hizmetler" onClick={handleLinkClick} className="hover:text-brand-gold">Ağır Yük & Damperli Nakliyat</Link></li>
              <li><Link to="/filo" onClick={handleLinkClick} className="hover:text-brand-gold">Paletli Ekskavatör Kiralama</Link></li>
              <li><Link to="/hizmetler" onClick={handleLinkClick} className="hover:text-brand-gold">Kontrollü Bina Yıkımı & Enkaz</Link></li>
              <li><Link to="/hizmetler" onClick={handleLinkClick} className="hover:text-brand-gold">Dolgu, Tesviye & Zemin Islahı</Link></li>
              <li><Link to="/hizmetler" onClick={handleLinkClick} className="hover:text-brand-gold">Mıcır, Kum & Agrega Sevkiyatı</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Operations */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-brand-gold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span> İletişim & Hatlar
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>Sanayi ve Organize Ağır Şantiye Bölgesi, Türkiye</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href={`tel:${phoneNumber}`} className="hover:text-brand-gold transition font-bold text-white">
                  +90 537 515 11 90
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span>info@ucarhafriyat.com</span>
              </p>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full text-center py-2.5 px-4 rounded-lg bg-[#25D366] text-white font-bold text-xs hover:bg-[#20bd5a] transition"
                >
                  <FaWhatsapp className="w-4 h-4" /> WhatsApp ile Mesaj Gönder
                </a>
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-2 w-full text-center py-2.5 px-4 rounded-lg bg-brand-gold text-brand-dark font-extrabold text-xs hover:bg-brand-goldHover transition"
                >
                  <Phone className="w-4 h-4" /> Hemen Ara (+90 537 515 11 90)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits with Uçar Yazılım link */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#A0A09F]">
          <div>
            © 2026{" "}
            <a 
              href="https://ucaryazilim.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-gold font-bold hover:underline"
            >
              Uçar Yazılım
            </a>{" "}
            Tüm hakları saklıdır.
          </div>
          <div className="flex gap-6 font-medium text-xs text-[#7A7A79]">
            <span className="hover:text-white cursor-pointer transition">Gizlilik Sözleşmesi</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition">İş Sağlığı ve Güvenliği Politikası</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition">KVKK Aydınlatma Metni</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
