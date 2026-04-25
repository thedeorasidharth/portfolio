"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Terminal as TerminalIcon, X } from "lucide-react";

export default function EasterEggs() {
  const [konami, setKonami] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [sequence, setSequence] = useState<string[]>([]);
  
  const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Konami Code Detection
      const newSequence = [...sequence, e.key].slice(-10);
      setSequence(newSequence);
      
      if (newSequence.join(",") === konamiCode.join(",")) {
        setKonami(true);
        window.dispatchEvent(new CustomEvent("mission-mode", { detail: true }));
        console.log("%c>>> MISSION_MODE_ACTIVATED <<<", "color: #ef4444; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #ef4444;");
        setTimeout(() => setKonami(false), 5000);
      }

      // Key "N" for Night Mode
      if (e.key.toLowerCase() === "n") {
        window.dispatchEvent(new CustomEvent("toggle-night"));
      }

      // Key "?" for AI Assistant
      if (e.key === "?") {
        setShowAI(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Console Message
    console.log("%c[ MISSION_LOG ]: Pilot Sidharth is ready for deployment.", "color: #38bdf8; font-weight: bold;");
    console.log("%c[ INTEL ]: Try the Konami Code for Overdrive.", "color: #94a3b8; font-style: italic;");

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sequence]);

  return (
    <>
      <AnimatePresence>
        {konami && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-center"
          >
            <div className="text-red-600 font-black text-9xl italic tracking-tighter opacity-20 animate-pulse">
                MISSION_MODE_OVERDRIVE
            </div>
          </motion.div>
        )}

        {showAI && (
          <motion.div 
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            className="fixed top-20 right-10 z-[150] w-80 glass border-l-4 border-l-sky-500 p-6 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <Bot className="text-sky-500" size={20} />
                    <span className="hud-text">AI_TACTICAL_ASSISTANT</span>
                </div>
                <button onClick={() => setShowAI(false)} className="text-slate-500 hover:text-white transition-colors">
                    <X size={20} />
                </button>
            </div>
            
            <div className="space-y-4">
                <div className="p-3 bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
                    <span className="text-sky-400">AI:</span> Systems operational. Pilot Sidharth is currently at peak performance. Would you like to view recruitment records?
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <a 
                        href="/resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hud-text text-[8px] p-2 border border-sky-500/20 hover:bg-sky-500/10 transition-colors text-center"
                    >
                        VIEW_RESUME
                    </a>
                    <button className="hud-text text-[8px] p-2 border border-sky-500/20 hover:bg-sky-500/10 transition-colors">PROJECT_INTEL</button>
                </div>
                <div className="flex items-center gap-2 text-[8px] text-slate-600">
                    <TerminalIcon size={10} />
                    <span>SYS_UPTIME: 100%</span>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
