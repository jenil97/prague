import React from "react";

import Project1 from "../assets/Projects/Project1.jpg";
import Project2 from "../assets/Projects/Project2.jpg";
import Project3 from "../assets/Projects/Project3.jpg";
import Project4 from "../assets/Projects/Project4.jpg";
import Project5 from "../assets/Projects/Project5.jpg";
import Project6 from "../assets/Projects/Project6.jpg";
import Project7 from "../assets/Projects/Project7.jpg";
import Project8 from "../assets/Projects/Project8.jpg";
import Project9 from "../assets/Projects/Project9.jpg";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";

const Projects = () => {
  return (
    <div className="bg-white container lg:text-start mx-auto md:px-28 text-center">
      <motion.div
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="font-oswald md:text-lg text-xl uppercase font-light"
      >
        Last Projects
      </motion.div>
      <motion.div
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="font-oswald text-[42px] font-medium mt-2"
      >
        Make it with passion.
      </motion.div>

      <motion.div
        variants={fadeIn("down")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="lg:py-10 lg:px-0 px-20 py-8 flex lg:flex-row flex-col gap-y-8 lg:gap-x-6"
      >
        <div>
          <img
            className="w-[450px] h-[240px] lg:w-[480px] lg:h-[220px] object-cover"
            src={Project1}
            alt="prj1"
          />
          <div className="text-center py-4">
            <div className="font-semibold text-xl">Poolscape Villa</div>
            <div className="text-sm">Aqaba, Jordan</div>
          </div>
        </div>
        <div>
          <img
            className="w-[450px] h-[240px] lg:w-[480px] lg:h-[220px] object-cover"
            src={Project2}
            alt="prj2"
          />
          <div className="text-center py-4">
            <div className="font-semibold text-xl">European Lard Station</div>
            <div className="text-sm">Strasbourg, France</div>
          </div>
        </div>
        <div>
          <img
            className="w-[450px] h-[240px] lg:w-[480px] lg:h-[220px] object-cover"
            src={Project3}
            alt="prj3"
          />
          <div className="text-center py-4">
            <div className="font-semibold text-xl">Yabroudi Villa</div>
            <div className="text-sm">Dubai, United Arab Emirates</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("down")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="lg:py-3 lg:px-0 px-20 py-4 flex lg:flex-row flex-col gap-y-8 lg:gap-x-6"
      >
        <div>
          <img
            className="w-[450px] h-[240px] lg:w-[480px] lg:h-[220px] object-cover"
            src={Project4}
            alt="prj1"
          />
          <div className="text-center py-4">
            <div className="font-semibold text-xl">Cultural Complex Centre</div>
            <div className="text-sm">Muscat, Sultanate of Oman</div>
          </div>
        </div>
        <div>
          <img
            className="w-[450px] h-[240px] lg:w-[480px] lg:h-[220px] object-cover"
            src={Project5}
            alt="prj2"
          />
          <div className="text-center py-4">
            <div className="font-semibold text-xl">Dalbourne Villa</div>
            <div className="text-sm">Guangzhou, China</div>
          </div>
        </div>
        <div>
          <img
            className="w-[450px] h-[240px] lg:w-[480px] lg:h-[220px] object-cover"
            src={Project6}
            alt="prj3"
          />
          <div className="text-center py-4">
            <div className="font-semibold text-xl">Amman Rotana Hotel</div>
            <div className="text-sm">Amman, Jordan</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("down")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="lg:py-8 lg:px-0 px-20 py-6 flex lg:flex-row flex-col gap-y-8 lg:gap-x-6"
      >
        <div>
          <img
            className="w-[450px] h-[240px] lg:w-[480px] lg:h-[220px] object-cover"
            src={Project7}
            alt="prj7"
          />
          <div className="text-center py-4">
            <div className="font-semibold text-xl">Alvar Alto Museum</div>
            <div className="text-sm">Casablanca, Morocco</div>
          </div>
        </div>
        <div>
          <img
            className="w-[450px] h-[240px] lg:w-[480px] lg:h-[220px] object-cover"
            src={Project8}
            alt="prj8"
          />
          <div className="text-center py-4">
            <div className="font-semibold text-xl">Dance & Music Theatre</div>
            <div className="text-sm">Perth, Australia</div>
          </div>
        </div>
        <div>
          <img
            className="w-[450px] h-[240px] lg:w-[480px] lg:h-[220px] object-cover"
            src={Project9}
            alt="prj9"
          />
          <div className="text-center py-4">
            <div className="font-semibold text-xl">French Embassy</div>
            <div className="text-sm">Casablanca, Morocco</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("down")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center pb-5"
      >
        <button className="text-sm font-oswald border border-black uppercase px-10 py-2 bg-white text-black hover:bg-black hover:text-white">
          Load More
        </button>
      </motion.div>
    </div>
  );
};

export default Projects;
