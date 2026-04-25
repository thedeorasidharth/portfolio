"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Overlay from "@/components/ui/Overlay";

const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="relative h-full w-full">
      <div className="canvas-container">
        <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center text-sky-400 font-mono">LOADING MISSION...</div>}>
          <Scene />
        </Suspense>
      </div>
      <Overlay />
    </main>
  );
}
