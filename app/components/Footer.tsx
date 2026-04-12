import Image from "next/image";
import Link from "next/link";

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
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-white">Contact Us</p>
          <p className="text-base text-white">Email: sanjay_mishra@brown.edu</p>
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
