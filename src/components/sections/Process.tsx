"use client";

import { motion } from "framer-motion";
import { Search, Compass, Code2, Rocket, ShieldCheck } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "DISCOVER",
    icon: Search,
    desc: "Understand the business, users and requirements.",
    detail: "Analyze project goals, target audience, technical scope, and core feature priorities to establish a clear project roadmap.",
  },
  {
    step: "02",
    title: "DESIGN",
    icon: Compass,
    desc: "Plan the UX, architecture and interface.",
    detail: "Architect system schemas, API contracts, responsive wireframes, and high-converting tactical UI/UX interfaces.",
  },
  {
    step: "03",
    title: "BUILD",
    icon: Code2,
    desc: "Develop the frontend, backend and database.",
    detail: "Write clean, type-safe full-stack code using React/Next.js, Express APIs, Node.js services, and MongoDB database models.",
  },
  {
    step: "04",
    title: "DEPLOY",
    icon: Rocket,
    desc: "Deploy, test and optimize the production system.",
    detail: "Run end-to-end quality checks, optimize performance & Web Vitals, configure custom domains, and deploy to Vercel/cloud infrastructure.",
  },
  {
    step: "05",
    title: "SUPPORT",
    icon: ShieldCheck,
    desc: "Handle improvements, fixes and future iterations.",
    detail: "Provide ongoing technical support, maintenance, security updates, and new feature iterations as the product grows.",
  },
];

export default function Process() {
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
          DEVELOPMENT_PROTOCOL // HOW I WORK
        </h2>
        <p className="text-slate-300 text-sm md:text-base font-light mt-2 max-w-2xl">
          A disciplined, end-to-end development methodology designed to deliver reliable web systems on time and within scope.
        </p>
      </motion.div>

      {/* Process Workflow Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {processSteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass p-5 border border-sky-500/20 bg-slate-950/30 backdrop-blur-md relative overflow-hidden group hover:border-sky-400 transition-all rounded-sm flex flex-col justify-between"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-sky-500/50 group-hover:border-sky-400 transition-colors" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-sky-500/50 group-hover:border-sky-400 transition-colors" />

              <div className="space-y-3">
                {/* Step Number & Icon */}
                <div className="flex justify-between items-center">
                  <span className="hud-text font-black text-sky-400 text-sm">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-sm bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <Icon size={16} />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-black text-white italic tracking-wide group-hover:text-sky-300 transition-colors font-mono">
                  {step.title}
                </h3>

                {/* Concise Summary */}
                <p className="text-slate-200 text-xs font-semibold leading-relaxed">
                  {step.desc}
                </p>

                {/* Detail */}
                <p className="text-slate-400 text-[11px] font-light leading-relaxed pt-2 border-t border-white/10">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
