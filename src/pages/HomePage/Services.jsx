import React from "react";
import { BsArrowRight } from "react-icons/bs";
// images
import service1 from "../../assets/service_1.jpeg";
import service2 from "../../assets/service_2.jpeg";
import service3 from "../../assets/service_3.jpeg";
import service4 from "../../assets/service_4.jpeg";
import SquishyCard from "../../components/SquishyCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="text-white lg:px-24 px-4">
      <div className="h-36"></div>

      {/* service section */}
      <div className="flex lg:flex-row flex-col lg:justify-between items-center" id="services">
        {/* contents */}
        <div className="lg:w-1/3 space-y-5">
          <h4 className="text-gray-200 font-semibold text-2xl">
            What Can We Do
          </h4>
          <h2 className="text-5xl font-bold mb-5 leading-snug">
            Services we can help you with
          </h2>
          <Link
            className="inline-flex items-center gap-2 font-semibold mt-5 hover:underline underline-offset-4 hover:text-orange transition-all ease-in duration-300"
            to="/services"
          >
            <span>See All Services</span>
            <BsArrowRight />
          </Link>
        </div>

        {/* cards */}
        <motion.div
          className="lg:flex items-center justify-center -mx-4 lg:pl-8"
          initial="initial"
          whileInView="animate"
        >
          <div className="flex flex-col items-end px-3">
            <section className="bg-neutral-900 px-4 py-12">
              <div className="mx-auto w-fit">
                <motion.div
                  whileHover="hover"
                  transition={{
                    duration: 1,
                    ease: "backInOut",
                  }}
                  variants={{
                    hover: {
                      scale: 1.05,
                    },
                  }}
                  className={`relative w-80 shrink-0 overflow-hidden rounded-xl bg-[#9333ea] p-8`}
                >
                  <div className="relative z-10 text-white">
                    <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
                      Service
                    </span>
                    <motion.span
                      initial={{ scale: 0.85 }}
                      variants={{
                        hover: {
                          scale: 1,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                      }}
                      className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
                    >
                      Study
                      <br />
                      Aboard
                    </motion.span>
                    <p>
                    The trustworthy Provider of Student Visa
                    </p>
                  </div>
                  <motion.svg
                    width="320"
                    height="384"
                    viewBox="0 0 320 384"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    variants={{
                      hover: {
                        scale: 1.5,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                    }}
                  >
                    <motion.circle
                      variants={{
                        hover: {
                          scaleY: 0.5,
                          y: -25,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                        delay: 0.2,
                      }}
                      cx="160.5"
                      cy="114.5"
                      r="101.5"
                      fill="#262626"
                    />
                   
                  </motion.svg>
                </motion.div>
              </div>
            </section>

            <section className="bg-neutral-900 px-4 py-12">
              <div className="mx-auto w-fit">
                <motion.div
                  whileHover="hover"
                  transition={{
                    duration: 1,
                    ease: "backInOut",
                  }}
                  variants={{
                    hover: {
                      scale: 1.05,
                    },
                  }}
                  className={`relative w-80 shrink-0 overflow-hidden rounded-xl bg-[#10b981] p-8`}
                >
                  <div className="relative z-10 text-white">
                    <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
                      Service
                    </span>
                    <motion.span
                      initial={{ scale: 0.85 }}
                      variants={{
                        hover: {
                          scale: 1,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                      }}
                      className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
                    >
                        Live
                      <br />
                      Abroad
                    </motion.span>
                    <p>
                    Professionals visa to the Best Universities and Colleges of Malaysia, Singapore, UK, NZ, USA, Germany etc.
                    </p>
                  </div>
                  <motion.svg
                    width="320"
                    height="384"
                    viewBox="0 0 320 384"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    variants={{
                      hover: {
                        scale: 1.5,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                    }}
                  >
                    <motion.circle
                      variants={{
                        hover: {
                          scaleY: 0.5,
                          y: -25,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                        delay: 0.2,
                      }}
                      cx="160.5"
                      cy="114.5"
                      r="101.5"
                      fill="#262626"
                    />
                    <motion.ellipse
                      variants={{
                        hover: {
                          scaleY: 2.25,
                          y: -25,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                        delay: 0.2,
                      }}
                      cx="160.5"
                      cy="265.5"
                      rx="101.5"
                      ry="43.5"
                      fill="#262626"
                    />
                  </motion.svg>
                </motion.div>
              </div>
            </section>

          </div>
          <div className="px-3">
            <section className="bg-neutral-900 px-4 py-12">
              <div className="mx-auto w-fit">
                <motion.div
                  whileHover="hover"
                  transition={{
                    duration: 1,
                    ease: "backInOut",
                  }}
                  variants={{
                    hover: {
                      scale: 1.05,
                    },
                  }}
                  className={`relative w-80 shrink-0 overflow-hidden rounded-xl bg-[#ef4444] p-8`}
                >
                  <div className="relative z-10 text-white">
                    <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
                      Service
                    </span>
                    <motion.span
                      initial={{ scale: 0.85 }}
                      variants={{
                        hover: {
                          scale: 1,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                      }}
                      className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
                    >
                      Trave &
                      <br />
                      Tourism
                    </motion.span>
                    <p>
                    The Best Travel and Tourism Services
                    </p>
                  </div>
                  <motion.svg
                    width="320"
                    height="384"
                    viewBox="0 0 320 384"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    variants={{
                      hover: {
                        scale: 1.5,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                    }}
                  >
                 
                    <motion.ellipse
                      variants={{
                        hover: {
                          scaleY: 2.25,
                          y: -25,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                        delay: 0.2,
                      }}
                      cx="160.5"
                      cy="265.5"
                      rx="101.5"
                      ry="43.5"
                      fill="#262626"
                    />
                  </motion.svg>
                </motion.div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>

      <div className="h-36"></div>
    </div>
  );
};

export default Services;
