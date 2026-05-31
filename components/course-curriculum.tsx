'use client';

import { motion } from 'framer-motion';
import { Course } from '@/lib/courses-data';
import { BookOpen } from 'lucide-react';

export function CourseCurriculum({ course }: { course: Course }) {
  return (
    <section className="py-20 px-4 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-balance">Course Curriculum</h2>
          <p className="text-lg text-muted-foreground mb-12">
            {course.curriculum.title}
          </p>

          <div className="space-y-4">
            {course.curriculum.modules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ backgroundColor: course.color }}
                  >
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                    <p className="text-muted-foreground mb-3">{module.description}</p>
                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: course.color }}>
                      <BookOpen size={16} />
                      {module.lessons} lessons
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br rounded-2xl p-6 text-white" style={{ backgroundImage: `linear-gradient(135deg, ${course.color} 0%, ${course.accentColor} 100%)` }}>
              <p className="text-4xl font-bold mb-2">{course.curriculum.modules.length}</p>
              <p className="text-lg opacity-90">Total Modules</p>
            </div>
            <div className="bg-gradient-to-br rounded-2xl p-6 text-white" style={{ backgroundImage: `linear-gradient(135deg, ${course.accentColor} 0%, ${course.color} 100%)` }}>
              <p className="text-4xl font-bold mb-2">{course.curriculum.modules.reduce((sum, m) => sum + m.lessons, 0)}</p>
              <p className="text-lg opacity-90">Total Lessons</p>
            </div>
            <div className="bg-primary/10 rounded-2xl p-6 border-2 border-primary/20">
              <p className="text-4xl font-bold mb-2 text-primary">{course.duration}</p>
              <p className="text-lg text-foreground">Course Duration</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
