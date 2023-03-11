import React from "react";

import Team1 from "../assets/Team/Team1.jpg";
import Team2 from "../assets/Team/Team2.jpg";
import Team3 from "../assets/Team/Team3.jpg";

// import motion
import { motion } from "framer-motion";

// import variants
import { fadeIn } from "../variants";

const Team = () => {
  return (
    <motion.div
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="lg:h-[500px] h-full lg:mt-32 lg:mb-52 mb-[150px]"
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
                TEAM
              </motion.div>
              <motion.div
                variants={fadeIn("right")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="lg:px-[80px] font-oswald px-[100px] text-3xl lg:text-5xl font-medium mt-3"
              >
                Experts ready to serve.
              </motion.div>
            </div>
          </div>
          <div className="text-center px-8">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:mt-6 px-10 lg:px-6 md:px-52">
              <motion.div
                variants={fadeIn("up")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <img
                  className="lg:w-[368px] lg:h-[370px] w-[350px] h-[280px] object-cover"
                  src={Team1}
                  alt="tm1"
                />
                <motion.p
                  variants={fadeIn("right")}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="font-oswald text-4xl lg:ml-20 font-medium lg:mt-3 mt-5"
                >
                  Marry Hopkins
                </motion.p>
              </motion.div>
              <motion.div
                variants={fadeIn("up")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <img
                  className="lg:w-[368px] lg:h-[370px] w-[350px] h-[280px] object-cover mt-10 lg:mt-0"
                  src={Team2}
                  alt="tm2"
                />
                <motion.p
                  variants={fadeIn("right")}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="font-oswald text-4xl lg:ml-20 font-medium lg:mt-3 mt-5"
                >
                  Alfred Howard
                </motion.p>
              </motion.div>
              <motion.div
                variants={fadeIn("up")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <img
                  className="lg:w-[368px] lg:h-[370px] w-[350px] h-[280px] object-cover mt-10 lg:mt-0"
                  src={Team3}
                  alt="tm3"
                />
                <motion.p
                  variants={fadeIn("right")}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="font-oswald text-4xl lg:ml-20 font-medium lg:mt-3 mt-5"
                >
                  Thomas Fress
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
