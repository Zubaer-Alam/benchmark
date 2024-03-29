import React from "react";
import { BsArrowRight } from "react-icons/bs";
// images
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import List, { ListItem } from "../AboutPage/List";

const Services = () => {
  return (
    <div className="text-white lg:px-24 px-4 mt-52 lg:mt-48">
      {/* service section */}
      <div
        className="flex lg:flex-row flex-col lg:justify-between items-center"
        id="services"
      >
        {/* contents */}
        <div className="lg:w-1/2 z-50">
          <h4 className="text-black font-semibold md:text-2xl text-xl">
            What Can We Do
          </h4>
          <h2 className="md:text-5xl text-3xl text-dark font-bold mb-5 leading-snug">
            Services we can help you with
          </h2>
          <List className="space-y-2">
            <ListItem title="Discover">
              We ensure all aspects of the travel plan are thoroughly checked
              and confirmed.
            </ListItem>
            <ListItem title="Planning">
              We use the best resources and partnerships to ensure a seamless
              travel experience.
            </ListItem>
            <ListItem title="Support">
              Our dedicated travel consultants are always available to provide
              support and answer any questions.
            </ListItem>
          </List>
          <Link
            className="inline-flex items-center gap-2 font-semibold mt-10 hover:underline underline-offset-4 text-black hover:text-orange transition-all ease-in duration-300"
            to="/services"
          >
            <span>See All Services</span>
            <BsArrowRight />
          </Link>
        </div>

        {/* cards */}
        <motion.div
          className="lg:flex items-center justify-center  lg:pl-8"
          initial="initial"
          whileInView="animate"
        >
          <div className="flex flex-col md:flex-row lg:flex-col items-end px-3">
            <section className="px-4 pt-12 lg:px-0 lg:py-0">
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
                  className={`relative w-80 lg:h-48 shrink-0 overflow-hidden rounded-xl bg-[#9333ea] p-8`}
                >
                  <div className="relative z-10 text-white font-semibold">
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
                      className="my-2 lg:my-0 block origin-top-left font-mono text-5xl lg:text-3xl font-black leading-[1.2]"
                    >
                      Study
                      <br className="lg:hidden" /> {""}
                      Aboard
                    </motion.span>
                    <p className="lg:text-sm">
                      The trusted authority for student visas, offering access
                      to top-tier universities worldwide. Our streamlined
                      processes ensure swift visa acquisition.
                    </p>
                  </div>
                  <motion.svg
                    width="300px"
                    height="300px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute mt-24 lg:mt-0 ms-10 inset-0 z-0"
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
                    <motion.path
                      variants={{
                        hover: {
                          x: 5,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                        delay: 0.2,
                      }}
                      d="M15.62,2.83h.023c.206.113.416.218.626.323.011,1.142,0,2.285.005,3.428q0,5.56,0,11.12c0,1.486,0,2.972,0,4.457,0,.711,0,1.422,0,2.133-.213.053-.427.1-.639.151-.01-2.028,0-4.056-.006-6.084a38.321,38.321,0,0,1-4.88,4,40.761,40.761,0,0,1-6.042,3.459A28.663,28.663,0,0,1,2,26.92v-.032a29.479,29.479,0,0,0,2.72-2.552,35.528,35.528,0,0,0,3.954-5.108,59.927,59.927,0,0,0,3.148-5.6,49.117,49.117,0,0,0,2.858-6.987A26.7,26.7,0,0,0,15.62,2.83Z"
                      style={{ fill: "#f47835" }}
                    />
                    <motion.path
                      variants={{
                        hover: {
                          x: 5,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                        delay: 0.2,
                      }}
                      d="M16.274,17.7A31.642,31.642,0,0,0,23.046,7.435q.293.191.583.386a3.874,3.874,0,0,1,.008.4q0,4.584,0,9.168,0,4.361,0,8.723c-.193.063-.389.119-.585.172,0-2.8,0-5.6,0-8.4a19.537,19.537,0,0,1-2.588,2.048,27.688,27.688,0,0,1-4.188,2.23C16.274,20.672,16.271,19.186,16.274,17.7Z"
                      style={{ fill: "#5090cd" }}
                    />
                    <motion.path
                      variants={{
                        hover: {
                          x: 5,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                        delay: 0.2,
                      }}
                      d="M26.329,14.989a37.484,37.484,0,0,0,3.167-3.2c.165.088.338.16.5.248q0,8.465,0,16.93c-.172.055-.341.119-.514.173a44.222,44.222,0,0,0-4.8-1.345A42.238,42.238,0,0,0,8.552,27.4a34,34,0,0,0-6.381,1.7l.007-.032a33.507,33.507,0,0,1,12.571-3.389c.081-.008.163-.006.245-.012a35.1,35.1,0,0,1,3.7.018c.615.03,1.227.1,1.839.156a18.726,18.726,0,0,1,2.519.442c.2-.053.392-.109.585-.172q0-4.361,0-8.723C24.55,16.6,25.44,15.8,26.329,14.989Z"
                      style={{ fill: "#73c267" }}
                    />
                    <motion.path
                      variants={{
                        hover: {
                          x: 5,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                        delay: 0.2,
                      }}
                      d="M20.46,19.928a19.537,19.537,0,0,0,2.588-2.048c.006,2.8,0,5.6,0,8.4a18.726,18.726,0,0,0-2.519-.442.415.415,0,0,0-.193-.04c-.885-.1-1.776-.161-2.667-.187-.714-.006-1.429-.016-2.143.022a5.071,5.071,0,0,0-.535.032c-.082.006-.164,0-.245.012A33.507,33.507,0,0,0,2.178,29.068l-.007.032c-.064,0-.112.051-.171.07v0a9.855,9.855,0,0,1,.886-.612A26.865,26.865,0,0,1,8.9,25.837a33.472,33.472,0,0,1,5.632-1.257c.366-.054.736-.086,1.1-.138.212-.054.426-.1.639-.151,0-.711,0-1.422,0-2.133A27.688,27.688,0,0,0,20.46,19.928Z"
                      style={{ fill: "#00477f" }}
                    />
                    <motion.path
                      variants={{
                        hover: {
                          x: 5,
                        },
                      }}
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                        delay: 0.2,
                      }}
                      d="M10.747,22.358a38.321,38.321,0,0,0,4.88-4c.008,2.028,0,4.056.006,6.084-.365.052-.735.084-1.1.138A33.472,33.472,0,0,0,8.9,25.837a26.865,26.865,0,0,0-6.014,2.717A9.855,9.855,0,0,0,2,29.166V26.92a28.663,28.663,0,0,0,2.705-1.1A40.761,40.761,0,0,0,10.747,22.358Z"
                      style={{ fill: "#ea4833" }}
                    />
                  </motion.svg>
                </motion.div>
              </div>
            </section>

            <section className="px-4 py-12 lg:px-0 lg:py-0 lg:pt-4">
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
                  className={`relative w-80 lg:h-48 shrink-0 overflow-hidden rounded-xl bg-[#10b981] p-8`}
                >
                  <div className="relative z-10 text-white font-semibold">
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
                      className="my-2 lg:my-0 block origin-top-left font-mono text-6xl lg:text-3xl  font-black leading-[1.2]"
                    >
                      Work
                      <br className="lg:hidden" /> {""}
                      Abroad
                    </motion.span>
                    <p className="lg:text-sm">
                      Secure professional visas for workers to access top-tier
                      companies across the EU, facilitating lucrative employment
                      opportunities.
                    </p>
                  </div>

                  <motion.svg
                    height="300px"
                    width="300px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 274.602 274.602"
                    xml:space="preserve"
                    className="absolute inset-0 mt-20 lg:mt-0 z-0"
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
                    <motion.g
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
                    >
                      <path
                        style={{ fill: "#0f766e" }}
                        d="M270.192,33.912c-2.245-1.473-5.112-1.704-7.63-0.466L28.063,148.974
      c-2.942,1.434-4.646,4.61-4.261,7.901c0.427,3.291,2.867,5.926,6.119,6.624c27.847,5.848,71.065,15.143,85.706,18.705v75.753
      c0,3.252,2.014,6.197,5.112,7.282c0.853,0.31,1.743,0.466,2.633,0.466c2.245,0,4.454-0.968,5.926-2.789l48.486-58.326
      c13.091,5.151,51.546,19.946,84.426,32.61c0.929,0.349,1.86,0.505,2.789,0.505c1.551,0,3.059-0.466,4.376-1.316
      c2.092-1.434,3.33-3.796,3.369-6.353l1.857-189.186C274.646,37.825,272.864,35.189,270.192,33.912z"
                      />
                      <g id="XMLID_13_">
                        <g>
                          <path
                            style={{ fill: "#222051" }}
                            d="M98.037,144.162c11.814-10.185,59.756-56.273,103.753-98.95L31.27,129.214
          C72.787,138.005,90.293,142.032,98.037,144.162z M103.071,145.788c-0.736-0.388-1.512-0.697-2.245-0.814
          C101.794,145.286,102.53,145.557,103.071,145.788z M246.445,10.162c2.672,1.277,4.454,3.913,4.415,6.933L249,206.281
          c-0.039,2.554-1.277,4.92-3.369,6.35c-1.316,0.853-2.828,1.316-4.376,1.316c-0.929,0-1.86-0.156-2.789-0.505
          c-32.88-12.664-71.338-27.459-84.426-32.61l-48.489,58.332c-1.473,1.821-3.678,2.789-5.926,2.789
          c-0.89,0-1.782-0.156-2.633-0.466c-3.098-1.085-5.112-4.027-5.112-7.282v-75.753c-14.639-3.564-57.86-12.856-85.706-18.705
          c-3.252-0.697-5.692-3.33-6.119-6.624c-0.388-3.291,1.316-6.467,4.261-7.901L238.815,9.696
          C241.33,8.458,244.197,8.692,246.445,10.162z M233.625,194.975l1.473-149.414c-27.612,46.359-61.115,103.095-71.609,122.343
          C177.237,173.247,208.101,185.175,233.625,194.975z"
                          />
                          <path
                            style={{ fill: "#302C58" }}
                            d="M235.097,45.561l-1.473,149.414c-25.523-9.797-56.387-21.728-70.136-27.071
          C173.983,148.655,207.482,91.919,235.097,45.561z"
                          />
                          <path
                            style={{ fill: "#302C58" }}
                            d="M31.27,129.214l170.52-84.002c-43.997,42.677-91.942,88.766-103.753,98.95
          C90.293,142.032,72.787,138.005,31.27,129.214z"
                          />
                        </g>
                      </g>
                    </motion.g>
                  </motion.svg>
                </motion.div>
              </div>
            </section>
          </div>
          <div className="md:mt-7 lg:mt-0">
            <section className="">
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
                  className={`relative w-80 lg:h-[25rem] shrink-0 overflow-hidden rounded-xl bg-[#ef4444] p-8`}
                >
                  <div className="relative z-10 text-white font-semibold">
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
                      <br className="md:block hidden" />
                      Tourism
                    </motion.span>
                    <p>
                      Premier travel and tourism services you can rely on for
                      your next trip. Our esteemed offerings ensure unparalleled
                      quality and peace of mind throughout your journey.
                    </p>
                  </div>
                  <motion.svg
                    height="250px"
                    width="250px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    className="absolute mt-28 ms-20 inset-0 z-0 "
                    variants={{
                      hover: {
                        scale: 1.5,
                        // move the circle up
                        x: 100,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                    }}
                  >
                    <motion.circle
                      style={{ fill: " #3b82f6" }}
                      cx="256"
                      cy="256"
                      r="256"
                      transition={{
                        duration: 1,
                        ease: "backInOut",
                        delay: 0.2,
                      }}
                    />
                    <motion.path
                      style={{ fill: "#0ea5e9" }}
                      d="M256,0v512c141.385,0,256-114.615,256-256S397.385,0,256,0z"
                    />
                    <motion.path
                      style={{ fill: "#10b981" }}
                      d="M102.4,332.8c21.207,0,38.4,17.193,38.4,38.4V384c0,21.207,17.193,38.4,38.4,38.4
    s38.4-17.193,38.4-38.4v-89.6c0-21.207-17.193-38.4-38.4-38.4s-38.4-17.193-38.4-38.4v-12.8c0-35.346,28.654-64,64-64
    c21.207,0,38.4-17.193,38.4-38.4V51.2c0-21.207-17.193-38.4-38.4-38.4h-28.902C74.988,46.019,1.812,140.275,0.052,251.887
    C10.758,297.673,53.665,332.8,102.4,332.8z"
                    />
                    <g>
                      <motion.path
                        style={{ fill: "#10b981" }}
                        d="M332.8,115.2c0,42.415,34.385,76.8,76.8,76.8h51.2c14.641,0,28.323-4.096,39.965-11.204
      C477.75,105.798,421.216,45.475,348.635,17.289C338.702,30.23,332.8,46.427,332.8,64V115.2z"
                      />
                      <motion.path
                        style={{ fill: "#10b981" }}
                        d="M473.6,268.8h-128c-21.207,0-38.4,17.193-38.4,38.4s17.193,38.4,38.4,38.4S384,362.793,384,384v25.6
      c0,20.444,19.547,38.34,39.951,39.603c45.426-39.523,76.764-94.803,85.533-157.325C503.197,278.889,488.861,268.8,473.6,268.8z"
                      />
                    </g>
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
