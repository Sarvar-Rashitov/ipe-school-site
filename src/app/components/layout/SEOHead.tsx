import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../lib/LanguageContext';
import { pageSEO, generateOrganizationSchema, generateWebSiteSchema, generateCourseSchemas, SITE_URL, type PageKey } from '../../lib/seo';

interface SEOHeadProps {
  pageKey: PageKey;
  title?: string;
  description?: string;
  ogImage?: string;
}

const languages = ['uz', 'ru', 'en'] as const;
const languageNames: Record<string, string> = { uz: 'uz-UZ', ru: 'ru-RU', en: 'en-US' };

export function SEOHead({ pageKey, title: customTitle, description: customDesc, ogImage }: SEOHeadProps) {
  const { language } = useLanguage();
  const seo = pageSEO[pageKey];

  const title = customTitle || seo?.title?.[language] || 'IPE School';
  const description = customDesc || seo?.description?.[language] || 'IPE School - Zamonaviy ta\'lim markazi';
  const keywords = seo?.keywords?.[language] || '';
  const canonicalUrl = `${SITE_URL}${pageKey === 'home' ? '' : `/${pageKey === 'courseDetail' ? 'courses' : pageKey}`}`;
  const ogImg = ogImage || `${SITE_URL}/og-image.jpg`;

  return (
    <Helmet>
      <html lang={languageNames[language]} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {languages.map((lang) => (
        <link key={lang} rel="alternate" hrefLang={lang === 'uz' ? 'uz' : lang === 'ru' ? 'ru' : 'en'} href={`${SITE_URL}${pageKey === 'home' ? '' : `/${pageKey === 'courseDetail' ? 'courses' : pageKey}`}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={SITE_URL} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImg} />
      <meta property="og:site_name" content="IPE School" />
      <meta property="og:locale" content={languageNames[language]} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImg} />

      <meta name="telegram:channel" content="@ipeschool" />

      <script type="application/ld+json">
        {JSON.stringify(generateOrganizationSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(generateWebSiteSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(generateCourseSchemas())}
      </script>
    </Helmet>
  );
}
