import React from 'react';
import Image from 'next/image';
import bannerimg from 'public/bannerimg.png';

const Hero = () => {
  return (
    <div className="flex">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="text-center flex-1">
          <h1 className="text-[56px] font-bold leading-tight">
            Learn new skills <br /> online with ease
          </h1>
          <p className="text-[18px] mt-4">
            Discover a wide range of courses covering a variety of <br/> subjects, taught by expert instructors.
          </p>
          <div className="mt-8 space-x-4">
            <button className="px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">
              Start Learning
            </button>
            <button className="px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">
              Explore Courses
            </button>
          </div>
        </div>
        <div>
          <Image src="/bannerimg.png" alt="Hero Banner" width={640} height={900} className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
