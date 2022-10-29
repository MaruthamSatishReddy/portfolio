import React from 'react';
import { motion } from 'framer-motion';

type Props = { directionLeft?: boolean };

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -10 : 10, opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-10 w-10 rounded-full border-gray-500 object-cover  xl:w-10 xl:h-10 filter group-hover:grayscale transition duration-300 ease-in-out"
        src="/images/java.jpg"
        alt=""
      />
      <div className="absolute opacity-0 group-hover:opacity-0 transition duration-300 ease-in-out group-hover:bg-white h-10 w-10 md:h-12 md:w-12 xl:h-10 xl:w-10 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-lg font-bold text-black opacity-300">100</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
