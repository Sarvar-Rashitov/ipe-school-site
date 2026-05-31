'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingActions } from '@/components/floating-actions';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <main>
      <Header />
      
      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with IPE School. We're here to help!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Info & Map */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+998 (71) 200-50-60</p>
                    <p className="text-muted-foreground">+998 (99) 123-45-67</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@ipeschool.uz</p>
                    <p className="text-muted-foreground">support@ipeschool.uz</p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Tashkent, Uzbekistan<br />
                      Central Education Center
                    </p>
                  </div>
                </motion.div>

                {/* Telegram */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telegram</h3>
                    <a href="https://t.me/ipeschool" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      @ipeschool
                    </a>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Working Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Sat: 10:00 - 16:00</p>
                  </div>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3">
                <Button size="lg" className="w-full">
                  Call Us Now
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  Send Message on Telegram
                </Button>
              </div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg h-[500px] md:h-[600px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76720.33926301669!2d69.35066581955819!3d41.23203726740765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5f866082021f%3A0x95f3ea18fc060c59!2zSVBFIFNDSE9PTCAtINCj0YfQtdCx0L3Ri9C5INGG0LXQvdGC0YAg0LIg0YLQsNGI0LrQtdC90YLQtQ!5e0!3m2!1sru!2s!4v1780241544229!5m2!1sru!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'How do I schedule a free lesson?',
                a: 'Visit our Free Lesson page and fill out the form. Our team will contact you within 24 hours to schedule.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept bank transfers, Payme, Click, and other popular payment systems in Uzbekistan.'
              },
              {
                q: 'Can I switch courses after enrollment?',
                a: 'Yes! You can switch to a different course or level within the first week of enrollment.'
              },
              {
                q: 'Do you offer corporate training?',
                a: 'Yes, we offer customized corporate training programs. Please contact us for details.'
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
