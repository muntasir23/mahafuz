import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ p }) {
  return (
    <div className="p-card border-2 border-zinc-800 p-2 bg-black rounded-md cursor-pointer">
      <Link className="img-box" to={`/project/${p.id}`}>
        <img alt="" src={p.imgUrl} className="rounded" />
      </Link>
      <div>
        <Link to={`/project/${p.id}`}>
          <h1 className="text-[#6eeb6b] font-semibold mt-1 text-[14px] md:text-[14px]">
            {p.name.length > 15 ? p.name.slice(0, 15) + "..." : p.name}
          </h1>
        </Link>
      </div>
    </div>
  );
}
