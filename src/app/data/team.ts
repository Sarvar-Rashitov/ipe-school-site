export interface TeamMember {
  id: string;
  name: string;
  position: {
    uz: string;
    ru: string;
    en: string;
  };
  role: 'director' | 'teacher' | 'administrator' | 'mentor';
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
    youtube?: string;
  };
}

export const teamMembers: TeamMember[] = [
  // Directors
  {
    id: 'director-1',
    name: 'Sardor Ergashev',
    role: 'director',
    position: {
      uz: 'Bosh direktor va asoschi',
      ru: 'Генеральный директор и основатель',
      en: 'CEO and Founder',
    },
    experience: {
      uz: '15 yillik ta\'lim sohasida tajriba',
      ru: '15 лет опыта в сфере образования',
      en: '15 years of experience in education',
    },
    bio: {
      uz: 'Toshkent Davlat Texnika Universiteti va WIUT bitiruvchisi. IT va ta\'lim sohasida 15 yildan ortiq tajriba.',
      ru: 'Выпускник ТГТУ и WIUT. Более 15 лет опыта в IT и образовании.',
      en: 'Graduate of TSTU and WIUT. Over 15 years of experience in IT and education.',
    },
    image: '/images/team/director-1.jpg',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com/ipeschool',
      telegram: 'https://t.me/ipeschool',
    },
  },
  {
    id: 'director-2',
    name: 'Nodira Yusupova',
    role: 'director',
    position: {
      uz: 'O\'quv ishlari bo\'yicha direktor',
      ru: 'Директор по учебной работе',
      en: 'Director of Academic Affairs',
    },
    experience: {
      uz: '12 yillik tajriba',
      ru: '12 лет опыта',
      en: '12 years of experience',
    },
    bio: {
      uz: 'Pedagogika fanlari nomzodi. 10+ yil davomida o\'quv dasturlarini ishlab chiqish va boshqarish tajribasi.',
      ru: 'Кандидат педагогических наук. Опыт разработки и управления учебными программами более 10 лет.',
      en: 'PhD in Pedagogy. Experience in curriculum development and management for over 10 years.',
    },
    image: '/images/team/director-2.jpg',
    socials: {
      telegram: 'https://t.me',
    },
  },

  // IT Teachers
  {
    id: 'teacher-it-1',
    name: 'Bobur Ismoilov',
    role: 'teacher',
    position: {
      uz: 'Python Backend & AI mutaxassisi',
      ru: 'Специалист Python Backend & AI',
      en: 'Python Backend & AI Specialist',
    },
    experience: {
      uz: '8 yillik tajriba',
      ru: '8 лет опыта',
      en: '8 years of experience',
    },
    bio: {
      uz: 'Senior Python Developer, LLM va NLP bo\'yicha mutaxassis. Xalqaro loyihalarda ishtirok etgan.',
      ru: 'Senior Python Developer, специалист по LLM и NLP. Участвовал в международных проектах.',
      en: 'Senior Python Developer, LLM and NLP specialist. Participated in international projects.',
    },
    image: '/images/team/teacher-1.jpg',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      telegram: 'https://t.me',
    },
  },
  {
    id: 'teacher-it-2',
    name: 'Anvar Rahimov',
    role: 'teacher',
    position: {
      uz: 'Frontend Development o\'qituvchisi',
      ru: 'Преподаватель Frontend Development',
      en: 'Frontend Development Teacher',
    },
    experience: {
      uz: '6 yillik tajriba',
      ru: '6 лет опыта',
      en: '6 years of experience',
    },
    bio: {
      uz: 'React va TypeScript bo\'yicha ekspert. Yirik startup loyihalarida Lead Developer sifatida ishlagan.',
      ru: 'Эксперт по React и TypeScript. Работал Lead Developer в крупных стартап-проектах.',
      en: 'React and TypeScript expert. Worked as Lead Developer in large startup projects.',
    },
    image: '/images/team/teacher-2.jpg',
    socials: {
      github: 'https://github.com',
      telegram: 'https://t.me',
    },
  },

  // Language Teachers
  {
    id: 'teacher-lang-1',
    name: 'Aziza Karimova',
    role: 'teacher',
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
    image: '/images/team/teacher-3.jpg',
    socials: {
      instagram: 'https://instagram.com',
      telegram: 'https://t.me',
    },
  },
  {
    id: 'teacher-lang-2',
    name: 'Rustam Sharipov',
    role: 'teacher',
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
    image: '/images/team/teacher-4.jpg',
    socials: {
      youtube: 'https://youtube.com',
      telegram: 'https://t.me',
    },
  },

  // Academic Teachers
  {
    id: 'teacher-math-1',
    name: 'Dilshod Tursunov',
    role: 'teacher',
    position: {
      uz: 'Matematika va SAT o\'qituvchisi',
      ru: 'Преподаватель математики и SAT',
      en: 'Mathematics and SAT Teacher',
    },
    experience: {
      uz: '10 yillik tajriba',
      ru: '10 лет опыта',
      en: '10 years of experience',
    },
    bio: {
      uz: 'Matematika olimpiadasi g\'olibi, SAT Math 800/800. 50+ talaba xalqaro olimpiadalarda ishtirok etgan.',
      ru: 'Победитель математической олимпиады, SAT Math 800/800. 50+ студентов участвовали в международных олимпиадах.',
      en: 'Mathematics olympiad winner, SAT Math 800/800. 50+ students participated in international olympiads.',
    },
    image: '/images/team/teacher-5.jpg',
    socials: {
      telegram: 'https://t.me',
    },
  },
  {
    id: 'teacher-russian-1',
    name: 'Olga Ivanova',
    role: 'teacher',
    position: {
      uz: 'Rus tili o\'qituvchisi',
      ru: 'Преподаватель русского языка',
      en: 'Russian Language Teacher',
    },
    experience: {
      uz: '9 yillik tajriba',
      ru: '9 лет опыта',
      en: '9 years of experience',
    },
    bio: {
      uz: 'Filologiya magistri, Rossiyada 15 yil yashagan. Rus tili va adabiyoti mutaxassisi.',
      ru: 'Магистр филологии, 15 лет жила в России. Специалист по русскому языку и литературе.',
      en: 'Master of Philology, lived in Russia for 15 years. Specialist in Russian language and literature.',
    },
    image: '/images/team/teacher-6.jpg',
    socials: {
      instagram: 'https://instagram.com',
    },
  },

  // Mentors
  {
    id: 'mentor-1',
    name: 'Shakhzod Khasanov',
    role: 'mentor',
    position: {
      uz: 'IT Mentor va Karyera maslahatchisi',
      ru: 'IT Ментор и Карьерный консультант',
      en: 'IT Mentor and Career Advisor',
    },
    experience: {
      uz: '5 yillik tajriba',
      ru: '5 лет опыта',
      en: '5 years of experience',
    },
    bio: {
      uz: 'Senior Software Engineer. Talabalarni ish joyiga joylashtirishda 90% muvaffaqiyat darajasi.',
      ru: 'Senior Software Engineer. 90% успешности в трудоустройстве студентов.',
      en: 'Senior Software Engineer. 90% success rate in student job placement.',
    },
    image: '/images/team/mentor-1.jpg',
    socials: {
      linkedin: 'https://linkedin.com',
      telegram: 'https://t.me',
    },
  },
  {
    id: 'mentor-2',
    name: 'Madina Saidova',
    role: 'mentor',
    position: {
      uz: 'IELTS Mentor',
      ru: 'IELTS Ментор',
      en: 'IELTS Mentor',
    },
    experience: {
      uz: '4 yillik tajriba',
      ru: '4 года опыта',
      en: '4 years of experience',
    },
    bio: {
      uz: 'IELTS 8.5, Britaniyada tahsil olgan. Talabalarni grant yutishga tayyorlaydi.',
      ru: 'IELTS 8.5, образование в Великобритании. Готовит студентов к получению грантов.',
      en: 'IELTS 8.5, educated in the UK. Prepares students for scholarships.',
    },
    image: '/images/team/mentor-2.jpg',
    socials: {
      instagram: 'https://instagram.com',
    },
  },

  // Administrators
  {
    id: 'admin-1',
    name: 'Gulnoza Rahimova',
    role: 'administrator',
    position: {
      uz: 'Bosh administrator',
      ru: 'Главный администратор',
      en: 'Head Administrator',
    },
    experience: {
      uz: '6 yillik tajriba',
      ru: '6 лет опыта',
      en: '6 years of experience',
    },
    bio: {
      uz: 'Talabalar va o\'qituvchilar bilan muloqot, kurs ro\'yxatdan o\'tkazish va boshqaruv.',
      ru: 'Общение со студентами и преподавателями, регистрация и управление курсами.',
      en: 'Communication with students and teachers, course registration and management.',
    },
    image: '/images/team/admin-1.jpg',
    socials: {
      telegram: 'https://t.me/ipeschool',
    },
  },
  {
    id: 'admin-2',
    name: 'Javohir Karimov',
    role: 'administrator',
    position: {
      uz: 'Moliya va to\'lovlar bo\'yicha administrator',
      ru: 'Администратор по финансам и платежам',
      en: 'Finance and Payment Administrator',
    },
    experience: {
      uz: '4 yillik tajriba',
      ru: '4 года опыта',
      en: '4 years of experience',
    },
    bio: {
      uz: 'Moliya va buxgalteriya bo\'yicha mutaxassis. To\'lovlar va hisobotlarni boshqaradi.',
      ru: 'Специалист по финансам и бухгалтерии. Управляет платежами и отчетами.',
      en: 'Finance and accounting specialist. Manages payments and reports.',
    },
    image: '/images/team/admin-2.jpg',
  },
];
