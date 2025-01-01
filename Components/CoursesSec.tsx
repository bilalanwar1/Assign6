import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CoursesSec = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className='w-[416px] h-[534px] p-4 bg-white border border-gray-200 rounded-lg'>
          <Link href="#"> 
            <Image src="/Image-7.png" alt="Design" width={416} height={300} className="object-cover" />
          </Link>
          <div className='flex items-center justify-between mt-4'>
            <p className='text-lg font-semibold'>Design</p>
            <Link href="#"> 
              <Image src="/Star.png" alt="Stars" width={24} height={34} />
            </Link>
          </div>
          <div className='mt-4'>
            <h5 className='text-xl font-bold'>UX/UI Design 201</h5>
            <p className='text-base text-gray-600 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>Enroll</button>
            <p className='text-lg font-semibold'>$400</p>
          </div>
        </div>
        
        <div className='w-[416px] h-[534px] p-4 bg-white border border-gray-200 rounded-lg'>
          <Link href="#"> 
            <Image src="/Image-1.png" alt="Design" width={416} height={300} className="object-cover" />
          </Link>
          <div className='flex items-center justify-between mt-4'>
            <p className='text-lg font-semibold'>Programming</p>
            <Link href="#"> 
              <Image src="/Star.png" alt="Stars" width={24} height={34} />
            </Link>
          </div>
          <div className='mt-4'>
            <h5 className='text-xl font-bold'>Introduction To Python</h5>
            <p className='text-base text-gray-600 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>Enroll</button>
            <p className='text-lg font-semibold'>$400</p>
          </div>
        </div>

        <div className='w-[416px] h-[534px] p-4 bg-white border border-gray-200 rounded-lg'>
          <Link href="#"> 
            <Image src="/Image-2.png" alt="Design" width={416} height={300} className="object-cover" />
          </Link>
          <div className='flex items-center justify-between mt-4'>
            <p className='text-lg font-semibold'>Business</p>
            <Link href="#"> 
              <Image src="/Star.png" alt="Stars" width={24} height={34} />
            </Link>
          </div>
          <div className='mt-4'>
            <h5 className='text-xl font-bold'>Data Analysis for Beginners</h5>
            <p className='text-base text-gray-600 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>Enroll</button>
            <p className='text-lg font-semibold'>$400</p>
          </div>
        </div>

        <div className='w-[416px] h-[534px] p-4 bg-white border border-gray-200 rounded-lg'>
          <Link href="#"> 
            <Image src="/Image-3.png" alt="Design" width={416} height={300} className="object-cover" />
          </Link>
          <div className='flex items-center justify-between mt-4'>
            <p className='text-lg font-semibold'>Art</p>
            <Link href="#"> 
              <Image src="/Star.png" alt="Stars" width={24} height={34} />
            </Link>
          </div>
          <div className='mt-4'>
            <h5 className='text-xl font-bold'>Art Specialization</h5>
            <p className='text-base text-gray-600 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>Enroll</button>
            <p className='text-lg font-semibold'>$400</p>
          </div>
        </div>

        <div className='w-[416px] h-[534px] p-4 bg-white border border-gray-200 rounded-lg'>
          <Link href="#"> 
            <Image src="/Image-5.png" alt="Design" width={416} height={300} className="object-cover" />
          </Link>
          <div className='flex items-center justify-between mt-4'>
            <p className='text-lg font-semibold'>Law</p>
            <Link href="#"> 
              <Image src="/Star.png" alt="Stars" width={24} height={34} />
            </Link>
          </div>
          <div className='mt-4'>
            <h5 className='text-xl font-bold'>Rule of Law</h5>
            <p className='text-base text-gray-600 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>Enroll</button>
            <p className='text-lg font-semibold'>$400</p>
          </div>
        </div>

        <div className='w-[416px] h-[534px] p-4 bg-white border border-gray-200 rounded-lg'>
          <Link href="#"> 
            <Image src="/Image-6.png" alt="Design" width={416} height={300} className="object-cover" />
          </Link>
          <div className='flex items-center justify-between mt-4'>
            <p className='text-lg font-semibold'>Tech</p>
            <Link href="#"> 
              <Image src="/Star.png" alt="Stars" width={24} height={34} />
            </Link>
          </div>
          <div className='mt-4'>
            <h5 className='text-xl font-bold'>Introduction To Webflow</h5>
            <p className='text-base text-gray-600 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>Enroll</button>
            <p className='text-lg font-semibold'>$400</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursesSec;
