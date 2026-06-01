import { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Users, Target, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useLanguage } from '../lib/LanguageContext';

export function Results() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('achievements');

  const achievements = [
    {
      id: 1,
      title: {
        uz: 'IELTS 8.0+ natijalari',
        ru: 'Результаты IELTS 8.0+',
        en: 'IELTS 8.0+ Results',
      },
      description: {
        uz: '2023-2024 o\'quv yilida 50+ talaba IELTS 8.0 va undan yuqori ball oldi',
        ru: 'В 2023-2024 учебном году 50+ студентов получили IELTS 8.0 и выше',
        en: 'In 2023-2024 academic year, 50+ students achieved IELTS 8.0 and above',
      },
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      stats: '50+',
    },
    {
      id: 2,
      title: {
        uz: 'SAT 1400+ ball',
        ru: 'SAT 1400+ баллов',
        en: 'SAT 1400+ Score',
      },
      description: {
        uz: '30+ talaba SAT imtihonida 1400 va undan yuqori ball oldi',
        ru: '30+ студентов получили SAT 1400 и выше баллов',
        en: '30+ students achieved SAT 1400 and above',
      },
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
      stats: '30+',
    },
    {
      id: 3,
      title: {
        uz: 'IT dasturchilar ish joyiga joylashtirildi',
        ru: 'IT-разработчики трудоустроены',
        en: 'IT Developers Employed',
      },
      description: {
        uz: '90% IT kurslarini tugatgan talabalar ish joyiga joylashtirildi',
        ru: '90% студентов, завершивших IT-курсы, трудоустроены',
        en: '90% of students who completed IT courses were employed',
      },
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      stats: '90%',
    },
    {
      id: 4,
      title: {
        uz: 'Xalqaro olimpiada g\'oliblari',
        ru: 'Победители международных олимпиад',
        en: 'International Olympiad Winners',
      },
      description: {
        uz: '15+ talaba xalqaro matematika va fizika olimpiadalarida sovrindorlar',
        ru: '15+ студентов - призеры международных олимпиад по математике и физике',
        en: '15+ students are winners of international mathematics and physics olympiads',
      },
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      stats: '15+',
    },
  ];

  const galleryImages = [
    {
      id: 1,
      title: { uz: 'O\'quv jarayoni', ru: 'Учебный процесс', en: 'Learning Process' },
      category: 'classroom',
      images: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
      ],
    },
    {
      id: 2,
      title: { uz: 'Kampus va sinflar', ru: 'Кампус и классы', en: 'Campus and Classrooms' },
      category: 'campus',
      images: [
        'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
      ],
    },
    {
      id: 3,
      title: { uz: 'Tadbirlar va bayramlar', ru: 'Мероприятия и праздники', en: 'Events and Celebrations' },
      category: 'events',
      images: [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop',
      ],
    },
  ];

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
              {language === 'uz' ? 'Talabalar natijalari' : language === 'ru' ? 'Результаты студентов' : 'Student Results'}
            </h1>
            <p className="text-xl text-blue-200/80">
              {language === 'uz'
                ? 'IPE School talabalarining yutuqlari va muvaffaqiyatlari'
                : language === 'ru'
                ? 'Достижения и успехи студентов IPE School'
                : 'Achievements and success of IPE School students'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="achievements" className="text-lg py-3">
                {language === 'uz' ? 'Yutuqlar' : language === 'ru' ? 'Достижения' : 'Achievements'}
              </TabsTrigger>
              <TabsTrigger value="gallery" className="text-lg py-3">
                {language === 'uz' ? 'Galereya' : language === 'ru' ? 'Галерея' : 'Gallery'}
              </TabsTrigger>
            </TabsList>

            {/* Achievements Tab */}
            <TabsContent value="achievements">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 h-full border-2 border-transparent hover:border-blue-200">
                        <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${achievement.color}`} />
                        <CardContent className="p-8">
                          <div className="flex items-start gap-6">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className={`text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                                {achievement.stats}
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {achievement.title[language]}
                              </h3>
                              <p className="text-gray-600 leading-relaxed">
                                {achievement.description[language]}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Additional Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
              >
                <h2 className="text-3xl font-bold mb-8 text-center">
                  {language === 'uz' ? '2023-2024 o\'quv yili natijalari' : language === 'ru' ? 'Результаты 2023-2024 учебного года' : '2023-2024 Academic Year Results'}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                    <div className="text-blue-100">
                      {language === 'uz' ? 'Muvaffaqiyat' : language === 'ru' ? 'Успеха' : 'Success Rate'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                    <div className="text-blue-100">
                      {language === 'uz' ? 'Bitiruvchilar' : language === 'ru' ? 'Выпускников' : 'Graduates'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                    <div className="text-blue-100">
                      {language === 'uz' ? 'Grantlar' : language === 'ru' ? 'Грантов' : 'Scholarships'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">4.8/5</div>
                    <div className="text-blue-100">
                      {language === 'uz' ? 'Reyting' : language === 'ru' ? 'Рейтинг' : 'Rating'}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Gallery Tab */}
            <TabsContent value="gallery">
              <div className="space-y-16">
                {galleryImages.map((category, catIndex) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: catIndex * 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {category.title[language]}
                      </h3>
                      <ChevronRight className="w-6 h-6 text-blue-600" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {category.images.map((image, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: catIndex * 0.2 + imgIndex * 0.1 }}
                          className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
                        >
                          <img
                            src={image}
                            alt={`${category.title[language]} ${imgIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
