"use client";

import { motion } from "framer-motion";
import { Layout, Server, GraduationCap, Cpu, CheckCircle } from "lucide-react";

const services = [
  {
    id: "SRV-01",
    title: "Business Websites",
    icon: Layout,
    desc: "Modern, responsive websites designed to establish credibility and convert visitors into customers.",
    highlights: [
      "Custom UI/UX & Responsive Layouts",
      "High-Performance Web Vitals",
      "SEO & Conversion Optimization",
      "Interactive Modern Components",
    ],
  },
  {
    id: "SRV-02",
    title: "Full-Stack Applications",
    icon: Server,
    desc: "Custom web applications with authentication, APIs, databases, dashboards and complete frontend/backend systems.",
    highlights: [
      "Secure User Authentication & Roles",
      "RESTful API & Database Architecture",
      "Real-Time Data Sync & Dashboards",
      "Scalable MERN & Next.js Stack",
    ],
  },
  {
    id: "SRV-03",
    title: "Education Platforms",
    icon: GraduationCap,
    desc: "Online examination systems, student dashboards, test management, results and assessment workflows.",
    highlights: [
      "Timed Assessments & Anti-Cheat Controls",
      "Automated Evaluation & Instant Scoring",
      "Student History & Progress Analytics",
      "Question Bank & Test Management",
    ],
  },
  {
    id: "SRV-04",
    title: "SaaS & Custom Tools",
    icon: Cpu,
    desc: "Custom internal tools, dashboards, automation systems and web-based products tailored for operations.",
    highlights: [
      "Admin Control Panels & Workflows",
      "Third-Party API Integrations",
      "Data Visualizations & Reports",
      "Production Cloud Deployments",
    ],
  },
];

export default function Services() {
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
          TACTICAL_CAPABILITIES // WHAT I BUILD
        </h2>
        <p className="text-slate-300 text-sm md:text-base font-light mt-2 max-w-2xl">
          End-to-end web engineering capabilities designed to solve real business problems and deliver measurable results.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass p-6 md:p-8 border border-sky-500/20 bg-slate-950/30 backdrop-blur-md relative overflow-hidden group hover:border-sky-500/50 transition-all rounded-sm"
            >
              {/* Corner HUD accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-sky-500/50 group-hover:border-sky-400 transition-colors" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-sky-500/50 group-hover:border-sky-400 transition-colors" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-sky-500/50 group-hover:border-sky-400 transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-sky-500/50 group-hover:border-sky-400 transition-colors" />

              {/* Ambient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10 space-y-4">
                {/* Header row */}
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-sm bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all">
                    <Icon size={20} />
                  </div>
                  <span className="hud-text text-sky-400/70 text-[9px] font-mono tracking-widest">
                    ID: {service.id}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white italic tracking-tight group-hover:text-sky-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Capability Highlights */}
                <div className="pt-2 space-y-2 border-t border-white/10">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                      <CheckCircle size={13} className="text-sky-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
