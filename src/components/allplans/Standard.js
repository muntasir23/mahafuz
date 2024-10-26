import React from "react";
import { IoIosTimer } from "react-icons/io";
import { BsArrowRepeat } from "react-icons/bs";

export default function Standard() {
  return (
    <div className="mt-2 p-2">
      <h1 className="text-white flex gap-2 items-center">
        <p className=" md:text-[35px] text-[25px] font-bold">BDT 12000</p>{" "}
        <p className="text-[18px]">or above</p>
      </h1>
      <div className="mt-5">
        <p className="md:text-[18px] text-[16px] text-zinc-100">
          Ideal for growing businesses that need dynamic and interactive
          websites.
        </p>
        <ul className="text-zinc-100 list-disc ml-[30px] text-[16px] mt-3">
          <li>
            <strong>Built with React: </strong> A dynamic website using React
            for a fast, modern, and smooth user experiance
          </li>
          <li>
            <strong>Firebase Backend Integration: </strong> Your website will
            come with Firebase for data management, authentication, seamless
            backend support
          </li>
          <li>
            <strong>CMS & E-commerce Ready: </strong>Includes options for CMS
            application to easily manage content and a simple e-commerce setup
            for selling products online
          </li>
        </ul>
        <div className="w-full border-t mt-5 border-zinc-800"></div>
        {/* delivary and revision */}
        <div className="mt-5 flex justify-between text-white">
          <h6 className="flex items-center gap-2">
            <p className="text-[#ffbd59]">
              <IoIosTimer />
            </p>{" "}
            10-day delivery
          </h6>
          <h6 className="flex items-center gap-2">
            <p className="text-[#ffbd59]">
              <BsArrowRepeat />
            </p>
            8 Revisions
          </h6>
        </div>
      </div>
    </div>
  );
}
