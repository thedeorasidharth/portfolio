"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, Scroll, Environment as EnvironmentDrei } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import Jet from "./Jet";
import Environment from "./Environment";
import LensFlare from "./LensFlare";
import { Bloom, EffectComposer, Noise, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import * as THREE from "three";

function CameraController({ introActive }: { introActive: boolean }) {
  const { camera } = useThree();
  const targetPos = new THREE.Vector3(0, 3, 20);
  const startPos = new THREE.Vector3(20, 15, 60);

  useEffect(() => {
    camera.position.copy(startPos);
  }, [camera]);

  useFrame((state, delta) => {
    if (!introActive) {
      camera.position.lerp(targetPos, 0.02);
    } else {
      camera.position.lerp(new THREE.Vector3(10, 10, 50), 0.01);
    }
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function CinematicLighting() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* AMBIENT LIGHT: Base visibility with warm tint */}
      <ambientLight intensity={0.15} color="#1e293b" />

      {/* MAIN GOLDEN HOUR LIGHT: Back-Right Angle */}
      <directionalLight
        position={[15, 8, -12]}
        intensity={2.2}
        color="#fb923c"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />

      {/* SUNSET CORE GLOW: Deep orange mix */}
      <pointLight 
        position={[20, 5, -20]} 
        intensity={150} 
        color="#f97316" 
        distance={100} 
        decay={2}
      />

      {/* FILL LIGHT: Cool balanced light from front-left */}
      {!isMobile && (
        <directionalLight
          position={[-10, 2, 10]}
          intensity={0.4}
          color="#60a5fa"
        />
      )}

      {/* DYNAMIC RIM LIGHT: Highlighting the right edges */}
      {!isMobile && (
        <spotLight
          position={[12, 4, -10]}
          angle={0.6}
          penumbra={1}
          intensity={5}
          color="#ffca28" // Golden rim
          target-position={[0, 0, 0]}
        />
      )}
    </>
  );
}

export default function Scene() {
  const [sonicBoom, setSonicBoom] = useState(false);
  const [introActive, setIntroActive] = useState(true);

  useEffect(() => {
    const handleIntroEnd = () => setIntroActive(false);
    window.addEventListener("intro-complete", handleIntroEnd);
    return () => window.removeEventListener("intro-complete", handleIntroEnd);
  }, []);

  const triggerSonicBoom = () => {
    setSonicBoom(true);
    setTimeout(() => setSonicBoom(false), 500);
  };

  return (
    <>
      <div className={`sonic-flash ${sonicBoom ? 'animate-flash' : ''}`} />
      
      <div className={`w-full h-full ${sonicBoom ? 'animate-shake' : ''}`}>
        <Canvas
          shadows
          gl={{ antialias: false, powerPreference: "high-performance" }}
          dpr={[1, 2]}
        >
          <CameraController introActive={introActive} />
          <color attach="background" args={["#020617"]} />
          
          <CinematicLighting />

          <Suspense fallback={null}>
            <ScrollControls pages={6} damping={0.1}>
              <Scroll>
                <Jet onSonicBoom={triggerSonicBoom} introActive={introActive} />
                <Environment />
                <LensFlare />
                <EnvironmentDrei preset="sunset" />
              </Scroll>
              
              <EffectComposer>
                <Bloom 
                  luminanceThreshold={1.2} 
                  mipmapBlur 
                  intensity={1.0} 
                  radius={0.4} 
                />
                <Noise opacity={0.05} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
                <ChromaticAberration offset={new THREE.Vector2(0.0005, 0.0005)} />
              </EffectComposer>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
