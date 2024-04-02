import { useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import { Link, NavLink, useLocation } from "react-router-dom";

// import icons from react icons
import { FaXmark, FaBars, FaBarsStaggered, FaPhone } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const pathLocation = location.pathname;
  console.log(pathLocation);
  console.log(isSticky);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Gallery", path: "gallery" },
    { link: "Apply", path: "apply" },
    { link: "Recruit", path: "recruit" },
    { link: "Collaborate", path: "collaborate" },
    
  ];
  

  return (
    <header
      className={`w-full lg:bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 
    ${isMenuOpen ? "bg-dark/50" : "bg-transparent"}
    `}
    >
      <nav
        className={`lg:px-24 px-4  ${
          isSticky
            ? "sticky top-0 left-0 right-0 bg-white/70 border-b transition-all duration-300 ease-in "
            : "transition-all duration-300 ease-in lg:py-4 "
        }`}
      >
        <div className="flex justify-between items-center  gap-8">
          {/* <a href="" className="text-2xl font-bold text-white"><span className="text-orange">Bench</span>mark</a> */}
          <div className="relative">
            <Link to="/">
              <img
                src="/blogo.svg"
                className="h-20 w-44 object-contain"
                alt="benchmark logo"
              />
            </Link>
            <p
              className={`absolute text-[8px] w-[500px] -bottom-1 font-semibold
              ${
                pathLocation === "/"
                  ? isSticky
                    ? " text-black "
                    : " text-white "
                  : isSticky
                  ? " text-black "
                  : " text-black "
              }`}
            >
              Career Development Centre & Education Consultancy
            </p>
          </div>

          <ul className="lg:flex space-x-12 hidden navitems text-sm">
            {navItems.map(({ link, path }) => (
              <NavLink
                to={path}
                activeClass="active"
                spy={true}
                smooth={true}
                key={link}
                offset={-100}
                href={path}
                className={`link block uppercase hover:text-orange transition-all duration-300 font-semibold ${
                  pathLocation === "/"
                    ? isSticky
                      ? "text-gray-900"
                      : "text-white"
                    : isSticky
                    ? "text-gray-900"
                    : "text-gray-900"
                }`}
              >
                {link}
              </NavLink>
            ))}
          </ul>

          <Link to="/contact" className="space-x-12 hidden lg:block">
            <button className="py-2  h-10 px-6  text-white shadow-lg before:block before:-left-1 before:-top-1 before:bg-red-700 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-red-700 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-dark relative flex justify-center items-center gap-2 rounded-md">
              <FaPhone />
            </button>
          </Link>
          {/* 
          <Link to="/contact" className="space-x-12 fixed bottom-10 right-4">
            <button className="p-4 text-white shadow-lg  after:-right-1 after:-bottom-1 after:border-red-700 after:border-4 after:rounded-full after:absolute after:h-0 after:w-0 after:hover:w-[116%] after:hover:h-[116%] after:duration-500 after:-z-40 bg-green-500 relative flex justify-center items-center gap-2 rounded-full">
              <FaPhone />
            </button>
          </Link> */}
          {/* menu btn, visible on mobile screen */}
          <div className="lg:hidden z-50">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
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
          className={`space-y-4 px-4 mt-16 py-7 bg-[#fbfbfb]  rounded-lg ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-90}
              key={link}
              onClick={toggleMenu}
              className="block uppercase text-gray-900  hover:text-orange transition-all duration-300  translate-x-2 font-semibold "
            >
              {link}
            </Link>
          ))}
          <Link
            onClick={toggleMenu}
            to="/contact"
            className="block font-semibold uppercase text-gray-900  hover:text-orange transition-all duration-300  translate-x-2"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
