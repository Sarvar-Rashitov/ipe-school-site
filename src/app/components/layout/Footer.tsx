import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Youtube, Instagram, Send } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';
import logoImg from '../../../imports/image-1.png';

export function Footer() {
  const { t, language } = useLanguage();

  const quickLinks = [
    { label: t.home, href: '/' },
    { label: t.courses, href: '/courses' },
    { label: t.contact, href: '/contact' },
  ];

  const courseLinks = [
    { label: 'Python Backend (LLM & NLP)', id: 'python-backend' },
    { label: 'Frontend Development', id: 'frontend' },
    { label: language === 'uz' ? 'SAT Tayyorgarlik' : language === 'ru' ? 'Подготовка к SAT' : 'SAT Preparation', id: 'sat' },
    { label: language === 'uz' ? 'Matematika' : language === 'ru' ? 'Математика' : 'Mathematics', id: 'mathematics' },
    { label: language === 'uz' ? 'Rus tili' : language === 'ru' ? 'Русский язык' : 'Russian Language', id: 'russian' },
  ];

  const socials = [
    { icon: Youtube, href: 'https://youtube.com/@ipeschool', label: 'YouTube', color: 'hover:bg-red-500' },
    { icon: Instagram, href: 'https://instagram.com/ipe_school', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: Send, href: 'https://t.me/ipeschool', label: 'Telegram', color: 'hover:bg-blue-400' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImg} alt="IPE School" className="h-12 w-12 object-contain bg-white rounded-xl p-1" />
              <div>
                <div className="text-xl font-bold text-white">IPE <span className="text-blue-400">School</span></div>
                <div className="text-xs text-gray-400">Inter Prof Education</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {language === 'uz'
                ? 'Zamonaviy ta\'lim, professional o\'qituvchilar va IT-texnologiyalar orqali kelajagingizni yarating.'
                : language === 'ru'
                  ? 'Создайте своё будущее с современным образованием, профессиональными преподавателями и IT-технологиями.'
                  : 'Build your future through modern education, professional teachers and IT technologies.'}
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-11 h-11 bg-white/10 ${social.color} rounded-xl flex items-center justify-center transition-colors`}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-base font-bold mb-6 text-white">{t.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-base font-bold mb-6 text-white">{t.courses}</h3>
            <ul className="space-y-3">
              {courseLinks.map((course) => (
                <li key={course.id}>
                  <Link
                    to={`/courses/${course.id}`}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full group-hover:scale-150 transition-transform" />
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-base font-bold mb-6 text-white">{t.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href="/contact#map"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Toshkent, O'zbekiston<br />IPE SCHOOL - O'quv markazi
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+99555885000" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +998 55 588 50 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@ipeschool.uz" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@ipeschool.uz
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Send className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="https://t.me/ipeschool" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  @ipeschool
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <p className="text-gray-500 text-sm text-center md:text-left order-2 md:order-1">
              © 2016 - {new Date().getFullYear()} IPE School.
            </p>
            <div className="text-gray-500 text-sm text-center order-3 md:order-2">
              {language === 'uz' ? 'Sayt ' : language === 'ru' ? 'Сайт разработан ' : 'Developed by '}
              <a href="https://testium.uz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors font-medium">
                Testium.uz
              </a>
              {language === 'uz' ? ' tomonidan ishlab chiqilgan.' : ''}
            </div>
            <div className="flex justify-center md:justify-end gap-6 order-1 md:order-3">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
                {language === 'uz' ? 'Maxfiylik siyosati' : language === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy'}
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">
                {language === 'uz' ? 'Foydalanish shartlari' : language === 'ru' ? 'Условия использования' : 'Terms of Service'}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
