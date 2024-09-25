import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { gsap } from 'gsap';

const AnimatedText = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } });

  useEffect(() => {
    gsap.fromTo('.animated-text', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
  }, []);

  return (
    <animated.h2 className="animated-text" style={props}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur eum hic quibusdam molestias excepturi consequuntur nam voluptates quaerat, qui illum dolorum ex asperiores, voluptate dolor numquam odit fugiat nulla.
    </animated.h2>
  );
};

export default AnimatedText;
