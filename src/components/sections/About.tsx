"use client";

import { motion } from "framer-motion";

export default function About() {
  const profileFields = [
    { label: "CALLSIGN", val: "THEDEORASIDH" },
    { label: "ROLE", val: "FULL STACK DEVELOPER (MERN)" },
    { label: "SPECIALIZATION", val: "SCALABLE APPS & REAL-TIME" },
    { label: "TECH STACK", val: "MERN • TS • NEXT.JS" },
    { label: "FOCUS", val: "INTERACTIVE UX / PERFORMANCE" },
    { label: "EXP_LEVEL", val: "MERN STACK (PROJECT-BASED)" },
  ];

  return (
    <div className="relative py-8">
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="hud-text text-xl md:text-2xl mb-8 flex items-center gap-4 text-slate-300"
      >
        <span className="w-8 h-[1px] bg-sky-500" />
        SUBJECT PROFILE // ACCESSING...
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="glass p-6 md:p-10 border border-sky-500/20 bg-slate-950/20 backdrop-blur-md relative overflow-hidden group rounded-sm"
      >
        {/* Corner HUD Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-sky-500/60" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-sky-500/60" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-sky-500/60" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-sky-500/60" />

        <div className="space-y-6 relative z-10">
          <p className="text-lg md:text-xl leading-relaxed text-slate-100 font-light tracking-wide max-w-3xl">
            I build high-performance full stack applications with a focus on scalability, real-time interaction, and modern UI/UX.
            Passionate about crafting immersive digital experiences that combine robust engineering with creative 3D interfaces.
          </p>

          <div className="p-4 bg-sky-500/5 border-l-2 border-sky-500 font-mono text-xs text-sky-300 space-y-1">
            <div>{">"} Executing Full Stack protocols...</div>
            <div>{">"} Optimizing system performance & Web Vitals...</div>
            <div>{">"} Deploying scalable cloud architecture...</div>
          </div>

          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4 border-t border-white/10">
            {profileFields.map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="hud-text text-slate-400 text-[8px] mb-1">{item.label}</span>
                <span className="text-sky-400 font-bold tracking-wider text-xs md:text-sm">
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
