'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/locale-context';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { locale, cycleLocale } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const langLabels: Record<string, string> = {
    en: 'EN',
    uz: "O'z",
    ru: 'Ru'
  };

  const links = [
    { label: locale === 'en' ? 'Home' : locale === 'uz' ? 'Bosh sahifa' : 'Дом', href: '/' },
    { label: locale === 'en' ? 'Courses' : locale === 'uz' ? 'Kurslar' : 'Курсы', href: '/courses' },
    { label: locale === 'en' ? 'Team' : locale === 'uz' ? 'Jamoa' : 'Команда', href: '/team' },
    { label: locale === 'en' ? 'Contact' : locale === 'uz' ? 'Aloqa' : 'Контакт', href: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'top-4 left-4 right-4 w-auto mx-auto max-w-6xl rounded-full shadow-lg border border-border' 
          : 'top-0 left-0 right-0 w-full'
      } bg-white/95 backdrop-blur-md`}>
        <div className={`${isScrolled ? 'px-6' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'} py-3 flex justify-between items-center`}>
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="IPE School" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <span className="font-bold text-lg text-primary hidden sm:block">IPE <span className="text-foreground font-semibold">School</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="tel:+998712005060">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Phone size={16} className="text-primary" />
              </Button>
            </Link>

            <Link href="/free-lesson" className="hidden md:block">
              <Button size="sm" className="gap-1">
                <MessageCircle size={16} />
                Free Lesson
              </Button>
            </Link>

            <a href="https://t.me/ipeschool" target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button variant="ghost" size="sm">
                <MessageCircle size={18} className="text-secondary" />
              </Button>
            </a>

            <button
              onClick={cycleLocale}
              className="text-xs px-3 py-1.5 rounded bg-primary text-white font-medium transition-colors hover:bg-primary/90"
            >
              {langLabels[locale]}
            </button>

            <button
              className="md:hidden"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileOpen && (
        <div className="fixed top-20 left-0 right-0 bg-white border-b border-border z-40">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium hover:text-primary py-2"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 border-t pt-3">
              <button
                onClick={() => { cycleLocale(); setIsMobileOpen(false); }}
                className="text-xs px-3 py-1.5 rounded bg-primary text-white font-medium"
              >
                {langLabels[locale]}
              </button>
              <Link href="tel:+998712005060" onClick={() => setIsMobileOpen(false)}>
                <Button variant="outline" size="sm">
                  <Phone size={16} />
                </Button>
              </Link>
              <a href="https://t.me/ipeschool" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <MessageCircle size={16} className="text-secondary" />
                </Button>
              </a>
              <Link href="/free-lesson" onClick={() => setIsMobileOpen(false)}>
                <Button size="sm" className="gap-1">
                  <MessageCircle size={16} />
                  Free Lesson
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
