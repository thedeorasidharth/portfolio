"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send } from "lucide-react";
import PilotCockpitIcon from "./PilotCockpitIcon";

const navLinks = [
  { name: "HOME", href: "#hero" },
  { name: "SERVICES", href: "#services" },
  { name: "WORK", href: "#projects" },
  { name: "PROCESS", href: "#process" },
  { name: "STACK", href: "#skills" },
  { name: "ABOUT", href: "#about" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section for nav highlight
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-sky-500/20 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand / Logo callsign */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none focus:ring-1 focus:ring-sky-400"
          aria-label="Sidharth Deora Portfolio Home"
        >
          <div className="w-8 h-8 rounded-sm bg-sky-950/80 border border-sky-500/40 flex items-center justify-center group-hover:border-sky-400 transition-colors shadow-[0_0_12px_rgba(56,189,248,0.25)] shrink-0 overflow-hidden">
            <PilotCockpitIcon />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm tracking-wider text-white italic group-hover:text-sky-400 transition-colors">
              SIDHARTH DEORA
            </span>
            <span className="hud-text text-[8px] text-sky-400/80 tracking-widest">
              FULL-STACK ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 border border-sky-500/20 rounded-sm backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all rounded-sm ${
                  isActive
                    ? "text-sky-400 font-bold bg-sky-500/10 border border-sky-500/30"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {isActive && (
                  <span className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1 h-1 bg-sky-400 rounded-full animate-ping" />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black uppercase text-xs tracking-wider transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] rounded-sm cursor-pointer"
          >
            <Send size={13} />
            <span>START A PROJECT</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-sm bg-slate-900/80 border border-sky-500/30 text-sky-400 hover:text-white hover:bg-sky-500/20 transition-all"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-slate-950/95 border-b border-sky-500/30 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 max-w-lg mx-auto">
              <div className="flex justify-between items-center pb-3 border-b border-sky-500/20">
                <span className="hud-text text-sky-400 text-[10px] tracking-widest">
                  TACTICAL NAVIGATION // MENU
                </span>
                <span className="hud-text text-emerald-400 text-[9px]">
                  STATUS: ONLINE
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="flex items-center justify-between p-3 rounded-sm bg-slate-900/40 border border-sky-500/10 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all font-mono text-sm text-slate-200 hover:text-sky-300"
                  >
                    <span className="tracking-widest">{link.name}</span>
                    <span className="text-sky-500/50 text-xs">→</span>
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="w-full py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)] rounded-sm"
                >
                  <Send size={14} />
                  <span>START A PROJECT NOW</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
