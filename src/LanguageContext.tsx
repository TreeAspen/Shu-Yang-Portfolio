// src/app/LanguageContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'en' | 'zh';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en'); // 默认语言为英语
  const toggleLanguage = () => setLang(prev => (prev === 'en' ? 'zh' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};