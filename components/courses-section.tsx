'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, BookOpen, Sparkles, Star, Heart, Zap } from 'lucide-react';

interface CoursesSectionProps {
  showTitle?: boolean;
}

export function CoursesSection({ showTitle = true }: CoursesSectionProps) {
  const courses = [
    {
      category: 'English',
      slug: 'english',
      gradient: 'from-blue-600 to-blue-400',
      icon: '🌍',
      tag: 'Most Popular',
      courses: [
        { title: 'Beginner A1-A2', slug: 'beginner', level: 'A1-A2', color: 'blue' },
        { title: 'Intermediate B1-B2', slug: 'intermediate', level: 'B1-B2', color: 'indigo' },
        { title: 'IELTS Prep', slug: 'ielts', level: 'B1-C1', color: 'violet' },
      ]
    },
    {
      category: 'IT Backend',
      slug: 'it-backend',
      gradient: 'from-purple-600 to-pink-500',
      icon: '⚙️',
      tag: 'Tech',
      courses: [
        { title: 'Python Basics', slug: 'python-basics', level: 'Beginner', color: 'purple' },
        { title: 'Advanced Backend', slug: 'python-advanced', level: 'Intermediate', color: 'fuchsia' },
        { title: 'LLM & NLP', slug: 'llm-nlp', level: 'Advanced', color: 'pink' },
      ]
    },
    {
      category: 'IT Frontend',
      slug: 'it-frontend',
      gradient: 'from-cyan-500 to-blue-500',
      icon: '🎨',
      tag: 'Creative',
      courses: [
        { title: 'HTML/CSS/JS', slug: 'web-basics', level: 'Beginner', color: 'cyan' },
        { title: 'React & Next.js', slug: 'react-nextjs', level: 'Intermediate', color: 'blue' },
      ]
    },
    {
      category: 'SAT',
      slug: 'sat',
      gradient: 'from-emerald-500 to-teal-400',
      icon: '📝',
      tag: 'Exam Prep',
      courses: [
        { title: 'SAT Intensive', slug: 'sat-intensive', level: 'All Levels', color: 'emerald' },
      ]
    },
    {
      category: 'Mathematics',
      slug: 'mathematics',
      gradient: 'from-orange-500 to-red-400',
      icon: '🔢',
      tag: 'Foundation',
      courses: [
        { title: 'Algebra', slug: 'algebra', level: 'High School', color: 'orange' },
        { title: 'Calculus', slug: 'calculus', level: 'Advanced', color: 'red' },
      ]
    },
    {
      category: 'Russian',
      slug: 'russian',
      gradient: 'from-red-600 to-rose-500',
      icon: '🇷🇺',
      tag: 'Language',
      courses: [
        { title: 'Beginner', slug: 'russian-beginner', level: 'A1-A2', color: 'red' },
        { title: 'Advanced', slug: 'russian-advanced', level: 'B1-C1', color: 'rose' },
      ]
    },
  ];

  const categoryColors: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    violet: 'bg-violet-100 text-violet-700 border-violet-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    fuchsia: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200',
    pink: 'bg-pink-100 text-pink-700 border-pink-200',
    cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200',
    emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    orange: 'bg-orange-100 text-orange-700 border-orange-200',
    red: 'bg-red-100 text-red-700 border-red-200',
    rose: 'bg-rose-100 text-rose-700 border-rose-200',
  };

  return (
    <section id="courses" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} />
              Choose Your Path
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Courses</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlock your potential with expert-led courses designed for your success
            </p>
          </motion.div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((category, idx) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all h-full flex flex-col group border-0 shadow-md">
                <div className={`h-44 bg-gradient-to-br ${category.gradient} flex items-end justify-between p-6 text-white relative`}>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {category.tag}
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl mb-2 block">{category.icon}</span>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </div>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen size={28} />
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-grow bg-white">
                  {category.courses.map((course) => (
                    <Link
                      key={course.slug}
                      href={`/${category.slug}/${course.slug}`}
                      className="block p-3.5 rounded-xl bg-muted/50 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all group/course border border-transparent hover:border-primary/20"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${categoryColors[course.color]} flex items-center justify-center text-xs font-bold`}>
                            {course.title.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold group-hover/course:text-primary transition-colors text-sm">
                              {course.title}
                            </p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <Zap size={10} className="text-muted-foreground" />
                              <p className="text-xs text-muted-foreground">{course.level}</p>
                            </div>
                          </div>
                        </div>
                        <ArrowRight size={16} className="text-primary opacity-0 group-hover/course:opacity-100 transition-all flex-shrink-0 group-hover/course:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="px-6 pb-6 bg-white">
                  <Link href={`/${category.slug}/${category.courses[0].slug}`}>
                    <Button variant="outline" className="w-full gap-2 group/btn border-primary/20 hover:bg-primary hover:text-white transition-all">
                      View Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
