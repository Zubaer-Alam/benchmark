import React, { useState } from "react";

import { Link } from "react-router-dom";
const Requirments = ({ country, data }) => {
  return (
    // <div className=" min-w-full  mx-auto p-4 bg-slate-400 rounded-lg shadow-lg object-fit ">

    <div className="break-inside-avoid  bg-white dark:bg-slate-300 rounded-lg shadow mb-4 ">
      <div className="h-72 border-b-4 border-white   overflow-hidden">
        <img src={data.thumb} alt="" className="rounded-t-lg  " />
        <h2 className="text-2xl bg-[#fc432a] drop-shadow-lg shadow-black px-6 py-2 text-end rounded-r-3xl  bottom-80  right-96 relative font-bold text-white ">
          {country}
        </h2>
      </div>
      <div className="flex justify-end items-center h-10 ">
        <img
          height={100}
          width={100}
          src={data.flag}
          className="object-cover !m-0 !p-0 object-top rounded-full h-28 w-28 border-4 group-hover:scale-105 group-hover:z-30 border-white  right-16 -top-6  transition duration-500 relative"
        />
      </div>
      <div className="p-4 md:px-10 md:pb-5">
        <div>
          <h3 className="font-bold mb-2">Processing Time:</h3>
          <p className="mb-4">{data.processing_time}</p>

          {data.job_details && (
            <>
              <h3 className="font-bold mb-2">Job Details:</h3>
              <ul className="mb-4">
                {Object.entries(data.job_details).map(([job, salary]) => (
                  <li key={job}>
                    <strong>{job}:</strong> {salary}
                  </li>
                ))}
              </ul>
            </>
          )}
          <h3 className="font-bold mb-2">Required Documents:</h3>
          <ul className="mb-4">
            {data.documents.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
          {data.training_requirement && (
            <>
              <h3 className="font-bold mb-2">Training Requirement:</h3>
              <p className="mb-4">{data.training_requirement}</p>
            </>
          )}
          <h3 className="font-bold mb-2">Return Policy:</h3>
          <p className="mb-2">Refundable: {data.return_policy.refundable}</p>
          <p>Non-refundable: {data.return_policy.non_refundable}</p>
        </div>
        <div className="mt-[25px] flex justify-end">
          <div>
            <Link to="/apply">
              <button className="bg-red-500 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] text-white focus:outline-none">
                Apply
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirments;
