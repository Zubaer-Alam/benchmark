import React from "react";
import { BsArrowRight } from "react-icons/bs";
// images
import service1 from "../../assets/service_1.jpeg";
import service2 from "../../assets/service_2.jpeg";
import service3 from "../../assets/service_3.jpeg";
import service4 from "../../assets/service_4.jpeg";
import SquishyCard from "../../components/SquishyCard";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="text-white lg:px-24 px-4">
      <div className="h-36"></div>

      {/* service section */}
      <div className="lg:flex lg:justify-between items-center" id="services">
        {/* contents */}
        <div className="lg:w-1/3 space-y-5">
          <h4 className="text-gray-200 font-semibold text-2xl">
            What Can We Do
          </h4>
          <h2 className="text-5xl font-bold mb-5 leading-snug">
            Services we can help you with
          </h2>
          <a
            className="inline-flex items-center gap-2 font-semibold mt-5 hover:underline underline-offset-4 hover:text-orange transition-all ease-in duration-300"
            href="/"
          >
            <span>See All Services</span>
            <BsArrowRight />
          </a>
        </div>

        {/* cards */}
        <motion.div
          className="flex items-center justify-center -mx-4 lg:pl-8"
          initial="initial"
          whileInView="animate"
        >
          <div className="flex flex-col items-end px-3">
            <SquishyCard />
            <SquishyCard />
          </div>
          <div className="px-3">
            <SquishyCard />
          </div>
        </motion.div>
      </div>

      <div className="h-36"></div>
    </div>
  );
};

export default Services;
