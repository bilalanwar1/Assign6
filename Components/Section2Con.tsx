import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const Section2Con = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 p-5">
        <div className='bg-gray-100 flex items-center p-5 gap-5 rounded-md'>
          <div className='w-[34px] h-[34px] bg-white rounded-[5px] flex items-center justify-center'>
            <Link href="#">
              <Image src="/pentool.png" alt="PEN Tool" width={32} height={32} className="object" />
            </Link>
          </div>
          <div>
            <h5 className='font-roboto font-semibold text-base leading-7'>Design & Development</h5>
            <p className='font-roboto text-base leading-6'>50+ Courses Available</p>
          </div>
        </div>
        <div className='bg-gray-100 flex items-center p-5 gap-5 rounded-md'>
          <div className='w-[34px] h-[34px] bg-white rounded-[5px] flex items-center justify-center'>
            <Link href="#">
              <Image src="/volume-high.png" alt="Volume High" width={32} height={32} className="object" />
            </Link>
          </div>
          <div>
            <h5 className='font-roboto font-semibold text-base leading-7'>Marketing</h5>
            <p className='font-roboto text-base leading-6'>50+ Courses Available</p>
          </div>
        </div>
        <div className='bg-gray-100 flex items-center p-5 gap-5 rounded-md'>
          <div className='w-[34px] h-[34px] bg-white rounded-[5px] flex items-center justify-center'>
            <Link href="#">
              <Image src="/group.png" alt="Group" width={32} height={32} className="object" />
            </Link>
          </div>
          <div>
            <h5 className='font-roboto font-semibold text-base leading-7'>Development</h5>
            <p className='font-roboto text-base leading-6'>50+ Courses Available</p>
          </div>
        </div>
        <div className='bg-gray-100 flex items-center p-5 gap-5 rounded-md'>
          <div className='w-[34px] h-[34px] bg-white rounded-[5px] flex items-center justify-center'>
            <Link href="#">
              <Image src="/microphone.png" alt="Microphone" width={32} height={32} className="object" />
            </Link>
          </div>
          <div>
            <h5 className='font-roboto font-semibold text-base leading-7'>Communication</h5>
            <p className='font-roboto text-base leading-6'>50+ Courses Available</p>
          </div>
        </div>
        <div className='bg-gray-100 flex items-center p-5 gap-5 rounded-md'>
          <div className='w-[34px] h-[34px] bg-white rounded-[5px] flex items-center justify-center'>
            <Link href="#">
              <Image src="/link.png" alt="Link" width={32} height={32} className="object" />
            </Link>
          </div>
          <div>
            <h5 className='font-roboto font-semibold text-base leading-7'>Digital Marketing</h5>
            <p className='font-roboto text-base leading-6'>50+ Courses Available</p>
          </div>
        </div>
        <div className='bg-gray-100 flex items-center p-5 gap-5 rounded-md'>
          <div className='w-[34px] h-[34px] bg-white rounded-[5px] flex items-center justify-center'>
            <Link href="#">
              <Image src="/arrow.png" alt="Arrow" width={32} height={32} className="object" />
            </Link>
          </div>
          <div>
            <h5 className='font-roboto font-semibold text-base leading-7'>Self Development</h5>
            <p className='font-roboto text-base leading-6'>50+ Courses Available</p>
          </div>
        </div>
        <div className='bg-gray-100 flex items-center p-5 gap-5 rounded-md'>
          <div className='w-[34px] h-[34px] bg-white rounded-[5px] flex items-center justify-center'>
            <Link href="#">
              <Image src="/briefcase.png" alt="Briefcase" width={32} height={32} className="object" />
            </Link>
          </div>
          <div>
            <h5 className='font-roboto font-semibold text-base leading-7'>Business</h5>
            <p className='font-roboto text-base leading-6'>50+ Courses Available</p>
          </div>
        </div>
        <div className='bg-gray-100 flex items-center p-5 gap-5 rounded-md'>
          <div className='w-[34px] h-[34px] bg-white rounded-[5px] flex items-center justify-center'>
            <Link href="#">
              <Image src="/nbook.png" alt="Notebook" width={32} height={32} className="object" />
            </Link>
          </div>
          <div>
            <h5 className='font-roboto font-semibold text-base leading-7'>Finance</h5>
            <p className='font-roboto text-base leading-6'>50+ Courses Available</p>
          </div>
        </div>
        <div className='bg-gray-100 flex items-center p-5 gap-5 rounded-md'>
          <div className='w-[34px] h-[34px] bg-white rounded-[5px] flex items-center justify-center'>
            <Link href="#">
              <Image src="/book.png" alt="Book" width={32} height={32} className="object" />
            </Link>
          </div>
          <div>
            <h5 className='font-roboto font-semibold text-base leading-7'>Consulting</h5>
            <p className='font-roboto text-base leading-6'>50+ Courses Available</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button className="px-6 py-2 border text-black rounded-md hover:bg-gray-300 transition">View All Courses</button>
      </div>
      
    </>
  );
};

export default Section2Con;
