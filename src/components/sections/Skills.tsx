"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "MERN_STACK", level: 95, icon: "MERN" },
  { name: "TYPESCRIPT", level: 92, icon: "TS" },
  { name: "NEXT_JS", level: 94, icon: "NX" },
  { name: "JAVASCRIPT", level: 96, icon: "JS" },
  { name: "REST_APIS", level: 90, icon: "REST" },
  { name: "AUTH_SYSTEMS", level: 88, icon: "SEC" },
  { name: "FILE_HANDLING", level: 85, icon: "FILE" },
  { name: "DB_MONGO", level: 93, icon: "DB" },
  { name: "UI_UX_DESIGN", level: 90, icon: "UX" },
  { name: "GIT_VERSION", level: 85, icon: "GIT" },
];

export default function Skills() {
  return (
    <div className="relative">
      <h2 className="hud-text text-2xl mb-16 text-center tracking-[0.3em]">
        TACTICAL_ARSENAL // COCKPIT_INSTRUMENTS
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <motion.div 
            key={skill.name} 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col items-center group"
          >
            {/* Circular Radar Indicator */}
            <div className="relative w-24 h-24 mb-4">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="48"
                        cy="48"
                        r="44"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="transparent"
                        className="text-slate-800"
                    />
                    <motion.circle
                        cx="48"
                        cy="48"
                        r="44"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="transparent"
                        strokeDasharray={276}
                        initial={{ strokeDashoffset: 276 }}
                        whileInView={{ strokeDashoffset: 276 - (276 * skill.level) / 100 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-sky-500 shadow-[0_0_15px_#38bdf8]"
                    />
                </svg>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs font-black text-white group-hover:text-sky-400 transition-colors">{skill.icon}</span>
                    <span className="hud-text text-[8px] text-sky-400">{skill.level}%</span>
                </div>

                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-t border-sky-500/10 rounded-full" 
                />
            </div>
            
            <div className="text-center">
                <span className="hud-text tracking-tighter block text-[9px] mb-1">{skill.name}</span>
                <div className="flex gap-0.5 justify-center">
                    {[...Array(5)].map((_, j) => (
                        <div 
                            key={j} 
                            className={`w-1.5 h-0.5 ${j < (skill.level / 20) ? 'bg-sky-500 shadow-[0_0_5px_#38bdf8]' : 'bg-slate-800'}`} 
                        />
                    ))}
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
