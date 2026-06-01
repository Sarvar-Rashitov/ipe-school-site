import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  t: typeof translations.en;
  cycleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languages: Language[] = ['uz', 'ru', 'en'];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('uz');

  const cycleLanguage = () => {
    setLanguage((prev) => {
      const currentIndex = languages.indexOf(prev);
      const nextIndex = (currentIndex + 1) % languages.length;
      return languages[nextIndex];
    });
  };

  const value: LanguageContextType = {
    language,
    t: translations[language],
    cycleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
