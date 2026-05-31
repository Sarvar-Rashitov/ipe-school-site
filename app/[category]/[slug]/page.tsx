'use client';

import { useParams } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingActions } from '@/components/floating-actions';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Clock, Users, CheckCircle, BookOpen, Users2 } from 'lucide-react';

const courseDetails = {
  'english/beginner': {
    title: 'English Beginner A1-A2',
    level: 'A1-A2',
    duration: '12 weeks',
    price: '$199',
    students: '240+',
    description: 'Start your English journey from basics. Learn fundamentals of grammar, vocabulary, and communication skills.',
    whatYoulearn: [
      'English alphabet and pronunciation',
      'Basic grammar (present simple, present continuous)',
      'Everyday vocabulary and phrases',
      'Simple conversations and listening skills',
      'Reading and writing fundamentals',
      'Introduction to CEFR standards',
    ],
    curriculum: [
      { week: 'Weeks 1-3', topics: 'Alphabet, Numbers, Greetings, Family' },
      { week: 'Weeks 4-6', topics: 'Daily Routines, Food, Shopping' },
      { week: 'Weeks 7-9', topics: 'Travel, Directions, Past Simple' },
      { week: 'Weeks 10-12', topics: 'Revision, Conversation Practice' },
    ],
    teachers: [
      { name: 'Sarah Johnson', expertise: 'CEFR A-Level Specialist', years: '8 years' },
      { name: 'Michael Brown', expertise: 'Conversation Coach', years: '6 years' },
    ],
    testimonials: [
      { name: 'Ali', text: 'Excellent course! I can now understand basic English conversations.' },
      { name: 'Fatima', text: 'The teachers are very patient and supportive.' },
    ]
  },
  'english/intermediate': {
    title: 'English Intermediate B1-B2',
    level: 'B1-B2',
    duration: '12 weeks',
    price: '$249',
    students: '380+',
    description: 'Develop conversational skills and deeper grammatical understanding for everyday and professional use.',
    whatYoulearn: [
      'Complex grammar structures',
      'Professional vocabulary',
      'Advanced conversational skills',
      'Business English basics',
      'Writing emails and reports',
      'Public speaking fundamentals',
    ],
    curriculum: [
      { week: 'Weeks 1-3', topics: 'Business Vocabulary, Email Writing' },
      { week: 'Weeks 4-6', topics: 'Meetings, Presentations, Negotiations' },
      { week: 'Weeks 7-9', topics: 'Advanced Grammar, Idioms' },
      { week: 'Weeks 10-12', topics: 'Real-world scenarios, Final Project' },
    ],
    teachers: [
      { name: 'Emma Wilson', expertise: 'Business English Expert', years: '10 years' },
    ],
    testimonials: [
      { name: 'Hassan', text: 'Perfect for my career development!' },
    ]
  },
  'english/ielts': {
    title: 'IELTS Preparation',
    level: 'B1-C1',
    duration: '8 weeks',
    price: '$299',
    students: '520+',
    description: 'Intensive IELTS exam preparation with practice tests, speaking coaching, and writing feedback.',
    whatYoulearn: [
      'IELTS exam format and strategies',
      'Listening test techniques',
      'Academic reading skills',
      'IELTS writing task 1 & 2',
      'Speaking test preparation',
      'Mock exams and feedback',
    ],
    curriculum: [
      { week: 'Weeks 1-2', topics: 'IELTS Overview, Exam Format' },
      { week: 'Weeks 3-4', topics: 'Listening & Reading Practice' },
      { week: 'Weeks 5-6', topics: 'Writing Tasks, Speaking Practice' },
      { week: 'Weeks 7-8', topics: 'Mock Exams, Final Review' },
    ],
    teachers: [
      { name: 'David Smith', expertise: 'IELTS Examiner', years: '12 years' },
    ],
    testimonials: [
      { name: 'Zainab', text: 'Achieved 7.5 band score! Thank you!' },
    ]
  },
  'it-backend/python-basics': {
    title: 'Python Basics',
    level: 'Beginner',
    duration: '10 weeks',
    price: '$249',
    students: '180+',
    description: 'Learn Python fundamentals including variables, data types, functions, and object-oriented programming basics.',
    whatYoulearn: [
      'Python syntax and basics',
      'Variables and data types',
      'Control flow (if/else, loops)',
      'Functions and modules',
      'Lists, tuples, dictionaries',
      'File handling basics',
    ],
    curriculum: [
      { week: 'Weeks 1-2', topics: 'Setup, Variables, Data Types' },
      { week: 'Weeks 3-4', topics: 'Control Flow, Loops' },
      { week: 'Weeks 5-6', topics: 'Functions, Modules' },
      { week: 'Weeks 7-10', topics: 'Projects, Best Practices' },
    ],
    teachers: [
      { name: 'Alex Chen', expertise: 'Python Developer', years: '7 years' },
    ],
    testimonials: [
      { name: 'Omar', text: 'Great introduction to Python programming!' },
    ]
  },
  'it-backend/python-advanced': {
    title: 'Advanced Python Backend',
    level: 'Intermediate',
    duration: '12 weeks',
    price: '$349',
    students: '95+',
    description: 'Master backend development with Django/FastAPI, databases, and REST APIs.',
    whatYoulearn: [
      'Web frameworks (Django/FastAPI)',
      'Database design and SQL',
      'REST API development',
      'Authentication & security',
      'Deployment strategies',
      'Real-time applications',
    ],
    curriculum: [
      { week: 'Weeks 1-3', topics: 'Framework Setup, Models' },
      { week: 'Weeks 4-6', topics: 'API Development, Databases' },
      { week: 'Weeks 7-9', topics: 'Authentication, Security' },
      { week: 'Weeks 10-12', topics: 'Deployment, Projects' },
    ],
    teachers: [
      { name: 'James Miller', expertise: 'Full-stack Developer', years: '9 years' },
    ],
    testimonials: [
      { name: 'Sofia', text: 'Real-world experience, highly recommended!' },
    ]
  },
  'it-backend/llm-nlp': {
    title: 'LLM & NLP Technologies',
    level: 'Advanced',
    duration: '14 weeks',
    price: '$449',
    students: '42+',
    description: 'Explore Large Language Models, Natural Language Processing, and AI technologies.',
    whatYoulearn: [
      'NLP fundamentals',
      'Transformer architecture',
      'Working with LLMs (GPT, BERT)',
      'Fine-tuning models',
      'Vector databases',
      'Building AI applications',
    ],
    curriculum: [
      { week: 'Weeks 1-3', topics: 'NLP Basics, Tokenization' },
      { week: 'Weeks 4-6', topics: 'Transformers, Attention Mechanism' },
      { week: 'Weeks 7-10', topics: 'LLM APIs, Fine-tuning' },
      { week: 'Weeks 11-14', topics: 'Production Apps, Projects' },
    ],
    teachers: [
      { name: 'Dr. Raj Kumar', expertise: 'AI/ML Research', years: '8 years' },
    ],
    testimonials: [
      { name: 'Anya', text: 'Cutting-edge AI knowledge!' },
    ]
  },
};

export default function CoursePage() {
  const params = useParams();
  const category = params.category as string;
  const slug = params.slug as string;
  const key = `${category}/${slug}` as keyof typeof courseDetails;
  const course = courseDetails[key];

  if (!course) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Course not found</h1>
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      
      {/* Back Link */}
      <div className="pt-28 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/courses" className="flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft size={20} /> Back to Courses
          </Link>
        </div>
      </div>

      {/* Course Hero */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
          <div className="flex flex-wrap gap-6 text-lg">
            <div className="flex items-center gap-2">
              <BookOpen className="text-primary" />
              <span>{course.level}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-primary" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-primary" />
              <span>{course.students} enrolled</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Description & CTA */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-xl text-muted-foreground mb-8">{course.description}</p>
              
              {/* What You Learn */}
              <div>
                <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
                <ul className="space-y-3">
                  {course.whatYoulearn.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing Card */}
            <div>
              <Card className="p-8 sticky top-24">
                <div className="text-4xl font-bold mb-2">{course.price}</div>
                <p className="text-muted-foreground mb-6">for {course.duration}</p>
                <Button className="w-full mb-3 gap-2" size="lg">
                  Enroll Now <ArrowLeft size={20} />
                </Button>
                <Link href="/free-lesson">
                  <Button variant="outline" className="w-full">
                    Free Lesson
                  </Button>
                </Link>
              </Card>
            </div>
          </div>

          {/* Curriculum */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Curriculum</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {course.curriculum.map((item, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-primary mb-2">{item.week}</h3>
                  <p className="text-muted-foreground">{item.topics}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Instructors */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {course.teachers.map((teacher, idx) => (
                <Card key={idx} className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {teacher.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{teacher.name}</h3>
                      <p className="text-primary">{teacher.expertise}</p>
                      <p className="text-sm text-muted-foreground">{teacher.years} experience</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Student Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {course.testimonials.map((testimonial, idx) => (
                <Card key={idx} className="p-6 bg-muted/50">
                  <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold">- {testimonial.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enroll?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with a free lesson and see if this course is right for you
          </p>
          <Link href="/free-lesson">
            <Button size="lg" className="gap-2">
              Book Free Lesson <ArrowLeft size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
