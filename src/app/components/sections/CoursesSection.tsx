import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Code2, Globe, Calculator, BookOpen, Brain } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../lib/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { courses } from '../../data/courses';

interface CoursesSectionProps {
  onOpenFreeLesson: (courseId?: string) => void;
}

const categoryIcons: Record<string, React.ElementType> = {
  it: Code2,
  exam: Brain,
  academic: Calculator,
  language: Globe,
};

const categoryColors: Record<string, string> = {
  'python-backend': 'from-blue-600 to-cyan-500',
  'frontend': 'from-purple-600 to-pink-500',
  'sat': 'from-orange-500 to-red-500',
  'mathematics': 'from-green-500 to-teal-500',
  'russian': 'from-red-600 to-rose-500',
};

export function CoursesSection({ onOpenFreeLesson }: CoursesSectionProps) {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  // Homeda faqat 3 ta asosiy kurs ko'rsatamiz: IT (Python), SAT, English (IELTS)
  const featuredCourseIds = ['python-backend', 'sat', 'ielts'];
  const featuredCourses = courses.filter(c => featuredCourseIds.includes(c.id));

  return (
    <section id="courses" ref={ref} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            {language === 'uz' ? 'Bizning dasturlar' : language === 'ru' ? 'Наши программы' : 'Our Programs'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t.ourCourses}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {t.coursesSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course, index) => {
            const IconComponent = categoryIcons[course.category] || BookOpen;
            const gradientClass = categoryColors[course.id] || 'from-blue-600 to-purple-600';

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${gradientClass}`} />

                <div className="p-6">
                  {/* Icon & Category */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                        {course.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {course.title[language]}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                    {course.description[language]}
                  </p>

                  {/* Features preview */}
                  <div className="space-y-2 mb-6">
                    {course.features[language].slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradientClass} flex-shrink-0`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 pb-5 border-b border-gray-100">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration[language]}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link to={`/courses/${course.id}`} className="flex-1">
                      <Button variant="outline" className="w-full text-sm hover:border-blue-500 hover:text-blue-600">
                        {t.learnMore}
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                    <Button
                      onClick={() => onOpenFreeLesson(course.title[language])}
                      className={`flex-1 text-sm bg-gradient-to-r ${gradientClass} hover:opacity-90 text-white border-0`}
                    >
                      {language === 'uz' ? 'Yozilish' : language === 'ru' ? 'Записаться' : 'Register'}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/courses">
            <Button size="lg" variant="outline" className="text-lg px-8 hover:border-blue-600 hover:text-blue-600">
              {language === 'uz' ? 'Barcha kurslar' : language === 'ru' ? 'Все курсы' : 'All Courses'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
