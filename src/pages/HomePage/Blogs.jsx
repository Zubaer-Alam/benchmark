import React from "react";
import { BsArrowRight } from "react-icons/bs";
import BlogCards from "../../components/BlogCards";
import FadeUpStagger from "../../components/FadedUpText";

const Blogs = () => {
  return (
    <div className="text-white lg:px-24 px-4">
      {/* blog top */}
      <div>
        <h2 className="text-4xl font-bold text-center leading-snug lg:w-4/6 mx-auto pb-20">
          <FadeUpStagger title={"Our agile process is ability to adapt and respond to change"}/>
        </h2>

        {/* video player */}
        <a href="https://www.youtube.com/watch?v=g75FZ6XfL5U">
          <div className="bg-[url('/src/assets/video_bg.jpeg')] bg-cover bg-no-repeat cursor-pointer cs-video_block cs-style1 cs-video_open cs-bg">
            <span className="cs-player_btn cs-accent_color">
              <span></span>
            </span>
          </div>
        </a>
      </div>

      <div className="h-28"></div>
      {/* main blog */}
      <div className="relative" id="blogs">
        <div
          className="flex flex-col lg:flex-row justify-between lg:items-center gap-12"
          id="services"
        >
          {/* contents */}
          <div className="lg:w-1/2 space-y-5 z-30">
            <h4 className="text-gray-200 font-semibold text-2xl">Our Activities</h4>
            <h2 className="text-5xl font-bold mb-5 leading-snug">
              Explore recent events
            </h2>
            <a
              className="inline-flex items-center gap-2 font-semibold mt-5 hover:underline underline-offset-4 hover:text-orange transition-all ease-in duration-300"
              href="/"
            >
              <span>More on Our Facebook</span>
              <BsArrowRight />
            </a>
          </div>

          {/* cards */}
          <div className="lg:w-2/3 my-8">
         

            {/* blog cards */}
            <BlogCards />

            {/* <div className="w-full mx-auto relative ">
              <button className="lg:absolute right-0 mt-8 px-6 py-2 bg-white text-black rounded hover:bg-orange hover:text-white transition-all duration-300 hover:-translate-y-3">
                Read More
              </button>
            </div> */}
          </div>
        </div>

        {/* shapes */}
        <div className="hidden lg:block">
          <div className="cs-shape_4"></div>
          <div className="cs-shape_4"></div>
        </div>
        <div className="lg:h-60 h-8"></div>
      </div>
    </div>
  );
};

export default Blogs;
