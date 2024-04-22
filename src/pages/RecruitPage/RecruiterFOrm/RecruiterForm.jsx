import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { PiPlusLight } from "react-icons/pi";
import { motion } from "framer-motion";
const RecruiterForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    presentAddress: "",
    permanentAddress: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [gender, setGender] = useState("");
  const [targetCountry, setTargetCountry] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [targetProfession, setTargetProfession] = useState("");
  const [workerType, setWorkerType] = useState("");
  const [numOfWorkers, setNumOfWorkers] = useState("");
  const [ageRequirements, setAgeRequirements] = useState("");
  const [experienceRequired, setExperienceRequired] = useState(false);
  const [experienceCertificate, setExperienceCertificate] = useState(false);
  const [experienceInYears, setExperienceInYears] = useState("");
  const [educationalRequirements, setEducationalRequirements] = useState("");
  const [proposedSalary, setProposedSalary] = useState("");
  const [currencyType, setCurrencyType] = useState("USD");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleProfileImageChange = (e) => {
    // Handle profile image change
  };
  const [fileName, setFileName] = useState("Upload Resume");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("Upload Resume");
    }
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleTargetCountryChange = (e) => {
    const selectedCountry = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setTargetCountry(selectedCountry);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleTargetProfessionChange = (e) => {
    setTargetProfession(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proceed to the next step
    setCurrentStep(currentStep + 1);
  };
  const handleProceed = (e) => {
    // Proceed to the next step
    setCurrentStep(currentStep + 1);
  };

  const renderStep1 = () => {
    return (
      <div className=" mx-2 lg:mx-auto bg-black bg-opacity-90 lg:my-20 px-10 py-10 lg:mb-4 rounded-xl max-w-[700px]">
        <div className="col-span-4 ">
          {/* from section 2 */}
          <div className="  col-span-3 ">
            <div className="mb-4">
              <input
                type="text"
                id="companeyname"
                name="companeyname"
                placeholder="Company Name"
                value={formData.name}
                onChange={handleChange}
                className="appearance-none border-b w-full pb-1 pt-4  placeholder-white text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="number"
                placeholder="Business Email"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="appearance-none border-b w-full pb-1 pt-4  placeholder-white text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="HR Email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none placeholder-white border-b w-full pb-1 pt-4  text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
              />
            </div>

            <div className="mb-4 grid lg:grid-cols-7 gap-4">
              <div className="col-span-4 ">
                <input
                  type="text"
                  id="presentAddress"
                  placeholder="Address"
                  name="presentAddress"
                  value={formData.presentAddress}
                  onChange={handleChange}
                  className="appearance-none border-b w-full pb-1 pt-4  placeholder-white text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent "
                />
              </div>
              <div className="mb-4 relative col-span-4 lg:col-span-3 ">
                <select
                  id="targetCountry"
                  value={targetCountry}
                  onChange={handleTargetCountryChange}
                  className="appearance-none border-b w-full pb-1 pt-4   text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                >
                  <option className="text-black" value="">
                    Country
                  </option>
                  <option className="text-black" value="country1">
                    Country 1
                  </option>
                  <option className="text-black" value="country2">
                    Country 2
                  </option>
                </select>
                <div className="absolute top-3 right-0 flex items-center pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-white text-xl" />
                </div>
              </div>
            </div>
            <div className="mb-4 grid lg:grid-cols-8 gap-4">
              <div className="col-span-4 ">
                <input
                  type="text"
                  id="presentAddress"
                  placeholder="Website (optional)"
                  name="presentAddress"
                  value={formData.presentAddress}
                  onChange={handleChange}
                  className="appearance-none border-b w-full pb-1 pt-4  placeholder-white text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent "
                />
              </div>
              <div className="mb-4 relative col-span-4 lg:col-span- ">
                <input
                  type="text"
                  id="presentAddress"
                  placeholder="Number"
                  name="presentAddress"
                  value={formData.presentAddress}
                  onChange={handleChange}
                  className="appearance-none border-b w-full  py-6 pb-1 pt-4  placeholder-white text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent "
                />
              </div>
            </div>
          </div>
          {/* from section 1 */}
          <div className="">
            <div className="mb-4 md:flex items-center justify-between gap-4">
              <div className="">
                <label className="block w-52 text-center lg:text-left text-white text-sm font-bold mb-2">
                  Relevant Documents:
                </label>
              </div>
              <div className="md:flex gap-4">
                {" "}
                <label class="mx-auto w-28 h-10   flex items-center justify-center pb-1 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                  <p className="flex gap-2 text-sm text-white">
                    {" "}
                    <MdOutlineFileUpload class=" text-white text-xl" />
                    Upload
                  </p>

                  <input type="file" class="hidden" />
                </label>{" "}
                <label class="mx-auto w-28 h-10   flex items-center justify-center pb-1 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                  <p className="flex gap-2 text-sm text-white">
                    {" "}
                    <MdOutlineFileUpload class=" text-white text-xl" />
                    Upload
                  </p>

                  <input type="file" class="hidden" />
                </label>{" "}
                <label class="mx-auto w-28 h-10   flex items-center justify-center pb-1 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                  <p className="flex gap-2 text-sm text-white">
                    {" "}
                    <MdOutlineFileUpload class=" text-white text-xl" />
                    Upload
                  </p>

                  <input type="file" class="hidden" />
                </label>
              </div>
            </div>

            <div className=" grid lg:pt-14  md:grid-cols-2 lg:grid-cols-2 gap-4 w-full"></div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end ">
          <button
            onClick={(e) => {
              handleNext();
            }}
            className={` bg-[#ca0b10] hover:bg-[#ca0b40] w-72 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
            PROCEED
          </button>
        </div>
      </div>
    );
  };

  const renderStep2 = () => {
    return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className=" lg:flex gap-4 lg:my-20 ">
          <div className="mb-4  mx-2  lg:mx-auto bg-black bg-opacity-90 px-5 md:px-10 py-20  rounded-xl lg:w-screen">
            <div className="md:flex mb-4 justify-between relative">
              <label htmlFor="workerType" className="text-white pt-4">
                Worker Type:
              </label>
              <select
                id="workerType"
                value={workerType}
                className="appearance-none w-full md:w-1/2 border-b pb-1 pt-4  text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                onChange={(e) => setWorkerType(e.target.value)}
              >
                <option className="text-black" value="">
                  Select Worker Type
                </option>
                <option className="text-black" value="Full-Time">
                  Full-Time
                </option>
                <option className="text-black" value="Part-Time">
                  Part-Timew-20 w-20 w-20 w-20 w-20 w-20
                </option>
                <option className="text-black" value="Contract">
                  Contract
                </option>
                {/* Add other worker types */}
              </select>
              <div className="absolute top-9 md:top-3  right-0 flex items-center pr-3 pointer-events-none">
                <IoIosArrowDown className="text-white text-xl" />
              </div>
            </div>
            {/* <div>
          <label htmlFor="numOfWorkers">Number of Workers:</label>
          <input
            type="text"
            id="numOfWorkers"
            value={numOfWorkers}
            onChange={(e) => setNumOfWorkers(e.target.value)}
          />
          
        </div> */}
            <div className="flex mb-4 items-center  justify-between space-x-4">
              <span className="text-white">Numbers of Workers:</span>
              <div className="flex items-center space-x-2">
                <div className=" w-12 md-custom:w-28 md:gap-3  justify-center border-2 rounded-md px-2 py-1 flex items-center space-x-1">
                  <div className="text-white  focus:outline-none">
                    <span>-</span>
                  </div>
                  <span className="text-white">4</span>
                  <div className="text-white  focus:outline-none">
                    <span>+</span>
                  </div>
                </div>
                <span className="text-white">to</span>
                <div className="w-12 md-custom:w-28 md:gap-3  justify-center border-2 rounded-md px-2 py-1 flex items-center space-x-1">
                  <div className="text-white  focus:outline-none">
                    <span>-</span>
                  </div>
                  <span className="text-white">5</span>
                  <div className="text-white hover:text-white focus:outline-none">
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
          <label htmlFor="ageRequirements">Age Requirements (years):</label>
          <input
            type="text"
            id="ageRequirements"
            value={ageRequirements}
            onChange={(e) => setAgeRequirements(e.target.value)}
          />
        </div> */}
            <div className="flex mb-4 items-center justify-between space-x-4">
              <span className="text-white">Age Requirements (years):</span>
              <div className="flex items-center space-x-2">
                <div className=" w-12 md-custom:w-28 md:gap-3  justify-center border-2 rounded-md px-2 py-1 flex items-center space-x-1">
                  <div className="text-white  focus:outline-none">
                    <span>-</span>
                  </div>
                  <span className="text-white">4</span>
                  <div className="text-white  focus:outline-none">
                    <span>+</span>
                  </div>
                </div>
                <span className="text-white">to</span>
                <div className="w-12 md-custom:w-28 md:gap-3  justify-center border-2 rounded-md px-2 py-1 flex items-center space-x-1">
                  <div className="text-white  focus:outline-none">
                    <span>-</span>
                  </div>
                  <span className="text-white">5</span>
                  <div className="text-white hover:text-white focus:outline-none">
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mb-4">
            <label className="text-white">
              <input
                type="checkbox"
                checked={experienceRequired}
                onChange={(e) => setExperienceRequired(e.target.checked)}
              />
              Experience Required
            </label>
          </div> */}
            <div className="pb-4">
              <label className="text-white pr-10">Experience Required:</label>
              <input type="checkbox" value="option1" />
            </div>
            <div className="pb-4">
              <label className="text-white pr-10">
                Experience Certificate:
              </label>
              <input type="checkbox" value="option1" />{" "}
            </div>
            {/* <div className="mb-4">
            <label className="text-white">
              <input
                type="checkbox"
                checked={experienceCertificate}
                onChange={(e) => setExperienceCertificate(e.target.checked)}
              />
              Experience Certificate
            </label>
          </div> */}
            {/* <div>
          <label htmlFor="experienceInYears">Experience in Years:</label>
          <input
            type="text"
            id="experienceInYears"
            value={experienceInYears}
            onChange={(e) => setExperienceInYears(e.target.value)}
          />
        </div> */}
            <div className="flex  items-center justify-between space-x-4">
              <span className="text-white">Experience in years:</span>
              <div className="flex items-center space-x-2">
                <div className=" w-12 md-custom:w-28 md:gap-3  justify-center border-2 rounded-md px-2 py-1 flex items-center space-x-1">
                  <div className="text-white  focus:outline-none">
                    <span>-</span>
                  </div>
                  <span className="text-white">4</span>
                  <div className="text-white  focus:outline-none">
                    <span>+</span>
                  </div>
                </div>
                <span className="text-white">to</span>
                <div className="w-12 md-custom:w-28 md:gap-3  justify-center border-2 rounded-md px-2 py-1 flex items-center space-x-1">
                  <div className="text-white  focus:outline-none">
                    <span>-</span>
                  </div>
                  <span className="text-white">5</span>
                  <div className="text-white hover:text-white focus:outline-none">
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex mb-4 justify-between relative">
              <label
                htmlFor="educationalRequirements"
                className="text-white pt-4"
              >
                Educational Requirements:
              </label>
              <select
                id="educationalRequirements"
                value={educationalRequirements}
                className="appearance-none w-full md:w-1/2 border-b pb-1 pt-4  text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                onChange={(e) => setEducationalRequirements(e.target.value)}
              >
                <option className="text-black" value="">
                  Select Educational Requirements
                </option>
                <option className="text-black" value="High School Diploma">
                  High School Diploma
                </option>
                <option className="text-black" value="Bachelor's Degree">
                  Bachelor's Degree
                </option>
                <option className="text-black" value="Master's Degree">
                  Master's Degree
                </option>
                {/* Add other educational requirements */}
              </select>
              <div className="absolute top-9 md:top-3 right-0 flex items-center pr-3 pointer-events-none">
                <IoIosArrowDown className="text-white text-xl" />
              </div>
            </div>
            <div className="flex justify-between ">
              <label htmlFor="proposedSalary" className="text-white flex-1">
                Proposed Salary:
              </label>
              {/* <input
            type="number"
            id="proposedSalary"
            value={proposedSalary}
            onChange={(e) => setProposedSalary(e.target.value)}
          /> */}
              <div className="flex gap-10 flex-1">
                <div className=" w-12 md-custom:w-28 md:gap-3  justify-center border-2 rounded-md px-2 py-1 flex items-center space-x-1">
                  <div className="text-white  focus:outline-none">
                    <span>-</span>
                  </div>
                  <span className="text-white">4</span>
                  <div className="text-white  focus:outline-none">
                    <span>+</span>
                  </div>
                </div>
                <div className="relative  flex-1 ">
                  <select
                    value={currencyType}
                    className="appearance-none w-full border-b pb-1 pt-4  text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                    onChange={(e) => setCurrencyType(e.target.value)}
                  >
                    <option
                      className="text-black"
                      className="text-black"
                      value="USD"
                    >
                      USD
                    </option>
                    <option className="text-black" value="EUR">
                      EUR
                    </option>
                    <option className="text-black" value="GBP">
                      GBP
                    </option>
                    {/* Add other currency options */}
                  </select>
                  <div className="absolute top-3 right-0 flex items-center pr-3 pointer-events-none">
                    <IoIosArrowDown className="text-white text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className=" mx-2 flex flex-col items-center justify-center lg:mx-auto bg-black bg-opacity-90 px-10 py-10 lg:mb-4 rounded-xl lg:w-screen">
            <div className="mb-4 ">
              <label class="mx-auto  flex flex-col items-center justify-center px-4 py-6 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase  cursor-pointer hover:bg-blue hover:text-white">
                <PiPlusLight class="mt-2 text-white text-9xl" />

                <input type="file" class="hidden" />
              </label>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Add more render functions for additional steps if needed

  return (
    <form onSubmit={handleSubmit} className="">
      {/* Render different parts of the form based on the current step */}
      {currentStep <= 1 && renderStep1()}
      {currentStep >= 2 && renderStep2()}
      {/* Add more conditionals for additional steps if needed */}
      <div className="mt-4 lg:mt-0 flex justify-center md:justify-end ">
        {/* Change button text based on the current step */}

        <button
          type="submit"
          className={`${
            currentStep === 1 ? "hidden" : ""
          } bg-[#ca0b10] hover:bg-[#ca0b40] w-72 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default RecruiterForm;
