"use client";
import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./TextParallaxContent.module.css";
import { useTranslations } from 'next-intl';

// Define the props for TextParallaxContent
interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}



export const TextParallaxContentExample = () => {
  const t = useTranslations('parallax');

  return (
    <div className={styles.container} id="join">
      <TextParallaxContent
        imgUrl="parallex/time.jpg"
        subheading={t('dontWait')}
        heading={t('launchPrice')}
      >
        <ExampleContentOne />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="parallex/green-invest.jpg"
        subheading={t('earlyMover')}
        heading={t('firstInvestors')}
      >
        <ExampleContentTwo />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="parallex/invest.webp"
        subheading={t('opportunity')}
        heading={t('highGrowth')}
      >
        <ExampleContentThree />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className={styles.parallaxContainer}>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

// Define the props for StickyImage
interface StickyImageProps {
  imgUrl: string;
}

const StickyImage = ({ imgUrl }: StickyImageProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className={styles.stickyImage}
    >
      <motion.div
        className={styles.imageOverlay}
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

// Define the props for OverlayCopy
interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className={styles.overlayCopy}
    >
      <p className={styles.subheading}>{subheading}</p>
      <p className={styles.heading}>{heading}</p>
    </motion.div>
  );
};

const ExampleContentOne = () => {
  const t = useTranslations('parallax');
  return (
    <div className={styles.exampleContent}>
      <h2 className={styles.contentHeading}>
        {t('content1.title')}
      </h2>
      <div className={styles.contentText}>
        <p className={styles.paragraph}>
          {t('content1.paragraph1')}
        </p>
        <p className={styles.paragraph}>
          {t('content1.paragraph2')}
        </p>
        <button className={styles.learnMoreButton}
          onClick={() => window.open("https://bit.ly/4haOSLC", "_blank")}
        >
          {t('learnMore')} <FiArrowUpRight className="inline" />
        </button>
      </div>
    </div>
  );
};

const ExampleContentTwo = () => {
  const t = useTranslations('parallax');
  return (
    <div className={styles.exampleContent}>
      <h2 className={styles.contentHeading}>
        {t('content2.title')}
      </h2>
      <div className={styles.contentText}>
        <p className={styles.paragraph}>
          {t('content2.paragraph1')}
        </p>
        <p className={styles.paragraph}>
          {t('content2.paragraph2')}
        </p>
        <button className={styles.learnMoreButton}
          onClick={() => window.open("https://bit.ly/4haOSLC", "_blank")}
        >
          {t('learnMore')} <FiArrowUpRight className="inline" />
        </button>
      </div>
    </div>
  );
};

const ExampleContentThree = () => {
  const t = useTranslations('parallax');
  return (
    <div className={styles.exampleContent}>
      <h2 className={styles.contentHeading}>
        {t('content3.title')}
      </h2>
      <div className={styles.contentText}>
        <p className={styles.paragraph}>
          {t('content3.paragraph1')}
        </p>
        <p className={styles.paragraph}>
          {t('content3.paragraph2')}
        </p>
        <button className={styles.learnMoreButton}
          onClick={() => window.open("https://bit.ly/4haOSLC", "_blank")}
        >
          {t('learnMore')} <FiArrowUpRight className="inline" />
        </button>
      </div>
    </div>
  );
};

export default TextParallaxContentExample;