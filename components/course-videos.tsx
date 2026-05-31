'use client';

import { motion } from 'framer-motion';
import { Course } from '@/lib/courses-data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, Youtube, Instagram } from 'lucide-react';

export function CourseVideos({ course }: { course: Course }) {
  if (!course.videos || course.videos.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-balance">Video Content</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Preview course content and get inspired
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.videos.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="group overflow-hidden hover:shadow-xl transition-all cursor-pointer h-full">
                  {/* Video Thumbnail */}
                  <div className="relative bg-black h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br opacity-40"
                      style={{ backgroundImage: `linear-gradient(135deg, ${course.color} 0%, ${course.accentColor} 100%)` }}
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center justify-center"
                      >
                        <PlayCircle size={64} className="text-white" />
                      </motion.div>
                    </div>

                    {/* Platform Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2">
                      {video.platform === 'youtube' ? (
                        <>
                          <Youtube size={16} className="text-red-600" />
                          <span className="text-xs font-semibold">YouTube</span>
                        </>
                      ) : (
                        <>
                          <Instagram size={16} className="text-pink-600" />
                          <span className="text-xs font-semibold">Instagram</span>
                        </>
                      )}
                    </div>
                  </div>

                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>

                    <a 
                      href={video.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full block"
                    >
                      <Button className="w-full gap-2" style={{ backgroundColor: course.color }}>
                        <PlayCircle size={16} />
                        Watch Now
                      </Button>
                    </a>
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
