'use client';

import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import AboutSection from '@/components/AboutSection/AboutSection';
import FeaturesSection from '@/components/FeaturesSection/FeaturesSection';
import AnimatedCounters from '@/components/AnimatedCounters/AnimatedCounters';
import ShuffleHero from '@/components/ShuffleHero/ShuffleHero';
import TextParallaxContentExample from '@/components/TextParallaxContent/TextParallaxContent';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const t = useTranslations();

  return (
    <div>
      <Navbar />
      <HeroSection 
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />
      <AboutSection 
        title={t('about.title')}
        description={t('about.description')}
      />
      <FeaturesSection 
        title={t('features.title')}
        features={[
          {
            title: t('features.feature1.title'),
            description: t('features.feature1.description')
          },
          {
            title: t('features.feature2.title'),
            description: t('features.feature2.description')
          },
          {
            title: t('features.feature3.title'),
            description: t('features.feature3.description')
          }
        ]}
      />
      <ShuffleHero />
      <AnimatedCounters />
      <TextParallaxContentExample />
      <Footer />
    </div>
  );
}
