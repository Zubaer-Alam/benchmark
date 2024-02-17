import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const projects = [
  {
    title: "Immigration Services",
    description:
      " Benchmark Career Development Centre & Education Consultancy",
    link: "https://algochurn.com",
  },
  {
    title: "Consultation",
    description:
      "Consultation Service offers you the opportunity to visit Immigration Consultants having a profound knowledge of the Visa Application Processes..",
    link: "https://algochurn.com",
  },
  {
    title: "Eligibility Assessment",
    description:
      "Our Online Assessment will help you find out if you are eligible to apply for a Visitor Visa. Register below to take the Assessment and view your results.",
    link: "https://algochurn.com",
  },
  {
    title: "Application Processing",
    description:
      "Assess your Canadian immigration eligibility for free Determine your immigration category based on your credentials for free.",
    link: "https://algochurn.com",
  },
  {
    title: "Client Assistance",
    description:
      "Client Assistance Program provides a direct one-on-one comprehensive information and referral assistance on basic needs and safety net services.",
    link: "https://algochurn.com",
  },
  {
    title: "Pre-Landing Services",
    description:
      "Assist client in assessment/ evaluation of their qualification from the professional bodies and/or educational institutions in the country of immigration.",
    link: "https://algochurn.com",
  },
];

export const HoverEffect = () => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
        {projects.map((project, idx) => (
          <div
            key={project?.link}
            className="relative group  block p-2 h-full w-full "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-700/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground" // required for the background to follow
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-800/[0.2] border border-transparent group-hover:border-neutral-700 relative z-50">
              <div className="relative z-50">
                <div className="p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="#9333ea"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
                    {project.title}
                  </h4>
                  <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

