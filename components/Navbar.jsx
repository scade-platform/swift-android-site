"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GitHubButton from "react-github-btn";
import "./Navbar.css";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "/docs" },
  { name: "About", href: "/about-Us" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-links">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`nav-link ${
              pathname === item.href ? "active" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="navbar-github">
        <GitHubButton
          href="https://github.com/scade-platform/swift-android"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star buttons/github-buttons on GitHub"
        >
          Star
        </GitHubButton>
      </div>
    </nav>
  );
}
