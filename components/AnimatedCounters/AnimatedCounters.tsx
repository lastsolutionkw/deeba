"use client";
import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import styles from './AnimatedCounters.module.css';


const AnimatedCounters = () => {
  const t = useTranslations('numbers');
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll(`.${styles.counter}`);
            counters.forEach((counter, index) => {
              setTimeout(() => {
                counter.classList.add(styles.animate);
              }, index * 200); // Stagger the animations
            });
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container} ref={countersRef}>
      <div className={styles.counter}>
        <div className={styles.number}>{t('totalValue.value')}</div>
        <div className={styles.label}>{t('totalValue.label')}</div>
      </div>
      <div className={styles.counter}>
        <div className={styles.number}>{t('activeInvestors.value')}</div>
        <div className={styles.label}>{t('activeInvestors.label')}</div>
      </div>
      <div className={styles.counter}>
        <div className={styles.number}>{t('propertiesBacked.value')}</div>
        <div className={styles.label}>{t('propertiesBacked.label')}</div>
      </div>
    </div>
  );
};

export default AnimatedCounters;
