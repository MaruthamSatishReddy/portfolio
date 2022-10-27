import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Skills({}: Props) {
  return (
    <div className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        src="/images/profile1.jpeg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-56 md:h-56 xl:w-[500px] xl:h-[600px]"
      />
    </div>
  );
}

export default Skills;
