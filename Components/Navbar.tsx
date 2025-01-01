import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 text-white py-3 border-b-1 border-b-black-500 border-black font-roboto text-base font-normal leading-6 text-left">
      <div className="container mx-auto px-16 flex justify-between items-center">
        <div className="text-xl font-bold text-black"> 
          <Link href="/">
            <Image src="/Logo.png" alt="Logo" width={120} height={100} className="object-contain" />
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          {/* Navigation links container */}
          <div className="flex space-x-2 bg-white text-black rounded font-sans">
            <Link href="/" className="relative py-2 px-4 hover:underline flex items-center justify-center h-10">
              Home
            </Link>
            <Link href="/courses" className="relative py-2 px-4 hover:underline flex items-center justify-center h-10">
              Courses
            </Link>
            <Link href="/services" className="relative py-2 px-4 hover:underline flex items-center justify-center h-10">
              Services
            </Link>
            <Link href="/achievements" className="relative py-2 px-4 hover:underline flex items-center justify-center h-10">
              Achievements
            </Link>
            <Link href="/about-us" className="relative py-2 px-4 hover:underline flex items-center justify-center h-10">
              About Us
            </Link>
            <Link href="/testimonials" className="relative py-2 px-4 hover:underline flex items-center justify-center h-10">
              Testimonials
            </Link>
          </div>
          {/* Sign In/Sign Up buttons */}
          <div className="flex space-x-4">
            <Link href="/signin">
              <span className="bg-white text-black py-2 px-6 rounded border-black hover:bg-gray-200 border flex items-center justify-center h-10">
                Sign In
              </span>
            </Link>
            <Link href="/signup">
              <span className="bg-black text-white py-2 px-6 rounded hover:bg-gray-900 flex items-center justify-center h-10">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
