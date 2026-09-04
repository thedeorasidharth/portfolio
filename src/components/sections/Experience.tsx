"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Server, Globe, Code, Terminal, Layers } from "lucide-react";

const evidenceLog = [
  {
    icon: Globe,
    title: "Production Deployments",
    detail: "Built and deployed live web platforms like Eduspark (online examination system) operating on custom domains with active test management workflows.",
  },
  {
    icon: Server,
    title: "Full-Stack Architecture",
    detail: "Proven expertise engineering complete frontend-to-backend web applications using Node.js APIs, Express servers, and MongoDB database models.",
  },
  {
    icon: Layers,
    title: "Interactive Web Systems",
    detail: "Experienced in real-time WebSockets communication (Socket.io) for multi-user study rooms and complex client-side state management.",
  },
  {
    icon: Code,
    title: "Clean Code & Open Source",
    detail: "Active public GitHub repositories featuring clean code structure, document uploads handling, and modern UI component patterns.",
  },
];

export default function Experience() {
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
          MISSION_LOG // EXPERIENCE & CREDIBILITY
        </h2>
        <p className="text-slate-300 text-sm md:text-base font-light mt-2 max-w-2xl">
          Concrete proof of execution, production deployments, and engineering standards.
        </p>
      </motion.div>

      {/* Experience & Proof Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="glass p-6 md:p-10 border border-sky-500/20 bg-slate-950/30 backdrop-blur-md relative overflow-hidden rounded-sm space-y-6"
      >
        {/* Tactical HUD Corner Accents */}
        <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-sky-400" />
        <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-sky-400" />
        <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-sky-400" />
        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-sky-400" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} className="text-emerald-400" />
            <span className="hud-text text-white font-bold text-xs tracking-wider">
              VERIFIED ENGINEERING RECORD
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Terminal size={14} className="text-sky-400" />
            <span>STATUS: 100% PRODUCTION READY</span>
          </div>
        </div>

        {/* Evidence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {evidenceLog.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-5 bg-slate-900/40 border border-sky-500/15 hover:border-sky-500/35 transition-colors rounded-sm space-y-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-base font-bold text-white font-mono">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tactical Footer Note */}
        <div className="pt-4 border-t border-white/10 text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>{"// DIRECT REPOSITORY VERIFICATION AVAILABLE UPON REQUEST"}</span>
          <span className="hud-text text-sky-400 text-[10px]">THEDEORASIDHARTH</span>
        </div>
      </motion.div>
    </div>
  );
}
