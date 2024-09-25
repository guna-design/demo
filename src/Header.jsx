import React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import './Header.css'; // Create a new CSS file for styling
import Navbar from './Navbar';

const Header = () => {
  useEffect(() => {
    gsap.fromTo('.navbar', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
  }, []);

  return (
    <header>
     <Navbar/>
    </header>
  );
};

export default Header;
