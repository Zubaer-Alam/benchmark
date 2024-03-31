import React from "react";
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

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
      <img
        src={img1}
        alt="Placeholder 1"
        className="w-full h-auto rounded-lg"
      />
      <img
        src={img2}
        alt="Placeholder 2"
        className="w-full h-auto rounded-lg"
      />
      <img
        src={img3}
        alt="Placeholder 3"
        className="w-full h-auto rounded-lg"
      />
      <img
        src={img4}
        alt="Placeholder 4"
        className="w-full h-auto rounded-lg"
      />
      <img
        src={img5}
        alt="Placeholder 5"
        className="w-full h-auto rounded-lg"
      />
      <img
        src={img6}
        alt="Placeholder 6"
        className="w-full h-auto rounded-lg"
      />
      <img
        src={img7}
        alt="Placeholder 7"
        className="w-full h-auto rounded-lg"
      />
      <img
        src={img8}
        alt="Placeholder 8"
        className="w-full h-auto rounded-lg"
      />
      <img
        src={img9}
        alt="Placeholder 9"
        className="w-full h-auto rounded-lg"
      />
      <img
        src={img10}
        alt="Placeholder 10"
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
};

export default ImageGrid;