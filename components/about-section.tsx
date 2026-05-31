'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Users, BookOpen, Award } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Users,
      title: 'Expert Teachers',
      description: 'Certified instructors with years of international experience'
    },
    {
      icon: BookOpen,
      title: 'Modern Curriculum',
      description: 'Up-to-date teaching methods aligned with global standards'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '98% success rate with documented student achievements'
    },
    {
      icon: CheckCircle,
      title: 'Flexible Learning',
      description: 'Online and offline classes tailored to your schedule'
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About IPE School</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing world-class education that transforms lives and opens doors to endless opportunities globally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {['Global standard curriculum', 'Personalized learning paths', '24/7 student support', 'Career guidance included'].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-muted/50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <Icon size={32} className="text-primary mb-3" />
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold">5000+</p>
              <p className="text-sm mt-2 opacity-90">Happy Students</p>
            </div>
            <div>
              <p className="text-4xl font-bold">150+</p>
              <p className="text-sm mt-2 opacity-90">Expert Teachers</p>
            </div>
            <div>
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm mt-2 opacity-90">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
