import React from 'react';

const Courses = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center p-4 text-center'>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-snug md:leading-tight lg:leading-[67.2px]'>
          Courses
        </h1>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl mt-2'>
          Your Ultimate Guide to Learning
        </p>
        <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
          <button className='px-4 py-2  text-black rounded-md'>Popular</button>
          <button className='px-4 py-2  text-black rounded-md'>Recommended</button>
          <button className='px-4 py-2  text-black rounded-md'>Best Price</button>
        </div>
      </div>
    </>
  );
};

export default Courses;
