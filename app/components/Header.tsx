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

  if (pathname.startsWith("/studio")) return null;

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
      <div className="flex h-14 md:h-20 items-center justify-between px-6 md:px-12 lg:px-24">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 h-full py-2">
          <Image
            src="/img/CCIDS.png"
            alt="CCIDS Logo"
            width={200}
            height={31}
            priority
            className="h-full w-auto"
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
            href="/newsletters"
            className="flex h-12 w-40 items-center justify-center rounded-full bg-[var(--primary,#027BBF)] text-lg text-white transition-opacity duration-200 hover:opacity-90"
          >
            Newsletters
          </Link>
        </nav>

        {/* Mobile Menu Button and Dropdown */}
        <div className="relative md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-black transition-colors hover:bg-gray-100"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Dropdown Box */}
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 top-14 z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Dropdown Menu */}
              <nav className="absolute right-0 top-12 z-50 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-base transition-colors duration-200 ${
                      isActive(link.href)
                        ? "bg-gray-50 font-bold text-[var(--primary,#027BBF)]"
                        : "text-black hover:bg-gray-50 hover:text-[var(--primary,#027BBF)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mx-4 my-2 border-t border-gray-100" />
                <div className="px-4 py-2">
                  <Link
                    href="/newsletters"
                    className="flex h-10 items-center justify-center rounded-full bg-[var(--primary,#027BBF)] text-base text-white transition-opacity duration-200 hover:opacity-90"
                  >
                    Newsletters
                  </Link>
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
