
import React from "react";

import { motion } from "framer-motion";
import { MdCastForEducation } from "react-icons/md";

export default function Education() {
  return (
    <div className="w-[100%] flex items-center justify-center mt-[70px]">
      <div className="w-[1000px] sm:w-[80%] rounded-lg flex md:pl-10 space-x-3 md:space-x-10 p-3">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
            className="relative"
          >
            <p className="text-[#7ee787] text-[25px]">
              <MdCastForEducation />
            </p>
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#7ee787]"
          ></motion.div>
        </div>
        <div className="md:w-10/12 mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Education and Qualification
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[20px] md:text-[20px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-[#7ee787]">Chittagong College</span>
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            style={{ transitionDelay: "300ms" }}
            className="text-neutral-200 text-[25px] flex items-center justify-between"
          >
            Department of Mathmatics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            style={{ transitionDelay: "300ms" }}
            className="text-gray-500"
          >
            Session: 2019-20
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            style={{ transitionDelay: "300ms" }}
            className="text-gray-500"
          >
            CGPA: 3.45
          </motion.p>
          {/* college */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[20px] mt-[60px] md:text-[20px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-[#7ee787]">Chittagong Govt.High School</span>
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            style={{ transitionDelay: "300ms" }}
            className="text-neutral-200 text-[25px] flex items-center justify-between"
          >
            SSC
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            style={{ transitionDelay: "300ms" }}
            className="text-gray-500"
          >
            Session: 2015-16
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            style={{ transitionDelay: "300ms" }}
            className="text-gray-500"
          >
            GPA: 5.00
          </motion.p>

          {/* School */}
        </div>
      </div>
    </div>
  );
}
