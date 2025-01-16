"use client";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-white">
                  WhisperLine
                </span>
              </Link>
            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link
                href="/submit-report"
                className="text-xs md:text-sm text-zinc-400 hover:text-green-400 transition-colors"
              >
                Report Issue
              </Link>
              <Link
                href="/track-report"
                className="text-xs md:text-sm text-zinc-400 hover:text-green-400 transition-colors"
              >
                Check Status
              </Link>
              <Link
                href="/how-it-works"
                className="text-xs md:text-sm text-zinc-400 hover:text-green-400 transition-colors"
              >
                Guide
              </Link>
              <Link
                href="/resources"
                className="text-xs md:text-sm text-zinc-400 hover:text-green-400 transition-colors"
              >
                Help Center
              </Link>
              <Link
                href="/contact"
                className="text-xs md:text-sm text-zinc-400 hover:text-green-400 transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            {/* Emergency Button */}
            <div className="flex items-center space-x-4">
              <button className="group flex h-9 items-center gap-2 rounded-full bg-red-500/10 pl-4 pr-5 text-sm font-medium text-red-500 ring-1 ring-inset ring-red-500/20 transition-all hover:bg-red-500/20 md:h-10 md:pl-6 md:pr-7 md:text-base">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="hidden sm:inline">Emergency</span>
              </button>

              {/* Sign In Button */}
              <Link
                href="/auth/signin"
                className="text-xs md:text-sm text-white rounded-full bg-green-500 hover:bg-green-600 transition-colors px-4 py-2"
              >
                Sign In
              </Link>


              {/* Mobile Menu Button */}
              <button
                className="block md:hidden p-2 text-zinc-400 hover:text-green-400"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
