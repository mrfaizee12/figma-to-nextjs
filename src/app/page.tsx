// Mark this as a Client Component
"use client"; 

import About from '@/components/home/About';
import Hero from '@/components/home/Hero';
import OurProject from '@/components/home/OurProject';
import OurService from '@/components/home/OurService';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <> 
      <Hero />
      <About />
      <OurService />
      <OurProject />
    </>
  );
}

export default Home;
