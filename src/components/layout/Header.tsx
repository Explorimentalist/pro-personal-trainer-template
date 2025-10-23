"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoMark from "@/components/common/LogoMark";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Match Weavy-style approach: white text, blend on wrappers
  const linkBase =
    "text-white/90 hover:text-white transition-colors font-normal link-draw";
  const isActive = (href: string) => (pathname === href ? " is-active text-white" : "");

  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="fluid-container">
        <div className="grid h-[var(--nav-height-fluid)] grid-cols-4 items-center md:grid-cols-12 lg:grid-cols-16">
          {/* Logo (replaces text) */}
          <div className="col-span-2 flex items-center gap-3 md:col-span-3 lg:col-span-4">
            <Link href="/" aria-label="Hey‑Oko Home" className="flex items-center gap-2">
              <LogoMark className="h-8 w-8 text-white" />
            </Link>
          </div>

          {/* Center nav */}
          <nav className="col-span-2 hidden items-center justify-center gap-8 md:flex md:col-span-6 lg:col-span-8">
            <Link href="/" className={`${linkBase}${isActive("/")}`}>Home</Link>
            <Link href="/about" className={`${linkBase}${isActive("/about")}`}>
              About
            </Link>
            <Link
              href="/services"
              className={`${linkBase}${isActive("/services")}`}
            >
              Services
            </Link>
          </nav>

          {/* Right nav (secondary links) */}
          <div className="col-span-2 hidden items-center justify-end gap-8 md:flex md:col-span-3 lg:col-span-4">
            <Link href="/contact" className={`${linkBase}${isActive("/contact")}`}>
              Contact
            </Link>
            <Link href="/contact" className={`${linkBase}`}>
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="col-span-2 justify-self-end md:hidden text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="space-y-1 pb-4 pt-3 rounded-xl bg-white/24 backdrop-blur-md ring-1 ring-white/15 mix-blend-normal">
              <Link
                href="/"
                className="block px-3 py-2 text-white/90 hover:text-white link-draw"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white/90 hover:text-white link-draw"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-white/90 hover:text-white link-draw"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white/90 hover:text-white link-draw"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white/90 hover:text-white link-draw"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
