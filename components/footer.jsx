import React from 'react';
import Link from 'next/link';
import "./Footer.css"
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link href="/docs">© 2025 SCADE, Inc.</Link>
        <Link href="/github" aria-label="GitHub">
        <Image
                                     className="dark:invert pt-2"
                                     src="/github.svg"
                                     alt="Vercel logomark"
                                     width={30}
                                     height={20}
                                     style={{
                                      margin: "auto",
                                    }}
                                   />
        </Link>
        <Link href="/linkedin" aria-label="LinkedIn">
        <Image
                                     className="dark:invert"
                                     src="/li-logo.png"
                                     alt="Vercel logomark"
                                     width={30}
                                     height={20}
                                     style={{
                                      margin: "auto",
                                    }}
                                   />
        </Link>
        <Link href="/x" aria-label="X">
        <Image
                                     className="dark:invert"
                                     src="/x-logo.webp"
                                     alt="Vercel logomark"
                                     width={32}
                                     height={20}
                                     style={{
                                      margin: "auto",
                                    }}
                                   />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
