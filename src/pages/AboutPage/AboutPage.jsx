import React from "react";
import PageIntro from "./PageIntro";
import Discover from "./Discover";
import Build from "./Build";
import Deliver from "./Deliver";

const AboutPage = () => {
  return (
    <div className="mb-20">
      <PageIntro
        eyebrow="About Us"
        title="How we work"
        className="flex justify-center"
      >
        <div className="lg:flex lg:justify-between items-start gap-9 border-2 border-gray-300 py-4 px-8 rounded-xl lg:w-6/7">
          <img
            src="../../../src/assets/Comma-clip.png"
            className="absolute top-[15.3rem] left-[73rem] -scale-x-105 z-50 bg-white scale-105 opacity-90"
            alt="comma"
          />
          <p className=" md:text-base text-sm lg:text-lg tracking-wider pb-4 pt-7">
            We start with a free initial consultation to understand your needs.
            Our comprehensive support covers the entire process from admission
            to post-arrival assistance. We develop strategic plans to save you
            time and money, assist with university applications and visa
            services, provide necessary pre-arrival training, and offer
            post-arrival support including housing and employment, ensuring a
            smooth and successful journey.
          </p>
          {/* <img
            src="../../../src/assets/travel-agent.png"
            alt="ticket"
            width={200}
            height={200}
            className=""
          /> */}
          {/* <p className="w-2/5">
        We believe in efficiency and maximizing our resources to provide
        </p> */}
        </div>
      </PageIntro>
      <div className="pt-16 space-y-24 [counter-reset:section]  sm:space-y-32  lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* <LampDemo/> */}
    </div>
  );
};

export default AboutPage;
