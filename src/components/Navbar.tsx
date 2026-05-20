"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { href: "#services", label: "服务项目" },
    { href: "#pricing", label: "价格套餐" },
    { href: "#about", label: "关于我们" },
    { href: "#testimonials", label: "客户评价" },
    { href: "#contact", label: "预约洗护", cta: true },
  ];

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      id="navbar"
    >
      <div className={styles.navInner}>
        <div className={styles.logo}>
          <span>&#x1f43e;</span> 爪爪洗护馆
        </div>
        <ul
          className={`${styles.navLinks} ${
            menuOpen ? styles.navLinksActive : ""
          }`}
          id="navLinks"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${item.cta ? styles.navCta : ""}`}
                onClick={(e) => handleNavClick(e, item.href)}
                scroll={false}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
