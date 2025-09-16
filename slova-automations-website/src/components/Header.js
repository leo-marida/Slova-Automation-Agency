// src/components/Header.js
'use client'; 

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Step 1: Import the Link component
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          {/* Step 2: Replace <a> with <Link> */}
          <Link href="/">
            <Image 
              src="/slova-logo2.png" 
              alt="Slova Automations Logo" 
              width={200} 
              height={200} 
              className={styles.logoImage} 
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          {/* Step 2: Replace all <a> tags with <Link> */}
          <Link href="/#services">Services</Link>
          <Link href="/#why-us">Why Us?</Link>
          {/* <Link href="/#case-studies">Case Studies</Link>  */}
          <Link href="/#how-it-works">How It Works</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact" className={styles.contactButton}>Contact</Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Open menu">
          <FaBars />
        </button>
      </header>

      {/* Mobile Navigation Menu (Overlay) */}
      {isMenuOpen && (
        <div className={styles.navMobile}>
          <button className={styles.closeButton} onClick={toggleMenu} aria-label="Close menu">
            <FaTimes />
          </button>
          {/* Step 2: Also replace these <a> tags with <Link> */}
          <Link href="/#services" onClick={toggleMenu}>Services</Link>
          <Link href="/#why-us" onClick={toggleMenu}>Why Us?</Link>
          {/* <Link href="/#case-studies" onClick={toggleMenu}>Case Studies</Link> */}
          <Link href="/#how-it-works" onClick={toggleMenu}>How It Works</Link>
          <Link href="/#about" onClick={toggleMenu}>About</Link>
          <Link href="/#contact" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </>
  );
};

export default Header;