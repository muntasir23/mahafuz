import React from "react";
import { IoIosTimer } from "react-icons/io";
import { BsArrowRepeat } from "react-icons/bs";

export default function Standard() {
  return (
    <div className="mt-2 p-2">
      <h1 className="text-white flex gap-2 items-center">
        <p className=" md:text-[35px] text-[25px] font-bold">BDT 20000</p>  <p className="text-[18px]">or above</p>
      </h1>
      <div className="mt-5">
        <p className="md:text-[18px] text-[16px] text-zinc-100">
          For businesses or individuals seeking top-tier services with full customization and advanced features.
        </p>
        <ul className="text-zinc-100 list-disc ml-[30px] text-[16px] mt-3">
          <li>
            <strong>Powered by Next.js: </strong>A high-performance, server-randered website using Next.js for optimal speed, SEO and scalability.
          </li>
          <li>
            <strong>Enhanced with Framer Motion: </strong>Beautiful, smooth animation powered by Framer Motion.
          </li>
          <li>
            <strong>Advanced Backend Option: </strong>Firebase, Node.js , MongoDB, MySQL for backend solution.
          </li>
          <li>
            <strong>Custom Features: </strong>Wheather it's a chat application, money-tracking software, CMS, advanced e-commerce or LMS, we provide custom solutions for your businesses.
          </li>
        </ul>
        <div className="w-full border-t mt-5 border-zinc-800"></div>
        {/* delivary and revision */}
        <div className="mt-5 flex justify-between text-white">
          <h6 className="flex items-center gap-2">
            <p className="text-[#ffbd59]">
              <IoIosTimer />
            </p>{" "}
            (20-30)-day delivery
          </h6>
          <h6 className="flex items-center gap-2">
            <p className="text-[#ffbd59]">
              <BsArrowRepeat />
            </p>
            15 Revisions
          </h6>
        </div>
      </div>
    </div>
  );
}

