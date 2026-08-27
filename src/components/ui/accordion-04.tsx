/* eslint-disable react/jsx-key */
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X, Plus, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  title: string;
  content: string;
}

const defaultItems: AccordionItemData[] = [
  {
    id: "01",
    title: "Hafriyat döküm izinleri ve yasal süreçler nasıl yürütülüyor?",
    content:
      "Tüm projelerimizde Çevre, Şehircilik ve İklim Değişikliği Bakanlığı ve ilgili büyükşehir belediyeleri onaylı resmi lisanslı döküm sahalarıyla çalışıyoruz. Döküm fişleri, izin evrakları ve barkod kayıtları eksiksiz teslim edilmektedir.",
  },
  {
    id: "02",
    title: "İş makineleri operatörlü mü kiralanıyor?",
    content:
      "İhtiyacınıza göre G sınıfı iş makinesi ehliyetli ve SGK'lı uzman operatörlerimizle saatlik, günlük veya aylık periyotlarla kiralama sağlıyoruz. Dileyen kurumsal firmalarımıza operatörsüz dönemlik kiralama opsiyonu da sunulmaktadır.",
  },
  {
    id: "03",
    title: "Şantiye keşfi ve metraj hesaplama hizmeti ücretli mi?",
    content:
      "Hayır. Şirket sahibimiz Yasin Uçar ve saha mühendislerimiz projenizin bulunduğu araziye gelerek lazer kot ölçümü ve zemin yapısı analizini tamamen ÜCRETSİZ olarak gerçekleştirir.",
  },
  {
    id: "04",
    title: "Bina yıkımında çevre güvenliği ve toz önleme nasıl sağlanıyor?",
    content:
      "Yıkım esnasında yüksek basınçlı pülverize su sisleme sistemleri kullanılarak toz kalkması engellenir. Çevre binaların statik güvenliği korunarak hidrolik makaslarla kat kat kontrollü yıkım yapılır.",
  },
  {
    id: "05",
    title: "Ağır nakliye ve damperli sevkiyat kapasiteniz nedir?",
    content:
      "8x4 Hardox gövdeli yüksek tonajlı damperli tırlarımız ve 70 tona kadar taşıma kapasiteli Lowbed araçlarımızla günlük 2.000 tonun üzerinde malzeme nakliyesini kesintisiz yönetebiliyoruz.",
  },
];

interface Accordion04Props {
  items?: AccordionItemData[];
  defaultValue?: string;
}

export function Accordion02({ items = defaultItems, defaultValue = "01" }: Accordion04Props) {
  return (
    <div className="w-full">
      <Accordion type="single" defaultValue={defaultValue} collapsible className="w-full space-y-3">
        {items.map((item) => (
          <AccordionItem 
            value={item.id} 
            key={item.id} 
            className="border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group data-[state=open]:border-brand-gold data-[state=open]:ring-2 data-[state=open]:ring-brand-gold/20"
          >
            <AccordionTrigger className="text-left p-4 sm:p-5 data-[state=open]:bg-brand-dark/5 duration-300 hover:no-underline cursor-pointer [&>svg]:hidden">
              <div className="flex flex-1 justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-brand-dark/10 group-data-[state=open]:bg-brand-gold text-brand-dark font-black text-xs flex items-center justify-center shrink-0 transition-colors">
                    {item.id}
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-dark group-data-[state=open]:text-brand-dark text-left">
                    {item.title}
                  </h3>
                </div>
                
                <div className="relative w-8 h-8 rounded-xl bg-brand-bgSecondary flex items-center justify-center shrink-0 group-data-[state=open]:bg-brand-gold text-brand-dark transition-colors">
                  <Plus
                    strokeWidth={2.5}
                    className={cn(
                      "h-4 w-4 shrink-0 transition-all duration-300",
                      "group-data-[state=open]:opacity-0 group-data-[state=closed]:opacity-100 group-data-[state=open]:rotate-90"
                    )}
                  />
                  <X
                    strokeWidth={2.5}
                    className={cn(
                      "absolute inset-0 m-auto h-4 w-4 transition-all duration-300",
                      "group-data-[state=closed]:opacity-0 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-90 text-brand-dark"
                    )}
                  />
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-brand-textSecondary leading-relaxed border-t border-gray-100 bg-white">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Accordion02;
