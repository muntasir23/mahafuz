"use client";
import { motion } from "framer-motion";

export default function ShinnyButton({ text }) {
  return (
    <motion.button
      className="px-6 py-2 rounded-md relative radial-gradient"
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.6,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
    >
      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
        {text}
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
}