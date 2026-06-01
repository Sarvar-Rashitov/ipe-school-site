import { motion } from 'motion/react';
import { Youtube, Instagram, Send } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../lib/LanguageContext';

export function SocialLinks() {
  const { ref, isVisible } = useScrollAnimation();
  const { language } = useLanguage();

  const socials = [
    {
      icon: Youtube,
      name: 'YouTube',
      handle: '@ipeschool',
      href: 'https://youtube.com/@ipeschool',
      color: 'from-red-600 to-red-500',
      hoverColor: 'hover:shadow-red-500/30',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@ipeschool',
      href: 'https://instagram.com/ipeschool',
      color: 'from-pink-600 via-purple-600 to-orange-500',
      hoverColor: 'hover:shadow-pink-500/30',
    },
    {
      icon: Send,
      name: 'Telegram',
      handle: '@ipeschool',
      href: 'https://t.me/ipeschool',
      color: 'from-blue-500 to-sky-400',
      hoverColor: 'hover:shadow-blue-500/30',
    },
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            {language === 'uz' ? 'Ijtimoiy tarmoqlarimizda qo\'shiling' : language === 'ru' ? 'Присоединяйтесь в соцсетях' : 'Join us on Social Media'}
          </h2>
          <p className="text-lg text-gray-500">
            {language === 'uz' ? 'Yangiliklar, maslahatlar va video darslar' : language === 'ru' ? 'Новости, советы и видеоуроки' : 'News, tips and video lessons'}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`relative group w-full md:w-72 bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl ${social.hoverColor} transition-all duration-500`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-xl mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{social.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{social.handle}</p>
                  <div className={`inline-block px-5 py-2 rounded-full bg-gradient-to-r ${social.color} text-white text-sm font-medium shadow-md group-hover:shadow-lg transition-shadow`}>
                    {language === 'uz' ? 'Obuna bo\'lish' : language === 'ru' ? 'Подписаться' : 'Follow'}
                  </div>
                </div>

                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
