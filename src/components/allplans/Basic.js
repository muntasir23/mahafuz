import React from "react";
import { IoIosTimer } from "react-icons/io";
import { BsArrowRepeat } from "react-icons/bs";

export default function Basic() {
  return (
    <div className="mt-2 p-2">
      <h1 className="font-bold text-white md:text-[35px] text-[25px] ">
        BDT 3500
      </h1>
      <div className="mt-5">
        <p className="md:text-[18px] text-[16px] text-zinc-100">
          Perfect for individuals or small businesses seaking a professional,
          no-fuss website.
        </p>
        <ul className="text-zinc-100 list-disc ml-[30px] text-[16px] mt-3">
          <li>
            <strong>Simple yet Effective: </strong>Get a clean and professional
            static website built with <strong>HTML, CSS & JavaScript</strong>.
          </li>
          <li>
            <strong>Modern Design: </strong>Includes a sleek, modern look with
            sublet animations to enhance user experiance.
          </li>
          <li>
            <strong>Up to 8 pages: </strong>Your website will be fully
            responsive for mobile, tablet and desktop devices. We'll create up
            to 8 pages.
          </li>
        </ul>
        <div className="w-full border-t mt-5 border-zinc-800"></div>
        {/* delivary and revision */}
        <div className="mt-5 flex justify-between text-white">
          <h6 className="flex items-center gap-2">
            <p className="text-[#ffbd59]">
              <IoIosTimer />
            </p>{" "}
            4-day delivery
          </h6>
          <h6 className="flex items-center gap-2">
            <p className="text-[#ffbd59]">
              <BsArrowRepeat />
            </p>
            6 Revisions
          </h6>
        </div>
      </div>
    </div>
  );
}
