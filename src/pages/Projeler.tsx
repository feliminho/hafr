import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Projeler: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Kuzey Otoyol Bağlantı Viyadük Kazıları",
      category: "altyapi",
      categoryName: "Altyapı & Yol",
      volume: "350.000 m³ Kazı & Dolgu",
      image: "/project-highway.jpg",
      details: "14 km otoyol güzergahı yarma şev kazısı, viyadük temel kazıları ve stabilize sıkıştırma."
    },
    {
      title: "Organize Sanayi Bölgesi Ağır Fabrika Temeli",
      category: "hafriyat",
      categoryName: "Hafriyat & Kazı",
      volume: "180.000 m³ Zemin İyileştirme",
      image: "/commercial-excavation.jpg",
      details: "45.000 m² kapalı alan fabrika inşaatı için kaya kırma, zemin tesviyesi ve temel kazısı."
    },
    {
      title: "Kentsel Dönüşüm 18 Blok Yıkım & Enkaz Ayrıştırma",
      category: "yikim",
      categoryName: "Bina Yıkımı",
      volume: "85.000 Ton Moloz & Demir",
      image: "/demolition.jpg",
      details: "Riskli yapı statüsündeki binaların çevre binalara sıfır hasar prensibiyle kontrollü yıkımı."
    },
    {
      title: "Lojistik Liman Sahası Zemin Dolgu & İkmal",
      category: "nakliye",
      categoryName: "Ağır Nakliye",
      volume: "1.450 Sefer / 60 Gün",
      image: "/fleet.jpg",
      details: "Taş ocağından liman dolgu sahasına kesintisiz agrega ve stabilize kaya sevkiyatı."
    }
  ];

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-brand-bgLight text-brand-textPrimary font-sans">
      {/* Header Banner */}
      <section className="relative bg-brand-dark py-20 border-b border-brand-gold/30 text-left">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-2">Referanslarımız</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">Tamamlanan Projelerimiz</h1>
            <p className="text-white/80 mt-4 text-base sm:text-lg">
              Türkiye'nin öncü inşaat firmaları ve kamu kurumları ile gerçekleştirdiğimiz başarılı hafriyat ve altyapı işleri.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto text-left">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 bg-brand-bgSecondary p-2 rounded-xl border border-gray-200 w-fit">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2.5 text-xs font-bold rounded-lg transition ${
                filter === "all" ? "bg-brand-dark text-white shadow" : "text-brand-textSecondary hover:text-brand-dark"
              }`}
            >
              Tüm Projeler
            </button>
            <button
              onClick={() => setFilter("altyapi")}
              className={`px-5 py-2.5 text-xs font-bold rounded-lg transition ${
                filter === "altyapi" ? "bg-brand-dark text-white shadow" : "text-brand-textSecondary hover:text-brand-dark"
              }`}
            >
              Altyapı & Otoyol
            </button>
            <button
              onClick={() => setFilter("hafriyat")}
              className={`px-5 py-2.5 text-xs font-bold rounded-lg transition ${
                filter === "hafriyat" ? "bg-brand-dark text-white shadow" : "text-brand-textSecondary hover:text-brand-dark"
              }`}
            >
              Temel Kazı & Hafriyat
            </button>
            <button
              onClick={() => setFilter("yikim")}
              className={`px-5 py-2.5 text-xs font-bold rounded-lg transition ${
                filter === "yikim" ? "bg-brand-dark text-white shadow" : "text-brand-textSecondary hover:text-brand-dark"
              }`}
            >
              Bina Yıkımı
            </button>
            <button
              onClick={() => setFilter("nakliye")}
              className={`px-5 py-2.5 text-xs font-bold rounded-lg transition ${
                filter === "nakliye" ? "bg-brand-dark text-white shadow" : "text-brand-textSecondary hover:text-brand-dark"
              }`}
            >
              Ağır Nakliye
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filtered.map((item, idx) => (
              <div key={idx} className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-72 overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-brand-dark text-brand-gold text-xs font-extrabold px-3.5 py-1.5 rounded-lg shadow">
                      {item.categoryName}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="text-xs font-extrabold text-brand-gold uppercase tracking-wider mb-2">{item.volume}</div>
                    <h3 className="text-2xl font-black text-brand-dark mb-3">{item.title}</h3>
                    <p className="text-brand-textSecondary text-sm leading-relaxed">{item.details}</p>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-0">
                  <Link
                    to="/iletisim#teklif"
                    className="w-full py-3 text-xs font-bold text-center block rounded-xl bg-brand-bgSecondary hover:bg-brand-gold hover:text-brand-dark transition text-brand-dark"
                  >
                    Benzer Projeniz İçin Teklif Alın &rarr;
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
