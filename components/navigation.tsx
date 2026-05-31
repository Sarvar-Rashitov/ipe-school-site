'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IPELogo } from './logo';
import { motion } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'Teachers', href: '#teachers' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 right-auto w-[calc(100%-32px)] max-w-5xl bg-white/95 backdrop-blur-lg z-40 border border-border rounded-full shadow-lg md:rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="#" className="flex items-center gap-2">
              <IPELogo className="w-8 h-8" />
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-primary">IPE School</p>
                <p className="text-xs text-muted-foreground">Inter Prof Education</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone size={16} />
                Call Us
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90 gap-2">
                <MessageCircle size={16} />
                Free Lesson
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden pb-4 space-y-2"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Phone size={16} />
                  Call Us
                </Button>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 gap-2">
                  <MessageCircle size={16} />
                  Free Lesson
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Floating Actions */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a href="https://t.me/ipeschool" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-secondary hover:bg-secondary/90 rounded-full text-white shadow-lg flex items-center justify-center transition-all hover:scale-110">
          <MessageCircle size={24} />
        </a>
        <button className="w-14 h-14 bg-primary hover:bg-primary/90 rounded-full text-white shadow-lg flex items-center justify-center transition-all hover:scale-110">
          <Phone size={24} />
        </button>
      </div>
    </>
  );
}
