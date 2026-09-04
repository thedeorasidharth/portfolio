"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, CheckCircle, UserCheck } from "lucide-react";

interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  isFlagship?: boolean;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "PROJ-01",
    title: "EDUSPARK",
    subtitle: "Online Examination & Assessment Platform",
    desc: "A production-ready online examination platform engineered to manage assessments, students, timed tests, automated grading, and score analytics.",
    problem: "Traditional paper exams suffer from manual grading delays, error-prone evaluation, and administrative friction for institutions.",
    solution: "Developed a full-stack assessment portal with secure student logins, timed test workflows, OMR-style auto-grading, and instant score distribution.",
    features: [
      "Student authentication & session management",
      "Timed examination workflow with anti-cheat timeout controls",
      "Automated OMR-style evaluation engine",
      "Student history & performance tracking dashboards",
    ],
    tech: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    role: "Full-Stack Developer & System Architect",
    liveUrl: "https://www.edusparksheoganj.in/",
    isFlagship: true,
  },
  {
    id: "PROJ-02",
    title: "SKILLSHARE LIVE",
    subtitle: "Real-Time Collaborative Study Rooms & Interaction Hub",
    desc: "Interactive study environment enabling users to launch live study rooms, chat synchronously, share resources, and collaborate in real-time.",
    problem: "Remote students struggle to maintain focus and collaborate live without heavy video conferencing overhead.",
    solution: "Engineered a low-latency WebSockets application powering real-time chat rooms, study session timers, and active member presence monitoring.",
    features: [
      "Real-time multi-user study rooms via WebSockets",
      "Live chat & instant resource link distribution",
      "Presence status indicators & active room monitoring",
      "Clean, minimalist dark interface design",
    ],
    tech: ["React", "Node.js", "Socket.io", "Express.js", "Tailwind CSS"],
    role: "Full-Stack Developer",
    liveUrl: "https://skillshare-delta.vercel.app/",
  },
  {
    id: "PROJ-03",
    title: "HEALTHX",
    subtitle: "Full-Stack Medical Management Platform",
    desc: "Comprehensive web platform for managing patient records, doctor profiles, medical departments, and real-time appointment scheduling workflows.",
    problem: "Healthcare facilities often rely on fragmented paper or legacy spreadsheets to track patients and doctor shifts, leading to scheduling double-bookings.",
    solution: "Built a centralized MERN web application with role-based access for patients and staff, streamlined appointment booking, and organized record storage.",
    features: [
      "Patient & doctor dashboard workflows",
      "Real-time appointment scheduling & status tracking",
      "Medical records database management",
      "Responsive emergency triage UI",
    ],
    tech: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    role: "Full-Stack Developer",
    liveUrl: "https://healthx-five.vercel.app/",
  },
  {
    id: "PROJ-04",
    title: "NOTEHIVE",
    subtitle: "Collaborative Academic Notes Sharing & AI Platform",
    desc: "Academic notes sharing network featuring multi-format PDF uploads, AI-powered text summarization, instant search, and community rating metrics.",
    problem: "Students lack a structured platform to exchange verified study notes, search course documents quickly, or get concise summaries before exams.",
    solution: "Architected a full-stack notes repository supporting PDF file uploads via Multer, token authentication, intelligent text searching, and AI summary capabilities.",
    features: [
      "PDF upload pipeline & document file handling",
      "AI-powered note summarization engine",
      "User rating system & category search filters",
      "JWT user authentication & profile history",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Multer", "JWT", "Tailwind CSS"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/thedeorasidharth/NOTEHIVE-V2",
  },
];

export default function Projects() {
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
          FEATURED_DEPLOYMENTS // PRODUCTION PROJECTS
        </h2>
        <p className="text-slate-300 text-sm md:text-base font-light mt-2 max-w-2xl">
          Curated selection of real-world full-stack applications built with robust backend systems, databases, and modern frontend interfaces.
        </p>
      </motion.div>

      {/* Projects Stack */}
      <div className="space-y-8">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`glass p-6 md:p-10 border bg-slate-950/30 backdrop-blur-md relative overflow-hidden group rounded-sm transition-all ${
              project.isFlagship
                ? "border-sky-500/40 shadow-[0_0_25px_rgba(56,189,248,0.1)]"
                : "border-sky-500/20 hover:border-sky-500/40"
            }`}
          >
            {/* Tactical Corner Accents */}
            <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-sky-400 opacity-70" />
            <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-sky-400 opacity-70" />
            <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-sky-400 opacity-70" />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-sky-400 opacity-70" />

            <div className="relative z-10 space-y-6">
              {/* Top Row Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="hud-text text-sky-400 text-xs font-mono font-bold">
                    {project.id}
                  </span>
                  {project.isFlagship && (
                    <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[9px] font-mono tracking-widest uppercase">
                      FLAGSHIP BUILD
                    </span>
                  )}
                  <span className="text-xs text-slate-300 font-mono hidden sm:inline-block">
                    • {project.subtitle}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <UserCheck size={14} className="text-sky-400" />
                  <span>ROLE: {project.role}</span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl md:text-4xl font-black text-white italic tracking-tight mb-2 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-200 text-sm md:text-base font-light leading-relaxed max-w-3xl">
                  {project.desc}
                </p>
              </div>

              {/* Problem vs Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 bg-slate-900/50 border border-white/10 rounded-sm">
                  <span className="hud-text text-amber-400 text-[9px] block mb-1">PROBLEM</span>
                  <p className="text-slate-300 font-light leading-relaxed">{project.problem}</p>
                </div>
                <div className="p-4 bg-slate-900/50 border border-sky-500/20 rounded-sm">
                  <span className="hud-text text-sky-400 text-[9px] block mb-1">SOLUTION</span>
                  <p className="text-slate-300 font-light leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Key Features Grid */}
              <div>
                <span className="hud-text text-sky-400 text-[10px] block mb-2 tracking-widest font-bold">
                  KEY IMPLEMENTED FEATURES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 font-mono">
                      <CheckCircle size={13} className="text-sky-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills & Links Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2.5 py-1 bg-sky-500/10 text-sky-300 font-mono border border-sky-500/20 uppercase tracking-wider rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-sky-500/30 hover:border-sky-400 bg-slate-900/60 hover:bg-sky-500/10 text-sky-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 rounded-sm cursor-pointer"
                    >
                      <Code2 size={14} />
                      <span>GITHUB REPO</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black uppercase text-xs tracking-wider transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.3)] rounded-sm cursor-pointer"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
