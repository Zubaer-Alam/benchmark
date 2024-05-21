import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsApp = () => {
  return (
    <div className="fixed z-50 bottom-5 right-6 duration-300">
      <a
        className="bg-green-600  h-14 w-14 text-white flex items-center justify-center gap-2 text-3xl rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-white hover:font-bold active:scale-105 transition cursor-pointer "
        href="https://wa.me/8801537412382?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20career%20development%20and%20education%20consultancy%20services."
        target="_blank"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsApp;
