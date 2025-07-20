"use client"
import React from 'react';
import styles from './AboutSection.module.css';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  title: string;
  description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, description }) => {
  // Animation variants for title and columns
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <motion.h2
        className={styles.title}
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {title}
      </motion.h2>
      <motion.div
        className={styles.description}
        variants={columnVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <p>{description}</p>
      </motion.div>
    </section>
  );
};

export default AboutSection;