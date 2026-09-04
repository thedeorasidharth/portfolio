"use client";

import { motion } from "framer-motion";
import { Send, MessageSquare, Terminal, Zap, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const servicesList = [
  "Full-Stack Web Application Development",
  "Custom Next.js & React Dashboards",
  "Online Examination & Assessment Systems",
  "RESTful API & Database Integration",
  "UI/UX Design & Tactical Glass Interfaces",
  "Performance & Web Vitals Optimization",
];

export default function Freelance() {
  const handleStartProject = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = siteConfig.socials.whatsapp;
    }
  };

  return (
    <div className="relative py-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8"
      >
        <h2 className="hud-text text-xl md:text-2xl flex items-center gap-4 text-slate-300">
          <span className="w-8 h-[1px] bg-sky-500" />
          FREELANCE_DISPATCH // PROJECT INQUIRY
        </h2>
      </motion.div>

      {/* Main Freelance Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="glass p-8 md:p-12 border border-sky-500/30 bg-slate-950/40 backdrop-blur-md relative overflow-hidden group rounded-sm shadow-[0_0_35px_rgba(56,189,248,0.1)]"
      >
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-400" />

        {/* Ambient Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-emerald-500/10 pointer-events-none" />

        <div className="relative z-10 space-y-8">
          {/* Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="hud-text text-emerald-400 font-bold text-xs tracking-widest">
                STATUS: ACCEPTING NEW CLIENT PROJECTS
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-300 text-xs font-mono">
              <Zap size={14} className="text-amber-400" />
              <span>RAPID FULL-STACK DEPLOYMENT</span>
            </div>
          </div>

          {/* Headline & Subhead */}
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-3xl md:text-5xl font-black text-white italic tracking-tight uppercase">
              HAVE A PROJECT IN MIND?
            </h3>
            <p className="text-sky-300 text-lg md:text-xl font-semibold italic">
              &quot;Let&apos;s build something that actually works.&quot;
            </p>
            <p className="text-slate-200 text-sm md:text-base font-light leading-relaxed pt-1">
              Whether you need a custom web application, an online assessment platform, a high-converting business site, or full-stack engineering, I can help you build and launch it end-to-end.
            </p>
          </div>

          {/* Quick Capability List */}
          <div className="space-y-3">
            <span className="hud-text text-sky-400 text-[10px] block tracking-widest font-bold">
              AVAILABLE CONTRACT SERVICES
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {servicesList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 bg-slate-900/60 border border-sky-500/15 rounded-sm"
                >
                  <CheckCircle2 size={14} className="text-sky-400 shrink-0" />
                  <span className="text-xs font-mono text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dual CTAs & Direct Channels */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
              <Terminal size={16} className="text-sky-400" />
              <span>ESTIMATED TURNAROUND: FAST & TIMELY</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 border border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 rounded-sm cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>WHATSAPP DIRECT</span>
              </a>

              <button
                onClick={handleStartProject}
                className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black uppercase tracking-[0.2em] text-xs transition-all shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] flex items-center justify-center gap-3 rounded-sm cursor-pointer group"
              >
                <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                <span>START A PROJECT</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
