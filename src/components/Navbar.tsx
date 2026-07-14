"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "Experience", href: "#experience" },
  { title: "Education", href: "#education" },
  { title: "Gallery", href: "#gallery" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = navLinks.find(l => l.href.substring(1) === entry.target.id);
            if (link) setActiveSection(link.title);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full max-w-5xl px-4",
        isScrolled ? "top-4" : "top-8"
      )}
    >
      <div className={cn(
        "mx-auto flex items-center justify-between transition-all duration-500 rounded-full",
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border border-muted shadow-lg px-8 py-4"
          : "bg-transparent px-6 py-4"
      )}>
        <Link href="#home" className="text-xl font-serif tracking-tight text-foreground">
          DURRESHAHWAR KHAN<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 bg-foreground/5 p-1 rounded-full border border-foreground/10">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors rounded-full",
                activeSection === link.title ? "text-background" : "text-foreground hover:text-primary"
              )}
            >
              {activeSection === link.title && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-foreground rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-6 py-3 bg-primary text-primary-foreground text-xs font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 uppercase tracking-widest"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-xl border border-muted rounded-3xl shadow-2xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium py-3 px-4 rounded-xl transition-colors uppercase tracking-widest text-center",
                    activeSection === link.title ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted/50"
                  )}
                >
                  {link.title}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 py-4 bg-foreground text-background text-center rounded-xl font-medium uppercase tracking-widest"
              >
                Hire Me
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
