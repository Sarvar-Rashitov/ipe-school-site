export type CourseCategory = 'english' | 'it-backend' | 'it-frontend' | 'sat' | 'mathematics' | 'russian';

export interface Course {
  id: string;
  slug: string;
  category: CourseCategory;
  title: string;
  subtitle: string;
  level: string;
  description: string;
  duration: string;
  students: number;
  image: string;
  color: string;
  accentColor: string;
  curriculum: {
    title: string;
    modules: {
      title: string;
      description: string;
      lessons: number;
    }[];
  };
  teachers: {
    name: string;
    title: string;
    image: string;
    bio: string;
  }[];
  testimonials: {
    name: string;
    rating: number;
    text: string;
    image: string;
    achievement: string;
  }[];
  videos: {
    title: string;
    platform: 'youtube' | 'instagram';
    url: string;
    thumbnail: string;
  }[];
  price: number;
  enrollButton: string;
}

export const courseCategories: Record<CourseCategory, { name: string; icon: string; color: string; description: string }> = {
  'english': {
    name: 'English Language',
    icon: '🌍',
    color: '#001f5c',
    description: 'Master English from basics to advanced levels'
  },
  'it-backend': {
    name: 'IT Backend (Python)',
    icon: '⚙️',
    color: '#7c3aed',
    description: 'Python, LLM, NLP & Backend Development'
  },
  'it-frontend': {
    name: 'IT Frontend',
    icon: '🎨',
    color: '#0ea5e9',
    description: 'React, Next.js & Modern Frontend'
  },
  'sat': {
    name: 'SAT Preparation',
    icon: '📝',
    color: '#16a34a',
    description: 'Comprehensive SAT exam preparation'
  },
  'mathematics': {
    name: 'Mathematics',
    icon: '🔢',
    color: '#ea580c',
    description: 'Mathematics from basics to advanced'
  },
  'russian': {
    name: 'Russian Language',
    icon: '🇷🇺',
    color: '#dc2626',
    description: 'Russian language & culture'
  }
};

export const courses: Course[] = [
  // English Courses
  {
    id: 'english-beginner',
    slug: 'english-beginner',
    category: 'english',
    title: 'English Beginner (A1-A2)',
    subtitle: 'Start Your English Journey',
    level: 'A1-A2',
    description: 'Perfect for complete beginners. Learn fundamental English through interactive lessons and real-world conversations.',
    duration: '3 months',
    students: 450,
    image: '/courses/english-beginner.jpg',
    color: '#001f5c',
    accentColor: '#c41e3a',
    curriculum: {
      title: 'Beginner English Curriculum',
      modules: [
        { title: 'Introduction & Alphabet', description: 'Learn English basics', lessons: 8 },
        { title: 'Simple Conversations', description: 'Greetings and basic exchanges', lessons: 10 },
        { title: 'Present Tense', description: 'Master present simple and continuous', lessons: 12 },
        { title: 'Daily Routines', description: 'Talk about your daily life', lessons: 10 },
        { title: 'Shopping & Numbers', description: 'Practical vocabulary', lessons: 8 },
      ]
    },
    teachers: [
      {
        name: 'Sarah Johnson',
        title: 'Native English Speaker',
        image: '/teachers/sarah.jpg',
        bio: 'TESOL certified with 8+ years of teaching experience'
      }
    ],
    testimonials: [
      {
        name: 'Ali Karim',
        rating: 5,
        text: 'Great teaching method! I learned so much in just one month.',
        image: '/testimonials/ali.jpg',
        achievement: 'Now A2 level'
      }
    ],
    videos: [
      { title: 'Lesson Preview', platform: 'youtube', url: 'https://youtube.com/watch?v=demo1', thumbnail: '/videos/thumb1.jpg' }
    ],
    price: 99,
    enrollButton: 'Start Learning'
  },
  {
    id: 'english-intermediate',
    slug: 'english-intermediate',
    category: 'english',
    title: 'English Intermediate (B1-B2)',
    subtitle: 'Reach Conversational Fluency',
    level: 'B1-B2',
    description: 'Build confidence in speaking and writing. Master complex grammar and expand your vocabulary significantly.',
    duration: '4 months',
    students: 380,
    image: '/courses/english-intermediate.jpg',
    color: '#001f5c',
    accentColor: '#c41e3a',
    curriculum: {
      title: 'Intermediate English Curriculum',
      modules: [
        { title: 'Advanced Grammar', description: 'Complex structures', lessons: 15 },
        { title: 'Business English', description: 'Professional communication', lessons: 12 },
        { title: 'Presentation Skills', description: 'Public speaking', lessons: 10 },
        { title: 'Writing Skills', description: 'Essays and reports', lessons: 12 },
      ]
    },
    teachers: [
      { name: 'Michael Brown', title: 'Cambridge Certified', image: '/teachers/michael.jpg', bio: 'Specialist in business English' }
    ],
    testimonials: [
      { name: 'Fatima Hassan', rating: 5, text: 'Excellent course structure!', image: '/testimonials/fatima.jpg', achievement: 'B2 certified' }
    ],
    videos: [
      { title: 'Course Overview', platform: 'youtube', url: 'https://youtube.com/watch?v=demo2', thumbnail: '/videos/thumb2.jpg' }
    ],
    price: 129,
    enrollButton: 'Enroll Now'
  },
  {
    id: 'english-ielts',
    slug: 'english-ielts',
    category: 'english',
    title: 'IELTS Preparation',
    subtitle: 'Achieve Your Target Score',
    level: 'B1-C1',
    description: 'Comprehensive IELTS exam preparation covering all four modules. Mock tests, strategies, and personalized feedback.',
    duration: '3 months',
    students: 520,
    image: '/courses/english-ielts.jpg',
    color: '#001f5c',
    accentColor: '#c41e3a',
    curriculum: {
      title: 'IELTS Complete Curriculum',
      modules: [
        { title: 'IELTS Overview', description: 'Test format and strategies', lessons: 5 },
        { title: 'Reading Module', description: 'Reading strategies and techniques', lessons: 15 },
        { title: 'Writing Module', description: 'Task 1 & Task 2 mastery', lessons: 12 },
        { title: 'Listening Module', description: 'Advanced listening skills', lessons: 12 },
        { title: 'Speaking Module', description: 'Fluency and coherence', lessons: 12 },
        { title: 'Mock Tests', description: 'Full practice exams', lessons: 8 },
      ]
    },
    teachers: [
      { name: 'Emma Wilson', title: 'IELTS Expert', image: '/teachers/emma.jpg', bio: '10+ years IELTS training' }
    ],
    testimonials: [
      { name: 'Karim Ahmed', rating: 5, text: 'Got band 7.5!', image: '/testimonials/karim.jpg', achievement: 'IELTS 7.5' }
    ],
    videos: [
      { title: 'IELTS Tips', platform: 'youtube', url: 'https://youtube.com/watch?v=ielts1', thumbnail: '/videos/thumb3.jpg' }
    ],
    price: 149,
    enrollButton: 'Start Prep'
  },

  // IT Backend Courses
  {
    id: 'python-basics',
    slug: 'python-basics',
    category: 'it-backend',
    title: 'Python Basics for Backend',
    subtitle: 'Start Your Coding Journey',
    level: 'Beginner',
    description: 'Learn Python fundamentals. Perfect for beginners interested in backend development.',
    duration: '2 months',
    students: 280,
    image: '/courses/python-basics.jpg',
    color: '#7c3aed',
    accentColor: '#f97316',
    curriculum: {
      title: 'Python Basics',
      modules: [
        { title: 'Python Setup', description: 'Environment setup', lessons: 3 },
        { title: 'Variables & Types', description: 'Data types and operations', lessons: 8 },
        { title: 'Control Flow', description: 'If, loops, conditions', lessons: 10 },
        { title: 'Functions', description: 'Function definition and calls', lessons: 10 },
        { title: 'OOP Basics', description: 'Classes and objects', lessons: 12 },
      ]
    },
    teachers: [
      { name: 'Dmitri Volkov', title: 'Backend Expert', image: '/teachers/dmitri.jpg', bio: 'Senior Python developer' }
    ],
    testimonials: [
      { name: 'Hassan Ali', rating: 5, text: 'Very clear and practical!', image: '/testimonials/hassan.jpg', achievement: 'Now writing APIs' }
    ],
    videos: [
      { title: 'Python Basics Tutorial', platform: 'youtube', url: 'https://youtube.com/watch?v=python1', thumbnail: '/videos/thumb4.jpg' }
    ],
    price: 99,
    enrollButton: 'Start Coding'
  },
  {
    id: 'python-advanced',
    slug: 'python-advanced',
    category: 'it-backend',
    title: 'Python Advanced & Backend Development',
    subtitle: 'Build Production APIs',
    level: 'Advanced',
    description: 'Master advanced Python, FastAPI, Django, and database design. Build real-world backend applications.',
    duration: '3 months',
    students: 150,
    image: '/courses/python-advanced.jpg',
    color: '#7c3aed',
    accentColor: '#f97316',
    curriculum: {
      title: 'Advanced Python & Backend',
      modules: [
        { title: 'FastAPI Framework', description: 'Modern API development', lessons: 15 },
        { title: 'Databases', description: 'SQL, ORM, migrations', lessons: 12 },
        { title: 'Authentication', description: 'JWT, OAuth, security', lessons: 10 },
        { title: 'Testing', description: 'Unit and integration tests', lessons: 8 },
        { title: 'Deployment', description: 'AWS, Docker, CI/CD', lessons: 10 },
      ]
    },
    teachers: [
      { name: 'Ivan Petrov', title: 'AWS Solutions Architect', image: '/teachers/ivan.jpg', bio: 'CTO experience' }
    ],
    testimonials: [
      { name: 'Sara Jamila', rating: 5, text: 'Professional-grade training!', image: '/testimonials/sara.jpg', achievement: 'Hired as Backend Dev' }
    ],
    videos: [
      { title: 'FastAPI Masterclass', platform: 'youtube', url: 'https://youtube.com/watch?v=fastapi1', thumbnail: '/videos/thumb5.jpg' }
    ],
    price: 179,
    enrollButton: 'Advanced Coding'
  },
  {
    id: 'llm-nlp',
    slug: 'llm-nlp',
    category: 'it-backend',
    title: 'LLM & NLP Specialization',
    subtitle: 'AI-Powered Backend Development',
    level: 'Expert',
    description: 'Learn Large Language Models, NLP techniques, and integrate AI into your backend applications.',
    duration: '4 months',
    students: 85,
    image: '/courses/llm-nlp.jpg',
    color: '#7c3aed',
    accentColor: '#f97316',
    curriculum: {
      title: 'LLM & NLP Masterclass',
      modules: [
        { title: 'NLP Fundamentals', description: 'Text processing and analysis', lessons: 12 },
        { title: 'Transformers', description: 'BERT, GPT, attention mechanisms', lessons: 15 },
        { title: 'LLM Integration', description: 'OpenAI, Anthropic APIs', lessons: 12 },
        { title: 'Fine-tuning', description: 'Custom model training', lessons: 10 },
        { title: 'Production Deployment', description: 'Scale LLM applications', lessons: 10 },
      ]
    },
    teachers: [
      { name: 'Dr. Alex Kumar', title: 'AI Research Lead', image: '/teachers/alex.jpg', bio: 'Published researcher in NLP' }
    ],
    testimonials: [
      { name: 'Omar Hassan', rating: 5, text: 'State-of-the-art content!', image: '/testimonials/omar.jpg', achievement: 'Leading AI startup' }
    ],
    videos: [
      { title: 'LLM Overview', platform: 'youtube', url: 'https://youtube.com/watch?v=llm1', thumbnail: '/videos/thumb6.jpg' },
      { title: 'Instagram Reels', platform: 'instagram', url: 'https://instagram.com/ipeschool', thumbnail: '/videos/thumb7.jpg' }
    ],
    price: 249,
    enrollButton: 'Join Elite Class'
  },

  // IT Frontend Courses
  {
    id: 'frontend-basics',
    slug: 'frontend-basics',
    category: 'it-frontend',
    title: 'Frontend Basics (HTML/CSS/JS)',
    subtitle: 'Build Beautiful Websites',
    level: 'Beginner',
    description: 'Master the foundations of web development. HTML, CSS, and JavaScript from scratch.',
    duration: '2 months',
    students: 320,
    image: '/courses/frontend-basics.jpg',
    color: '#0ea5e9',
    accentColor: '#8b5cf6',
    curriculum: {
      title: 'Frontend Fundamentals',
      modules: [
        { title: 'HTML5 Mastery', description: 'Semantic HTML', lessons: 10 },
        { title: 'CSS Styling', description: 'Layout, flexbox, grid', lessons: 15 },
        { title: 'JavaScript Basics', description: 'DOM, events, functions', lessons: 15 },
        { title: 'Responsive Design', description: 'Mobile-first design', lessons: 10 },
      ]
    },
    teachers: [
      { name: 'Lisa Chen', title: 'UI/UX Developer', image: '/teachers/lisa.jpg', bio: 'Designer & developer hybrid' }
    ],
    testimonials: [
      { name: 'Zainab Said', rating: 5, text: 'Very thorough!', image: '/testimonials/zainab.jpg', achievement: 'Built first website' }
    ],
    videos: [
      { title: 'HTML & CSS Tutorial', platform: 'youtube', url: 'https://youtube.com/watch?v=html1', thumbnail: '/videos/thumb8.jpg' }
    ],
    price: 99,
    enrollButton: 'Build Websites'
  },
  {
    id: 'react-advanced',
    slug: 'react-advanced',
    category: 'it-frontend',
    title: 'React & Next.js Mastery',
    subtitle: 'Modern Frontend Development',
    level: 'Advanced',
    description: 'Learn React hooks, state management, and Next.js for full-stack development.',
    duration: '3 months',
    students: 210,
    image: '/courses/react-advanced.jpg',
    color: '#0ea5e9',
    accentColor: '#8b5cf6',
    curriculum: {
      title: 'React & Next.js',
      modules: [
        { title: 'React Fundamentals', description: 'Components and hooks', lessons: 15 },
        { title: 'State Management', description: 'Redux, Zustand, Context', lessons: 12 },
        { title: 'Next.js Framework', description: 'SSR, SSG, API routes', lessons: 14 },
        { title: 'Performance', description: 'Optimization techniques', lessons: 10 },
        { title: 'Deployment', description: 'Vercel, production builds', lessons: 8 },
      ]
    },
    teachers: [
      { name: 'James Cooper', title: 'Vercel Expert', image: '/teachers/james.jpg', bio: 'Full-stack developer' }
    ],
    testimonials: [
      { name: 'Maryam Khan', rating: 5, text: 'Industry-standard training!', image: '/testimonials/maryam.jpg', achievement: 'Senior React Dev' }
    ],
    videos: [
      { title: 'React Patterns', platform: 'youtube', url: 'https://youtube.com/watch?v=react1', thumbnail: '/videos/thumb9.jpg' }
    ],
    price: 149,
    enrollButton: 'Master React'
  },

  // SAT Courses
  {
    id: 'sat-complete',
    slug: 'sat-complete',
    category: 'sat',
    title: 'SAT Complete Preparation',
    subtitle: 'Achieve Your Target Score',
    level: 'All Levels',
    description: 'Comprehensive SAT preparation with expert strategies, full-length practice tests, and personalized coaching.',
    duration: '3 months',
    students: 450,
    image: '/courses/sat-complete.jpg',
    color: '#16a34a',
    accentColor: '#06b6d4',
    curriculum: {
      title: 'SAT Complete',
      modules: [
        { title: 'Test Format', description: 'Evidence-based reading, writing, math', lessons: 5 },
        { title: 'Reading & Writing', description: 'Passage analysis, grammar', lessons: 20 },
        { title: 'Math Fundamentals', description: 'Algebra, geometry, advanced math', lessons: 25 },
        { title: 'Test Strategies', description: 'Time management, guessing strategies', lessons: 10 },
        { title: 'Full Practice Tests', description: '8 complete practice exams', lessons: 20 },
      ]
    },
    teachers: [
      { name: 'Prof. Raj Patel', title: 'SAT Expert', image: '/teachers/raj.jpg', bio: '15+ years SAT coaching' }
    ],
    testimonials: [
      { name: 'Aisha Malik', rating: 5, text: 'Scored 1500!', image: '/testimonials/aisha.jpg', achievement: 'SAT 1500' }
    ],
    videos: [
      { title: 'SAT Tips & Tricks', platform: 'youtube', url: 'https://youtube.com/watch?v=sat1', thumbnail: '/videos/thumb10.jpg' }
    ],
    price: 199,
    enrollButton: 'Prep for SAT'
  },

  // Mathematics Courses
  {
    id: 'math-algebra',
    slug: 'math-algebra',
    category: 'mathematics',
    title: 'Algebra & Functions',
    subtitle: 'Master Mathematical Foundations',
    level: 'Intermediate',
    description: 'Complete algebra course covering equations, functions, and advanced algebraic concepts.',
    duration: '2.5 months',
    students: 340,
    image: '/courses/math-algebra.jpg',
    color: '#ea580c',
    accentColor: '#06b6d4',
    curriculum: {
      title: 'Algebra Mastery',
      modules: [
        { title: 'Linear Equations', description: 'Solving and graphing', lessons: 12 },
        { title: 'Quadratic Equations', description: 'Factoring, completing square', lessons: 14 },
        { title: 'Functions', description: 'Domain, range, transformations', lessons: 15 },
        { title: 'Systems of Equations', description: 'Multiple variables', lessons: 10 },
      ]
    },
    teachers: [
      { name: 'Dr. Maria Santos', title: 'Mathematics PhD', image: '/teachers/maria.jpg', bio: 'Published mathematician' }
    ],
    testimonials: [
      { name: 'Ahmad Hassan', rating: 5, text: 'Finally understand algebra!', image: '/testimonials/ahmad.jpg', achievement: 'A+ in math' }
    ],
    videos: [
      { title: 'Algebra Tutorial', platform: 'youtube', url: 'https://youtube.com/watch?v=algebra1', thumbnail: '/videos/thumb11.jpg' }
    ],
    price: 119,
    enrollButton: 'Learn Algebra'
  },
  {
    id: 'math-calculus',
    slug: 'math-calculus',
    category: 'mathematics',
    title: 'Calculus Foundations',
    subtitle: 'Limits, Derivatives, & Integrals',
    level: 'Advanced',
    description: 'Advanced calculus covering limits, derivatives, integrals, and real-world applications.',
    duration: '3 months',
    students: 180,
    image: '/courses/math-calculus.jpg',
    color: '#ea580c',
    accentColor: '#06b6d4',
    curriculum: {
      title: 'Calculus Mastery',
      modules: [
        { title: 'Limits & Continuity', description: 'Foundational concepts', lessons: 12 },
        { title: 'Derivatives', description: 'Rules, applications, optimization', lessons: 18 },
        { title: 'Integrals', description: 'Definite, indefinite, applications', lessons: 15 },
        { title: 'Differential Equations', description: 'Basic differential equations', lessons: 10 },
      ]
    },
    teachers: [
      { name: 'Prof. Yuki Tanaka', title: 'Calculus Specialist', image: '/teachers/yuki.jpg', bio: 'University professor' }
    ],
    testimonials: [
      { name: 'Nina Sokolov', rating: 5, text: 'Makes calculus easy!', image: '/testimonials/nina.jpg', achievement: 'Engineering student' }
    ],
    videos: [
      { title: 'Calculus Overview', platform: 'youtube', url: 'https://youtube.com/watch?v=calc1', thumbnail: '/videos/thumb12.jpg' }
    ],
    price: 149,
    enrollButton: 'Master Calculus'
  },

  // Russian Language Courses
  {
    id: 'russian-beginner',
    slug: 'russian-beginner',
    category: 'russian',
    title: 'Russian for Beginners',
    subtitle: 'Начните учить русский',
    level: 'A1-A2',
    description: 'Learn Russian from scratch. Master Cyrillic alphabet, basic conversations, and essential grammar.',
    duration: '3 months',
    students: 220,
    image: '/courses/russian-beginner.jpg',
    color: '#dc2626',
    accentColor: '#f59e0b',
    curriculum: {
      title: 'Russian Basics',
      modules: [
        { title: 'Cyrillic Alphabet', description: 'Reading and writing', lessons: 5 },
        { title: 'Basic Phrases', description: 'Greetings, introductions', lessons: 10 },
        { title: 'Russian Grammar Intro', description: 'Nouns, cases, verb basics', lessons: 15 },
        { title: 'Everyday Conversations', description: 'Real-world scenarios', lessons: 12 },
      ]
    },
    teachers: [
      { name: 'Natalia Volkova', title: 'Native Speaker', image: '/teachers/natalia.jpg', bio: 'Moscow State University graduate' }
    ],
    testimonials: [
      { name: 'Youssef Ibrahim', rating: 5, text: 'Great cultural insights!', image: '/testimonials/youssef.jpg', achievement: 'Now speaking Russian!' }
    ],
    videos: [
      { title: 'Russian Alphabet', platform: 'youtube', url: 'https://youtube.com/watch?v=russian1', thumbnail: '/videos/thumb13.jpg' }
    ],
    price: 109,
    enrollButton: 'Begin Russian'
  },
  {
    id: 'russian-advanced',
    slug: 'russian-advanced',
    category: 'russian',
    title: 'Russian Advanced (B1-B2)',
    subtitle: 'Fluency & Culture',
    level: 'B1-B2',
    description: 'Advanced Russian with literature, business communication, and deep cultural understanding.',
    duration: '4 months',
    students: 120,
    image: '/courses/russian-advanced.jpg',
    color: '#dc2626',
    accentColor: '#f59e0b',
    curriculum: {
      title: 'Advanced Russian',
      modules: [
        { title: 'Advanced Grammar', description: 'Aspect, mood, participles', lessons: 15 },
        { title: 'Russian Literature', description: 'Tolstoy, Pushkin, Dostoevsky', lessons: 12 },
        { title: 'Business Russian', description: 'Professional communication', lessons: 10 },
        { title: 'Idiomatic Expressions', description: 'Slang, sayings, culture', lessons: 12 },
      ]
    },
    teachers: [
      { name: 'Viktor Petrov', title: 'Literature Expert', image: '/teachers/viktor.jpg', bio: 'Russian literature specialist' }
    ],
    testimonials: [
      { name: 'Lena Ahmed', rating: 5, text: 'Loved the literature focus!', image: '/testimonials/lena.jpg', achievement: 'B2 fluent' }
    ],
    videos: [
      { title: 'Russian Culture', platform: 'youtube', url: 'https://youtube.com/watch?v=russian2', thumbnail: '/videos/thumb14.jpg' }
    ],
    price: 139,
    enrollButton: 'Advanced Russian'
  },
];

export function getCoursesByCategory(category: CourseCategory): Course[] {
  return courses.filter(course => course.category === category);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}
