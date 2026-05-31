'use client';

import { motion } from 'framer-motion';
import { YouTubeShortsGrid } from '@/components/youtube-shorts-grid';

export function ParentsSection() {
  const parentVideos = [
    { id: '1', url: 'https://youtube.com/shorts/i__SBkzRgc8' },
    { id: '2', url: 'https://youtube.com/shorts/knt2c0zaHbw' },
    { id: '3', url: 'https://youtube.com/shorts/r6ZY2RWni-4' },
    { id: '4', url: 'https://youtube.com/shorts/mjtif4N4Xnk' },
    { id: '5', url: 'https://youtube.com/shorts/m9WDTBJ70BQ' },
    { id: '6', url: 'https://youtube.com/shorts/IFQH3dG4POU' },
    { id: '7', url: 'https://youtube.com/shorts/ZlLS6NK-Mi8' },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ota-Onalar uchun Tavziyalar Va Yangiliklar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ota-onalarning foydalanishi uchun maslahatlar va o'quv markazimizdagi yangiliklar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <YouTubeShortsGrid videos={parentVideos} />
        </motion.div>
      </div>
    </section>
  );
}
