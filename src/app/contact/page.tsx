"use client";

import Image from "next/image";

const Contact = () => {
  return (
    <section className="py-16 bg-black text-white border-t-4 pt-10 border-red-500">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0" data-aos="zoom-in" >
          <Image
            src="/contact/contact.png"
            alt="Contact Image"
            width={590}
            height={728}
            className="rounded-lg"
          />
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 bg-gray-900 p-8 rounded-lg shadow-lg" data-aos="zoom-in">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="mb-8">Drop me an email, give me a call, or send me a message by submitting the form.</p>
          
          {/* Form */}
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            
            {/* Message */}
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="w-full p-3 h-32 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Send Me
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
