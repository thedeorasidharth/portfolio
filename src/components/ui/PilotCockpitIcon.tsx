"use client";

export default function PilotCockpitIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full text-sky-400 select-none overflow-hidden"
      aria-hidden="true"
    >
      <defs>
        {/* Helmet Visor Gradient */}
        <linearGradient id="pilotVisorGrad" x1="8" y1="10" x2="24" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#0284c7" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#00cfff" stopOpacity="0.95" />
        </linearGradient>

        {/* HUD Glow Filter */}
        <filter id="pilotHudGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Cockpit Canopy Outer Arc */}
      <path
        d="M3 26 C 6 9, 26 9, 29 26"
        stroke="#38bdf8"
        strokeWidth="0.75"
        strokeOpacity="0.3"
        strokeDasharray="2 2"
      />

      {/* Outer Tactical Reticle Corner Brackets */}
      <path d="M4 7 H 7 M 4 7 V 10" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />
      <path d="M28 7 H 25 M 28 7 V 10" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />
      <path d="M4 25 H 7 M 4 25 V 22" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />
      <path d="M28 25 H 25 M 28 25 V 22" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />

      {/* Pilot Helmet Base Silhouette */}
      <path
        d="M16 6.5 C11.2 6.5 8.8 10 8.8 14.5 C8.8 17.5 9.8 20.5 11.2 24 L20.8 24 C22.2 20.5 23.2 17.5 23.2 14.5 C23.2 10 20.8 6.5 16 6.5 Z"
        fill="#070d1e"
        stroke="#38bdf8"
        strokeWidth="1.1"
        filter="url(#pilotHudGlow)"
      />

      {/* Flight Visor (Tactical Shield) */}
      <path
        d="M10.2 12 C10.2 10.5 12.2 9.5 16 9.5 C19.8 9.5 21.8 10.5 21.8 12 C21.8 15 19.2 16 16 16 C12.8 16 10.2 15 10.2 12 Z"
        fill="url(#pilotVisorGrad)"
        stroke="#38bdf8"
        strokeWidth="0.8"
      />

      {/* Visor Specular Reflection */}
      <path
        d="M11.5 11 C13.5 10.5 15.5 10.5 16.5 10.8"
        stroke="#ffffff"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />

      {/* Oxygen Mask & Tactical Comm */}
      <path d="M13.5 18 H18.5 M14.5 19.5 H17.5" stroke="#38bdf8" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.8" />
      <circle cx="16" cy="21.5" r="0.9" fill="#38bdf8" />

      {/* Cockpit Pitch Ladder Horizon Ticks */}
      <path d="M3 16 H6 M26 16 H29" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6" />

      {/* Animated Subtle HUD Pulse Ring */}
      <circle
        cx="16"
        cy="13"
        r="7.5"
        stroke="#38bdf8"
        strokeWidth="0.55"
        strokeDasharray="3 2"
        className="hud-pulse-ring"
      />

      {/* Subtle Vertical HUD Scan Line */}
      <line
        x1="16"
        y1="4"
        x2="16"
        y2="28"
        stroke="#00cfff"
        strokeWidth="0.6"
        strokeOpacity="0.35"
        className="hud-scan-line"
      />
    </svg>
  );
}
