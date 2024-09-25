import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Header from './Header';
import ParallaxSection from './ParallaxSection';
import AnimatedText from './AnimatedText';
import Footer from './Footer';


const App = () => {
  useEffect(() => {
    gsap.fromTo('.content', { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div>
      <Header />
      <ParallaxSection />
      <div className="content" style={{ textAlign: 'center', padding: '50px' }}>
        <AnimatedText />
      </div>
      <Footer />
    </div>
  );
};

export default App;
