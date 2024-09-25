import React from 'react';
import { gsap } from 'gsap';
import './Navbar.css'; 

const Navbar = () => {
  React.useEffect(() => {
    gsap.fromTo('.navbar', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
  }, []);

  return (
    <nav className="navbar bg-white shadow-md">
      <div className="flex text-center justify-center logo rounded-full bg-slate-100">
        <span className='w-20 h-20 text-center text-2xl text-green-800 font-serif pt-5'> COL </span>
      </div> 
      <div className="nav-links flex space-x-4 text-green-900">
        <a className='text-green-500 hover:text-green-700' href="#">Home</a>
        <a className='text-green-500 hover:text-green-700' href="#about">About</a>
        <a className='text-green-500 hover:text-green-700' href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
