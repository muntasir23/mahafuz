import React from "react";

export default function ProjectCard({ p }) {
  return (
    <div className="p-card border-2 border-zinc-800 p-2 bg-black rounded-md cursor-pointer">
      <div className="img-box">
        <img alt="" src={p.imgUrl} className="rounded" />
      </div>
      <div>
        <h1 className="text-[#6eeb6b] font-semibold mt-1 text-[14px] md:text-[14px]">
          {
            p.name.length > 15 ? p.name.slice(0, 15) + "..." : p.name
          }
          {/* {p.name.slice(0, 15)}... */}
        </h1>
      </div>
    </div>
  );
}
