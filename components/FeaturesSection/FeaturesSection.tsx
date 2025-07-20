"use client"
import React from 'react';
import styles from './FeaturesSection.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
}


interface FeaturesSectionProps {
  title: string;
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ title, features }) => {
  // Parallax effect for the background
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="features" className={styles.featuresSection}>
      {/* Parallax Background */}
      <motion.div
        className={styles.backgroundImage}
        style={{ y }}
      />
      {/* Content */}
      <div className={styles.content}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {title}
        </motion.h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className={styles.overlay} />
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardSubtitle}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;