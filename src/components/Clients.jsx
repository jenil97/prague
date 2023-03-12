import React from "react";

import Clients1 from "../assets/Clients/clients-1.png";
import Clients2 from "../assets/Clients/clients-2.png";
import Clients3 from "../assets/Clients/clients-3.png";
import Clients4 from "../assets/Clients/clients-4.png";

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
      className="bg-clients bg-no-repeat bg-cover lg:h-[500px] h-full lg:mt-[350px] lg:mb-52 mb-[150px]"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-[880px]">
            <div className="text-white text-[40px] lg:text-[20px] lg:pt-[300px] pt-[120px] lg:px-0 font-tertiary -tracking-[1.5px] capitalize mb-8 md:px-44">
              <motion.div
                variants={fadeIn("left")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="lg:px-[80px] px-[120px] text-xl lg:text-2xl font-oswald font-light"
              >
                AMBITIOUS &nbsp; &nbsp;CLIENTS
              </motion.div>
              <motion.div
                variants={fadeIn("right")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="lg:px-[80px] font-oswald px-[50px] text-2xl lg:text-5xl font-medium mt-3"
              >
                We have worked with great people.
              </motion.div>
            </div>
          </div>
          <div className="text-center px-8">
            <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 lg:mt-6 px-10 lg:px-6 md:px-52">
              <motion.div
                variants={fadeIn("down")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="bg-white lg:w-[270px] lg:h-[270px] w-[250px] h-[320px] pt-10 shadow-2xl"
              >
                <div className="ml-20 lg:mt-10 mt-16">
                  <img src={Clients1} alt="clt1" />
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("down")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="bg-white lg:w-[270px] lg:h-[270px] w-[250px] h-[320px] lg:pt-10 mt-10 lg:mt-0 lg:px-7 lg:ml-3 pt-5 shadow-2xl"
              >
                <div className="lg:ml-11 lg:mt-10 mt-20 ml-14">
                  <img src={Clients2} alt="clt2" />
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("down")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="bg-white lg:w-[270px] lg:h-[270px] w-[250px] h-[320px] lg:pt-10 mt-10 lg:mt-0 pt-5 lg:ml-5 shadow-2xl"
              >
                <div className="lg:ml-16 lg:mt-20 mt-28 ml-14">
                  <img src={Clients3} alt="clt3" />
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("down")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="bg-white lg:w-[270px] lg:h-[270px] w-[250px] h-[320px] lg:pt-10 mt-10 lg:mt-0 pt-5 lg:ml-7 shadow-2xl"
              >
                <div className="lg:ml-20 lg:mt-10 mt-24 ml-20">
                  <img src={Clients4} alt="clt4" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
