export interface Course {
  id: string;
  title: { uz: string; ru: string; en: string };
  description: { uz: string; ru: string; en: string };
  fullDescription: { uz: string; ru: string; en: string };
  duration: { uz: string; ru: string; en: string };
  level: { uz: string; ru: string; en: string };
  features: { uz: string[]; ru: string[]; en: string[] };
  image: string;
  category: string;
  color: string;
  icon: string;
}

export const courses: Course[] = [
  {
    id: 'ielts',
    title: {
      uz: 'IELTS Tayyorgarlik',
      ru: 'Подготовка к IELTS',
      en: 'IELTS Preparation',
    },
    description: {
      uz: 'Xalqaro IELTS imtihoniga professional tayyorgarlik',
      ru: 'Профессиональная подготовка к международному экзамену IELTS',
      en: 'Professional preparation for international IELTS exam',
    },
    fullDescription: {
      uz: 'IELTS tayyorgarlik kursi sizi xalqaro ingliz tili sertifikatiga tayyorlaydi. Listening, Reading, Writing va Speaking bo\'limlari bo\'yicha chuqur tayyorgarlik. Mock testlar va individual feedback bilan maqsadli tayyorgarlik.',
      ru: 'Курс подготовки к IELTS готовит вас к получению международного сертификата английского языка. Углубленная подготовка по разделам Listening, Reading, Writing и Speaking. Целенаправленная подготовка с пробными тестами и индивидуальной обратной связью.',
      en: 'IELTS preparation course prepares you for international English language certificate. In-depth preparation for Listening, Reading, Writing and Speaking sections. Targeted preparation with mock tests and individual feedback.',
    },
    duration: { uz: '3-6 oy', ru: '3-6 месяцев', en: '3-6 months' },
    level: { uz: 'O\'rta va yuqori daraja', ru: 'Средний и высокий уровень', en: 'Intermediate and Advanced' },
    features: {
      uz: ['Listening & Reading', 'Writing Task 1 & 2', 'Speaking (Part 1, 2, 3)', 'Mock IELTS testlar', 'Individual feedback', 'Xalqaro sertifikat'],
      ru: ['Listening & Reading', 'Writing Task 1 & 2', 'Speaking (Part 1, 2, 3)', 'Пробные IELTS тесты', 'Индивидуальная обратная связь', 'Международный сертификат'],
      en: ['Listening & Reading', 'Writing Task 1 & 2', 'Speaking (Part 1, 2, 3)', 'Mock IELTS tests', 'Individual feedback', 'International certificate'],
    },
    image: '/images/courses/ielts.jpg',
    category: 'language',
    color: 'from-indigo-600 to-blue-500',
    icon: '🎓',
  },
  {
    id: 'cefr',
    title: {
      uz: 'General English (CEFR)',
      ru: 'Общий английский (CEFR)',
      en: 'General English (CEFR)',
    },
    description: {
      uz: 'A1 dan C2 gacha CEFR standartlari bo\'yicha ingliz tili',
      ru: 'Английский язык по стандартам CEFR от A1 до C2',
      en: 'English language according to CEFR standards from A1 to C2',
    },
    fullDescription: {
      uz: 'General English kursi CEFR (Common European Framework of Reference) standartlariga asoslangan. A1 (Beginner) dan C2 (Proficiency) gacha barcha darajalarda o\'qitish. Grammar, Vocabulary, Speaking, Listening, Reading va Writing ko\'nikmalarini rivojlantirish.',
      ru: 'Курс General English основан на стандартах CEFR (Общеевропейские компетенции владения иностранным языком). Обучение на всех уровнях от A1 (Beginner) до C2 (Proficiency). Развитие навыков Grammar, Vocabulary, Speaking, Listening, Reading и Writing.',
      en: 'General English course is based on CEFR (Common European Framework of Reference) standards. Teaching at all levels from A1 (Beginner) to C2 (Proficiency). Development of Grammar, Vocabulary, Speaking, Listening, Reading and Writing skills.',
    },
    duration: { uz: '9-12 oy', ru: '9-12 месяцев', en: '9-12 months' },
    level: { uz: 'A1 - C2 barcha darajalar', ru: 'A1 - C2 все уровни', en: 'A1 - C2 all levels' },
    features: {
      uz: ['CEFR A1-C2 darajalar', 'Grammar & Vocabulary', 'Speaking clubs', 'Interactive lessons', 'Kichik guruhlar', 'CEFR sertifikat'],
      ru: ['CEFR A1-C2 уровни', 'Grammar & Vocabulary', 'Speaking clubs', 'Интерактивные уроки', 'Малые группы', 'CEFR сертификат'],
      en: ['CEFR A1-C2 levels', 'Grammar & Vocabulary', 'Speaking clubs', 'Interactive lessons', 'Small groups', 'CEFR certificate'],
    },
    image: '/images/courses/english.jpg',
    category: 'language',
    color: 'from-emerald-600 to-teal-500',
    icon: '🗣️',
  },
  {
    id: 'python-backend',
    title: {
      uz: 'Python Backend (LLM & NLP)',
      ru: 'Python Backend (LLM & NLP)',
      en: 'Python Backend (LLM & NLP)',
    },
    description: {
      uz: 'Zamonaviy Python backend va sun\'iy intellekt texnologiyalari',
      ru: 'Современный Python backend и технологии искусственного интеллекта',
      en: 'Modern Python backend and artificial intelligence technologies',
    },
    fullDescription: {
      uz: 'Python Backend kursi sizni professional dasturchi sifatida tayyorlaydi. FastAPI, Django, LLM (Large Language Models) va NLP (Natural Language Processing) texnologiyalarini o\'rganasiz. ChatGPT-ga o\'xshash loyihalar yaratishni o\'rganasiz.',
      ru: 'Курс Python Backend подготовит вас как профессионального разработчика. Вы изучите FastAPI, Django, LLM (Large Language Models) и NLP (Natural Language Processing) технологии. Научитесь создавать проекты, похожие на ChatGPT.',
      en: 'Python Backend course will prepare you as a professional developer. You will learn FastAPI, Django, LLM (Large Language Models) and NLP (Natural Language Processing) technologies. Learn to create projects similar to ChatGPT.',
    },
    duration: { uz: '8 oy', ru: '8 месяцев', en: '8 months' },
    level: { uz: 'Boshlang\'ichdan professional darajagacha', ru: 'От начального до профессионального', en: 'Beginner to Professional' },
    features: {
      uz: ['Python, FastAPI, Django', 'LLM(Open AI & Cloude) integratsiyasi', 'NLP texnologiyalari', 'REST API yaratish', 'Database (PostgreSQL)', 'Real loyihalar'],
      ru: ['Python, FastAPI, Django', 'Интеграция LLM & ChatGPT', 'NLP технологии', 'Создание REST API', 'Базы данных (PostgreSQL)', 'Реальные проекты'],
      en: ['Python, FastAPI, Django', 'LLM & ChatGPT integration', 'NLP technologies', 'REST API creation', 'Database (PostgreSQL)', 'Real projects'],
    },
    image: '/images/courses/python.jpg',
    category: 'it',
    color: 'from-blue-600 to-cyan-500',
    icon: '🐍',
  },
  {
    id: 'frontend',
    title: {
      uz: 'Frontend Development',
      ru: 'Frontend разработка',
      en: 'Frontend Development',
    },
    description: {
      uz: 'HTML, CSS, JavaScript va React bilan zamonaviy veb-saytlar',
      ru: 'Современные веб-сайты с HTML, CSS, JavaScript и React',
      en: 'Modern websites with HTML, CSS, JavaScript and React',
    },
    fullDescription: {
      uz: 'Frontend Development kursi zamonaviy veb-texnologiyalar bilan sizni professional darajaga olib chiqadi. HTML5, CSS3, JavaScript ES6+, TypeScript va React framework\'ini o\'rganasiz. Portolio loyihalar bilan ish boshlashga tayyor bo\'lasiz.',
      ru: 'Курс Frontend Development выведет вас на профессиональный уровень с современными веб-технологиями. Вы изучите HTML5, CSS3, JavaScript ES6+, TypeScript и фреймворк React. Будете готовы к работе с портфолио проектами.',
      en: 'Frontend Development course will bring you to professional level with modern web technologies. You will learn HTML5, CSS3, JavaScript ES6+, TypeScript and React framework. Be ready to start work with portfolio projects.',
    },
    duration: { uz: '6 oy', ru: '6 месяцев', en: '6 months' },
    level: { uz: 'Boshlang\'ichdan middle darajagacha', ru: 'От начального до middle уровня', en: 'Beginner to Middle level' },
    features: {
      uz: ['HTML5, CSS3, JavaScript', 'TypeScript & React', 'Tailwind CSS & UI dizayn', 'Git & GitHub', 'Portfolio loyihalar', 'Ish joyiga joylashish'],
      ru: ['HTML5, CSS3, JavaScript', 'TypeScript & React', 'Tailwind CSS & UI дизайн', 'Git & GitHub', 'Portfolio проекты', 'Трудоустройство'],
      en: ['HTML5, CSS3, JavaScript', 'TypeScript & React', 'Tailwind CSS & UI design', 'Git & GitHub', 'Portfolio projects', 'Job placement'],
    },
    image: '/images/courses/frontend.jpg',
    category: 'it',
    color: 'from-purple-600 to-pink-500',
    icon: '💻',
  },
  {
    id: 'sat',
    title: {
      uz: 'SAT Tayyorgarlik',
      ru: 'Подготовка к SAT',
      en: 'SAT Preparation',
    },
    description: {
      uz: 'Amerika universitetlariga kirish uchun SAT imtihoniga tayyorgarlik',
      ru: 'Подготовка к SAT для поступления в американские университеты',
      en: 'SAT exam preparation for admission to American universities',
    },
    fullDescription: {
      uz: 'SAT tayyorgarlik kursi sizi xalqaro imtihondan yuqori ball olishga tayyorlaydi. Math, Reading va Writing bo\'limlari bo\'yicha chuqur tayyorgarlik. Mock testlar va individual feedback bilan maqsadli tayyorgarlik.',
      ru: 'Курс подготовки к SAT готовит вас к получению высокого балла на международном экзамене. Углубленная подготовка по разделам Math, Reading и Writing. Целенаправленная подготовка с пробными тестами и индивидуальной обратной связью.',
      en: 'SAT preparation course prepares you to achieve a high score on the international exam. In-depth preparation for Math, Reading and Writing sections. Targeted preparation with mock tests and individual feedback.',
    },
    duration: { uz: '3-4 oy', ru: '3-4 месяца', en: '3-4 months' },
    level: { uz: 'O\'rta va yuqori daraja', ru: 'Средний и высокий уровень', en: 'Intermediate and Advanced' },
    features: {
      uz: ['Math (Algebra, Geometry)', 'Critical Reading', 'Essay Writing', 'Mock SAT testlar', 'Individual feedback', 'Xalqaro sertifikat'],
      ru: ['Math (Алгебра, Геометрия)', 'Critical Reading', 'Essay Writing', 'Пробные SAT тесты', 'Индивидуальная обратная связь', 'Международный сертификат'],
      en: ['Math (Algebra, Geometry)', 'Critical Reading', 'Essay Writing', 'Mock SAT tests', 'Individual feedback', 'International certificate'],
    },
    image: '/images/courses/sat.jpg',
    category: 'exam',
    color: 'from-orange-500 to-red-500',
    icon: '📊',
  },
  {
    id: 'mathematics',
    title: {
      uz: 'Matematika',
      ru: 'Математика',
      en: 'Mathematics',
    },
    description: {
      uz: 'Maktab va olimpiada matematikasi bo\'yicha chuqur kurs',
      ru: 'Углубленный курс по школьной и олимпийской математике',
      en: 'In-depth course in school and olympiad mathematics',
    },
    fullDescription: {
      uz: 'Matematika kursi maktab o\'quvchilari uchun mo\'ljallangan. Algebra, Geometriya, Trigonometriya va boshqa mavzular bo\'yicha kuchli poydevor yaratiladi. Olimpiada va imtihonlarga tayyorgarlik ko\'riladi. Har bir talaba individual yondashuv bilan ishlaydi.',
      ru: 'Курс математики предназначен для школьников. Создается прочная основа по Алгебре, Геометрии, Тригонометрии и другим темам. Ведется подготовка к олимпиадам и экзаменам. Каждый студент работает с индивидуальным подходом.',
      en: 'Mathematics course is designed for school students. Strong foundation is built in Algebra, Geometry, Trigonometry and other topics. Preparation for olympiads and exams. Each student works with individual approach.',
    },
    duration: { uz: '9 oy (1 o\'quv yili)', ru: '9 месяцев (1 учебный год)', en: '9 months (1 academic year)' },
    level: { uz: '5-11 sinf o\'quvchilari', ru: 'Ученики 5-11 классов', en: 'Grade 5-11 students' },
    features: {
      uz: ['Algebra & Geometriya', 'Trigonometriya', 'Olimpiada masalalari', 'DTM tayyorgarlik', 'Kichik guruhlar', 'Online vazifalar'],
      ru: ['Алгебра & Геометрия', 'Тригонометрия', 'Олимпийские задачи', 'Подготовка к ЕГЭ/ДТМ', 'Малые группы', 'Онлайн задания'],
      en: ['Algebra & Geometry', 'Trigonometry', 'Olympiad problems', 'DTM preparation', 'Small groups', 'Online assignments'],
    },
    image: '/images/courses/math.jpg',
    category: 'academic',
    color: 'from-green-500 to-teal-500',
    icon: '📐',
  },
  {
    id: 'russian',
    title: {
      uz: 'Rus tili',
      ru: 'Русский язык',
      en: 'Russian Language',
    },
    description: {
      uz: 'Rus tilini noldan yoki professional darajagacha o\'rganish',
      ru: 'Изучение русского языка с нуля или до профессионального уровня',
      en: 'Learning Russian from scratch or to professional level',
    },
    fullDescription: {
      uz: 'Rus tili kursi barcha yoshdagilar uchun mo\'ljallangan. Grammatika, leksika, so\'zlashuv va yozish ko\'nikmalarini rivojlantirasiz. Rus madaniyati va adabiyoti bilan tanishasiz. Zarur bo\'lsa, rus tili imtihonlariga tayyorgarlik ko\'riladi.',
      ru: 'Курс русского языка предназначен для всех возрастов. Вы разовьете навыки грамматики, лексики, разговорной речи и письма. Познакомитесь с русской культурой и литературой. При необходимости ведется подготовка к экзаменам по русскому языку.',
      en: 'Russian language course is designed for all ages. You will develop grammar, vocabulary, speaking and writing skills. Get acquainted with Russian culture and literature. If necessary, preparation for Russian language exams.',
    },
    duration: { uz: '6-12 oy', ru: '6-12 месяцев', en: '6-12 months' },
    level: { uz: 'Barcha darajalar', ru: 'Все уровни', en: 'All levels' },
    features: {
      uz: ['Grammatika & Leksika', 'So\'zlashuv darslari', 'Reading & Writing', 'Madaniyat va adabiyot', 'Kichik guruhlar', 'Sertifikat'],
      ru: ['Грамматика & Лексика', 'Разговорные уроки', 'Reading & Writing', 'Культура и литература', 'Малые группы', 'Сертификат'],
      en: ['Grammar & Vocabulary', 'Speaking lessons', 'Reading & Writing', 'Culture and literature', 'Small groups', 'Certificate'],
    },
    image: '/images/courses/russian.jpg',
    category: 'language',
    color: 'from-red-500 to-rose-500',
    icon: '🇷🇺',
  },
];
