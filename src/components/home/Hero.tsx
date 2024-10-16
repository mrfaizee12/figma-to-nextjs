import Link from 'next/link';
import React from 'react';
import { Poppins, Passion_One, Inter } from 'next/font/google';

const fontPoppins = Poppins({ subsets: ['latin'], weight: '400' });
const fontPassionOne = Passion_One({ subsets: ['latin'], weight: '400' });
const fontInter = Inter({ subsets: ['latin'], weight: '700' });

const Hero = () => {
  return (
    <div className='py-[150px] bg-[url("/hero.png")] bg-cover bg-no-repeat bg-right flex items-center'>
      <div className='container mx-auto px-4'>
        {/* Adjusted size for the Welcome text */}
        <div className={`bg-gradient-to-r pl-12 from-[#c10505] to-[#045EE1] w-[300px] rounded-sm py-2 px-[15px] text-[16px] ${fontPoppins.className} mb-[20px]`} >
          Welcome to WEBDEVIndo
        </div>

        {/* Heading with adjusted size and spacing */}
        <h1 className={`text-[60px] leading-[65px] ${fontPassionOne.className} text-white mb-7`}>
          Professional WordPress <br /> And Frontend Developer
        </h1>

        {/* Hire me button */}
        <Link href="/contact">
          <button className={`mt-6 bg-blue-600 text-white py-3 px-8 rounded-lg text-lg ${fontInter.className} hover:bg-gradient-to-br from-[#045EE1] to-[#C10505]`}>
            Hire me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
