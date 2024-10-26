import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Note from "./Note";

export default function Status({ item }) {
  const [status, setStatus] = useState("About");

  let content = null;

  if (status === "About") {
    content = (
      <div>
        <p className="text-zinc-400">{item.description}</p> {/* note */}
        <div>{item.note && <Note item={item} />}</div>
        <div className="mt-3 border-t border-zinc-800 py-2">
          <p className="text-[#ffbd59] font-semibold">Technology Used</p>
          <div className="flex items-center gap-3 mt-2">
            {item.technology.map((v) => (
              <span className="bg-black px-5 py-2 rounded font-semibold text-white text-[12px]">
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (status === "Ref") {
    content = (
      <div className="">
        <p className="font-semibold text-white text-[15px]">
          Github Repository
        </p>
        <li className="flex items-center gap-2 mt-2 text-white text-[15px]">
          <IoLogoGithub />{" "}
          <a href={item.gitlink} className="text-blue-600">
            {item.gitlink}
          </a>
        </li>
        <p className="font-semibold text-white mt-4 text-[15px]">
          Website Link
        </p>
        <li className="flex items-center gap-2 mt-2 text-white text-[15px]">
          <FaLink />{" "}
          <a href={item.sitelink} className="text-blue-600">
            {item.sitelink}
          </a>
        </li>
      </div>
    );
  }

  return (
    <>
      <div className="status">
        <div className="buttons flex gap-3 border-b border-b-zinc-800 w-[100%]">
          <button
            onClick={() => setStatus("About")}
            className={`${
              status === "About"
                ? "border-b-2 border-b-[#ffbd59] bg-black "
                : ""
            } text-white  py-1 px-5 rounded-t font-semibold`}
          >
            About
          </button>
          <button
            onClick={() => setStatus("Ref")}
            className={`${
              status === "Ref" ? "border-b-2 border-b-[#ffbd59] bg-black " : ""
            } text-white  py-1 px-5 rounded-t font-semibold`}
          >
            Refference
          </button>
        </div>
      </div>

      <div className="mb-[100px] mt-4">{content}</div>
    </>
  );
}
