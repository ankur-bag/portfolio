"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "WORKS", href: "#projects" },
  { name: "ABOUT", href: "#about" },
  { name: "JOURNEY", href: "#experience" },
  { name: "TRIUMPHS", href: "#hackathons" },
  { name: "STACK", href: "#tech-stack" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl rounded-full",
        scrolled 
          ? "bg-white/70 backdrop-blur-xl border border-black/5 py-3 px-8 shadow-xl shadow-black/[0.03]" 
          : "bg-transparent py-4 px-8"
      )}
    >
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-xl font-normal tracking-tighter hover:text-accent transition-colors flex items-center gap-1">
          AB<span className="text-accent italic font-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[9px] font-medium tracking-[0.2em] text-gray-500 hover:text-black transition-colors relative group"
            >
              {link.name}
              <motion.span 
                className="absolute -bottom-1 left-0 h-px bg-accent w-0 group-hover:w-full transition-all"
              />
            </Link>
          ))}
          <a 
            href="mailto:ankurbag700@gmail.com"
            className="px-5 py-1.5 bg-black text-white text-[9px] font-medium uppercase tracking-widest rounded-full hover:bg-accent transition-all duration-500 shadow-sm"
          >
            TALK
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-black hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-2xl border border-black/5 rounded-3xl p-8 lg:hidden flex flex-col gap-6 overflow-hidden shadow-2xl"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-normal uppercase tracking-tighter hover:text-accent transition-colors block"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
