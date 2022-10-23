import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        src="/images/profile2.jpeg"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-56 md:h-56 xl:w-[500px] xl:h-[600px]"
      />
    </div>
  );
}

export default About;
