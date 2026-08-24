"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Overlay from "@/components/ui/Overlay";
import { Scene3DErrorBoundary } from "@/components/3d/Scene3DErrorBoundary";

const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-full w-full max-w-full overflow-x-clip">
      <div className="canvas-container">
        <Scene3DErrorBoundary>
          <Suspense
            fallback={
              <div
                aria-hidden="true"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#020617",
                }}
              />
            }
          >
            <Scene />
          </Suspense>
        </Scene3DErrorBoundary>
      </div>

      <Overlay />
    </main>
  );
}
