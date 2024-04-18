import React, { useState } from "react";

import Modal from "./Modal";

const Requirments = ({ country, data }) => {
  return (
    <div className=" min-w-full  mx-auto p-4 bg-slate-400 rounded-lg shadow-lg overflow-hidden">
      <Modal country={country} data={data} />
    </div>
  );
};

export default Requirments;
