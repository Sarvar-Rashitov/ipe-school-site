import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function PrivacyPolicy() {
  const { language } = useLanguage();

  const content = {
    uz: {
      title: 'Maxfiylik siyosati',
      subtitle: 'IPE School shaxsiy ma\'lumotlaringiz xavfsizligini ta\'minlaydi',
      lastUpdated: 'Oxirgi yangilanish: 2026 yil 1-iyun',
      sections: [
        {
          title: '1. Umumiy ma\'lumot',
          content: 'IPE School (Inter Prof Education School) o\'z mijozlari va talabalarining shaxsiy ma\'lumotlarini muhofaza qilishga majburdir. Ushbu Maxfiylik siyosati sizning shaxsiy ma\'lumotlaringiz qanday to\'planishi, ishlatilishi va himoya qilinishini tushuntiradi.',
        },
        {
          title: '2. To\'planadigan ma\'lumotlar',
          content: 'Biz quyidagi shaxsiy ma\'lumotlarni to\'playmiz:\n\n• To\'liq ism va familiya\n• Telefon raqami va elektron pochta manzili\n• Tanlangan kurslar va o\'quv tarixi\n• Veb-sayt foydalanish ma\'lumotlari (cookies)\n• To\'lov ma\'lumotlari (himoyalangan tizimlar orqali)',
        },
        {
          title: '3. Ma\'lumotlardan foydalanish',
          content: 'Sizning ma\'lumotlaringiz quyidagi maqsadlarda ishlatiladi:\n\n• O\'quv xizmatlarini taqdim etish\n• Kurs ro\'yxatdan o\'tkazish va boshqarish\n• Talabalar bilan aloqa o\'rnatish\n• Xizmatlarni yaxshilash va tahlil qilish\n• Marketing va yangiliklar yuborish (ruxsatingiz bilan)',
        },
        {
          title: '4. Ma\'lumotlar xavfsizligi',
          content: 'IPE School sizning shaxsiy ma\'lumotlaringizni himoya qilish uchun zamonaviy texnik va tashkiliy choralarni qo\'llaydi. Barcha ma\'lumotlar shifrlangan serverlar va xavfsiz tizimlar orqali saqlanadi. Faqat vakolatli xodimlar ma\'lumotlarga kirish huquqiga ega.',
        },
        {
          title: '5. Uchinchi shaxslar',
          content: 'Sizning roziligingizsiz shaxsiy ma\'lumotlaringiz uchinchi shaxslarga sotilmaydi yoki uzatilmaydi. Faqat xizmat ko\'rsatish uchun zarur bo\'lgan holatlarda (to\'lov tizimlari, SMS xabarnomalar) hamkor tashkilotlar bilan ma\'lumotlar almashilishi mumkin.',
        },
        {
          title: '6. Sizning huquqlaringiz',
          content: 'Siz quyidagi huquqlarga egasiz:\n\n• O\'z ma\'lumotlaringizni ko\'rish va tahrirlash\n• Ma\'lumotlarni o\'chirish so\'rovini yuborish\n• Marketing xabarnomalardan voz kechish\n• Ma\'lumotlar ishlatilishiga e\'tiroz bildirish\n\nBu huquqlardan foydalanish uchun biz bilan bog\'laning: info@ipeschool.uz',
        },
        {
          title: '7. Cookies va kuzatuv texnologiyalari',
          content: 'Veb-saytimiz foydalanuvchi tajribasini yaxshilash uchun cookies dan foydalanadi. Siz brauzer sozlamalarida cookies ni o\'chirib qo\'yishingiz mumkin, lekin bu ba\'zi funksiyalarning ishlashiga ta\'sir qilishi mumkin.',
        },
        {
          title: '8. O\'zgarishlar',
          content: 'IPE School ushbu Maxfiylik siyosatini istalgan vaqtda o\'zgartirish huquqini o\'zida saqlab qoladi. Barcha o\'zgarishlar ushbu sahifada e\'lon qilinadi.',
        },
        {
          title: '9. Aloqa',
          content: 'Maxfiylik siyosati bo\'yicha savollaringiz bo\'lsa, biz bilan bog\'laning:\n\nEmail: info@ipeschool.uz\nTelefon: +998 78 113 07 74\nManzil: Toshkent, O\'zbekiston',
        },
      ],
    },
    ru: {
      title: 'Политика конфиденциальности',
      subtitle: 'IPE School обеспечивает безопасность ваших персональных данных',
      lastUpdated: 'Последнее обновление: 1 июня 2026 года',
      sections: [
        {
          title: '1. Общая информация',
          content: 'IPE School (Inter Prof Education School) обязуется защищать персональные данные своих клиентов и студентов. Настоящая Политика конфиденциальности объясняет, как ваши персональные данные собираются, используются и защищаются.',
        },
        {
          title: '2. Собираемые данные',
          content: 'Мы собираем следующие персональные данные:\n\n• Полное имя и фамилия\n• Номер телефона и адрес электронной почты\n• Выбранные курсы и история обучения\n• Данные об использовании веб-сайта (cookies)\n• Платежная информация (через защищенные системы)',
        },
        {
          title: '3. Использование данных',
          content: 'Ваши данные используются для следующих целей:\n\n• Предоставление образовательных услуг\n• Регистрация и управление курсами\n• Связь со студентами\n• Улучшение и анализ услуг\n• Маркетинг и рассылка новостей (с вашего разрешения)',
        },
        {
          title: '4. Безопасность данных',
          content: 'IPE School применяет современные технические и организационные меры для защиты ваших персональных данных. Все данные хранятся на зашифрованных серверах и в защищенных системах. Только уполномоченные сотрудники имеют доступ к данным.',
        },
        {
          title: '5. Третьи лица',
          content: 'Ваши персональные данные не продаются и не передаются третьим лицам без вашего согласия. Обмен данными с партнерскими организациями возможен только в случаях, необходимых для предоставления услуг (платежные системы, SMS-уведомления).',
        },
        {
          title: '6. Ваши права',
          content: 'Вы имеете следующие права:\n\n• Просмотр и редактирование своих данных\n• Отправка запроса на удаление данных\n• Отказ от маркетинговых уведомлений\n• Возражение против использования данных\n\nДля использования этих прав свяжитесь с нами: info@ipeschool.uz',
        },
        {
          title: '7. Cookies и технологии отслеживания',
          content: 'Наш веб-сайт использует cookies для улучшения пользовательского опыта. Вы можете отключить cookies в настройках браузера, но это может повлиять на работу некоторых функций.',
        },
        {
          title: '8. Изменения',
          content: 'IPE School оставляет за собой право изменять настоящую Политику конфиденциальности в любое время. Все изменения будут опубликованы на этой странице.',
        },
        {
          title: '9. Контакты',
          content: 'Если у вас есть вопросы по Политике конфиденциальности, свяжитесь с нами:\n\nEmail: info@ipeschool.uz\nТелефон: +998 78 113 07 74\nАдрес: Ташкент, Узбекистан',
        },
      ],
    },
    en: {
      title: 'Privacy Policy',
      subtitle: 'IPE School ensures the security of your personal data',
      lastUpdated: 'Last updated: June 1, 2026',
      sections: [
        {
          title: '1. General Information',
          content: 'IPE School (Inter Prof Education School) is committed to protecting the personal data of its clients and students. This Privacy Policy explains how your personal data is collected, used, and protected.',
        },
        {
          title: '2. Collected Data',
          content: 'We collect the following personal data:\n\n• Full name and surname\n• Phone number and email address\n• Selected courses and learning history\n• Website usage data (cookies)\n• Payment information (through secure systems)',
        },
        {
          title: '3. Data Usage',
          content: 'Your data is used for the following purposes:\n\n• Providing educational services\n• Course registration and management\n• Communication with students\n• Service improvement and analysis\n• Marketing and news distribution (with your permission)',
        },
        {
          title: '4. Data Security',
          content: 'IPE School applies modern technical and organizational measures to protect your personal data. All data is stored on encrypted servers and secure systems. Only authorized employees have access to the data.',
        },
        {
          title: '5. Third Parties',
          content: 'Your personal data is not sold or transferred to third parties without your consent. Data exchange with partner organizations is only possible in cases necessary for service provision (payment systems, SMS notifications).',
        },
        {
          title: '6. Your Rights',
          content: 'You have the following rights:\n\n• View and edit your data\n• Submit a data deletion request\n• Opt out of marketing notifications\n• Object to data usage\n\nTo exercise these rights, contact us: info@ipeschool.uz',
        },
        {
          title: '7. Cookies and Tracking Technologies',
          content: 'Our website uses cookies to improve user experience. You can disable cookies in your browser settings, but this may affect the operation of some functions.',
        },
        {
          title: '8. Changes',
          content: 'IPE School reserves the right to change this Privacy Policy at any time. All changes will be published on this page.',
        },
        {
          title: '9. Contact',
          content: 'If you have questions about the Privacy Policy, contact us:\n\nEmail: info@ipeschool.uz\nPhone: +998 78 113 07 74\nAddress: Tashkent, Uzbekistan',
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {currentContent.title}
            </h1>
            <p className="text-blue-200/80 text-lg">{currentContent.subtitle}</p>
            <p className="text-blue-300/60 text-sm mt-4">{currentContent.lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {currentContent.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-10 bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
