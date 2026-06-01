import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen, Users, Award, Code2, Globe, Calculator, Brain } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useLanguage } from '../lib/LanguageContext';
import { courses } from '../data/courses';

interface CoursesProps {
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
  'ielts': 'from-blue-500 to-indigo-500',
  'cefr': 'from-teal-500 to-cyan-500',
};

export function Courses({ onOpenFreeLesson }: CoursesProps) {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: { uz: 'Barchasi', ru: 'Все', en: 'All' } },
    { id: 'it', label: { uz: 'IT Dasturlash', ru: 'IT Программирование', en: 'IT Programming' } },
    { id: 'exam', label: { uz: 'Imtihonlarga tayyorlov', ru: 'Подготовка к экзаменам', en: 'Exam Preparation' } },
    { id: 'academic', label: { uz: 'Fan darslari', ru: 'Предметные курсы', en: 'Academic Subjects' } },
    { id: 'language', label: { uz: 'Til kurslari', ru: 'Языковые курсы', en: 'Language Courses' } },
  ];

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {language === 'uz' ? 'Bizning kurslar' : language === 'ru' ? 'Наши курсы' : 'Our Courses'}
            </h1>
            <p className="text-xl text-blue-200/80 leading-relaxed">
              {language === 'uz'
                ? 'IT, SAT, matematika va tillarni professional darajada o\'rganing'
                : language === 'ru'
                ? 'Изучайте IT, SAT, математику и языки на профессиональном уровне'
                : 'Learn IT, SAT, mathematics and languages at a professional level'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kurslar bo'yicha ma'lumot */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {language === 'uz' ? 'Kichik guruhlar' : language === 'ru' ? 'Малые группы' : 'Small Groups'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'uz'
                      ? '6-8 nafar talaba, har biriga individual e\'tibor'
                      : language === 'ru'
                      ? '6-8 студентов, индивидуальное внимание каждому'
                      : '6-8 students, individual attention to each'}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {language === 'uz' ? 'Zamonaviy dasturlar' : language === 'ru' ? 'Современные программы' : 'Modern Programs'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'uz'
                      ? 'Eng so\'nggi va samarali o\'qitish metodlari'
                      : language === 'ru'
                      ? 'Самые современные и эффективные методы обучения'
                      : 'Most modern and effective teaching methods'}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {language === 'uz' ? 'Sertifikatlar' : language === 'ru' ? 'Сертификаты' : 'Certificates'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'uz'
                      ? 'Kurs yakunida rasmiy sertifikat olish'
                      : language === 'ru'
                      ? 'Получение официального сертификата по окончании курса'
                      : 'Receive official certificate upon completion'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kurslar ro'yxati */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            {/* Category Tabs */}
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 h-auto bg-transparent p-0">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white py-3 rounded-lg"
                  >
                    {cat.label[language]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => {
                const IconComponent = categoryIcons[course.category] || BookOpen;
                const gradientClass = categoryColors[course.id] || 'from-blue-600 to-purple-600';

                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 overflow-hidden">
                      {/* Gradient Top Bar */}
                      <div className={`h-1.5 bg-gradient-to-r ${gradientClass}`} />

                      <CardContent className="p-6">
                        {/* Icon */}
                        <div className={`w-14 h-14 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {course.title[language]}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                          {course.description[language]}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2 mb-6">
                          {course.features[language].slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Duration */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration[language]}</span>
                        </div>

                        {/* Actions */}
                        <div className="space-y-2">
                          <Link to={`/courses/${course.id}`} className="block">
                            <Button variant="outline" className="w-full group-hover:border-blue-600 group-hover:text-blue-600">
                              {t.learnMore}
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                          <Button
                            onClick={() => onOpenFreeLesson(course.title[language])}
                            className={`w-full bg-gradient-to-r ${gradientClass} hover:opacity-90`}
                          >
                            {language === 'uz' ? 'Yozilish' : language === 'ru' ? 'Записаться' : 'Register'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredCourses.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-gray-500 text-lg">
                  {language === 'uz' ? 'Ushbu kategoriyada kurslar yo\'q' : language === 'ru' ? 'В этой категории нет курсов' : 'No courses in this category'}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === 'uz' ? 'Qaysi kursni tanlashni bilmayapsizmi?' : language === 'ru' ? 'Не знаете, какой курс выбрать?' : 'Not sure which course to choose?'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'uz'
                ? 'Bepul konsultatsiya olish uchun biz bilan bog\'laning'
                : language === 'ru'
                ? 'Свяжитесь с нами для бесплатной консультации'
                : 'Contact us for a free consultation'}
            </p>
            <Button
              onClick={() => onOpenFreeLesson()}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-12 h-14"
            >
              {t.ctaButton}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
