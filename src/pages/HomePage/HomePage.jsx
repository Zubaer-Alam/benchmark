import About from "./About";
import Blogs from "./Blogs";

import Contact from "./Contact";
import Hero from "./Hero";

import Services from "./Services";
import EarthComponent from "./Earth/Earth";
import Globe from "../ContactPage/Globe";
import ServiceGrid from "../ServicesPage/ServiceGrid";

const HomePage = () => {
  return (
    <div className="mb-20">
      <Hero />
      <About />

      <div className="lg:flex  lg:justify-between  lg:pt-0  mx-auto bg-gradient-to-tr from-[#181818] to-[#101010] rounded-b-[260px] lg:rounded-b-[200px] xl:rounded-b-[280px] container">
        <div className="lg:ps-24 p-4 z-10">
          <div className="text-center md:text-left lg:pt-10 lg:w-[500px] text-white ">
            <h1 className="md:text-5xl  text-3xl font-bold ">
              Start your career
              <br /> anywhere in the world
            </h1>
            <p className=" lg:w-[450px] text-justify text-sm md:text-xl md:mt-8 mt-3">
              Our premier matching infrastructure and international partnerships
              enable us to connect top global companies with workers based on
              their preferences.
            </p>
          </div>
        </div>

        {/* <div className="xl:-ms-[265px] lg:ms-[-290px] -z-0 ">
          <EarthComponent />
        </div> */}
        <div className=" w-full h-full">
          <Globe />
        </div>
      </div>

      {/* <div className="flex flex-col lg:flex-row lg:hidden  items-center justify-center relative h-[300px] lg:mt-52 -mt-[40px] xl:my-80 mx-4 md:mx-0">
        <div className="lg:w-[500px] z-10 absolute lg:-translate-x-3/4 ">
          <div className="mx-auto lg:pt-20 ">
            <h1 className="md:text-5xl  text-3xl font-bold ">
              Start your career
              <br /> anywhere in the world
            </h1>
            <p className="max-w-2xl text-sm md:text-xl md:mt-8 mt-3">
              Collaboration with Crossroad International partners allows you to
              choose workers according to your preferences
            </p>
          </div>
        </div> */}
      {/* <div className="absolute translate-y-[200px] lg:translate-x-1/4 lg:translate-y-0"> */}
      {/* <SizeMe>
            {({ size: { width } }) => (
              <EarthComponent width={width} height={width / (4 / 3)} />
            )}
          </SizeMe> */}
      {/* <EarthComponent /> */}
      {/* <Globe />  */}
      {/* </div> */}
      {/* <div className="   w-full h-full">
          <Globe />
        </div>
      </div> */}
      {/* <Services /> */}
      <ServiceGrid />
      {/* <Portfolio/> */}
      <Blogs />
      {/* <Partners/> */}
      <Contact />
    </div>
  );
};

export default HomePage;
