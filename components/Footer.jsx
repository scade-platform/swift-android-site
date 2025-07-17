import React from 'react';
import Link from 'next/link';
import "./Footer.css"

import { FaGithub, FaXTwitter, FaLinkedin, FaDiscord } from "react-icons/fa6";

const navigation = [
  {name: "Get started", href: "/docs/getting-started/developmentprocess"},
  {name: "What's new", href: "/blog"},
  {name: "Pricing", href: "/pricing"},
];

const Footer = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div
        className="section max-w-[600px] flex justify-between align-baseline ml-auto items-center sm:items-start flex-col sm:flex-row">
        <Link href='/' className="navbar-brand mt-[4px] mb-4 sm:mb-0">
          <img src={`${basePath}/logo-scade.svg`} className="img-fluid" alt="logo"/>
        </Link>
        <nav className="footer-nav text-right">
          <span className="font-bold color-foreground">Follow us:</span>
          <Link href="https://www.linkedin.com/company/scade-mobile/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
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
      </div>
      <div className="footer-links ml-[auto] text-center px-6 mt-8">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target={item.target}
            className={`nav-link md:px-8 px-4`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="text-center color-foreground mt-8">
        <Link href="/">All rights reserved © {currentYear} SCADE</Link>
      </div>
    </footer>
  );
};

export default Footer;
