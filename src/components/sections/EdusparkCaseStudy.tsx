"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, ArrowRight, ShieldCheck, Layers, Server, Activity } from "lucide-react";

const systemWorkflow = [
  { step: "01", label: "Student Auth", desc: "Secure portal login & active session check" },
  { step: "02", label: "Test Select", desc: "Access assigned timed test suite" },
  { step: "03", label: "Live Attempt", desc: "OMR-style timed exam interface" },
  { step: "04", label: "Auto Evaluation", desc: "Instant answer key cross-verification" },
  { step: "05", label: "Result Log", desc: "Detailed score analytics & history" },
];

const capabilities = [
  "Student Authentication & Session Security",
  "Test & Question Bank Administration",
  "Timed Examination Engine with Auto-Submit",
  "OMR-Style Interactive Response Sheet",
  "Automated Evaluation & Instant Scoring",
  "Student History & Performance Analytics",
  "Admin Management Control Dashboard",
  "RESTful Node.js Backend & Express APIs",
  "MongoDB Database Schemas & Data Storage",
  "Vercel Cloud Production Deployment",
];

export default function EdusparkCaseStudy() {
  return (
    <div className="relative py-8">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[9px] font-mono tracking-widest uppercase">
            FLAGSHIP CASE STUDY
          </span>
          <span className="hud-text text-sky-400 text-[10px]">PRODUCTION SYSTEM</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tight uppercase">
          EDUSPARK // ONLINE EXAMINATION PLATFORM
        </h2>
        <p className="text-slate-200 text-base md:text-lg font-light mt-2 max-w-3xl leading-relaxed">
          A production-ready online examination platform designed to manage assessments, students, tests and results.
        </p>
      </motion.div>

      {/* Main Case Study Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="glass p-6 md:p-10 border border-sky-500/30 bg-slate-950/40 backdrop-blur-md relative overflow-hidden rounded-sm space-y-8 shadow-[0_0_30px_rgba(56,189,248,0.08)]"
      >
        {/* Tactical HUD accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-400" />

        {/* Top Summary Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-3">
            <Layers className="text-sky-400 shrink-0" size={18} />
            <div>
              <span className="hud-text text-slate-400 block text-[8px]">ROLE</span>
              <span className="text-white font-bold">Full-Stack Architect & Dev</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Server className="text-sky-400 shrink-0" size={18} />
            <div>
              <span className="hud-text text-slate-400 block text-[8px]">ARCHITECTURE</span>
              <span className="text-white font-bold">MERN / Next.js / Express / Mongo</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Activity className="text-emerald-400 shrink-0" size={18} />
            <div>
              <span className="hud-text text-slate-400 block text-[8px]">DEPLOYMENT STATUS</span>
              <span className="text-emerald-400 font-bold">LIVE PRODUCTION</span>
            </div>
          </div>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-red-950/20 border border-red-500/20 rounded-sm space-y-2">
            <span className="hud-text text-red-400 text-[9px] font-bold">PROBLEM STATEMENT</span>
            <h3 className="text-lg font-bold text-white">Manual Assessment Overhead & Delay</h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Educational institutions face administrative delays, grading inaccuracies, and security vulnerabilities when conducting manual paper assessments or unmonitored test workflows.
            </p>
          </div>

          <div className="p-5 bg-emerald-950/20 border border-emerald-500/20 rounded-sm space-y-2">
            <span className="hud-text text-emerald-400 text-[9px] font-bold">ENGINEERED SOLUTION</span>
            <h3 className="text-lg font-bold text-white">Automated OMR & Real-Time Test Engine</h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Built a unified web platform that automates test distribution, enforces strict timed assessment rules, processes OMR responses instantly, and generates detailed student analytics.
            </p>
          </div>
        </div>

        {/* Visual System Overview / Mission Brief Workflow Panel */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <span className="hud-text text-sky-400 text-[10px] tracking-widest font-bold">
              SYSTEM OVERVIEW // ASSESSMENT WORKFLOW PIPELINE
            </span>
            <span className="hud-text text-slate-400 text-[8px]">
              END-TO-END AUTOMATION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
            {systemWorkflow.map((item, idx) => (
              <div
                key={item.step}
                className="p-4 bg-slate-900/60 border border-sky-500/20 hover:border-sky-400 transition-all rounded-sm flex flex-col justify-between relative group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="hud-text text-sky-400 font-bold text-[11px]">{item.step}</span>
                  {idx < systemWorkflow.length - 1 && (
                    <ArrowRight size={12} className="hidden sm:block text-slate-600 group-hover:text-sky-400 transition-colors" />
                  )}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-mono uppercase mb-1">{item.label}</h4>
                  <p className="text-[11px] text-slate-400 font-light leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implemented System Capabilities List */}
        <div className="space-y-4 pt-2">
          <span className="hud-text text-sky-400 text-[10px] tracking-widest block font-bold">
            IMPLEMENTED SYSTEM CAPABILITIES
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-white/[0.02] border border-sky-500/10 hover:border-sky-500/30 transition-colors rounded-sm"
              >
                <CheckCircle2 size={16} className="text-sky-400 shrink-0" />
                <span className="text-xs md:text-sm font-mono text-slate-200">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live CTA Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>VERIFIED DEPLOYMENT: EDUSPARK LIVE SYSTEM</span>
          </div>

          <a
            href="https://www.edusparksheoganj.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black uppercase tracking-[0.2em] text-xs transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] flex items-center justify-center gap-3 group cursor-pointer rounded-sm"
          >
            <span>LAUNCH LIVE PLATFORM</span>
            <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
