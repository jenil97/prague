import React from "react";

import { CgCap } from "react-icons/cg";
import { AiOutlineBulb } from "react-icons/ai";
import { GiBookPile } from "react-icons/gi";

// import motion
import { motion } from "framer-motion";

// import variants
import { fadeIn } from "../variants";

const Services = () => {
  return (
    <motion.div
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="bg-services bg-no-repeat bg-cover lg:h-[500px] h-full lg:mt-32 lg:mb-52 mb-[150px]"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-[880px]">
            <div className="text-black text-[40px] lg:text-[20px] lg:pt-[300px] pt-[120px] lg:px-0 font-tertiary -tracking-[1.5px] capitalize mb-8 md:px-44">
              <motion.div
                variants={fadeIn("left")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="lg:px-[80px] px-[170px] text-2xl lg:text-2xl font-oswald"
              >
                Services
              </motion.div>
              <motion.div
                variants={fadeIn("right")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="lg:px-[80px] font-oswald px-[100px] text-3xl lg:text-5xl font-medium mt-3"
              >
                This is what we do.
              </motion.div>
            </div>
          </div>
          <div className="text-center px-8">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:mt-6 px-10 lg:px-6 md:px-52">
              <motion.div
                variants={fadeIn("down")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="bg-white lg:w-[370px] lg:h-[340px] w-[250px] h-[320px] pt-10 shadow-2xl"
              >
                <div className="lg:px-[170px] px-[105px]">
                  <CgCap size={40} />
                </div>
                <div className="mt-3 font-oswald text-3xl font-medium">
                  Planning
                </div>
                <p className="mt-4 text-base text-gray-500">
                  Our master plans provide <br /> a comprehensive look at where{" "}
                  <br /> an organization is today.
                </p>
                <button className="px-10 py-2 mt-6 uppercase font-oswald bg-white text-black hover:bg-black hover:text-white border border-black">
                  Read
                </button>
              </motion.div>
              <motion.div
                variants={fadeIn("down")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="bg-white lg:w-[370px] lg:h-[340px] w-[250px] h-[320px] lg:pt-10 mt-10 lg:mt-0 lg:px-7 lg:ml-3 pt-5 shadow-2xl"
              >
                <div className="lg:px-[140px] px-[105px]">
                  <AiOutlineBulb size={50} />
                </div>
                <div className="mt-3 font-oswald text-3xl font-medium ml-5">
                  Interior
                </div>
                <p className="mt-4 text-base text-gray-500">
                  You may engage your architect to <br /> provide an interior
                  design service, <br /> advising on loose furniture.
                </p>
                <button className="px-10 py-2 mt-6 uppercase font-oswald bg-white text-black hover:bg-black hover:text-white border border-black">
                  Read
                </button>
              </motion.div>
              <motion.div
                variants={fadeIn("down")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="bg-white lg:w-[370px] lg:h-[340px] w-[250px] h-[320px] lg:pt-10 mt-10 lg:mt-0 pt-5 lg:ml-5 shadow-2xl"
              >
                <div className="lg:px-[170px] px-[105px]">
                  <GiBookPile size={50} />
                </div>
                <div className="mt-3 font-oswald text-3xl font-medium ml-5">
                  Exterior
                </div>
                <p className="mt-4 text-base text-gray-500">
                  Working together with your architect, <br /> you will share
                  your project needs, <br /> dreams and goals.
                </p>
                <button className="px-10 py-2 mt-6 uppercase font-oswald bg-white text-black hover:bg-black hover:text-white border border-black">
                  Read
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
