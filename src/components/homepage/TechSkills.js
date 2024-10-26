import React from "react";
import TechItem from "./TechItem";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { LiaReact } from "react-icons/lia";
import { SiNextdotjs } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";

export default function TechSkills() {
  return (
    <div className="w-[100%] grid place-items-center mb-[100px]">
      <div className="md:w-[1000px] w-[95%] relative bg-zinc-950 grid place-items-center border-2 border-zinc-900 rounded-lg overflow-hidden py-3">
        <h1 className="text-gray-600 md:text-[40px] text-[30px] font-semibold strock">
          Technology Skills
        </h1>

        <span className="blur absolute left-[50%] -translate-x-[50%] -translate-y-[50%] top-[50%] rounded-full h-[40px] w-[40px] bg-[#6eeb6b]  z-3"></span>
        <div className="skills md:w-[600px] p-5 rounded-lg flex items-center justify-center gap-[20px] flex-wrap z-10">
          <TechItem bgColor="#e34c26" textColor="#ebebeb">
            <FaHtml5 />
          </TechItem>

          <TechItem bgColor="#264de4" textColor="	#000000">
            <IoLogoCss3 />
          </TechItem>

          <TechItem bgColor="#ebebeb" textColor="#22d3ee">
            <BiLogoTailwindCss />
          </TechItem>

          <TechItem bgColor="#000000" textColor="#ebebeb">
            <FaGithub />
          </TechItem>

          <TechItem bgColor="#bbf7d0" textColor="#15803d">
            <LiaReact />
          </TechItem>

          <TechItem bgColor="#000000" textColor="#ebebeb">
            <SiNextdotjs />
          </TechItem>

          <TechItem bgColor="#c4b5fd" textColor="#7c3aed">
            <SiCanva />
          </TechItem>

          <TechItem textColor="#000000" bgColor="#bef264">
            <SiMicrosoftexcel />
          </TechItem>
        </div>
      </div>
    </div>
  );
}
