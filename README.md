# Sidharth Deora — Portfolio

A high-performance, interactive developer portfolio engineered with **Next.js**, **React**, **Three.js / React Three Fiber**, and **Tailwind CSS**. Features a fighter jet 3D hero animation, HUD tactical styling, and web systems architecture.

## Overview

This portfolio showcases the engineering work, full-stack applications, interactive experiences, and open-source telemetry of **Sidharth Deora** (Full Stack Engineer & Web Developer). Built with modern App Router architecture, responsive 3D graphics, and complete Google SEO optimizations.

## Features

- **Cinematic 3D Fighter Jet Hero**: 3D Sukhoi Su-30 jet model rendered in real-time with dynamic afterburner lighting and scroll-triggered flight maneuvers.
- **Scroll-Based 3D Formation**: Interactive canvas camera syncs with section scrolling and mouse tracking.
- **HUD Tactical Interface**: Top Gun / jet cockpit styled HUD overlay featuring live UTC clock telemetry, altitude/speed indicators, and mission progress.
- **Featured Projects Log**: Showcase of key full-stack builds (EduSpark, SkillShare Live, HealthX, NoteHive) with live deployment links and tech tags.
- **Freelance & Services Hub**: Interactive service capabilities and rapid-deployment inquiry triggers.
- **Live GitHub Activity Telemetry**: Dynamic API integration parsing live contribution heatmaps, streaks, stars, and public repositories.
- **Technical Dossier / Resume**: Direct inline access and downloadable PDF resume file.
- **Responsive & Mobile Optimization**: Adaptive layout with automatic performance tiering for coarse-pointer touch devices.
- **Search Engine Optimization (SEO)**: Custom Metadata API setup, canonical URLs, Schema.org JSON-LD (`Person` & `WebSite`), `sitemap.xml`, and `robots.txt`.

## Tech Stack

### Core & Framework
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)

### 3D & Graphics Engine
- **3D Engine**: [Three.js](https://threejs.org/)
- **React 3D Renderer**: [@react-three/fiber](https://r3f.docs.pmnd.rs/)
- **3D Helpers**: [@react-three/drei](https://github.com/pmndrs/drei)
- **Post-Processing**: [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing)

### Animations & UI
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.react.dev/)

## Project Structure

```text
src/
├── app/
│   ├── api/github/         # Live GitHub activity telemetry endpoint
│   ├── favicon.ico         # App favicon
│   ├── globals.css         # Custom HUD design system & scanlines
│   ├── layout.tsx          # Root layout with Metadata & JSON-LD structured data
│   ├── page.tsx            # Main single-page canvas & overlay host
│   ├── robots.ts           # Dynamic robots.txt route
│   └── sitemap.ts          # Dynamic sitemap.xml route
├── components/
│   ├── 3d/
│   │   ├── Environment.tsx  # Sky box, star field & volumetric clouds
│   │   ├── Jet.tsx          # Sukhoi Su-30 3D jet flight mechanics & lighting
│   │   ├── LensFlare.tsx    # Sun light flare shader effects
│   │   ├── Scene.tsx        # Canvas setup, camera controllers & lighting
│   │   └── Scene3DErrorBoundary.tsx # Fallback wrapper for WebGL errors
│   ├── sections/
│   │   ├── About.tsx        # Subject profile & skill stack overview
│   │   ├── Contact.tsx      # Frequency link & direct contact triggers
│   │   ├── Freelance.tsx    # Available service capabilities & project inquiries
│   │   ├── GithubActivity.tsx # Real-time contribution heatmap & metrics
│   │   ├── Hero.tsx         # Primary hero title & flight dispatch trigger
│   │   ├── Projects.tsx     # Active deployments & project cards
│   │   ├── Resume.tsx       # Technical dossier preview & PDF download
│   │   └── Skills.tsx       # Radar radar indicators for tech proficiency
│   ├── ui/
│   │   ├── BackgroundAudio.tsx # Ambient sound controller
│   │   ├── CinematicIntro.tsx  # Initial tactical HUD fly-in animation
│   │   ├── EasterEggs.tsx      # Tactical AI assistant modal & overdrive mode
│   │   ├── HUD.tsx             # Fixed cockpit flight telemetry UI overlay
│   │   └── Overlay.tsx         # Main scrollable section container
│   └── CustomCursor.tsx    # Custom spring cursor (desktop pointer devices)
├── hooks/
│   └── useDeviceTier.ts    # GPU/CPU performance tier detection for R3F scaling
└── lib/
    └── site-config.ts      # Centralized domain, metadata, and keyword configuration
```

## Featured Projects

1. **EDUSPARK**: Interactive educational platform featuring collaborative learning tools, real-time study rooms, resource sharing, and course management.
2. **SKILLSHARE LIVE**: Real-time study platform enabling users to join interactive rooms for collaborative learning and live interaction.
3. **HEALTHX**: Comprehensive full-stack medical management platform for patients, doctors, records, and real-time appointment tracking.
4. **NOTEHIVE**: Collaborative notes sharing platform featuring PDF uploads, AI-powered summarization, search, and rating system.

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thedeorasidharth/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

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

## Build

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Deployment

This portfolio is optimized for zero-config deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` in the Environment Variables section pointing to your domain.
4. Deploy!

## SEO & Structured Data

- **Metadata API**: Dynamic Open Graph and Twitter Card generation in `src/app/layout.tsx`.
- **JSON-LD**: Schema.org `Person` & `WebSite` structured data graph embedded in `<head>`.
- **Sitemap**: Auto-generated XML sitemap accessible at `/sitemap.xml`.
- **Robots**: Search engine crawler instructions served at `/robots.txt`.

## Contact

- **Email**: [deorasidharth1@gmail.com](mailto:deorasidharth1@gmail.com)
- **GitHub**: [@thedeorasidharth](https://github.com/thedeorasidharth)
- **LinkedIn**: [in/thedeorasidharth](https://linkedin.com/in/thedeorasidharth)
- **Instagram**: [@thedeorasidharth](https://instagram.com/thedeorasidharth)

## License

All rights reserved unless otherwise stated.
