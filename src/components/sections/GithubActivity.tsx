"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Terminal, GitCommit, Flame, Code2, Star, AlertTriangle, Loader2 } from "lucide-react";
import type { GitHubData } from "@/app/api/github/route";

const levelColors = [
  "bg-slate-900/60 border-white/5",                  // level 0: empty
  "bg-sky-950/60 border-sky-500/20 text-sky-500/50",  // level 1: low
  "bg-sky-800/60 border-sky-400/30 text-sky-400/80",  // level 2: med
  "bg-sky-500/80 border-sky-300/50 text-sky-200",     // level 3: high
  "bg-sky-400 border-sky-200 shadow-[0_0_8px_#38bdf8]",// level 4: max
];

const CACHE_KEY = "github_activity_cache_v1";
const CACHE_TTL = 3600 * 1000; // 1 hour

export default function GithubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadGitHubData() {
      // 1. Try local cache first
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed && parsed.timestamp && Date.now() - parsed.timestamp < CACHE_TTL) {
            if (isMounted) {
              setData(parsed.data);
              setLoading(false);
              return;
            }
          }
        }
      } catch {
        // LocalStorage fallback
      }

      // 2. Fetch from API route
      try {
        setLoading(true);
        const res = await fetch("/api/github");
        if (!res.ok) {
          throw new Error(`GitHub API request failed with status ${res.status}`);
        }
        const json: GitHubData = await res.json();
        if (isMounted) {
          setData(json);
          setLoading(false);
          setError(null);
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ timestamp: Date.now(), data: json })
            );
          } catch {
            // LocalStorage write fail
          }
        }
      } catch (err: unknown) {
        if (isMounted) {
          const message = err instanceof Error ? err.message : "Failed to load GitHub activity data";
          setError(message);
          setLoading(false);
        }
      }
    }

    loadGitHubData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Format 366 days into 52+ columns of 7 days each
  const buildHeatmapWeeks = (days: { date: string; level: number }[]) => {
    if (!days || days.length === 0) return [];
    const weeks: { date: string; level: number }[][] = [];
    let currentWeek: { date: string; level: number }[] = [];

    days.forEach((day, index) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || index === days.length - 1) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });

    return weeks;
  };

  return (
    <div className="relative py-8">
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="hud-text text-xl md:text-2xl mb-8 flex items-center gap-4 text-slate-300"
      >
        <span className="w-8 h-[1px] bg-sky-500" />
        GITHUB // ACTIVITY_STATUS
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="glass p-8 md:p-10 border border-sky-500/20 bg-slate-950/20 backdrop-blur-md relative overflow-hidden group rounded-sm"
      >
        {/* Corner HUD accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-500/60" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-500/60" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-500/60" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-500/60" />

        <div className="relative z-10 space-y-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${loading ? "bg-amber-400" : error ? "bg-red-400" : "bg-emerald-400"} opacity-75`} />
                <span className={`relative inline-flex rounded-full h-3 w-3 ${loading ? "bg-amber-500" : error ? "bg-red-500" : "bg-emerald-500"}`} />
              </span>
              <span className={`hud-text font-bold text-xs tracking-widest ${loading ? "text-amber-400" : error ? "text-red-400" : "text-emerald-400"}`}>
                {loading
                  ? "SYNCING_GITHUB // FETCHING DATA..."
                  : error
                  ? "GITHUB_LINK // DATA_UNAVAILABLE"
                  : "LIVE DEVELOPMENT // REPOSITORY MONITOR"}
              </span>
            </div>

            <div className="hud-text text-sky-400 text-[10px] tracking-widest flex items-center gap-2">
              <Terminal size={14} />
              USER: THEDEORASIDHARTH
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="py-12 flex flex-col items-center justify-center gap-4 text-center">
              <Loader2 size={32} className="text-sky-400 animate-spin" />
              <span className="hud-text text-xs text-sky-400 tracking-widest">
                CONNECTING TO GITHUB API // RETRIEVING LIVE METRICS...
              </span>
            </div>
          )}

          {/* Error State */}
          {!loading && error && (
            <div className="py-8 p-6 bg-red-950/20 border border-red-500/30 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-red-400">
                <AlertTriangle size={20} />
                <div className="flex flex-col">
                  <span className="hud-text text-xs text-red-400 font-bold">LIVE TELEMETRY OFFLINE</span>
                  <span className="text-xs text-slate-400 font-mono">{error}</span>
                </div>
              </div>
              <a
                href="https://github.com/thedeorasidharth"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-300 hud-text text-xs flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
              >
                [ OPEN GITHUB ]
                <ExternalLink size={14} />
              </a>
            </div>
          )}

          {/* Success State — Real Live Data */}
          {!loading && !error && data && (
            <>
              {/* Activity Heatmap Grid */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="hud-text text-[9px] text-slate-400">
                    REAL_CONTRIBUTION_HEATMAP (LIVE ANNUAL DATA)
                  </span>
                  <div className="flex items-center gap-2 text-[10px]">
                    <span>LESS</span>
                    <span className="inline-block w-2.5 h-2.5 bg-slate-900 border border-white/10" />
                    <span className="inline-block w-2.5 h-2.5 bg-sky-950 border border-sky-500/30" />
                    <span className="inline-block w-2.5 h-2.5 bg-sky-800 border border-sky-400/40" />
                    <span className="inline-block w-2.5 h-2.5 bg-sky-500" />
                    <span className="inline-block w-2.5 h-2.5 bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
                    <span>MORE</span>
                  </div>
                </div>

                {/* Scrollable Heatmap */}
                <div className="overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-sky-500/20">
                  <div className="flex gap-1 min-w-[560px]">
                    {buildHeatmapWeeks(data.days).map((week, wIndex) => (
                      <div key={wIndex} className="flex flex-col gap-1">
                        {week.map((day, dIndex) => (
                          <div
                            key={dIndex}
                            className={`w-2.5 h-2.5 rounded-[1px] border transition-all duration-200 hover:scale-125 ${levelColors[day.level] || levelColors[0]}`}
                            title={`${day.date}: Level ${day.level} activity`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Real Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-white/10">
                <div className="p-3 bg-white/[0.02] border border-sky-500/10">
                  <span className="hud-text text-slate-500 text-[8px] block mb-1">CURRENT_STREAK</span>
                  <div className="flex items-center gap-2">
                    <Flame size={16} className="text-amber-400" />
                    <span className="text-lg font-black text-white italic">
                      {data.currentStreak} {data.currentStreak === 1 ? "DAY" : "DAYS"}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-white/[0.02] border border-sky-500/10">
                  <span className="hud-text text-slate-500 text-[8px] block mb-1">TOTAL_CONTRIBUTIONS</span>
                  <div className="flex items-center gap-2">
                    <GitCommit size={16} className="text-sky-400" />
                    <span className="text-lg font-black text-white italic">
                      {data.totalContributions}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-white/[0.02] border border-sky-500/10">
                  <span className="hud-text text-slate-500 text-[8px] block mb-1">PUBLIC_REPOS</span>
                  <div className="flex items-center gap-2">
                    <Code2 size={16} className="text-emerald-400" />
                    <span className="text-lg font-black text-white italic">
                      {data.publicRepos} REPOS
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-white/[0.02] border border-sky-500/10">
                  <span className="hud-text text-slate-500 text-[8px] block mb-1">STARS_RECEIVED</span>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-amber-400" />
                    <span className="text-lg font-black text-white italic">
                      {data.stars} STARS
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-between items-center">
                <span className="hud-text text-[9px] text-slate-400">
                  GITHUB // @THEDEORASIDHARTH
                </span>
                <a
                  href="https://github.com/thedeorasidharth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black uppercase tracking-[0.2em] text-xs transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] inline-flex items-center gap-3 group cursor-pointer"
                >
                  [ OPEN GITHUB ]
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
