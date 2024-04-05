/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

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



  return (
    <div className="lg:px-24 px-4" id="contact">
      <div className="relative bg-[url(/src/assets/cta_bg.jpeg)] bg-no-repeat bg-cover h-96 rounded-xl">
        {/* shape moving */}
        {/* <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div> */}

        {/* cta text */}
        <div className="h-full  flex items-center justify-center">
          <div className="lg:w-1/2 mx-auto text-center px-4">
            <h2 className="lg:text-4xl text-2xl text-white font-bold lg:leading-snug leading-normal mb-6">
            Providing online education & career consultancy
            </h2>

            {/* here */}
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              {people.map((item, idx) => (
                <div
                  className="-mr-4  relative group"
                  key={item.name}
                >
                  <img
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
