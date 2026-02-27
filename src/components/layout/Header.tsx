"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/marketing/about", label: "About" },
    { href: "/marketing/programs", label: "Programs" },
    { href: "/marketing/impact", label: "Impact" },
    { href: "/marketing/partners", label: "Partners" },
    { href: "/marketing/contact", label: "Contact" },
    { href: "/marketing/governance", label: "Team" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav className="glass backdrop-blur-lg border-b border-white/20 bg-white/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <img
                src="/logo.png"
                alt="Expertise Hub Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary group-hover:text-primary/80 transition-colors leading-none">
                Expertise Hub
              </span>
              <span className="text-xs text-accent font-semibold">Hub</span>
            </div>
          </Link>

          {/* desktop links */}
          <ul className="hidden md:flex space-x-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/marketing/get-involved"
                className="px-4 py-2 rounded-lg btn-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get Involved
              </Link>
            </li>
          </ul>

          {/* mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* mobile links drawer */}
        {open && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg">
            <ul className="flex flex-col space-y-1 px-4 py-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block px-3 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/marketing/get-involved"
                  className="block px-3 py-2 rounded-lg btn-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 active:scale-95"
                  onClick={() => setOpen(false)}
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
