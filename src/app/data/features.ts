import { GraduationCap, Users, Trophy, BookOpen, Globe, Award } from 'lucide-react';

export interface Feature {
  icon: any;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
}

export const features: Feature[] = [
  {
    icon: GraduationCap,
    title: {
      uz: 'Professional o\'qituvchilar',
      ru: 'Профессиональные преподаватели',
      en: 'Professional Teachers',
    },
    description: {
      uz: 'Barcha o\'qituvchilarimiz xalqaro sertifikatlarga ega va katta tajribaga ega',
      ru: 'Все наши преподаватели имеют международные сертификаты и большой опыт',
      en: 'All our teachers have international certificates and extensive experience',
    },
  },
  {
    icon: Users,
    title: {
      uz: 'Kichik guruhlar',
      ru: 'Малые группы',
      en: 'Small Groups',
    },
    description: {
      uz: 'Har bir talabaga individual yondashuv va maksimal e\'tibor',
      ru: 'Индивидуальный подход и максимальное внимание каждому студенту',
      en: 'Individual approach and maximum attention to each student',
    },
  },
  {
    icon: Trophy,
    title: {
      uz: 'Yuqori natijalar',
      ru: 'Высокие результаты',
      en: 'High Results',
    },
    description: {
      uz: 'Talabalarimizning 95% muvaffaqiyatli natijalar ko\'rsatadi',
      ru: '95% наших студентов показывают успешные результаты',
      en: '95% of our students show successful results',
    },
  },
  {
    icon: BookOpen,
    title: {
      uz: 'Zamonaviy metodlar',
      ru: 'Современные методы',
      en: 'Modern Methods',
    },
    description: {
      uz: 'Eng so\'nggi va samarali o\'qitish metodologiyalari',
      ru: 'Самые современные и эффективные методики обучения',
      en: 'Most modern and effective teaching methods',
    },
  },
  {
    icon: Globe,
    title: {
      uz: 'Xalqaro standartlar',
      ru: 'Международные стандарты',
      en: 'International Standards',
    },
    description: {
      uz: 'Xalqaro talablarga mos dasturlar va o\'qitish tizimi',
      ru: 'Программы и система обучения, соответствующие международным требованиям',
      en: 'Programs and teaching system that meet international requirements',
    },
  },
  {
    icon: Award,
    title: {
      uz: 'Sertifikatlar',
      ru: 'Сертификаты',
      en: 'Certificates',
    },
    description: {
      uz: 'Kurs yakunida tan olingan sertifikat olish',
      ru: 'Получение признанного сертификата по окончании курса',
      en: 'Receiving a recognized certificate upon completion of the course',
    },
  },
];
