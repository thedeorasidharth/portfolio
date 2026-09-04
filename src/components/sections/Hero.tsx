"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Send, MapPin } from "lucide-react";

export default function Hero() {
  const handleViewWork = () => {
    window.dispatchEvent(new CustomEvent("jet-burst"));
    const workSection = document.getElementById("projects");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex min-h-[90dvh] w-full max-w-full flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-12 text-center">
      <div className="relative flex w-full max-w-4xl flex-col items-center space-y-6">
        
        {/* Availability & Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="hud-text text-[9px] font-bold text-emerald-400 tracking-widest">
              AVAILABLE FOR FREELANCE WORK
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono">
            <MapPin size={12} className="text-sky-400" />
            <span>India (IST / UTC+5:30)</span>
          </div>
        </motion.div>

        {/* Main Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          <div className="hud-text text-sky-400 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
            FULL STACK ENGINEER
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05] italic">
            I BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-white drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">PRODUCTION-READY</span> WEB EXPERIENCES.
          </h1>
        </motion.div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-slate-200 text-base sm:text-lg md:text-xl font-light leading-relaxed"
        >
          I design and develop fast, modern web applications, dashboards and full-stack systems for businesses, startups and organizations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2"
        >
          <button
            onClick={handleViewWork}
            className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black uppercase tracking-[0.2em] text-xs transition-all shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] flex items-center justify-center gap-3 rounded-sm group cursor-pointer"
          >
            <span>VIEW MY WORK</span>
            <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={handleContact}
            className="w-full sm:w-auto px-8 py-4 border border-sky-500/40 bg-slate-900/60 hover:bg-sky-500/10 text-sky-300 hover:text-white font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3 rounded-sm group cursor-pointer backdrop-blur-md"
          >
            <Send size={15} className="group-hover:translate-x-0.5 transition-transform text-sky-400" />
            <span>LET&apos;S WORK TOGETHER</span>
          </button>
        </motion.div>

        {/* Subtle Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-6 border-t border-white/10 w-full max-w-xl flex flex-wrap justify-center items-center gap-2 text-xs font-mono"
        >
          <span className="hud-text text-slate-400 text-[9px] mr-2">CORE STACK:</span>
          {["MERN Stack", "React", "Next.js", "Node.js", "TypeScript", "MongoDB"].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-white/[0.03] border border-sky-500/15 text-slate-300 text-[11px] rounded-sm hover:border-sky-500/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

      </div>
    </div>
  );
}