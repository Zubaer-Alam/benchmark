import { useEffect, useState } from "react";
import * as Scroll from 'react-scroll';
import { Link, NavLink } from "react-router-dom";

// import icons from react icons
import { FaXmark, FaBars, FaBarsStaggered, FaPhone } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  console.log(isSticky)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      }
      else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Contact", path: "contact" },
  ];
  
  return (
    <header className={`w-full lg:bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 
    ${isMenuOpen ? "bg-dark/50" : "bg-transparent"}
    `}>
      <nav className={`lg:py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-dark/50 transition-all duration-300 ease-in" : "transition-all duration-300 ease-in"
        }`}>
        <div className="flex justify-between items-center text-base gap-8">
          {/* <a href="" className="text-2xl font-bold text-white"><span className="text-orange">Bench</span>mark</a> */}
          <img src="/blogo.svg" 
          className="h-16 w-32 object-contain"
          alt="benchmark logo" />

          <ul className="md:flex space-x-12 hidden navitems">

            {
              navItems.map(({ link, path }) => <NavLink to={path} activeClass="active" spy={true} smooth={true} key={link} offset={-100} href={path} className="link block text-base uppercase text-white hover:text-orange transition-all duration-300">
                {link}
              </NavLink>)
            }
          </ul>

          <div className="space-x-12 hidden md:block">
            <button className="py-2 w-40 h-10 px-6  text-red-600 shadow-lg before:block before:-left-1 before:-top-1 before:bg-red-700 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-red-700 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-dark relative flex justify-center items-center gap-2 rounded-md">
              <FaPhone /> <span className="font-bold">Contact</span>
            </button>
          </div>

          {/* menu btn, visible on mobile screen */}
          <div className="md:hidden z-50">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-primary" />
              ) : (
                <FaBarsStaggered className="h-7 w-7 text-primary p-1 border rounded-full" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-[#181818]  ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}
        >
          {
            navItems.map(({ link, path }) => <Link
              to={path} spy={true} smooth={true} offset={-90}
              key={link}
              onClick={toggleMenu}
              className="block text-base uppercase text-white hover:text-orange transition-all duration-300  translate-x-2"
            >
              {link}
            </Link>)
          }
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;