import React from "react";
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export const SEO: React.FC<SeoProps> = ({
  title = "Uçar Hafriyat ve Nakliyat | Ağır Yük, Güvenli Zemin Çözümleri",
  description = "Uçar Hafriyat ve Nakliyat; modern ağır iş makineleri ve 20 yılı aşkın tecrübesiyle hafriyat, kazı-dolgu, bina yıkımı ve damper nakliye hizmetleri sunar.",
  keywords = "uçar hafriyat, hafriyat, kazı dolgu, bina yıkımı, kentsel dönüşüm, damperli kamyon, ekskavatör kiralama, yasin uçar",
  canonical = "https://ucarhafriyat.com",
  ogImage = "https://ucarhafriyat.com/commercial-excavation.jpg",
  ogType = "website",
}) => {
  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Uçar Hafriyat ve Nakliyat" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
