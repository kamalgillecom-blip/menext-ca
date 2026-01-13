"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c4683]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/brand-logo.png"
                alt="MeNext.ca"
                width={150}
                height={40}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <button
              className="bg-[#c81d6e] hover:bg-[#a81858] text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors"
            >
              Request a Demo
            </button>
            <Link
              href="/login"
              className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full transition-colors border border-white/30"
            >
              Login
            </Link>
            <button
              type="button"
              className="text-white p-2 ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 bg-[#0c4683] rounded-lg mt-2 p-4">
            <div className="flex flex-col gap-4">
              <Link href="#solutions" className="text-white hover:text-white/80 py-2">Solutions</Link>
              <Link href="#customers" className="text-white hover:text-white/80 py-2">Customers</Link>
              <Link href="/blog" className="text-white hover:text-white/80 py-2">Blog</Link>
              <Link href="#company" className="text-white hover:text-white/80 py-2">Company</Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
                <button
                  className="bg-[#c81d6e] hover:bg-[#a81858] text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors w-fit"
                >
                  Request a Demo
                </button>
                <Link
                  href="/login"
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
