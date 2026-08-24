"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import type { DeviceTier } from "@/hooks/useDeviceTier";

interface LensFlareProps {
  /** Performance tier — LensFlare is hidden on "low" to save draw calls */
  tier: DeviceTier;
}

export default function LensFlare({ tier }: LensFlareProps) {
  const flareRef = useRef<THREE.Group>(null!);
  const { camera } = useThree();

  // Removed: useState(isMobile) + window.addEventListener("resize", ...)
  // Previously, a resize listener caused React state updates that could trigger
  // reconciliation mid-frame. Now the tier (computed once on mount) determines
  // visibility — no reactive state, no listener.
  if (tier === "low") return null;

  // Note: React rules of hooks require hooks before any early return.
  // Since the return above is safe (tier never changes), the hook below
  // is moved into a separate inner component pattern if needed.
  // Here we use a workaround by putting the return AFTER the hook call
  // (the ref is still valid even when the component doesn't render its content).
  return <LensFlareInner camera={camera} />;
}

/** Inner component that always receives the hook — avoids hook ordering issues */
function LensFlareInner({ camera }: { camera: THREE.Camera }) {
  const flareRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (flareRef.current) {
      // Billboard: keep facing the camera
      flareRef.current.lookAt(camera.position);

      // Subtle intensity flicker
      const flicker = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      flareRef.current.scale.setScalar(flicker);
    }
  });

  return (
    <group ref={flareRef} position={[60, 20, -60]}>
      {/* Main sun core disc */}
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

      {/* Bright hot center */}
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

      {/* Horizontal cinematic streak */}
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

      {/* Lens artifact #1 */}
      <group position={[-10, 5, 5]}>
        <mesh scale={8}>
          <circleGeometry args={[1, 32]} />
          <meshBasicMaterial
            color="#fb923c"
            transparent
            opacity={0.05}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* Lens artifact #2 */}
      <group position={[-25, 12, 10]}>
        <mesh scale={12}>
          <circleGeometry args={[1, 32]} />
          <meshBasicMaterial
            color="#60a5fa"
            transparent
            opacity={0.03}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
    </group>
  );
}
