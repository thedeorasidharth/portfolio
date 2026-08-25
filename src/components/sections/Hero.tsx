"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleEnterMission = () => {
    window.dispatchEvent(new CustomEvent("jet-burst"));

    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex min-h-[90dvh] w-full max-w-full flex-col items-center justify-center overflow-hidden px-4 pt-20 text-center">

      {/* HERO TEXT */}
      <div className="relative flex w-full max-w-full flex-col items-center space-y-4">

        {/* Callsign / Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mb-2 flex w-full max-w-full items-center justify-center gap-3 sm:gap-4"
        >
          <div className="h-[1px] w-5 shrink-0 bg-[#00cfff] opacity-30 sm:w-8" />

          <span className="hud-text max-w-[85vw] text-[8px] font-bold tracking-[0.28em] text-[#00cfff] drop-shadow-[0_0_8px_rgba(0,207,255,0.4)] sm:text-xs sm:tracking-[0.6em] md:text-sm">
            MISSION: BUILD. DEPLOY. DOMINATE.
          </span>

          <div className="h-[1px] w-5 shrink-0 bg-[#00cfff] opacity-30 sm:w-8" />
        </motion.div>

        {/* MAIN NAME */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: [
              "brightness(1)",
              "brightness(1.5)",
              "brightness(1)",
            ],
          }}
          transition={{
            opacity: {
              duration: 1,
              delay: 0.4,
            },
            y: {
              duration: 1,
              delay: 0.4,
            },
            filter: {
              duration: 0.2,
              repeat: 3,
              repeatDelay: 4,
            },
          }}
          className="flex w-full max-w-full justify-center"
        >
          <h1
            className="
              max-w-full
              text-center
              text-[clamp(2rem,8.5vw,9rem)]
              font-black
              uppercase
              italic
              leading-none
              tracking-[-0.055em]
              text-white
              drop-shadow-2xl
              whitespace-nowrap
            "
          >
            SIDHARTH
          </h1>
        </motion.div>

        {/* SUBTITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="flex w-full max-w-full justify-center"
        >
          <p
            className="
              max-w-[95vw]
              text-center
              text-[clamp(0.55rem,2.6vw,1.5rem)]
              font-bold
              leading-relaxed
              tracking-[0.12em]
              text-[#00cfff]
              opacity-90
              sm:tracking-[0.2em]
              md:tracking-[0.25em]
            "
          >
            FULL-STACK ENGINEER // WEB SYSTEMS ARCHITECT
          </p>
        </motion.div>
      </div>

      {/* ENTER MISSION */}
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
        className="mt-8 flex flex-col items-center gap-8 sm:mt-10"
      >
        <button
          onClick={handleEnterMission}
          className="
            relative
            group
            overflow-hidden
            rounded-none
            border-2
            border-[#00cfff]/30
            bg-white/[0.03]
            px-10
            py-5
            font-black
            uppercase
            tracking-[0.3em]
            text-[#00cfff]
            shadow-[0_0_20px_rgba(0,207,255,0.1)]
            transition-all
            hover:border-[#00cfff]/60
            hover:bg-[#00cfff]/10
            active:scale-95
            sm:px-14
            sm:py-6
            sm:tracking-[0.4em]
          "
        >
          {/* HUD accents */}
          <div className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-[#00cfff] opacity-40" />

          <div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-[#00cfff] opacity-40" />

          {/* Hover lock animation */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="absolute inset-0 animate-pulse border-2 border-red-500/30" />
          </div>

          <span className="relative z-10 text-xs sm:text-sm md:text-base">
            ENTER MISSION
          </span>
        </button>

        <div className="h-12 w-[2px] bg-gradient-to-b from-[#00cfff] to-transparent opacity-20 sm:h-16" />
      </motion.div>
    </div>
  );
}