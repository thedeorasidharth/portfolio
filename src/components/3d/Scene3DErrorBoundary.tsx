"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  errorMsg?: string;
}

/**
 * Error boundary that wraps the entire 3D canvas.
 *
 * Catches:
 *  - GLB load failures propagated as thrown Errors
 *  - WebGL context errors that bubble up through R3F
 *  - Any rendering exception inside the Canvas subtree
 *
 * On error:
 *  - The 3D scene is replaced by a static gradient background
 *  - The HTML portfolio (Overlay) continues to render and scroll normally
 *  - The user is never stranded on a blank or broken page
 */
export class Scene3DErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMsg: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMsg: error?.message || String(error) };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(
      "[Portfolio 3D] 3D scene encountered an error and fell back to static view.",
      "\nError:", error?.message,
      "\nComponent stack:", info?.componentStack
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            background:
              "linear-gradient(to bottom, #0a0e24 0%, #171d3d 50%, #0a0e24 100%)",
          }}
        />
      );
    }

    return this.props.children;
  }
}
