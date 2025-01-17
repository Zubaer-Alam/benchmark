import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className=" text-white relative md:-mt-[150px] -mt-10 bg-gradient-to-tr from-[#161616] to-[#080808] md:py-20 py-12 md:px-24 px-4  z-50 flex flex-col md:flex-row justify-between md:items-center gap-12"
    >
      <div className="bg-[url(/src/assets/funfact_bg.svg)] z-[-2] bg-no-repeat bg-center h-full w-full absolute left-0 top-0 opacity-75"></div>

      {/* left side text */}
      <div className="">
        <h2 className="md:text-5xl text-3xl font-bold mb-5">
          Study. Travel. Live
        </h2>
        <p className="text-gray-200 z-auto md:text-base text-sm">
          The Benchmark Career Development Centre & Education Consultancy
        </p>
      </div>

      {/* right side text */}
      <div className="">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">10</h4>
            <div className="">
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Countries Covered Worldwide
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">700</h4>
            <div>
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Project Completed
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">5k</h4>
            <div className="">
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Global Happy Clients
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">50</h4>
            <div className="">
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tighttext-gray-300">
                Team Members
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
