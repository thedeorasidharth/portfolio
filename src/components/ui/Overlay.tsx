"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HUD from "./HUD";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import CinematicIntro from "./CinematicIntro";

const Section = ({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) => (
  <section id={id} className={`section-container ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="max-w-4xl mx-auto w-full px-6"
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
        transition={{ duration: 2, delay: 0.5 }}
        className="relative z-10"
      >
        <div className="overlay-top" />
        <div className="overlay-bottom" />
        
        {!introActive && <HUD />}

        <div className="relative">
          <Section id="hero" className="items-center text-center">
            <Hero />
          </Section>

          <Section id="about">
            <About />
          </Section>

          <Section id="skills">
            <Skills />
          </Section>

          <Section id="projects">
            <Projects />
          </Section>

          <Section id="resume">
            <Resume />
          </Section>

          <Section id="contact" className="items-center text-center">
            <Contact />
          </Section>
        </div>
      </motion.div>
    </>
  );
}
