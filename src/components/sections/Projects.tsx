"use client";

import { motion } from "framer-motion";
import { ExternalLink, Terminal, Code } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  github: string;
  isFeatured?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "EDU-001",
    title: "EDUSPARK",
    desc: "Interactive educational platform featuring collaborative learning tools, real-time study rooms, resource sharing, and course management.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Socket.io"],
    github: "https://www.edusparksheoganj.in/",
    isFeatured: true,
  },
  {
    id: "SKILL-003",
    title: "SKILLSHARE LIVE",
    desc: "Real-time study platform enabling users to join interactive rooms for collaborative learning and live interaction.",
    tech: ["React", "Node.js", "Socket.io", "Express"],
    github: "https://skillshare-delta.vercel.app/",
  },
  {
    id: "HOSP-001",
    title: "HEALTHX",
    desc: "A comprehensive full-stack medical management platform for patients, doctors, records, and real-time appointment tracking.",
    tech: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
    github: "https://healthx-five.vercel.app/",
  },
  {
    id: "NOTE-002",
    title: "NOTEHIVE",
    desc: "Collaborative notes sharing platform featuring PDF uploads, AI-powered summarization, search, and a rating system.",
    tech: ["MERN Stack", "JWT", "Multer", "MongoDB"],
    github: "https://github.com/thedeorasidharth/NOTEHIVE-V2",
  },

];

export default function Projects() {
  return (
    <div className="relative py-8">
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="hud-text text-xl md:text-2xl mb-8 flex items-center gap-4 text-slate-300"
      >
        <span className="w-8 h-[1px] bg-sky-500" />
        MISSION_LOG // ACTIVE_DEPLOYMENTS
      </motion.h2>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group relative"
          >
            {/* Target Lock-on Corner Accents on Hover */}
            <div className="absolute -inset-2 border border-red-500/0 group-hover:border-red-500/30 transition-all duration-300 pointer-events-none z-20 rounded-sm">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500 opacity-0 group-hover:opacity-100" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-500 opacity-0 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-500 opacity-0 group-hover:opacity-100" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500 opacity-0 group-hover:opacity-100" />
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass p-6 md:p-8 border border-sky-500/20 bg-slate-950/20 backdrop-blur-md hover:bg-slate-900/30 transition-all duration-300 relative overflow-hidden group-active:scale-[0.99] rounded-sm"
            >
              {/* Top Row: ID & Featured Badge */}
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="hud-text text-sky-400 text-[10px] tracking-widest">
                    ID: {project.id}
                  </span>
                  {project.isFeatured && (
                    <span className="hud-text text-[9px] px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      FEATURED BUILD
                    </span>
                  )}
                </div>
                <ExternalLink
                  className="text-sky-400 opacity-50 group-hover:opacity-100 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  size={18}
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl md:text-3xl font-black mb-3 text-white tracking-tight group-hover:text-sky-400 transition-colors italic">
                {project.title}
              </h3>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                {project.desc}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2.5 py-1 bg-sky-500/10 text-sky-400 font-mono border border-sky-500/20 uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono">
                <div className="flex items-center gap-3 text-slate-500">
                  <Terminal size={14} />
                  <Code size={14} />
                </div>
                <span className="hud-text text-sky-400 group-hover:text-white transition-colors">
                  [ {project.isFeatured ? "VIEW PROJECT" : "INITIALIZE_ACCESS"} ]
                </span>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
