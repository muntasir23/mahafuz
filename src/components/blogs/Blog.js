import React from "react";
import { BsFillQuestionDiamondFill } from "react-icons/bs";

export default function Blog({ data }) {
  const { title, imgUrl, description } = data;

  return (
    <div>
      <div className="">
        <div className="flex gap-2 items-center text-white">
          <p className="font-[16px] text-[#6eeb6b]">
          <BsFillQuestionDiamondFill />
          </p>
          <p className="font-bold text-[18px] ">{title}</p>
        </div>
      </div>
      <div className="mt-3">
        {/* img box  */}
        <img alt="" src={imgUrl} className="rounded" />
      </div>
      <div className="mt-5">
        {/* content */}
         {description}
      </div>
    </div>
  );
}
