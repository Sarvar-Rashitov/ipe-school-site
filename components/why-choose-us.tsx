'use client';

import { motion } from 'framer-motion';
import { Users, Clock, Award, Globe, Zap, CheckCircle } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: 'Expert Teachers',
      description: 'Native and certified English teachers with years of international experience.',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Classes available morning, afternoon, and evening to fit your lifestyle.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Students achieve their IELTS, CEFR, and professional goals consistently.',
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Curriculum aligned with international English proficiency frameworks.',
    },
    {
      icon: Zap,
      title: 'Modern Teaching',
      description: 'Interactive lessons using latest teaching methodologies and technology.',
    },
    {
      icon: CheckCircle,
      title: 'Small Classes',
      description: 'Limited class sizes for personalized attention and feedback.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Why Choose IPE School?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expert teaching with modern methodology to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
