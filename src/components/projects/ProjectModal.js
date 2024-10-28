import React from "react";

import Status from "./Status";

export default function ProjectModal({item }) {
  return (
    <div className="mt-10 overflow-auto grid place-items-center w-full z-30">
      <div className=" text-white z-30 mb-10">
        {/* cross */}
        <div className="relative grid place-items-center">
          {/* modal details */}
          <div className="md:w-[800px] w-[95%] p-3 bg-zinc-950 border border-zinc-800 rounded">
            {/* Image Box & title */}
            <div>
              <div className="img-box">
                <img alt="" src={item.imgUrl} className="rounded" />
              </div>
              {/* text */}
              <div className="mt-5">
                <h1 className="md:text-[25px] font-semibold text-[#6eeb6b]">
                  {item.name}
                </h1>
              </div>
            </div>

            {/* Status */}
            <div className="mt-5">
              <Status item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
