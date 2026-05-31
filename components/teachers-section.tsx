'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, MessageCircle } from 'lucide-react';

export function TeachersSection() {
  const teachers = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      position: 'Lead IELTS Instructor',
      experience: '12+ years',
      specialty: 'IELTS Preparation, Speaking Skills',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'James Peterson',
      position: 'Advanced English Teacher',
      experience: '15+ years',
      specialty: 'Business English, Advanced Grammar',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Emma Thompson',
      position: 'Conversational English Specialist',
      experience: '8+ years',
      specialty: 'Conversation Club, Fluency Training',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Michael Chen',
      position: 'Grammar & Writing Expert',
      experience: '11+ years',
      specialty: 'Writing Skills, Grammar Mastery',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section id="teachers" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Expert Teachers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from experienced and certified English educators with international backgrounds
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold">{teacher.position}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Experience:</span> {teacher.experience}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Specialty:</span> {teacher.specialty}
                  </p>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <button className="flex-1 h-9 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-lg transition-colors font-medium text-sm">
                    Profile
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center border border-border hover:bg-primary hover:text-white hover:border-primary rounded-lg transition-colors">
                    <MessageCircle size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
