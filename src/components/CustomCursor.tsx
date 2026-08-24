"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted,        setMounted]        = useState(false);
  // Fix #12: Track whether the primary pointer is coarse (touch/stylus).
  // On touch devices there is no mouse cursor, so the custom cursor elements
  // would float at (0, 0) or wherever the last touch occurred — confusing and wasteful.
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  const cursorX = useSpring(0, { damping: 20, stiffness: 100 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsCoarsePointer(coarse);
    setMounted(true);

    if (coarse) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  // Don't render on:
  //   - server (no window)
  //   - before mount (SSR hydration mismatch prevention)
  //   - touch/coarse-pointer devices (phone, tablet, touchscreen laptop)
  if (!mounted || isCoarsePointer) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-sky-500/50 rounded-full pointer-events-none z-[999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-sky-500 rounded-full pointer-events-none z-[999] shadow-[0_0_15px_#38bdf8]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Ambient glow */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-sky-500/10 blur-3xl rounded-full pointer-events-none z-[998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
