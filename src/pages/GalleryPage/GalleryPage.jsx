import React, { useState } from "react";
import ImageGrid from "./ImageGrid/ImageGrid";
import SectionIntro from "../AboutPage/SectionIntro";

const GalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container mx-auto py-40">
      <SectionIntro title="Visa:"></SectionIntro>
      <ImageGrid />
     
    </div>
  );
};

export default GalleryPage;
