import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion"
const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);

 useEffect(() => {
  fetch("postData.json")
  .then((res) => res.json())
  .then((data) => setBlogs(data));
 }, [])

 const PreviewAnimation = {
    initial: {
      y:30,
      opacity: 0,
      scale: 0.9
    },
    animate: {
      y:0,
      opacity: 1,
      scale: 1,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.8,
      }
    }
  }
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'> 
            {
                blogs.map(blog => <motion.div
                    key={blog.id}
                    className="overflow-hidden bg-cover rounded-lg cursor-pointer  group h-96 lg:h-72 "
                    style={{
                      backgroundImage: `url(${blog.image})`
                    }}
                    initial="initial"
                    whileInView="animate"
                    variants={PreviewAnimation}
                  >
                    <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700  backdrop-blur-sm bg-gray-800/60 opacity-0 group-hover:opacity-100 text-center space-y-5">
                      <h2 className="text-xl font-semibold text-white tracking-wide capitalize">
                        {blog?.title}
                      </h2>
                  <div className= 'opacity-0 group-hover:opacity-100'>
                  <div>
                     <span className="text-blue-400 uppercase "> Instructor : </span>
                      <span className='ml-2 text-white'> {blog?.authorName}</span>
                     </div>
                  </div>
                    </div>
                  </motion.div>)
            }
        </div>
  );
};

export default BlogCards;
