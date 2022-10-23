import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky flex items-start justify-between mx-w-6xl max-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://twitter.com/SatishR28027507"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://accounts.google.com/SatishMarutham"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://whatsapp.com/8867671633"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon network="email" fgColor="grey" bgColor="transparent" />
        <h1 className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </h1>
      </motion.div>
    </header>
  );
}

export default Header;
