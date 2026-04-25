"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const briefingLines = [
    "INITIALIZING SYSTEM...",
    "LOADING FLIGHT CONTROLS...",
    "ESTABLISHING RADAR LINK...",
    "CALLSIGN DETECTED: SIDHARTH"
];

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
    const [lineIndex, setLineIndex] = useState(0);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        // Initial 1s black screen
        const startTimer = setTimeout(() => setIsStarted(true), 1000);
        
        return () => clearTimeout(startTimer);
    }, []);

    useEffect(() => {
        if (!isStarted) return;

        if (lineIndex < briefingLines.length) {
            const timer = setTimeout(() => {
                setLineIndex(prev => prev + 1);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            // Intro sequence text complete, wait and then trigger site reveal
            const finishTimer = setTimeout(() => {
                window.dispatchEvent(new CustomEvent("intro-complete"));
                onComplete();
            }, 1500);
            return () => clearTimeout(finishTimer);
        }
    }, [lineIndex, isStarted, onComplete]);

    return (
        <motion.div 
            className="fixed inset-0 z-[150] bg-black flex flex-col items-center justify-center pointer-events-none"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >
            <div className="w-80 space-y-2">
                <AnimatePresence mode="popLayout">
                    {briefingLines.slice(0, lineIndex).map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hud-text text-sky-400 text-xs md:text-sm tracking-widest flex items-center gap-3"
                        >
                            <span className="w-1 h-1 bg-sky-500 rounded-full" />
                            {line}
                        </motion.div>
                    ))}
                </AnimatePresence>
                
                {isStarted && lineIndex < briefingLines.length && (
                    <motion.div 
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2 h-4 bg-sky-500 inline-block ml-4"
                    />
                )}
            </div>

            {/* Subtle Glitch Flash Overlay */}
            <motion.div 
                animate={{ opacity: [0, 0.05, 0] }}
                transition={{ repeat: Infinity, duration: 4, repeatDelay: 2 }}
                className="absolute inset-0 bg-sky-500 pointer-events-none"
            />
        </motion.div>
    );
}
