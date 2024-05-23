import React, { useState } from "react";
import { PiPlusLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { MdPictureAsPdf } from "react-icons/md";
const WorkerForm = () => {
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
      className=" mx-2 lg:mx-auto bg-black bg-opacity-90 lg:my-20 px-10 py-20 lg:mb-4 rounded-xl "
    >
      <div className="grid lg:grid-cols-7 gap-4 lg:gap-20 ">
        <div className="col-span-4 ">
          {/* from section 1 */}
          <div className="lg:flex justify-between gap-4">
            <div className="mb-4 ">
              <label className="block text-center lg:text-left text-white text-sm font-bold mb-2">
                Profile Image:
              </label>
              <label class="mx-auto w-52 h-52 lg:w-36 lg:h-36 flex flex-col items-center justify-center px-4 py-6 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <PiPlusLight class="mt-2 text-white text-5xl" />

                <input type="file" class="hidden" />
              </label>
            </div>

            <div className=" grid lg:pt-14  md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
              <div className="mb-4 relative">
                <select
                  id="gender"
                  value={gender}
                  onChange={handleGenderChange}
                  className="appearance-none border-b w-full pb-1 pt-4  text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                >
                  <option className="text-black" value="">
                    Gender
                  </option>
                  <option className="text-black" value="male">
                    Male
                  </option>
                  <option className="text-black" value="female">
                    Female
                  </option>
                  <option className="text-black" value="other">
                    Other
                  </option>
                </select>
                <div className="absolute top-3 right-0 flex items-center pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-white text-xl" />
                </div>
              </div>

              <div className="mb-4 relative">
                <select
                  id="targetCountry"
                  value={targetCountry}
                  onChange={handleTargetCountryChange}
                  className="appearance-none border-b w-full pb-1 pt-4  text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
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

              <div className="mb-4 relative">
                <input
                  type="text"
                  id="dateOfBirth"
                  placeholder="Date of birth"
                  value={dateOfBirth}
                  onChange={handleDateOfBirthChange}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  style={{ color: "white" }}
                  className="appearance-none border-b w-full pb-1 pt-4  text-white  placeholder-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                />
                {/* <div className="absolute top-3 right-0 flex items-center pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-white text-xl" />
                </div> */}
              </div>

              <div className="mb-4 relative">
                <select
                  id="targetProfession"
                  value={targetProfession}
                  onChange={handleTargetProfessionChange}
                  className="appearance-none border-b w-full pb-1 pt-4  text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                >
                  <option className="text-black" value="">
                    Profession
                  </option>
                  <option className="text-black" value="profession1">
                    Profession 1
                  </option>
                  <option className="text-black" value="profession2">
                    Profession 2
                  </option>
                </select>
                <div className="absolute top-3 right-0 flex items-center pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
          {/* from section 2 */}
          <div className="  col-span-3 ">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="appearance-none border-b w-full pb-1 pt-4  placeholder-white text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="number"
                placeholder="Number"
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
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none placeholder-white border-b w-full pb-1 pt-4  text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                id="presentAddress"
                placeholder="Present Address"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleChange}
                className="appearance-none border-b w-full pb-1 pt-4  placeholder-white text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="permanentAddress"
                placeholder="Permanent Address"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                className="appearance-none border-b w-full pb-1 pt-4  placeholder-white text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* from section 3 */}
        <div className="col-span-4 lg:col-span-3  ">
          <div>
            <label className="block text-white text-sm font-bold mb-2">
              NID Image:
            </label>
            <div className="mb-4 md:flex gap-4">
              <label class="w-full my-3 md:my-0 h-32 flex flex-col items-center justify-center px-4 py-6 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <PiPlusLight class="mt-2 text-white text-5xl" />

                <input type="file" class="hidden" />
              </label>
              <label class="w-full h-32 flex flex-col items-center justify-center px-4 py-6 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <PiPlusLight class="mt-2 text-white text-5xl" />

                <input type="file" class="hidden" />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2">
              Passport Image:
            </label>
            <div className="mb-4 md:flex gap-4">
              <label class="w-full my-3 md:my-0 h-32 flex flex-col items-center justify-center px-4 py-6 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <PiPlusLight class="mt-2 text-white text-5xl" />

                <input type="file" class="hidden" />
              </label>
              <label class="w-full h-32 flex flex-col items-center justify-center px-4 py-6 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <PiPlusLight class="mt-2 text-white text-5xl" />

                <input type="file" class="hidden" />
              </label>
            </div>
          </div>

          <div className="mt-4">
            <div className="relative">
              <input
                type="file"
                id="resume"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
              <label
                htmlFor="resume"
                className="border-b w-full pb-1 pt-4  text-white leading-tight focus:outline-none focus:shadow-outline block"
              >
                {fileName}
              </label>
              <div className="absolute top-2 right-0 flex items-center pr-3 pointer-events-none">
                <MdPictureAsPdf className="text-white text-xl" />
              </div>
            </div>
          </div>
          <div className="py-4">
            <div className="pb-4">
              <input type="checkbox" value="option1" />
              <label className="text-white pl-2">
                I accept the license term and agreements
              </label>
            </div>
            <div className="pb-4">
              <input type="checkbox" checked value="option1" />
              <label className="text-white pl-2">Subscribe to newsletter</label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end lg:justify-end">
        <button
          type="submit"
          className="bg-[#ca0b10] hover:bg-[#ca0b40] w-72 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default WorkerForm;
