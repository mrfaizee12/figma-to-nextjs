import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] py-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Copyright Text */}
        <div className="text-white text-sm">
          Faizan Anjum &copy; Copyright 2024
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          {/* Facebook Icon */}
          <a href="https://www.facebook.com/faizan.anjum.7334" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/face.png" // Replace with your downloaded Facebook icon image path
              alt="Facebook"
              width={30} 
              height={30}
              className="hover:opacity-75"
            />
          </a>

          {/* Twitter Icon */}
          <a href="https://www.instagram.com/welcometofaizeecity/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/twitt.png" // Replace with your downloaded Twitter icon image path
              alt="Twitter"
              width={30} 
              height={30}
              className="hover:opacity-75"
            />
          </a>

          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/faizan-anjum-a044912b8/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/linkd.png" // Replace with your downloaded LinkedIn icon image path
              alt="LinkedIn"
              width={30} 
              height={30}
              className="hover:opacity-75"
            />
          </a>

          {/* Message Icon */}
          <a href="mailto:faizee956gmail.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/sent.png" // Replace with your downloaded Message icon image path
              alt="Send Message"
              width={30} 
              height={30}
              className="hover:opacity-75"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
