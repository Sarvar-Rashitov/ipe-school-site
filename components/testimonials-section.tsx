'use client';

import { motion } from 'framer-motion';
import { YouTubeShortsGrid } from '@/components/youtube-shorts-grid';

export function TestimonialsSection() {
  const testimonialVideos = [
    { id: '1', url: 'https://youtube.com/shorts/YWyPlHCHRPk' },
    { id: '2', url: 'https://youtube.com/shorts/GOYJpnsq5ls' },
    { id: '3', url: 'https://youtube.com/shorts/83bN5ECyLfk' },
    { id: '4', url: 'https://youtube.com/shorts/VTDVTbA92xU' },
    { id: '5', url: 'https://youtube.com/shorts/BTKaDFzehxw' },
    { id: '6', url: 'https://youtube.com/shorts/0x46JdQJcS8' },
    { id: '7', url: 'https://youtube.com/shorts/ZeqRBSfNQWA' },
    { id: '8', url: 'https://youtube.com/shorts/GBmBgas0sr0' },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fikr va Mulohazalar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O'quvchilarimiz va ularning muvaffaqiyat hikoyalari
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <YouTubeShortsGrid videos={testimonialVideos} />
        </motion.div>
      </div>
    </section>
  );
}
