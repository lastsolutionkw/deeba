'use client';

import React, { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import styles from './LanguageSwitcher.module.css';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (langCode: string) => {
    setIsOpen(false);
    
    // Get the current path without the language prefix
    const pathWithoutLang = pathname.split('/').slice(2).join('/');
    
    // Construct new path with selected language
    const newPath = `/${langCode}/${pathWithoutLang}`;
    
    // Navigate to the new path
    router.push(newPath);
  };

  // Don't render anything until after hydration
  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.languageSwitcher}>
      <button 
        className={styles.switcherButton}
        onClick={toggleDropdown}
        aria-label="Change language"
      >
        <FaGlobe className={styles.globeIcon} />
        <span className={styles.currentLang}>
          {languages.find(lang => lang.code === locale)?.flag}
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.langOption} ${locale === lang.code ? styles.active : ''}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className={styles.flag}>{lang.flag}</span>
              <span className={styles.langName}>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 