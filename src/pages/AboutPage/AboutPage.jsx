import React from "react";
import PageIntro from "./PageIntro";
import Discover from "./Discover";
import Build from "./Build";
import Deliver from "./Deliver";

const AboutPage = () => {
  return (
    <div className="mb-20">
      <PageIntro className="" eyebrow="About Us" title="How we work">
        <div className="flex ">
          <p className="lg:w-3/5 md:text-base text-[15px]">
            We believe in efficiency and maximizing our resources to provide the
            best value to our clients. We believe in efficiency and maximizing
            our resources to provide the best value to our clients.
          </p>
          {/* <p className="w-2/5">
        We believe in efficiency and maximizing our resources to provide
        </p> */}
        </div>
      </PageIntro>
      <div className="pt-24 space-y-24 [counter-reset:section]  sm:space-y-32  lg:space-y-40">
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
