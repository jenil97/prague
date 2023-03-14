import React from "react";

// import motion
import { motion } from "framer-motion";

// import variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div className="lg:flex md:flex md:px-24 px-4 md:py-32 py-6">
      <motion.div
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="text-center md:text-start font-oswald uppercase md:text-sm text-xl py-3 text-gray-600">
          contact
        </div>
        <div className="text-center md:text-start font-oswald font-medium md:text-5xl text-3xl mb-3">
          Let's start new project.
        </div>
        <div className="text-slate-500 md:text-lg text-xl px-9 md:px-0 font-light font-oswald mt-5">
          Now, as you were able to get a picture of who we are, it is up to you
          to contact us <br /> and lay the foundation for a new and successful
          business relationship. Our <br /> team consists
        </div>

        <div className="lg:grid lg:grid-cols-3 text-center md:text-start py-6">
          <div>
            <div className="font-oswald font-medium mt-4">Phone</div>
            <div className="lg:mt-3 mt-2 text-gray-600">
              +45 (0)4 79 25 37 98
            </div>
            <div className="lg:mt-1 mt-1 text-gray-600">
              +44 (0)4 79 25 37 30
            </div>
          </div>

          <div>
            <div className="font-oswald font-medium mt-6 lg:mt-3">EMAIL</div>
            <div className="lg:mt-3 mt-2 text-gray-600">prague@info.com</div>
            <div className="lg:mt-1 mt-1 text-gray-600">
              prague_ar@gmail.com
            </div>
          </div>

          <div>
            <div className="font-oswald font-medium mt-6 lg:mt-3">SKYPE</div>
            <div className="lg:mt-3 mt-2 text-gray-600">prague_support_1</div>
            <div className="lg:mt-1 mt-1 text-gray-600">prague_support_2</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <form>
          <div className="lg:ml-32 mt-5 md:mt-72 lg:mt-10">
            <div className="lg:grid lg:grid-cols-2 gap-4">
              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full bg-gray-100 rounded-t px-5 py-4 placeholder:text-sm focus:outline-none focus:border-b-2 focus:border-b-black"
                  placeholder="Name"
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="number"
                  className="w-full bg-gray-100 rounded-t px-5 py-4 placeholder:text-sm focus:outline-none focus:border-b-2 focus:border-b-black"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div className="relative mb-6">
              <input
                type="email"
                className="w-full bg-gray-100 rounded-t px-5 py-4 placeholder:text-sm focus:outline-none focus:border-b-2 focus:border-b-black"
                placeholder="Email"
              />
            </div>
            <div className="relative mb-6">
              <textarea
                rows="4"
                type="text"
                className="w-full bg-gray-100 rounded-t px-5 py-4 placeholder:text-sm focus:outline-none focus:border-b-2 focus:border-b-black"
                placeholder="Message"
              />
            </div>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={fadeIn("left")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center lg:-ml-24 md:-ml-24 md:mt-[690px] lg:mt-[350px]"
      >
        <button className="px-8 py-2 bg-black text-white rounded">Send</button>
      </motion.div>
    </div>
  );
};

export default Contact;
