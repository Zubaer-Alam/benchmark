/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Contact = () => {

  const people = [
    {
      id: 1,
      name: "Lithuania",
      // designation: "next Destination",
      image:
        "./content/flags/lithuania.png",
    },
    {
      id: 2,
      name: "Romania",
      // designation: "Product Manager",
      image:
      "./content/flags/romania.png",
    },
    {
      id: 3,
      name: "Hungary",
      // designation: "Data Scientist",
      image:
      "./content/flags/hungary.png",
    },
    {
      id: 4,
      name: "Italy",
      // designation: "UX Designer",
      image:
      "./content/flags/italy.png",
    },
    {
      id: 5,
      name: "Bulgaria",
      // designation: "Soap Developer",
      image:
      "./content/flags/bulgaria.png",
    },
    {
      id: 6,
      name: "Czech Republic",
      // designation: "The Explorer",
      image:
      "./content/flags/czech.png",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };


  return (
    <div className="lg:px-24 px-4" id="contact">
      <div className="relative bg-[url(/src/assets/cta_bg.jpeg)] bg-no-repeat bg-cover h-96 rounded-xl">
        {/* shape moving */}
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>

        {/* cta text */}
        <div className="h-full  flex items-center justify-center">
          <div className="lg:w-1/2 mx-auto text-center px-4">
            <h2 className="lg:text-5xl text-3xl text-white font-bold lg:leading-snug leading-normal mb-6">
              Let's make  <br /> something{" "}
              <span className="italic">cool </span>  {"  "}together
            </h2>

            {/* here */}
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              {people.map((item, idx) => (
                <div
                  className="-mr-4  relative group"
                  key={item.name}
                  onMouseEnter={() => setHoveredIndex(item.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <AnimatePresence mode="wait">
                    {hoveredIndex === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.6 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 10,
                          },
                        }}
                        exit={{ opacity: 0, y: 20, scale: 0.6 }}
                        style={{
                          translateX: translateX,
                          rotate: rotate,
                          whiteSpace: "nowrap",
                        }}
                        className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                      >
                        <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                        <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                        <div className="font-bold text-white relative z-30 text-base">
                          {item.name}
                        </div>
                        <div className="text-white text-xs">{item.designation}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <img
                    onMouseMove={handleMouseMove}
                    height={100}
                    width={100}
                    src={item.image}
                    alt={item.name}
                    className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
                  />
                </div>
              ))}

            </div>

            <a
              className="inline-flex items-center gap-2 font-semibold text-white hover:text-orange"
              href="/contact"
            >
              <span>Apply For Meeting</span>
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
