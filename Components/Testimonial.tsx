import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const Testimonial = () => {
  return (
    <>
      <div className="w-full py-2 px-4">
        <h2 className="text-2xl md:text-5xl font-bold font-roboto">
          Customer testimonials
        </h2>
        <p className="text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        {/* First testimonial */}
        <div className="w-full md:w-[416px] border border-spacing-1 p-4 ">
          <Link href="#">
            <Image
              src="/Stars.png"
              alt="Stars"
              width={116}
              height={18}
              className="mx-auto mb-4"
            />
          </Link>
          <p className="mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare."
          </p>
          <div className="flex justify-center items-center">
            <Link href="#">
              <Image
                src="/Image-R2.png"
                alt="User"
                width={56}
                height={56}
                className="object gap-4 mr-4 rounded-full"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h2 className="text-base font-semibold">James Nduku</h2>
              <p className="text-sm">Software Developer</p>
            </div>
          </div>
        </div>

        {/* Second testimonial */}
        <div className="w-full md:w-[416px] border border-spacing-1 p-4 ">
          <Link href="#">
            <Image
              src="/Stars.png"
              alt="Stars"
              width={116}
              height={18}
              className="mx-auto mb-4"
            />
          </Link>
          <p className="mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare."
          </p>
          <div className="flex justify-center items-center">
            <Link href="#">
              <Image
                src="/ImageR.png"
                alt="User"
                width={56}
                height={56}
                className="object gap-4 mr-4 rounded-full"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h2 className="text-base font-semibold">James Nduku</h2>
              <p className="text-sm">Software Developer</p>
            </div>
          </div>
        </div>

        {/* Third testimonial */}
        <div className="w-full md:w-[416px] border border-spacing-1 p-4">
          <Link href="#">
            <Image
              src="/Stars.png"
              alt="Stars"
              width={116}
              height={18}
              className="mx-auto mb-4"
            />
          </Link>
          <p className="mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare."
          </p>
          <div className="flex justify-center items-center">
            <Link href="#">
              <Image
                src="/Image-R6.png"
                alt="User"
                width={56}
                height={56}
                className="object gap-4 mr-4 rounded-full"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h2 className="text-base font-semibold">James Nduku</h2>
              <p className="text-sm">Software Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
