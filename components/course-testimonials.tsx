'use client';

import { motion } from 'framer-motion';
import { Course } from '@/lib/courses-data';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function CourseTestimonials({ course }: { course: Course }) {
  if (!course.testimonials || course.testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-balance">Student Success Stories</h2>
          <p className="text-lg text-muted-foreground mb-12">
            See what our students have achieved
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" className="text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-foreground font-medium mb-6 line-clamp-4">
                      "{testimonial.text}"
                    </p>

                    {/* Achievement Badge */}
                    <div 
                      className="inline-block px-4 py-2 rounded-full text-white font-semibold mb-4"
                      style={{ backgroundColor: course.color }}
                    >
                      {testimonial.achievement}
                    </div>

                    {/* Student Info */}
                    <div className="flex items-center gap-3 mt-6 pt-6 border-t">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: course.accentColor }}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">Student</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
