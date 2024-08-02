"use client";

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

  return (
    <div className="w-[100%] grid place-items-center z-40">
      <div
        onClick={onClose}
        className="blurry fixed top-0 left-0 h-[100vh] w-[100%] "
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

        <div className="">
          <h1 className="text-[25px] border-l-[7px] border-l-orange-600 font-semibold text-orange-500 border bg-black px-3 border-zinc-800 rounded-md">
            {name}
          </h1>
          <h3 className="text-[15px] text-zinc-400 mt-5 border-b pb-5 border-zinc-800">
            {description}
          </h3>
          <p className="text-[15px] text-zinc-200 mt-5 font-semibold">
            Technology Used:
          </p>
          <div className="flex justify-start gap-4">
            {technologyUsed.map((v, i) => (
              <>
                <motion.p
                  key={i}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={i}
                  className="mt-[25px] font-semibold text-zinc-400 text-[15px] bg-orange-700 px-4 py-1 rounded-3xl"
                >
                  {v}
                </motion.p>
              </>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
