import React from 'react';
import Image from 'next/image';


const About = () => {
  return (
    <section className='py-10'>
      <div className="container mx-auto px-4 xl:px-0">
        {/* Grid layout for the image and text */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Image Section */}
          <div className="border-[5px] border-blue-500">
            <Image
              src="/about.png" // Update this URL if your image is located elsewhere in public folder
              alt="About us"
              width={676} // Adjust width/height according to your design
              height={450}
              className="w-full h-auto"
              data-aos="flip-up"
            />
          </div>

          {/* Right: Text Section */}
          <div className="text-white" data-aos="flip-up">
            <h2 className="text-4xl font-bold mb-4" >About Us</h2>
            <p className="mb-6">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour.
            </p>
            <ul className="space-y-4">
              <li className="text-lg">
                <strong>User experience design –</strong> 
                <span className="text-gray-400"> UI/UX</span> {/* Light black (gray) text */}
                <br />
                <span className="text-gray-400">Delight the user and make it work.</span> {/* Light black (gray) text */}
              </li>
              <li className="text-lg">
                <strong>Web and user interface design –</strong> 
                <span className="text-gray-400"> Development Websites, web experiences</span> {/* Light black (gray) text */}
              </li>
              <li className="text-lg">
                <strong>Interaction design –</strong> 
                <span className="text-gray-400"> Animation I like to move it, move it.</span> {/* Light black (gray) text */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
