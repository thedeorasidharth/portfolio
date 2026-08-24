"use client";

import { motion } from "framer-motion";
import { Terminal, Send, Zap } from "lucide-react";

const services = [
  "Full-Stack Web Development",
  "Frontend Architecture & Engineering",
  "React / Next.js Web Applications",
  "UI/UX Design & Creative Interfaces",
  "3D / Interactive Web Experiences (Three.js)",
  "Performance Optimization & Web Vitals",
];

export default function Freelance() {
  const handleStartProject = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "mailto:deorasidharth@gmail.com?subject=Project%20Inquiry%20-%20Freelance";
    }
  };

  return (
    <div className="relative py-8">
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="hud-text text-xl md:text-2xl mb-8 flex items-center gap-4 text-slate-300"
      >
        <span className="w-8 h-[1px] bg-sky-500" />
        FREELANCE // OPEN_FOR_DEPLOYMENT
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="glass p-8 md:p-12 border border-sky-500/20 bg-slate-950/20 backdrop-blur-md relative overflow-hidden group rounded-sm"
      >
        {/* Subtle corner brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-500/60" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-500/60" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-500/60" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-500/60" />

        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-amber-500/5 pointer-events-none" />

        <div className="relative z-10 space-y-8">
          {/* Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="hud-text text-emerald-400 font-bold text-xs tracking-widest">
                STATUS: AVAILABLE FOR NEW PROJECTS
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
              <Zap size={14} className="text-amber-400" />
              <span>RAPID DEPLOYMENT READY</span>
            </div>
          </div>

          {/* Intro Description */}
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl md:text-3xl font-black text-white italic tracking-tight">
              MISSION AVAILABLE // ACCEPTING NEW DEPLOYMENTS
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              Looking for custom full-stack applications, interactive 3D web experiences, or scalable web platforms?
              I am available for freelance contracts, technical consulting, and client builds.
            </p>
          </div>

          {/* Services Grid */}
          <div>
            <span className="hud-text text-sky-400 text-[10px] block mb-4 tracking-widest">
              CAPABILITIES & SERVICES
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/[0.02] border border-sky-500/10 hover:border-sky-500/30 transition-colors"
                >
                  <span className="text-sky-400 font-mono text-sm">→</span>
                  <span className="text-xs md:text-sm font-mono text-slate-200">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10">
            <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
              <Terminal size={16} className="text-sky-400" />
              <span>CONTRACT_TYPE: FREELANCE / CONSULTING</span>
            </div>

            <button
              onClick={handleStartProject}
              className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black uppercase tracking-[0.2em] text-xs transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] flex items-center justify-center gap-3 group cursor-pointer"
            >
              <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
              [ START A PROJECT ]
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
