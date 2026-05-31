'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Locale = 'en' | 'uz' | 'ru';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  cycleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

const LOCALE_KEY = 'ipe_locale';
const locales: Locale[] = ['en', 'uz', 'ru'];

function getInitialLocale(): Locale {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(LOCALE_KEY);
    if (stored && locales.includes(stored as Locale)) return stored as Locale;
  }
  return 'en';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    setLocaleState(getInitialLocale());
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(LOCALE_KEY, newLocale);
  };

  const cycleLocale = () => {
    const idx = locales.indexOf(locale);
    const next = locales[(idx + 1) % locales.length];
    setLocale(next);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, cycleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
