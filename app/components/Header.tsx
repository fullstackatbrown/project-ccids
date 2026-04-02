"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/members", label: "Members" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
  { href: "/publications", label: "Publications" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex h-20 items-center justify-between px-6 md:px-12 lg:px-24">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/img/CCIDS.png"
            alt="CCIDS Logo"
            width={200}
            height={31}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-lg transition-colors duration-200 hover:text-[var(--primary,#027BBF)] ${
                isActive(link.href)
                  ? "font-bold text-[var(--primary,#027BBF)]"
                  : "text-black"
              } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--primary,#027BBF)] after:transition-transform after:duration-200 hover:after:scale-x-100 ${
                isActive(link.href) ? "after:scale-x-100" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            className="flex h-12 w-40 items-center justify-center rounded-full bg-[var(--primary,#027BBF)] text-lg text-white transition-opacity duration-200 hover:opacity-90"
          >
            Newsletters
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-black transition-colors hover:bg-gray-100 md:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <nav
        className={`fixed left-0 right-0 top-20 z-50 bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b border-gray-100 py-4 text-lg transition-colors duration-200 ${
                isActive(link.href)
                  ? "font-bold text-[var(--primary,#027BBF)]"
                  : "text-black hover:text-[var(--primary,#027BBF)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            className="mt-4 flex h-12 items-center justify-center rounded-full bg-[var(--primary,#027BBF)] text-lg text-white transition-opacity duration-200 hover:opacity-90"
          >
            Newsletters
          </Link>
        </div>
      </nav>
    </header>
  );
}
