"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <div className="relative py-10">
      <motion.h2 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="hud-text text-xl mb-12 flex items-center gap-4 text-slate-400"
      >
        <span className="w-6 h-[1px] bg-sky-500/50" />
        MISSION_DOCS // RESUME_ACCESS
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glass p-8 md:p-12 border-l-4 border-l-sky-500 bg-white/[0.02] relative overflow-hidden group"
      >
        <div className="relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                <div className="max-w-xl">
                    <h3 className="text-3xl font-black text-white italic tracking-tighter mb-3">TECHNICAL_DOSSIER</h3>
                    <p className="text-slate-400 text-lg leading-relaxed font-light">
                        Access full mission dossier and technical profile. 
                        Engineering robust full-stack solutions with the MERN ecosystem.
                    </p>
                    <div className="mt-6 flex items-center gap-2 opacity-40">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        <span className="hud-text text-[8px]">LAST_UPDATED: APR_2026</span>
                    </div>
                </div>

                <div className="flex flex-row gap-4 w-full lg:w-auto">
                    <motion.a 
                        href="/resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03, backgroundColor: "#38bdf8", color: "#020617" }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 lg:flex-none px-8 py-4 bg-sky-500 text-slate-950 font-bold uppercase tracking-[0.1em] text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-500/10"
                    >
                        <ExternalLink size={16} />
                        VIEW_RESUME
                    </motion.a>
                    <motion.a 
                        href="/resume.pdf" 
                        download="Sidharth_Deora_Resume.pdf"
                        whileHover={{ scale: 1.03, borderColor: "#ffffff", color: "#ffffff" }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 lg:flex-none px-8 py-4 border border-sky-500/50 text-sky-500 font-bold uppercase tracking-[0.1em] text-sm transition-all flex items-center justify-center gap-2"
                    >
                        <Download size={16} />
                        DOWNLOAD
                    </motion.a>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
}
