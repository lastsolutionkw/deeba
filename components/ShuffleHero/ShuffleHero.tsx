"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import styles from "./ShuffleHero.module.css";

const ShuffleHero = () => {
  const t = useTranslations('shuffleHero');
  const [mounted, setMounted] = useState(false);
  const [squares, setSquares] = useState(squareData);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (mounted) {
      const shuffleSquares = () => {
        setSquares(shuffle(squareData));
        timeoutRef.current = setTimeout(shuffleSquares, 3000);
      };

      shuffleSquares();
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <section className={styles.section} id="gamechanger">
        <div className={styles.content}>
          <span className={styles.subtitle}>Better every day</span>
          <h3 className={styles.title}>{t('title')}</h3>
          <p className={styles.description}>
            {t('description')}
          </p>
          <button className={styles.button}
            onClick={() => window.open("https://bit.ly/4haOSLC", "_blank")}
          >
            {t('cta')}
          </button>
        </div>
        <div className={styles.grid}>
          {squareData.map((sq) => (
            <div
              key={sq.id}
              className={styles.square}
              style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover"
              }}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} id="gamechanger">
      <div className={styles.content}>
        <span className={styles.subtitle}>Better every day</span>
        <h3 className={styles.title}>{t('title')}</h3>
        <p className={styles.description}>
          {t('description')}
        </p>
        <button className={styles.button}
          onClick={() => window.open("https://bit.ly/4haOSLC", "_blank")}
        >
          {t('cta')}
        </button>
      </div>
      <div className={styles.grid}>
        {squares.map((sq) => (
          <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className={styles.square}
            style={{
              backgroundImage: `url(${sq.src})`,
              backgroundSize: "cover"
            }}
          />
        ))}
      </div>
    </section>
  );
};

const squareData = [
  {
    id: 1,
    src: "shuffle/1.jpg",
  },
  {
    id: 2,
    src: "shuffle/2.jpg",
  },
  {
    id: 3,
    src: "shuffle/3.jpg",
  },
  {
    id: 4,
    src: "shuffle/4.jpg",
  },
  {
    id: 5,
    src: "shuffle/5.jpg",
  },
  {
    id: 6,
    src: "shuffle/6.jpg",
  },
  {
    id: 7,
    src: "shuffle/7.jpg",
  },
  {
    id: 8,
    src: "shuffle/8.jpg",
  },
  {
    id: 9,
    src: "shuffle/9.jpg",
  },
  {
    id: 10,
    src: "shuffle/10.jpg",
  },
  {
    id: 11,
    src: "shuffle/11.jpg",
  },
  {
    id: 12,
    src: "shuffle/12.jpg",
  },
  {
    id: 13,
    src: "shuffle/13.jpg",
  },
  {
    id: 14,
    src: "shuffle/14.jpg",
  },
  {
    id: 15,
    src: "shuffle/15.jpg",
  },
  {
    id: 16,
    src: "shuffle/16.jpg",
  }
];

// Fisher-Yates shuffle algorithm
const shuffle = (array: typeof squareData) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default ShuffleHero;