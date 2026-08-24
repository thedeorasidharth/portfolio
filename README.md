# Sidharth Deora — Full Stack Engineer & Web Developer

> An interactive 3D developer portfolio built with Next.js, React, Three.js, React Three Fiber, TypeScript, and Tailwind CSS featuring a cinematic fighter-jet HUD experience.

[💼 LinkedIn](https://linkedin.com/in/thedeorasidharth) • [🐙 GitHub Profile](https://github.com/thedeorasidharth) • [📸 Instagram](https://instagram.com/thedeorasidharth) • [✉️ Email](mailto:deorasidharth1@gmail.com)

---

## Overview

Welcome! I'm **Sidharth Deora**, a **Full Stack Engineer** and **Web Developer** specializing in building high-performance web applications, scalable backends (MERN stack), and modern interactive 3D web experiences.

This repository contains the source code for my interactive **3D developer portfolio**. Built with **Next.js 16 (App Router)**, **React 19**, **Three.js**, **React Three Fiber (@react-three/fiber)**, **TypeScript**, and **Tailwind CSS**, it combines full-stack software architecture with a fighter jet tactical HUD flight interface.

---

## Features

- ✈️ **Cinematic 3D Fighter Jet Hero**: Real-time 3D Sukhoi Su-30 jet model with dynamic afterburner lighting and scroll-driven roll/bank flight maneuvers.
- 🎛️ **HUD Cockpit Telemetry**: Top Gun styled flight overlay with real-time UTC clock, simulated altitude/speed gauges, and mission progress status.
- 🚀 **Featured Deployments**: Showcases key production projects (*EduSpark*, *SkillShare Live*, *HealthX*, *NoteHive*) with live demo links and tech stack pills.
- 📊 **Live GitHub Activity Telemetry**: Dynamic API endpoint parsing real-time annual contribution heatmaps, streaks, total stars, and public repositories.
- 📄 **Technical Dossier / Resume**: Direct access and downloadable PDF resume dossier (`Sidharth_Deora_Resume.pdf`).
- 💼 **Freelance Capabilities Hub**: Interactive service offerings with rapid project dispatch triggers.
- 📱 **Mobile & Touch Optimization**: Automatic coarse-pointer detection disabling unnecessary mouse spring listeners and adjusting WebGL tiering on phones/tablets.
- 🔍 **SEO & Structured Data**: Built-in Next.js Metadata API, Schema.org JSON-LD (`Person` & `WebSite`), canonical URLs, `sitemap.xml`, and `robots.txt`.

---

## Tech Stack

### Core & Framework
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)

### 3D Graphics Engine
- **3D Engine**: [Three.js](https://threejs.org/)
- **React 3D Renderer**: [@react-three/fiber](https://r3f.docs.pmnd.rs/)
- **3D Utilities**: [@react-three/drei](https://github.com/pmndrs/drei)
- **Post-Processing**: [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing)

### Animations & UI
- **Motion Engine**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.react.dev/)

---

## Architecture & Performance

- **Static Device Tiering**: Uses static browser hardware signals (`deviceMemory`, `hardwareConcurrency`, `pointer: coarse`) via `useDeviceTier` to automatically scale particle star counts and cloud complexity without blocking the main rendering loop.
- **SSR-Safe WebGL Isolation**: Three.js canvas dynamically imported with `{ ssr: false }` to ensure fast initial page hydration and zero WebGL SSR mismatch.
- **Client Caching**: GitHub telemetry features client-side `localStorage` caching with 1-hour TTL to remain well within GitHub API rate limits.

---

## Project Structure

```text
src/
├── app/
│   ├── api/github/         # Live GitHub contribution telemetry API route
│   ├── favicon.ico         # Application icon
│   ├── globals.css         # Custom HUD styles, glassmorphism & scanlines
│   ├── layout.tsx          # Root layout with Metadata API & JSON-LD structured data
│   ├── page.tsx            # Main single-page canvas & overlay host
│   ├── robots.ts           # Dynamic robots.txt route
│   └── sitemap.ts          # Dynamic sitemap.xml route
├── components/
│   ├── 3d/
│   │   ├── Environment.tsx  # Dynamic sky, star field & volumetric clouds
│   │   ├── Jet.tsx          # 3D Sukhoi Su-30 jet flight mechanics & lighting
│   │   ├── LensFlare.tsx    # Sun light flare shader effects
│   │   ├── Scene.tsx        # Canvas setup, camera controllers & lighting
│   │   └── Scene3DErrorBoundary.tsx # Fallback handler for WebGL context loss
│   ├── sections/
│   │   ├── About.tsx        # Profile overview & core capabilities
│   │   ├── Contact.tsx      # Direct mail, WhatsApp & social links
│   │   ├── Freelance.tsx    # Freelance service capabilities & inquiry trigger
│   │   ├── GithubActivity.tsx # Real-time contribution heatmap & metrics
│   │   ├── Hero.tsx         # Primary hero title & mission dispatch trigger
│   │   ├── Projects.tsx     # Featured project cards with live links
│   │   ├── Resume.tsx       # Dossier dossier preview & PDF download
│   │   └── Skills.tsx       # Radar indicators for technical proficiency
│   ├── ui/
│   │   ├── BackgroundAudio.tsx # Ambient sound controller
│   │   ├── CinematicIntro.tsx  # Tactical HUD fly-in intro sequence
│   │   ├── EasterEggs.tsx      # Tactical AI assistant modal & overdrive easter egg
│   │   ├── HUD.tsx             # Fixed cockpit flight telemetry UI overlay
│   │   └── Overlay.tsx         # Main scrollable section layout
│   └── CustomCursor.tsx    # Custom spring cursor (desktop only)
├── hooks/
│   └── useDeviceTier.ts    # GPU/CPU performance tier detection
└── lib/
    └── site-config.ts      # Centralized metadata, domain & keyword configuration
```

---

## Featured Projects

1. **[EDUSPARK](https://www.edusparksheoganj.in/)**: Interactive educational platform featuring collaborative learning tools, real-time study rooms, resource sharing, and course management.
2. **[SKILLSHARE LIVE](https://skillshare-delta.vercel.app/)**: Real-time study platform enabling users to join interactive rooms for collaborative learning and live interaction.
3. **[HEALTHX](https://healthx-five.vercel.app/)**: Comprehensive full-stack medical management platform for patients, doctors, records, and real-time appointment tracking.
4. **[NOTEHIVE](https://github.com/thedeorasidharth/NOTEHIVE-V2)**: Collaborative notes sharing platform featuring PDF uploads, AI-powered summarization, search, and rating system.

---

## Getting Started

### Prerequisites
- **Node.js**: 18.x or higher
- **Package Manager**: npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/thedeorasidharth/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Copy `.env.example` to `.env.local` to configure your site URL for production deployment:

```bash
cp .env.example .env.local
```

```env
# Public Site URL for canonical metadata & sitemap generation
NEXT_PUBLIC_SITE_URL=https://your-portfolio-domain.com
```

*Note: No secret API keys or private tokens are required.*

---

## Production Build

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## Deployment

Optimized for zero-config deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` in the Environment Variables section pointing to your domain.
4. Deploy!

---

## SEO & Discoverability

- **Metadata API**: Dynamic Open Graph and Twitter Card generation in `src/app/layout.tsx`.
- **JSON-LD**: Schema.org `Person` & `WebSite` structured data graph.
- **Sitemap & Robots**: Dynamic `/sitemap.xml` and `/robots.txt` generation.

---

## Contact & Social Links

- **Email**: [deorasidharth1@gmail.com](mailto:deorasidharth1@gmail.com)
- **GitHub**: [@thedeorasidharth](https://github.com/thedeorasidharth)
- **LinkedIn**: [in/thedeorasidharth](https://linkedin.com/in/thedeorasidharth)
- **Instagram**: [@thedeorasidharth](https://instagram.com/thedeorasidharth)

---

### ⭐ Star this repository
If you found this 3D portfolio implementation useful or inspiring, consider giving it a ⭐! It helps others discover the project.

---

## License

All rights reserved unless otherwise stated.
