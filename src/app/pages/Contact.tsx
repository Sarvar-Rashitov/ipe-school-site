import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Loader2, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { toast } from 'sonner';
import { useLanguage } from '../lib/LanguageContext';
import { sendToTelegram } from '../lib/telegram';

const formSchema = z.object({
  fullName: z.string().min(2, 'Ism kamida 2 ta harf'),
  phone: z.string().min(9, 'Telefon raqamni to\'g\'ri kiriting'),
  message: z.string().min(5, 'Xabar yozing'),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const success = await sendToTelegram({
        fullName: data.fullName,
        phone: data.phone,
        message: data.message,
        type: 'contact',
      });

      if (success) {
        toast.success(t.successMessage, { description: 'Tez orada siz bilan bog\'lanamiz!' });
        reset();
      } else {
        toast.error(t.errorMessage);
      }
    } catch {
      toast.error(t.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'uz' ? 'Manzil' : language === 'ru' ? 'Адрес' : 'Address',
      value: 'IPE SCHOOL\nToshkent, O\'zbekiston',
      link: 'https://maps.google.com/?q=IPE+SCHOOL+Toshkent',
    },
    {
      icon: Phone,
      title: language === 'uz' ? 'Telefon' : language === 'ru' ? 'Телефон' : 'Phone',
      value: '+998 55 588 50 00',
      link: 'tel:+998885885000',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@ipeschool.uz',
      link: 'mailto:info@ipeschool.uz',
    },
    {
      icon: Clock,
      title: language === 'uz' ? 'Ish vaqti' : language === 'ru' ? 'Рабочие часы' : 'Working Hours',
      value: language === 'uz' ? 'Du - Sha: 9:00 - 20:00\nYakshanba: Dam olish' : language === 'ru' ? 'Пн - Сб: 9:00 - 20:00\nВс: Выходной' : 'Mon - Sat: 9:00 - 20:00\nSun: Closed',
    },
  ];

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-28 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {t.contactUs}
            </h1>
            <p className="text-blue-200/80 text-lg">{t.contactSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {language === 'uz' ? 'Xabar yuboring' : language === 'ru' ? 'Отправьте сообщение' : 'Send a message'}
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">{t.fullName}</Label>
                      <Input
                        id="fullName"
                        placeholder={language === 'uz' ? 'Ism Familiya' : language === 'ru' ? 'Имя Фамилия' : 'Full Name'}
                        {...register('fullName')}
                        className={errors.fullName ? 'border-red-500' : ''}
                      />
                      {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.phone}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+998 90 123 45 67"
                        {...register('phone')}
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.message}</Label>
                      <Textarea
                        id="message"
                        placeholder={language === 'uz' ? 'Xabaringizni yozing...' : language === 'ru' ? 'Ваше сообщение...' : 'Your message...'}
                        rows={5}
                        {...register('message')}
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600 h-12"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-5 h-5 mr-2 animate-spin" />{t.sending}</>
                      ) : (
                        <><Send className="w-5 h-5 mr-2" />{t.send}</>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1 text-sm">{info.title}</h3>
                            {info.link ? (
                              <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-pre-line text-sm">
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-gray-600 whitespace-pre-line text-sm">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section id="map" className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76720.33926301669!2d69.35066581955819!3d41.23203726740765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5f866082021f%3A0x95f3ea18fc060c59!2zSVBFIFNDSE9PTCAtINCj0YfQtdCx0L3Ri9C5INGG0LXQvdGC0YAg0LIg0YLQsNGI0LrQtdC90YLQtQ!5e0!3m2!1sru!2s!4v1780241544229!5m2!1sru!2s"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IPE School Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
