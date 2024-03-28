import React, { useState } from "react";
import { PiPlusLight } from "react-icons/pi";

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
      className="  mx-auto "
    >
      <div className="grid grid-cols-5 gap-4 bg-black bg-opacity-60  px-8 pt-6 pb-8 mb-4 rounded-xl">
        <div className="col-span-3 ">
          {/* from section 1 */}
          <div className="flex justify-between gap-4">
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Profile Image:
              </label>
              <label class="w-36 h-36 flex flex-col items-center justify-center px-4 py-6 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <PiPlusLight class="mt-2 text-white text-5xl" />

                <input type="file" class="hidden" />
              </label>
            </div>

            <div className=" grid grid-cols-2 gap-4 w-full">
              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Gender:
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={handleGenderChange}
                  className="appearance-none border-b w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                >
                  <option className="text-black" value="">
                    Select Gender
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
              </div>
              <div className="mb-4">
                <label
                  htmlFor="targetCountry"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Target Country:
                </label>
                <select
                  id="targetCountry"
                  value={targetCountry}
                  onChange={handleTargetCountryChange}
                  className="appearance-none border-b w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                >
                  <option className="text-black" value="">
                    Select Country
                  </option>
                  <option className="text-black" value="country1">
                    Country 1
                  </option>
                  <option className="text-black" value="country2">
                    Country 2
                  </option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="dateOfBirth"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  onChange={handleDateOfBirthChange}
                  className="appearance-none border-b w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="targetProfession"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Target Profession:
                </label>
                <select
                  id="targetProfession"
                  value={targetProfession}
                  onChange={handleTargetProfessionChange}
                  className="appearance-none border-b w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                >
                  <option className="text-black" value="">
                    Select Profession
                  </option>
                  <option className="text-black" value="profession1">
                    Profession 1
                  </option>
                  <option className="text-black" value="profession2">
                    Profession 2
                  </option>
                </select>
              </div>
            </div>
          </div>
          {/* from section 2 */}
          <div className="  col-span-3 ">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-white text-sm font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="appearance-none border-b w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-white text-sm font-bold mb-2"
              >
                Number:
              </label>
              <input
                type="text"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="appearance-none border-b w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none border-b w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="presentAddress"
                className="block text-white text-sm font-bold mb-2"
              >
                Present Address:
              </label>
              <input
                type="text"
                id="presentAddress"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleChange}
                className="appearance-none border-b w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="permanentAddress"
                className="block text-white text-sm font-bold mb-2"
              >
                Permanent Address:
              </label>
              <input
                type="text"
                id="permanentAddress"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                className="appearance-none border-b w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* from section 3 */}
        <div className=" col-span-2">
          <div>
            <label className="block text-white text-sm font-bold mb-2">
              NID Image:
            </label>
            <div className="mb-4 flex gap-4">
              <label class="w-full h-36 flex flex-col items-center justify-center px-4 py-6 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <PiPlusLight class="mt-2 text-white text-5xl" />

                <input type="file" class="hidden" />
              </label>
              <label class="w-full h-36 flex flex-col items-center justify-center px-4 py-6 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <PiPlusLight class="mt-2 text-white text-5xl" />

                <input type="file" class="hidden" />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2">
              Passport Image:
            </label>
            <div className="mb-4 flex gap-4">
              <label class="w-full h-36 flex flex-col items-center justify-center px-4 py-6 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <PiPlusLight class="mt-2 text-white text-5xl" />

                <input type="file" class="hidden" />
              </label>
              <label class="w-full h-36 flex flex-col items-center justify-center px-4 py-6 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <PiPlusLight class="mt-2 text-white text-5xl" />

                <input type="file" class="hidden" />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2">
              Upload Resume:
            </label>
            <input
              type="file"
              id="resume"
              accept="image/*"
              className="appearance-none border-b w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
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
              <label className="text-white pl-2">
                Subscribe to newsletter
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-[#ca0b10] hover:bg-[#ca0b40] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default WorkerForm;
