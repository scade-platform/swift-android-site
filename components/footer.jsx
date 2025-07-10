import React from 'react';
import Link from 'next/link';
import "./Footer.css"

import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link href="/docs">© {currentYear} SCADE, Inc.</Link>
        <Link href="https://github.com/scade-platform" target="_blank" aria-label="GitHub">
          <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/company/scade-mobile/" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </Link>
        <Link href="https://x.com/scade_platform" target="_blank" aria-label="X">
          <FaXTwitter />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
