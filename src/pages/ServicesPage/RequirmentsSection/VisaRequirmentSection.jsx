import React from "react";
import SectionIntro from "../../AboutPage/SectionIntro";
import Requirments from "./Requirments";

const VisaRequirmentSection = () => {
  return (
    <div className="py-10 container mx-auto ">
      <SectionIntro
        eyebrow="Visa Requirments"
        title="I know Nothing"
      ></SectionIntro>
      <div className="my-4 px-6 grid grid-cols-3 gap-4">
        <Requirments/>
        <Requirments/>
        <Requirments/>
        <Requirments/>
        <Requirments/>
        <Requirments/>
      </div>
    </div>
  );
};

export default VisaRequirmentSection;
