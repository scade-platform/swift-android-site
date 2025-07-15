import React from 'react';
import Link from 'next/link';
import "./Footer.css"

import { FaGithub, FaXTwitter, FaLinkedin, FaDiscord, FaFacebook } from "react-icons/fa6";
import {FaMediumM} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link href="/docs">© {currentYear} SCADE, Inc.</Link>
        <Link href="https://www.linkedin.com/company/scade-mobile/" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </Link>
        <Link href="https://medium.com/@SCADE" target="_blank" aria-label="Medium">
          <FaMediumM />
        </Link>
        <Link href="https://www.facebook.com/SwiftForAndroidAndiOS" target="_blank" aria-label="LinkedIn">
          <FaFacebook />
        </Link>
        <Link href="https://x.com/scade_platform" target="_blank" aria-label="X">
          <FaXTwitter />
        </Link>
        <Link href="https://discord.gg/ECxbtgx2ct" target="_blank" aria-label="GitHub">
          <FaDiscord />
        </Link>
        <Link href="https://github.com/scade-platform" target="_blank" aria-label="GitHub">
          <FaGithub />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
