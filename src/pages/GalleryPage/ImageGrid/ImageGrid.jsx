import React, { useState } from "react";
import img1 from "../../../../src/assets/watermarked-files/1.jpg";
import img2 from "../../../../src/assets/watermarked-files/2.jpg";
import img3 from "../../../../src/assets/watermarked-files/3.jpg";
import img4 from "../../../../src/assets/watermarked-files/4.jpg";

import img13 from "../../../../src/assets/watermarked-files/13.jpg";
import img14 from "../../../../src/assets/watermarked-files/14.jpg";
import img15 from "../../../../src/assets/watermarked-files/15.jpg";
import img16 from "../../../../src/assets/watermarked-files/16.jpg";
import img17 from "../../../../src/assets/watermarked-files/17.jpg";
import img18 from "../../../../src/assets/watermarked-files/18.jpg";
import img19 from "../../../../src/assets/watermarked-files/19.jpg";
import img20 from "../../../../src/assets/watermarked-files/20.jpg";
import img21 from "../../../../src/assets/watermarked-files/21.jpg";
import img22 from "../../../../src/assets/watermarked-files/22.jpg";
import img23 from "../../../../src/assets/watermarked-files/23.jpg";
import img24 from "../../../../src/assets/watermarked-files/24.jpg";
import img25 from "../../../../src/assets/watermarked-files/25.jpg";
import img26 from "../../../../src/assets/watermarked-files/26.jpg";
import img27 from "../../../../src/assets/watermarked-files/27.jpg";
import img28 from "../../../../src/assets/watermarked-files/28.jpg";
import img29 from "../../../../src/assets/watermarked-files/29.jpg";
import img30 from "../../../../src/assets/watermarked-files/30.jpg";
import img31 from "../../../../src/assets/watermarked-files/31.jpg";
import img32 from "../../../../src/assets/watermarked-files/32.jpg";
import img33 from "../../../../src/assets/watermarked-files/33.jpg";
import img34 from "../../../../src/assets/watermarked-files/34.jpg";
import img35 from "../../../../src/assets/watermarked-files/35.jpg";
import img36 from "../../../../src/assets/watermarked-files/36.jpg";
import img37 from "../../../../src/assets/watermarked-files/37.jpg";
import img38 from "../../../../src/assets/watermarked-files/38.jpg";
import img39 from "../../../../src/assets/watermarked-files/39.jpg";
import img40 from "../../../../src/assets/watermarked-files/40.jpg";
import img41 from "../../../../src/assets/watermarked-files/41.jpg";
import img42 from "../../../../src/assets/watermarked-files/42.jpg";
import img43 from "../../../../src/assets/watermarked-files/43.jpg";

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
        } grid mt-10 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6  transition-all duration-700`}
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
          src={img13}
          alt="Placeholder 13"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img14}
          alt="Placeholder 14"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img15}
          alt="Placeholder 15"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img16}
          alt="Placeholder 16"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img17}
          alt="Placeholder 17"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img18}
          alt="Placeholder 18"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img19}
          alt="Placeholder 19"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img20}
          alt="Placeholder 20"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img21}
          alt="Placeholder 21"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img22}
          alt="Placeholder 22"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img23}
          alt="Placeholder 23"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img24}
          alt="Placeholder 24"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img25}
          alt="Placeholder 25"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img26}
          alt="Placeholder 26"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img27}
          alt="Placeholder 27"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img28}
          alt="Placeholder 28"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img29}
          alt="Placeholder 29"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img30}
          alt="Placeholder 30"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img31}
          alt="Placeholder 31"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img32}
          alt="Placeholder 32"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img33}
          alt="Placeholder 33"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img34}
          alt="Placeholder 34"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img35}
          alt="Placeholder 35"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img36}
          alt="Placeholder 36"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img37}
          alt="Placeholder 37"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img38}
          alt="Placeholder 38"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img39}
          alt="Placeholder 39"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img40}
          alt="Placeholder 40"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img41}
          alt="Placeholder 41"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img42}
          alt="Placeholder 42"
          className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
        />
        <img
          src={img43}
          alt="Placeholder 43"
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

// import React, { useState } from "react";
// import { SlArrowDown } from "react-icons/sl";

// const ImageGrid = () => {
//   const [selected, setSelected] = useState(null);
//   const images = [];

//   // Dynamically import images that exist using a loop
//   for (let i = 1; i <= 43; i++) {
//     if (i >= 5 && i <= 12) {
//       continue; // Skip images 5 to 12
//     }
//     try {
//       const image =
//         require(`../../../../src/assets/watermarked-files/${i}.jpg`).default;
//       console.log(`Image ${i} imported successfully:`, image);
//       images.push(image);
//     } catch (error) {
//       console.error(`Failed to import image ${i}:`, error);
//     }
//   }

//   return (
//     <div className="">
//       <div
//         className={`relative overflow-hidden ${
//           selected === 1
//             ? "max-h-[1560px] lg:max-h-[1020px]"
//             : "md:max-h-36 max-h-52 lg:max-h-52 duration-700"
//         } grid mt-10 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6  transition-all duration-700`}
//       >
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Placeholder ${index + 1}`}
//             className="w-auto object-cover mx-auto h-52 md:h-36 lg:h-52 rounded-lg"
//           />
//         ))}
//       </div>

//       <div className="flex justify-center pt-6 my-4 border-black">
//         <button
//           type="button"
//           className="p-2 text-left"
//           onClick={() => setSelected(selected !== 1 ? 1 : null)}
//         >
//           <SlArrowDown
//             className={`text-3xl transition-transform  ${
//               selected ? "transform rotate-180 duration-700" : "duration-700 "
//             }`}
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageGrid;
