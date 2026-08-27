import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, Truck, Layers, ArrowRight, CheckCircle2 } from "lucide-react";

export const Hesaplama: React.FC = () => {
  const [length, setLength] = useState<number>(30);
  const [width, setWidth] = useState<number>(20);
  const [depth, setDepth] = useState<number>(4);
  const [soilType, setSoilType] = useState<string>("toprak"); // toprak (1.2 kabarma), kaya (1.5), cakil (1.3)
  const [truckCapacity, setTruckCapacity] = useState<number>(22); // m3

  // Calculations
  const baseVolume = length * width * depth; // m3
  const swellFactor = soilType === "kaya" ? 1.5 : soilType === "cakil" ? 1.3 : 1.2;
  const totalExcavationVolume = Math.round(baseVolume * swellFactor);
  const estimatedTruckTrips = Math.ceil(totalExcavationVolume / truckCapacity);
  const estimatedDays = Math.max(1, Math.ceil(estimatedTruckTrips / 25)); // 25 sefer/gün

  return (
    <div className="bg-brand-bgLight text-brand-textPrimary font-sans">
      {/* Header Banner */}
      <section className="relative bg-brand-dark py-20 border-b border-brand-gold/30 text-left">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-2">İnteraktif Araç</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">Hafriyat & Nakliye Hesaplayıcı</h1>
            <p className="text-white/80 mt-4 text-base sm:text-lg">
              Kazı alanınızın boyutlarını girerek tahmini hafriyat hacmini (m³), kabarma faktörünü ve ihtiyaç duyulan damperli kamyon sefer sayısını anında hesaplayın.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Main Section */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
            
            {/* Input Controls Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-gold flex items-center justify-center font-bold">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-brand-dark">Kazı Ölçüleri & Zemin Tipi</h3>
                  <p className="text-xs text-brand-textSecondary">Metre cinsinden alan değerlerini giriniz.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-dark mb-2">Boy (Uzunluk - m)</label>
                  <input 
                    type="number" 
                    min="1"
                    value={length}
                    onChange={(e) => setLength(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl p-3.5 text-base font-bold text-brand-dark focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark mb-2">En (Genişlik - m)</label>
                  <input 
                    type="number" 
                    min="1"
                    value={width}
                    onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl p-3.5 text-base font-bold text-brand-dark focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark mb-2">Derinlik (Kazı Kotu - m)</label>
                  <input 
                    type="number" 
                    min="0.5"
                    step="0.5"
                    value={depth}
                    onChange={(e) => setDepth(Math.max(0.5, Number(e.target.value)))}
                    className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl p-3.5 text-base font-bold text-brand-dark focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-brand-dark mb-2">Zemin Yapısı & Kabarma</label>
                  <select 
                    value={soilType}
                    onChange={(e) => setSoilType(e.target.value)}
                    className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl p-3.5 text-sm font-semibold text-brand-dark focus:outline-none focus:border-brand-gold"
                  >
                    <option value="toprak">Normal Toprak / Balçık (%20 Kabarma)</option>
                    <option value="cakil">Çakıllı / Kumlu Zemin (%30 Kabarma)</option>
                    <option value="kaya">Sert Kaya / Taşlı Arazi (%50 Kabarma)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark mb-2">Kamyon Damper Tipi</label>
                  <select 
                    value={truckCapacity}
                    onChange={(e) => setTruckCapacity(Number(e.target.value))}
                    className="w-full bg-brand-bgSecondary border border-gray-300 rounded-xl p-3.5 text-sm font-semibold text-brand-dark focus:outline-none focus:border-brand-gold"
                  >
                    <option value={18}>18 m³ Standart 4 Dingil Damper</option>
                    <option value={22}>22 m³ Ağır Hizmet 8x4 Damper</option>
                    <option value={30}>30 m³ Yarı Römorklu Tır Damper</option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-brand-gold/40 text-xs text-brand-dark leading-relaxed">
                ℹ️ <strong>Not:</strong> Kazılan zemin doğal ortamından çıkarıldığında boşluk oranı arttığı için kabarma gösterir. Hesaplamamız mühendislik kabarma katsayılarını otomatik dahil etmektedir.
              </div>
            </div>

            {/* Results Preview Box */}
            <div className="lg:col-span-5 bg-brand-dark text-white p-8 sm:p-10 rounded-3xl border-2 border-brand-gold shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold block mb-1">Tahmini Analiz Sonucu</span>
                <h3 className="text-2xl font-black text-white">Saha Metraj Özeti</h3>
              </div>

              <div className="space-y-4 divide-y divide-white/10">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs sm:text-sm text-white/70">Geometrik Hacim (En x Boy x Derinlik):</span>
                  <span className="text-lg font-bold text-white">{baseVolume.toLocaleString("tr-TR")} m³</span>
                </div>

                <div className="flex justify-between items-center pt-3">
                  <span className="text-xs sm:text-sm text-white/70">Kabarmış Toplam Tahliye Hacmi:</span>
                  <span className="text-2xl font-black text-brand-gold">{totalExcavationVolume.toLocaleString("tr-TR")} m³</span>
                </div>

                <div className="flex justify-between items-center pt-3">
                  <span className="text-xs sm:text-sm text-white/70">Tahmini Kamyon Seferi:</span>
                  <span className="text-2xl font-black text-brand-gold">{estimatedTruckTrips} Sefer</span>
                </div>

                <div className="flex justify-between items-center pt-3">
                  <span className="text-xs sm:text-sm text-white/70">Öngörülen Operasyon Süresi:</span>
                  <span className="text-lg font-bold text-white">~ {estimatedDays} İş Günü</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/iletisim#teklif"
                  className="w-full py-4 text-center block rounded-xl bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-black text-sm transition shadow-lg shadow-brand-gold/30"
                >
                  Bu Hesaplamaya Göre Fiyat Teklifi Al &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
