
import { useEffect } from "react";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Contact() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125%  125% at 50%  0% , #000000 50% , ${color})`;

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
    // console.log("coltese na");
  }, [color]);

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid place-items-center min-h-screen overflow-hidden bg-black px-4 py-24 text-zinc-200"
    >
      <div className="md:w-[450px] w-[95%]">
        <h1 className="text-center my-10 text-[45px] font-semibold">
          Get In Touch
        </h1>
        <div className="w-full p-2">
          <div className="w-full p-2 rounded">
            <motion.label style={{ color }} htmlFor="email" className="mb-4">
              Email
            </motion.label>{" "}
            <br></br>
            <input
              id="email"
              className="bg-transparent w-full border px-4 py-2  border-zinc-800 rounded mb-5"
              placeholder="example@gmail.com"
            />{" "}
            <br></br>
            <motion.label style={{ color }} htmlFor="Message" className="mb-4">
              Message
            </motion.label>{" "}
            <br></br>
            <input
              id="Message"
              className="bg-transparent w-full px-4 py-2 border border-zinc-800 rounded"
              placeholder="Enter message"
            />{" "}
            <br></br>
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              className="group mt-5 relative w-full items-center rounded-3xl bg-gray-950/10 hover:bg-gray-950/40 px-4 py- transition-colors"
            >
              SUBMIT
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
