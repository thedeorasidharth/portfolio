"use client";

import { Stars, Cloud, Clouds, Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

export default function Environment() {
  const cloudsRef = useRef<THREE.Group>(null!);
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    const handleNight = () => setNightMode(prev => !prev);
    window.addEventListener("toggle-night", handleNight);
    return () => window.removeEventListener("toggle-night", handleNight);
  }, []);

  useFrame((state) => {
    if (cloudsRef.current) {
      // Parallax effect: clouds move slowly
      cloudsRef.current.position.z += 0.05;
      if (cloudsRef.current.position.z > 30) {
        cloudsRef.current.position.z = -70;
      }
    }
  });

  return (
    <>
      {/* Cinematic Golden Hour Sky */}
      <Sky
        distance={450000}
        // Sun positioned to the back-right
        sunPosition={nightMode ? [0, -1, 0] : [1, 0.05, -1]}
        turbidity={nightMode ? 20 : 6}
        rayleigh={nightMode ? 0.1 : 3} // Higher rayleigh for richer sunset colors
        mieCoefficient={0.005}
        mieDirectionalG={0.9}
      />

      <Stars
        radius={150}
        depth={50}
        count={nightMode ? 15000 : 7000}
        factor={nightMode ? 6 : 4}
        saturation={0}
        fade
        speed={1}
      />

      <group ref={cloudsRef}>
        <Clouds material={THREE.MeshLambertMaterial} limit={400}>
          <Cloud
            opacity={nightMode ? 0.2 : 0.2}
            speed={0.4}
            segments={40}
            bounds={[30, 5, 5]}
            position={[-15, -8, -25]}
            color={nightMode ? "#020617" : "#334155"}
          />
          <Cloud
            opacity={nightMode ? 0.1 : 0.1}
            speed={0.4}
            segments={40}
            bounds={[30, 5, 5]}
            position={[15, 8, -35]}
            color={nightMode ? "#000000" : "#475569"}
          />
        </Clouds>
      </group>

      {/* DYNAMIC FOG: Blending dark blue with a hint of warm sunset orange */}
      <fog attach="fog" args={[nightMode ? "#000000" : "#0c1221", 20, 85]} />
    </>
  );
}
