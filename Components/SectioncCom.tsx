import React from 'react';
import Image from 'next/image';

const SectioncCom = () => {
  return (
    <div className="flex bg-customGray py-20 px-16">
      <div className="py-10 px-16">
        <h5>Trusted by 2000+ companies worldwide.</h5>
      </div>
      <div className="flex items-center gap-5">
        <Image src="/airbnbLogo.png" alt="Airbnb Logo" width={123.8} height={38.52} />
        <Image src="/airbnbLogo1.png" alt="Airbnb Logo" width={123.8} height={38.52} />
        <Image src="/airbnbLogo2.png" alt="Airbnb Logo" width={123.8} height={38.52} />
        <Image src="/airbnbLogo3.png" alt="Airbnb Logo" width={123.8} height={38.52} />
        <Image src="/airbnbLogo4.png" alt="Airbnb Logo" width={123.8} height={38.52} />
        <Image src="/airbnbLogo5.png" alt="Airbnb Logo" width={123.8} height={38.52} />
      </div>
    </div>
  );
};

export default SectioncCom;
