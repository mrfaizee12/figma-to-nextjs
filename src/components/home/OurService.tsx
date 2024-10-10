import React from 'react';
import Image from 'next/image';

const OurService = () => {
  return (
    <section className='py-16 bg-[#0F0F0F]'>
      <div className="container mx-auto px-4 xl:px-0">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Our Awesome Service</h2>
          <p className="text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-[#151515] p-6 rounded-lg">
            <Image
              src="/wordpress.png" // Replace with your actual image path
              alt="WordPress Theme"
              width={50}
              height={50}
            />
            <h3 className="text-2xl text-white font-semibold mt-4 mb-2">Build WordPress Theme</h3>
            <p className="text-gray-400">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#151515] p-6 rounded-lg">
            <Image
              src="/react.png" // Replace with your actual image path
              alt="Figma to Next.js"
              width={50}
              height={50}
            />
            <h3 className="text-2xl text-white font-semibold mt-4 mb-2">Figma to Next.js</h3>
            <p className="text-gray-400">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-[#151515] p-6 rounded-lg">
            <Image
              src="/html.png" // Replace with your actual image path
              alt="Figma to HTML5"
              width={50}
              height={50}
            />
            <h3 className="text-2xl text-white font-semibold mt-4 mb-2">Figma to HTML 5</h3>
            <p className="text-gray-400">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-[#151515] p-6 rounded-lg">
            <Image
              src="/laravel.png" // Replace with your actual image path
              alt="Laravel Project"
              width={50}
              height={50}
            />
            <h3 className="text-2xl text-white font-semibold mt-4 mb-2">Laravel Project</h3>
            <p className="text-gray-400">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-[#151515] p-6 rounded-lg">
            <Image
              src="/customize.png" // Replace with your actual image path
              alt="Customize Website"
              width={50}
              height={50}
            />
            <h3 className="text-2xl text-white font-semibold mt-4 mb-2">Customize Website</h3>
            <p className="text-gray-400">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-[#151515] p-6 rounded-lg">
            <Image
              src="/js.png" // Replace with your actual image path
              alt="React JS App"
              width={50}
              height={50}
            />
            <h3 className="text-2xl text-white font-semibold mt-4 mb-2">React JS App</h3>
            <p className="text-gray-400">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
