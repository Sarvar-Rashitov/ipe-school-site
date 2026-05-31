'use client';

import { motion } from 'framer-motion';
import { Course } from '@/lib/courses-data';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Clock, Award } from 'lucide-react';

export function CourseDetailHero({ course }: { course: Course }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <div 
              className="inline-block px-4 py-2 rounded-full text-white mb-6 font-semibold"
              style={{ backgroundColor: course.color }}
            >
              {course.level}
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
              {course.title}
            </h1>

            <p className="text-2xl text-muted-foreground mb-6">
              {course.subtitle}
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              {course.description}
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="text-primary" size={24} />
                <div>
                  <p className="font-semibold">Duration</p>
                  <p className="text-muted-foreground">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-primary" size={24} />
                <div>
                  <p className="font-semibold">Students</p>
                  <p className="text-muted-foreground">{course.students}+</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-primary" size={24} />
                <div>
                  <p className="font-semibold">Certificate</p>
                  <p className="text-muted-foreground">Upon completion</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary" size={24} />
                <div>
                  <p className="font-semibold">Support</p>
                  <p className="text-muted-foreground">24/7 available</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="gap-2" style={{ backgroundColor: course.color }}>
                Enroll Now - ${course.price}
              </Button>
              <Button size="lg" variant="outline">
                Request Free Lesson
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div 
              className="aspect-square rounded-3xl p-8 text-white relative overflow-hidden"
              style={{ backgroundColor: course.color }}
            >
              <div className="absolute inset-0 opacity-10" style={{ backgroundColor: course.accentColor }} />
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <div className="text-6xl mb-6">{course.level}</div>
                <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
                <p className="text-lg opacity-90">Professional-grade training</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
