"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import "./Navbar.css";

const navigation = [
  {name: "Get started", href: "/docs/getting-started/installation"},
  {name: "Community", href: "/docs/examples/weather-service"},
  {name: "Blog", href: "https://x.com/scade_platform", target: "_blank"},
];

export default function Navbar() {
  const pathname = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <nav className="navbar content">
      <Link href='/' className="navbar-brand">
        <img src={`${basePath}/logo-scade.svg`} className="img-fluid" alt="logo"/>
      </Link>
      <div className="navbar-links ml-[auto] px-6">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target={item.target}
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
