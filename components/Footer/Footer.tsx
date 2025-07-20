"use client"
import React from "react";
import { useTranslations } from 'next-intl';
import styles from "./Footer.module.css";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className={styles.icon} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className={styles.icon} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </div>

        {/* Links */}
        <div className={styles.links}>
          <a href="/privacy" className={styles.link}>
            {t('links.privacy')}
          </a>
          <a href="/terms" className={styles.link}>
            {t('links.terms')}
          </a>
          <a href="/contact" className={styles.link}>
            {t('links.contact')}
          </a>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          © {currentYear} Medras Coin. {t('copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;