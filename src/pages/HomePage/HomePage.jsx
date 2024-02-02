import About from "./About";
import Blogs from "./Blogs";

import Contact from "./Contact";
import Hero from "./Hero";

import Partners from "../../components/Partners";
import Portfolio from "../../components/Portfolio";
import Services from "./Services";

const HomePage = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      {/* <Portfolio/> */}
      <Blogs/>
      {/* <Partners/> */}
      <Contact/>
    </>
  );
}

export default HomePage;
