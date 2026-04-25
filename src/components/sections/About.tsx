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
    <div className="relative">
      <div className="absolute -top-12 -left-12 w-32 h-32 border-t-2 border-l-2 border-sky-500/20" />
      
      <div className="glass p-10 md:p-16 border-l-4 border-l-sky-500 relative overflow-hidden group">
        {/* Interior Scanline */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent h-1/2 w-full animate-scanline pointer-events-none opacity-20" />
        
        <h2 className="hud-text text-2xl mb-8 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-sky-500" />
          SUBJECT PROFILE // ACCESSING...
        </h2>
        
        <div className="space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-100 font-light tracking-wide max-w-3xl">
                I build high-performance full stack applications with a focus on scalability, real-time interaction, and modern UI/UX. 
                Passionate about crafting immersive digital experiences that combine functionality with creativity.
            </p>
            <p className="text-lg text-slate-400 font-mono italic">
                {">"} Executing Full Stack protocols...
                <br />
                {">"} Optimizing system performance...
                <br />
                {">"} Deploying scalable architecture...
            </p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
          {profileFields.map((item, i) => (
            <div key={i} className="flex flex-col">
              <span className="hud-text opacity-40 text-[9px] mb-1">{item.label}</span>
              <span className="text-sky-400 font-bold tracking-widest text-sm md:text-base leading-tight">
                {item.val}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
