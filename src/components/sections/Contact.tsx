"use client";

import { motion } from "framer-motion";
import { MessageSquare, Send, Link as LinkIcon, Camera, Mail } from "lucide-react";

export default function Contact() {
  const whatsappUrl = "https://wa.me/919001890408?text=Hi%20Sidharth%2C%20I%20want%20to%20connect%20regarding%20your%20portfolio";
  const linkedinUrl = "https://linkedin.com/in/thedeorasidharth";
  const instagramUrl = "https://instagram.com/thedeorasidharth";

  return (
    <div className="relative py-12">
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="hud-text text-xl md:text-2xl mb-8 tracking-[0.4em] text-center text-slate-300"
      >
        ESTABLISH_COMM_LINK // RADAR_SIGNAL
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto p-8 md:p-10 relative overflow-hidden group rounded-sm"
        style={{
          background: "rgba(15, 23, 42, 0.18)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(56, 189, 248, 0.35)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
        }}
      >
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-sky-500/60" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-sky-500/60" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-sky-500/60" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-sky-500/60" />

        <div className="relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_#ef4444]" />
            <span className="hud-text text-[9px] text-red-400">FREQUENCY_ACTIVE // AWAITING_SIGNAL</span>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-black text-white italic tracking-tight mb-2">
              AWAITING ORDERS.
            </h3>
            <p className="text-slate-300 text-sm md:text-base max-w-md mx-auto font-light leading-relaxed">
              Frequency open for collaboration, deployment, or freelance inquiry. Transmit your message below.
            </p>
          </div>

          <div className="flex flex-col gap-3 max-w-md mx-auto pt-2">
            <a
              href="mailto:deorasidharth1@gmail.com"
              className="w-full py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black uppercase tracking-[0.2em] text-xs transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
              SEND SIGNAL (EMAIL)
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} />
                WHATSAPP
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 border border-sky-500/40 text-sky-400 hover:bg-sky-500/10 font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <LinkIcon size={14} />
                LINKEDIN
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 border border-pink-500/40 text-pink-400 hover:bg-pink-500/10 font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Camera size={14} />
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
