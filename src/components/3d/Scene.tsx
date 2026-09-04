"use client";

import { Canvas } from "@react-three/fiber";

import {
  Environment as EnvironmentDrei,
  useProgress,
} from "@react-three/drei";

import { Suspense, useState, useEffect } from "react";

import JetFormation from "./Jet";
import Environment from "./Environment";
import LensFlare from "./LensFlare";

import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
  ChromaticAberration,
} from "@react-three/postprocessing";

import * as THREE from "three";

import { useDeviceTier } from "@/hooks/useDeviceTier";
import type { DeviceTier } from "@/hooks/useDeviceTier";


// ============================================================
// CHROMATIC ABERRATION
// ============================================================

const CHROMATIC_OFFSET = new THREE.Vector2(
  0.0005,
  0.0005
);


// ============================================================
// LOADING INDICATOR
// ============================================================

function SceneLoadingIndicator() {
  const {
    progress,
    active,
  } = useProgress();

  if (!active) return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: "48px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 5,
        pointerEvents: "none",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        gap: "8px",
      }}
    >
      <span
        style={{
          fontFamily: "monospace",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",

          color:
            "rgba(56, 189, 248, 0.55)",

          textShadow:
            "0 0 8px rgba(56, 189, 248, 0.35)",
        }}
      >
        LOADING ASSETS —{" "}
        {Math.round(progress)}%
      </span>

      <div
        style={{
          width: "160px",
          height: "1px",

          background:
            "rgba(56, 189, 248, 0.12)",

          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",

            background:
              "rgba(56, 189, 248, 0.5)",

            transition:
              "width 0.15s linear",

            boxShadow:
              "0 0 6px rgba(56, 189, 248, 0.4)",
          }}
        />
      </div>
    </div>
  );
}


// ============================================================
// CINEMATIC LIGHTING
// ============================================================

function CinematicLighting({
  tier,
}: {
  tier: DeviceTier;
}) {
  const isLow = tier === "low";

  return (
    <>
      {/* Ambient */}
      <ambientLight
        intensity={0.22}
        color="#1e293b"
      />

      {/* Main sunset light */}
      {isLow ? (
        <directionalLight
          position={[20, 8, -20]}
          intensity={2.0}
          color="#fb923c"
        />
      ) : (
        <directionalLight
          position={[20, 8, -20]}
          intensity={2.0}
          color="#fb923c"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-far={50}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />
      )}

      {/* Warm horizon */}
      <pointLight
        position={[25, 4, -25]}
        intensity={80}
        color="#f97316"
        distance={80}
        decay={2}
      />

      {/* Cool fill */}
      {!isLow && (
        <directionalLight
          position={[-15, 4, 15]}
          intensity={0.35}
          color="#38bdf8"
        />
      )}

      {/* Rim light */}
      {tier === "high" && (
        <spotLight
          position={[12, 4, -10]}
          angle={0.5}
          penumbra={1}
          intensity={3.5}
          color="#ffca28"
          target-position={[0, 0, 0]}
        />
      )}
    </>
  );
}


// ============================================================
// POST PROCESSING
// ============================================================

function TieredPostProcessing({
  tier,
}: {
  tier: DeviceTier;
}) {
  // Low devices → no post processing
  if (tier === "low") {
    return null;
  }

  // Medium
  if (tier === "medium") {
    return (
      <EffectComposer>
        <Bloom
          luminanceThreshold={1.2}
          mipmapBlur={false}
          intensity={0.6}
          radius={0.3}
        />

        <Vignette
          eskil={false}
          offset={0.15}
          darkness={1.2}
        />
      </EffectComposer>
    );
  }

  // High
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={1.2}
        mipmapBlur
        intensity={0.7}
        radius={0.35}
      />

      <Noise opacity={0.04} />

      <Vignette
        eskil={false}
        offset={0.15}
        darkness={1.2}
      />

      <ChromaticAberration
        offset={CHROMATIC_OFFSET}
      />
    </EffectComposer>
  );
}


// ============================================================
// MAIN SCENE
// ============================================================

export default function Scene() {
  const [sonicBoom, setSonicBoom] = useState(false);
  const [nightMode, setNightMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("portfolio_night_mode");
        if (saved !== null) {
          return saved === "true";
        }
      } catch {
        // LocalStorage fallback
      }
    }
    return true;
  });

  useEffect(() => {
    const handleNight = () => setNightMode((prev) => !prev);
    window.addEventListener("toggle-night", handleNight);
    return () => window.removeEventListener("toggle-night", handleNight);
  }, []);

  const tier = useDeviceTier();

  // ==========================================================
  // DPR
  // ==========================================================

  const dpr: [number, number] =
    tier === "high"
      ? [1, 2]
      : tier === "medium"
        ? [1, 1.5]
        : [0.75, 1];

  const enableShadows = tier !== "low";

  // ==========================================================
  // SONIC BOOM
  // ==========================================================

  const triggerSonicBoom = () => {
    setSonicBoom(true);

    window.setTimeout(() => {
      setSonicBoom(false);
    }, 500);
  };

  return (
    <>
      {/* Sonic flash */}
      <div
        className={`sonic-flash ${sonicBoom ? "animate-flash" : ""}`}
      />

      <div
        className={`w-full h-full ${sonicBoom ? "animate-shake" : ""}`}
        style={{
          position: "relative",
        }}
      >
        {/* Loading */}
        <SceneLoadingIndicator />

        <Canvas
          shadows={enableShadows ? { type: THREE.PCFShadowMap } : false}
          gl={{
            antialias: false,
            powerPreference: "high-performance",
            toneMappingExposure: 0.85,
          }}
          dpr={dpr}
        >
          {/* Base background */}
          <color
            attach="background"
            args={[nightMode ? "#020617" : "#0a0e24"]}
          />

          {/* Lighting */}
          <CinematicLighting
            tier={tier}
          />

          <Suspense fallback={null}>
            {/* Jets */}
            <JetFormation
              onSonicBoom={triggerSonicBoom}
            />

            {/* Procedural environment */}
            <Environment
              tier={tier}
            />

            {/* Lens flare */}
            <LensFlare
              tier={tier}
            />

            {/* HDR environment */}
            {tier !== "low" && (
              <Suspense fallback={null}>
                <EnvironmentDrei
                  preset={nightMode ? "night" : "sunset"}
                />
              </Suspense>
            )}

            {/* Effects */}
            <TieredPostProcessing
              tier={tier}
            />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}