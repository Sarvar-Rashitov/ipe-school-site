import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen, Users, Award, Code2, Globe, Calculator, Brain, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-28 pb-20 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(/images/hero-section.jpg)',
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-950/85 to-slate-900/90" />
        </div>

        {/* Background grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/20 to-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-red-500/10 to-blue-600/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6 border border-white/10">
              <Sparkles className="w-4 h-4" />
              {language === 'uz' ? '10+ yillik tajriba' : language === 'ru' ? '10+ лет опыта' : '10+ years of experience'}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {language === 'uz' ? 'Bizning kurslar' : language === 'ru' ? 'Наши курсы' : 'Our Courses'}
            </h1>
            <p className="text-xl text-blue-200/80 leading-relaxed max-w-2xl mx-auto">
              {language === 'uz'
                ? 'IT, SAT, matematika va tillarni professional darajada o\'rganing'
                : language === 'ru'
                ? 'Изучайте IT, SAT, математику и языки на профессиональном уровне'
                : 'Learn IT, SAT, mathematics and languages at a professional level'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Users, gradient: 'from-blue-500 to-cyan-500', title_uz: 'Kichik guruhlar', title_ru: 'Малые группы', title_en: 'Small Groups', desc_uz: '6-8 nafar talaba, har biriga individual e\'tibor', desc_ru: '6-8 студентов, индивидуальное внимание каждому', desc_en: '6-8 students, individual attention to each' },
              { icon: BookOpen, gradient: 'from-purple-500 to-pink-500', title_uz: 'Zamonaviy dasturlar', title_ru: 'Современные программы', title_en: 'Modern Programs', desc_uz: 'Eng so\'nggi va samarali o\'qitish metodlari', desc_ru: 'Самые современные и эффективные методы обучения', desc_en: 'Most modern and effective teaching methods' },
              { icon: Award, gradient: 'from-amber-500 to-orange-500', title_uz: 'Sertifikatlar', title_ru: 'Сертификаты', title_en: 'Certificates', desc_uz: 'Kurs yakunida rasmiy sertifikat olish', desc_ru: 'Получение официального сертификата по окончании курса', desc_en: 'Receive official certificate upon completion' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl shadow-blue-500/5"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item[`title_${language}` as keyof typeof item]}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item[`desc_${language}` as keyof typeof item]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 h-auto bg-white/50 backdrop-blur-xl p-1 rounded-xl border border-white/50">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white py-3 rounded-lg text-sm font-medium"
                  >
                    {cat.label[language]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => {
                const IconComponent = categoryIcons[course.category] || BookOpen;
                const gradientClass = categoryColors[course.id] || 'from-blue-600 to-purple-600';

                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="group h-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden rounded-2xl">
                      <div className={`h-1.5 bg-gradient-to-r ${gradientClass}`} />
                      <CardContent className="p-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {course.title[language]}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                          {course.description[language]}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {course.features[language].slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200/50">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration[language]}</span>
                        </div>
                        <div className="space-y-2">
                          <Link to={`/courses/${course.id}`} className="block">
                            <Button variant="outline" className="w-full border-gray-200 bg-white/50 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 backdrop-blur-sm">
                              {t.learnMore}
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                          <Button
                            onClick={() => onOpenFreeLesson(course.title[language])}
                            className={`w-full bg-gradient-to-r ${gradientClass} hover:opacity-90 shadow-lg`}
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

            {filteredCourses.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white/50 backdrop-blur-xl rounded-2xl border border-white/50"
              >
                <p className="text-gray-500 text-lg">
                  {language === 'uz' ? 'Ushbu kategoriyada kurslar yo\'q' : language === 'ru' ? 'В этой категории нет курсов' : 'No courses in this category'}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-300 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-12 h-14 shadow-2xl hover:shadow-3xl transition-shadow"
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

export default Courses;
