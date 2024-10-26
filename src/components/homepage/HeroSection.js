import React from "react";
import ShinnyButton from "./Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="relative grid-bg grid place-items-center min-h-screen text-white overflow-hidden">
      <div className=" blur-[20px] bg-[#000] md:h-[400px] h-[100px] w-[100%] absolute top-[-70px] md:top-[-360px]"></div>
      <div className="md:w-[900px] w-[95%]">
        <div className="masker">
          <div className="w-fit flex items-center">
            <h1 className="uppercase text-left md:text-[75px] sm:text-[50px] text-[40px] font-bold leading-none tracking-tighter ">
              We Create
            </h1>
          </div>
        </div>
        <div className="masker">
          <div className="w-fit flex items-center justify-start gap-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ ease: [0.76, 0, 0.24, 1], delay: 0.2, damping: 15 }}
              className="md:h-[55px] h-[50px] heroBgImage rounded-md overflow-hidden bg-violet-500"
            >
              {/* <Image alt="" src={textLogo} /> */}
            </motion.div>
            <h1 className="uppercase text-left md:text-[75px] sm:text-[50px] text-[40px] font-bold leading-[5px] tracking-tighter ">
              Eye <span className="text-[#6eeb6b]">Opening</span>
            </h1>
          </div>
        </div>
        <div className="masker">
          <div className="w-fit flex items-center">
            <h1 className="uppercase text-left md:text-[75px] sm:text-[50px] text-[40px] font-bold leading-none tracking-tighter ">
              Presentation
            </h1>
          </div>
        </div>

        <div className="md:w-[900px] w-[95%] mt-[40px]">
          <p className="md:text-[14px] text-[12px]">
            Develop and deliver high-performance web applications with a focus
            on React and Redux for frontend architecture and Next.js for
            dynamic, SEO-optimized sites. Experienced in Node.js, MongoDB, and
            Firebase for backend functionality, ensuring secure, reliable
            applications. Skilled in using Tailwind CSS for responsive,
            efficient styling and Framer Motion for smooth, visually appealing
            animations. Build applications that are user-centric, visually
            engaging, and optimized for performance, with a strong commitment to
            balancing functionality and design to enhance user experience.
          </p>
        </div>
        <div className="mt-[20px]">
          <Link to="/blogs">
            <ShinnyButton text="All Blogs" />
          </Link>
        </div>
      </div>
    </div>
  );
}
