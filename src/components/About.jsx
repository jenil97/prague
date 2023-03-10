import React from "react";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section className="py-16 xl:pb-[160px] bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* numbers */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col lg:flex-row flex-1"
          >
            <div className="lg:ml-32">
              <div className="lg:py-16 py-4">
                <div className="text-[70px] xl:text-[80px] font-oswald bg-about bg-no-repeat bg-left bg-clip-text text-transparent">
                  157
                </div>
                <p className="text-lg font-oswald">PROJECTS DONE</p>
              </div>

              <div className="lg:-mt-5">
                <div className="text-[70px] xl:text-[80px] font-oswald bg-about bg-no-repeat bg-left bg-clip-text text-transparent">
                  924
                </div>
                <p className="-ml-2 text-lg font-oswald">WORKING HOURS</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col lg:flex-row flex-1"
          >
            <div>
              <div className="lg:py-16 py-5">
                <div className="text-[70px] xl:text-[80px] font-oswald bg-about bg-no-repeat bg-left bg-clip-text text-transparent">
                  86
                </div>
                <p className="-ml-2 text-lg font-oswald">HAPPY CLIENTS</p>
              </div>
              <div className="lg:-mt-5">
                <div className="text-[70px] xl:text-[80px] font-oswald bg-about bg-no-repeat bg-left bg-clip-text text-transparent">
                  13
                </div>
                <p className="lg:ml-2 text-lg font-oswald">AWARDS</p>
              </div>
            </div>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 h-full xl:mt-6 mt-6 xl:-ml-48"
          >
            <h2 className="font-bold lg:text-4xl text-2xl text-center lg:text-start">
              Make with love <br /> all what we do.
            </h2>
            <div className="flex flex-col items-start text-center lg:text-start">
              <div className="max-w-[530px] mt-4 text-base text-gray-500">
                <p className="mb-12">
                  Our team takes over everything, from an idea and concept{" "}
                  development to realization. We believe in traditions and{" "}
                  incorporate within our innovations. All our projects{" "}
                  incorporate a unique artistic image and functional solutions.
                </p>
                <p className="text-base text-gray-500">
                  Client is the soul of the project. Our main goal is to
                  illustrate his/hers values and individuality.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
