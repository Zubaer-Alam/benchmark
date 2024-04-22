import React, { useState } from "react";
import { PiPlusLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
const RecruiterForm = () => {
  // this form is not functional. need validation and other stuff done.
  const [profileImage, setProfileImage] = useState(null);
  const [gender, setGender] = useState("");
  const [targetCountry, setTargetCountry] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [targetProfession, setTargetProfession] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    presentAddress: "",
    permanentAddress: "",
  });
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
    // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" mx-2 lg:mx-auto bg-black bg-opacity-90 lg:my-20 px-10 py-20 lg:mb-4 rounded-xl max-w-[700px] "
    >
      <div className=" ">
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
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="">
                <label className="block w-52 text-center lg:text-left text-white text-sm font-bold mb-2">
                  Relevant Documents:
                </label>
              </div>
              <div className="flex gap-4">
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

        {/* from section 3 */}
      </div>

      <div className="flex justify-center md:justify-end lg:justify-end">
        <button
          type="submit"
          className="bg-[#ca0b10] hover:bg-[#ca0b40] w-72 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          PROCEED
        </button>
      </div>
    </form>
  );
};

export default RecruiterForm;
