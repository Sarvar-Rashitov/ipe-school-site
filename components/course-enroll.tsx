'use client';

import { motion } from 'framer-motion';
import { Course } from '@/lib/courses-data';
import { Button } from '@/components/ui/button';
import { Check, MessageCircle, Phone } from 'lucide-react';

export function CourseEnroll({ course }: { course: Course }) {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Start Learning?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join {course.students}+ students who have transformed their careers with our {course.title} course
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              'Lifetime access to course materials',
              'Certificate upon completion',
              '24/7 student support'
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <Check size={24} className="text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Pricing & CTA */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-primary/20 rounded-2xl p-8 mb-8"
          >
            <p className="text-muted-foreground mb-2">Course Price</p>
            <div className="text-5xl font-bold mb-8">
              <span style={{ color: course.color }}>${course.price}</span>
              <span className="text-lg text-muted-foreground">/one-time</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gap-2 text-lg px-8" 
                style={{ backgroundColor: course.color }}
              >
                Enroll Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 text-lg px-8"
              >
                <MessageCircle size={20} />
                Ask Questions
              </Button>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone size={20} />
              <span>+1 (234) 567-890</span>
            </a>
            <div className="hidden sm:block text-border">|</div>
            <a href="https://t.me/ipeschool" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <MessageCircle size={20} />
              <span>Telegram: @ipeschool</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
