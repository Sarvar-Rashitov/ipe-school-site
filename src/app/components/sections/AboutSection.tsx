import { motion } from 'motion/react';
import { Target, Users, Award, Zap } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';
import logoImg from '../../../imports/image-1.png';

const features = [
  {
    icon: Target,
    color: 'bg-blue-100 text-blue-600',
    uz: { title: 'Maqsadli ta\'lim', desc: 'Har bir o\'quvchiga individual yondashuv va maqsadli rivojlanish rejasi' },
    ru: { title: 'Целенаправленное обучение', desc: 'Индивидуальный подход к каждому студенту и план целенаправленного развития' },
    en: { title: 'Targeted Learning', desc: 'Individual approach to each student and targeted development plan' },
  },
  {
    icon: Users,
    color: 'bg-purple-100 text-purple-600',
    uz: { title: 'Kichik guruhlar', desc: '6-8 nafar talabadan iborat guruhlar optimal ta\'lim muhitini yaratadi' },
    ru: { title: 'Малые группы', desc: 'Группы из 6-8 студентов создают оптимальную образовательную среду' },
    en: { title: 'Small Groups', desc: 'Groups of 6-8 students create an optimal learning environment' },
  },
  {
    icon: Award,
    color: 'bg-orange-100 text-orange-600',
    uz: { title: 'Tajribali o\'qituvchilar', desc: '5 yildan ortiq tajribaga ega sertifikatlangan mutaxassislar' },
    ru: { title: 'Опытные преподаватели', desc: 'Сертифицированные специалисты с более чем 5-летним опытом' },
    en: { title: 'Experienced Teachers', desc: 'Certified specialists with more than 5 years of experience' },
  },
  {
    icon: Zap,
    color: 'bg-green-100 text-green-600',
    uz: { title: 'Zamonaviy metodika', desc: 'Eng so\'nggi o\'qitish texnologiyalari va interaktiv darslar' },
    ru: { title: 'Современная методика', desc: 'Новейшие технологии обучения и интерактивные занятия' },
    en: { title: 'Modern Methods', desc: 'Latest teaching technologies and interactive lessons' },
  },
];

export function AboutSection() {
  const { language } = useLanguage();

  const title = language === 'uz' ? 'IPE School haqida' : language === 'ru' ? 'Об IPE School' : 'About IPE School';
  const subtitle = language === 'uz'
    ? 'Biz 2016-yildan buyon Toshkentda zamonaviy ta\'lim xizmatlarini ko\'rsatib kelmoqdamiz. IT, matematika va til kurslari orqali minglab o\'quvchilarni muvaffaqiyatga olib chiqmoqdamiz.'
    : language === 'ru'
    ? 'С 2016 года мы предоставляем современные образовательные услуги в Ташкенте. Через курсы IT, математики и языков мы ведём тысячи студентов к успеху.'
    : 'Since 2016, we have been providing modern educational services in Tashkent. Through IT, mathematics and language courses, we are leading thousands of students to success.';

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center px-4 md:px-6 lg:px-8">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImg} alt="IPE School" className="h-14 w-14 object-contain" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">IPE <span className="text-blue-600">School</span></h1>
                <p className="text-sm text-gray-500">Inter Prof Education School</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {subtitle}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: '2016', label: language === 'uz' ? 'Yil tashkil' : language === 'ru' ? 'Год основания' : 'Founded' },
                { num: '10000+', label: language === 'uz' ? 'Bitiruvchilar' : language === 'ru' ? 'Выпускников' : 'Graduates' },
                { num: '95%', label: language === 'uz' ? 'Muvaffaqiyat' : language === 'ru' ? 'Успех' : 'Success' },
              ].map((stat) => (
                <div key={stat.num} className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.num}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const content = feature[language];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className={`w-11 h-11 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{content.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{content.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
