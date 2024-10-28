import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./data";

export default function ProjectsGrid() {
  // selected item


  return (
    <>

      <div className="w-full relative grid place-items-center">
        {/* blurry colour */}

        <div className="absolute h-[300px] w-[300px] top-[-30px] left-[-150px] rounded-full bg-gradient-to-b from-[#6eeb6b] blury -z-10"></div>

        {/*projects text  */}

        <div className="md:w-[900px] w-[95%] mt-5">
          <h1 className="md:text-[30px] text-[25px] border-l-4 pl-2 border-[#6eeb6b] font-bold text-white">
            PROJECTS
          </h1>
        </div>

        {/* project cards */}
        <div className="md:w-[900px] w-[95%] grid md:grid-cols-3 grid-cols-2 gap-3 mt-10 border border-[#6eeb6b]  rounded-xl md:p-5 p-3 bg-gradient-to-tl from-[#6eeb6b] mb-3">
          {projects.map((p) => (
            <div key={p.id} >
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
