export type PageKey = 'home' | 'courses' | 'courseDetail' | 'team' | 'results' | 'contact' | 'privacy' | 'terms';

interface PageSEO {
  title: Record<string, string>;
  description: Record<string, string>;
  keywords: Record<string, string>;
}

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: {
      uz: 'IPE School | Zamonaviy ta\'lim markazi',
      ru: 'IPE School | Современный образовательный центр',
      en: 'IPE School | Modern Education Center',
    },
    description: {
      uz: 'IPE School - Toshkentdagi yetakchi o\'quv markazi. Ingliz tili, matematika, fizika, dasturlash va IELTS kurslari. Bepul darsga yoziling!',
      ru: 'IPE School - ведущий учебный центр в Ташкенте. Курсы английского языка, математики, программирования и IELTS. Запишитесь на бесплатный урок!',
      en: 'IPE School - leading education center in Tashkent. English, math, programming, and IELTS courses. Register for a free lesson!',
    },
    keywords: {
      uz: 'IPE School, o\'quv markazi, Toshkent, ingliz tili, matematika, fizika, dasturlash, IELTS, ta\'lim',
      ru: 'IPE School, учебный центр, Ташкент, английский язык, математика, программирование, IELTS, образование',
      en: 'IPE School, education center, Tashkent, English, math, programming, IELTS, learning',
    },
  },
  courses: {
    title: {
      uz: 'IPE School | Barcha kurslar',
      ru: 'IPE School | Все курсы',
      en: 'IPE School | All Courses',
    },
    description: {
      uz: 'IPE School\'dagi barcha kurslar: IELTS, CEFR, SAT, Frontend, Python, matematika, rus tili. Professional o\'qituvchilar bilan zamonaviy ta\'lim.',
      ru: 'Все курсы IPE School: IELTS, CEFR, SAT, Frontend, Python, математика, русский язык. Современное образование с профессиональными преподавателями.',
      en: 'All courses at IPE School: IELTS, CEFR, SAT, Frontend, Python, math, Russian. Modern education with professional teachers.',
    },
    keywords: {
      uz: 'IPE School kurslari, IELTS, CEFR, SAT, Frontend, Python, matematika, rus tili',
      ru: 'курсы IPE School, IELTS, CEFR, SAT, Frontend, Python, математика, русский язык',
      en: 'IPE School courses, IELTS, CEFR, SAT, Frontend, Python, math, Russian language',
    },
  },
  team: {
    title: {
      uz: 'IPE School | Jamoa',
      ru: 'IPE School | Команда',
      en: 'IPE School | Our Team',
    },
    description: {
      uz: 'IPE School jamoasi - tajribali mutaxassislar, o\'qituvchilar va mentorlar bilan tanishing.',
      ru: 'Познакомьтесь с командой IPE School - опытные специалисты, преподаватели и менторы.',
      en: 'Meet the IPE School team - experienced specialists, teachers, and mentors.',
    },
    keywords: {
      uz: 'IPE School jamoasi, o\'qituvchilar, mentorlar, Toshkent',
      ru: 'команда IPE School, преподаватели, менторы, Ташкент',
      en: 'IPE School team, teachers, mentors, Tashkent',
    },
  },
  results: {
    title: {
      uz: 'IPE School | Natijalar',
      ru: 'IPE School | Результаты',
      en: 'IPE School | Results',
    },
    description: {
      uz: 'IPE School o\'quvchilarining muvaffaqiyatli natijalari va yutuqlari.',
      ru: 'Успешные результаты и достижения студентов IPE School.',
      en: 'Successful results and achievements of IPE School students.',
    },
    keywords: {
      uz: 'IPE School natijalari, talabalar yutuqlari, IELTS natijalari',
      ru: 'результаты IPE School, достижения студентов, результаты IELTS',
      en: 'IPE School results, student achievements, IELTS scores',
    },
  },
  contact: {
    title: {
      uz: 'IPE School | Aloqa',
      ru: 'IPE School | Контакты',
      en: 'IPE School | Contact',
    },
    description: {
      uz: 'IPE School bilan bog\'laning. Manzil: Toshkent. Telefon: +998 78 113 07 74. Telegram: @ipeschool',
      ru: 'Свяжитесь с IPE School. Адрес: Ташкент. Телефон: +998 78 113 07 74. Telegram: @ipeschool',
      en: 'Contact IPE School. Address: Tashkent. Phone: +998 78 113 07 74. Telegram: @ipeschool',
    },
    keywords: {
      uz: 'IPE School aloqa, telefon, manzil, Toshkent, Telegram',
      ru: 'IPE School контакты, телефон, адрес, Ташкент, Telegram',
      en: 'IPE School contact, phone, address, Tashkent, Telegram',
    },
  },
  privacy: {
    title: {
      uz: 'IPE School | Maxfiylik siyosati',
      ru: 'IPE School | Политика конфиденциальности',
      en: 'IPE School | Privacy Policy',
    },
    description: {
      uz: 'IPE School maxfiylik siyosati. Shaxsiy ma\'lumotlarni himoya qilish qoidalari.',
      ru: 'Политика конфиденциальности IPE School. Правила защиты персональных данных.',
      en: 'IPE School privacy policy. Personal data protection rules.',
    },
    keywords: {
      uz: 'IPE School maxfiylik siyosati, shaxsiy ma\'lumotlar',
      ru: 'IPE School политика конфиденциальности, персональные данные',
      en: 'IPE School privacy policy, personal data',
    },
  },
  terms: {
    title: {
      uz: 'IPE School | Foydalanish shartlari',
      ru: 'IPE School | Условия использования',
      en: 'IPE School | Terms of Service',
    },
    description: {
      uz: 'IPE School veb-saytidan foydalanish shartlari va qoidalari.',
      ru: 'Условия и правила использования веб-сайта IPE School.',
      en: 'Terms and conditions for using the IPE School website.',
    },
    keywords: {
      uz: 'IPE School foydalanish shartlari, qoidalar',
      ru: 'IPE School условия использования, правила',
      en: 'IPE School terms of service, rules',
    },
  },
  courseDetail: {
    title: {
      uz: 'IPE School | Kurs',
      ru: 'IPE School | Курс',
      en: 'IPE School | Course',
    },
    description: {
      uz: 'IPE School kurslari haqida batafsil ma\'lumot.',
      ru: 'Подробная информация о курсах IPE School.',
      en: 'Detailed information about IPE School courses.',
    },
    keywords: {
      uz: 'IPE School kurslari, ta\'lim, o\'quv markazi',
      ru: 'IPE School курсы, образование, учебный центр',
      en: 'IPE School courses, education, learning center',
    },
  },
};

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'IPE School',
    alternateName: 'Inter Prof Education School',
    url: 'https://ipeschool.uz',
    telephone: '+998781130774',
    email: 'info@ipeschool.uz',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tashkent',
      addressCountry: 'UZ',
    },
    sameAs: [
      'https://t.me/ipeschool',
      'https://instagram.com/ipeschool',
    ],
    description: 'Zamonaviy ta\'lim markazi. Ingliz tili, matematika, fizika, dasturlash va IELTS kurslari.',
    foundingDate: '2015',
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'IPE School',
    url: 'https://ipeschool.uz',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ipeschool.uz/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateCourseSchemas() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Course', name: 'IELTS Preparation', description: 'Professional IELTS preparation', provider: { '@type': 'EducationalOrganization', name: 'IPE School' } },
      { '@type': 'Course', name: 'CEFR English', description: 'General English CEFR levels', provider: { '@type': 'EducationalOrganization', name: 'IPE School' } },
      { '@type': 'Course', name: 'SAT Preparation', description: 'SAT exam preparation', provider: { '@type': 'EducationalOrganization', name: 'IPE School' } },
      { '@type': 'Course', name: 'Frontend Development', description: 'Frontend programming course', provider: { '@type': 'EducationalOrganization', name: 'IPE School' } },
      { '@type': 'Course', name: 'Python Backend', description: 'Python backend development', provider: { '@type': 'EducationalOrganization', name: 'IPE School' } },
      { '@type': 'Course', name: 'Mathematics', description: 'Mathematics courses', provider: { '@type': 'EducationalOrganization', name: 'IPE School' } },
      { '@type': 'Course', name: 'Russian Language', description: 'Russian language courses', provider: { '@type': 'EducationalOrganization', name: 'IPE School' } },
    ],
  };
}

export const SITE_URL = 'https://ipeschool.uz';

export const pageRoutes = [
  { path: '/', key: 'home' as PageKey },
  { path: '/courses', key: 'courses' as PageKey },
  { path: '/team', key: 'team' as PageKey },
  { path: '/results', key: 'results' as PageKey },
  { path: '/contact', key: 'contact' as PageKey },
  { path: '/privacy-policy', key: 'privacy' as PageKey },
  { path: '/terms-of-service', key: 'terms' as PageKey },
];
