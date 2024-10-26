import React from "react";
import { FaCircleXmark } from "react-icons/fa6";
import Status from "./Status";

export default function ProjectModal({ closeModal, item }) {
  return (
    <div className="fixed h-[100vh] overflow-auto grid place-items-center w-full z-30">
      <div className="overlay fixed blurry w-full h-full z-10 top-0"></div>

      <div className="absolute top-10 text-white z-30 mb-10">
        {/* cross */}
        <div className="relative grid place-items-center">
          <div
            className="cursor-pointer absolute md:top-[-15px] top-[-10px] md:right-[-15px] right-[1px] md:h-[30px] md:w-[30px] text-[25px] text-red-700  rounded-full flex items-center justify-center "
            onClick={closeModal}
          >
            <FaCircleXmark />
          </div>

          {/* modal details */}
          <div className="md:w-[700px] w-[95%] p-3 bg-zinc-950 border border-zinc-800 rounded">
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
