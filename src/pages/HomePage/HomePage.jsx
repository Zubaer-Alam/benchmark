import About from "./About";
import Blogs from "./Blogs";

import Contact from "./Contact";
import Hero from "./Hero";

import Services from "./Services";
import EarthComponent from "./Earth/Earth";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <div className="flex flex-col lg:flex-row items-center justify-center relative h-[300px] lg:mt-52 xl:my-80 mx-4 md:mx-0">
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
        </div>
        <div className="absolute translate-y-[200px] lg:translate-x-1/4 lg:translate-y-0">
          {/* <SizeMe>{({ size: { width } }) => (
            <EarthComponent width={width} height={width / (4 / 3)} />
          )}</SizeMe> */}
          <EarthComponent />
        </div>
      </div>
      <Services />
      {/* <Portfolio/> */}
      <Blogs />
      {/* <Partners/> */}
      <Contact />
    </>
  );
};

export default HomePage;
