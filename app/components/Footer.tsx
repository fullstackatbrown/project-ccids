import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Twitter } from "lucide-react";

const navLinks = [
  { href: "#", label: "Join Us" },
  { href: "/members", label: "Members" },
  { href: "/events", label: "Events" },
  { href: "#", label: "News" },
  { href: "/publications", label: "Publications" },
];

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[34px] bg-[var(--primary,#027BBF)] flex flex-col">
      <div className="flex flex-1 flex-col gap-8 px-6 pt-12 pb-8 md:px-12 lg:px-24">
        {/* Top Row */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10">
          {/* Logo */}
          <Image
            src="/img/CCIDS.png"
            alt="CCIDS Logo"
            width={617}
            height={97}
            className="h-12 w-auto md:h-16"
          />

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:flex-1 md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-base text-white transition-colors duration-200 hover:text-white/80 after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-200 hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-white transition-opacity duration-200 hover:opacity-80"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="#"
              className="text-white transition-opacity duration-200 hover:opacity-80"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="#"
              className="text-white transition-opacity duration-200 hover:opacity-80"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </Link>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-center md:gap-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white">Contact Us</p>
            <p className="text-base text-white">Email: sanjay_mishra@brown.edu</p>
          </div>

          {/* Subscribe Box */}
          <div className="flex w-full max-w-md flex-1 items-center gap-3 rounded-3xl bg-white p-4 md:ml-auto md:p-6">
            <input
              type="email"
              placeholder="Email"
              className="min-w-0 flex-[3] rounded-full border-2 border-black px-4 py-2 text-base outline-none focus:border-[var(--primary,#027BBF)]"
            />
            <button className="min-w-0 flex-1 cursor-pointer rounded-full bg-[var(--primary,#027BBF)] px-4 py-2 text-base text-white transition-opacity duration-200 hover:opacity-90">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto h-px w-[85%] bg-white/30" />

      {/* Copyright */}
      <div className="flex items-center justify-center px-6 py-6 text-center">
        <p className="text-sm font-medium text-white">
          &copy; 2026{" "}
          <Link href="#" className="text-white hover:underline">
            Center for Clinical Cancer Informatics and Data Science (CCIDS) at
            Brown University
          </Link>
          . All Rights Reserved.{" "}
          <Link href="#" className="text-white hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
