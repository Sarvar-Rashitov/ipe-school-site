export interface FAQ {
  question: {
    uz: string;
    ru: string;
    en: string;
  };
  answer: {
    uz: string;
    ru: string;
    en: string;
  };
}

export const faqs: FAQ[] = [
  {
    question: {
      uz: "Darslar qanday tarzda o'tadi?",
      ru: 'Как проходят занятия?',
      en: 'How are the classes conducted?',
    },
    answer: {
      uz: "Darslar haftada 3 marta, har bir dars 90 daqiqa davom etadi. Offline va online formatda o'qish imkoniyati mavjud.",
      ru: 'Занятия проходят 3 раза в неделю, каждый урок длится 90 минут. Доступны офлайн и онлайн форматы обучения.',
      en: 'Classes are held 3 times a week, each lesson lasts 90 minutes. Both offline and online learning formats are available.',
    },
  },
  {
    question: {
      uz: "To'lov qanday amalga oshiriladi?",
      ru: 'Как осуществляется оплата?',
      en: 'How is payment made?',
    },
    answer: {
      uz: "To'lovni naqd, plastik karta yoki bank o'tkazmasi orqali amalga oshirishingiz mumkin. Oylik to'lov tizimi mavjud.",
      ru: 'Оплату можно произвести наличными, банковской картой или банковским переводом. Доступна ежемесячная система оплаты.',
      en: 'Payment can be made in cash, by bank card or bank transfer. Monthly payment system is available.',
    },
  },
  {
    question: {
      uz: "Guruhlar nechta kishidan iborat?",
      ru: 'Из скольких человек состоят группы?',
      en: 'How many people are in groups?',
    },
    answer: {
      uz: 'Guruhlarimiz 6-8 kishidan iborat. Bu har bir talabaga individual e\'tibor qaratish imkonini beradi.',
      ru: 'Наши группы состоят из 6-8 человек. Это позволяет уделять индивидуальное внимание каждому студенту.',
      en: 'Our groups consist of 6-8 people. This allows individual attention to each student.',
    },
  },
  {
    question: {
      uz: 'Sertifikat beriladimi?',
      ru: 'Выдается ли сертификат?',
      en: 'Is a certificate provided?',
    },
    answer: {
      uz: 'Ha, kurs yakunida barcha talabalarga IPE School sertifikati beriladi. IELTS guruhlarida imtihon natijasi ham qayd etiladi.',
      ru: 'Да, по окончании курса всем студентам выдается сертификат IPE School. В группах IELTS также отмечается результат экзамена.',
      en: 'Yes, upon completion of the course, all students receive an IPE School certificate. IELTS groups also record exam results.',
    },
  },
  {
    question: {
      uz: "Bepul sinov darsiga qanday yozilish mumkin?",
      ru: 'Как записаться на бесплатный пробный урок?',
      en: 'How to register for a free trial lesson?',
    },
    answer: {
      uz: "Saytdagi 'Bepul darsga yozilish' tugmasini bosing yoki bizga qo'ng'iroq qiling. Sizga qulay vaqtni tanlaymiz.",
      ru: "Нажмите кнопку 'Записаться на бесплатный урок' на сайте или позвоните нам. Мы подберем удобное для вас время.",
      en: "Click the 'Register for Free Lesson' button on the website or call us. We will choose a convenient time for you.",
    },
  },
];
