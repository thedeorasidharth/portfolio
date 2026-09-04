"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Wrench, CheckCircle } from "lucide-react";

const techCategories = [
  {
    category: "FRONTEND ENGINEERING",
    icon: Monitor,
    skills: [
      { name: "React.js", desc: "Interactive UI & Component Architecture" },
      { name: "Next.js", desc: "SSR, SSG & Full-Stack React Framework" },
      { name: "TypeScript / JS", desc: "Type-Safe Application Logic" },
      { name: "HTML5 / CSS3", desc: "Semantic Markup & Responsive Design" },
      { name: "Tailwind CSS", desc: "Utility-First Design Systems" },
    ],
  },
  {
    category: "BACKEND ARCHITECTURE",
    icon: Server,
    skills: [
      { name: "Node.js", desc: "Asynchronous JavaScript Runtime" },
      { name: "Express.js", desc: "RESTful API Framework & Middleware" },
      { name: "REST APIs", desc: "Endpoint Design & JSON Integration" },
      { name: "Auth & Security", desc: "JWT, Session Security & Hashing" },
      { name: "Socket.io", desc: "Real-Time WebSocket Communication" },
    ],
  },
  {
    category: "DATABASE & DATA LAYER",
    icon: Database,
    skills: [
      { name: "MongoDB", desc: "NoSQL Document Database Engine" },
      { name: "Mongoose", desc: "Schema Modeling & Validation" },
      { name: "Data Modeling", desc: "Query Optimization & Relations" },
      { name: "File Storage", desc: "Multer & PDF File Pipeline Handling" },
    ],
  },
  {
    category: "TOOLS & DEPLOYMENT",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", desc: "Version Control & Code Repositories" },
      { name: "Vercel", desc: "Cloud Deployment & Edge Platform" },
      { name: "Docker", desc: "Containerized Environments" },
      { name: "Package Managers", desc: "NPM / PNPM Workspaces" },
    ],
  },
];

export default function Skills() {
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
          TECHNICAL_ARSENAL // TECH STACK & DOMAINS
        </h2>
        <p className="text-slate-300 text-sm md:text-base font-light mt-2 max-w-2xl">
          Core technologies and production-tested stack used to build full-stack web applications from architecture to deployment.
        </p>
      </motion.div>

      {/* Tech Domains Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass p-6 md:p-8 border border-sky-500/20 bg-slate-950/30 backdrop-blur-md relative overflow-hidden group hover:border-sky-500/40 transition-all rounded-sm space-y-5"
            >
              {/* Corner HUD accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-sky-500/50" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-sky-500/50" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-sky-500/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-sky-500/50" />

              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Icon size={16} />
                  </div>
                  <h3 className="hud-text text-slate-200 font-bold text-xs tracking-wider">
                    {cat.category}
                  </h3>
                </div>
                <span className="hud-text text-emerald-400 text-[9px]">VERIFIED</span>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {cat.skills.map((s) => (
                  <div
                    key={s.name}
                    className="p-2.5 bg-white/[0.02] border border-sky-500/10 hover:border-sky-500/30 transition-colors rounded-sm flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle size={14} className="text-sky-400 shrink-0" />
                      <span className="font-mono text-xs font-bold text-white">{s.name}</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 text-right font-light">
                      {s.desc}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
