import React, { useState } from "react";
import img1 from "../../../../src/assets/watermarked-files/img1.jpg";
import img2 from "../../../../src/assets/watermarked-files/img2.jpg";
import img3 from "../../../../src/assets/watermarked-files/img3.jpg";
import img4 from "../../../../src/assets/watermarked-files/img4.jpg";
import img5 from "../../../../src/assets/watermarked-files/img5.jpg";
import img6 from "../../../../src/assets/watermarked-files/img6.jpg";
import img7 from "../../../../src/assets/watermarked-files/img7.jpg";
import img8 from "../../../../src/assets/watermarked-files/img8.jpg";
import img9 from "../../../../src/assets/watermarked-files/img9.jpg";
import img10 from "../../../../src/assets/watermarked-files/img10.jpg";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const ImageGrid = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="">
      <div
        className={`relative overflow-hidden ${
          selected === 1
            ? "max-h-[1560px] lg:max-h-[1020px]"
            : "md:max-h-36 max-h-52 lg:max-h-52 duration-700"
        } grid mt-10 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4  transition-all duration-700`}
      >
        <img
          src={img1}
          alt="Placeholder 1"
          className="w-auto object-cover mx-auto  h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img2}
          alt="Placeholder 2"
          className="w-auto object-cover mx-auto  h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img3}
          alt="Placeholder 3"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img4}
          alt="Placeholder 4"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />

        <img
          src={img5}
          alt="Placeholder 5"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img6}
          alt="Placeholder 6"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img7}
          alt="Placeholder 7"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img8}
          alt="Placeholder 8"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img9}
          alt="Placeholder 9"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img10}
          alt="Placeholder 10"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
      </div>

      <div className="flex justify-center pt-6 my-4 border-black">
        <button
          type="button"
          className="  p-2 text-left"
          onClick={() => setSelected(selected !== 1 ? 1 : null)}
        >
          <SlArrowDown
            className={`text-3xl transition-transform  ${
              selected ? "transform rotate-180 duration-700" : "duration-700 "
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ImageGrid;
