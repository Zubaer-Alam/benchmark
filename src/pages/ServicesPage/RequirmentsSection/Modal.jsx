import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const Modal = ({ country, data }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <div className="flex justify-between items-center">
        <div className=" ">
          <img
            height={100}
            width={100}
            src={data.flag}
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
          />
        </div>
        <h2 className="text-2xl font-bold text-white">{country}</h2>
      </div>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black bg-opacity-30 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[55%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-auto h-[500px]">
        <div className="">
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
        </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <Link to="/apply">
              <button className="bg-red-500 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] text-white focus:outline-none">
                Apply
              </button>
            </Link>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
