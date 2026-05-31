'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingActions } from '@/components/floating-actions';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MessageCircle, Award, Globe, Users, Target, Heart, Lightbulb, Shield, Handshake } from 'lucide-react';

const team = [
  {
    name: 'Dildora Suleymanova',
    role: 'Founder and CEO',
    expertise: 'Educational business',
    bio: '',
    photo: '',
    linkedinUrl: 'https://www.linkedin.com/in/dildora-suleymanova',
    telegramUrl: 'https://t.me/dildora_s',
    icon: '👩‍🏫',
  },
  {
    name: 'Michael Brown',
    role: 'Conversation Coach',
    expertise: 'Fluency & Speaking',
    bio: 'Native English speaker dedicated to helping students improve their conversational skills.',
    photo: '',
    linkedinUrl: 'https://www.linkedin.com/in/michael-brown',
    telegramUrl: '',
    icon: '🎤',
  },
  {
    name: 'Emma Wilson',
    role: 'Business English',
    expertise: 'Professional Communication',
    bio: 'Expert in teaching business English and corporate communication strategies.',
    photo: '',
    linkedinUrl: 'https://www.linkedin.com/in/emma-wilson',
    telegramUrl: '',
    icon: '💼',
  },
  {
    name: 'David Smith',
    role: 'IELTS Examiner',
    expertise: 'Test Preparation',
    bio: 'Former IELTS examiner with 12 years of experience preparing students for exams.',
    photo: '',
    linkedinUrl: 'https://www.linkedin.com/in/david-smith',
    telegramUrl: '',
    icon: '📊',
  },
  {
    name: 'Alex Chen',
    role: 'Python Developer',
    expertise: 'Backend Development',
    bio: 'Full-stack developer with 7 years of experience teaching Python programming.',
    photo: '',
    linkedinUrl: 'https://www.linkedin.com/in/alex-chen',
    telegramUrl: '',
    icon: '🐍',
  },
  {
    name: 'James Miller',
    role: 'Full-stack Developer',
    expertise: 'Web Development',
    bio: 'Expert in Django, FastAPI, and modern web development practices.',
    photo: '',
    linkedinUrl: 'https://www.linkedin.com/in/james-miller',
    telegramUrl: '',
    icon: '🌐',
  },
  {
    name: 'Dr. Raj Kumar',
    role: 'AI/ML Specialist',
    expertise: 'Artificial Intelligence',
    bio: 'Research scientist with expertise in NLP, LLMs, and machine learning applications.',
    photo: '',
    linkedinUrl: 'https://www.linkedin.com/in/dr-raj-kumar',
    telegramUrl: '',
    icon: '🤖',
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Frontend Expert',
    expertise: 'React & Next.js',
    bio: 'Passionate about teaching modern frontend development with React and Next.js.',
    photo: '',
    linkedinUrl: 'https://www.linkedin.com/in/lisa-rodriguez',
    telegramUrl: '',
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

      {/* Mission & Values */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are dedicated to transforming lives through world-class education, empowering every student to reach their full potential.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, high-quality education that bridges the gap between potential and achievement. 
                We equip students with the knowledge, skills, and confidence they need to excel in English, IT, 
                SAT, Mathematics, and Russian — preparing them for global opportunities and lifelong success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading educational center in Central Asia, recognized for our innovative teaching 
                methods, exceptional student outcomes, and commitment to nurturing the next generation of 
                global leaders and innovators.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-3">Core Values</h3>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: 'Innovation', desc: 'Embracing modern teaching methods and technology to deliver the best learning experience.' },
              { icon: Shield, title: 'Integrity', desc: 'Maintaining the highest standards of honesty, transparency, and academic excellence.' },
              { icon: Users, title: 'Community', desc: 'Building a supportive, inclusive environment where students and teachers thrive together.' },
              { icon: Handshake, title: 'Commitment', desc: 'Dedicated to every student\'s success with personalized attention and continuous support.' },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-border text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
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
                  {/* Avatar - clickable to social profile */}
                  <a
                    href={member.linkedinUrl || member.telegramUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-40 bg-gradient-to-br from-primary to-secondary relative overflow-hidden group-hover:scale-110 transition-transform"
                  >
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-5xl">
                        {member.icon}
                      </div>
                    )}
                  </a>

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
                      <a
                        href={`mailto:${member.name.toLowerCase().replace(/\s+/g, '.')}@ipeschool.com`}
                        className="flex-1 py-2 rounded hover:bg-primary/10 transition-colors flex items-center justify-center"
                      >
                        <Mail size={18} className="text-muted-foreground hover:text-primary" />
                      </a>
                      {member.telegramUrl && (
                        <a
                          href={member.telegramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 rounded hover:bg-primary/10 transition-colors flex items-center justify-center"
                        >
                          <MessageCircle size={18} className="text-muted-foreground hover:text-primary" />
                        </a>
                      )}
                      {member.linkedinUrl && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 rounded hover:bg-primary/10 transition-colors flex items-center justify-center"
                        >
                          <Linkedin size={18} className="text-muted-foreground hover:text-primary" />
                        </a>
                      )}
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
