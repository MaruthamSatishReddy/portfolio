import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ x: 0 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly max-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-sm">Here is Satish Marutham</h4>
        <p className="text-xs">
          To be a member of an organization where growth prospects are unlimited
          and individual is recognized by his work. As a professional I am
          creative, innovative and looking ahead to work in a challenging
          environment and strive for excellence.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
