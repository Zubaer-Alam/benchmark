import React from "react";
import SectionIntro from "../../AboutPage/SectionIntro";
import Requirments from "./Requirments";

import lithuania from "../../../../public/content/flags/lithuania.png";
import serbia from "../../../../public/content/flags/serbia.png";
import croatia from "../../../../public/content/flags/croatia.png";

const VisaRequirmentSection = () => {
  const countriesData = {
    Lithuania: {
      flag: lithuania,
      processing_time: "45 days for appointment, 5 months for visa (TRC).",
      job_details: null,
      documents: [
        "Passport A to Z scanned copy",
        "Passport information page copy (Notarized)",
        "SSC certificate (attested)",
        "Work experience certificate from relevant job (notarized)",
        "PCC",
        "Photo 35/45",
      ],
      training_requirement: null,
      return_policy: {
        refundable: "1 lac taka",
        non_refundable: "50,000 taka",
      },
    },
    Serbia: {
      flag: serbia,
      processing_time: "6 months processing time.",
      job_details: {
        Painters: "500-550 euro/month",
        Masons: "600-650 euro/month",
        Plumbers: "550-600 euro/month",
        Tilers: "650-700 euro/month",
      },
      documents: [
        "Passport copy (minimum 2 years validity)",
        "School diploma (notary translated in English)",
        "Training certificate (notary translated in English)",
        "Experience certificate (for same job position as training certificate, notary translated in English)",
        "Police clearance",
      ],
      training_requirement:
        "Training required for any mentioned job. Training certificate needed after permit. Assistance provided if trouble managing certificate.",
      return_policy: {
        refundable: "1 lac taka",
        non_refundable: "50,000 taka",
      },
    },
    Croatia: {
      flag: croatia,
      processing_time: "8-9 months processing time.",
      job_details: {
        job: "Welding",
        salary: null,
      },
      documents: ["Passport copy", "Police clearance", "CV", "Work video"],
      training_requirement: "Must be trained enough",
      return_policy: {
        refundable: "1 lac taka",
        non_refundable: "50,000 taka",
      },
    },
  };
  return (
    <div className="py-10 container mx-auto ">
      <SectionIntro
        eyebrow="Worker Visa"
        title="Applicant requirements"
      ></SectionIntro>
      <div className="my-4 px-6 grid lg:grid-cols-3 gap-4">
        {Object.entries(countriesData).map(([country, data]) => (
          <Requirments key={country} country={country} data={data} />
        ))}
      </div>
    </div>
  );
};

export default VisaRequirmentSection;
