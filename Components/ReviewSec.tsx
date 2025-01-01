import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ReviewSec = () => {
  return (
    <>
      <div className='bg-gray-100 p-6'>
        <div className='text-center mb-6'>
          <h2 className='text-2xl md:text-5xl'>Our Team</h2>
          <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-around'>
          <div className='flex flex-col items-center mb-6 md:mb-0'>
            <Link href="#">
              <Image src="/ImageR.png" alt="Stars" width={80} height={80} />
            </Link>
            <p className='text-lg font-semibold mt-2'>James Nduku</p>
            <p className='text-base mb-2'>Marketing Coordinator</p>
            <div className='flex gap-5'>
              <Link href="#">
                <Image src="/Social-Icons.png" alt="Social Icons" width={100} height={24} />
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center mb-6 md:mb-0'>
            <Link href="#">
              <Image src="/Image-R2.png" alt="Stars" width={80} height={80} />
            </Link>
            <p className='text-lg font-semibold mt-2'>Joseph Munyambu</p>
            <p className='text-base mb-2'>Nursing Assistant</p>
            <div className='flex gap-5'>
              <Link href="#">
                <Image src="/Social-Icons.png" alt="Social Icons" width={100} height={24} />
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center mb-6 md:mb-0'>
            <Link href="#">
              <Image src="/Image-R3.png" alt="Stars" width={80} height={80} />
            </Link>
            <p className='text-lg font-semibold mt-2'>Joseph Ngumbau</p>
            <p className='text-base mb-2'>Medical Assistant</p>
            <div className='flex gap-5'>
              <Link href="#">
                <Image src="/Social-Icons.png" alt="Social Icons" width={100} height={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* second */}
        <div className='flex flex-col md:flex-row justify-around mt-12'>
          <div className='flex flex-col items-center mb-6 md:mb-0'>
            <Link href="#">
              <Image src="/Image-R4.png" alt="Stars" width={80} height={80} />
            </Link>
            <p className='text-lg font-semibold mt-2'>Erick Kipkemboi</p>
            <p className='text-base mb-2'>Web Designer</p>
            <div className='flex gap-5'>
              <Link href="#">
                <Image src="/Social-Icons.png" alt="Social Icons" width={100} height={24} />
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center mb-6 md:mb-0'>
            <Link href="#">
              <Image src="/Image-R5.png" alt="Stars" width={80} height={80} />
            </Link>
            <p className='text-lg font-semibold mt-2'>Erick Kipkemboi</p>
            <p className='text-base mb-2'>President Of Sales</p>
            <div className='flex gap-5'>
              <Link href="#">
                <Image src="/Social-Icons.png" alt="Social Icons" width={100} height={24} />
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center mb-6 md:mb-0'>
            <Link href="#">
              <Image src="/Image-R6.png" alt="Stars" width={80} height={80} />
            </Link>
            <p className='text-lg font-semibold mt-2'>John Leboo</p>
            <p className='text-base mb-2'>Dog Trainer</p>
            <div className='flex gap-5'>
              <Link href="#">
                <Image src="/Social-Icons.png" alt="Social Icons" width={100} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewSec
