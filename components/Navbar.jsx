"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import "./Navbar.css";

const navigation = [
  {name: "Home", href: "/"},
  {name: "Docs", href: "/docs"}
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
    </nav>
  );
}
