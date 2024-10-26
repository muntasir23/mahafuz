import React from "react";
import { Helmet } from "react-helmet";
import ProjectsGrid from "../components/projects/ProjectsGrid";

export default function Projects() {
  return (
    <div className="text-red-500">
      <Helmet>
        <title>Mahafuz Ahamed | Projects</title>
      </Helmet>
      {/* grids */}
      <ProjectsGrid />
      
    </div>
  );
}
