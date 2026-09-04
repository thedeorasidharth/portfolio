"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HUD() {
  const [time, setTime] = useState("");
  const [alt, setAlt] = useState(35000);
  const [speed, setSpeed] = useState(1200);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
        })
      );

      setAlt((a) => a + (Math.random() - 0.5) * 20);
      setSpeed((s) => s + (Math.random() - 0.5) * 5);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden flicker">

      {/* =====================================================
          HUD SCANLINE
      ====================================================== */}
      <div className="scanline" />

      {/* =====================================================
          CORNER BRACKETS
          Desktop only — mobile par hide
      ====================================================== */}

      <div className="hidden sm:block absolute top-20 left-8 w-20 h-20 border-t-2 border-l-2 border-sky-500/30" />

      <div className="hidden sm:block absolute top-20 right-8 w-20 h-20 border-t-2 border-r-2 border-sky-500/30" />

      <div className="hidden sm:block absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-sky-500/40" />

      <div className="hidden sm:block absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-sky-500/40" />


      {/* =====================================================
          TOP LEFT FLIGHT DATA
          Mobile:
          ❌ CALLSIGN
          ❌ SYSTEM STATUS
      ====================================================== */}

      <div className="hidden sm:block absolute top-12 left-12 space-y-4">
        <div className="flex flex-col">
          <span className="hud-text text-sky-500/50">
            SYSTEM STATUS
          </span>

          <span className="hud-text text-green-400">
            NOMINAL [ONLINE]
          </span>
        </div>

        <div className="flex flex-col">
          <span className="hud-text text-sky-500/50">
            CALLSIGN
          </span>

          <span className="hud-text">
            ACE_SID
          </span>
        </div>
      </div>


      {/* =====================================================
          TOP RIGHT FLIGHT DATA

          Mobile:
          ❌ UTC TIME
          ❌ RADAR FREQ

          Desktop unchanged
      ====================================================== */}

      <div className="hidden sm:block absolute top-12 right-12 text-right space-y-4">
        <div className="flex flex-col">
          <span className="hud-text text-sky-500/50">
            UTC TIME
          </span>

          <span className="hud-text text-lg">
            {time}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="hud-text text-sky-500/50">
            RADAR FREQ
          </span>

          <span className="hud-text">
            98.4 GHZ
          </span>
        </div>
      </div>


      {/* =====================================================
          LEFT SPEED SIDEBAR

          Mobile:
          ❌ SPD
          ❌ vertical line
          ❌ ticks
      ====================================================== */}

      <div className="hidden sm:flex absolute left-16 top-1/4 bottom-1/4 flex-col justify-between py-12">
        <div className="hud-text text-lg -rotate-90 origin-left mb-8">
          SPD: {Math.round(speed)} KTS
        </div>

        <div className="flex-1 border-l border-sky-500/20 relative">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 w-4 h-[1px] bg-sky-500/40"
              style={{
                top: `${i * 10}%`,
              }}
            />
          ))}
        </div>
      </div>


      {/* =====================================================
          RIGHT ALTITUDE SIDEBAR

          Mobile:
          ❌ ALT
          ❌ vertical line
          ❌ ticks
      ====================================================== */}

      <div className="hidden sm:flex absolute right-16 top-1/4 bottom-1/4 flex-col justify-between py-12 items-end">
        <div className="hud-text text-lg rotate-90 origin-right mb-8">
          ALT: {Math.round(alt)} FT
        </div>

        <div className="flex-1 border-r border-sky-500/20 relative">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute right-0 w-4 h-[1px] bg-sky-500/40"
              style={{
                top: `${i * 10}%`,
              }}
            />
          ))}
        </div>
      </div>


      {/* =====================================================
          BOTTOM MISSION PROGRESS

          Keep visible on mobile
      ====================================================== */}

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 max-w-[70vw]">
        <div className="flex justify-between mb-1">
          <span className="hud-text">
            MISSION PROGRESS
          </span>

          <span className="hud-text">
            84%
          </span>
        </div>

        <div className="h-1 bg-slate-800 w-full overflow-hidden">
          <motion.div
            animate={{
              width: "84%",
            }}
            className="h-full bg-sky-500 shadow-[0_0_10px_#38bdf8]"
          />
        </div>
      </div>

    </div>
  );
}