import React from "react";

import RecruiterForm from "./RecruiterFOrm/RecruiterForm";

const RecruitPage = () => {
  return (
    <div className=" ">
      <div className="bg-[url('../public/images/applybg.jpg')]  w-full pb-20 h-full relative block z-10  bg-cover bg-no-repeat bg-top  before:content bg-fixed   before:absolute    before:inset-0  before:block before:bg-gradient-to-b  before:from-white before:to-transparent   before:opacity-70  before:z-[-5] ">
        <div className="pt-32  z-20 container mx-auto">
          <RecruiterForm />
        </div>
      </div>
    </div>
  );      
};

export default RecruitPage;
