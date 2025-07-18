"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import "./Navbar.css";

const navigation = [
  {name: "Get started", href: "/docs/getting-started/developmentprocess"},
  {name: "Community", href: "https://discord.gg/ECxbtgx2ct", target: "_blank"},
  {name: "What's new", href: "/blog"},
];

export default function Navbar() {
  const pathname = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <nav className="navbar">
      <div className="navbar-items">
        <Link href='/' className="navbar-brand lg:ml-20">
          <img src={`${basePath}/logo-scade.svg`} className="img-fluid" alt="logo"/>
        </Link>
        <div className="navbar-links ml-[auto] px-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.target}
              className={`nav-link lg:px-8 md:px-4 ${
                pathname === item.href ? "active" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
