import { Helmet } from "react-helmet";
import HeroSection from "../components/homepage/HeroSection";
import Education from "../components/homepage/Education";
import TechSkills from "../components/homepage/TechSkills";
import SoftSkills from "../components/homepage/SoftSkills";
import SoftSkillsList from "../components/homepage/SoftSkillsList";
import Eyes from "../components/homepage/Eyes";
import Contact from "../components/homepage/Contact";
// import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);
  
  return (
    <>
      <div className="text-red-500">
        <Helmet>
          <title>Mahafuz Ahamed | Portfolio</title>
        </Helmet>
        {/* blurry content */}

        <HeroSection />
        <Education />
        <TechSkills />
        <SoftSkills />
        <SoftSkillsList />
        <Eyes />
        <Contact />
      </div>
    </>
  );
}
