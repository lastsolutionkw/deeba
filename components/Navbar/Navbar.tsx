"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTranslations } from 'next-intl';
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('nav');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className={styles.logo}
          onClick={closeMenu}
        >
          <img
            src="/diba_logo.png"
            alt="Diba Coin Logo"
            className={styles.logoImage}
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Full-Screen Menu */}
        <div className={`${styles.menu} ${isMenuOpen ? styles.active : ""}`}>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className={styles.link}
            onClick={closeMenu}
          >
            {t('home')}
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={styles.link}
            onClick={closeMenu}
          >
            {t('about')}
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className={styles.link}
            onClick={closeMenu}
          >
            {t('features')}
          </Link>
          <Link
            to="gamechanger"
            smooth={true}
            duration={500}
            className={styles.link}
            onClick={closeMenu}
          >
            {t('gamechanger')}
          </Link>
          <Link
            to="numbers"
            smooth={true}
            duration={500}
            className={styles.link}
            onClick={closeMenu}
          >
            {t('numbers')}
          </Link>
          <Link
            to="join"
            smooth={true}
            duration={500}
            className={styles.link}
            onClick={closeMenu}
          >
            {t('join')}
          </Link>
          <div className={styles.languageSwitcherContainer}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;