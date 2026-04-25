"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundAudio() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastScrollTime = useRef(Date.now());
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/sound.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.15;

    const handleScroll = () => {
        setIsScrolling(true);
        lastScrollTime.current = Date.now();
        
        if (audioRef.current && !isMuted) {
            // Slight volume boost during scroll
            audioRef.current.volume = 0.25;
        }
    };

    const idleCheck = setInterval(() => {
        if (Date.now() - lastScrollTime.current > 1000) {
            setIsScrolling(false);
            if (audioRef.current && !isMuted) {
                audioRef.current.volume = 0.15;
            }
        }
    }, 500);

    window.addEventListener("scroll", handleScroll);

    const startAudio = () => {
        if (audioRef.current && isMuted === false) {
            audioRef.current.play().catch(() => {});
        }
        window.removeEventListener("click", startAudio);
        window.removeEventListener("scroll", startAudio);
    };

    window.addEventListener("click", startAudio);
    window.addEventListener("scroll", startAudio);

    return () => {
        clearInterval(idleCheck);
        window.removeEventListener("scroll", handleScroll);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
    }
  }, [isMuted]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
        audioRef.current.play().catch(() => {});
        setIsMuted(false);
    } else {
        audioRef.current.pause();
        setIsMuted(true);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <motion.button
        onClick={toggleMute}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
            flex items-center gap-3 px-5 py-3 glass border transition-all duration-500
            ${!isMuted 
                ? "border-sky-500/50 text-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.3)]" 
                : "border-white/10 text-slate-500 opacity-40"
            }
        `}
      >
        <div className="relative">
            {!isMuted ? (
                <Volume2 size={18} className={isScrolling ? "animate-pulse" : ""} />
            ) : (
                <VolumeX size={18} />
            )}
        </div>
        <span className="hud-text text-[10px] tracking-[0.2em] font-bold">
            {!isMuted ? "AUDIO_ON" : "AUDIO_OFF"}
        </span>

        {!isMuted && (
            <div className="flex gap-1 items-end h-3">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        animate={{ height: isScrolling ? [4, 16, 4] : [2, 6, 2] }}
                        transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.1 }}
                        className="w-[2px] bg-sky-500"
                    />
                ))}
            </div>
        )}
      </motion.button>
    </div>
  );
}
