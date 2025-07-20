"use client"
import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  const t = useTranslations('hero');

  return (
    <section className={styles.heroSection}>
      {/* Background video */}
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/bg-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Content */}
      <div className={styles.content}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Medras Coin Logo" className={styles.logo} />
        </div>
        {/* Title and Description */}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <p className={styles.description}>
            {subtitle}
          </p>
          <button className={styles.ctaButton}
            onClick={() => window.open("https://bit.ly/4haOSLC", "_blank")}
          >
            {t('cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;