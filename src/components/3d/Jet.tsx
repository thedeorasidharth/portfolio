/* eslint-disable react-hooks/immutability */
"use client";

import { Clone, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState, type RefObject } from "react";
import * as THREE from "three";

const MODEL_URL = "/pbr_sukhoi_su-30.glb";

const clamp01 = (value: number) =>
  THREE.MathUtils.clamp(value, 0, 1);

function phase(
  offset: number,
  start: number,
  end: number
) {
  if (offset <= start) return 0;
  if (offset >= end) return 1;

  return (offset - start) / (end - start);
}

interface JetFormationProps {
  onSonicBoom?: () => void;
}

export default function JetFormation({
  onSonicBoom,
}: JetFormationProps) {
  const { camera } = useThree();
  const { scene } = useGLTF(MODEL_URL);

  const leftJet = useRef<THREE.Group>(null!);
  const rightJet = useRef<THREE.Group>(null!);
  const centerJet = useRef<THREE.Group>(null!);

  const scrollProgress = useRef(0);
  const previousScroll = useRef(0);
  const boomCooldown = useRef(0);

  const [bursting, setBursting] = useState(false);
  const [missionMode, setMissionMode] = useState(false);

  // ------------------------------------------------------------
  // EVENTS
  // ------------------------------------------------------------

  useEffect(() => {
    const handleBurst = () => {
      setBursting(true);

      window.setTimeout(() => {
        setBursting(false);
      }, 2000);
    };

    const handleMissionMode = (event: Event) => {
      const active = Boolean(
        (event as CustomEvent<boolean>).detail
      );

      setMissionMode(active);

      if (active) {
        window.setTimeout(() => {
          setMissionMode(false);
        }, 5000);
      }
    };

    window.addEventListener("jet-burst", handleBurst);
    window.addEventListener(
      "mission-mode",
      handleMissionMode
    );

    return () => {
      window.removeEventListener(
        "jet-burst",
        handleBurst
      );

      window.removeEventListener(
        "mission-mode",
        handleMissionMode
      );
    };
  }, []);

  // ------------------------------------------------------------
  // MAIN ANIMATION
  // ------------------------------------------------------------

  useFrame((_state, delta) => {
    // ----------------------------------------------------------
    // SCROLL
    // ----------------------------------------------------------

    let targetScroll = 0;

    if (typeof window !== "undefined") {
      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (maxScroll > 0) {
        targetScroll = clamp01(
          window.scrollY / maxScroll
        );
      }
    }

    scrollProgress.current = THREE.MathUtils.lerp(
      scrollProgress.current,
      targetScroll,
      Math.min(1, delta * 10)
    );

    const scroll = scrollProgress.current;

    // ----------------------------------------------------------
    // SONIC BOOM
    // ----------------------------------------------------------

    const velocity =
      Math.abs(
        scroll - previousScroll.current
      ) / Math.max(delta, 0.016);

    previousScroll.current = scroll;

    boomCooldown.current = Math.max(
      0,
      boomCooldown.current - delta
    );

    if (
      velocity > 3 &&
      boomCooldown.current === 0 &&
      onSonicBoom
    ) {
      boomCooldown.current = 0.8;
      onSonicBoom();
    }

    // ----------------------------------------------------------
    // MOVEMENT PHASES
    //
    // 0.00 → 0.20 : TWO JETS COME UP FROM BELOW
    // 0.20 → 0.48 : LEFT / RIGHT SPLIT
    // 0.48 → 0.68 : BOTH JETS CONTINUE OUTWARD
    // 0.68 → 1.00 : CENTER JET COMES UP
    // ----------------------------------------------------------

    const rise = phase(scroll, 0.00, 0.20);
    const split = phase(scroll, 0.20, 0.48);
    const exit = phase(scroll, 0.48, 0.68);
    const center = phase(scroll, 0.68, 1.00);

    // ----------------------------------------------------------
    // LEFT + RIGHT JETS
    // ----------------------------------------------------------

    const animateSideJet = (
      ref: RefObject<THREE.Group>,
      side: -1 | 1
    ) => {
      const jet = ref.current;

      if (!jet) return;

      let x = 0;

      let y = THREE.MathUtils.lerp(
        -14,
        1.5,
        rise
      );

      let z = 0;

      // --------------------------------------------------------
      // MOVEMENT 1
      // Both jets rise together from below
      // --------------------------------------------------------

      if (scroll <= 0.20) {
        x = 0;

        y = THREE.MathUtils.lerp(
          -14,
          1.5,
          rise
        );

        z = 0;
      }

      // --------------------------------------------------------
      // MOVEMENT 2
      // LEFT → LEFT
      // RIGHT → RIGHT
      // --------------------------------------------------------

      else if (scroll <= 0.48) {
        x = THREE.MathUtils.lerp(
          0,
          side * 9,
          split
        );

        y = THREE.MathUtils.lerp(
          1.5,
          1.8,
          split
        );

        z = THREE.MathUtils.lerp(
          0,
          -2,
          split
        );
      }

      // --------------------------------------------------------
      // MOVEMENT 3
      // Continue outward
      // --------------------------------------------------------

      else if (scroll <= 0.68) {
        x = THREE.MathUtils.lerp(
          side * 9,
          side * 11,
          exit
        );

        y = THREE.MathUtils.lerp(
          1.8,
          1.5,
          exit
        );

        z = THREE.MathUtils.lerp(
          -2,
          -4,
          exit
        );
      }

      // --------------------------------------------------------
      // MOVEMENT 4
      // Stay in background
      // --------------------------------------------------------

      else {
        x = side * 11;
        y = 1.5;
        z = -4;
      }

      jet.position.set(x, y, z);

      // --------------------------------------------------------
      // ROTATION
      //
      // LEFT  → 👈
      // RIGHT → 👉
      // --------------------------------------------------------

      if (scroll <= 0.20) {
        jet.rotation.set(
          0,
          0,
          0
        );
      }

      else if (scroll <= 0.48) {
        const turn = THREE.MathUtils.lerp(
          0,
          -side * (Math.PI / 2),
          split
        );

        const tilt = THREE.MathUtils.lerp(
          0,
          -side * 0.30,
          split
        );

        jet.rotation.set(
          0,
          turn,
          tilt
        );
      }

      else {
        jet.rotation.set(
          0,
          -side * (Math.PI / 2),
          0
        );
      }
    };

    animateSideJet(
      leftJet,
      -1
    );

    animateSideJet(
      rightJet,
      1
    );

    // ----------------------------------------------------------
    // CENTER HERO JET
    // ----------------------------------------------------------

    const hero = centerJet.current;

    if (hero) {
      // --------------------------------------------------------
      // CENTER JET HIDDEN UNTIL 68%
      // --------------------------------------------------------

      if (scroll < 0.68) {
        hero.position.set(
          0,
          -20,
          0
        );

        hero.rotation.set(
          0,
          0,
          0
        );

        // ONLY SIZE CHANGED
        hero.scale.setScalar(
          0.25
        );
      }

      // --------------------------------------------------------
      // CENTER JET ENTERS
      // --------------------------------------------------------

      else {
        hero.position.set(
          0,

          // Comes up from below
          THREE.MathUtils.lerp(
            -16,
            1.5,
            center
          ),

          // Comes slightly toward camera
          THREE.MathUtils.lerp(
            0,
            5.5,
            center
          )
        );

        // Faces camera
        hero.rotation.set(
          0,
          0,
          0
        );

        // ONLY SIZE CHANGED
        hero.scale.setScalar(
          THREE.MathUtils.lerp(
            0.25,
            0.34,
            center
          )
        );
      }
    }

    // ----------------------------------------------------------
    // CAMERA
    // ----------------------------------------------------------

    const cameraZ = THREE.MathUtils.lerp(
      24,
      13.5,
      center
    );

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      0,
      0.06
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      3,
      0.06
    );

    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      cameraZ,
      0.06
    );

    camera.lookAt(
      0,
      THREE.MathUtils.lerp(
        0.5,
        0,
        center
      ),
      0
    );
  });

  // ------------------------------------------------------------
  // EXHAUST
  // ------------------------------------------------------------

  const exhaustIntensity =
    bursting || missionMode
      ? 150
      : 75;

  // ------------------------------------------------------------
  // RENDER
  // ------------------------------------------------------------

  return (
    <group>

      {/* ======================================================
          JET 1 — LEFT
          ====================================================== */}

      <group ref={leftJet}>
        {/* SIZE ONLY: 0.19 → 0.25 */}
        <group scale={0.25}>
          <Clone
            object={scene}
            castShadow
            receiveShadow
          />

          <Afterburner
            intensity={exhaustIntensity}
            missionMode={missionMode}
          />
        </group>
      </group>


      {/* ======================================================
          JET 2 — RIGHT
          ====================================================== */}

      <group ref={rightJet}>
        {/* SIZE ONLY: 0.19 → 0.25 */}
        <group scale={0.25}>
          <Clone
            object={scene}
            castShadow
            receiveShadow
          />

          <Afterburner
            intensity={exhaustIntensity}
            missionMode={missionMode}
          />
        </group>
      </group>


      {/* ======================================================
          JET 3 — CENTER HERO
          ====================================================== */}

      <group ref={centerJet}>
        {/* SIZE ONLY: 0.19 → 0.25 */}
        <group scale={0.25}>
          <Clone
            object={scene}
            castShadow
            receiveShadow
          />

          <Afterburner
            intensity={exhaustIntensity * 1.15}
            missionMode={missionMode}
          />
        </group>
      </group>

    </group>
  );
}


// ============================================================
// AFTERBURNER
// ============================================================

function Afterburner({
  intensity,
  missionMode,
}: {
  intensity: number;
  missionMode: boolean;
}) {
  const color = missionMode
    ? "#ef4444"
    : "#fb923c";

  return (
    <group
      position={[0, 0, -4.5]}
      rotation={[0, Math.PI, 0]}
    >

      {/* Light */}
      <pointLight
        intensity={intensity * 0.7}
        color={color}
        distance={15}
      />

      {/* Left exhaust */}
      <mesh
        position={[0.45, 0, 0]}
      >
        <sphereGeometry
          args={[0.3, 12, 12]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={intensity}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Right exhaust */}
      <mesh
        position={[-0.45, 0, 0]}
      >
        <sphereGeometry
          args={[0.3, 12, 12]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={intensity}
          transparent
          opacity={0.8}
        />
      </mesh>

    </group>
  );
}


// ============================================================
// PRELOAD
// ============================================================

useGLTF.preload(MODEL_URL);