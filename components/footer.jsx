import React from 'react';
import Link from 'next/link';
import "./Footer.css"

import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link href="/docs">© 2025 SCADE, Inc.</Link>
        <Link href="/github" aria-label="GitHub">
          <FaGithub />
        </Link>
        <Link href="/linkedin" aria-label="LinkedIn">
          <FaLinkedin />
        </Link>
        <Link href="/x" aria-label="X">
          <FaXTwitter />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
