import React from "react";

// import testimonial data
import { testimonialData } from "../data";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import motion
import { motion } from "framer-motion";

// import variants
import { fadeIn } from "../variants";

const Testimonial = () => {
  return (
    <motion.div
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="lg:h-[300px] h-full lg:mb-52 mb-[150px]"
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
                className="lg:px-[80px] px-[130px] text-2xl lg:text-xl font-oswald font-light"
              >
                TESTIMONIALS
              </motion.div>
              <motion.div
                variants={fadeIn("right")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="lg:px-[80px] font-oswald px-[120px] text-3xl lg:text-4xl font-medium mt-5"
              >
                They love us.
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="px-10 lg:px-6 md:px-52">
              <motion.div
                variants={fadeIn("down")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="bg-white lg:w-[900px] lg:h-[250px] w-[360px] h-[300px] pt-10 shadow-2xl"
              >
                <Swiper>
                  {testimonialData.map((slide, index) => {
                    // destructure slide
                    const { quoteImg, message, name } = slide;
                    return (
                      <SwiperSlide key={index}>
                        <div className="flex flex-col lg:flex-row">
                          <div>
                            <img
                              className="w-[30px] h-[30px] lg:ml-3"
                              src={quoteImg}
                              alt="quote"
                            />
                          </div>
                          <div className="flex-1 lg:mt-10">
                            <div className="font-oswald text-gray-500 py-3 px-7 font-light text-lg lg:text-[20px] leading-normal mb-6 lg:mb-6">
                              {message}
                            </div>
                            <div className="flex items-center text-xl justify-center lg:text-xl">
                              <div className="font-oswald font-medium">
                                {name}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
