"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function BackgroundAudio() {
  const [isMuted,     setIsMuted]     = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const audioRef         = useRef<HTMLAudioElement | null>(null);
  const lastScrollTime   = useRef(0);
  // Ref shadow of isMuted so the scroll/idle handlers can read the current
  // value without being re-created every time isMuted changes.
  const isMutedRef       = useRef(true);

  // ─── Fix #14: Audio object initialized ONCE — never recreated ────────────
  //
  // BEFORE (broken):
  //   useEffect(() => {
  //     audioRef.current = new Audio("/sound.mp3");   ← recreated on every mute toggle
  //     window.addEventListener("scroll", handleScroll);
  //     window.addEventListener("click", startAudio);
  //     ...
  //   }, [isMuted]);  ← entire effect re-runs when isMuted changes
  //
  // AFTER (correct):
  //   - Empty dependency array → runs exactly once on mount
  //   - Audio object is created once and persists
  //   - scroll/idle listeners are attached once
  //   - Mute state is reflected via isMutedRef (no effect re-run needed)
  useEffect(() => {
    const audio = new Audio("/sound.mp3");
    audio.loop   = true;
    audio.volume = 0.15;
    audioRef.current = audio;

    const handleScroll = () => {
      setIsScrolling(true);
      lastScrollTime.current = Date.now();
      // Boost volume during scroll if not muted
      if (!isMutedRef.current && audioRef.current) {
        audioRef.current.volume = 0.25;
      }
    };

    const idleCheck = setInterval(() => {
      if (Date.now() - lastScrollTime.current > 1000) {
        setIsScrolling(false);
        // Restore base volume when idle
        if (!isMutedRef.current && audioRef.current) {
          audioRef.current.volume = 0.15;
        }
      }
    }, 500);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(idleCheck);
      window.removeEventListener("scroll", handleScroll);
      audio.pause();
      audioRef.current = null;
    };
  }, []); // ← empty array: runs once, never again

  // Keep the ref in sync with the React state so handlers always see current value
  useEffect(() => {
    isMutedRef.current = isMuted;
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
