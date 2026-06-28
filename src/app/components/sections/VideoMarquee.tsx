import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface VideoMarqueeProps {
  title: string;
  subtitle?: string;
  videoIds: string[];
}

interface VideoCardProps {
  videoId: string;
  onClick: () => void;
}

function VideoCard({ videoId, onClick }: VideoCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="flex-shrink-0 cursor-pointer group"
      style={{ width: '180px' }}
    >
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300"
           style={{ aspectRatio: '9/16' }}>
        {/* Thumbnail */}
        <div className="relative w-full h-full">
          {!thumbnailError ? (
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Video thumbnail"
              onLoad={() => setIsLoaded(true)}
              onError={() => setThumbnailError(true)}
              className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <Play className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 opacity-50" />
              </div>
            </div>
          )}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" fill="white" />
          </div>
        </div>

        {/* Border glow effect */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-300" />
      </div>
    </motion.div>
  );
}

export function VideoMarquee({ title, subtitle, videoIds }: VideoMarqueeProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  // Split videos into two rows and duplicate multiple times for seamless loop
  const midPoint = Math.ceil(videoIds.length / 2);
  const topRow = videoIds.slice(0, midPoint);
  const bottomRow = videoIds.slice(midPoint);
  
  // Duplicate 4 times for smooth infinite scroll
  const topRowVideos = [...topRow, ...topRow, ...topRow, ...topRow];
  const bottomRowVideos = [...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow];

  // Animate using requestAnimationFrame for smooth performance
  useEffect(() => {
    let animationFrameId: number;
    let topPosition = 0;
    let bottomPosition = 0;

    const animate = () => {
      if (!isPaused) {
        if (topRowRef.current) {
          topPosition -= 1.5; // Speed for left to right (increased from 0.5 to 1.5)
          if (Math.abs(topPosition) >= topRowRef.current.scrollWidth / 4) {
            topPosition = 0;
          }
          topRowRef.current.style.transform = `translateX(${topPosition}px)`;
        }

        if (bottomRowRef.current) {
          bottomPosition += 1.5; // Speed for right to left (increased from 0.5 to 1.5)
          if (bottomPosition >= 0) {
            bottomPosition = -(bottomRowRef.current.scrollWidth / 4);
          }
          bottomRowRef.current.style.transform = `translateX(${bottomPosition}px)`;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize bottom row position
    if (bottomRowRef.current) {
      bottomPosition = -(bottomRowRef.current.scrollWidth / 4);
    }

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-purple-200/70 text-base sm:text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>

        {/* Marquee container */}
        <div 
          className="space-y-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Top row - left to right */}
          <div className="relative overflow-hidden">
            <div 
              ref={topRowRef}
              className="flex gap-4 sm:gap-6 will-change-transform"
            >
              {topRowVideos.map((videoId, index) => (
                <VideoCard
                  key={`top-${index}`}
                  videoId={videoId}
                  onClick={() => setSelectedVideo(videoId)}
                />
              ))}
            </div>
          </div>

          {/* Bottom row - right to left */}
          <div className="relative overflow-hidden">
            <div 
              ref={bottomRowRef}
              className="flex gap-4 sm:gap-6 will-change-transform"
            >
              {bottomRowVideos.map((videoId, index) => (
                <VideoCard
                  key={`bottom-${index}`}
                  videoId={videoId}
                  onClick={() => setSelectedVideo(videoId)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10" />
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-sm sm:max-w-md bg-black rounded-2xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: '9/16' }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&playsinline=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video player"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
