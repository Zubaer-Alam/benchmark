// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaClock,
//   FaFileAlt,
//   FaMoneyBillAlt,
//   FaInfoCircle,
// } from "react-icons/fa";
// const Requirments = ({ country, data }) => {
//   return (
//     <div className="break-inside-avoid bg-white rounded-lg mb-4 shadow-2xl md:mb-8 mx-3 md:mx-0">
//       {/* <div className="break-inside-avoid bg-gradient-to-b from-black to-gray-700 rounded-lg mb-4 shadow md:mb-8 mx-3 md:mx-0"> */}
//       <div className="h-80 border-b-[4px] border-white">
//         <img
//           src={data.thumb}
//           alt=""
//           className="rounded-t-lg h-[315px] w-full object-cover"
//         />
//         <h2 className="shadow-[2px_2px_10px_rgba(0,0,0,.6)] text-2xl w-40 bg-[#fc432a] rounded-tl-[4px] px-6 py-2 text-end rounded-r-[4px] -top-72 md:-top-20 -left-1 relative font-bold text-white ">
//           {country}
//         </h2>
//         <div className="text-2xl h-1 w-1 bg-[#fc432a] shadow-[2px_2px_10px_rgba(0,0,0,.6)] text-end -top-72 md:-top-20 -left-1 relative font-bold text-white ">
//           <div className="text-2xl rounded-l-full h-2 w-1 bg-[#5f1208] shadow-[2px_2px_10px_rgba(0,0,0,.6)] text-end font-bold text-white "></div>
//         </div>
//       </div>
//       <div className="flex justify-end items-center h-10">
//         <img
//           height={100}
//           width={100}
//           src={data.flag}
//           className="object-cover !m-0 !p-0 object-top rounded-full h-28 w-28 border-[3px] group-hover:scale-105 group-hover:z-30 border-white right-16 -top-6 transition duration-500 relative"
//         />
//       </div>
//       {/* <div className="p-4 md:px-10 md:pb-5 text-white">
//         <div>
//           <h3 className="font-bold mb-2">Processing Time:</h3>
//           <p className="mb-4">{data.processing_time}</p>

//           {data.job_details && (
//             <>
//               <h3 className="font-bold mb-2">Job Details:</h3>
//               <ul className="mb-4">
//                 {Object.entries(data.job_details).map(([job, salary]) => (
//                   <li key={job}>
//                     <strong>{job}:</strong> {salary}
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//           <h3 className="font-bold mb-2">Required Documents:</h3>
//           <ul className="mb-4">
//             {data.documents.map((doc, index) => (
//               <li key={index}>{doc}</li>
//             ))}
//           </ul>
//           {data.training_requirement && (
//             <>
//               <h3 className="font-bold mb-2">Training Requirement:</h3>
//               <p className="mb-4">{data.training_requirement}</p>
//             </>
//           )}
//           <h3 className="font-bold mb-2">Return Policy:</h3>
//           <p className="mb-2">Refundable: {data.return_policy.refundable}</p>
//           <p>Non-refundable: {data.return_policy.non_refundable}</p>
//           {data.payment_procedure && (
//             <>
//               <h3 className="font-bold mb-2">Payment Procedure:</h3>
//               <p className="mb-2">
//                 Total package cost: {data.payment_procedure.total_package_cost}
//               </p>
//               <p className="mb-2">
//                 Advance: {data.payment_procedure.three_step_payment.advance}
//               </p>
//               <p className="mb-2">
//                 After Permit:{" "}
//                 {data.payment_procedure.three_step_payment.after_permit}
//               </p>
//               {data.payment_procedure.after_visa && (
//                 <p className="mb-2">
//                   After Visa:{" "}
//                   {data.payment_procedure.three_step_payment.after_visa}
//                 </p>
//               )}
//             </>
//           )}
//           {data.payment_procedure && data.payment_procedure.from_bangladesh && (
//             <p className="mb-2">{data.payment_procedure.from_bangladesh}</p>
//           )}
//           <div
//             className={`${
//               data.processing_time_additional_info ? "" : "hidden"
//             }`}
//           >
//             <h3 className="font-bold mb-2"> Aditional Processing Time:</h3>
//             <p className="mb-2">{data.processing_time_additional_info}</p>
//           </div>
//           <div className={`${data.submission_slip_info ? "" : "hidden"}`}>
//             <h3 className="font-bold mb-2"> Submission Slip Information:</h3>
//             <p className="mb-2">{data.submission_slip_info}</p>
//           </div>
//         </div>
//         <div className="mt-[25px] flex justify-end">
//           <div>
//             <Link to="/apply">
//               <button className="bg-[#d20000] w-40 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] text-white focus:outline-none text-xl uppercase">
//                 Apply
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div> */}
//       <div className="p-6">
//         <div className="mb-6">
//           <h3 className="flex items-center text-xl font-bold mb-2">
//             <FaClock className="mr-2 text-blue-600" />
//             Processing Time:
//           </h3>
//           <p>{data.processing_time}</p>
//         </div>

//         {data.job_details && (
//           <div className="mb-6">
//             <h3 className="flex items-center text-xl font-bold mb-2">
//               <FaInfoCircle className="mr-2 text-blue-600" />
//               Job Details:
//             </h3>
//             <ul className="list-disc list-inside">
//               {Object.entries(data.job_details).map(([job, salary]) => (
//                 <li key={job}>
//                   <strong>{job}:</strong> {salary}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <div className="mb-6">
//           <h3 className="flex items-center text-xl font-bold mb-2">
//             <FaFileAlt className="mr-2 text-blue-600" />
//             Required Documents:
//           </h3>
//           <ul className="list-disc list-inside">
//             {data.documents.map((doc, index) => (
//               <li key={index}>{doc}</li>
//             ))}
//           </ul>
//         </div>

//         {data.training_requirement && (
//           <div className="mb-6">
//             <h3 className="flex items-center text-xl font-bold mb-2">
//               <FaInfoCircle className="mr-2 text-blue-600" />
//               Training Requirement:
//             </h3>
//             <p>{data.training_requirement}</p>
//           </div>
//         )}

//         <div className="mb-6">
//           <h3 className="flex items-center text-xl font-bold mb-2">
//             <FaMoneyBillAlt className="mr-2 text-blue-600" />
//             Return Policy:
//           </h3>
//           <p>
//             <strong>Refundable:</strong> {data.return_policy.refundable}
//           </p>
//           <p>
//             <strong>Non-refundable:</strong> {data.return_policy.non_refundable}
//           </p>
//         </div>

//         {data.payment_procedure && (
//           <div className="mb-6">
//             <h3 className="flex items-center text-xl font-bold mb-2">
//               <FaMoneyBillAlt className="mr-2 text-blue-600" />
//               Payment Procedure:
//             </h3>
//             <p>
//               <strong>Total package cost:</strong>{" "}
//               {data.payment_procedure.total_package_cost}
//             </p>
//             <p>
//               <strong>Advance:</strong>{" "}
//               {data.payment_procedure.three_step_payment.advance}
//             </p>
//             <p>
//               <strong>After Permit:</strong>{" "}
//               {data.payment_procedure.three_step_payment.after_permit}
//             </p>
//             {data.payment_procedure.after_visa && (
//               <p>
//                 <strong>After Visa:</strong>{" "}
//                 {data.payment_procedure.three_step_payment.after_visa}
//               </p>
//             )}
//             {data.payment_procedure.from_bangladesh && (
//               <p>{data.payment_procedure.from_bangladesh}</p>
//             )}
//           </div>
//         )}

//         {data.processing_time_additional_info && (
//           <div className="mb-6">
//             <h3 className="flex items-center text-xl font-bold mb-2">
//               <FaInfoCircle className="mr-2 text-blue-600" />
//               Additional Information:
//             </h3>
//             <p>{data.processing_time_additional_info}</p>
//             <p>{data.submission_slip_info}</p>
//           </div>
//         )}

//         <div className="text-center">
//           <Link to="/apply">
//             <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
//               Apply
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Requirments;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaClock,
  FaFileAlt,
  FaMoneyBillAlt,
  FaInfoCircle,
} from "react-icons/fa";

const Requirments = ({ country, data }) => {
  return (
    <div className="break-inside-avoid bg-white rounded-lg shadow-2xl  mb-6 md:mb-8 mx-3 md:mx-0">
      <div className="relative">
        <img
          src={data.thumb}
          alt=""
          className="rounded-t-lg w-full h-48 object-cover"
        />
        <div className="absolute top-0 left px-4 py-2 bg-blue-600 text-white font-bold rounded-tl-lg">
          {country}
        </div>
        <img
          src={data.flag}
          className="absolute bottom-0 right-0 h-16 w-16 rounded-full border-4 border-white transform translate-y-1/2 -translate-x-8"
        />
      </div>
      <div className="p-6">
        <div className="mb-6">
          <h3 className="flex items-center text-xl font-bold mb-2">
            <FaClock className="mr-2 text-blue-600" />
            Processing Time:
          </h3>
          <p>{data.processing_time}</p>
        </div>

        {data.job_details && (
          <div className="mb-6">
            <h3 className="flex items-center text-xl font-bold mb-2">
              <FaInfoCircle className="mr-2 text-blue-600" />
              Job Details:
            </h3>
            <ul className="list-disc list-inside">
              {Object.entries(data.job_details).map(([job, salary]) => (
                <li key={job}>
                  <strong>{job}:</strong> {salary}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-6">
          <h3 className="flex items-center text-xl font-bold mb-2">
            <FaFileAlt className="mr-2 text-blue-600" />
            Required Documents:
          </h3>
          <ul className="list-disc list-inside">
            {data.documents.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </div>

        {data.training_requirement && (
          <div className="mb-6">
            <h3 className="flex items-center text-xl font-bold mb-2">
              <FaInfoCircle className="mr-2 text-blue-600" />
              Training Requirement:
            </h3>
            <p>{data.training_requirement}</p>
          </div>
        )}

        <div className="mb-6">
          <h3 className="flex items-center text-xl font-bold mb-2">
            <FaMoneyBillAlt className="mr-2 text-blue-600" />
            Return Policy:
          </h3>
          <p>
            <strong>Refundable:</strong> {data.return_policy.refundable}
          </p>
          <p>
            <strong>Non-refundable:</strong> {data.return_policy.non_refundable}
          </p>
        </div>

        {data.payment_procedure && (
          <div className="mb-6">
            <h3 className="flex items-center text-xl font-bold mb-2">
              <FaMoneyBillAlt className="mr-2 text-blue-600" />
              Payment Procedure:
            </h3>
            <p>
              <strong>Total package cost:</strong>{" "}
              {data.payment_procedure.total_package_cost}
            </p>
            <p>
              <strong>Advance:</strong>{" "}
              {data.payment_procedure.three_step_payment.advance}
            </p>
            <p>
              <strong>After Permit:</strong>{" "}
              {data.payment_procedure.three_step_payment.after_permit}
            </p>
            {data.payment_procedure.after_visa && (
              <p>
                <strong>After Visa:</strong>{" "}
                {data.payment_procedure.three_step_payment.after_visa}
              </p>
            )}
            {data.payment_procedure.from_bangladesh && (
              <p>{data.payment_procedure.from_bangladesh}</p>
            )}
          </div>
        )}

        {data.processing_time_additional_info && (
          <div className="mb-6">
            <h3 className="flex items-center text-xl font-bold mb-2">
              <FaInfoCircle className="mr-2 text-blue-600" />
              Additional Information:
            </h3>
            <p>{data.processing_time_additional_info}</p>
            <p>{data.submission_slip_info}</p>
          </div>
        )}

        <div className="text-center ">
          <Link to="/apply">
            <button className="bg-blue-600 w-60 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200 uppercase">
              Apply
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Requirments;
