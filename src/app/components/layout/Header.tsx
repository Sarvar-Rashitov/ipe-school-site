import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../lib/LanguageContext';
import logoImg from '../../../imports/image-1.png';

interface HeaderProps {
  onOpenFreeLesson: () => void;
}

export function Header({ onOpenFreeLesson }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, t, cycleLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, href: '/' },
    { label: t.courses, href: '/courses' },
    { label: t.results, href: '/results' },
    { label: t.contact, href: '/contact' },
  ];

  const languageDisplay = { uz: 'UZ', ru: 'RU', en: 'EN' };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'top-3' : 'top-0'
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200/50 mx-4 md:mx-8 max-w-7xl lg:mx-auto lg:left-0 lg:right-0'
              : 'bg-transparent border-b border-white/10'
          }`}
        >
          <div className={`flex items-center justify-between ${isScrolled ? 'px-6 h-16' : 'px-6 md:px-12 h-20'} transition-all duration-300`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
              <img
                src={logoImg}
                alt="IPE School Logo"
                className="h-10 w-10 object-contain rounded-full border-2 border-white/20 transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <span className={`text-lg font-bold transition-all duration-300 group-hover:text-blue-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                  School
                </span>
                <div className={`hidden sm:block text-xs leading-none transition-all duration-300 group-hover:text-blue-400 ${isScrolled ? 'text-gray-500' : 'text-white/70'}`}>
                  Inter Prof Education
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    location.pathname === link.href 
                      ? isScrolled ? 'text-blue-600' : 'text-blue-400'
                      : isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-blue-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <button
                onClick={cycleLanguage}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  isScrolled
                    ? 'border border-gray-200 hover:border-blue-300 hover:text-blue-600 bg-white/80 text-gray-700'
                    : 'border border-white/20 hover:border-white/40 hover:bg-white/10 bg-white/5 text-white'
                }`}
              >
                {languageDisplay[language]}
              </button>

              <div className="hidden md:flex items-center gap-2">
                <a
                  href="tel:+998555885000"
                  className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${
                    isScrolled
                      ? 'border border-gray-200 hover:border-blue-300 hover:text-blue-600 bg-white/80 text-gray-700'
                      : 'border border-white/20 hover:border-white/40 hover:bg-white/10 bg-white/5 text-white'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href="https://t.me/ipeschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${
                    isScrolled
                      ? 'border border-gray-200 hover:border-blue-300 hover:text-blue-600 bg-white/80 text-gray-700'
                      : 'border border-white/20 hover:border-white/40 hover:bg-white/10 bg-white/5 text-white'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </a>
                <Button
                  onClick={onOpenFreeLesson}
                  size="sm"
                  className="group bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-[length:200%_auto] hover:bg-[position:right_center] font-bold shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 border border-white/20 cursor-pointer"
                >
                  <span className="text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] tracking-wide">
                    {t.heroCtaPrimary}
                  </span>
                </Button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-medium py-3 px-4 rounded-xl transition-colors ${
                        location.pathname === link.href
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col gap-3">
                  <a
                    href="tel:+998555885000"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 text-gray-700 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="w-5 h-5" />
                    {t.callUs}
                  </a>
                  <a
                    href="https://t.me/ipeschool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 text-gray-700 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Send className="w-5 h-5" />
                    Telegram
                  </a>
                  <Button
                    onClick={() => {
                      onOpenFreeLesson();
                      setIsMobileMenuOpen(false);
                    }}
                    size="lg"
                    className="w-full group bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-[length:200%_auto] hover:bg-[position:right_center] font-bold shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 border border-white/20 cursor-pointer"
                  >
                    <span className="text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] tracking-wide text-lg">
                      {t.heroCtaPrimary}
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
