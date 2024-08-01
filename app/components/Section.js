"use client";

import React, { useEffect } from "react";
import Hero from "./Hero";
import Education from "./Education";
import TechSkills from "./TechSkills";
import SoftSkills from "./SoftSkills";
import SoftSkillsList from "./SoftSkillsList";
import Eyes from "./Eyes";
import Contact from "./Contact";

export default function Section() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
      <Hero />
      <Education />
      <TechSkills />
      <SoftSkills />
      <SoftSkillsList />
      <Eyes />
      <Contact />
      {/* <section className="h-screen bg-blue-600 z-20">
        <h1 className="text-yellow-500">Hello </h1>
      </section> */}
    </div>
  );
}
