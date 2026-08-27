"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; 
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

export interface CardItem {
  id: string | number;
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
  linkHref?: string;
  quoteHref?: string;
  tags?: string[];
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  defaultActiveIndex?: number;
}

export const ExpandingCards = React.forwardRef<
  HTMLUListElement,
  ExpandingCardsProps
>(({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(
    defaultActiveIndex,
  );
  
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gridStyle = React.useMemo(() => {
    if (activeIndex === null) return {};
    
    if (isDesktop) {
      const columns = items
        .map((_, index) => (index === activeIndex ? "4.5fr" : "1fr"))
        .join(" ");
      return { gridTemplateColumns: columns };
    } else {
      const rows = items
        .map((_, index) => (index === activeIndex ? "3.2fr" : "0.9fr"))
        .join(" ");
      return { gridTemplateRows: rows };
    }
  }, [activeIndex, items.length, isDesktop]);

  const handleInteraction = (index: number) => {
    setActiveIndex(index);
  };

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  };

  return (
    <ul
      className={cn(
        "w-full max-w-6xl gap-3",
        "grid",
        "h-[780px] sm:h-[720px] md:h-[560px]",
        "transition-[grid-template-columns,grid-template-rows] duration-500 ease-out",
        className,
      )}
      style={{
        ...gridStyle,
        ...(isDesktop 
          ? { gridTemplateRows: '1fr' }
          : { gridTemplateColumns: '1fr' }
        )
      }}
      ref={ref}
      {...props}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <li
            key={item.id}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-800 bg-brand-dark text-white shadow-xl transition-all duration-300",
              isActive ? "border-brand-gold ring-2 ring-brand-gold/40 shadow-brand-gold/10" : "hover:border-brand-gold/50 opacity-90 hover:opacity-100",
              "md:min-w-[80px]",
              "min-h-0 min-w-0"
            )}
            onMouseEnter={() => handleInteraction(index)}
            onFocus={() => handleInteraction(index)}
            onClick={() => handleInteraction(index)}
            tabIndex={0}
            data-active={isActive}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out group-data-[active=true]:scale-105 group-data-[active=true]:grayscale-0 scale-110 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent" />

            <article
              className="absolute inset-0 flex flex-col justify-end gap-2 sm:gap-3 p-4 sm:p-6 text-left"
            >
              {/* Inactive Title on Desktop & Mobile */}
              <h3 className="hidden origin-left rotate-90 text-sm font-bold uppercase tracking-wider text-white/90 opacity-100 transition-all duration-300 ease-out md:block group-data-[active=true]:opacity-0 whitespace-nowrap">
                {item.title}
              </h3>
              <h3 className="block text-sm font-bold uppercase tracking-wider text-white/90 opacity-100 transition-all duration-300 ease-out md:hidden group-data-[active=true]:opacity-0 truncate">
                {item.title}
              </h3>

              {/* Active Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-dark/90 border border-brand-gold/40 flex items-center justify-center text-brand-gold opacity-0 transition-all duration-300 delay-75 ease-out group-data-[active=true]:opacity-100">
                {item.icon}
              </div>

              {/* Active Title */}
              <h3 className="text-lg sm:text-2xl font-black text-white opacity-0 transition-all duration-300 delay-150 ease-out group-data-[active=true]:opacity-100 drop-shadow-md">
                {item.title}
              </h3>

              {/* Active Description */}
              <p className="w-full max-w-lg text-xs sm:text-sm text-white/85 opacity-0 transition-all duration-300 delay-200 ease-out group-data-[active=true]:opacity-100 leading-relaxed drop-shadow line-clamp-3 sm:line-clamp-none">
                {item.description}
              </p>

              {/* Active Buttons: Teklif Al & Detaylı Bilgi */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-2 opacity-0 transition-all duration-300 delay-300 ease-out group-data-[active=true]:opacity-100">
                <Link
                  to={item.quoteHref || "/iletisim#teklif"}
                  onClick={handleLinkClick}
                  className="rounded-lg bg-brand-gold hover:bg-brand-goldHover text-brand-dark px-3.5 py-2 text-xs font-black transition shadow flex items-center gap-1.5"
                >
                  Teklif Al <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to={item.linkHref || "/hizmetler"}
                  onClick={handleLinkClick}
                  className="rounded-lg border border-white/30 bg-black/50 hover:bg-black/80 hover:border-brand-gold hover:text-brand-gold text-white px-3.5 py-2 text-xs font-bold transition flex items-center gap-1.5"
                >
                  Detaylı Bilgi <FileText className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
});
ExpandingCards.displayName = "ExpandingCards";
