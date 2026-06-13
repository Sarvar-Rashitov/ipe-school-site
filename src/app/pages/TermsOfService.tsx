import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function TermsOfService() {
  const { language } = useLanguage();

  const content = {
    uz: {
      title: 'Foydalanish shartlari',
      subtitle: 'IPE School xizmatlari foydalanish qoidalari',
      lastUpdated: 'Oxirgi yangilanish: 2026 yil 1-iyun',
      sections: [
        {
          title: '1. Shartlarni qabul qilish',
          content: 'IPE School veb-saytidan va xizmatlaridan foydalanish orqali siz ushbu Foydalanish shartlarini to\'liq qabul qilasiz. Agar siz ushbu shartlar bilan rozi bo\'lmasangiz, iltimos, xizmatlardan foydalanmang.',
        },
        {
          title: '2. Xizmatlar tavsifi',
          content: 'IPE School quyidagi ta\'lim xizmatlarini taqdim etadi:\n\n• IT dasturlash kurslari (Python, Frontend)\n• Xalqaro imtihonlarga tayyorgarlik (SAT, IELTS)\n• Til kurslari (CEFR, Rus tili)\n• Akademik fanlar (Matematika)\n\nBarcha kurslar professional o\'qituvchilar tomonidan o\'qitiladi va zamonaviy dasturlar asosida tuzilgan.',
        },
        {
          title: '3. Ro\'yxatdan o\'tish va to\'lov',
          content: 'Kurslarga ro\'yxatdan o\'tish uchun:\n\n• Bepul darsga yozilish yoki to\'g\'ridan-to\'g\'ri kursni tanlash\n• Shaxsiy ma\'lumotlarni to\'ldirish\n• Kurs to\'lovini amalga oshirish (bank o\'tkazmasi, naqd yoki plastik karta orqali)\n\nTo\'lovlar qaytarilmaydi, faqat 3 kun ichida kursdagi birinchi dars o\'tkazilmaganda.',
        },
        {
          title: '4. Talaba majburiyatlari',
          content: 'Talaba quyidagilarni ta\'minlashi kerak:\n\n• Darslarga muntazam qatnashish\n• Vazifalarni o\'z vaqtida bajarish\n• O\'qituvchi va boshqa talabalarni hurmat qilish\n• O\'quv materiallaridan shaxsiy maqsadlarda foydalanish (ommaviy tarqatish mumkin emas)\n\nMajburiyatlar buzilganda talaba kursdan chiqarilishi mumkin.',
        },
        {
          title: '5. Intellektual mulk',
          content: 'Barcha o\'quv materiallari, darsliklar, video darslar va boshqa kontent IPE School mulki hisoblanadi. Ularni nusxalash, tarqatish yoki tijorat maqsadlarida foydalanish ta\'qiqlanadi.\n\nTalabalar faqat shaxsiy o\'qish maqsadida materiallardan foydalanishlari mumkin.',
        },
        {
          title: '6. Bekor qilish va qaytarish',
          content: 'Kursni bekor qilish shartlari:\n\n• Kurs boshlanishidan 3 kun oldin: 100% qaytarish\n• Kurs boshlanishidan 1-3 kun oldin: 50% qaytarish\n• Kurs boshlangandan keyin: qaytarish yo\'q\n\nMaxsus holatlar (kasallik, favqulodda vaziyat) alohida ko\'rib chiqiladi.',
        },
        {
          title: '7. Javobgarlik cheklovi',
          content: 'IPE School quyidagi holatlarda javobgar emas:\n\n• Talabaning individual natijalariga kafolat bermaydi\n• Texnik nosozliklar natijasida yuzaga kelgan muammolar\n• Uchinchi tomon xizmatlari (internet, to\'lov tizimlari)\n• Talabaning shaxsiy ehtiyojlariga moslashtirilmagan kurslar',
        },
        {
          title: '8. Shartlarga o\'zgartirishlar',
          content: 'IPE School ushbu Foydalanish shartlarini istalgan vaqtda o\'zgartirish huquqini saqlab qoladi. O\'zgarishlar veb-saytda e\'lon qilinadi. Keyingi foydalanish o\'zgartirilgan shartlarni qabul qilish hisoblanadi.',
        },
        {
          title: '9. Nizolarni hal qilish',
          content: 'Barcha nizolar muzokaralar yo\'li bilan hal qilinadi. Agar kelishuvga erishilmasa, nizolar O\'zbekiston Respublikasi qonunchiligiga muvofiq hal etiladi.',
        },
        {
          title: '10. Aloqa ma\'lumotlari',
          content: 'Savollar va takliflar uchun biz bilan bog\'laning:\n\nEmail: info@ipeschool.uz\nTelefon: +998 78 113 07 74\nManzil: Toshkent, O\'zbekiston\nTelegram: @ipeschool',
        },
      ],
    },
    ru: {
      title: 'Условия использования',
      subtitle: 'Правила использования услуг IPE School',
      lastUpdated: 'Последнее обновление: 1 июня 2026 года',
      sections: [
        {
          title: '1. Принятие условий',
          content: 'Используя веб-сайт и услуги IPE School, вы полностью принимаете настоящие Условия использования. Если вы не согласны с этими условиями, пожалуйста, не используйте услуги.',
        },
        {
          title: '2. Описание услуг',
          content: 'IPE School предоставляет следующие образовательные услуги:\n\n• Курсы IT-программирования (Python, Frontend)\n• Подготовка к международным экзаменам (SAT, IELTS)\n• Языковые курсы (CEFR, Русский язык)\n• Академические предметы (Математика)\n\nВсе курсы преподаются профессиональными преподавателями и построены на основе современных программ.',
        },
        {
          title: '3. Регистрация и оплата',
          content: 'Для регистрации на курсы:\n\n• Запись на бесплатный урок или выбор курса напрямую\n• Заполнение персональных данных\n• Оплата курса (банковский перевод, наличные или банковская карта)\n\nОплата не возвращается, за исключением случаев, когда первое занятие не проведено в течение 3 дней.',
        },
        {
          title: '4. Обязанности студента',
          content: 'Студент должен обеспечить:\n\n• Регулярное посещение занятий\n• Своевременное выполнение заданий\n• Уважение к преподавателю и другим студентам\n• Использование учебных материалов в личных целях (массовое распространение запрещено)\n\nПри нарушении обязанностей студент может быть отчислен с курса.',
        },
        {
          title: '5. Интеллектуальная собственность',
          content: 'Все учебные материалы, учебники, видеоуроки и другой контент являются собственностью IPE School. Копирование, распространение или коммерческое использование запрещено.\n\nСтуденты могут использовать материалы только для личного обучения.',
        },
        {
          title: '6. Отмена и возврат',
          content: 'Условия отмены курса:\n\n• За 3 дня до начала курса: 100% возврат\n• За 1-3 дня до начала курса: 50% возврат\n• После начала курса: возврат отсутствует\n\nОсобые случаи (болезнь, чрезвычайная ситуация) рассматриваются отдельно.',
        },
        {
          title: '7. Ограничение ответственности',
          content: 'IPE School не несет ответственности в следующих случаях:\n\n• Не гарантирует индивидуальные результаты студента\n• Проблемы, возникшие в результате технических сбоев\n• Услуги третьих лиц (интернет, платежные системы)\n• Курсы, не адаптированные к личным потребностям студента',
        },
        {
          title: '8. Изменения в условиях',
          content: 'IPE School оставляет за собой право изменять настоящие Условия использования в любое время. Изменения будут опубликованы на веб-сайте. Дальнейшее использование считается принятием измененных условий.',
        },
        {
          title: '9. Разрешение споров',
          content: 'Все споры разрешаются путем переговоров. Если соглашение не достигнуто, споры разрешаются в соответствии с законодательством Республики Узбекистан.',
        },
        {
          title: '10. Контактная информация',
          content: 'Для вопросов и предложений свяжитесь с нами:\n\nEmail: info@ipeschool.uz\nТелефон: +998 78 113 07 74\nАдрес: Ташкент, Узбекистан\nTelegram: @ipeschool',
        },
      ],
    },
    en: {
      title: 'Terms of Service',
      subtitle: 'Rules for using IPE School services',
      lastUpdated: 'Last updated: June 1, 2026',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: 'By using the IPE School website and services, you fully accept these Terms of Service. If you do not agree with these terms, please do not use the services.',
        },
        {
          title: '2. Service Description',
          content: 'IPE School provides the following educational services:\n\n• IT programming courses (Python, Frontend)\n• International exam preparation (SAT, IELTS)\n• Language courses (CEFR, Russian Language)\n• Academic subjects (Mathematics)\n\nAll courses are taught by professional teachers and based on modern programs.',
        },
        {
          title: '3. Registration and Payment',
          content: 'To register for courses:\n\n• Register for a free lesson or choose a course directly\n• Fill in personal information\n• Pay for the course (bank transfer, cash or credit card)\n\nPayments are non-refundable, except when the first class is not held within 3 days.',
        },
        {
          title: '4. Student Obligations',
          content: 'Students must ensure:\n\n• Regular class attendance\n• Timely completion of assignments\n• Respect for teachers and other students\n• Use of learning materials for personal purposes (mass distribution prohibited)\n\nViolation of obligations may result in removal from the course.',
        },
        {
          title: '5. Intellectual Property',
          content: 'All learning materials, textbooks, video lessons and other content are the property of IPE School. Copying, distribution or commercial use is prohibited.\n\nStudents may only use materials for personal learning.',
        },
        {
          title: '6. Cancellation and Refund',
          content: 'Course cancellation terms:\n\n• 3 days before course start: 100% refund\n• 1-3 days before course start: 50% refund\n• After course start: no refund\n\nSpecial cases (illness, emergency) are considered separately.',
        },
        {
          title: '7. Limitation of Liability',
          content: 'IPE School is not responsible in the following cases:\n\n• Does not guarantee individual student results\n• Problems arising from technical failures\n• Third party services (internet, payment systems)\n• Courses not adapted to student personal needs',
        },
        {
          title: '8. Changes to Terms',
          content: 'IPE School reserves the right to change these Terms of Service at any time. Changes will be published on the website. Continued use is considered acceptance of the changed terms.',
        },
        {
          title: '9. Dispute Resolution',
          content: 'All disputes are resolved through negotiation. If no agreement is reached, disputes are resolved in accordance with the legislation of the Republic of Uzbekistan.',
        },
        {
          title: '10. Contact Information',
          content: 'For questions and suggestions, contact us:\n\nEmail: info@ipeschool.uz\nPhone: +998 78 113 07 74\nAddress: Tashkent, Uzbekistan\nTelegram: @ipeschool',
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
              <FileText className="w-8 h-8 text-white" />
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

export default TermsOfService;
