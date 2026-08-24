"use client";

import { Stars, Cloud, Clouds, Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import type { DeviceTier } from "@/hooks/useDeviceTier";

interface EnvironmentProps {
  /** Performance tier from useDeviceTier — controls star count, cloud rendering, etc. */
  tier: DeviceTier;
}

export default function Environment({ tier }: EnvironmentProps) {
  const cloudsRef = useRef<THREE.Group>(null!);
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    const handleNight = () => setNightMode((prev) => !prev);
    window.addEventListener("toggle-night", handleNight);
    return () => window.removeEventListener("toggle-night", handleNight);
  }, []);

  useFrame(() => {
    if (cloudsRef.current && tier !== "low") {
      cloudsRef.current.position.z += 0.04;
      if (cloudsRef.current.position.z > 30) {
        cloudsRef.current.position.z = -70;
      }
    }
  });

  const starCount = tier === "high" ? 7000 : tier === "medium" ? 3000 : 1000;
  const starCountNight = tier === "high" ? 15000 : tier === "medium" ? 6000 : 1500;
  const cloudSegments = tier === "high" ? 40 : 20;

  return (
    <>
      {/* Dark Cinematic Sunset Sky: rich dark navy upper sky with warm sunset horizon glow */}
      <Sky
        distance={450000}
        sunPosition={nightMode ? [0, -1, 0] : [80, 1.2, -100]}
        turbidity={nightMode ? 20 : 6}
        rayleigh={nightMode ? 0.1 : 2.8}
        mieCoefficient={0.005}
        mieDirectionalG={0.90}
      />

      {/* Atmospheric Stars */}
      <Stars
        radius={150}
        depth={50}
        count={nightMode ? starCountNight : starCount}
        factor={nightMode ? 6 : 3}
        saturation={0}
        fade
        speed={0.6}
      />

      {/* Volumetric Evening Clouds */}
      {tier !== "low" && (
        <group ref={cloudsRef}>
          <Clouds material={THREE.MeshLambertMaterial} limit={400}>
            <Cloud
              opacity={0.35}
              speed={0.25}
              segments={cloudSegments}
              bounds={[35, 6, 6]}
              position={[-15, -6, -25]}
              color={nightMode ? "#020617" : "#4a3543"}
            />
            {tier === "high" && (
              <Cloud
                opacity={0.25}
                speed={0.25}
                segments={40}
                bounds={[35, 6, 6]}
                position={[18, 6, -35]}
                color={nightMode ? "#000000" : "#362734"}
              />
            )}
          </Clouds>
        </group>
      )}

      {/* Twilight Navy Fog */}
      <fog attach="fog" args={[nightMode ? "#000000" : "#12172e", 15, 110]} />
    </>
  );
}