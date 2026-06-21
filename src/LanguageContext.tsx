// src/app/LanguageContext.tsx
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

export type Language = 'en' | 'zh';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 中国大陆常见时区（用于英文系统但人在国内的情况兜底）
const CHINA_TIMEZONES = ['Asia/Shanghai', 'Asia/Urumqi', 'Asia/Chongqing', 'Asia/Harbin'];

// 首次访问时自动判断默认语言：
// 1) 优先沿用用户上次手动选择；
// 2) 浏览器语言是中文 → 中文；
// 3) 设备时区在中国 → 中文；
// 4) 其它一律英文。
function detectDefaultLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  try {
    const saved = window.localStorage.getItem('lang');
    if (saved === 'en' || saved === 'zh') return saved;
  } catch { /* localStorage 不可用时忽略 */ }

  const navLang = (
    navigator.language ||
    (navigator.languages && navigator.languages[0]) ||
    ''
  ).toLowerCase();
  if (navLang.startsWith('zh')) return 'zh';

  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (CHINA_TIMEZONES.includes(tz)) return 'zh';
  } catch { /* 时区获取失败时忽略 */ }

  return 'en';
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(detectDefaultLanguage);

  const toggleLanguage = () =>
    setLang(prev => {
      const next: Language = prev === 'en' ? 'zh' : 'en';
      try { window.localStorage.setItem('lang', next); } catch { /* 忽略 */ }
      return next;
    });

  // 同步 <html lang>，利于无障碍与 SEO
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

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
