import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { X, Loader2, CheckCircle2, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { toast } from 'sonner';
import { useLanguage } from '../../lib/LanguageContext';
import { sendToTelegram } from '../../lib/telegram';
import { courses } from '../../data/courses';

interface FreeLessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

const formSchema = z.object({
  fullName: z.string()
    .min(2, 'Name too short')
    .max(100, 'Name too long')
    .trim(),
  phone: z.string()
    .min(5, 'Invalid phone number')
    .max(20, 'Phone too long')
    .regex(/^\+?[\d\s\-()]+$/, 'Invalid phone format'),
  telegramUsername: z.string().optional().nullable(),
  course: z.string().min(1, 'Select a course'),
  preferredDay: z.string().min(1, 'Select a day'),
});

type FormData = z.infer<typeof formSchema>;

const LOCATION_IFRAME = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76720.33926301669!2d69.35066581955819!3d41.23203726740765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5f866082021f%3A0x95f3ea18fc060c59!2zSVBFIFNDSE9PTCAtINCj0YfQtdCx0L3Ri9C5INGG0LXQvdGC0YAg0LIg0YLQsNGI0LrQtdC90YLQtQ!5e0!3m2!1sru!2s!4v1780241544229!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

export function FreeLessonModal({ isOpen, onClose, preselectedCourse }: FreeLessonModalProps) {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      course: preselectedCourse || '',
      preferredDay: '',
    },
  });

  const selectedCourse = watch('course');
  const preferredDay = watch('preferredDay');

  const weekDays = [
    { value: 'monday', label: { uz: 'Dushanba', ru: 'Понедельник', en: 'Monday' } },
    { value: 'tuesday', label: { uz: 'Seshanba', ru: 'Вторник', en: 'Tuesday' } },
    { value: 'wednesday', label: { uz: 'Chorshanba', ru: 'Среда', en: 'Wednesday' } },
    { value: 'thursday', label: { uz: 'Payshanba', ru: 'Четверг', en: 'Thursday' } },
    { value: 'friday', label: { uz: 'Juma', ru: 'Пятница', en: 'Friday' } },
    { value: 'saturday', label: { uz: 'Shanba', ru: 'Суббота', en: 'Saturday' } },
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Validate form data before sending
      console.log('📝 Form data received:', {
        fullName: data.fullName,
        phone: data.phone,
        course: data.course,
        preferredDay: data.preferredDay,
      });

      // Check if required fields are filled
      if (!data.fullName?.trim() || !data.phone?.trim()) {
        toast.error(t.errorMessage, {
          description: language === 'uz' ? 'Ism va telefon raqamini kiriting!' : language === 'ru' ? 'Введите имя и номер телефона!' : 'Please enter name and phone!',
        });
        setIsSubmitting(false);
        return;
      }

      // Telegram bot ga yuborish
      const message = `
🎓 **BEPUL DARSGA YOZILISH**

👤 **Ism:** ${data.fullName}
📱 **Telefon:** ${data.phone}
${data.telegramUsername ? `📲 **Telegram:** @${data.telegramUsername}\n` : ''}
📚 **Kurs:** ${data.course}
📅 **Afzal kun:** ${weekDays.find(d => d.value === data.preferredDay)?.label[language] || data.preferredDay}

⏰ **Vaqt:** ${new Date().toLocaleString()}


      `.trim();

      const success = await sendToTelegram({
        fullName: data.fullName,
        phone: data.phone,
        message,
        type: 'free-lesson',
      });

      if (success) {
        setIsSubmitted(true);
        setShowMap(true);
        toast.success(t.successMessage, {
          description: language === 'uz' ? 'Tez orada siz bilan bog\'lanamiz!' : language === 'ru' ? 'Мы свяжемся с вами в ближайшее время!' : 'We will contact you soon!',
        });
      } else {
        console.error('❌ Form submission failed - Telegram API did not respond successfully');
        toast.error(t.errorMessage, {
          description: language === 'uz' 
            ? 'Xabari yuborishda muammo bo\'ldi. Administrator bilan bog\'laning yoki qaytadan urinib ko\'ring.' 
            : language === 'ru' 
            ? 'Возникла проблема при отправке сообщения. Свяжитесь с администратором или повторите попытку.' 
            : 'Failed to send message. Please contact admin or try again.',
        });
      }
    } catch (error) {
      console.error('❌ Form submission error:', {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : 'No stack trace',
      });
      toast.error(t.errorMessage, {
        description: language === 'uz' ? 'Texnik xato yuz berdi. Qaytadan urinib ko\'ring.' : language === 'ru' ? 'Произошла техническая ошибка. Попробуйте снова.' : 'Technical error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    reset();
    setIsSubmitted(false);
    setShowMap(false);
    onClose();
  };

  const handleSaveLocation = () => {
    // Telegram bot ga manzilni saqlash uchun xabar
    const locationMessage = `
📍 **MANZIL MA'LUMOTI**

🏫 IPE SCHOOL - O'quv markazi
📌 Toshkent, O'zbekiston

🗺 Google Maps:
https://maps.google.com/?q=IPE+SCHOOL+Toshkent

${LOCATION_IFRAME}
    `.trim();

    sendToTelegram({
      fullName: 'Location Info',
      phone: '',
      message: locationMessage,
      type: 'contact',
    });

    toast.success(
      language === 'uz' ? 'Manzil saqlandi!' : language === 'ru' ? 'Адрес сохранен!' : 'Location saved!',
      {
        description: language === 'uz' ? 'Telegram botga yuborildi' : language === 'ru' ? 'Отправлено в Telegram бот' : 'Sent to Telegram bot',
      }
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.freeLessonTitle}
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-6 mt-4"
            >
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">{t.fullName}</Label>
                <Input
                  id="fullName"
                  placeholder={language === 'uz' ? 'Ism Familiya' : language === 'ru' ? 'Имя Фамилия' : 'Full Name'}
                  {...register('fullName')}
                  className={errors.fullName ? 'border-red-500' : ''}
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">{t.phone}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  {...register('phone')}
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              {/* Telegram Username */}
              <div className="space-y-2">
                <Label htmlFor="telegramUsername">
                  {language === 'uz' ? 'Telegram username (ixtiyoriy)' : language === 'ru' ? 'Telegram username (необязательно)' : 'Telegram username (optional)'}
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">@</span>
                  <Input
                    id="telegramUsername"
                    placeholder="username"
                    {...register('telegramUsername')}
                    className="pl-8"
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div className="space-y-2">
                <Label htmlFor="course">{t.selectCourse}</Label>
                <Select
                  value={selectedCourse}
                  onValueChange={(value) => setValue('course', value)}
                >
                  <SelectTrigger className={errors.course ? 'border-red-500' : ''}>
                    <SelectValue placeholder={t.selectCourse} />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.title[language]}>
                        {course.title[language]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.course && (
                  <p className="text-sm text-red-500">{errors.course.message}</p>
                )}
              </div>

              {/* Preferred Day */}
              <div className="space-y-2">
                <Label htmlFor="preferredDay">
                  {language === 'uz' ? 'Qaysi kunga yozilmoqchisiz?' : language === 'ru' ? 'На какой день хотите записаться?' : 'Which day would you like to register for?'}
                </Label>
                <Select
                  value={preferredDay}
                  onValueChange={(value) => setValue('preferredDay', value)}
                >
                  <SelectTrigger className={errors.preferredDay ? 'border-red-500' : ''}>
                    <SelectValue placeholder={language === 'uz' ? 'Kunni tanlang' : language === 'ru' ? 'Выберите день' : 'Select day'} />
                  </SelectTrigger>
                  <SelectContent>
                    {weekDays.map((day) => (
                      <SelectItem key={day.value} value={day.value}>
                        {day.label[language]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.preferredDay && (
                  <p className="text-sm text-red-500">{errors.preferredDay.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {t.sending}
                  </>
                ) : (
                  t.send
                )}
              </Button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="py-8"
            >
              {/* Success Message */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {language === 'uz' ? 'Muvaffaqiyatli yuborildi!' : language === 'ru' ? 'Успешно отправлено!' : 'Successfully submitted!'}
                </h3>
                <p className="text-gray-600">
                  {language === 'uz'
                    ? 'Tez orada siz bilan bog\'lanamiz va dars vaqtini belgilaymiz'
                    : language === 'ru'
                    ? 'Мы свяжемся с вами в ближайшее время и назначим время урока'
                    : 'We will contact you soon and schedule your lesson'}
                </p>
              </div>

              {/* Location Map */}
              {showMap && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900">
                        {language === 'uz' ? 'Bizning manzil' : language === 'ru' ? 'Наш адрес' : 'Our Location'}
                      </h4>
                    </div>
                    <Button
                      onClick={handleSaveLocation}
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      {language === 'uz' ? 'Saqlash' : language === 'ru' ? 'Сохранить' : 'Save'}
                    </Button>
                  </div>

                  <div className="rounded-xl overflow-hidden border-2 border-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76720.33926301669!2d69.35066581955819!3d41.23203726740765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5f866082021f%3A0x95f3ea18fc060c59!2zSVBFIFNDSE9PTCAtINCj0YfQtdCx0L3Ri9C5INGG0LXQvdGC0YAg0LIg0YLQsNGI0LrQtdC90YLQtQ!5e0!3m2!1sru!2s!4v1780241544229!5m2!1sru!2s"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="IPE School Location"
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong className="text-gray-900">IPE SCHOOL</strong><br />
                      {language === 'uz' ? 'Toshkent, O\'zbekiston' : language === 'ru' ? 'Ташкент, Узбекистан' : 'Tashkent, Uzbekistan'}
                    </p>
                  </div>
                </div>
              )}

              {/* Close Button */}
              <Button
                onClick={handleClose}
                variant="outline"
                className="w-full mt-6"
                size="lg"
              >
                {language === 'uz' ? 'Yopish' : language === 'ru' ? 'Закрыть' : 'Close'}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
