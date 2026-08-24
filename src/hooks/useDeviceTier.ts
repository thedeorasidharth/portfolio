"use client";

import { useMemo } from "react";

export type DeviceTier = "high" | "medium" | "low";

/**
 * Classifies the current device into a performance tier using static browser signals.
 *
 * Signals used (all optional / with safe fallbacks):
 *  - navigator.deviceMemory   (Chrome-only, GB)
 *  - navigator.hardwareConcurrency
 *  - pointer media query (coarse = touch device)
 *
 * Does NOT perform any GPU draw-call benchmark.
 * Returns "medium" when APIs are unavailable so the experience degrades gracefully.
 */
export function getDeviceTier(): DeviceTier {
  if (typeof window === "undefined") return "medium";

  // navigator.deviceMemory is Chrome/Android only; values: 0.25 | 0.5 | 1 | 2 | 4 | 8
  const memory: number =
    (navigator as unknown as { deviceMemory?: number }).deviceMemory ?? 4;

  // Physical CPU core count (browsers may report logical cores)
  const cores: number = navigator.hardwareConcurrency ?? 4;

  // Coarse pointer = touch/stylus device (phone, tablet)
  const isCoarsePointer: boolean =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(pointer: coarse)").matches;

  if (isCoarsePointer) {
    // Mobile / tablet path
    // Even flagship phones face thermal throttling, so ceiling is "medium".
    // Low-end: <=2 GB RAM or <=4 cores (Snapdragon 4xx / Helio G series)
    if (memory <= 2 || cores <= 4) return "low";
    return "medium";
  }

  // Desktop / laptop path
  if (memory >= 8 && cores >= 8) return "high";
  return "medium";
}

/**
 * React hook: computes device tier once on mount, memoized for the session.
 */
export function useDeviceTier(): DeviceTier {
  return useMemo(() => getDeviceTier(), []);
}
