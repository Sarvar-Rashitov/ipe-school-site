import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoCarouselProps {
  title: string;
  subtitle?: string;
  videoIds: string[];
  autoScroll?: boolean;
}

function YouTubeShort({ videoId }: { videoId: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex-shrink-0 relative rounded-2xl overflow-hidden bg-gray-900 border border-white/10"
      style={{ width: '180px', aspectRatio: '9/16' }}
    >
      {shouldLoad ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1&modestbranding=1`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`Video ${videoId}`}
            onLoad={() => setIsLoaded(true)}
          />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
          </div>
        </div>
      )}
    </div>
  );
}

export function VideoCarousel({ title, subtitle, videoIds, autoScroll = false }: VideoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollState);
      return () => el.removeEventListener('scroll', updateScrollState);
    }
  }, []);

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [autoScroll]);

  return (
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

        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all hover:bg-white/30 -translate-x-5 ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : ''}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Videos */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-2 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videoIds.map((id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <YouTubeShort videoId={id} />
              </motion.div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all hover:bg-white/30 translate-x-5 ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : ''}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
