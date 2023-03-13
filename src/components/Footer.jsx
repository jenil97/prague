import React from "react";

import logo from "../assets/Header/logo-white.png";
import Bg from "../assets/Footer/footer-bg.jpg";
import Socials from "./Socials";

// import motion
import { motion } from "framer-motion";

// import variants
import { fadeIn } from "../variants";

const Footer = () => {
  return (
    <div className="-mt-20">
      <div className="relative">
        <img
          className="lg:h-[600px] md:w-[780px] h-[565px] w-[420px] lg:w-full object-cover"
          src={Bg}
          alt="bg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="relative grid md:grid-cols-2 lg:px-24">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:-mt-[450px] -mt-[520px]"
          >
            <img className="ml-28 md:ml-8" src={logo} alt="LG" />
            <p className="text-white/70 lg:leading-8 leading-6 text-[10px] ml-5 lg:text-[13px] mt-8">
              The company principle of Architecture-Studio is the collective
              conception. From <br /> the very beginning, the practice has
              believed in the virtues of exchange, crossing <br /> ideas, common
              effort, shared knowledge and enthusiasm.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:-mt-[250px] -mt-[330px]"
          >
            <p className="text-white/70 lg:ml-[460px] md:-mt-[180px] ml-36 lg:text-lg">
              GET IN TOUCH
            </p>
            <p className="text-white/90 lg:ml-[460px] ml-32 mt-4 lg:mt-11 text-[14px]">
              +7 (885) 589 69 85
            </p>
            <p className="text-white lg:ml-[400px] ml-24 text-[14px] mt-2">
              prague-architects@info.com
            </p>
            <p className="text-white lg:ml-[220px] ml-4 text-[14px] mt-2">
              Litačka, Jungmannova 35/29, Nové Město,Czech Republic
            </p>
            <div className="lg:mt-24 md:mt-[185px] mt-36 lg:ml-[370px] text-white">
              <Socials />
            </div>
          </motion.div>
          <div className="lg:-mt-[220px] md:-mt-[250px] -mt-[170px]">
            <hr className="lg:w-[1155px] md:w-[780px] border-1 border-white/20 " />
            <motion.div
              variants={fadeIn("right")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="lg:flex justify-between text-white"
            >
              <p className="text-white text-sm font-oswald mt-12 ml-24 lg:ml-0">
                PRAGUE (C) 2023 ALL RIGHTS RESERVED
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
