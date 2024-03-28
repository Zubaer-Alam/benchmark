import React, { useState } from "react";

const Requirments = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <div className={`max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg ${isExpanded ? 'h-auto' : 'h-24'} transition-height duration-500 overflow-hidden`} onClick={toggleExpand}>
    <h1 className="text-xl font-bold mb-4">Bulgaria Work Visa</h1>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Cost Breakdown:</h2>
      <ul className="list-disc pl-6">
        <li>Advance: 80,000 Tk</li>
        <li>After Permit: 1 lac Tk</li>
        <li>After Visa: 5,70,000 Tk</li>
        <li>Total Cost: 7,50,000 Tk</li>
      </ul>
    </div>
    <div className="mb-4">
      <h2 className="text-sm font-semibold">Documents Required:</h2>
      <ol className="list-decimal pl-6">
        <li>Passports</li>
        <li>PCC Validation minimum 4 months with attestation by the Bulgarian Embassy, then need to send a hard copy via courier.</li>
        <li>Passport size picture</li>
        <li>CV</li>
        <li>Academic documents</li>
      </ol>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Process Time:</h2>
      <p>Maximum 3 months for work permit and 1 month for visa processing at the embassy. Candidates must go to India to face the embassy. Embassy fees, insurance, and other expenses will be carried by the candidates.</p>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Available Positions:</h2>
      <ul className="list-disc pl-6">
        <li>Cleaner</li>
        <li>Kitchen Helper</li>
        <li>Tailors</li>
      </ul>
      <p className="font-semibold">Number of Candidates Needed: 5</p>
    </div>
    <div>
      <h2 className="text-xl font-semibold">Salaries:</h2>
      <p>Approximately 480 euros monthly with accommodations.</p>
    </div>
  </div>
  );
};

export default Requirments;
