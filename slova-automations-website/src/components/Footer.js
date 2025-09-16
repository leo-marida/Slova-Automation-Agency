// src/components/Footer.js
import Image from 'next/image';
import Link from 'next/link'; // Step 1: Import the Link component
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        {/* Column 1: Logo and Mission Statement */}
        <div className={styles.footerBrand}>
          {/* Step 2: Replace <a> with <Link> */}
          <Link href="/" aria-label="Back to top">
            <Image src="/white_on_trans.png" alt="Slova Automations Logo" width={200} height={200} />
          </Link>
          <p className={styles.missionStatement}>
            Building intelligent systems to put your business growth on autopilot.
          </p>
          <p className={styles.copyright}>© 2025 Slova Automations. All Rights Reserved.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.footerLinks}>
          <h4>Navigate</h4>
          <ul>
            {/* Step 2: Replace all internal <a> tags with <Link> */}
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#why-us">Why Us?</Link></li>
            {/* <li><Link href="/#case-studies">Case Studies</Link></li> */}
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Use</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className={styles.footerContact}>
          <h4>Get in Touch</h4>
          <p>Ready to automate your success?</p>
          {/* This is an external link, so it correctly stays as an <a> tag */}
          <a href="mailto:contact@slovaautomations.com" className={styles.emailLink}>
            contact@slovaautomations.com
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;