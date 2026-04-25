"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

export default function LensFlare() {
  const flareRef = useRef<THREE.Group>(null!);
  const { camera } = useThree();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Align with the sun position from Environment.tsx/Scene.tsx
  const sunPos = new THREE.Vector3(60, 20, -60);

  useFrame((state) => {
    if (flareRef.current) {
        // Face the camera
        flareRef.current.lookAt(camera.position);
        
        // Subtle flicker
        const flicker = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
        flareRef.current.scale.set(flicker, flicker, flicker);
    }
  });

  if (isMobile) return null;

  return (
    <group ref={flareRef} position={[60, 20, -60]}>
      {/* 1. Main Sun Core */}
      <mesh>
        <circleGeometry args={[15, 64]} />
        <meshBasicMaterial 
            color="#fb923c" 
            transparent 
            opacity={0.15} 
            blending={THREE.AdditiveBlending} 
            depthWrite={false}
        />
      </mesh>
      
      {/* 2. Hot Center */}
      <mesh>
        <circleGeometry args={[5, 64]} />
        <meshBasicMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.6} 
            blending={THREE.AdditiveBlending} 
            depthWrite={false}
        />
      </mesh>

      {/* 3. Horizontal Cinematic Streaks */}
      <group scale={[120, 0.5, 1]}>
        <mesh>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial 
                color="#fb923c" 
                transparent 
                opacity={0.2} 
                blending={THREE.AdditiveBlending} 
                depthWrite={false}
            />
        </mesh>
      </group>

      {/* 4. Lens Artifacts (Simulated) */}
      <group position={[-10, 5, 5]}>
        <mesh scale={8}>
            <circleGeometry args={[1, 32]} />
            <meshBasicMaterial color="#fb923c" transparent opacity={0.05} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      </group>
      <group position={[-25, 12, 10]}>
        <mesh scale={12}>
            <circleGeometry args={[1, 32]} />
            <meshBasicMaterial color="#60a5fa" transparent opacity={0.03} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      </group>
    </group>
  );
}
