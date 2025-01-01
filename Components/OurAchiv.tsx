import React from "react";
import { Roboto } from "next/font/google";

const OurAchiv = () => {
  return (
    <>
      <div className="container mx-auto p-5 max-w-screen-lg h-auto md:h-[262px]">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-roboto leading-snug md:leading-[57.6px]">
            Our Achievements
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-normal font-roboto leading-relaxed md:leading-[27px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl leading-7 sm:leading-8 md:leading-10 font-bold">+200</h3>
            <p className="text-sm sm:text-base md:text-lg font-roboto">Courses</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl leading-7 sm:leading-8 md:leading-10 font-bold">+50K</h3>
            <p className="text-sm sm:text-base md:text-lg font-roboto">Mentor</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl leading-7 sm:leading-8 md:leading-10 font-bold">+370K</h3>
            <p className="text-sm sm:text-base md:text-lg font-roboto">Students</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl leading-7 sm:leading-8 md:leading-10 font-bold">100+</h3>
            <p className="text-sm sm:text-base md:text-lg font-roboto">Recognition</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurAchiv;
