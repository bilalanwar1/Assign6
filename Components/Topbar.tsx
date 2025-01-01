// components/Topbar.tsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const Topbar = () => {
  return (
    <div className="bg-gray-200 shadow-inner text-Black border border-b-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex space-x-4 font-normal leading-6 text-sm">
          <div className="flex items-center space-x-2">
            <span>Phone Number: 956 742 455 678  |</span>
          </div>
          <div className="flex items-center space-x-2 ">
            <span>Email:info@ddsgnr.com</span>
          </div>
        </div>
        <div className="flex space-x-4 text-black">
          <a href="#" className="text-black">
            <FaFacebookF />
          </a>
          <a href="#" className="text-black">
            <FaTwitter />
          </a>
          <a href="#" className="text-black">
            <FaInstagram />
          </a>
          <a href="#" className="text-black">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
