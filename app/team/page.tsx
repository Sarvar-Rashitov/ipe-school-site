'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingActions } from '@/components/floating-actions';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MessageCircle, Award, Globe, Users } from 'lucide-react';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'English Specialist',
    expertise: 'CEFR A-Level Expert',
    bio: 'English teacher with 8 years of experience specializing in beginner and intermediate levels.',
    icon: '👩‍🏫',
  },
  {
    name: 'Michael Brown',
    role: 'Conversation Coach',
    expertise: 'Fluency & Speaking',
    bio: 'Native English speaker dedicated to helping students improve their conversational skills.',
    icon: '🎤',
  },
  {
    name: 'Emma Wilson',
    role: 'Business English',
    expertise: 'Professional Communication',
    bio: 'Expert in teaching business English and corporate communication strategies.',
    icon: '💼',
  },
  {
    name: 'David Smith',
    role: 'IELTS Examiner',
    expertise: 'Test Preparation',
    bio: 'Former IELTS examiner with 12 years of experience preparing students for exams.',
    icon: '📊',
  },
  {
    name: 'Alex Chen',
    role: 'Python Developer',
    expertise: 'Backend Development',
    bio: 'Full-stack developer with 7 years of experience teaching Python programming.',
    icon: '🐍',
  },
  {
    name: 'James Miller',
    role: 'Full-stack Developer',
    expertise: 'Web Development',
    bio: 'Expert in Django, FastAPI, and modern web development practices.',
    icon: '🌐',
  },
  {
    name: 'Dr. Raj Kumar',
    role: 'AI/ML Specialist',
    expertise: 'Artificial Intelligence',
    bio: 'Research scientist with expertise in NLP, LLMs, and machine learning applications.',
    icon: '🤖',
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Frontend Expert',
    expertise: 'React & Next.js',
    bio: 'Passionate about teaching modern frontend development with React and Next.js.',
    icon: '⚛️',
  },
];

const stats = [
  { icon: Users, label: 'Team Members', value: '20+' },
  { icon: Award, label: 'Certifications', value: '40+' },
  { icon: Globe, label: 'Languages', value: '6+' },
];

export default function TeamPage() {
  return (
    <main>
      <Header />
      
      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced educators and professionals dedicated to your success
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all h-full group">
                  {/* Avatar */}
                  <div className="h-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                    {member.icon}
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                    <p className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full w-fit mb-4">
                      {member.expertise}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                    {/* Contact Icons */}
                    <div className="flex gap-2 pt-4 border-t">
                      <button className="flex-1 py-2 rounded hover:bg-primary/10 transition-colors flex items-center justify-center">
                        <Mail size={18} className="text-muted-foreground hover:text-primary" />
                      </button>
                      <button className="flex-1 py-2 rounded hover:bg-primary/10 transition-colors flex items-center justify-center">
                        <MessageCircle size={18} className="text-muted-foreground hover:text-primary" />
                      </button>
                      <button className="flex-1 py-2 rounded hover:bg-primary/10 transition-colors flex items-center justify-center">
                        <Linkedin size={18} className="text-muted-foreground hover:text-primary" />
                      </button>
                    </div>
                  </div>
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
