"use client";

import { motion } from "framer-motion";
import { ExternalLink, Terminal, Code, Database, Layers } from "lucide-react";

const projects = [
  {
    title: "HEALTHX",
    desc: "A comprehensive full-stack system for managing patients, doctors, medical records, and appointments with real-time tracking.",
    tech: ["MERN Stack", "MongoDB", "Express", "React", "Node"],
    id: "HOSP-001",
    github: "https://github.com/thedeorasidharth/HEALTHX"
  },
  {
    title: "NOTEHIVE",
    desc: "Collaborative notes sharing platform featuring PDF uploads, AI-powered summarization, search, and a rating system.",
    tech: ["MERN Stack", "JWT", "Multer", "MongoDB"],
    id: "NOTE-002",
    github: "https://github.com/thedeorasidharth/NOTEHIVE-V2"
  },
  {
    title: "SKILLSHARE LIVE",
    desc: "Real-time study platform enabling users to join interactive rooms for collaborative learning and live interaction.",
    tech: ["React", "Node.js", "Socket.io"],
    id: "SKILL-003",
    github: "https://skillshare-delta.vercel.app/"
  },
];

export default function Projects() {
  return (
    <div className="space-y-20">
      <div>
        <h2 className="hud-text text-2xl mb-12 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-sky-500" />
          MISSION_LOG // ACTIVE_DEPLOYMENTS
        </h2>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Targeting Lock-on 🔴 */}
              <div className="absolute -inset-4 border-2 border-red-600/0 group-hover:border-red-600/30 transition-all duration-300 pointer-events-none z-20">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500 opacity-0 group-hover:opacity-100" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-500 opacity-0 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-500 opacity-0 group-hover:opacity-100" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500 opacity-0 group-hover:opacity-100" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all">
                  <div className="w-4 h-4 bg-red-600 rounded-full animate-ping" />
                  <span className="hud-text text-red-500 mt-2 text-[8px]">TARGET_LOCKED</span>
                </div>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass p-8 cursor-pointer transition-all border-l-0 group-hover:border-l-4 group-hover:border-l-red-500 bg-white/5 hover:bg-white/10 group-active:scale-[0.98]"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="hud-text text-slate-500 mb-2 block">ID: {project.id}</span>
                    <h3 className="text-3xl font-black mb-3 text-white tracking-tighter group-hover:text-sky-400 transition-colors italic">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                </div>

                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] px-3 py-1 bg-sky-500/10 text-sky-400 font-mono border border-sky-500/20 uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                  <div className="flex gap-4 opacity-40">
                    <Terminal size={16} />
                    <Code size={16} />
                  </div>
                  <span className="hud-text text-sky-400 group-hover:text-white transition-colors">
                    [ INITIALIZE_ACCESS ]
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GitHub Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glass p-10 border-t-4 border-sky-500 bg-sky-500/5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <Terminal size={120} />
        </div>

        <h3 className="hud-text text-xl mb-10 flex items-center gap-3">
          <Terminal className="text-sky-500" size={20} />
          GITHUB_SQUADRON_STATS
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="flex flex-col">
            <span className="hud-text text-slate-500 text-[9px] mb-2">TOTAL_PROJECTS</span>
            <span className="text-4xl font-black text-white italic">24+</span>
          </div>
          <div className="flex flex-col">
            <span className="hud-text text-slate-500 text-[9px] mb-2">TOP_LANGUAGES</span>
            <div className="flex gap-2">
              <span className="text-xs px-2 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20">TS</span>
              <span className="text-xs px-2 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">JS</span>
              <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-500 border border-blue-500/20">React</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="hud-text text-slate-500 text-[9px] mb-2">CONTRIBUTION_LEVEL</span>
            <span className="text-xl font-bold text-green-400 uppercase tracking-widest">HIGH_INTENSITY</span>
          </div>
        </div>

        <a
          href="https://github.com/thedeorasidharth"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-8 py-4 bg-sky-500 text-slate-950 font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] group"
        >
          VIEW_FULL_PROFILE
          <ExternalLink className="group-hover:translate-x-1 transition-transform" size={18} />
        </a>
      </motion.div>
    </div>
  );
}
