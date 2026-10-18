"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X, Send, ArrowRight } from "lucide-react";
import { TAB_SPRING } from "@/utils/motion";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function NavBer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/25 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
          >
            <span className="text-2xl uppercase font-Exo font-extrabold  tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Rijon<span className="text-cyan-400">.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-sm font-medium font-Share-Tech rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus:outline-none ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-full -z-10 shadow-sm shadow-cyan-500/20"
                      transition={shouldReduceMotion ? { duration: 0 } : TAB_SPRING}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
            >
              <Link
                href="/contact"
                className="inline-flex font-Share-Tech  items-center gap-2 px-4 py-2 rounded-full  font-semibold bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus:outline-none"
              >
                <span>Let&apos;s Talk</span>
                <Send className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-4 pb-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <motion.div
                    key={item.name}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -14 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`flex items-center font-Share-Tech justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus:outline-none ${
                        isActive
                          ? "bg-linear-to-r from-cyan-500/15 to-blue-500/15 text-cyan-400 border border-cyan-500/30"
                          : "text-slate-300 hover:bg-slate-900 hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-70" />
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.04 }}
                className="pt-2"
              >
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="w-full flex font-Share-Tech items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 focus-visible:ring-2 focus-visible:ring-cyan-400 focus:outline-none"
                >
                  <span>Let&apos;s Talk</span>
                  <Send className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}