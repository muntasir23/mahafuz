import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../components/projects/data";
import ProjectModal from "../components/projects/ProjectModal";

export default function SingleBlog() {
  const { projectId } = useParams();
  console.log(projectId);


  

  return (
    <div className="text-white">
      {projects
        .filter((p) => p.id === Number(projectId))
        .map((v, i) => (
          <ProjectModal item={v} key={i} />
        ))}
    </div>
  );
}
