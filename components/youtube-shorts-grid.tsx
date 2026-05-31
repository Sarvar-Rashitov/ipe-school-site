'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface YouTubeShortProps {
  id: string;
  url: string;
}

interface YouTubeShortsGridProps {
  videos: YouTubeShortProps[];
}

export function YouTubeShortsGrid({ videos }: YouTubeShortsGridProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const containerRef = useRef<HTMLDivElement>(null);

  const extractYouTubeShortId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    return match ? match[1] : '';
  };

  const goTo = useCallback((index: number) => {
    const total = videos.length;
    setCurrentIndex(((index % total) + total) % total);
  }, [videos.length]);

  const goNext = useCallback(() => {
    goTo(currentIndex + 1);
  }, [currentIndex, goTo]);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % videos.length);
    }, 3000);
  }, [videos.length]);

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return stopAutoPlay;
  }, [isHovered, startAutoPlay]);

  const handlePrev = () => {
    stopAutoPlay();
    goTo(currentIndex - 1);
  };

  const handleNext = () => {
    stopAutoPlay();
    goTo(currentIndex + 1);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <div className="flex items-center justify-center gap-4 min-h-[400px]">
          {videos.map((video, idx) => {
            const videoId = extractYouTubeShortId(video.url);
            const isActive = idx === currentIndex;
            const isPrev = idx === (currentIndex - 1 + videos.length) % videos.length;
            const isNext = idx === (currentIndex + 1) % videos.length;

            let positionClass = 'scale-75 opacity-40';
            let zIndex = 'z-0';
            if (isActive) {
              positionClass = 'scale-100 opacity-100';
              zIndex = 'z-10';
            } else if (isPrev || isNext) {
              positionClass = 'scale-85 opacity-60';
              zIndex = 'z-5';
            }

            return (
              <div
                key={video.id}
                className={`flex-shrink-0 w-64 h-96 rounded-2xl overflow-hidden shadow-lg border border-border transition-all duration-500 ${positionClass} ${zIndex}`}
              >
                {isActive ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0`}
                    title={`YouTube Short ${video.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt={`Short ${video.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full w-12 h-12"
        onClick={handlePrev}
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full w-12 h-12"
        onClick={handleNext}
      >
        <ChevronRight size={24} />
      </Button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { stopAutoPlay(); goTo(idx); }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'bg-primary w-6'
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
