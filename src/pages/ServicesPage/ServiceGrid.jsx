import React from "react";
import { FaUniversity, FaGlobeAmericas } from "react-icons/fa";
import {
  MdTravelExplore,
  MdOutlineCardTravel,
  MdOutlineAssessment,
  MdAssistantNavigation,
  MdDesignServices,
} from "react-icons/md";

const gridItems = [
  {
    title: "Visa Application Guidance",
    description:
      "Our experienced consultants provide expert guidance to navigate the complex visa application process and maximize your chances of success.",
    link: "https://algochurn.com",
    icon: (
      <span className="p-5 rounded-full bg-green-300 text-white shadow-lg shadow-teal-200 z-10">
        <FaGlobeAmericas size={36} className="text-blue-600" />
      </span>
    ),
  },
  {
    title: "Document Preparation",
    description:
      "We assist in collecting and preparing all necessary documents, forms and supporting materials required for your European work visa application.",
    link: "https://algochurn.com",
    icon: (
      <span className="p-5 rounded-full bg-yellow-300 text-white shadow-lg shadow-yellow-200 z-10">
        <FaUniversity size={36} className="text-green-600" />
      </span>
    ),
  },
  {
    title: "Interview Coaching",
    description:
      "Receive one-on-one coaching to confidently answer visa interview questions and present a compelling case to immigration officials.",
    link: "https://algochurn.com",
    icon: (
      <span className="p-5 rounded-full bg-emerald-300 text-white shadow-lg shadow-emerald-200 z-10">
        <MdDesignServices size={36} className="text-amber-600" />
      </span>
    ),
  },
  {
    title: "Travel & Relocation Support",
    description:
      "We handle all the logistics of your move, from booking flights to arranging housing, so you can focus on starting your new job abroad.",
    link: "https://algochurn.com",
    icon: (
      <span className="p-5 rounded-full bg-red-300 text-white shadow-lg shadow-red-200 z-10">
        <MdOutlineCardTravel size={36} className="text-red-600" />
      </span>
    ),
  },
  {
    title: "Post-Arrival Assistance",
    description:
      "Our team helps you get settled in your new country, including registering with local authorities, setting up bank accounts and more.",
    link: "https://algochurn.com",
    icon: (
      <span className="p-5 rounded-full bg-blue-300 text-white shadow-lg shadow-blue-200 z-10">
        <MdAssistantNavigation size={36} className="text-blue-600" />
      </span>
    ),
  },
  {
    title: "Ongoing Check-Ins",
    description:
      "We maintain regular contact to ensure you're adjusting well to your new role and life in Europe, and are available anytime you need support.",
    link: "https://algochurn.com",
    icon: (
      <span className="p-5 rounded-full bg-amber-300 text-white shadow-lg shadow-amber-200 z-10">
        <MdTravelExplore size={36} className="text-amber-600" />
      </span>
    ),
  },
];
const ServiceGrid = () => {
  return (
    <div className="px-3 md:lg:xl:px-40 py-20 bg-opacity-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 group bg-zinc-50 shadow-xl shadow-neutral-100 border rounded-xl">
        {gridItems.map((item, idx) => (
          <div
            key={idx}
            className={`relative p-10 flex flex-col items-center text-center group ${
              idx === 0
                ? "border-b md:border-r md:border-b lg:border-r lg:border-b"
                : idx === 1
                ? "border-b md:border-b lg:border-r lg:border-b"
                : idx === 2
                ? "border-b md:border-b md:border-r lg:border-r-0 lg:border-b"
                : idx === 3
                ? "border-b lg:border-b-0 md:border-b lg:border-r "
                : idx === 4
                ? "border-b md:border-b-0 md:border-r lg:border-r"
                : ""
            } hover:bg-slate-50 cursor-pointer `}
          >
            {item.icon}
            <p className="text-xl font-medium text-black mt-3 z-10">
              {item.title}
            </p>
            <p className="mt-2 text-sm text-dark z-10">{item.description}</p>
          </div>
        ))}
      </div>
      {/* Rest of your component code... */}
    </div>
  );
};

export default ServiceGrid;
