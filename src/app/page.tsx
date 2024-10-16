"use client";

import About from '@/components/home/About'
import Hero from '@/components/home/Hero'
import OurProject from '@/components/home/OurProject'
import OurService from '@/components/home/OurService'
import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";


const Home = () => {
  useEffect(()=>{
    AOS.init({
      easing: "ease-out-back",
      duration:1200,
      delay:100,
      mirror:false,
      anchorPlacement: "bottom-bottom",
      offset:50,
    });
    AOS.refresh();
  }, [])
  return (
   <main className="overflow-hidden"> 
   <Hero />
   <About />
   <OurService />
   <OurProject />
   </main>
  )
}

export default Home
