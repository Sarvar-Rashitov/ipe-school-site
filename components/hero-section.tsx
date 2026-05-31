'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const playerRef = useRef<HTMLDivElement>(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoId] = useState('IPjaYWFW4qg');
  const playerInstanceRef = useRef<any>(null);
  const apiReadyRef = useRef(false);

  useEffect(() => {
    const loadPlayer = () => {
      if (!playerRef.current || !window.YT?.Player) return;
      playerInstanceRef.current = new window.YT.Player(playerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: videoId,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            apiReadyRef.current = true;
            event.target.playVideo();
          },
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.onload = loadPlayer;
      document.head.appendChild(tag);
    } else {
      loadPlayer();
    }

    return () => {
      if (playerInstanceRef.current?.destroy) {
        playerInstanceRef.current.destroy();
      }
    };
  }, [videoId]);

  const toggleSound = () => {
    if (!playerInstanceRef.current) return;
    if (isMuted) {
      playerInstanceRef.current.unMute();
      setIsMuted(false);
      setShowOverlay(false);
    } else {
      playerInstanceRef.current.mute();
      setIsMuted(true);
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-balance leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Master Your <span className="text-primary">Skills</span>
              </motion.h1>
            </div>

            <motion.p 
              className="text-lg text-muted-foreground text-balance max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Premium education in English, IT, SAT, Mathematics, and Russian taught by expert instructors. Transform your future today.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link href="/free-lesson">
                <Button size="lg" className="gap-2">
                  <Play size={20} />
                  Get Free Lesson
                </Button>
              </Link>
              <Link href="/#courses">
                <Button size="lg" variant="outline" className="gap-2">
                  Explore Courses
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div>
                <p className="text-3xl font-bold text-primary">5000+</p>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">150+</p>
                <p className="text-sm text-muted-foreground">Teachers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-muted-foreground">Courses</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - YouTube Shorts */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[380px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-border bg-black">
              <div ref={playerRef} className="w-full h-full" />

              {showOverlay && (
                <button
                  onClick={toggleSound}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black/40 cursor-pointer transition-opacity hover:bg-black/50"
                >
                  <div className="bg-white/90 rounded-full p-4 shadow-lg">
                    <VolumeX size={36} className="text-primary" />
                  </div>
                  <span className="text-white text-sm font-medium bg-black/60 px-4 py-1.5 rounded-full">
                    Tap to enable sound
                  </span>
                </button>
              )}

              {!showOverlay && (
                <button
                  onClick={toggleSound}
                  className="absolute bottom-4 right-4 z-10 bg-black/60 rounded-full p-2.5 hover:bg-black/80 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX size={20} className="text-white" />
                  ) : (
                    <Volume2 size={20} className="text-white" />
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
