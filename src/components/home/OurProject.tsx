import React from 'react';
import Image from 'next/image';

const OurProject = () => {
  return (
    <section className='py-16 bg-[#080808]'>
      <div className="container mx-auto px-4 2xl:px-0" data-aos="zoom-in">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold text-white">Our Latest Project</h2>
        <p className="text-center max-w-[514px] mx-auto text-gray-400 mt-4">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-12 gap-[21px] mt-[29px]'data-aos="zoom-in">
          {/* First Project (left, bigger one) */}
          <div className="col-span-5 md:col-span-5" >
            <Image 
              src="/project0.png" 
              alt="Project 1"
              width={500} // Adjust as needed
              height={350} // Adjust as needed
              className="rounded-lg"
              data-aos="zoom-in"
            />
          </div>

          {/* Second Project (right, bigger one) */}
          <div className="col-span-7 md:col-span-7">
            <Image 
              src="/project1.png" 
              alt="Project 2"
              width={700} // Adjust as needed
              height={350} // Adjust as needed
              className="rounded-lg"
              data-aos="zoom-in"
            />
          </div>

          {/* Third Project (left, smaller one) */}
          <div className="col-span-7 md:col-span-7">
            <Image 
              src="/project2.png" 
              alt="Project 3"
              width={700} // Adjust as needed
              height={350} // Adjust as needed
              className="rounded-lg"
              data-aos="zoom-in"
            />
          </div>

          {/* Fourth Project (right, smaller one) */}
          <div className="col-span-5 md:col-span-5">
            <Image 
              src="/project3.png" 
              alt="Project 4"
              width={500} // Adjust as needed
              height={350} // Adjust as needed
              className="rounded-lg"
             data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProject;
