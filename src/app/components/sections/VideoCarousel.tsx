import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Volume2, Play } from 'lucide-react';
import { Dialog, DialogContent } from '../ui/dialog';
import { Button } from '../ui/button';

interface VideoCarouselProps {
  title: string;
  subtitle?: string;
  videoIds: string[];
  autoScroll?: boolean;
}

function YouTubeShort({ videoId, isActive }: { videoId: string; isActive?: boolean }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setShouldLoad(true); observer.disconnect(); }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="flex-shrink-0 relative rounded-2xl overflow-hidden bg-gray-900 border border-white/10" style={{ width: '180px', aspectRatio: '9/16' }}>
      {shouldLoad ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1&modestbranding=1${isActive ? '&autoplay=1&mute=1' : ''}`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`Video ${videoId}`}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <Play className="w-6 h-6 text-white ml-0.5" />
          </div>
        </div>
      )}
    </div>
  );
}

export function VideoCarousel({ title, subtitle, videoIds, autoScroll = false }: VideoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const scrollAmount = 200;

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (scrollRef.current && !isHovered) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 2500);
  }, [isHovered]);

  useEffect(() => {
    if (autoScroll) {
      startAutoScroll();
      return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }
  }, [autoScroll, startAutoScroll]);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
            {subtitle && <p className="text-blue-200/70 text-lg">{subtitle}</p>}
          </motion.div>

          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 -translate-x-5 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide px-2 py-4 cursor-pointer"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {videoIds.map((id) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedVideo(id)}
                >
                  <YouTubeShort videoId={id} />
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 translate-x-5 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
            <DialogContent className="sm:max-w-[400px] p-0 bg-black border-0 overflow-hidden rounded-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative"
                style={{ aspectRatio: '9/16' }}
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full">
                  <Volume2 className="w-4 h-4 text-white" />
                  <span className="text-white text-xs">Ovozli</span>
                </div>

                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&mute=0&rel=0&playsinline=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Video"
                />
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
