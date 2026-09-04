"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HUD from "./HUD";
import Navbar from "./Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import EdusparkCaseStudy from "@/components/sections/EdusparkCaseStudy";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import GithubActivity from "@/components/sections/GithubActivity";
import Freelance from "@/components/sections/Freelance";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import CinematicIntro from "./CinematicIntro";

const Section = ({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => (
  <section id={id} className={`section-container ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto w-full px-4 md:px-6"
    >
      {children}
    </motion.div>
  </section>
);

export default function Overlay() {
  const [introActive, setIntroActive] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {introActive && (
          <CinematicIntro key="intro" onComplete={() => setIntroActive(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introActive ? 0 : 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="relative z-10"
      >
        <div className="overlay-top" />
        <div className="overlay-bottom" />

        {!introActive && (
          <>
            <Navbar />
            <HUD />
          </>
        )}

        <div className="relative space-y-12 md:space-y-20 pt-4">
          {/* Hero Section */}
          <Section id="hero" className="items-center text-center">
            <Hero />
          </Section>

          {/* What I Build Services Section */}
          <Section id="services">
            <Services />
          </Section>

          {/* Eduspark Flagship Case Study */}
          <Section id="eduspark">
            <EdusparkCaseStudy />
          </Section>

          {/* Featured Projects */}
          <Section id="projects">
            <Projects />
          </Section>

          {/* How I Work Process */}
          <Section id="process">
            <Process />
          </Section>

          {/* Technical Stack Domains */}
          <Section id="skills">
            <Skills />
          </Section>

          {/* Mission Log / Experience & Credibility */}
          <Section id="experience">
            <Experience />
          </Section>

          {/* About / Subject Profile */}
          <Section id="about">
            <About />
          </Section>

          {/* Live GitHub Telemetry Activity */}
          <Section id="github">
            <GithubActivity />
          </Section>

          {/* Have a Project in Mind? Freelance CTA */}
          <Section id="freelance">
            <Freelance />
          </Section>

          {/* Resume Dossier */}
          <Section id="resume">
            <Resume />
          </Section>

          {/* Establish Comm Link Contact */}
          <Section id="contact" className="items-center text-center">
            <Contact />
          </Section>
        </div>
      </motion.div>
    </>
  );
}
