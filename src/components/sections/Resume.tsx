"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";

export default function Resume() {
  return (
    <div className="relative py-8">
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="hud-text text-xl md:text-2xl mb-8 flex items-center gap-4 text-slate-300"
      >
        <span className="w-8 h-[1px] bg-sky-500" />
        MISSION_DOCS // RESUME_ACCESS
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="glass p-6 md:p-10 border border-sky-500/20 bg-slate-950/20 backdrop-blur-md relative overflow-hidden group rounded-sm"
      >
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-sky-500/60" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-sky-500/60" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-sky-500/60" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-sky-500/60" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-xl space-y-2">
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-sky-400" />
              <h3 className="text-2xl md:text-3xl font-black text-white italic tracking-tight">
                TECHNICAL_DOSSIER
              </h3>
            </div>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              Access full mission dossier and technical profile. Engineering robust full-stack solutions with the MERN ecosystem & modern Web3D.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span>LAST_UPDATED: APR_2026 // DOSSIER_VERIFIED</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black uppercase tracking-[0.15em] text-xs transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
            >
              <ExternalLink size={14} />
              VIEW_RESUME
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Sidharth_Deora_Resume.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3.5 border border-sky-500/50 hover:border-sky-400 text-sky-400 hover:text-white font-black uppercase tracking-[0.15em] text-xs transition-all flex items-center justify-center gap-2"
            >
              <Download size={14} />
              DOWNLOAD
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
