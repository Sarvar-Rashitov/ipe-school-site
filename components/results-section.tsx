'use client';

import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Target } from 'lucide-react';

export function ResultsSection() {
  const achievements = [
    {
      icon: Award,
      title: 'IELTS Success',
      stat: '2,400+',
      description: 'Students achieved target IELTS bands',
    },
    {
      icon: Users,
      title: 'University Admissions',
      stat: '850+',
      description: 'Students admitted to prestigious universities',
    },
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      stat: '1,200+',
      description: 'Students promoted or hired with improved English',
    },
    {
      icon: Target,
      title: 'Language Proficiency',
      stat: '98%',
      description: 'Achievement of student learning goals',
    },
  ];

  const results = [
    {
      category: 'CEFR Levels',
      items: ['A1 to A2', 'B1 to B2', 'B2 to C1', 'C1 to C2'],
    },
    {
      category: 'IELTS Bands',
      items: ['Band 5.0 - 5.5', 'Band 6.0 - 6.5', 'Band 7.0 - 7.5', 'Band 8.0+'],
    },
    {
      category: 'Professional Goals',
      items: ['Business Communication', 'Presentation Skills', 'Interview Prep', 'Job Promotion'],
    },
  ];

  return (
    <section id="results" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Student Results & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our students consistently achieve their goals and exceed expectations
          </p>
        </motion.div>

        {/* Main Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-muted/50 border border-border rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{achievement.title}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{achievement.stat}</div>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.category}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-muted/50 border border-border rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">{result.category}</h3>
              <div className="space-y-3">
                {result.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="text-lg md:text-xl text-foreground mb-4 leading-relaxed">
            &quot;IPE School transformed my English skills completely. In just 3 months, I went from B1 to B2 level and passed my IELTS exam with 7.0 band. The teachers are incredibly supportive and the curriculum is world-class.&quot;
          </p>
          <p className="font-semibold text-primary">Aysha Rahman • IELTS 7.0 • University of Manchester</p>
        </motion.div>
      </div>
    </section>
  );
}
