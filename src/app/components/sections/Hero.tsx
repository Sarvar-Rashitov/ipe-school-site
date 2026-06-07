import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Volume2, VolumeX } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../lib/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';
import { useEffect } from 'react';

interface HeroProps {
  onOpenFreeLesson: () => void;
}

const HERO_SHORT_ID = 'IPjaYWFW4qg';

export function Hero({ onOpenFreeLesson }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const studentsCount = useCountUp(10000, 2000);
  const coursesCount = useCountUp(5, 1500);
  const teachersCount = useCountUp(40, 1800);
  const successRate = useCountUp(95, 2200);

  useEffect(() => {
    if (isVisible) {
      studentsCount.startCounting();
      coursesCount.startCounting();
      teachersCount.startCounting();
      successRate.startCounting();
    }
  }, [isVisible]);

  const stats = [
    { value: studentsCount.count, suffix: '+', label: t.students },
    { value: coursesCount.count, suffix: '+', label: t.coursesCount },
    { value: teachersCount.count, suffix: '+', label: t.teachersCount },
    { value: successRate.count, suffix: '%', label: t.successRate },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/20 to-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-red-500/10 to-blue-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Professional IT & Education Center
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
            >
              <span className="text-blue-400">I</span>
              <span className="text-red-400">P</span>
              <span className="text-blue-400">E</span>
              {' School bilan '}
              <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                {language === 'uz' ? 'kelajagingizni yarating' : language === 'ru' ? 'создайте своё будущее' : 'create your future'}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-blue-100/80 mb-8 leading-relaxed"
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                onClick={onOpenFreeLesson}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 shadow-xl hover:shadow-2xl transition-all duration-300 text-base px-8 h-14 text-white border-0"
              >
                {t.heroCtaPrimary}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="text-base px-8 h-14 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                {t.heroCtaSecondary}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-blue-200/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - YouTube Short */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 to-red-500/20 rounded-3xl blur-2xl" />

              {/* YouTube Short container - phone-like shape */}
              <div className="relative w-64 md:w-72 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10" style={{ aspectRatio: '9/16' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${HERO_SHORT_ID}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${HERO_SHORT_ID}&controls=0&rel=0&playsinline=1&modestbranding=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="IPE School"
                />
                {/* Sound toggle */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-4 right-4 z-10 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-xs text-gray-500">O'quvchilar</div>
                <div className="font-bold text-gray-900">10000+</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-xs text-gray-500">Muvaffaqiyat</div>
                <div className="font-bold text-gray-900">95%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs">Pastga aylantiring</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
