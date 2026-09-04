"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Link as LinkIcon, Camera, Code2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  return (
    <div className="relative py-12">
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="hud-text text-xl md:text-2xl mb-8 tracking-[0.3em] text-center text-slate-300"
      >
        ESTABLISH_COMM_LINK // CONTACT & INQUIRIES
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto p-8 md:p-12 relative overflow-hidden rounded-sm backdrop-blur-md border border-sky-500/30 bg-slate-950/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        {/* Tactical Corner Accents */}
        <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-sky-400" />
        <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-sky-400" />
        <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-sky-400" />
        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-sky-400" />

        <div className="relative z-10 text-center space-y-8">
          {/* Active Frequency Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="hud-text text-[9px] text-emerald-400 font-bold tracking-widest">
              COMMUNICATIONS OPEN // READY FOR INQUIRIES
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h3 className="text-3xl md:text-5xl font-black text-white italic tracking-tight uppercase">
              LET&apos;S BUILD TOGETHER.
            </h3>
            <p className="text-slate-200 text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed">
              Have a project, web application, or freelance contract in mind? Send an email or connect directly on WhatsApp.
            </p>
          </div>

          {/* Direct Actions Grid */}
          <div className="flex flex-col gap-4 max-w-lg mx-auto pt-2">
            {/* Main Email CTA */}
            <a
              href={`mailto:${siteConfig.socials.email}`}
              aria-label="Send email to Sidharth Deora"
              className="w-full py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black uppercase tracking-[0.2em] text-xs transition-all shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] flex items-center justify-center gap-3 rounded-sm group cursor-pointer"
            >
              <Mail size={18} />
              <span>SEND EMAIL ({siteConfig.socials.email})</span>
            </a>

            {/* Direct Social / Messaging Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Sidharth Deora on WhatsApp"
                className="py-3.5 px-4 bg-emerald-950/20 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 rounded-sm"
              >
                <MessageSquare size={16} />
                <span>WHATSAPP ({siteConfig.socials.phone})</span>
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sidharth Deora's LinkedIn profile"
                className="py-3.5 px-4 bg-slate-900/60 hover:bg-sky-500/20 border border-sky-500/40 text-sky-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 rounded-sm"
              >
                <LinkIcon size={16} />
                <span>LINKEDIN PROFILE</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sidharth Deora's GitHub profile"
                className="py-3.5 px-4 bg-slate-900/60 hover:bg-white/10 border border-slate-700 text-slate-200 font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 rounded-sm"
              >
                <Code2 size={16} />
                <span>GITHUB REPOS</span>
              </a>

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sidharth Deora's Instagram profile"
                className="py-3.5 px-4 bg-pink-950/20 hover:bg-pink-500/20 border border-pink-500/40 text-pink-400 font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 rounded-sm"
              >
                <Camera size={16} />
                <span>INSTAGRAM</span>
              </a>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-6 border-t border-white/10 text-xs font-mono text-slate-400">
            <span>LOCATION: INDIA (IST / UTC+5:30) • RESPONSE TIME: WITHIN 24 HOURS</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
