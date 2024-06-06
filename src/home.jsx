import React from 'react';
import FourthSection from './FourthSection';
import SixSession from './sisxsesion';
import HeroSection from './herosection';
import SecondSection from './secondsection';
import FifthSection from './fifthSection';
import Reviews from './Reviews';

const Home = ({ formateurRef, animateButton }) => {
  return (
    <div>
      <HeroSection />
      <FourthSection />
      <SecondSection />
      <FifthSection />
      <SixSession ref={formateurRef} animateButton={animateButton} />
      <Reviews/>
    </div>
  );
};

export default Home;
