/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import { BsArrowRight } from 'react-icons/bs'
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { PullUpText } from "../../components/Title";
import FadeUpStagger from "../../components/FadedUpText";
const Hero = () => {

  const [isSticky, setIsSticky] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsSticky(true);
      }
      else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (

    <motion.div
      className=""
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >

      <div className="bg-[url('../public/images/background.jpg')]  w-full h-screen  relative  overflow-hidden block z-10  bg-cover bg-no-repeat bg-top  before:content-['']   before:absolute    before:inset-0  before:block before:bg-gradient-to-t before:from-black  before:to-transparent   before:opacity-100  before:z-[-5] ms:mb-10 md:mb-36 lg:mb-36" id="home">
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>

        {/* banner content */}
        <div className="px-4 lg:px-24 absolute bottom-[30vh] ">
          <h1 className="md:w-2/3 lg:text-8xl sm:text-6xl text-5xl mb-5 text-white font-bold lg:leading-snug sm:leading-snug leading-snug  stroke-black stroke-2">
            <PullUpText words="Loyalty is our commitment"/> 
          </h1>

          {/* banner btn */}
          <div className="text-white text-lg flex flex-col-reverse md:flex-row md:items-center items-start justify-between gap-8">
            <div className="mx-4 lg:mx-0">
              <a className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300" href="/contact">
                <span className="font-bold">Get a Quote</span>
                <BsArrowRight />
              </a>
            </div>
            <div className="md:w-1/2  p-4 rounded-md font-bold stroke-black stroke-2 drop-shadow-lg">
              <FadeUpStagger title="The trustworthy provider of professional visa and student visa to the Best Universities, Factories and Companies of Romania, Lithuania, Serbia, Italy, Bulgaria, Poland, Croatia, Czech Republic etc." />
            </div>
          </div>
        </div>

        {/* scroll arrow to service section */}
         <Link to="services" spy={true} smooth={true} className={`cs-down_btn md:mt-20 mt-20 ${!isSticky ? "flex transition-all duration-300" : "hidden transition-all duration-300"}`}>.</Link>
   
      </div>

    </motion.div>

  );
};

export default Hero;
