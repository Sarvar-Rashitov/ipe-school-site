export interface Teacher {
  id: string;
  name: string;
  position: {
    uz: string;
    ru: string;
    en: string;
  };
  experience: {
    uz: string;
    ru: string;
    en: string;
  };
  bio: {
    uz: string;
    ru: string;
    en: string;
  };
  image: string;
  socials?: {
    instagram?: string;
    telegram?: string;
    linkedin?: string;
  };
}

export const teachers: Teacher[] = [
  {
    id: 'teacher-1',
    name: 'Aziza Karimova',
    position: {
      uz: 'IELTS va General English mutaxassisi',
      ru: 'Специалист IELTS и General English',
      en: 'IELTS and General English Specialist',
    },
    experience: {
      uz: '8 yillik tajriba',
      ru: '8 лет опыта',
      en: '8 years of experience',
    },
    bio: {
      uz: 'IELTS 8.5 ball, CELTA sertifikati. 200+ talaba IELTS 7.0+ ball olishga yordam bergan.',
      ru: 'IELTS 8.5 балла, сертификат CELTA. Помогла 200+ студентам получить IELTS 7.0+ баллов.',
      en: 'IELTS 8.5 score, CELTA certificate. Helped 200+ students achieve IELTS 7.0+ scores.',
    },
    image: '/images/teachers/teacher-1.jpg',
    socials: {
      instagram: 'https://instagram.com',
      telegram: 'https://t.me',
    },
  },
  {
    id: 'teacher-2',
    name: 'Jamshid Abdullayev',
    position: {
      uz: 'Business English treneri',
      ru: 'Тренер Business English',
      en: 'Business English Trainer',
    },
    experience: {
      uz: '10 yillik tajriba',
      ru: '10 лет опыта',
      en: '10 years of experience',
    },
    bio: {
      uz: 'MBA, Cambridge CPE sertifikati. Xalqaro kompaniyalarda 5 yil ishlagan.',
      ru: 'MBA, сертификат Cambridge CPE. Работал в международных компаниях 5 лет.',
      en: 'MBA, Cambridge CPE certificate. Worked in international companies for 5 years.',
    },
    image: '/images/teachers/teacher-2.jpg',
    socials: {
      linkedin: 'https://linkedin.com',
      telegram: 'https://t.me',
    },
  },
  {
    id: 'teacher-3',
    name: 'Dilnoza Aliyeva',
    position: {
      uz: 'Kids English mutaxassisi',
      ru: 'Специалист Kids English',
      en: 'Kids English Specialist',
    },
    experience: {
      uz: '6 yillik tajriba',
      ru: '6 лет опыта',
      en: '6 years of experience',
    },
    bio: {
      uz: 'Bolalar psixologiyasi bo\'yicha mutaxassis, TESOL sertifikati.',
      ru: 'Специалист по детской психологии, сертификат TESOL.',
      en: 'Child psychology specialist, TESOL certificate.',
    },
    image: '/images/teachers/teacher-3.jpg',
    socials: {
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 'teacher-4',
    name: 'Rustam Sharipov',
    position: {
      uz: 'Speaking va Pronunciation mutaxassisi',
      ru: 'Специалист Speaking и Pronunciation',
      en: 'Speaking and Pronunciation Specialist',
    },
    experience: {
      uz: '7 yillik tajriba',
      ru: '7 лет опыта',
      en: '7 years of experience',
    },
    bio: {
      uz: 'IELTS 8.0, 3 yil AQSHda yashagan. Native-like pronunciation.',
      ru: 'IELTS 8.0, 3 года жил в США. Произношение на уровне носителя.',
      en: 'IELTS 8.0, lived in the USA for 3 years. Native-like pronunciation.',
    },
    image: '/images/teachers/teacher-4.jpg',
    socials: {
      youtube: 'https://youtube.com',
      telegram: 'https://t.me',
    },
  },
];
