"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleEnterMission = () => {
    // Trigger jet burst effect via custom event
    window.dispatchEvent(new CustomEvent("jet-burst"));

    // Smooth scroll to next section
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center text-center justify-center min-h-[90vh] pt-20">
      <div className="relative space-y-4">
        {/* Callsign / Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-2"
        >
          <div className="h-[1px] w-8 bg-[#00cfff] opacity-30" />
          <span className="hud-text text-xs md:text-sm tracking-[0.6em] text-[#00cfff] font-bold drop-shadow-[0_0_8px_rgba(0,207,255,0.4)]">
            MISSION: BUILD. DEPLOY. DOMINATE.
          </span>
          <div className="h-[1px] w-8 bg-[#00cfff] opacity-30" />
        </motion.div>

        {/* Main Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.4 },
            y: { duration: 1, delay: 0.4 },
            filter: { duration: 0.2, repeat: 3, repeatDelay: 4 }
          }}
        >
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase italic leading-none drop-shadow-2xl">
            <br className="md:hidden" /><span className="text-[#ffffff]">SIDHARTH</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <p className="text-xl md:text-3xl font-bold tracking-[0.3em] text-[#00cfff] opacity-90 mb-12">
            FULL STACK ENGINEER
          </p>
        </motion.div>
      </div>

      {/* Button Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="flex flex-col items-center gap-8"
      >
        <button
          onClick={handleEnterMission}
          className="px-14 py-6 bg-white/[0.03] border-2 border-[#00cfff]/30 text-[#00cfff] font-black uppercase tracking-[0.4em] hover:bg-[#00cfff]/10 hover:border-[#00cfff]/60 transition-all rounded-none relative group overflow-hidden active:scale-95 shadow-[0_0_20px_rgba(0,207,255,0.1)]"
        >
          {/* HUD Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00cfff] opacity-40" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00cfff] opacity-40" />

          {/* Missile Lock Animation */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="absolute inset-0 border-2 border-red-500/30 animate-pulse" />
          </div>

          <span className="relative z-10 text-sm md:text-base">ENTER MISSION</span>
        </button>

        <div className="w-[2px] h-16 bg-gradient-to-b from-[#00cfff] to-transparent opacity-20" />
      </motion.div>
    </div>
  );
}
