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
    { label: language === 'uz' ? 'Jamoa' : language === 'ru' ? 'Команда' : 'Team', href: '/team' },
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
        className={`fixed z-50 transition-all duration-500 ${
          isScrolled
            ? 'top-3 left-4 right-4 md:left-8 md:right-8'
            : 'top-0 left-0 right-0'
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100/50 mx-auto max-w-7xl'
              : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
          }`}
        >
          <div className={`flex items-center justify-between ${isScrolled ? 'px-6 h-16' : 'px-6 md:px-12 h-20'} transition-all duration-300`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
              <img
                src={logoImg}
                alt="IPE School Logo"
                className="h-10 w-10 object-contain"
              />
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-gray-900">School</span>
                <div className="text-xs text-gray-500 leading-none">Inter Prof Education</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === link.href ? 'text-blue-600' : 'text-gray-700'
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
                className="px-3 py-1.5 text-xs font-bold border border-gray-200 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-all bg-white/80"
              >
                {languageDisplay[language]}
              </button>

              <div className="hidden md:flex items-center gap-2">
                <a
                  href="tel:+998781130774"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all bg-white/80"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href="https://t.me/ipeschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all bg-white/80"
                >
                  <Send className="w-4 h-4" />
                </a>
                <Button
                  onClick={onOpenFreeLesson}
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600 text-white shadow-md"
                >
                  {t.heroCtaPrimary}
                </Button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden"
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
                    href="tel:+998781130774"
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
                    className="w-full bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600"
                  >
                    {t.heroCtaPrimary}
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
