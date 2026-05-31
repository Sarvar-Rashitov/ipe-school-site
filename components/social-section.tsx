'use client';

import { motion } from 'framer-motion';
import { Youtube, Instagram, MessageCircle } from 'lucide-react';

export function SocialSection() {
  const socials = [
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/@ipeschool',
      color: 'text-red-600',
      bg: 'bg-red-50 hover:bg-red-100',
      border: 'border-red-200',
      gradient: 'from-red-500 to-red-600',
      stats: 'Subscribe'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/ipeschool',
      color: 'text-pink-600',
      bg: 'bg-pink-50 hover:bg-pink-100',
      border: 'border-pink-200',
      gradient: 'from-pink-500 via-purple-500 to-orange-500',
      stats: 'Follow'
    },
    {
      icon: MessageCircle,
      label: 'Telegram',
      href: 'https://t.me/ipeschool',
      color: 'text-blue-600',
      bg: 'bg-blue-50 hover:bg-blue-100',
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-blue-600',
      stats: 'Join'
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-muted/20 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Follow <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with us on social media for updates, tips, and success stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {socials.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`${social.bg} ${social.border} border-2 rounded-2xl p-8 flex flex-col items-center text-center gap-4 transition-all group shadow-sm hover:shadow-xl`}
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${social.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon size={36} className="text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${social.color}`}>{social.label}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{social.stats}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
