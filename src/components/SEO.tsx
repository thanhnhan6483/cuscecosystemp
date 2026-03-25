import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'product';
  jsonLd?: object;
}

export const SEO = ({
  title,
  description,
  keywords = '',
  canonical = 'https://www.cusc.vn',
  ogImage = 'https://www.cusc.vn/og-image.jpg',
  type = 'website',
  jsonLd
}: SEOProps) => {
  const fullTitle = `${title} | CUSC Software`;

  // Default Organization JSON-LD
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trung tâm Công nghệ Phần mềm Đại học Cần Thơ",
    "alternateName": "CUSC Software",
    "url": "https://www.cusc.vn",
    "logo": "https://www.cusc.vn/logo-cusc.png",
    "description": "Giải pháp chuyển đổi số toàn diện cho trường Đại học, Cao đẳng với hơn 25 năm kinh nghiệm",
    "foundingDate": "2001-03-29",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Khu III, Đại học Cần Thơ, Số 01 Lý Tự Trọng, phường Ninh Kiều",
      "addressLocality": "Cần Thơ",
      "addressCountry": "VN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84-292-3731072",
      "contactType": "customer service",
      "email": "cusc.sales@ctu.edu.vn",
      "availableLanguage": "Vietnamese"
    },
    "sameAs": [
      "https://www.facebook.com/cuscsoftware",
      "https://www.linkedin.com/company/cusc-software"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="CUSC Software" />
      <meta property="og:locale" content="vi_VN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  );
};
