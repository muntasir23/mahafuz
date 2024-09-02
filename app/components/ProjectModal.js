"use client";
import { IoLogoGithub } from "react-icons/io";
import { FaLink } from "react-icons/fa";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { RiCloseCircleLine } from "react-icons/ri";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      type: "spring",
      stiffness: 260,
      damping: 15,
    },
  }),
};

export default function ProjectModal({ onClose, item }) {
  const { id, name, technologyUsed, imgUrl, description } = item;

  const [status, setStatus] = useState("About");

  let content = null;

  if (status === "About") {
    content = (
      <div>
        <p className="text-zinc-400">{description}</p>{" "}
        <div className="mt-3 border-t border-zinc-800 py-2">
          <p className="text-[#ffbd59] font-semibold">Technology Used</p>
          <div className="flex items-center gap-3 mt-2">
            {technologyUsed.map((v, i) => (
              <div key={i}>
                <span className="bg-black px-5 py-2 rounded font-semibold text-white text-[12px]">
                  {v}
                </span>
              </div>
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
          <a href="/" className="text-blue-600">
            link
          </a>
        </li>
        <p className="font-semibold text-white mt-4 text-[15px]">
          Website Link
        </p>
        <li className="flex items-center gap-2 mt-2 text-white text-[15px]">
          <FaLink />{" "}
          <a href="/" className="text-blue-600">
            link
          </a>
        </li>
      </div>
    );
  }

  return (
    <div className="w-[100%] grid place-items-center z-40">
      <div
        onClick={onClose}
        className="blurry fixed top-0 left-0 h-[100vh] w-[100%]"
      ></div>
      <div
        onClick={onClose}
        className="absolute -translate-x-[50%] md:top-5 top-[5%] text-zinc-600 hover:text-red-600 left-[50%] text-[32px] cursor-pointer"
      >
        <RiCloseCircleLine />
      </div>

      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ y: -0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 15,
        }}
        className="absolute p-4 flex flex-col flex-wrap items-start justify-center gap-10 top-[10%] bg-zinc-950 w-[90%] min-h-[500px] md:w-[500px] rounded-xl border-2 border-zinc-800"
      >
        <div className="w-[100%] ">
          <Image
            alt=""
            src={imgUrl}
            className="rounded-lg border border-zinc-900 shadow shadow-slate-500/10"
          />
        </div>

        <div className="w-[100%]">
          <h1 className="text-[25px] font-semibold text-[#6eeb6b] rounded-md">
            {name}
          </h1>
          <div className="buttons mt-5 flex gap-3 border-b border-b-zinc-800 w-[100%]">
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
                status === "Ref"
                  ? "border-b-2 border-b-[#ffbd59] bg-black "
                  : ""
              } text-white  py-1 px-5 rounded-t font-semibold`}
            >
              Refference
            </button>
          </div>
          <div className="content mt-4 w-[100%]">{content}</div>
        </div>
      </motion.div>
    </div>
  );
}
