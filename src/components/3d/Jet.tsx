"use client";

import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

interface JetProps {
  onSonicBoom?: () => void;
  introActive?: boolean;
}

export default function Jet({ onSonicBoom, introActive = false }: JetProps) {
  const jetRef = useRef<THREE.Group>(null!);
  const scroll = useScroll();
  const { camera } = useThree();
  const [lastScroll, setLastScroll] = useState(0);
  const [bursting, setBursting] = useState(false);
  const [missionMode, setMissionMode] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);
  
  // Load the local F-22 model
  const { scene } = useGLTF("/f-22_raptor_-_fighter_jet_-_free.glb");
  
  useEffect(() => {
    const handleBurst = () => {
        setBursting(true);
        setTimeout(() => setBursting(false), 2000);
    };
    const handleMissionMode = (e: any) => {
        setMissionMode(e.detail);
        setTimeout(() => setMissionMode(false), 5000);
    };
    
    window.addEventListener("jet-burst", handleBurst);
    window.addEventListener("mission-mode", handleMissionMode);

    return () => {
        window.removeEventListener("jet-burst", handleBurst);
        window.removeEventListener("mission-mode", handleMissionMode);
    }
  }, []);

  useFrame((state, delta) => {
    const offset = scroll.offset;
    const scrollDelta = scroll.delta;

    // INTRO FLY-IN LOGIC
    if (introActive && !introFinished) {
        // Jet starts way off left/back and flies across
        jetRef.current.position.x = THREE.MathUtils.lerp(jetRef.current.position.x, -5 + state.mouse.x, 0.05);
        jetRef.current.position.z = THREE.MathUtils.lerp(jetRef.current.position.z, 5, 0.02);
        jetRef.current.rotation.y = THREE.MathUtils.lerp(jetRef.current.rotation.y, Math.PI + 0.8, 0.02);
        jetRef.current.rotation.z = THREE.MathUtils.lerp(jetRef.current.rotation.z, -0.4, 0.02);
        
        // When it settles near target, allow normal movement after a bit
        if (jetRef.current.position.z > 4) {
            setTimeout(() => setIntroFinished(true), 2000);
        }
        return;
    }

    // NORMAL FLIGHT LOGIC
    const sectionIndex = Math.floor(offset * 6);
    const bankDirection = sectionIndex % 2 === 0 ? 1 : -1;
    const scrollModifier = Math.abs(scrollDelta) > 0.001 ? bankDirection * 0.15 : 0;
    
    const targetY = Math.PI + 0.3 + (scrollModifier) + (state.mouse.x * 0.2);
    const targetZ = (scrollModifier * 0.3) + (-state.mouse.x * 0.05);
    const targetX = -0.1 + -state.mouse.y * 0.1 + (scrollDelta * 5);

    const targetForwardZ = 5 - offset * 25 - (bursting ? 15 : 0) - (missionMode ? 10 : 0);
    jetRef.current.position.z = THREE.MathUtils.lerp(jetRef.current.position.z, targetForwardZ, 0.03);
    
    const targetPosX = state.mouse.x * 1.5;
    jetRef.current.position.x = THREE.MathUtils.lerp(jetRef.current.position.x, targetPosX, 0.03);

    const zoomOffset = isZoomed ? -12 : 0;
    const cameraTargetZ = 20 - offset * 5 - (bursting ? 2 : 0) + zoomOffset;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, cameraTargetZ, 0.05);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, state.mouse.x * 0.5, 0.02);

    if (isZoomed) {
        camera.lookAt(jetRef.current.position);
    }

    const scrollSpeed = Math.abs(offset - lastScroll) / delta;
    setLastScroll(offset);

    if (scrollSpeed > 3 && onSonicBoom) {
        onSonicBoom();
    }

    jetRef.current.rotation.y = THREE.MathUtils.lerp(jetRef.current.rotation.y, targetY, 0.04);
    jetRef.current.rotation.z = THREE.MathUtils.lerp(jetRef.current.rotation.z, targetZ, 0.04);
    jetRef.current.rotation.x = THREE.MathUtils.lerp(jetRef.current.rotation.x, targetX, 0.04);

    const floatY = Math.sin(state.clock.elapsedTime * 1.0) * 0.1;
    jetRef.current.position.y = THREE.MathUtils.lerp(jetRef.current.position.y, 0.5 + floatY, 0.05);
  });

  return (
    <group 
        ref={jetRef} 
        dispose={null} 
        onDoubleClick={() => setIsZoomed(!isZoomed)}
        position={[-15, 0, -20]} // Initial off-screen position for intro
    >
      <group scale={0.12} rotation={[0, Math.PI, 0]}>
        <primitive object={scene} castShadow receiveShadow />

        <group position={[0, 0, -4.5]} rotation={[0, Math.PI, 0]}>
            <pointLight 
                intensity={(bursting || missionMode) ? 100 : (20 + Math.abs(scroll.delta) * 100)} 
                color={missionMode ? "#ef4444" : "#fb923c"} 
                distance={15} 
            />
            <mesh position={[0.45, 0, 0]}>
                <sphereGeometry args={[0.3, 16, 16]} />
                <meshStandardMaterial 
                    color={missionMode ? "#ef4444" : "#fb923c"} 
                    emissive={missionMode ? "#ef4444" : "#fb923c"} 
                    emissiveIntensity={(bursting || missionMode) ? 150 : (50 + Math.abs(scroll.delta) * 400)} 
                    transparent 
                    opacity={0.8} 
                />
            </mesh>
            <mesh position={[-0.45, 0, 0]}>
                <sphereGeometry args={[0.3, 16, 16]} />
                <meshStandardMaterial 
                    color={missionMode ? "#ef4444" : "#fb923c"} 
                    emissive={missionMode ? "#ef4444" : "#fb923c"} 
                    emissiveIntensity={(bursting || missionMode) ? 150 : (50 + Math.abs(scroll.delta) * 400)} 
                    transparent 
                    opacity={0.8} 
                />
            </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/f-22_raptor_-_fighter_jet_-_free.glb");
