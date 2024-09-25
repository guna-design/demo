import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { gsap } from 'gsap';

const ParallaxSection = () => {
  useEffect(() => {
    gsap.fromTo('.parallax-content', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.5 });
  }, []);

  return (
    <Parallax
      bgImage="https://i.pinimg.com/736x/2e/3d/68/2e3d6845011de0d24c13dd1e1028a2ff.jpg" // Replace with a high-quality image URL
      strength={500}
    >
      <div style={{ height: 500 }}>
       
        <div className=" absolute parallax-content pb-10">
        <h1>demo website for Cpanel</h1>
        
        <div className=" relativeparallax-content text-orange-500">
        <h1>lets</h1>
        </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;
