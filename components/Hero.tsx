import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackGroundCircles from './BackGroundCircles';
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Hi This is Satish Reddy', 'Lakshmi Prasanna Reddy'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-cenetr overflow-hidden">
      <BackGroundCircles />
      <img
        src="/images/profile1.jpeg"
        className="rounded-full w-40 h-40 object-cover"
      />
      <div className="z-20">
        <h3 className="md:pl-[9rem] text-sm uppercase text-grey-500 pb-2 max-lg:pl-[9rem]">
          Software Engineer
        </h3>
        <div className="text-sm">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#workingexperience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
