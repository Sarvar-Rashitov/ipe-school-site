'use client';

import { motion } from 'framer-motion';
import { Course } from '@/lib/courses-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Linkedin } from 'lucide-react';

export function CourseTeachers({ course }: { course: Course }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-balance">Expert Instructors</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Learn from industry professionals with years of experience
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.teachers.map((teacher, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all overflow-hidden group">
                  {/* Avatar Placeholder */}
                  <div 
                    className="h-40 bg-gradient-to-br flex items-center justify-center text-white text-5xl font-bold"
                    style={{ backgroundImage: `linear-gradient(135deg, ${course.color} 0%, ${course.accentColor} 100%)` }}
                  >
                    {teacher.name.charAt(0)}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg">{teacher.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {teacher.title}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {teacher.bio}
                    </p>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 gap-2">
                        <MessageCircle size={16} />
                        Chat
                      </Button>
                      <Button size="sm" className="flex-1 gap-2" style={{ backgroundColor: course.color }}>
                        <Linkedin size={16} />
                        Profile
                      </Button>
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
