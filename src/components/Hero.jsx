import React from "react";

// import data
import { heroData } from "../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = () => {
  const { subtitle, btnText } = heroData;
  return (
    <section className="bg-hero bg-cover bg-center min-h-[40vh] lg:h-[520px] h-[1000px] bg-no-repeat relative mt-[120px] opacity-[0.88]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className="container mx-auto min-h-[40vh] h-full flex items-center justify-center -mt-28 lg:mt-14"
      >
        {/* text & btn */}
        <div className="text-center lg:text-left font-oswald lg:max-w-[640px]">
          {/* text */}
          <motion.p
            className="text-white lg:text-[20px] text-xl text-center cursor-default"
            variants={fadeIn("down")}
          >
            WE DO{" "}
            <span className="text-black hover:underline">
              INTERIOR & EXTERIOR OF
            </span>
          </motion.p>
          <motion.p
            variants={fadeIn("down")}
            className="text-white lg:text-[52px] text-4xl font-medium mb-8 lg:mb-16 max-w-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
          {/* btn */}
          <motion.div
            className="text-center lg:-mt-10"
            variants={fadeIn("down")}
          >
            <button className="btn btn-sm lg:btn-lg btn-outline lg:px-14 lg:py-3 px-4 py-2 hover:bg-white hover:text-black uppercase bg-transparent border text-white">
              {btnText}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
