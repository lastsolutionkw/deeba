"use client"
import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './TextParallaxContentExample.module.css';

const TextParallaxContentExample = () => {
  const t = useTranslations('gameChanger');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          {t('title')}
        </h2>
        <p className={styles.subtitle}>
          {t('subtitle')}
        </p>
        <p className={styles.description}>
          {t('description')}
        </p>
      </div>
    </div>
  );
};

export default TextParallaxContentExample; 